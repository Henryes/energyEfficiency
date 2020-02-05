<template>
  <el-container class="outer-container">  
    <el-aside width="200px">
      <div style="float:center" class="avatar-wrapper"></div>
      <img
        src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
        class="user-avatar"
      />
      <el-menu
        default-active="/homepage"
        text-color="white"
        :router="true"
        background-color="rgb(48, 65, 86)"
      >
        <template
          v-for="(menu, index) in menus">

          <el-menu-item
            :index="menu.path"
            :key="index"
            v-if="menu.children === undefined"
            >{{ menu.label }}
          </el-menu-item>

          <el-submenu 
            :index="menu.path"
            :key="index"
            v-else>
            <template slot="title">
              {{ menu.label }}
            </template>
            <el-menu-item :index="menu.path + menu2.path" v-for="menu2 of menu.children" :key="menu2.path">
              {{ menu2.label }}
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
    <el-container class="ineer-container">
      <el-header height="50px" style="border-bottom: 1px solid #ccc">
        <div class="header-left">
          <svg
            class="hamburger"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
          >
            <path
              d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
            />
          </svg>
          <div class="breadcrumb">
            <div>用电管理系统</div>
          </div>
        </div>
        <div class="header-right">
          <div style="float:left">
            <i class="el-icon-user-solid"></i>
          </div>
          <div class="admin" style="float:left" >用户：admin</div>
          <div style="float:left" class="size">
            <div style="float:left">
              <i class="el-icon-s-flag"></i>
            </div>
          </div>
          <div class="admin" style="float:left" >角色：超级管理</div>
          <div style="float:left" class="avatar-wrapper">
            <el-button size="small" background-color="#06ca9e"
              >修改密码</el-button
            >
            <el-button size="small">退出</el-button>
          </div>
        </div>
      </el-header>
      <el-main>
       <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
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
          path: "/information",
          label: "资讯管理",
          children: [
            {
              path: "/article-column",
              label: "文章栏目"
            },
            {
              path: '/article-list',
              label: '文章列表'
            },
            {
              path: "/finger",
              label: "行业信息"
            }
          ]
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
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
      currentPage4: 4
    };
  },
  // mounted() {
    // alert("mouted");
  //   this.initChart();
  // },
  // beforeMount() {
  //   // alert("beforeMount");
  // },
  // created() {
  //   // alert("created");
  // },
  // beforeCreate() {
  //   // alert("beforeCreate");
  // },
  methods: {
    initChart() {
      let canvas = echarts.init(this.$refs.canvas);
      const options = {
        title: {
          text: ""
        },
        tooltip: {},
        xAxis: {
          data: ["1:00", "2:00", "3:00", "4:00", "5:00","6:00","7:00","8:00", "9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [380, 440, 180, 410, 380, 658,546,524,453,485,427,278,388,392, 658,546,524,453,485,427,278,388,392,]
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
.el-container {
  height: 100vh;
  .el-aside {
    background-color: rgb(48, 65, 86);
  }
}
.el-button {
  background-color: #06ca9e;
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
    padding: 0px 0px;
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
  .admin {
    width:130px;
    height: 10px;
    float: right
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
.chartleft{
  padding: 10px;
}
.el-button-group{
  padding: 10px
}
.block {
  height: 67px;
  line-height: 67px;
  margin: 37px 0 0 0;
  display: flex;
  justify-content: center;
}
</style>
