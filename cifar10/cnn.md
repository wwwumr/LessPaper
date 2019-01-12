cifar10的CNN模型相关的知识
==================================
# 相关函数
## tf.nn.conv2d
<b>tf.nn.conv2d(input,filter,stride,padding,use_cudnn_on_gpu=None,name=None)</b>
>input:输入卷积的图像 Tensor=[batch,in_height,in_width,in_channels]<br></br>
>batch:每次输入一个batch的图片数量<br></br>
>in_height,in_width:图像的宽度和高度<br></br>
>in_channels:图像通道<br></br>
>filter:CNN的卷积核 Tensor=[filter_height,filter_width,in_channels,out_channels]
 >>   filter_height,filter_width:卷积核的高度和宽度<br></br>
 >>   in_input:相当于input<br></br>
 >
>strides:卷积时在图像每一维的步长，Tensor=[a,b,c,d]<br></br>
>padding:string类型'SAME'和'VALID'<br></br>
>use_cudnn_gpu:是否要加速<br></br>
## tf.nn.relu()
>该函数是将每行中将大于0的保持，非大于0的设置为0.相当于近似生物神经的激活函数。
>相关链接：https://blog.csdn.net/zj360202/article/details/70256494
## tf.truncated_normal
>从截短的正态分布中输出随机值
## tf.nn.add_to_bias
>相关链接：https://www.jianshu.com/p/055c487b6d08
## tf.nn.lrn
>局部归一化层，用于负反馈。
>相关链接：https://blog.csdn.net/hduxiejun/article/details/70570086

tf.reshape:[size,-1]的意思是根据实际情况进行reshape
tf.cast：类型转化

## tf.reduce_mean:tf.reduce_mean 
>函数用于计算张量tensor沿着指定的数轴（tensor的某一维度）上的的平均值，主要用作降维或者计算tensor（图像）的平均值。
>相关链接：https://blog.csdn.net/dcrmg/article/details/79797826
## tf.nn.sparse_softmax_cross_entropy_with_logits（）
相关链接：https://blog.csdn.net/ZJRN1027/article/details/80199248c

##tf.add_n，tf.get_collection tf.add_n:
>相关链接：https://blog.csdn.net/daizongxue/article/details/78649712

## tf.nn.train.adamoptimizer(1e-3).minimize(loss)
> tensorflow 的优化加速器
## tf.nn.in_top_k()
>输出topk的准确度
## tf.train.start_queue_runners()
> tf中的多线程。
#相关概念
# tf中的多线程
>相关链接https://www.jianshu.com/p/d063804fb272

# 卷积核
>在图像处理过程中，输出的图像中的每一个像素是输入图像中的一个区中像素的加权平均
相关链接：https://www.cnblogs.com/qggg/p/6832342.html

# L2范式：欧式距离
>tf.nn.l2_loss: sum(t^2)/2
#损失运算
>两个张量之间或者是张量与0之间的误差。可以测量回归任务中的网络的精确度，或者是正则化的权重衰减
# 正则表达式:
>相关链接：https://www.cnblogs.com/jianxinzhou/p/4083921.html
# 卷积层和池化层：
>相关链接：https://www.cnblogs.com/jyxbk/p/7879834.html
# softmax
相关链接：https://blog.csdn.net/bitcarmanlee/article/details/82320853
相关链接：https://blog.csdn.net/u014380165/article/details/77284921