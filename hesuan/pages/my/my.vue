<template>
	<view class="my-container">
		<login v-if="!userinfo.avatar"></login>
		<userinfo v-else></userinfo>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		data() {
			return {
				// userInfo:''
			}
		},
		// onLoad() {
		// 	this.getLocalStoreUserInfo()
		// 	console.log(this.userInfo.avatarUrl)
		// },
		computed:{
			...mapState('m_user',['userinfo'])
		},
		methods: {
			// getLocalStoreUserInfo(){
			// 	this.userInfo = uni.getStorageSync('userInfo')
			// 	console.log('touxiang',this.userInfo.avatarUrl)
			// }
		}
	}
</script>

<style lang="scss">
page, .my-container{
	height: 100%;
}
</style>
