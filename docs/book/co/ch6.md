# 第六章：计算机的运算方法


## 6.1 无符号数和有符号数

无符号数很简单,每一位表示二进制的两种状态。只有正数，存储简单。

首尾用来表示符号，0/1 分别表示正负，小数点默认为第一位后面。

原码表示法中对于零的表示存在两种情况：$+0.0000$ 和 $-0.0000$ ，其中前者高位是正号，所以还是 $+0.0000$ 后者的高位是负号所以原码为 $1.0000$ 。

原码：简单直观。高位为符号位。但是需要做加法减法两种操作。

能不能仅依靠加法运算就能完成减法操作？补码解决了这个问题，仅靠加法一个操作就能够实现减法运算的功能。

实际上就是将减去一个数变为加上该数字的负数。**补码**解决了该问题。


## 6.2 数的定点表示和浮点表示

## 6.3 定点运算

## 6.4 浮点四则运算

## 6.5 算术逻辑单元

