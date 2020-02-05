<template>
  <section>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      align="center"
      header-align="center"
    >
      <el-table-column prop="date" label="信息名称"> </el-table-column>
      <el-table-column prop="name" label="展示类型"> </el-table-column>
      <el-table-column prop="address" label="更新时间"> </el-table-column>
      <el-table-column prop="operation" label="操作">
        <el-button @click="dialogFormVisible = true" type="text" size="small"
          >编辑</el-button
        >
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  name: 'finger',
  data() {
    return {
      radio1: true,
      radio2: false,
      tableData: [
        {
          date: "发电企业竞价成交电量",
          name: "数据类型",
          address: "2019-12-04 14:32:37"
        },
        {
          date: "发电集团B类机组装机容量",
          name: "数据类型",
          address: "2019-12-04 14:32:37"
        },
        {
          date: "竞价市场电量累计top100",
          name: "数据类型",
          address: " 2019-12-04 14:32:37"
        },
        {
          date: "竞价市场电量月度top100    ",
          name: "数据类型",
          address: "2019-12-04 14:32:37"
        },
        {
          date: "价格走势",
          name: "图表类型（时间为主）",
          address: " 2019-12-04 14:32:37"
        },
        {
          date: "交易概况     ",
          name: "图表类型（名称为主）",
          address: "2019-12-04 14:32:37"
        },
        {
          date: "Bspi指数      ",
          name: "图表类型（时间为主）",
          address: "2019-12-04 14:32:37"
        },
        {
          date: "市场主体      ",
          name: "图表类型（名称为主）",
          address: "2019-12-04 14:32:37"
        },
        {
          date: "广东省发电厂分布",
          name: "",
          address: "2019-12-04 14:32:37",
        }
      ]
    };
  }
};
</script>
<style>
.el-table{
  margin: 30px 0 0 30px;
  background-color: rgb(61, 59, 57), 147;
}
</style>
