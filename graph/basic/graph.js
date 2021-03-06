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
// 用数组记录路径
var router = [];

// 广度搜索算法
function breadthSearch(start, end) {
    if (typeof start !== 'string' || typeof end !== 'string') {
        return false;
    }
    router = [start];

    queue = queue.concat(graph[start]);

    if (!queue.length) return false;

    var node = queue.shift();

    while (node) {
        router.push(node);

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
var hasFoundNode = breadthSearch('a', 'd');

console.log('结果是：' + (hasFoundNode ? '有': '无'));
console.log('遍历了哪些节点：' + router.join(','));


