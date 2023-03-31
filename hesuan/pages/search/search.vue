<template>
	<view class="container">
		<u-search placeholder="请输入你的学号" v-model="keyword" @custom="searchHesuan()"></u-search>

		<hesuanReport :name="reportList.name" :number="reportList.number" :reportResult="reportList.reportResult"
			:reportTime="reportList.reportTime" :hospital="reportList.hospital"></hesuanReport>
	</view>
</template>

<script>
	import search from '../../uni_modules/uview-ui/libs/config/props/search.js'
	export default {
		data() {
			return {
				keyword: '', // 搜索关键词
				reportList: {}
			};
		},
		methods: {
			searchHesuan() {
				uni.request({
					url: "http://localhost:8000/app/hesuan/hesuan_report/getUserReport",
					method: 'POST',
					data: {
						number: this.keyword
					},
					success: res => {
						this.reportList = _.orderBy(res.data, ['reportTime'], ['desc'])[0]
						// console.log('1111', !this.reportList)
						if (!this.reportList) {
							uni.showToast({
								icon: 'error',
								title: '近期没有核酸记录'
							});
						}
					}
				})
			}
		},
	};
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;

	}
</style>
