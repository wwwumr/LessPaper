## ALexNet相关知识
# AlexNet的新的技术点：
- 用了RELU激活函数而不是sigmoid
> sigmoid 相当于生物学中的S曲线：值域在0-1之间，有很好的对称性，超过一定范围之后就不敏感了<br></br>
>相关链接：https://blog.csdn.net/u011684265/article/details/78039280<br></br>
>梯度下降：https://blog.csdn.net/qq_25737169/article/details/78847691<br></br>
> 反向传播算法：https://www.jianshu.com/p/964345dddb70<br></br>
- Dropout随机忽略一部分神经元
> 防止过度拟合<br></br>
> dropout也能达到同样的效果，它强迫一个神经单元，和随机挑选出来的其他神经单元共同工作，达到好的效果。消除减弱了神经元节点间的联合适应性，增强了泛化能力。<br></br>
> 相关链接：https://blog.csdn.net/dod_jdi/article/details/78379781
- 在CNN中使用重叠的最大池化层
> 可以有效的缩小尺寸，同时，可以减少最后的参数数量，同时防止过度拟合。
- 用CUDA加速深度卷积网络的训练
- 提出了LRN层，使用了竞争机制
- 数据增强
- 卷积层可以通过较少的参数量提取有效的特征，前几层的计算量比较小。
- tf.name_scope:https://www.cnblogs.com/adong7639/p/8136273.html
- sess.run()
- tf.nn.l2_loss
- tf.gradients：相关链接：https://blog.csdn.net/u012436149/article/details/53905797
- tf.bias_add(value,bias)
  > bias：一个一维的tensor，数据维度和value的最后一维相同，数据类型与value相同
  > 输出：Tensor，数据类型和value相同