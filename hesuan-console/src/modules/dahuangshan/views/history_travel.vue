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

<script lang="ts" name="dahuangshan-history_travel" setup>
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
		{ label: "年份", prop: "year", required: true, component: { name: "el-input" } },
		{
			label: "入境人数（万人次）",
			prop: "population",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "收入（亿美元）", prop: "income", required: true, component: { name: "el-input" } }
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
		{ label: "年份", prop: "year" },
		{ label: "入境人数（万人次）", prop: "population" },
		{ label: "收入（亿美元）", prop: "income" },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.dahuangshan.history_travel
	},
	(app) => {
		app.refresh();
	}
);
</script>
