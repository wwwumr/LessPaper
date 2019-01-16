import tensorflow as tf
from tensorflow.examples.tutorials.mnist import input_data
# Scikit-learn preprocessing
import sklearn.preprocessing as prep
import numpy as np
# xavier initialization: initialize the weights,which has the proper value for the net
# U-[a,b] D(x)=(b-a)^2/12
# We form the [-sqrt(6/(b-a)),sqrt(6/(b-a))] to satisfy the need above
# fan_in: input-op number,fan_out:output-op number
def xavier_init(fan_in,fan_out,constant=1):
    low = -constant*np.sqrt(6.0/(fan_in+fan_out))
    high = constant*np.sqrt(6.0/(fan_in+fan_out))
    # make a array that is fan_in*fan_out,each elements is between[low,high]
    return tf.random_uniform((fan_in,fan_out),minval = low,maxval = high,dtype = tf.float32)

class AdditiveGaussianNoiseAutoencoder(object):
# n_input is input variable number,n_hidden: hidden layer node number,transfer_function:activate function,scale:gaussian noise
# _initialize_weights initialize the netweights
    def __init__(self,n_input,n_hidden,transfer_function=tf.nn.softplus,optimizer = tf.train.AdamOptimizer(),scale=0.1):
        self.n_input=n_input
        self.n_hidden = n_hidden
        self.transfer = transfer_function
        self.scale = tf.placeholder(tf.float32)
        self.training_scale = scale
        network_weights = self._initialize_weights()
        self.weights = network_weights
        self.x = tf.placeholder(tf.float32,[None,n_input])
# self.x+scale*tf.random_normal((n_input,)) input+noise
        self.hidden = self.transfer(tf.add(tf.matmul(self.x+scale*tf.random_normal((n_input,)),self.weights['w1']),self.weights['b1']))
# reconstruction input and output the value
        self.reconstruction = tf.add(tf.matmul(self.hidden,self.weights['w2']),self.weights['b2'])
# squared Error
        self.cost = 0.5*tf.reduce_sum(tf.pow(tf.subtract(self.reconstruction,self.x),2.0))
        self.optimizer = optimizer.minimize(self.cost)
        init = tf.global_variables_initializer()
        self.sess = tf.Session()
        self.sess.run(init)
    def _initialize_weights(self):
        all_weights =dict()
# all_weights['w1']:U(a,b) distributed,which is proper for softplus
        all_weights['w1'] = tf.Variable(xavier_init(self.n_input,self.n_hidden))
# b1 bias set 0
        all_weights['b1'] = tf.Variable(tf.zeros([self.n_hidden],dtype=tf.float32))
# don't have the Activation function,so w2 weights set 0 and b2 set 0
        all_weights['w2'] = tf.Variable(tf.zeros([self.n_hidden,self.n_input],dtype=tf.float32))
        all_weights['b2'] = tf.Variable(tf.zeros([self.n_input],dtype=tf.float32))
        return all_weights
# cost of each batch training cost   
    def partial_fit(self,x):
        cost,opt = self.sess.run((self.cost,self.optimizer),feed_dict ={self.x:x,self.scale:self.training_scale})
        return cost
# cost of not training included
    def calc_total_cost(self,X):
        return self.sess.run(self.cost,feed_dict={self.x:X,self.scale:self.training_scale})
# output the higher order features    
    def transform(self,X):
        return self.sess.run(self.hidden,feed_dict={self.x:X,self.scale:self.training_scale})
# restoration input    
    def generate(self,hidden = None):
        if hidden is None:
            hidden = np.random.normal(size = self.weights['b1'])
        return self.sess.run(self.reconstruction,feed_dict = {self.hidden:hidden})
# Higher-order feature extraction and restoration
    def reconstruct(self,X):
        return self.sess.run(self.reconstruction,feed_dict={self.x:X,self.scale:self.training_scale})
# get w1 weights  
    def getWeights(self):
        return self.sess.run(self.weights['w1'])
# get b1 bias
    def getBiases(self):
        return self.sess.run(self.weights['b1'])
mnist = input_data.read_data_sets('MINIST_data',one_hot = True)
# X_train and X_test Standardization and normalization
def standard_scale(X_train,X_test):
    preprocessor = prep.StandardScaler().fit(X_train)
    X_train = preprocessor.transform(X_train)
    X_test = preprocessor.transform(X_test)
    return X_train,X_test
# Do not put back sampling
def get_random_block_data(data,batch_size):
    start_index = np.random.randint(0,len(data)-batch_size)
    return data[start_index:(start_index+batch_size)]
X_train,X_test = standard_scale(mnist.train.images,mnist.test.images)
n_samples = int(mnist.train.num_examples)
training_epochs = 20
batch_size = 128
display_step = 1
autoencoder = AdditiveGaussianNoiseAutoencoder(n_input=784,n_hidden=200,transfer_function=tf.nn.softplus,optimizer = tf.train.AdamOptimizer(learning_rate = 0.001),scale=0.01)
for epoch in range(training_epochs):
    avg_cost =0.0
    total_batch = int(n_samples/batch_size)
    for i in range(total_batch):
        batch_xs = get_random_block_data(X_train,batch_size)
        cost = autoencoder.partial_fit(batch_xs)
        avg_cost += cost/n_samples*batch_size
    if epoch %display_step ==0:
        print("Epoch:",'%04d'%(epoch+1),"cost=","{:.9f}".format(avg_cost))
# test Network total of cost
print("Total cost:"+str(autoencoder.calc_total_cost(X_test)))











