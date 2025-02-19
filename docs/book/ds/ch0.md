# 第一章：概览

> 408 概念总结

## 基本概念

数据：数据是信息的**载体**，是描述客观事物属性的**数**，**字符**。能够输入到**计算机**中并被计算机程序**识别**和**处理**的符号的集合，计算机程序加工的原料。

站在计算机的角度来看，数据就是 0 / 1 。

数据元素：数据元素是数据的**基本单位**，通常作为一个**整体**进行考虑和处理。

数据项：数据元素由数据像组成，数据项是不可分割的最小单位。

> 以人为例，人是由身高，体重，性别属性组成。在这个例子中人是数据元素，而身高，体重，性别则是数据项。

数据结构：数据元素之间的**关系**。

数据对象：相同性质数据元素的集合。**数据的子集**。

## 三要素

逻辑结构，物理结构（存储结构），数据的运算。

### 逻辑结构

数据的逻辑结构分为**集合**，**线性结构**，**树形结构**，**图状结构（网状结构）**。

集合:各个元素同属一个集合，不存在其他关系。

线性结构：数据元素之间存在一对一的关系。除了第一个元素和最后一个元素之外，每一个元素都有唯一的前驱和唯一的后继。第一个元素有唯一后继，最后一个元素则有唯一前驱。

树：一对多的关系。

顺序存储在查找上方便，但是在增删上不方便。而链式存储在查找方面不方便但是在增删上方便。

而树结构综合了顺序存储和链式存储的，在查找，更新，插入，删除上都可以以 $O(logn)$ 实现。

从集合论的角度来定义树： n 个节点的有限集合，n = 0 时为空树，n > 0 时非空树并且需要满足两个条件：有且只有一个称为根的节点，出根节点以外的 m 个互不相交的有限集，每一个子集本身又是一颗树，称为子树。

以上是一个递归定义，用树的定义来套树。

关于树的术语：
* 节点：节点包含了节点中存储的数据和指向其他子树的信息。
* 节点的度：节点所拥有子树的个数。
* 树的度：树种节点的最大度数。
* 终端节点：度为零的节点，称为叶子，也就是叶子节点。
* 分支节点：度大于 0 的节点，除了叶子都是分支节点。
* 内部节点：除了根节点和叶子节点以外都是内部节点。
* 节点的层次：从根节点到改节点的层数。
* 树的深度：所有节点种最大的层数。
* 路径：树中两个节点之间经过的节点序列。
* 路径长度：路径中所含的边数。
* 双亲，孩子：节点的子树的根称为该节点的孩子，反之该节点为其孩子的双亲。
* 兄弟：双亲相同的节点。
* 堂兄弟：双亲是兄弟的节点互称堂兄弟。
* 祖先：从该节点到树根所经过的所有节点称为该节点的祖先。
* 子孙：节点的子树中的所有节点都称为该节点的子孙。
* 有序树：节点的各子树从左至右有序，不能互换位置。
* 无序树：节点各子树可互换位置。
* 森林：由零个或多个不相交的树组成的集合。

## 树的存储结构
从存储方式上来看同样有两种类型，顺序存储和链式存储。

其中顺序存储中存在如下存储方式：
1. 双亲表示法。
2. 孩子表示法
3. 双亲孩子表示法。

链式存储：
1. 孩子链表表示法
2. 孩子兄弟表示法

定义：有且只有一个根节点，出根节点以外的其余节点分成两个互不相交的子集，而子集本身也是二叉树。

1. 第 i 层至多有 $2^{i-1}$ 个节点。
2. 高度为 k 的二叉树之多有 $2^k - 1$ 个节点。
3. 度为零的节点 = 度为二的节点 + 1

特殊二叉树：
* 满二叉树：深度为 k 的二叉树，节点树达到了 $2^k - 1$ ，则是满二叉树。
* 完全二叉树：除了最后一层外，上面的是一颗满二叉树，而最后一层则是从左到右出现的叶子节点。 

图：多对多的关系。

### 存储结构

数据的存储结构，也就是物理结构，指数据在计算机中真实存储的状态。

存储结构分为顺序存储，链式存储，索引存储，散列存储。后三种也称非顺序存储。

顺序存储：存储地址连续。

链式存储：采用指针，地址可以不连续。

索引存储：采用一张表来存储关键字的地址，每次索引时需要查表找到地址。

散列存储：根据元素的关键字计算存储地址，也称哈希存储。

数据的存储结构影响存储空间的方便程度，数据的运算速度。

### 数据的运算

根据不同的存储结构实现了不同的运算。

### 数据类型，抽象数据类型

数据类型是值的集合和定义在此集合上的一组操作的总称。

原子类型，例如 int bool 等。

结构类型，例如结构体。

抽象数据类型。ADT 抽象数据组织


https://www.bilibili.com/video/BV1b7411N798?p=4