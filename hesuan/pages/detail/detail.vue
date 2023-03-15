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
			请音乐学院211的同学们于2023.3.13 15：30，在新校区中区操场进行核酸检测。
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
				cid:null,
				title:null,
				author:null,
				time:null,
				pic:null
			}
		},
		onLoad(e){
			this.cid = e.cid
			this.title = e.title
			this.author = e.author
			this.time = e.time
			this.pic = e.pic
		},
		methods: {
			
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
