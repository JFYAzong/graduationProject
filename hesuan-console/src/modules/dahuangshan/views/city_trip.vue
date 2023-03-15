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

<script lang="ts" name="dahuangshan-city_trip" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "黄山市", prop: "huangshan", required: true, component: { name: "el-input" } },
		{ label: "池州市", prop: "chizhou", required: true, component: { name: "el-input" } },
		{ label: "宣城市", prop: "xuancheng", required: true, component: { name: "el-input" } },
		{ label: "安庆市", prop: "anqing", required: true, component: { name: "el-input" } }
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "黄山市", prop: "huangshan" },
		{ label: "池州市", prop: "chizhou" },
		{ label: "宣城市", prop: "xuancheng" },
		{ label: "安庆市", prop: "anqing" },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.dahuangshan.city_trip
	},
	(app) => {
		app.refresh();
	}
);
</script>
