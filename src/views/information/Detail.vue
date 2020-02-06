<template>
  <section>
    <div style="margin:15px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章列表详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="文章标题" prop="name">
        <el-input v-model="ruleForm.name" placeholder="新增测试"></el-input>
      </el-form-item>
      <el-form-item label="所属栏目" prop="region">
        <el-select v-model="ruleForm.region" placeholder="无线专栏">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="来源" prop="source">
        <el-input v-model="ruleForm.source" placeholder="无线云联"></el-input>
      </el-form-item>
      <el-form-item label="发布时间" required>
        <el-form-item prop="date1">
          <el-col :span="10">
            <el-date-picker
              type="date"
              placeholder="2019-12-05 14:22:31"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
      </el-form-item>
      <el-form-item label="编辑人" prop="edit">
        <el-input v-model="ruleForm.edit" placeholder="请输入编辑人"></el-input>
      </el-form-item>

      <el-form-item label="状态" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="未发布"></el-radio>
          <el-radio label="已发布"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="显示权重" prop="display">
        <el-input v-model="ruleForm.edit" placeholder="0"></el-input>
      </el-form-item>
      <el-form-item label="关键字" prop="crux">
        <el-input
          v-model="ruleForm.edit"
          placeholder="多个关键字用空格隔开"
        ></el-input>
      </el-form-item>
      <!-- <div class="demo-image"> -->
        <el-form-item label="缩略图" prop="crux"> </el-form-item>
        <div class="block" v-for="fit in fits" :key="fit">
          <el-image
            style="width: 200px; height: 200px"
            :src="url"
            :fit="fit"
          ></el-image>
        </div>
      <!-- </div> -->
      <el-form-item label="首页推荐" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox
            label="（最佳显示模式为共推荐3篇文章）"
            name="type"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="首页推荐权重" prop="weight">
        <el-input v-model="ruleForm.weight" placeholder="0"></el-input>
      </el-form-item>
      <el-form-item label="首页推荐标题" prop="title">
        <el-input
          v-model="ruleForm.title"
          placeholder="请输入首页推荐标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="附件" prop="title">
        <el-button type="primary">上传附件</el-button>
      </el-form-item>
      <el-form-item label="是否热读" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="是" name="type"></el-checkbox> </el-checkbox-group
      ></el-form-item>
      <el-form-item label="热读权重" prop="title">
        <el-input-number
          
          placeholder="0"
          controls-position="right"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="文章导读" prop="weight">
        <el-input
          v-model="ruleForm.weight"
          placeholder="7月26日上午9:00-11:00，广东电力交易中心组织开展了2019年8月份集中竞争交易，现将未经安全校核的交易结果通报如下："
        ></el-input>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="相关阅读">
      <el-table
      
        border
        style="width: 100%"
        align="center"
        header-align="center"
      >
      <el-table-column prop="date" label="序号"> </el-table-column>
        <el-table-column prop="name" label="文章标题"> </el-table-column>
        <el-table-column prop="address" label="栏目"> </el-table-column>
        </el-table>
      </el-form-item>

      <el-form-item label="文章正文">
        <div ref="editor1"></div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- {{params}} -->
  </section>
</template>

<script>
import E from "wangeditor";

export default {
  name: "information-detail",
  data() {
    return {
      params: {},
      fits: ["fill"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      ruleForm: {
        name: "",
        region: "",
        source: "",
        date1: "",
        edit: "",
        display: "",
        crux: "",
        weight: "",
        title: "",
        delivery: false,
        type: [],
        resource: "",
        reading: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  created() {
    this.init();
  },
  mounted() {
    var editor = new E(this.$refs.editor1);
    editor.create();
  },
  methods: {
    init() {
      // console.log('query:', this.$route.query)
      this.params = this.$route.query;
    }
  }
};
</script>

<style>
.demo-ruleForm {
  margin: 30px;
}
.el-button{
  margin-top:20px ;
}
.demo-image {
  float: left;
}
.block {
  position: relative;
  margin-left: 100px;
}
</style>
