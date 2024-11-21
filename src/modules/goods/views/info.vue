<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<el-button type="primary" v-permission="service.goods.info.permission.add" @click="router.push({ path: '/goods/details'})"> 新增 </el-button>
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

	</cl-crud>
</template>

<script lang="ts" name="goods-info" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { computed, onMounted, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';

const { service } = useCool();

// 选项
const options = reactive({
	status: [
		{ label: "下架", value: 0 },
		{ label: "上架", value: 1 },
	],
	category: [] as any[]
});


onMounted(async ()=>{
	const list = await service.goods.category.list();
	options.category = list.map((item)=> {
		return{
			label: item.categoryName,
			value: item.id.toString(),
		}
	})
})


//路由
const router = useRouter();

// cl-table
const Table = useTable({

	contextMenu: ['delete', 'check', (row)=> {
		return {
			label: '编辑',
			callback(done) {
				router.push({ path: '/goods/details', query: { id: row.id } })
				done();
			},
		}
	}],
	columns: [
		{ type: "selection" },
		{ label: "编号", prop: "goodsId" },
		{ label: "标题", prop: "title" },
		{
			label: "示例图",
			prop: "cover",
			minWidth: 140,
			component: {
				name: "cl-image"
			}
		},
		{
			label: "分类",
			prop: "category",
			dict: computed(()=> options.category),
			minWidth: 120
		},
		{ label: "品牌", prop: "brand", dict: [], minWidth: 120 },
		{
			label: "状态",
			prop: "status",
			dict: options.status,
			minWidth: 120
		},
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
