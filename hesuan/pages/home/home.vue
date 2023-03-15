<template>
	<view class="container">
		<view class="switcher">
			<view class="switcher__item" v-for="(item, index) of ['人数统计','报告统计']" :key="index"
				:class="{ 'switcher__item-active': currentIndex === index }" @click="currentIndex = index;select = item;">
				{{ item }}
			</view>
		</view>
		
		<uchart class="charts" chartData = chartData></uchart>
		
		<view class="wrap">
			<view class="row" v-for="(item,index) in noticeIntro" :key="index">
				<newsbox :item="item" @click.native="goDetail"></newsbox>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
		data() {
			return {
				currentIndex:0,
				select:'人数统计',
				chartData:{},
				noticeIntro:[]
			}
		},
		onLoad() {
			this.getNoticeData();
		},
		methods: {
			// getData(){
			// 	if(this.select === '人数统计'){
			// 		let res = {888
			// 			series: [{
			// 				data: [{
			// 					"name": "已做",
			// 					"value": 50
			// 				}, {
			// 					"name": "未做",
			// 					"value": 30
			// 				}]
			// 			}]
			// 		};
			// 	}else{
			// 		res = {
			// 			series: [{
			// 				data: [{
			// 					"name": "阴性",
			// 					"value": 76
			// 				}, {
			// 					"name": "阳性",
			// 					"value": 4
			// 				}]
			// 			}]
			// 		};
			// 	}
			// 	this.chartData = JSON.parse(JSON.stringify(res));
			// },
			
			goDetail(){
				uni.navigateTo({
					url:"/pages/detail/detail"
				})
			},
			getNoticeData(){
				uni.request({
					url:"http://localhost:8000/app/hesuan/notice_intro/list",
					method: 'POST',
					success:res => {
						console.log(res)
						this.noticeIntro = res.data.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.switcher {
			// position: absolute;
			padding-left: 500rpx;
			height: 40rpx;
			width: 260rpx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			&__item {
				width: 120rpx;
				height: 40rpx;
				font-size: 25rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: black;
				opacity: 0.6;
				cursor: pointer;
				text-align: center;
				line-height: 30rpx;

				&-active {
					opacity: 1;
					background: url('../../static/icon-common-switcher.png');
					height: 40rpx;
					width: 120rpx;
				}
			}
		}
		
		.wrap{
			padding: 30rpx;
			.row{
				border-bottom: 1px dotted #efefef;
				padding:15rpx 0;
			}
		}
	}
</style>
