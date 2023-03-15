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

<script lang="ts" name="dahuangshan-travel_invest" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{
			label: "招商项目",
			prop: "attractProgram",
			required: true,
			component: { name: "el-input" }
		},
		{
			label: "在建项目",
			prop: "buildProgram",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "招商金额", prop: "attractCost", required: true, component: { name: "el-input" } },
		{ label: "在建金额", prop: "buildCost", required: true, component: { name: "el-input" } }
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "招商项目", prop: "attractProgram" },
		{ label: "在建项目", prop: "buildProgram" },
		{ label: "招商金额", prop: "attractCost" },
		{ label: "在建金额", prop: "buildCost" },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.dahuangshan.travel_invest
	},
	(app) => {
		app.refresh();
	}
);
</script>
