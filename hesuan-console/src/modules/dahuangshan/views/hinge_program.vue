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

<script lang="ts" name="dahuangshan-hinge_program" setup>
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
			label: "火车站",
			prop: "railwayStation",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "机场", prop: "airport", required: true, component: { name: "el-input" } },
		{ label: "高速收费站", prop: "tollGate", required: true, component: { name: "el-input" } },
		{
			label: "客运站",
			prop: "passengerStation",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "航运站", prop: "airStation", required: true, component: { name: "el-input" } }
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
		{ label: "火车站", prop: "railwayStation" },
		{ label: "机场", prop: "airport" },
		{ label: "高速收费站", prop: "tollGate" },
		{ label: "客运站", prop: "passengerStation" },
		{ label: "航运站", prop: "airStation" },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.dahuangshan.hinge_program
	},
	(app) => {
		app.refresh();
	}
);
</script>
