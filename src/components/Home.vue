<template>
	<el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/doc.png" alt="">
        <span>在线协同编辑工具</span>
      </div>
      <el-button type="success" @click="logout" plain>退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
          <!-- 一级菜单 -->
		<el-menu-item :index="menurouter.user">
			<template slot="title">
			<i class="el-icon-user-solid"></i>
			<span>用户管理</span>
			</template>
		</el-menu-item>
		<el-menu-item :index="menurouter.myTask">
			<template slot="title">
			<i class="el-icon-s-order"></i>
			<span>我的任务</span>
			</template>
		</el-menu-item>
		<el-menu-item :index="menurouter.newTask">
			<template slot="title">
			<i class="el-icon-s-flag"></i>
			<span>任务发起</span>
			</template>
		</el-menu-item>
		<el-menu-item :index="menurouter.taskState">
			<template slot="title">
			<i class="el-icon-s-opportunity"></i>
			<span>状态监控</span>
			</template>
		</el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      activePath: '',
      isCollapse: false,
      menurouter:{
      	user:'/home/users',
      	myTask:'/home/mytask',
      	newTask:'/home/newttask',
      	taskState:'/home/taskstate',
      }
    }
  },
  created() {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 点击按钮，切换菜单的折叠与展开
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
	height: 100%;
}
.el-header {
	background-color: #373d41;
	display: flex;
	justify-content: space-between;
	padding-left: 0;
	align-items: center;
	color: #fff;
	font-size: 20px;
	> div {
		display: flex;
		align-items: center;
		span {
			margin-left: 15px;
		}
	}
}

.el-aside {
	background-color: #333744;
	.el-menu {
		border-right: none;
	}
}

.el-main {
	background-color: #eaedf1;
}

.iconfont {
	margin-right: 10px;
}

.toggle-button {
	background-color: #4a5064;
	font-size: 10px;
	line-height: 24px;
	color: #fff;
	text-align: center;
	letter-spacing: 0.2em;
	cursor: pointer;
}
</style>