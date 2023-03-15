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

<script lang="ts" name="dahuangshan-resource_number" setup>
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
				name: "el-select",
				options: [
					{ label: "全部", value: 0 },
					{ label: "黄山市", value: 1, color: "#67C23A" },
					{ label: "安庆市", value: 2, color: "#E6A23C" },
					{ label: "池州市", value: 3, color: "#F56C6C" },
					{ label: "宣城市", value: 4, color: "#909399" }
				]
			},
			value: 0,
			required: true
		},
		{ label: "其他类", prop: "other", required: true, component: { name: "el-input" } },
		{
			label: "创意创造类",
			prop: "originality",
			required: true,
			component: { name: "el-input" }
		},
		{ label: "会展经济类", prop: "economy", required: true, component: { name: "el-input" } },
		{ label: "医养康养类", prop: "medical", required: true, component: { name: "el-input" } },
		{ label: "体育赛事类", prop: "sport", required: true, component: { name: "el-input" } },
		{
			label: "旧建筑、废弃地",
			prop: "oldFacility",
			required: true,
			component: { name: "el-input" }
		}
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
				{ label: "全部", value: 0 },
				{ label: "黄山市", value: 1, color: "#67C23A" },
				{ label: "安庆市", value: 2, color: "#E6A23C" },
				{ label: "池州市", value: 3, color: "#F56C6C" },
				{ label: "宣城市", value: 4, color: "#909399" }
			]
		},
		{ label: "其他类", prop: "other" },
		{ label: "创意创造类", prop: "originality" },
		{ label: "会展经济类", prop: "economy" },
		{ label: "医养康养类", prop: "medical" },
		{ label: "体育赛事类", prop: "sport" },
		{ label: "旧建筑、废弃地", prop: "oldFacility" },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.dahuangshan.resource_number
	},
	(app) => {
		app.refresh();
	}
);
</script>
