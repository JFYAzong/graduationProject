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

		<view class="qrcode-wrap">
			<view class="qrimg">
				<tki-qrcode ref="qrcode" :cid="cid" :val="val" :size="size" :unit="unit" :background="background"
					:foreground="foreground" :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv"
					:onval="onval" :loadMake="loadMake" :usingComponents="usingComponents" :showLoading="showLoading"
					:loadingText="loadingText" @result="qrR" />
			</view>
		</view>
	</view>
</template>

<script>
	import UQRCode from 'uqrcodejs';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		name: "userinfo",
		data() {
			return {
				cid: 'tki-qrcode-canvas', // 二维码唯一ID
				val: 'https://jfyazong.github.io/', // 要生成的二维码值
				size: 400, // 二维码大小
				unit: 'upx', // 单位
				background: '#000000', // 背景色
				foreground: '#ffffff', // 前景色
				pdground: '#ffffff', // 角标色
				icon: '', // 二维码图标 二维码中心的icon图标
				iconsize: 60, // 二维码中心icon图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: true, // val值变化时是否自动重新生成二维码
				loadMake: true, // 组件加载完成后是否自动生成二维码
				src: '', // 二维码生成后的图片地址或base64
				usingComponents: false, // 是否使用了自定义组件模式
				showLoading: true, // 是否显示loading
				loadingText: '二维码生成中', // loading展示文案
			};
		},
		computed: {
			...mapState('m_user', ['userinfo'])
		},
		beforeMount() {
			this.icon = JSON.parse(uni.getStorageSync('userInfo')).avatar
		},
		methods: {
			...mapMutations('m_user', ['updateUserInfo']),
			goToUserMessage() {
				uni.navigateTo({
					url: '/pages/detail/updataUserMessage'
				})
			},
			goToHesuanHistory() {
				uni.navigateTo({
					url: '/pages/detail/hesuanHistory'
				})
			},
			async logout() {
				const modalResult = await uni.showModal({
					title: '提示',
					content: '确认退出登录吗？'
				}).catch(err => err)

				if (modalResult.confirm) {
					uni.request({
						url: 'http://localhost:8000/app/hesuan/logout/logout',
						method: 'POST',
						data: {
							openid: JSON.parse(uni.getStorageSync('userInfo')).openid
						},
						success: (reqRes) => {
							// console.log('reqRes',reqRes)
							this.updateUserInfo(reqRes.data)
						}
					})
				}
			},
			qrR() {
				console.log('qrR')
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

		.qrcode-wrap {
			box-sizing: border-box;
			padding: 20rpx 40rpx;
			display: flex;
			justify-content: center;
			height: 500rpx;

			.tki-qrcode {
				padding: 30rpx;
				height: 400rpx;
				border-radius: 16rpx;
				background-color: #e8de61;
			}
		}

	}
</style>
