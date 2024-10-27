<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />

			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key placeholder="搜索关键字" />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" name="goods-info" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { reactive } from "vue";

const { service } = useCool();

// 选项
const options = reactive({
	status: [
		{ label: "下架", value: 0 },
		{ label: "上架", value: 1 },
		{ label: "预售", value: 2 }
	]
});

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "编号",
			prop: "goodsId",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "标题",
			prop: "title",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: '示例图',
			prop: "cover",

		},
		{
			label: "分类",
			prop: "category",
			component: { name: "el-checkbox-group", options: [], props: {} },
			value: [],
			required: true
		},
		{
			label: "品牌",
			prop: "brand",
			component: { name: "el-checkbox-group", options: [], props: {} },
			value: [],
			required: true
		},
		{
			label: "状态",
			prop: "status",
			component: { name: "el-radio-group", options: options.status },
			value: 0,
			required: true
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "编号", prop: "goodsId", minWidth: 140 },
		{ label: "标题", prop: "title", minWidth: 140 },
		{
			label: "示例图",
			prop: "cover",
			minWidth: 140,
			component: {
				name: "cl-image"
			}
		},
		{ label: "分类", prop: "category", dict: [], minWidth: 120 },
		{ label: "品牌", prop: "brand", dict: [], minWidth: 120 },
		{ label: "状态", prop: "status", dict: options.status, minWidth: 120 },
		{ label: "浏览次数", prop: "viewCount", minWidth: 140 },
		{ label: "收藏次数", prop: "favoriteCount", minWidth: 140 },
		{
			label: "更新时间",
			prop: "updateTime",
			minWidth: 170,
			sortable: "custom",
			component: { name: "cl-date-text" }
		},
		{
			label: "创建时间",
			prop: "createTime",
			minWidth: 170,
			sortable: "desc",
			component: { name: "cl-date-text" }
		},
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.goods.info
	},
	(app) => {
		app.refresh();
	}
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}
</script>
