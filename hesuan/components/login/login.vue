<template>
	<view class="container">

		<uni-icons type="contact" size="100" color="#AFAFAF"></uni-icons>
		<button type="primary" class="btn-login" @click="getUserProfile()">一键登录</button>
		<text class="tip-text">登录获取个人信息</text>
	</view>
</template>

<script>
	import {
		mapMutations,mapState
	} from 'vuex'
	export default {
		name: "login",
		data() {
			return {
			};
		},
		methods: {
			...mapMutations('m_user', ['updateUserInfo']),
			...mapState('m_user', ['userinfo']),
			//用户授权以后获取用户基本信息
			getUserProfile(e) {
				const that = this
				uni.getUserProfile({
					desc: '获取用户信息',
					success: (res) => {
						// console.log('userinfo',uni.getStorageSync('userInfo').openid);
						uni.request({
							url:'http://localhost:8000/app/hesuan/set_user/setuser',
							method:'POST',
							data:{
								nickName:res.userInfo.nickName,
								avatarUrl:res.userInfo.avatarUrl,
								openid:JSON.parse(uni.getStorageSync('userInfo')).openid
								// openid:this.userinfo.openid
							},
							success: (reqRes) => {
								console.log('reqRes',reqRes)
								this.updateUserInfo(reqRes.data)
							}
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.container {
		height: 750rpx;
		background-color: #f8f8f8;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;

		&::after {
			content: '';
			display: block;
			width: 100%;
			height: 40px;
			background-color: white;
			position: absolute;
			bottom: 0;
			left: 0;
			border-radius: 100%;
			transform: translateY(50%);
		}

		.btn-login {
			width: 90%;
			border-radius: 100px;
			margin: 15px 0;
			background-color: green;
		}

		.tip-text {
			font-size: 12px;
			color: gray;
		}
	}
</style>
