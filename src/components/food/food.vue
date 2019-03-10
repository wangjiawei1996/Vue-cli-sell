<template>
  <transition name="move">
    <div class="food" v-show="showFlag">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    food: {
      type: Object
    }
  },
  data() {
    return {
      showFlag: false
    }
  },
  methods: {
    show() {
      this.showFlag = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/minin'
  .food
    position: fixed
    left: 0
    top: 0
    bottom: 48px
    z-index: 30
    width: 100%
    background: #fff
    transition: all 0.2s linear
    transform: translate3d(0, 0, 0)
    &.move-enter, &.move-leave-to
      transform: translate3d(100%, 0, 0)
</style>
