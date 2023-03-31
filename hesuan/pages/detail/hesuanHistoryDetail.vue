<template>
	<view>
		<hesuanReport :name="name" :number="number" :reportResult="reportResult" :reportTime="reportTime" :hospital="hospital"></hesuanReport>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:null,
				name:null,
				number:null,
				reportResult:null,
				hospital:null,
				reportTime:null,
			};
		},
		onLoad(e) {
			this.id = e.id
			this.getHesuanHistoryReport()
		},
		methods:{
			getHesuanHistoryReport(){
				uni.request({
					url:"http://localhost:8000/app/hesuan/hesuan_report/info?id=" + this.id,
					success:res => {
						// console.log(res)
						this.name = res.data.data.name
						this.number = res.data.data.number
						this.reportResult = res.data.data.reportResult
						this.hospital = res.data.data.hospital
						this.reportTime = res.data.data.reportTime
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
