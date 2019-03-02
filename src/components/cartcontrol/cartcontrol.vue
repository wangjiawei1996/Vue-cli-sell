<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
      <img class="cartcontrol-decrease" src="./decrease.png" />
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">
      <img class="cartcontrol-add" src="./add.png" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'cartcontrol',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart(event) {
      if (!event._constructed) {
        return
      }
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    decreaseCart(event) {
      if (!event._constructed) {
        return
      }
      if (this.food.count) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus">
  @import '~common/stylus/minin'
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      .cartcontrol-decrease
        width: 24px
        height: 24px
        line-height: 24px
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      padding: 6px
      .cartcontrol-add
        width: 24px
        height: 24px
        line-height: 24px
</style>
