<template>
	<cl-crud ref="Crud">
		<el-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</el-row>

		<el-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</el-row>

		<el-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</el-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="dahuangshan-resource_detail" setup>
import { ElMessage } from "element-plus";
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { provide, ref } from "vue";

const { service } = useCool();

const videoUploadSuccess = ref(0);
provide("videoUploadSuccess", videoUploadSuccess);

const picUploadSuccess = ref(0);
provide("picUploadSuccess", picUploadSuccess);

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "资源名", prop: "name", required: true, component: { name: "el-input" } },
		{ label: "资源分类", prop: "type", component: { name: "el-input" } },
		{
			label: "资源具体类型",
			prop: "detailType",
			component: {
				name: "el-select",
				options: [
					{ value: "体育赛事类", label: "体育赛事类" },
					{ value: "医养康养类", label: "医养康养类" },
					{ value: "会展经济类", label: "会展经济类" },
					{ value: "创意创造类", label: "创意创造类" },
					{ value: "旧厂房设施类", label: "旧厂房设施类" },
					{ value: "其他", label: "其他" }
				]
			}
		},
		{
			label: "介绍",
			prop: "introduction",
			component: { name: "el-input", props: { type: "textarea" } }
		},
		{
			label: "市",
			prop: "shi",
			component: { name: "el-input" },
			required: true
		},
		{
			label: "县",
			prop: "xian",
			component: { name: "el-input" },
			required: true
		},
		{
			label: "所属乡（镇）",
			prop: "village",
			component: { name: "el-input" }
		},
		// { label: "经度", prop: "longitude", component: { name: "el-input" } },
		// { label: "纬度", prop: "latitude", component: { name: "el-input" } },
		// { label: "是否完全位于生态保护红线内", prop: "protect", component: { name: "el-input" } },
		// { label: "是否在自然公园内", prop: "park", component: { name: "el-input" } },
		// {
		// 	label: "基本情况（优势特点）",
		// 	prop: "merit",
		// 	component: { name: "el-input", props: { type: "textarea" } }
		// },
		// { label: "产权属性", prop: "propertyRight", component: { name: "el-input" } },
		// { label: "面积（平方米）", prop: "areaNumber", component: { name: "el-input" } },
		// { label: "年代", prop: "year", component: { name: "el-input" } },
		// { label: "其他", prop: "other", component: { name: "el-input" } },
		{
			label: "图片",
			prop: "pics",
			component: {
				name: "cl-upload",
				props: { listType: "picture-card", multiple: true }
				// ref: setRefs("uploadPic")
			}
		},
		{
			label: "视频",
			prop: "videos",
			component: {
				name: "cl-upload",
				props: { listType: "text", multiple: true, type: "file", accept: "mov,mp4" }
				// ref: setRefs("uploadVideo")
			}
		}
	],
	props: {
		labelWidth: "150px"
	},
	async onSubmit(data, { done, close, next }) {
		console.log("1111", videoUploadSuccess.value, picUploadSuccess.value);
		if (videoUploadSuccess.value > 0 || picUploadSuccess.value > 0) {
			ElMessage.error("资源未上传完，请稍候保存");
			done();
		} else {
			next({
				...data,
				status: false
			});
		}
		// done 关闭加载状态
		// close 关闭弹窗
	}
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "资源名", prop: "name", width: "160px" },
		{ label: "资源分类", prop: "type", width: "120px" },
		{
			label: "资源具体类型",
			prop: "detailType",
			width: "100px"
		},
		{ label: "介绍", prop: "introduction", "show-overflow-tooltip": true, width: "200px" },
		{ label: "市", prop: "shi", width: "100px" },
		{ label: "县", prop: "xian", width: "100px" },
		{ label: "所属乡（镇）", prop: "village" },
		{ label: "经度", prop: "longitude" },
		{ label: "纬度", prop: "latitude" },
		// { label: "是否完全位于生态保护红线内", prop: "protect" },
		// { label: "是否在自然公园内", prop: "park" },
		// {
		// 	label: "基本情况（优势特点）",
		// 	prop: "merit",
		// 	"show-overflow-tooltip": true,
		// 	width: "200px"
		// },
		// { label: "产权属性", prop: "propertyRight" },
		// { label: "面积（平方米）", prop: "areaNumber" },
		// { label: "年代", prop: "year" },
		// { label: "其他", prop: "other" },
		{ label: "图片", prop: "pics", component: { name: "cl-image", props: { size: 60 } } },
		{ label: "创建时间", prop: "createTime", width: "160px" },
		{ label: "更新时间", prop: "updateTime", width: "160px" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.dahuangshan.resource_detail
	},
	(app) => {
		app.refresh();
	}
);
</script>
