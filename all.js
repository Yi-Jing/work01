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
            return this.product.name+" "+this.product.price*this.product.num+"元";
        }
    },
    methods: {
        insert: function(){
            this.display.push({value: "名稱："+this.product.name+" 單價："+this.product.price+" 數量："+this.product.num});
        },
        delete: function(){
            this.display.splice();
        }
    }
})