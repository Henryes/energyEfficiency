<template>
  <section>
    <div class="box">
      <el-button class="box1" type="primary">新增</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      align="center"
      header-align="center"
    >
      <el-table-column prop="date" label="栏目名称"> </el-table-column>
      <el-table-column prop="name" label="文章数量"> </el-table-column>
      <el-table-column prop="address" label="状态"> </el-table-column>
      <el-table-column prop="zip" label="显示权重"> </el-table-column>
      <el-table-column prop="time" label="创建时间"> </el-table-column>
      <el-table-column prop="operation" label="操作">
        <el-button @click="dialogFormVisible = true" type="text" size="small"
          >编辑</el-button
        >
        <el-button  type="text" size="small">删除</el-button>
      </el-table-column>
    </el-table>
    <div class="block">
      <div class="el-pagination">
        <span class="el-pagination__total">共 3 条</span>
        <span class="el-pagination__sizes">
          <div class="el-select el-select--mini">
            <div class="el-input el-input--mini el-input--suffix">
              <input
                type="text"
                readonly="readonly"
                autocomplete="off"
                placeholder="请选择"
                class="el-input__inner"
              />
              <span class="el-input__suffix">
                <span class="el-input__suffix-inner">
                  <i
                    class="el-select__caret el-input__icon el-icon-arrow-up"
                  ></i>
                </span>
              </span>
            </div>
            <div
              class="el-select-dropdown el-popper"
              style="display: none; min-width: 110px;"
            >
              <div class="el-scrollbar" style="">
                <div
                  class="el-select-dropdown__wrap el-scrollbar__wrap"
                  style="margin-bottom: -15px; margin-right: -15px;"
                >
                  <ul class="el-scrollbar__view el-select-dropdown__list">
                    <li class="el-select-dropdown__item selected">
                      <span>100条/页</span>
                    </li>
                    <li class="el-select-dropdown__item">
                      <span>200条/页</span>
                    </li>
                    <li class="el-select-dropdown__item">
                      <span>300条/页</span>
                    </li>
                    <li class="el-select-dropdown__item">
                      <span>400条/页</span>
                    </li>
                    <li class="el-select-dropdown__item">
                      <span>500条/页</span>
                    </li>
                    <li class="el-select-dropdown__item">
                      <span>600条/页</span>
                    </li>
                    <li class="el-select-dropdown__item">
                      <span>700条/页</span>
                    </li>
                  </ul>
                </div>
                <div class="el-scrollbar__bar is-horizontal">
                  <div
                    class="el-scrollbar__thumb"
                    style="transform: translateX(0%);"
                  ></div>
                </div>
                <div class="el-scrollbar__bar is-vertical">
                  <div
                    class="el-scrollbar__thumb"
                    style="transform: translateY(0%);"
                  ></div>
                </div>
              </div>
            </div></div></span
        ><button type="button" class="btn-prev">
          <i class="el-icon el-icon-arrow-left"></i>
        </button>
        <ul class="el-pager">
          <li class="number">1</li>
        </ul>
        <button type="button" class="btn-next">
          <i class="el-icon el-icon-arrow-right"></i></button
        ><span class="el-pagination__jump"
          >前往
          <div class="el-input el-pagination__editor is-in-pagination">
            <input
              type="number"
              autocomplete="off"
              min="1"
              max="1"
              class="el-input__inner"
            />
          </div>
          页</span
        >
      </div>
    </div>

    <el-dialog title="编辑栏目" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="栏目名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="显示权重" :label-width="formLabelWidth">
          <el-input-number  controls-position="right"  :min="1" :max="10"></el-input-number>
        </el-form-item>
        <el-form-item label="栏目名称" :label-width="formLabelWidth">
          <el-radio  label="1">显示</el-radio>
          <el-radio  label="2">隐藏</el-radio>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      radio1: true,
      radio2: false,
      tableData: [
        {
          date: "无线专栏",
          name: "88",
          address: "显示",
          zip: "/",
          time: "/"
        },
        {
          date: "无线日报",
          name: "7",
          address: "隐藏",
          zip: "0",
          time: "2017-12-04 10:06:23"
        },
        {
          date: "政策法规",
          name: "53",
          address: " 显示",
          zip: "5",
          time: "2017-07-21 14:37:39"
        },
        {
          date: "行业新闻      ",
          name: "100",
          address: "显示",
          zip: "0",
          time: "2017-07-11 18:17:32"
        },
        {
          date: "政策法规",
          name: "53",
          address: " 显示",
          zip: "2",
          time: "2017-07-11 18:16:21"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
    };
  }
};
</script>

<style>
.el-table {
  text-align: center;
}

.box {
  width: 100%;
  height: 70px;
  padding: 10px 10px 0 0;
}
.box1 {
  float: right;
}
.block {
  text-align: center;
  padding: 20px 0 0 0;
}
</style>
