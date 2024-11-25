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
			<cl-filter>
				<cl-select prop="status" :options="status" />
			</cl-filter>
			<!-- 关键字搜索 -->
			<cl-search-key placeholder="搜索关键字" />
		</cl-row>

		<cl-row>
			<cl-upsert ref="Upsert"/>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
			<cl-dialog title="规格列表" v-model="visible" width="80%">
				<spec v-model="currentSpec" />
			</cl-dialog>
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

	</cl-crud>

</template>

<script lang="tsx" name="goods-info" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { computed, onMounted, ref } from 'vue';
import Spec from '/$/goods/components/spec.vue';

const { service } = useCool();

const status = [
	{ label: "下架", value: 0 },
	{ label: "上架", value: 1 },
]

const category = ref<any[]>([]);

const Upsert = useUpsert({
	items: [
		{
			label: '编号',
			renderLabel: <el-tooltip content="该编号主要用于标记产品，例如产品编号 sd-1001a, sd-1001b, 则可以输入sd-1000">编号</el-tooltip>,
			prop: 'goodsId',
			required: true,
			span: 16,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入编号',
				}
			}
		},
		{
			label: '标题',
			prop: 'title',
			required: true,
			span: 16,
			component: {
				name: 'el-input'
			}
		},
		{
			label: '示例图',
			prop: 'cover',
			required: true,
			component: {
				name: 'cl-upload'
			}
		},
		{
			label: '分类',
			prop: 'category',
			required: true,
			span:16,
			hook: {
				bind: ['split', 'number'],
				submit: ['join'],
			},
			component: {
				name: 'el-cascader',
				props: {
					options: computed(()=> {
						return category.value;
					})
				}
			}
		},
		{
			label: '品牌',
			prop: 'brand',
			span:16,
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入品牌名称，默认SHDEA'
				}
			}
		},
		{
			label: '描述',
			prop: 'description',
			span:16,
			component: {
				name: 'el-input',
				props: {
					type: 'textarea',
					showWordLimit: true,
					maxlength: 400,
					autosize: { minRows: 3, maxRows: 10 },
					placeholder: '请输入描述'
				}
			}
		},
		{
			label: '状态',
			prop: 'status',
			span:16,
			value: 1,
			component: {
				name: 'el-switch',
				props: {
					inlinePrompt: true,
					style: {
						'--el-switch-on-color': '#13ce66',
						'--el-switch-off-color': '#ff4949',
					},
					activeValue: 1,
					inactiveValue: 0,
					activeText: '上架',
					inactiveText: '下架',
				}
			}
		},
	]
})



onMounted(async ()=>{

	const list = await service.goods.category.list() || [];

	const parent =  list.filter((item)=> !item.parentCategoryId );

	category.value = parent.map((item)=> {
		const children = list.filter(it => item.id == it.parentCategoryId).map(child => {return {label: child.categoryName, value: child.id}});
		return {
			label: item.categoryName,
			value: item.id,
			children,
		}
	})
})


//规格列表
const visible = ref(false)

const currentSpec = ref()

// cl-table
const Table = useTable({

	contextMenu: ['delete', 'check', 'edit',
		(row)=> {
		return {
			label: '规格',
			callback(done) {
				visible.value = true;
				currentSpec.value = row.id;
			    done()
			},
			}
		}
	],
	columns: [
		{ type: "selection" },
		{ label: "编号", prop: "goodsId" },
		{ label: "标题", prop: "title" },
		{
			label: "示例图",
			prop: "cover",
			minWidth: 140,
			component: {
				name: 'cl-image'
			}
		},
		{
			label: "分类",
			prop: "category",
			dict: computed(()=> {
				const arr: any[] = [];
				function getItem(items): any {

					items.forEach((item)=> {
						if (item.children && item.children.length) {
							getItem(item.children)
						}
						arr.push( {
							label: item.label,
							value: item.value.toString()
						});
					})
				}
				getItem(category.value)
				return arr
			}),
			minWidth: 120,
		},
		{ label: "品牌", prop: "brand", minWidth: 120 },
		{
			label: "状态",
			prop: "status",
			dict: status,
			minWidth: 120,
			component:{
				name: "cl-switch",
				props: {
					inlinePrompt: true,
					activeText: '上架',
					inactiveText: '下架',
					style:"--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
				}
			}
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
