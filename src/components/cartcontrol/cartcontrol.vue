<template>
  <div class="cartcontrol">
    <div class="cart-decrease" v-show="food.count>0">
      <img class="cartcontrol-decrease" src="./decrease.png" />
    </div>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">
      <img class="cartcontrol-add" src="./add.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartcontrol',
  props: {
    food: {
      type: Object
    }
  },
  created() {
    console.log(this.food)
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
    .cart-add
      display: inline-block
      padding: 6px
      .cartcontrol-add
        width: 24px
        height: 24px
        line-height: 24px
</style>
