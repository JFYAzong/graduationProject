<template>
	<div class="view-home">
		<div class="welcome">{{ user.info.nickName }}，欢迎使用面向高校的核酸检测管理系统~</div>
		<div class="info">本次登录时间是：{{ dayjs().format("YYYY-MM-DD") }}</div>
	</div>
</template>

<script lang="ts" name="home" setup>
import { useBase } from "/$/base";
import dayjs from "dayjs";
const { user } = useBase();
</script>

<style lang="scss">
.view-home {
	.card {
		background-color: #fff;
		border-radius: 5px;
		margin-bottom: 15px;
		font-size: 12px;
		letter-spacing: 0.5px;
		color: #000;

		&__header {
			display: flex;
			align-items: center;
			height: 50px;
			padding: 0 20px;

			.label {
				font-size: 12px;
			}

			.value {
				font-size: 18px;
				font-weight: bold;
				margin-left: 10px;
			}
		}

		&__container {
			padding: 0 20px;
			height: 50px;
		}

		&__footer {
			display: flex;
			align-items: center;
			height: 50px;
			border-top: 1px solid #f7f7f7;
			font-size: 12px;
			margin: 0 5px;
			padding: 0 15px;
			box-sizing: border-box;

			.label {
				margin-right: 10px;
			}

			.value {
				font-size: 13px;
			}
		}
	}
}
</style>
