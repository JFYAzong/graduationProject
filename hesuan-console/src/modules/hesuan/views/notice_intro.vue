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

<script lang="ts" name="hesuan-notice_intro" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { provide, ref } from "vue";

const picUploadSuccess = ref(0);
provide("picUploadSuccess", picUploadSuccess);
const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "公告标题", prop: "title", required: true, component: { name: "el-input" } },
		{ label: "发布者", prop: "author", required: true, component: { name: "el-input" } },
		{
			label: "发布时间",
			prop: "time",
			component: {
				name: "el-date-picker",
				props: { type: "datetime", valueFormat: "YYYY-MM-DD HH:mm:ss" }
			},
			required: true
		},
		{ label: "公告详情", prop: "detail", required: true, component: { name: "el-input" } },
		{ label: "地点照片", prop: "pic", component: { name: "cl-upload" } }
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "公告标题", prop: "title" },
		{ label: "发布者", prop: "author" },
		{ label: "发布时间", prop: "time" },
		{ label: "公告详情", prop: "detail" },
		{ label: "地点照片", prop: "pic", component: { name: "cl-image", props: { size: 60 } } },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.hesuan.notice_intro
	},
	(app) => {
		app.refresh();
	}
);
</script>
