var app = new Vue({
    el: "#app",
    data: {
        product: [{
            name: '',
            price: 0,
            num: 0
        }],
        display: []
    },
    computed: {
        result: function(){
            var sum=0;
            this.product.forEach(i => {
                sum+=i.price*i.num;
            });
            return sum
        }
    },
    methods: {
        insertList: function(products){
            this.display.push({name: products.name, price: products.price, num: products.num})
        },
        deleteList: function(products){
            this.display.splice(this.display.indexOf(products), 1);       
        }
    }
})