/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minstack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.minstack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minstack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.minstack.length > 0) {
        return this.minstack[this.minstack.length-1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.minstack);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */