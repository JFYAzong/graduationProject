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

<script lang="ts" name="hesuan-wechat_users" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service } = useCool();

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{ label: "用户登录凭证", prop: "openid", required: true, component: { name: "el-input" } },
		{ label: "微信头像", prop: "avatar", component: { name: "cl-upload" } },
		{ label: "微信昵称", prop: "wechatName", component: { name: "el-input" } },
		{ label: "姓名", prop: "userName", component: { name: "el-input" } },
		{ label: "学号", prop: "userNumber", component: { name: "el-input" } },
		{ label: "院系", prop: "department", component: { name: "el-input" } }
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "用户登录凭证", prop: "openid" },
		{ label: "微信头像", prop: "avatar", component: { name: "cl-image", props: { size: 60 } } },
		{ label: "微信昵称", prop: "wechatName" },
		{ label: "姓名", prop: "userName" },
		{ label: "学号", prop: "userNumber" },
		{ label: "院系", prop: "department" },
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.hesuan.wechat_users
	},
	(app) => {
		app.refresh();
	}
);
</script>
