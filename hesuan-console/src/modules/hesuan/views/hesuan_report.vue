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

<script lang="ts" name="hesuan-hesuan_report" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "姓名", prop: "name", required: true, component: { name: "el-input" } },
		{ label: "学号", prop: "number", required: true, component: { name: "el-input" } },
		{ label: "检测医院", prop: "hospital", required: true, component: { name: "el-input" } },
		{
			label: "报告时间",
			prop: "reportTime",
			component: {
				name: "el-date-picker",
				props: { type: "datetime", valueFormat: "YYYY-MM-DD HH:mm:ss" }
			},
			required: true
		},
		{ label: "报告结果", prop: "reportResult", required: true, component: { name: "el-input" } }
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "姓名", prop: "name" },
		{ label: "学号", prop: "number" },
		{ label: "检测医院", prop: "hospital" },
		{ label: "报告时间", prop: "reportTime" },
		{ label: "报告结果", prop: "reportResult" },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.hesuan.hesuan_report
	},
	(app) => {
		app.refresh();
	}
);
</script>
