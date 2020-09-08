<template>
  <div>
    <template>
      <el-table :data="cart"
                style="width: 100%">
        <el-table-column prop="title"
                         label="商品"
                         width="300">
        </el-table-column>
        <el-table-column prop="price"
                         label="单价"
                         width="180">
        </el-table-column>
        <el-table-column prop="totalPrice"
                         label="金额"
                         width="180">
        </el-table-column>
        <el-table-column prop="count"
                         label="总量"
                         width="180">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="lose(scope)">-</el-button>
            <el-button size="mini"
                       type="danger"
                       @click="add(scope)">+</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['cart'],
  methods: {
    add (i) {
      this.$emit('cartAdd', i.$index)
    },
    lose (i) {
      this.$emit('cartlose', i.$index)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
