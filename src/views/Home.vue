<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6"
              style="margin-bottom:10px"
              v-for="(item,index) in goods"
              :key="index">
        <el-card>
          <el-image fit="fit"
                    class="img"
                    :src="item.img"></el-image>
          <div class="message"
               style="padding:6px">
            <span class="goodtitle">{{item.title}}</span>
            <el-button type="text"
                       @click="addCart($event,index)">
              <i class="el-icon-shopping-cart-2"
                 style="font-size:23px"></i>
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="ball-wrap">
      <transition @before-enter="beforeEnter"
                  @enter="enter"
                  @after-enter="afterEnter">
        <div class="ball"
             v-show="ball.show">
          <div class="inner">
            <div class="el-icon-circle-plus"></div>
          </div>

        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      title: 'kaikeba',
      ball: {
        show: false,
        el: null
      },
      goods: [],
      cart: []
    }
  },
  components: {
    // Cart
  },
  async created () {
    const { data: res } = await axios.get('/api/goods')
    this.goods = res.data
  },
  methods: {
    addCart ($event, i) {
      this.ball.el = $event.target
      this.ball.show = true // 加入购物车，显示icon
      const item = this.goods[i]
      this.$store.commit('$addCart', item)
    },
    addNum (i) {
      console.log(i, '购物车add')
      this.cart[i].count++
    },
    beforeEnter (el) {
      // 小球移过来
      let dom = this.ball.el
      let rect = dom.getBoundingClientRect()
      let x = window.innerWidth - rect.left - 60
      let y = rect.top - 20
      el.style.display = ''
      el.style.transform = `translate3d(0,${y}px,0)`

      let inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(-${x}px,0,0)`
    },
    enter (el, done) {
      let dom = this.ball.el
      this._offset = document.body.offsetHeight

      el.style.transform = `translate3d(0,0,0)`
      el.addEventListener('transitionend', done)

      let inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(0,0,0)`
    },
    afterEnter () {
      this.ball.show = false
      this.ball.display = 'none'
    }
  }
}
</script>
<style lang="less" >
.ball-wrap .ball {
  position: absolute;
  right: 25px;
  top: 25px;
  z-index: 999;
  color: red;
  transition: all 1s ease-in-out;
  // transition: all 1s linear;

  .inner {
    width: 16px;
    height: 16px;
    transition: all 1s linear;
  }
}

body {
  padding: 0;
  margin: 0;
}
.el-card__body {
  padding: 5px;
  // height: 100px;
}
h1 {
  color: red;
}
.img {
  width: 100%;
  height: 200px;
}
.goodtitle {
  font-size: 16px;
}
.message {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
