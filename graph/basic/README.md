# 基础图的表示和广度搜索算法的实现

## 图 （有道云笔记）

```
// 用散列表记录图节点之间的关系
var graph = {
    a: ['b', 'e'],
    b: ['c'],
    c: ['d'],
    d: [],
    e: ['f', 'g'],
    f: ['j'],
    g: ['j'],
    j: ['d'],
}
```


```
graph LR
a-->b
b-->c
c-->d
a-->e
e-->f
f-->j
e-->g
g-->j
j-->d
```

遍历了哪些节点：a,b,e,c,f,g,d

