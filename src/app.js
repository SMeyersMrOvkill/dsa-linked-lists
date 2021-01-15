const LinkedList = require('./LinkedList');

function main() {
    let SLL = new LinkedList();
    SLL.insertLastArray([
        'Apollo', 'Boomer', 'Helo',
        'Husker', 'Starbuck'
    ]);
    SLL.print();
    SLL.insertBefore('Tauhida', 'Starbuck');
    SLL.print();
}

main();