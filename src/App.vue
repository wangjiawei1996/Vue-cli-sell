<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <goods :goods="goods"></goods>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import goods from './components/goods/goods.vue'

const ERR_OK = 0
export default {
  data() {
    return {
      seller: {},
      goods: {}
    }
  },
  created() {
    this.$http.get('/api/seller').then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = response.data
      }
    }, response => {

    })
  },
  components: {
    'v-header': header,
    'goods': goods
  }
}
</script>

<style lang="stylus">
  @import '~common/stylus/minin'
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
