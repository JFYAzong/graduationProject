<template>
	<cl-crud ref="Crud">
		<el-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
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

<script lang="ts" name="dahuangshan-point_resource" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{
			label: "分类",
			prop: "type",
			component: {
				name: "el-radio-group",
				options: [
					{ label: "示范区", value: 0 },
					{ label: "核心区", value: 1, color: "#67C23A" }
				]
			},
			value: 0,
			required: true
		},
		{
			label: "国家全域旅游示范区",
			prop: "nationCount",
			required: true,
			component: { name: "el-input" }
		},
		{
			label: "省级旅游度假区",
			prop: "provinceCount",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "5A级景区", prop: "fiveACount", required: true, component: { name: "el-input" } },
		{ label: "4A级景区", prop: "fourACount", required: true, component: { name: "el-input" } }
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{
			label: "分类",
			prop: "type",
			dict: [
				{ label: "示范区", value: 0 },
				{ label: "核心区", value: 1, color: "#67C23A" }
			]
		},
		{ label: "国家全域旅游示范区", prop: "nationCount" },
		{ label: "省级旅游度假区", prop: "provinceCount" },
		{ label: "5A级景区", prop: "fiveACount" },
		{ label: "4A级景区", prop: "fourACount" },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.dahuangshan.point_resource
	},
	(app) => {
		app.refresh();
	}
);
</script>
