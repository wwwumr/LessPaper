# train set has 550000 samples,test set has 5000 samples,which each one has a label to show what it is
# picture is 28*28piexl each piexl have the value from 0 to 1,so each piexl have 784 dimensions
# our training set is [55000,784] tensor,our label is [550000,10] tensor only one is 1,others are 0 
from tensorflow.examples.tutorials.mnist import input_data
mnist = input_data.read_data_sets("MINIST_data/",one_hot=True)
# using softmax regression ,we only choose the max possiblity of digital.CNN's classification also uses softmax
import tensorflow as tf
sess = tf.InteractiveSession()
# [None,784] unlimited rows,but each rows has 784 elements
x = tf.placeholder(tf.float32,[None,784]) 
# Variable let the W,b always in the loading memory 
# because the net can choose the weights and bias itself,so the initializing the weights and bias is not important
W = tf.Variable(tf.zeros([784,10]))
b = tf.Variable(tf.zeros([10]))
# implementing the softmax regression
# tensorflow can implemente the forward and backward itself,if we use loss,it can itself implement the gradient descent when training
y = tf.nn.softmax(tf.matmul(x,W)+b)
# loss function show difference between predictation and actual value,the return value is less,more precise,the value
# should let the net of loss global optimal and local optimal
# cross-entroy for classifaction problems 
y_ = tf.placeholder(tf.float32,[None,10])
# tf.reduce_mean([a,b],[1]) output is [a]
cross_entropy = tf.reduce_mean(-tf.reduce_sum(y_*tf.log(y),reduction_indices=[1]))
# SGD: Stochastic Gradient Descent https ://www.cnblogs.com/pinard/p/5970503.html
# learning rate = 0.5 and optimizing target is cross_entropy
train_step = tf.train.GradientDescentOptimizer(0.5).minimize(cross_entropy)
tf.global_variables_initializer().run()
# training the CNN net
for i in range(1000):
    batch_xs,batch_ys = mnist.train.next_batch(100)
    train_step.run({x: batch_xs,y_:batch_ys})
# tf.argmax find the max argument position in the y
correct_prediction = tf.equal(tf.argmax(y,1),tf.argmax(y_,1))
# tf.cast convert element from bool to float32
accuracy = tf.reduce_mean(tf.cast(correct_prediction,tf.float32))
print(accuracy.eval({x:mnist.test.images,y_:mnist.test.labels}))
