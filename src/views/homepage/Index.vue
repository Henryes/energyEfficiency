<template>
  <div style="float:center " class="use">
    <div style="border:1px solid #06ca9e" class="img">
      <span style="padding-right:25px;font-size:15px ">用电户号</span>
      <el-select
        style="padding-right:65px"
        v-model="searchForm.electricUser"
        placeholder="请选择"
      >
        <el-option
          v-for="item in electricUsers"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <span style="padding-right:25px;font-size:15px">监测点：</span>
      <el-select
        style="padding-right:65px"
        v-model="searchForm.checkpoint"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <router-view></router-view>
      <div class="use2">
        <i class="el-icon-lightning"></i>
        <span class="ele">大工业用电1-10千伏</span>
        <i class="el-icon-location-outline"></i>
        <span class="ele">用电地址：广州省花都区建设北路</span>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="content-block content-block-max">
          <div class="pressure">
            <span>今日变压器最大负载率</span>
            <i class="el-icon-question"></i>
          </div>
          <div class="circular">
            <span>95</span>
            <span class="unit">%</span>
          </div>
          <div class="tip">请注意用电趋势</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="content-block">
          <label>当前最大需量（KW）</label>
          <div class="number">4592</div>
          <div class="date">2018-07-13</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="content-block">
          <label>今日最大需量（KW）</label>
          <div class="number">1264</div>
          <div class="date">
            <span>日</span>
            <span>
              <i class="el-icon-top"></i>
              <span>12.45%</span>
            </span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="content-block">
          <label>今月最大需量（KW）</label>
          <div class="number">2691</div>
          <div class="date">
            <span>月</span>
            <span>
              <i class="el-icon-bottom"></i>
              <span>15.22%</span>
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
    <div style="border:1px solid #d5d5d5" class="chart">
      <div class="chartleft" style="float:left">最大需量（kw）</div>
      <div class style="float:right">
        <el-button-group>
          <el-button type="primary" size="mini" icon>年</el-button>
          <el-button type="primary" size="mini" icon>月</el-button>
          <el-button type="primary" size="mini" icon>日</el-button>
          <el-button type="primary" size="mini" icon>日</el-button>
        </el-button-group>
        <el-date-picker
          size="mini"
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-button-group>
          <el-button type="primary" size="mini" icon>分钟</el-button>
          <el-button type="primary" size="mini" icon>小时</el-button>
          <el-button type="primary" size="mini" icon>天</el-button>
        </el-button-group>
      </div>
      <div ref="canvas" data="initChart" class="canvas"></div>
    </div>
    <div>
      <div style="padding-top:40 px">
        详细数据
        <el-button style=" float:right" type="success">导出数据</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="时间"> </el-table-column>
        <el-table-column prop="name" label="最大需量（kw）"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400, 500, 600, 700]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="3"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "homepage",
  components: {},
  data() {
    return {
      menus: [
        {
          path: "/homepage",
          label: "首页"
        },
        {
          path: "/user",
          label: "能效管理"
        },
        {
          path: "/depart",
          label: "资讯管理"
        },
        {
          path: "/system",
          label: "营销管理"
        },
        {
          path: "/file",
          label: "金融管理"
        },
        {
          path: "/system",
          label: "增值服务"
        },
        {
          path: "/file",
          label: "能效管理"
        },
        {
          path: "/system",
          label: "资讯管理"
        },
        {
          path: "/file",
          label: "反馈管理"
        },
        {
          path: "/system",
          label: "系统管理"
        }
      ],
      search: "",
      searchForm: {
        electricUser: '',
        checkpoint: ''
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "23189",
          address: "广州白云"
        },
        {
          date: "2016-05-04",
          name: "12341",
          address: "广州花都"
        },
        {
          date: "2016-05-01",
          name: "213",
          address: "广州荔湾"
        },
        {
          date: "2016-05-03",
          name: "124556",
          address: "广州南沙"
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value: '',
      electricUsers: [
        {
          value: 'huhao1',
          label: '户好1'
        },
        {
          value: 'huhao2',
          label: '户好2'
        },
        {
          value: 'huhao3',
          label: '户好3'
        }
      ],
      options: [],
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      currentPage4: 4
    };
  },
  mounted() {
    // alert("mouted");
    this.initChart();
  },
  beforeMount() {
    // alert("beforeMount");
  },
  created() {
    // alert("created");
  },
  beforeCreate() {
    // alert("beforeCreate");
  },
  methods: {
    initChart() {
      let canvas = echarts.init(this.$refs.canvas);
      const options = {
        title: {
          text: ""
        },
        tooltip: {},
        xAxis: {
          data: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "24:00"
          ]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [
              380,
              440,
              180,
              410,
              380,
              658,
              546,
              524,
              453,
              485,
              427,
              278,
              388,
              392,
              658,
              546,
              524,
              453,
              485,
              427,
              278,
              388,
              392
            ]
          }
        ]
      };
      canvas.setOption(options);
      // var startX = 100;
      // var startY = 600;
      // var ctx = canvas.getContext("2d");
      // var data = [0, 100, 200, 300, 400, 500]; //坐标轴坐标
      // var point = [
      //   [100, 200],
      //   [150, 230],
      //   [200, 190],
      //   [250, 240],
      //   [300, 300],
      //   [350, 270],
      //   [400, 500],
      //   [450, 400],
      //   [500, 100]
      // ]; //点坐标
      // //建立坐标系
      // function creat() {
      //   ctx.beginPath();
      //   ctx.moveTo(startX, 50);
      //   ctx.lineTo(startX, startY);
      //   ctx.moveTo(startX, startY);
      //   ctx.lineTo(650, startY);
      //   ctx.closePath();
      //   ctx.stroke();
      // }
      // //填充横纵坐标
      // function insert() {
      //   var x = 100;
      //   var y = 600;
      //   //绘制横坐标
      //   for (var i in data) {
      //     ctx.fillText(data[i], x, y + 20);
      //     x += 100;
      //   }
      //   x = 100;
      //   y = 600;
      //   //绘制纵坐标
      //   for (var j in data) {
      //     ctx.fillText(data[j], x - 20, y);
      //     y -= 100;
      //   }
      // }
      // //绘制折线
      // var num = 0;
      // var sh = setInterval(function() {
      //   //只有第一个点重新开始绘制
      //   if (num == 0) ctx.beginPath();
      //   //终止
      //   if (num == 8) {
      //     clearInterval(sh);
      //   }
      //   var x = point[num][0];
      //   var y = point[num][1];
      //   //转换坐标
      //   x += 100;
      //   y = startY - y;
      //   ctx.arc(x, y, 2, 0, 2 * Math.PI);
      //   //进行点的内部连接
      //   if (num != 0) ctx.lineTo(x, y);
      //   num++;
      //   ctx.moveTo(x, y);
      //   ctx.strokeStyle = "#3FA7DC";
      //   //连接边框
      //   ctx.stroke();
      //   // console.log(num);
      // }, 400);
      // creat();
      // insert();
    },
    handleSizeChange(val) {
      alert(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      alert(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-button {
  background-color: #06ca9e;
  margin: 3px;
}

.breadcrumb {
  height: 20px;
  width: 100px;
}
.el-breadcrumb__item {
  height: 25px;
  width: 130px;
  text-align: center;
  font-size: 16px;
  font-family: "MicrosoftYaHei";
}
.el-breadcrumb__inner {
  float: center;
  height: 12 px;
  width: 200 px;
  color: #606266;
  cursor: text;
}

.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}

.header-left {
  float: left;
  height: 100%;
  line-height: 100%;

  .hamburger {
    margin-top: 15px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    float: left;
    cursor: pointer;
    /* transform: rotate(180deg); */
  }

  .breadcrumb {
    padding-left: 15px;
    float: left;
    padding-top: 17px;
  }
}

.header-right {
  float: right;
  height: 50px;
  line-height: 50px;
  .el-input {
    width: 200px;
    /deep/ input {
      border-width: 0 0 1px 0;
      border-color: #d9d9d9;
    }
  }
  .search-icon {
    cursor: left;
    font-size: 18px;
    vertical-align: middle;
  }
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .fullscreen {
    float: right;
  }
  .infullscreen {
    padding: 0px 12px;
  }
  .size {
    padding: 0px 12px;
  }
  .user-avatar {
    padding: 5px 12px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .main {
    padding: 20;
  }

  .el-main {
    width: 797px;
    position: absolute;
    left: 0;
    top: 0;
    right: -17px;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    background-color: #634e4e;
    border: solid 1px #09cb9f;
  }
  .el-icon-s-flag {
    color: #06ca9e;
  }
  .el-icon-user-solid {
    color: #06ca9e;
  }
  .el-breadcrumb-item {
    width: 1px;
    height: 1px;
  }
}

.ele {
  color: #06ca9e;
  padding-right: 45px;
}
.el-icon-lightning {
  color: #06ca9e;
  padding-right: 10px;
}
.el-icon-location-outline {
  color: #06ca9e;
  padding-right: 10px;
}
.use {
  padding: 50px 50px;
  .img {
    margin-block-end: 20px;
    padding: 33px 0 0 50px;
  }
}

.use2 {
  padding: 35px 0px 28px 0px;
}
.content-block {
  border: 1px solid #d5d5d5;
  text-align: center;
  height: 200px;
  font-family: "MicrosoftYaHei";
  label {
    line-height: 62px;
    height: 62px;
    font-size: 16px;
    color: #767676;
  }
  .number {
    color: #09cb9f;
    font-size: 36px;
    line-height: 88px;
    height: 88px;
  }
  .date {
    line-height: 30px;
    height: 30px;
    color: #9b9b9b;
  }
  .pressure {
    font-size: 14px;
    color: #767676;
    height: 46px;
    line-height: 46px;
    margin-top: 7px;
  }
  .circular {
    font-size: 26px;
    color: #fff;
    width: 98px;
    height: 98px;
    line-height: 98px;
    border-radius: 49px;
    background-color: #e89800;
    margin: 0 auto;
    .unit {
      font-size: 18px;
    }
  }
  .tip {
    font-size: 16px;
    color: #e89e00;
    height: 48px;
    line-height: 48px;
  }
}
// .content-block-max {
//   background-image: url("");
// }
.el-table {
  margin-top: 30px;
}

.canvas {
  height: 650px;
  width: 100%;
}

.chart {
  margin: 23px 0 48px 0;
}
.chartleft {
  padding: 10px;
}
.el-button-group {
  padding: 10px;
}
.block {
  height: 67px;
  line-height: 67px;
  margin: 37px 0 0 0;
  display: flex;
  justify-content: center;
}
</style>
