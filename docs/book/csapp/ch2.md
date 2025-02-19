# 第二章：信息的表示和处理

计算机中以**字节**为最小寻址单位，字节又由 8 位的块组成。

内存可以看成**字节数组**，其中每个字节都由一个数字来**唯一标识**，该数字称为**内存地址**，并且内存地址的集合称为**虚拟地址空间**。

在 C 语言中 16 进制常常以 0x 或 0X 开头。并且不区分字母大小写，也就意味着大小写可以混合。

> 例如： 0xfald37b 

因为**虚拟地址**是以字来编码的，所以**字长**大小决定了虚拟地址空间的大小。

> 例如常见的字长有 32 位和 64 位，对于 32 位的机器，虚拟地址大小位 $2^32$，其范围就是 $[0,2^31-1]$

C 语言标准对大多的数据类型设置的下界但却没有设置上界。原因则是将 32 位的机器上的程序移植到 64 位的机器上的程序会导致对字长存在依赖的程序出现问题。

小端法：在内存中按照从最低有效字节到最高有效字节的顺序存储对象。

大端法：在内存中按照从最高有效字节到最低有效字节的顺序存储对象。

**移位：**

左移: x<<k x 左移 k 位，丢弃最高的 k 位，右端补 k 个零。

右移： 右移存在逻辑移位和算数移位两种类型，区别在于前者补 0 后者 补 1 。

逻辑移位：x>>k: x 右移 k 位，丢弃最低的 k 位，左端补 k 个零 。

算术移位：x>>k: x 右移 k 位，丢弃最低的 k 位，左端补 k 个 1 。

算术右移对于**有符号的整数数据**运算很有用。

C 语言没有明确定义右移是算术右移还是逻辑右移，但是几乎所有的编译器/机器对于有符号数都是算术右移，而对于无符号数则是逻辑右移。

Java 中对二者则有明确的定义，算术右移是 x>>k ，而逻辑右移则是 x>>>k 。

移位的优先级要低于加法的优先级，例如 1<<2+3<<4 等同于 1<<(2+3)<<4

## 整数表示

整数有两种表示方式，只表示无符号的整数，或者无符号，零，有符号的都能表示。

C/C++ 两种表示方式都存在，而 Java 中只有后者，均是有符号数，不存在无符号数。

表示方法有多种，在计算机中存储的都是二进制数据，只是采取了不同的解释规则而已。重要的有原码和补码两种解释规则。

注意相同的二进制数据在不同的解释规则下的结果是不同的。

### 无符号数的编码

无符号数也就是整数，不存在负数的数字。

无符号数编码具备唯一性。

变换函数 $B2U_w$ 是**双射**，也就是二进制可以唯一的表示一个十进制的数并且十进制也可以唯一的表示一个二进制的数字。

### 补码编码

当数字存在负数时采用**补码**来表示。

补码的最高位是符号位，其中 0 代表正数，1 代表负数。

$w$ 位的补码如果用**二进制**来表示范围，范围是 $[10···0,01···1]$ 。

如果用**十进制**来表示的话，范围 $[-2^{w-1},2^{w-1}-1]$ 。

补码的**唯一性**，在此范围内 $[-2^{w-1},2^{w-1}-1]$ ，每一个补码都和一个二进制数字存在唯一的映射，同样每一个补码如都唯一对应一个整数。

变换函数 $B2T_w$ 是一个**双射**。

在 C 语言中，**无符号数**和**有符号数**进行运算时会默认将有符号数转换为**无符号数**。

位数扩展规则分为无符号和有符号两种类型：无符号的**高位补零**，有符号的**高位补一**。

> P55 页，练习题 2.24 写一遍即可明白。 


