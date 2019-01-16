# 自编码器的相关知识
## 自编码器
> 自编码器是数据相关的，自编码器是有损的，自编码器是自我监督式的，而非无监督性的，自编码器是高阶特征来编码自己，使用稀疏编码
> 网址：https://blog.csdn.net/marsjhao/article/details/73480859
> ## 稀疏编码
> https://www.cnblogs.com/caocan702/p/5666175.html
> ## 自编码器的特点
> 1.q期望输入/输出一致
> 2.高阶特征来重构自己
## 自编码器的几种限制
- 限制中间隐含层节点的数量，如果让中间隐含层节点的数量小于输入输出节点就相当于降维的过程。这样的话，就是说将其中最重要的特征复原，不太相关的内容去掉。。可以使用L1正则表达式来控制节点的稀疏程度。
- 给数据加入噪音，从噪音中学习出数据的特征。只有学习数据频繁出现的模式和结构，才能将无规律的噪音略去，达到复原数据的目的
## Additive Gaussian Noise
> 使用masking noise，随机遮挡噪声。图像中的一部分像素被置为0，模型需要从其他像素的结构推断出这些被遮挡的像素是什么。
## 梯度弥散和激活函数饱和
> 相关链接：激活函数饱和：https://www.cnblogs.com/tangjicheng/p/9323389.html
> 梯度弥散：https://www.cnblogs.com/yangmang/p/7477802.html
## 无监督式的逐层训练
> 我们可能很难直接训练极深的网络，但是可以用无监督的逐层训练提取特征，将网络的权重初始化到一个比较合理的位置，这种思想与自编码器很相近
## 数据标准化/归一化
> 相关链接：https://blog.csdn.net/goodshot/article/details/79488629
## 高斯噪声
> 相关链接：https://www.cnblogs.com/Keven-Lee/p/6292438.html
## softplus
> 相关链接：https://blog.csdn.net/Suan2014/article/details/77162042
## 训练集合测试集的归一化
> 相关链接：http://www.cnblogs.com/volcao/p/9089716.html