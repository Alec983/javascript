function queue() {

    var items = []
    this.count = 0;
    this.push = function (item) {
        items.push(item)
        this.count++;
    }

    this.pop = function () {
        if (this.count > 0) {
            items.unshift()
            this.count--
        }
    }
    this.print = function () {
        for (var i = 0; i < this.count; i++) {
            console.log(items[i])
        }
    }
}