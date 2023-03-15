<template>
	<view class="newsbox">
		<view class="pic">
			<image :src="item.pic" mode="aspectFill"></image>
		</view>
		<view class="text">
			<view class="title">
				{{item.title}}
			</view>
			<view class="info">
				<text>发布者:{{item.author}}</text>
				<text>发布时间:{{item.time}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newsbox",
		props:{
			item:{
				type:Object,
				default(){
					return{
						title:'默认标题',
						author:'张三',
						time:'2020.10.10',
						pic:'../../static/yuanxing.png'
					}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.newsbox{
	display: flex;
	justify-content: space-between;
	.pic{
		width: 230rpx;
		height: 160rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.text{
		flex:1;
		padding-left: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title{
			font-size: 35rpx;
			color: #333;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.info{
			font-size: 26rpx;
			color: #999;
			text{
				padding-right: 30rpx;
			}
		}
	}
}
</style>