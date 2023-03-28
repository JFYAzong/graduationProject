<template>
	<view class="">
		<u--form :model="form" ref="uForm">
			<u-form-item label="姓名" prop="username">
				<u-input v-model="form.username" />
			</u-form-item>
			<u-form-item label="学号" prop="usernumber">
				<u-input v-model="form.usernumber" />
			</u-form-item>
			<u-form-item label="所属院系班级" prop="department">
				<u-input v-model="form.department" />
			</u-form-item>
		</u--form>
		<u-button @click="submit">确认修改</u-button>
	</view>
</template>

<script>
	import {
		mapMutations,mapState
	} from 'vuex'
	import form from '../../uni_modules/uview-ui/libs/config/props/form';
	export default {
		data() {
			return {
				form: {
					username:JSON.parse(uni.getStorageSync('userInfo')).userName,
					usernumber: JSON.parse(uni.getStorageSync('userInfo')).userNumber,
					department: JSON.parse(uni.getStorageSync('userInfo')).department
				},
				rules: {
					name: {
						required: true,
						message: '请输入姓名',
						trigger: ['blur', 'change']
					},
					usernumber: {
						required: true,
						message: '请输入你的学号',
						trigger: ['blur', 'change']
					},
					department: {
						required: true,
						message: '请输入你所在的院系班级',
						trigger: ['blur', 'change']
					},

				}
			};
		},
		computed:{
			...mapState('m_user',['userinfo'])
		},
		methods: {
			...mapMutations('m_user', ['updateUserInfo']),
			submit() {
				// console.log(this.form)
				uni.request({
					url:'http://localhost:8000/app/hesuan/set_user/setuser',
					method:'POST',
					data:{
						userName:this.form.username,
						userNumber:this.form.usernumber,
						department:this.form.department,
						openid:JSON.parse(uni.getStorageSync('userInfo')).openid
						// openid:this.userinfo.openid
					},
					success: (reqRes) => {
						console.log('reqRes',reqRes)
						this.updateUserInfo(reqRes.data)
					}
				})
			}
		},
	}
</script>

<style lang="scss">

</style>
