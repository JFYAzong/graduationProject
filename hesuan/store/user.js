export default{
	namespaced: true,
	
	state:()=>({
		userinfo:JSON.parse(uni.getStorageSync('userInfo') || '{}'),
	}),
	
	mutations:{
		updateUserInfo(state,userinfo){
			state.userinfo = userinfo
			
			uni.setStorageSync('userInfo',JSON.stringify(state.userinfo))
		},
	},
	
	getters:{
		
	}
}