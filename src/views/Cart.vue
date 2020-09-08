<template>
  <div class="about">
    <el-tag type="success">购物车</el-tag>
    <Cart :cart="cart"
          @cartAdd="addNum"
          @cartlose="loseNum"></Cart>
  </div>
</template>
<script>
import Cart from '../components/Cart'
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  components: {
    Cart
  },
  created () {
    console.log()
  },
  computed: {
    ...mapState(['cart'])
  },
  methods: {
    addCart (i) {
      const item = this.goods[i]
      const good = this.cart.find(v => v.text === item.text)
      if (good) {
        good.count++
      } else {
        this.cart.push({
          ...item,
          count: 1
        })
      }
    },
    addNum (i) {
      this.$store.commit('$addCartNum', i)

    },
    loseNum (i) {
      this.$store.commit('$loseCartNum', i)

    }
  }
}

</script>

