<template>
    <div>
        <nav-bar title="购物车" />
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="(item,index) in shopcart" :key="index">
                    <mt-switch v-model="item.isSelected"></mt-switch>
                    <img :src="item.thumb_path">
                    <div class="pay-calc">
                        <p>{{item.title}}</p>
                        <div class="calc">
                            <span>￥{{item.sell_price}}</span>
                            <span @click="substract(item)">-</span>
                            <span>{{item.num}}</span>
                            <span @click="add(item)">+</span>
                            <a @click="del(index)" href="javascript:;">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计(不含运费):</p>
                <span>已经选择商品{{payment.count}}件，总价￥{{payment.price}}元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="large">去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import GoodsTools from "@/GoodsTools"

export default {
    data () {
        return {
            shopcart: []
        }
    },
    created () {
        let goodsList = GoodsTools.getGoodsList()
        let ids = Object.keys(goodsList).join(',')
        // 因为服务器问题，'goods/getshopcarlist/'+ ids 这个接口暂时取不到数据
        // 所以读取根目录的 补充db的操作.txt 说明，json-server 一定要启动才能跑动
        this.$axios.get('goods/getshopcarlist/'+ ids)
        .then(res => {
            /* 这样写 并没有办法能触发vue的双向数据绑定
            this.shopcart = res.data
            // 给this.shopcart添加属性
            this.shopcart.forEach( goods => {
              // 判断是否有该商品
              console.log(goods)
              if(goodsList[goods.myid]) {
                goods.num = goodsList[goods.myid]
              }
              // 不管有没有都需要打钩
              goods.isSelected = true
            })
            下面是解决办法
            */

            /*
            方法一
            A、this.shopcart = res.data 以后，再十字给shopcart元素添加属性，无效（没有响应式了）
            B、先丰富好对象的属性，一次性赋值，有效 （还有响应式）
            // 给this.shopcart添加属性
              res.data.forEach( goods => {
                // 判断是否有该商品
                console.log(goods)
                if(goodsList[goods.myid]) {
                  goods.num = goodsList[goods.myid]
                }
                // 不管有没有都需要打钩
                goods.isSelected = true
              })
              this.shopcart = res.data

               //Object.defineProperty(this, 'shopcart', {   // this是对象， 'shopcart'是属性
                 set: function(resData) {
                   // 遍历resData的所有属性，并为shopcart的元素， 逐个添加这些属性， 并设置其set
                   // 遍历并监视其所有属性的set

                   遍历数组，因此元素加加或者减减 就可以出发shopcart这个对象里面某一个元素属性的set ，这时候vue就可以通过自身内部的虚拟dom修改内部虚拟dom，再跟真实的dom对比
                 }
               }) 
            */

           /**
            方法二
            如果一定是在数据不完整的情况下添加属性，就需要手动通知vue完成响应式（双向数据绑定）


              this.shopcart = res.data
              // 给this.shopcart添加属性
              this.shopcart.forEach( goods => {
                // 判断是否有该商品
                if(goodsList[goods.myid]) {
                  //goods.num = goodsList[goods.myid]
                  //第一个是对象  第二个是属性名  第三个是值
                  this.$set(goods,'num', goodsList[goods.myid])
                }
                // 不管有没有都需要打钩
                //goods.isSelected = true
                this.$set(goods,'isSelected', true)
              })
             
            */
            
            // 给this.shopcart添加属性
            res.data.message.forEach( goods => {
              // 判断是否有该商品
              if(goodsList[goods.id]) {
                goods.num = goodsList[goods.id]
              }
              // 不管有没有都需要打钩
              goods.isSelected = true
            })

            this.shopcart = res.data.message


        })
        .catch(err => {
            console.log('购物车数据异常', err)
        })
    },
    computed: {
        payment () {
            let price = 0;
            let count = 0;
            this.shopcart.forEach(goods => {
                if(goods.isSelected) {
                    price += goods.sell_price * goods.num
                    count += goods.num
                }
            })   
            return {
                price,
                count
            }
        }
    },
    methods: {
      add(goods) {
        goods.num ++
      },
      substract(goods) {
        if(goods.num)  goods.num --
      },
      del (index) {
        this.shopcart.splice(index, 1)
      }
    },
    beforeRouteLeave (to, from, next) {
        //导航离开该组件的对应路由时调用
        let obj = {}
        if(confirm('真的要离开吗？')) {
            this.shopcart.forEach(arr => {
                obj[arr.myid] = arr.num
            })
            GoodsTools.saveGoods(obj)
            next()
        }else {
            next(false)   // 取消导航行为
        }
    }
}
</script>
<style scoped>
.pay-detail ul li {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}

.pay-detail ul {
    padding-left: 5px;
    margin-top: 5px;
}

.pay-detail ul li img {
    width: 80px;
    height: 80px;
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
}

.pay-detail ul li >:nth-child(1),
.pay-detail ul li >:nth-child(3) {
    display: inline-block;
}

.pay-calc p {
    display: inline-block;
    width: 250px;
    overflow: hidden;
    color: blue;
    font-size: 15px;
    margin-bottom: 10px;
}

.pay-detail ul li >:nth-child(1) {
    line-height: 80px;
}

.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}

.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}

.calc a {
    margin-left: 20px;
}

.show-1,
.show-2 {
    display: inline-block;
}

.show-1,
.show-2 {
    margin-left: 30px;
}

.show-price {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
