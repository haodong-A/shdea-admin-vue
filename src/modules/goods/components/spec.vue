<script setup lang="ts" name="cl-spec">


import { useCrud, useTable } from '@cool-vue/crud';
import { service } from '/@/cool';

const props = defineProps({
	modelValue: {
		type: [Number, String],
	}
})


const TableSpec = useTable({
	autoHeight: true,
	contextMenu: ["refresh", "check", "order-desc", "order-asc"],
	columns: [
		{
			type: "selection",
		},
		{
			label: '规格名称',
			prop: 'specName',
		},
		{
			label: '主图',
			prop: 'mainImage',
			component: {
				name: 'el-image'
			}
		},
		{
			label: '规格名称',
			prop: 'order',
		},
	]
})

const CrudSpec = useCrud(
	{
		service: service.goods.spec
	},
	(app) => {
		app.refresh({
			infoId: props.modelValue
		});
	}
);
</script>

<template>
	<div>
	<cl-crud ref="CrudSpec">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<el-button type="primary" v-permission="service.goods.spec.permission.add" > 新增 </el-button>
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />

			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key placeholder="搜索关键字" />
		</cl-row>

		<cl-row>
			<cl-table ref="TableSpec"/>
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>
	</cl-crud>
	</div>
</template>

<style scoped lang="scss">

</style>
