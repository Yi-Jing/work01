var app = new Vue({
    el: "#app",
    data: {
        name: 0,
        price: 0,
        num: 0
    },
    computed:{
        result: function(){
            return this.name+" "+this.price*this.num+"元";
        }
    }
})