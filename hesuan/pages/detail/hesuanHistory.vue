<template>
	<view class="container">
		<u-list @scrolltolower="scrolltolower">
			<u-list-item v-for="(item,index) in historList" :key="index">
				<u-cell :title="`${item.reportTime}核酸报告`" @click="goToHesuanHistoryDetail(item)">
					<u-avatar slot="icon" shape="square" size="35" src="/static/report-icon.png"
						customStyle="margin: -3px 5px -3px 0"></u-avatar>
				</u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	import list from '../../uni_modules/uview-ui/libs/config/props/list.js'
	import _ from 'lodash'
	export default {
		data() {
			return {
				historList: []
			};
		},
		onLoad() {
			this.getHesuanHistory()
		},
		methods: {
			getHesuanHistory() {
				uni.request({
					url: "http://localhost:8000/app/hesuan/hesuan_report/getUserReport",
					method: 'POST',
					data:{
						number:JSON.parse(uni.getStorageSync('userInfo')).userNumber
					},
					success: res => {
						this.historList = _.orderBy(res.data,['reportTime'],['desc'])
						console.log('1111', this.historList)
					}
				})
			},
			goToHesuanHistoryDetail(item){
				// console.log(item)
				uni.navigateTo({
					url: `/pages/detail/hesuanHistoryDetail?id=${item.id}`
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
