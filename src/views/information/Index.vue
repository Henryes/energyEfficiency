<template>
  <section>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        align="center"
        header-align="center"
      >
        <el-table-column prop="date" label="序号"> </el-table-column>
        <el-table-column prop="name" label="文章标题"> </el-table-column>
        <el-table-column prop="address" label="栏目"> </el-table-column>
        <el-table-column prop="zip" label="创建时间"> </el-table-column>
        <el-table-column prop="time" label="发布时间"> </el-table-column>
        <el-table-column prop="weight" label="显示权重"> </el-table-column>
        <el-table-column prop="browse" label="浏览次数"> </el-table-column>
        <el-table-column prop="Recommend" label="首页推荐"> </el-table-column>
        <el-table-column prop="Article" label="热读文章"> </el-table-column>
        <el-table-column prop="readweight" label="熟读权重"> </el-table-column>
        <el-table-column prop="state" label="状态"> </el-table-column>
        <el-table-column prop="operation" label="操作">
          <template slot-scope="{row}">
            <el-button @click="editRow(row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <div class="el-pagination">
        <span class="el-pagination__total">共 420 条</span>
        <span class="el-pagination__sizes">
          <div class="el-select el-select--mini">
            <div class="el-input el-input--mini el-input--suffix">
              <input
                type="text"
                readonly="readonly"
                autocomplete="off"
                placeholder="10条/页"
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
    <!-- <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%;"
        ></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker
          placeholder="选择时间"
          v-model="form.date2"
          style="width: 100%;"
        ></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form> -->
  </section>
</template>
<script>
// import { METHODS } from 'http';
export default {
  name: 'information-list',
  data() {
    return {
      radio1: true,
      radio2: false,
      tableData: [
        {
          date: "1",
          name: "新增测试",
          address: "无线专栏",
          zip: "2019-12-04 14:32:37",
          time: "2019-12-04 14:32:37",
          weight: "0",
          browse: "7",
          Recommend: "未推荐",
          readweight: "0",
          state: "已发布"
        },
        {
          date: "2",
          name: "通报|关于2019年8月份集中竞争交易初步结果的通报",
          address: "市场动态",
          zip: "2019-12-04 14:32:37",
          time: "2017-12-04 10:06:23",
          weight: "0",
          browse: "1",
          Recommend: "已推荐",
          readweight: "0",
          state: "已发布"
        },
        {
          date: "3",
          name: "国网蒙东电力降低一般工商业店家，给客户送去真实惠",
          address: " 市场动态",
          zip: "2019-12-04 14:32:37",
          time: "2017-07-21 14:37:39",
          weight: "1",
          browse: "7",
          Recommend: "未推荐",
          readweight: "0",
          state: "已发布"
        },
        {
          date: "4      ",
          name: "发改委：“一般工商业平均电价再降低10%任务要求已完成",
          address: "市场动态",
          zip: "2019-12-04 14:32:37",
          time: "2017-07-11 18:17:32",
          weight: "1",
          browse: "7",
          Recommend: "未推荐",
          readweight: "0",
          state: "已发布"
        },
        {
          date: "5",
          name: "广东电力市场上半年交易量达1658.2亿千瓦时超去年交易规模",
          address: " 市场动态",
          zip: "2019-12-04 14:32:37",
          time: "2017-07-11 18:16:21",
          weight: "1",
          browse: "1",
          Recommend: "未推荐",
          readweight: "0",
          state: "已发布"
        },
        {
          date: "6      ",
          name: "关于组织各市场主体参与山东电力现货市场模拟试运行启动",
          address: "政策法规",
          zip: "2019-12-04 14:32:37",
          time: "2017-07-11 18:17:32",
          weight: "1",
          browse: "1",
          Recommend: "未推荐",
          readweight: "0",
          state: "已发布"
        },
        {
          date: "7      ",
          name: "内蒙古电力交易现货市场模拟试运行启动",
          address: "政策法规",
          zip: "2019-12-04 14:32:37",
          time: "2017-07-11 18:17:32",
          weight: "1",
          browse: "1",
          Recommend: "已推荐",
          readweight: "0",
          state: "已发布"
        },
        {
          date: "8      ",
          name: "通报|关于2019年7月份集中竞争交易初步结果的通报",
          address: "市场动态",
          zip: "2019-12-04 14:32:37",
          time: "2017-07-11 18:17:32",
          weight: "1",
          browse: "1",
          Recommend: "未推荐",
          readweight: "0",
          state: "已发布"
        },
        {
          date: "9      ",
          name: "权威预测：2015年氢能将在中国终端能源体系中占比接近10%",
          address: "市场动态",
          zip: "2019-12-04 14:32:37",
          time: "2017-07-11 18:17:32",
          weight: "1",
          browse: "130",
          Recommend: "未推荐",
          readweight: "100",
          state: "已发布"
        },
        {
          date: "10      ",
          name: "通知|关于全面放开经营性电力用户发用电用户计划的通知",
          address: "政策法规",
          zip: "2019-12-04 14:32:37",
          time: "2017-07-11 18:17:32",
          weight: "1",
          browse: "1",
          Recommend: "已推荐",
          readweight: "0",
          state: "已发布"
        }
      ]
    };
  },
  methods:{
    editRow (row) {
      this.$router.push({
        path: '/information/detail',
        query: {
          id: row.id,
          name: 'name'
        }
      })
    }
  }
};
// export default {
//   data() {
//     return {
//       form: {
//         name: "",
//         region: "",
//         date1: "",
//         date2: "",
//         delivery: false,
//         type: [],
//         resource: "",
//         desc: ""
//       }
//     };
//   },
//   methods: {
//     onSubmit() {
//       console.log("submit!");
//     }
//   }
// }
</script>

<style></style>
