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

// 用一个队列记录访问的节点
var queue = [];

// 广度搜索算法
function breathSearch(start, end) {
    queue = queue.concat(graph[start]);

    if (!queue.length) return false;

    var node = queue.shift();

    while (node) {
        if (node === end) {
            return true;
        }
        queue = queue.concat(graph[node]);

        if (queue.length >= 1) {
            node = queue.shift();
        }
    }
}


/**
 * 题目：从a点出发，是否能搜索到d的路径
 * */
var hasFoundNode = breathSearch('a', 'd');

console.log(hasFoundNode);


