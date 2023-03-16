<template>
	<view class="detail">
		<view class="title">
			{{title}}
		</view>
		<view class="info">
			<view class="authot">
				编辑：{{author}}
			</view>
			<view class="time">
				{{time}}
			</view>
		</view>
		<view class="content">
			{{detail}}
		</view>
		<view class="pic">
			<image :src="pic" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:null,
				title:null,
				author:null,
				time:null,
				pic:null,
				detail:null
			}
		},
		onLoad(e){
			this.id = e.id
			this.getNoticeDetail()
		},
		methods: {
			getNoticeDetail(){
				uni.request({
					url:"http://localhost:8000/app/hesuan/notice_intro/info?id=" + this.id,
					success:res => {
						this.title = res.data.data.title
						this.author = res.data.data.author
						this.time = res.data.data.time
						this.pic = res.data.data.pic
						this.detail = res.data.data.detail
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.detail{
	padding: 30rpx;
	
	.title{
		font-size: 40rpx;
		color: #333;
	}
	.info{
		background: #f6f6f6;
		padding: 10rpx;
		font-size: 25rpx;
		color: #666;
		display: flex;
		justify-content: space-between;
		margin: 40rpx 0;
	}
	.content{
		padding-bottom: 50rpx;
	}
}
</style>
