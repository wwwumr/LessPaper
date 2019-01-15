from datetime import datetime
import math
import time
import tensorflow as tf
batch_size = 32
num_batches = 100
# show the shape of the tensor
# t.get_shape().as_list() show the dimension of the tensor
def print_activations(t):
    print(t.op.name,' ',t.get_shape().as_list())

# input the images, output pool5(the fifth of  pool)and the parameters
# using 4-dimension to express the picture information
def inference(images):
    parameters = [] 
    # the first convolution layer
    # name_scope: like C++'s namespace
    with tf.name_scope('conv1')as scope:
        # convolution kernel's size = 11*11 and this color passageway has 3 and have 64 convolution kernel
        kernel = tf.Variable(tf.truncated_normal([11,11,3,64],dtype=tf.float32,stddev=1e-1),name='weights')
        #conv = [batch_size,heigth/4 up,width/4 up,convolution_num]
        # https ://www.cnblogs.com/lovepysics/p/7220111.html hint: comput the convolution layer 
        conv = tf.nn.conv2d(images,kernel,[1,4,4,1],padding='SAME')
        # form the tensor which shape is 1*64=[1,1,1,1,....,1]has 64 1 elements per line
        biases = tf.Variable(tf.constant(0.0,shape=[64],dtype=tf.float32),trainable=True,name='bias')
        # output shape = conv shape
        bias = tf.nn.bias_add(conv,biases)
        # output shape = bias shape
        conv1 = tf.nn.relu(bias,name=scope)
        print_activations(conv1)
        parameters+=[kernel,biases]
        # lrn1 shape = conv1 shape 
        # have some problems
        # depth_radius =4, bias =1.0,alpha =0.001/9,beta=0.75 alexnet's rendementation
        lrn1 = tf.nn.lrn(conv1,4,bias=1.0,alpha=0.001/9,beta=0.75,name='lrn1')
        # pool1 shape = [batch_size,(height-3)/2+1,(width-3)/2+1,convolution-kernel_size]
        pool1 = tf.nn.max_pool(lrn,ksize=[1,3,3,1],strides=[1,2,2,1],padding='VALID',name='pool1')
        print_activations(pool1)  
    with tf.name_scope('conv2')as scope:
        kernel1 = tf.Variable(tf.truncated_normal([5,5,64,192],dtype=tf.float32,stddev=1e-1),name='weights')
        conv = tf.nn.conv2d(pool1,kernel,[1,1,1,1],padding='SAME')
        bias = tf.Variable(tf.contant(0.0,shape=[192],dtype=tf.float32),trainable=True,name='biases')
        bias = tf.nn.bias_add(conv,biases)
        conv2 = tf.nn.relu(bias,name=scope)
        parameters += [kernel,biases]
        print_activations(conv2)
        lrn2 = tf.nn.lrn(conv2,4,bias=1.0,alpha=0.001/9,beta=0.75,name='lrn2')
        pool2 = tf.nn.max_pool(lrn2,ksize=[1,3,3,1],strides=[1,2,2,1],padding='VAILD',name='pool2')
        print_activations(pool2) 
    with tf.name_scope('conv3')as scope:
        kernel = tf.Variable(tf.truncated_normal([3,3,192,384],dtype=tf.float32,stddev=1e-1),name='SAME')
        conv = tf.nn.conv2d(pool2,kernel,[1,1,1,1],padding="SAME")
        biases = tf.Variable(tf/constant(0.0,shape=[384],dtype=tf.float32),trainable=True,name='biases')
        bias = tf.nn.bias_add(conv,biases)
        conv3 =  tf.nn.relu(bias,name=scope)
        paremeters += [kernel,biases]
    with tf.name_scope('conv4')as scope:
        kernel = tf.Variable(tf.truncated_normal([3,3,384,256],dtype=tf.float32,stddev=1e-1),name='weights')
        conv = tf.nn.conv2d(conv3,kernel,[1,1,1,1],padding='SAME')
        biases = tf.Variable(tf.constant(0.0,shape=[256],dtype=tf.float32),trainable=True,name='biases')
        bias = tf.nn.bias_add(conv,biases)
        conv4 = tf.nn.relu(bias,name=scope)
        parameters += [kernel,biases]
        print_activations(conv4)
    with tf.name_scope('conv5')as scope:
        kernel = tf.Variable(tf.truncated_normal([3,3,256,256],dtype=tf.float32,stddev=1e-1),name='weights')
        conv = tf.nn.conv2d(conv4,kernel,[1,1,1,1],padding="SAME")
        biases = tf.Variable(tf.constant(0.0,shape=[256],dtype=tf.float32),trainable=True,name='biases')
        bias = tf.nn.bias_add(conv,biases)
        conv5 = tf.nn.relu(bias,name=scope)
        parameters +=[kernel,biases]
        print_activations(conv5)
        pool5 = tf.nn.max_pool(conv5,ksize=[1,3,3,1],strides=[1,2,2,1],padding="VALID",name='pool5')
        print_activations(pool5)
    return pool5,parameters

# target is what we test operation factor
def time_tensorflow_run(session,target,info_string):
    #preheating the processure,exclude the memory loading and cache hitting influence
    num_steps_burn_in = 10
    # total time 
    total_duration = 0.0
    # sum of square
    total_duration_squared = 0.0 
    for i in range(num_batches+num_steps_burn_in):
        start_time = time.time()
        _ = session.run(target)
        duration = time.time()-start_time
        if i>= num_steps_burn_in:
            if not i%10:
                print('%s:step %d, duration = %.3f'%(datetime.now(),i-num_steps_burn_in,duration))
                total_duration += duration
                total_duration_squared += duration*duration
    mn = total_duration/num_batches
    vr = total_duration_squared/num_batches - mn*mn
    sd = math.sqrt(vr)
    print('%s:%s acorss %d steps,%.3f +/- %.3f sec/batch'%(datetime.now(),info_string,mn,sd))

def run_benchmark():
    with tf.Graph().as_default():
        image_size = 224
        images = tf.Variable(tf.random_normal([batch_size,image_size,image_size,3],dtype=tf.float32,stddev=1e-1))
        pool5,parameters = inference(images)
        init = tf.global_variables_initializer()
        sess = tf.Session()
        sess.run(init)
        time_tensorflow_run(sess,pool5,"Forward")
        objective = tf.nn.l2_loss(pool5)
        grad = tf.gradients(objective,parameters)
        # target = Net gradients
        time_tensorflow_run(sess,grad,"Forward-backward")

run_benchmark()
        
   













        