function Double () {
  this.tailOfList = null;
  this.headOfList = null;
  this.length = 0;
};

Double.prototype.append = function (data) {
  var node = {
            value: data,
            next: null,
            prev: null,
        }
         
        if (this.length == 0) {
            this.tailOfList = node;
            this.headOfList = this.tailOfList;
        }
        else {
            this.tailOfList.next = node;
            node.prev = this.tailOfList;
            this.tailOfList = node;
        }
        this.length++;
        return this;
};

Double.prototype.each = function (plusOne) {
        var node = this.tailOfList;
        var i = 0;
        while (i++ < this.length) {
            plusOne.call (node);
            // console.log(node.value);
            node = node.prev;
        }   
        return this;
};

var plusOne = function () {
   this.value = this.value + 1;
};


Double.prototype.head = function () {
        var node = this.tailOfList;
        while (node.prev) {
            node = node.prev;
        }   
        return node.value;   
};

Double.prototype.tail = function () {
        return this.tailOfList.value;  
};

Double.prototype.at = function (index) {
        var node = this.tailOfList;
        for (var i = this.length - 1; i > -1; i--) {
          if (i === index ) {
               return node.value;
               break;
          }
            else {node = node.prev;}
        }
};

Double.prototype.indexOf = function (data) {
        var node = this.tailOfList;
        while (node.prev) {
            node = node.prev;
        }   
        var help = 0;
        for (var i = 0; i < this.length; i++) {
          if (node.value === data ) {
               return i;
               help = 1;
               break;
          }
            else {node = node.next;}
        }
        if (help === 0) {
           return -1;
        }    
};

Double.prototype.reverse = function () {
        var nodeReverse = this.tailOfList;
        this.tailOfList = null;
        for (var i = this.length - 1; i > -1; i--) {
            var node = {
              value: nodeReverse.value,
              next: null,
              prev: null,
            };

            if (i === this.length - 1) {
              this.tailOfList = node;
              // console.log(node.value);
              nodeReverse = nodeReverse.prev;
            }
            else {
                this.tailOfList.next = node;
                node.prev = this.tailOfList;
                this.tailOfList = node;
                // console.log(node.value);
                nodeReverse = nodeReverse.prev;
           }
        }
        return this;
};


Double.prototype.insertAt = function  (index, data) {
        var newNode = {
            value: data,
            next: null,
            prev: null,
        }

        var node = this.tailOfList;
        for (var i = this.length - 1; i > -1; i--) {
          if (i === index - 1 ) {
            newNode.next = node.next;
            newNode.prev = node;
            node.next.prev = newNode;
            node.next = newNode;
            break;
          }
            else {node = node.prev;}
        }
        this.length++;
        return this;
};

Double.prototype.deleteAt = function (index) {
       if (index < this.length && index > -1) {

            var node = this.headOfList;
            var i = 0;
            while (i < index) {
                node = node.next;
                i++;
            }
            while (i != this.length - 1) {
                node.value = node.next.value;
                this.tailOfList = node;
                node = node.next;
                i++;
            }
            node.value = null;
            node.next = null;
            this.length--;
            return this;
        } 
};


// var dll = new Double;
// dll.append(1);
// dll.append(2);
// dll.append(3);
// dll.append(4);
// dll.append(5);

// console.log(dll.head());
// console.log(dll.tail());

// console.log(dll.at(0));
// console.log(dll.at(1));
// console.log(dll.at(4));
// console.log(dll.at(5));

// console.log(dll.indexOf(1));
// console.log(dll.indexOf(3));
// console.log(dll.indexOf(5));
// console.log(dll.indexOf(18));

// console.log(dll.reverse());

// console.log(dll.at(0));
// console.log(dll.at(1));
// console.log(dll.at(2));
// console.log(dll.at(3));
// console.log(dll.at(4));

// console.log(dll.deleteAt(1));
// console.log(dll.at(0));
// console.log(dll.at(1));
// console.log(dll.at(2));
// console.log(dll.at(3));
// console.log(dll.at(4));

// console.log(dll.deleteAt(3));
// console.log(dll.at(0));
// console.log(dll.at(1));
// console.log(dll.at(2));
// console.log(dll.at(3));
// console.log(dll.at(4));


// console.log(dll.at(0));
// console.log(dll.at(1));
// console.log(dll.at(2));
// console.log(dll.at(3));
// console.log(dll.at(4));

// console.log(dll.insertAt(1, 15));

// console.log(dll.at(0));
// console.log(dll.at(1));
// console.log(dll.at(2));
// console.log(dll.at(3));
// console.log(dll.at(4));
// console.log(dll.at(5));

// console.log(dll.insertAt(5, 23));

// console.log(dll.at(0));
// console.log(dll.at(1));
// console.log(dll.at(2));
// console.log(dll.at(3));
// console.log(dll.at(4));
// console.log(dll.at(5));


//  console.log(dll.each(plusOne));



