<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
        <span class="inner">
          <img class="cartcontrol-decrease" src="./decrease.png" />
        </span>
      </div>
    </transition>
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
      this.$emit('add', event.target)
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
      transition:all 0.4s linear
      display: inline-block
      padding: 6px
      transition: all 0.4s linear
      .inner
        display: inline-block
        transition: all 0.4s linear
        transform: rotate(0)
      &.move-enter-active, &.move-leave-active
        opacity: 1
        transform: translate3d(0, 0, 0)
      &.move-enter, &.move-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
      .inner
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
