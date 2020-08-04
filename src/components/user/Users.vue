<template>
	<div>
		<el-card>
	    <el-breadcrumb separator-class="el-icon-arrow-right">
	      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
	      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
	    </el-breadcrumb>
	    </el-card>
	    <el-card class="box-card">
	    	<el-form ref="form" :model="userSerch" label-width="80px">
		    	<el-row>
				  <el-col :span="6">
				  	<el-form-item label="活动名称">
						<el-input v-model="userSerch.userName"></el-input>
					</el-form-item>
				  </el-col>
				  <el-col :span="6">
				  	<el-form-item label="活动区域">
						<el-input v-model="userSerch.userRole"></el-input>
					</el-form-item>
				  </el-col>
				  <el-col :span="3">
						<el-form-item>
							<el-button type="primary" @click="onSubmit">立即创建</el-button>
						</el-form-item>
					</el-col>
				</el-row>
				
			</el-form>
	    </el-card>

	</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
		  userSerch:{
		  	userName:'',
			userRole:''
		  }
		}
	},
	methods:{
		onSubmit(){
			alert(this.userSerch.userRole);
		}
	}
}
</script>

<style type="text/css">

</style>