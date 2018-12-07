var nodeId = 0;

// 散列表 记录 name 跟 id 之间的映射关系
var map = {};

// 用来表示图的二维数组
var matrix = [];

// 节点构造函数
var Node = function (name) {
    // 假如当前声明的节点名称，已经声明过了，就不再创建节点
    if (name in map) {
        return null;
    }

    var node = {name: name};

    node.id = nodeId;
    matrix = new Array(nodeId + 1);

    for (var i = 0; i < (nodeId + 1); i++) {
        matrix[i] = new Array(nodeId + 1);
    }

    for (var j = 0; j < (nodeId + 1); j++) {
        for (var k = 0; k < (nodeId + 1); k++) {
            matrix[j][k] = 0;
        }
    }

    map[name] = nodeId++;

    return node;
}


var nodeA = new Node('node-a');
var nodeB = new Node('node-b');
var nodeC = new Node('node-c');
var nodeD = new Node('node-d');
var nodeE = new Node('node-e');

// 为节点之间增加边
var addEdge = function (x, y) {
    matrix[x.id][y.id] = 1;
}

addEdge(nodeA, nodeB);
addEdge(nodeA, nodeC);
addEdge(nodeB, nodeD);
addEdge(nodeC, nodeD);
addEdge(nodeD, nodeE);
addEdge(nodeE, nodeB);

/**
 * output：
 *
 * [
 *  [ 0, 1, 1, 0, 0 ],
 *  [ 0, 0, 0, 1, 0 ],
 *  [ 0, 0, 0, 1, 0 ],
 *  [ 0, 0, 0, 0, 1 ],
 *  [ 0, 1, 0, 0, 0 ]
 * ]
 *
 *
 * */
console.log(matrix);
