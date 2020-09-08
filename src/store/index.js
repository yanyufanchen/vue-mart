import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    cart: JSON.parse(localStorage.getItem('cart')) || []
  },
  mutations: {
    $addCart(state, item) { // 新增购物车
      const good = state.cart.find(v => v.title === item.title)
      if (good) {
        good.count++
        good.totalPrice = item.price * good.count
      } else {
        state.cart.push({
          ...item,
          count: 1,
          totalPrice: item.price * 1
        })
      }
    },
    $addCartNum(state, i) {
      state.cart[i].count++
      state.cart[i].totalPrice = state.cart[i].price * state.cart[i].count
    },
    $loseCartNum(state, i) {
      if (state.cart[i].count > 1) {
        state.cart[i].count--
        state.cart[i].totalPrice = state.cart[i].price * state.cart[i].count
      }
    },
  },
  actions: {

  },
  getters: {
    cartTotal: state => {
      let sum = 0
      state.cart.forEach(v => {
        sum += v.count
      })
      return sum
    }
  },
  modules: {}
})
store.subscribe((mutations, state) => {
  localStorage.setItem('cart', JSON.stringify(state.cart))
})
export default store
