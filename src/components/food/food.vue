<template>
  <div class="food" v-show="showFlag"></div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object
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
</style>
