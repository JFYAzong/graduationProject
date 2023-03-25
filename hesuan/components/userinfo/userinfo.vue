<template>
	<view>
		{{JSON.stringify(userinfo)}}
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		name:"userinfo",
		data() {
			return {
				
			};
		},
		computed:{
			...mapState('m_user',['userinfo'])
		},
	}
</script>

<style lang="scss">

</style>