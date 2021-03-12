var app = new Vue({
    el: "#app",
    data: {
        product: [{
            name: '',
            price: 0,
            num: 0
        }],
        display: [],

    },
    computed: {
        result: function(){
            var sum=0;
            this.display.forEach(i => {
                sum+=i.price*i.num;
            });
            return sum
        }
    },
    methods: {
        insertList: function(products){
            if(products.name==null || products.price==null || products.num==null){
                alert("請輸入完整資料");
            }
            else if (products.price<0 || products.num<0){
                alert("單價或數量請輸入正整數");
            }
            else if(products.num%1!=0){
                alert("數量請輸入正整數");
            }
            else{
                this.display.push({name: products.name, price: products.price, num: products.num})
            }
        },
        deleteList: function(products){
            this.display.splice(this.display.indexOf(products), 1);       
        }
    }
})