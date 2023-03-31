<template>
	<view>
		<u-cell-group>
			<u-cell title="姓名" :value="name"></u-cell>
			<u-cell title="学号" :value="number"></u-cell>
			<u-cell title="核酸结果" :value="reportResult"></u-cell>
			<u-cell title="检测医院" :value="hospital"></u-cell>
			<u-cell title="报告时间" :value="reportTime"></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	import cellGroup from '../../uni_modules/uview-ui/libs/config/props/cellGroup.js'
	export default {
		name:"hesuanReport",
		props:{
			name:{
				type:String,
				default:''
			},
			number:{
				type:String,
				default:''
			},
			reportResult:{
				type:String,
				default:''
			},
			hospital:{
				type:String,
				default:''
			},
			reportTime:{
				type:String,
				default:''
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>