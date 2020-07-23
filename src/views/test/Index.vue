<template>
  <section>
    <el-table :data="list">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="linkExplain" label="linkExplain"></el-table-column>
      <el-table-column prop="statusTime" label="statusTime"></el-table-column>
      <el-table-column prop="url" label="url"></el-table-column>
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="createTime" label="createTime"></el-table-column>
    </el-table>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'test',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getList()
    },
    getList () {
      axios
      .get('/app/webmobile/pc/homelink/list')
      .then(response => {
        // eslint-disable-next-line no-console
        console.log('response:', response)
        this.list = response.data
      }).catch(function (error) { // 请求失败处理
        // eslint-disable-next-line no-console
        console.log(error);
      });
    }
  }
}
</script>