# 第二章：语言及其文法

## 2.1 语言及其文法

字母表是用穷符号集，用符号 $\sum$ 表示。

* 符号例如：数字，标点符号等。
* 字母表例如：0/1，ASCII，Unicode 等。

## 2.2 文法的定义

**文法**由**语法成分**和**语言的基本符号**组成，前者由尖括号括起来，后者本质上是前者的实例化，例如形参和实参（个人理解）。

形式化定义：$G = (V_T,V_N,P,S)$

* $V_T$ 终结符，token 例如单词。
* $V_N$ 非终结符，语法成分，例如动词，形容词。
* $P$ 产生式，如何将前两者结合成串。
* $S$ 开始符号，文法中最大的语法成分，例如句子。

## 2.3 语言的定义

如何判断一个句子是否满足文法的定义？

同过推导和规约。

推导和规约是相反的，例如语法分析树自顶向下是推导，自底向上是规约。

## 2.4 文法的分类

文法分为四种类型，称为乔姆斯基文法分类体系。

* 0 型文法

无限制文法，其中产生式 $\alpha$ 至少包含一个非终结符。

* 1 型文法 （CSG）

上下文有关文法，一般形式 $a_1\alpha a_2 \leftarrow a_1\beta a_2$ 其中 $\beta 不能为空产生式。$

* 2 型文法 （CFG）

上下文无关文法，不需要考虑上下文可以直接替换。

* 3 型文法

正则文法，分为**右线性文法**和**左线性文法**。
 
## 2.5 CFG 分析树

构造分析树。

短语的定义。

二义性文法：分析树存在多个，可以通过引入分析规则来消除二义性。

虽然不存在任何一个算法能够判定一个文法是否具备**二义性**，但是有一组充分条件，只要满足该组充分条件就必定无二义性。