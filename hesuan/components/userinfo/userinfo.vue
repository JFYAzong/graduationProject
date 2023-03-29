<template>
	<view class="userinfo-container">
		<!-- {{JSON.stringify(userinfo)}} -->
		<view class="top-box">
			<image :src="userinfo.avatar" class="avatar"></image>
			<view class="nickname">{{userinfo.wechatName}}</view>
		</view>

		<view class="panel-list">
			<view class="panel">
				<view class="panel-list-item" @click="goToUserMessage()">
					<text>个人信息</text>
					<uni-icons type="arrowright" size="15"></uni-icons>
				</view>
				<view class="panel-list-item" @click="goToHesuanHistory()">
					<text>核酸报告历史查询</text>
					<uni-icons type="arrowright" size="15"></uni-icons>
				</view>
				<view class="panel-list-item" @click="logout()">
					<text>退出登录</text>
					<uni-icons type="arrowright" size="15"></uni-icons>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: "userinfo",
		data() {
			return {

			};
		},
		computed: {
			...mapState('m_user', ['userinfo'])
		},
		methods: {
			...mapMutations('m_user', ['updateUserInfo']),
			goToUserMessage(){
				uni.navigateTo({
					url:'/pages/detail/updataUserMessage'
				})
			},
			goToHesuanHistory(){
				uni.navigateTo({
					url:'/pages/detail/hesuanHistory'
				})
			},
			async logout(){
				const modalResult = await uni.showModal({
					title: '提示',
					content: '确认退出登录吗？'
				}).catch(err => err)

				if(modalResult.confirm){
					uni.request({
						url:'http://localhost:8000/app/hesuan/logout/logout',
						method:'POST',
						data:{
							openid:JSON.parse(uni.getStorageSync('userInfo')).openid
						},
						success: (reqRes) => {
							// console.log('reqRes',reqRes)
							this.updateUserInfo(reqRes.data)
						}
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.userinfo-container {
		height: 100%;
		background-color: #f4f4f4;

		.top-box {
			height: 400rpx;
			background-color: #c00000;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;

			.avatar {
				width: 90px;
				height: 90px;
				border-radius: 45px;
				border: 2px solid #FFF;
				box-shadow: 0 1px 5px black;
			}

			.nickname {
				font-size: 16px;
				color: #FFF;
				font-weight: bold;
				margin-top: 10px;
			}
		}

		.panel-list {
			padding: 0 10px;
			position: relative;
			top: -10px;

			.panel {
				background-color: white;
				border-radius: 3px;
				margin-bottom: 8px;

				.panel-list-item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 15px;
					padding: 0 10px;
					line-height: 45px;
				}
			}
		}
	}
</style>
