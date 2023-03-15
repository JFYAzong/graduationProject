export default () => {
	return {
		components: [import("./components/index.vue"), import("./components/space.vue")],

		options: {
			// 尺寸
			size: 120,
			// 显示文案
			text: "选择文件",
			// 限制
			limit: {
				// 上传最大数量
				upload: 100,
				// 文件空间选择数
				select: 1000,
				// 上传大小限制
				size: 2000
			}
		}
	};
};
