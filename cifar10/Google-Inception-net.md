# Google Inception Net
## 相关知识点
- Inception V1 有22层深度，进行15亿次浮点数运算，500万的参数量。参数量远远低于AlexNet，但是准确率却。
- 使用这个模型的原因
> 参数越多的的模型规模就越大，需要的数据量就越大；参数越多耗费的计算资源就会越多
> 模型的层数很深
> 用全局平均池化层来代替全连通层，以减少过拟合。因为全连通层使用的参数量占了alexnet的参数量的90%，这里借鉴了Networkin Network
- inception module的特点就是利用inception module 来组合形成大的神经网络
- NIN的思想：
> 相关链接：https://www.cnblogs.com/makefile/p/nin.html
- element-wise
> https://blog.csdn.net/u012609509/article/details/70230204/
- MLP多层感知机制
> 允许在输出通道之间组合，从而减少计算量和过拟合
> https://www.cnblogs.com/kexianting/p/8516899.html
- Inception module 的基本结构
> 1x1卷积核的作用：https://blog.csdn.net/wonengguwozai/article/details/72980828
> 在补充一点：1x1卷积层可以用很小的计算量就实现增加一层特征变换和非线性化。
> 与multi-Scale的思想相似，使用不同的尺度的卷积层可以让网络对不同的尺度的适应性
- 稀疏连接
> Inception Net的目的就是建立起最优的稀疏结构单元
> https://blog.csdn.net/hellocsz/article/details/80766845
> 使用1x1,2x2,5x5的卷积所连接的节点的相关行很高，原理是在相同的位置上的不同通道的输出结果的相关性很高。
> 由于inception module的相互组合在一起的话，在后面的inception module应该要捕捉更加高阶的抽象特征，所以其空间的集中度应该下降，3x3,5x5的卷积核的比重上升。
> 使用了辅助分类节点，做了模式融合。
- Inception V2 使用了Batch Normalization，从而简化了网络结构
> https://www.cnblogs.com/guoyaohua/p/8724433.html
- inception v2的几种改造方法
> 1.去除dropout并减轻L2正则化
> 2.去除LRN
> 3.对训练样本进行shuffle
- inception v3
> factorization into small convolutions
> 卷积神经网络从输入到输出，让图片的尺寸逐渐减少，输出通道逐渐增加，从而将空间信息转化为高阶抽象信息。
> 
- tensorflow.contrib
> https://blog.csdn.net/yzxnuaa/article/details/79740241
- weight decay
> https://blog.csdn.net/wfei101/article/details/80633934
- BN
> m = K.mean(X, axis=-1, keepdims=True)#计算均值<br></br>
> std = K.std(X, axis=-1, keepdims=True)#计算标准差<br></br>
> X_normed = (X - m) / (std + self.epsilon)#归一化<br></br>
> out = self.gamma * X_normed + self.beta#重构变换
