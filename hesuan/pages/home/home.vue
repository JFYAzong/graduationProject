<template>
	<view class="container">
		<view class="switcher">
			<view class="switcher__item" v-for="(item, index) of ['人数统计','报告统计']" :key="index"
				:class="{ 'switcher__item-active': currentIndex === index }"
				@click="currentIndex = index;select = item;getData()">
				{{ item }}
			</view>
		</view>

		<uchart class="charts" :chartData=chartData :key="select"></uchart>

		<view class="wrap">
			<view class="row" v-for="(item,index) in noticeIntro" :key="index">
				<newsbox :item="item" @click.native="goDetail(item)"></newsbox>
			</view>
		</view>

	</view>
</template>

<script>	
	import {
		mapMutations
	} from 'vuex'
	
	export default {		
		data() {
			return {
				currentIndex: 0,
				select: '人数统计',
				chartData: {},
				noticeIntro: [],
				done: null,
				undone: null,
				positive: null,
				negative: null,
			}
		},
		// created() {
		// },
		onLoad() {
			this.getNoticeIntro();
			this.getHesuanCount();
		},
		onReady() {
			this.getUserCode(),
			setTimeout(() => {
				this.getData()
			}, 1000)
		},
		methods: {
			...mapMutations('m_user', ['updateUserInfo']),
			getData() {
				if (this.select === '人数统计') {
					var res = {
						series: [{
							data: [{
								"name": "已做",
								"value": this.done
							}, {
								"name": "未做",
								"value": this.undone
							}]
						}]
					};
				} else {
					res = {
						series: [{
							data: [{
								"name": "阴性",
								"value": this.negative
							}, {
								"name": "阳性",
								"value": this.positive
							}]
						}]
					};
				}
				this.chartData = JSON.parse(JSON.stringify(res));
			},

			goDetail(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/detail/detail?id=${item.id}`
				})
			},
			getNoticeIntro() {
				uni.request({
					url: "http://localhost:8000/app/hesuan/notice_intro/list",
					method: 'POST',
					success: res => {
						this.noticeIntro = res.data.data
					}
				})
			},
			getHesuanCount() {
				uni.request({
					url: "http://localhost:8000/app/hesuan/hesuan_count/list",
					method: 'POST',
					success: res => {
						this.done = res.data.data[0].done
						this.undone = res.data.data[0].undone
						this.positive = res.data.data[0].positive
						this.negative = res.data.data[0].negative
					}
				})
			},
			getUserCode() {
				const that = this
				uni.login({
					provider: 'weixin', //使用微信登录
					success: function(loginRes) {
						// console.log('loginRes',loginRes)
						uni.request({
							url: 'http://localhost:8000/app/hesuan/get_openid/getopenid',
							method: 'POST',
							data: loginRes,
							success: (res) => {
								console.log(res.data)
								that.updateUserInfo(res.data)
							}
						})
					}
				});
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

		.wrap {
			padding: 30rpx;

			.row {
				border-bottom: 1px dotted #efefef;
				padding: 15rpx 0;
			}
		}
	}
</style>
