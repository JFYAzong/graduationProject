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

<script lang="ts" name="dahuangshan-village_detail" setup>
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
		{ label: "村庄名称", prop: "name", required: true, component: { name: "el-input" } },
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
			component: { name: "el-input" },
			required: true
		},
		{ label: "经度", prop: "longitude", component: { name: "el-input" } },
		{ label: "纬度", prop: "latitude", component: { name: "el-input" } },
		{ label: "分组", prop: "group", component: { name: "el-input" } },
		{
			label: "介绍",
			prop: "introduction",
			component: { name: "el-input", props: { type: "textarea" } }
		},
		// { label: "户数", prop: "residence", component: { name: "el-input" } },
		// { label: "户籍人口", prop: "population", component: { name: "el-input" } },
		// { label: "常住人口", prop: "permanent", component: { name: "el-input" } },
		// { label: "房屋总数量", prop: "house", component: { name: "el-input" } },
		// { label: "闲置房屋", prop: "leave", component: { name: "el-input" } },
		// { label: "闲置占比", prop: "leaveRaio", component: { name: "el-input" } },
		// { label: "村庄面积(平方千米)", prop: "area", component: { name: "el-input" } },
		// { label: "自然村开发情况", prop: "developCondition", component: { name: "el-input" } },
		// { label: "通村公路等级", prop: "roadLevel", component: { name: "el-input" } },
		// {
		// 	label: "距最近高速出口距离(公里)",
		// 	prop: "distanceToFreeway",
		// 	component: { name: "el-input" }
		// },
		// { label: "距高铁站距离(公里)", prop: "distanceToRailway", component: { name: "el-input" } },
		// {
		// 	label: "距县道、省道最近距离(公里)",
		// 	prop: "distanceToHighway",
		// 	component: { name: "el-input" }
		// },
		// {
		// 	label: "距县城最近距离(公里)",
		// 	prop: "distanceToDistrict",
		// 	component: { name: "el-input" }
		// },
		// {
		// 	label: "距乡镇中心距离(公里)",
		// 	prop: "distanceToVillage",
		// 	component: { name: "el-input-number", props: { min: 0 } }
		// },
		{
			label: "图片",
			prop: "pics",
			component: { name: "cl-upload", props: { listType: "picture-card", multiple: true } }
		},
		{
			label: "视频",
			prop: "videos",
			component: {
				name: "cl-upload",
				props: { listType: "text", multiple: true, type: "file" }
			}
		}
	],
	props: {
		labelWidth: "180px"
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
		{ label: "村庄名称", prop: "name", width: "100px" },
		{ label: "市", prop: "shi", width: "100px" },
		{ label: "县", prop: "xian", width: "100px" },
		{ label: "所属乡（镇）", prop: "village", width: "100px" },
		{ label: "经度", prop: "longitude" },
		{ label: "纬度", prop: "latitude" },
		{ label: "分组", prop: "group" },
		{ label: "介绍", prop: "introduction", "show-overflow-tooltip": true, width: "200px" },
		// { label: "户数", prop: "residence" },
		// { label: "户籍人口", prop: "population" },
		// { label: "常住人口", prop: "permanent" },
		// { label: "房屋总数量", prop: "house" },
		// { label: "闲置房屋", prop: "leave" },
		// { label: "闲置占比", prop: "leaveRaio" },
		// { label: "村庄面积(平方千米)", prop: "area" },
		// { label: "自然村开发情况", prop: "developCondition" },
		// { label: "通村公路等级", prop: "roadLevel" },
		// { label: "距最近高速出口距离(公里)", prop: "distanceToFreeway" },
		// { label: "距高铁站距离(公里)", prop: "distanceToRailway" },
		// { label: "距县道、省道最近距离(公里)", prop: "distanceToHighway" },
		// { label: "距县城最近距离(公里)", prop: "distanceToDistrict" },
		// { label: "距乡镇中心距离(公里)", prop: "distanceToVillage" },
		{ label: "图片", prop: "pics", component: { name: "cl-image", props: { size: 60 } } },
		{ label: "视频", prop: "videos", width: "400px;", component: { name: "cl-link" } },
		{ label: "创建时间", prop: "createTime", width: "160px" },
		{ label: "更新时间", prop: "updateTime", width: "160px" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.dahuangshan.village_detail
	},
	(app) => {
		app.refresh();
	}
);
</script>
