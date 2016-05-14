'use strict';
const pathfinding = require('pathfinding'),
    colors = require('colors');
var optimized = true;

var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
var products = [
    {x: 2, y: 3},
    {x: 2, y: 12},
    {x: 2, y: 15},
    {x: 4, y: 3},
    {x: 4, y: 6},
    {x: 4, y: 9},
    {x: 4, y: 15},
    {x: 9, y: 3},
    {x: 9, y: 6},
    {x: 9, y: 12},
    {x: 9, y: 15},
    {x: 7, y: 3},
    {x: 7, y: 6},
    {x: 7, y: 12},
    {x: 7, y: 15},
    {x: 12, y: 3},
    {x: 12, y: 6},
    {x: 12, y: 9},
    {x: 12, y: 15}
];
var optimizedProducts = [
    {x: 0, y: 19},
    {x: 0, y: 21},
    {x: 2, y: 15},
    {x: 2, y: 18},
    {x: 4, y: 9},
    {x: 4, y: 15},
    {x: 9, y: 6},
    {x: 9, y: 12},
    {x: 9, y: 15},
    {x: 7, y: 3},
    {x: 7, y: 12},
    {x: 7, y: 15},
    {x: 12, y: 6},
    {x: 12, y: 9},
    {x: 12, y: 15},
    {x: 12, y: 18},
    {x: 12, y: 21},
    {x: 15, y: 9},
    {x: 15, y: 15},
    {x: 15, y: 18},
    {x: 15, y: 21},
    {x: 19, y: 1},
    {x: 19, y: 3},
    {x: 19, y: 9},
    {x: 19, y: 15}
];
products = optimized ? optimizedProducts : products;
var consumers = 150;
var grid = new pathfinding.Grid(matrix);
displayGrid(grid);
var finder = new pathfinding.AStarFinder({
    allowDiagonal: true,
    dontCrossCorners: true
});
var result = {
    cells: 0,
    money: 0,
    rate: {},
    ultra: 0,
    high: 0,
    medium: 0,
    low: 0,
    none: 0
};
for (var i = 0; i <= consumers; i++) {
    createCustomer();
}

displayGrid(grid)
displayRate(grid)


function createCustomer() {
    var destinations = [];
    grid = new pathfinding.Grid(matrix);
    for (var i = 0; i < 4; i++) {
        destinations.push(products[Math.floor(Math.random() * products.length)])
    }
    console.log(destinations)
    destinations.unshift({x: 0, y: 0});
    destinations.push({x: 19, y: 23});
    var path = createPath(destinations, grid);
    displayPath(path, grid);
}

function createPath(nodes, grid) {
    var path = [];
    for (var i = 0; i < nodes.length - 1; i++) {
        let p = finder.findPath(nodes[i].x, nodes[i].y, nodes[i+1].x, nodes[i+1].y, grid.clone());
        addPath(p, grid)
        path = path.concat(p)
    }
    return path;
}

function addPath(path, grid) {
    grid.nodes.forEach((row) => {
        row.forEach((node) => {
            path.forEach((pathNode) => {
                if (pathNode[0] == node.x && pathNode[1] == node.y) node.isPath = true;
            });
            if (node.x == path[0][0] && node.y == path[0][1]) {
                // Ignore start point
            }
            else if (node.isPath) {
                if (node.x == path[path.length - 1][0] && node.y == path[path.length - 1][1]) {
                    result.money += 6
                    result.cells++;
                } else {
                    result.cells++;
                    //result.money++;
                }

                if (result.rate.hasOwnProperty(`${node.x}-${node.y}`)) {
                    result.rate[`${node.x}-${node.y}`]++;
                } else {
                    result.rate[`${node.x}-${node.y}`] = 1;
                }
            }
        });
    });
}

function displayPath(path, grid) {
    console.log(`Grid size: ${grid.width}x${grid.height}`);
    console.log(`Path: ${result.cells} cells - Money spent: ${result.money}`);

    grid.nodes.forEach((row) => {
        let string = '';
        row.forEach((node) => {
            path.forEach((pathNode) => {
                if (pathNode[0] == node.x && pathNode[1] == node.y) node.isPath = true;
            });
            if (node.x == path[0][0] && node.y == path[0][1]) string +=`${'AA'.bold.white.bgBlue}`;
            else if (node.x == path[path.length - 1][0] && node.y == path[path.length - 1][1]) string +=`${'BB'.bold.white.bgBlue}`;
            else if (node.isPath) string += `${'  '.black.bgBlue}`;
            else string += `${node.walkable ? '  '.black.bgWhite : '%%'.black.bgRed}`;
        });
        console.log(string)
    });
    console.log('');
}

function displayGrid(grid) {
    console.log(`Grid size: ${grid.width}x${grid.height}`);
    grid.nodes.forEach((row) => {
        let string = '';
        row.forEach((node) => {
            products.forEach((product) => {
                if (node.x == product.x && node.y == product.y) node.isProduct = true;
            });
            if (node.isProduct) string += `${'  '.black.bgBlue}`
            else string += `${node.walkable ? '  '.black.bgWhite : '%%'.black.bgRed}`
        });
        console.log(string)
    });
    console.log('');
}

function displayRate(grid) {
    grid.nodes.forEach((row) => {
        let string = '';
        row.forEach((node) => {
            if (result.rate.hasOwnProperty(`${node.x}-${node.y}`)) {
                if (result.rate[`${node.x}-${node.y}`] > 200) {
                    string += `${'  '.black.bgRed}`;
                    result.ultra++;
                } else if (result.rate[`${node.x}-${node.y}`] > 150) {
                    string += `${'  '.black.bgMagenta}`;
                    result.high++;
                }
                else if (result.rate[`${node.x}-${node.y}`] > 100) {
                    string += `${'  '.black.bgYellow}`;
                    result.medium++;
                } else if (result.rate[`${node.x}-${node.y}`] > 50) {
                    string += `${'  '.black.bgGreen}`;
                    result.low++;
                } else {
                    string += `${node.walkable ? '  '.black.bgWhite : '%%'.black.bgRed}`;
                    if (node.walkable) result.none++;
                }
            } else {
                string += `${node.walkable ? '  '.black.bgWhite : '%%'.black.bgRed}`;
                if (node.walkable) result.none++;
            }
        });
        console.log(string)
    });
    console.log(`${'  '.black.bgRed} > 200: ${result.ultra}\n${'  '.black.bgMagenta} > 150: ${result.high}\n${'  '.black.bgYellow} > 100: ${result.medium}\n${'  '.black.bgGreen} > 50: ${result.low}\n${'  '.black.bgWhite} < 50: ${result.none}\n`)
    console.log(`Average path: ${Math.floor(result.cells/consumers*100)/100}cells - Ignored surface: ${Math.floor((result.none/(result.ultra+result.high+result.medium+result.low+result.none))*10000)/100}%`)
}