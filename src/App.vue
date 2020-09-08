<template>
  <div>
    <el-container>
      <el-menu mode=horizontal
               style="width:100%;background:#fff">
        <el-menu-item index="1">
          <img src="https://www.pengwang.xyz/logo.png"
               style="width:40px"
               alt="">
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/"
                       style="font-size:20px">
            首页
          </router-link>
        </el-menu-item>
        <el-menu-item index="3"
                      style="float:right;marginTop:5px">
          <router-link to="/cart"
                       class="cartIcon">
            <el-badge class="badge"
                      :value="cartTotal">
              <i class="el-icon-shopping-cart-1"
                 style="font-size:25px"></i></el-badge>
          </router-link>
        </el-menu-item>
      </el-menu>
    </el-container>
    <el-main>
      <router-view></router-view>
    </el-main>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['cartTotal'])
  }
}
</script>
<style lang="less" scoped>
</style>



