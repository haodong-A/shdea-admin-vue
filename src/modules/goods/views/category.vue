<template>
	<div class="cl-goods-category">
		<cl-view-group ref="ViewGroup">
			<template #item-name="{ item }">


				<el-tag v-if="item.status === 0" type="warning" style="margin-right: 10px" title="产品以及前台不会出现此选项">关闭</el-tag>
				<el-tag v-else type="success" style="margin-right: 10px"> 正常</el-tag>

				{{ item.categoryName }}
			</template>
			<template #right>
				<cl-crud ref="Crud">
					<cl-row>
						<!-- 刷新按钮 -->
						<cl-refresh-btn />
						<!-- 新增按钮 -->
						<cl-add-btn />
						<!-- 批量删除 -->
						<cl-multi-delete-btn />
						<cl-flex1 />

						<cl-column-custom :columns="Table?.columns" />

						<!-- 关键字搜索 -->
						<cl-search-key placeholder="搜索名称" />
					</cl-row>

					<cl-row>
						<!-- 数据表格 -->
						<cl-table ref="Table" row-key="id" />
					</cl-row>

					<cl-upsert ref="Upsert"/>
					<cl-row>
						<cl-flex1 />
						<cl-pagination />
					</cl-row>
				</cl-crud>
			</template>
		</cl-view-group>
	</div>
</template>

<script lang="tsx" name="goods-category" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";


import { reactive, ref, watch } from 'vue';
import { useViewGroup } from '/#/view';
import { useCool } from '/@/cool';


const { service, refs, setRefs} = useCool();

// 分页信息
const pagination = reactive({
	page: 1,
	size: 20,
	total: 0
});

const parentCategory = ref<any[]>([]);

const { ViewGroup } = useViewGroup({
	label: '一级分类',
	title: '二级分类',
	service: service.goods.category,
	data: {
		parentCategoryId: 0
	},
	onData(list) {

		list.sort((a, b) => a.sortOrder - b.sortOrder)
		parentCategory.value = list;
		return list.map((e) => {
			return {
				...e,
			};
		});
	},
	onEdit() {
		return {
			width: '500px',
			props: {
				labelPosition: 'top'
			},
			dialog: {
				controls: ['close']
			},
			items: [
				{
					label: '名称',
					prop: 'categoryName',
					value: '',
					required: true,
					component: {
						name: 'el-input',
						props: {
							placeholder: '请输入分类名称',
							maxlength: 20,
							clearable: true
						}
					},

				},
				{
					label: '排序',
					prop: 'sortOrder',
					value: 0,

					component: {
						name: 'el-input-number',
						props: {
							defaultValue: 0,
							placeholder: '请输入排序',
							clearable: true
						}
					}
				},
				{
					label: '状态',
					prop: 'status',
					value: 0,
					component: {
						name: 'el-switch',
						props: {
							activeValue: 1,
							inactiveValue: 0,
						}
					}
				},
			]
		};
	},
	onSelect(item) {
		refresh({
			parentCategoryId: item.id,
			page: 1
		});
	}
})


// cl-upsert
const Upsert = useUpsert({
	dialog: {
		width: '500px'
	},
	onOpened(data) {

	    data.parentCategoryId = ViewGroup.value?.selected?.id;
	},
	items: [
		{
			label: "名称",
			prop: "categoryName",
			component: {
				name: 'el-input',
				props: {
					placeholder: '请输入二级分类名称',
				}
			},
			required: true
		},
		{
			label: "一级分类",
			prop: "parentCategoryId",
			required: true,
			component: {
				vm: {
					name: 'custom-select',
					props: {
						modelValue: Number
					},
					setup(props, { emit }) {
						const value = ref<number>();
						const loading = ref(true);

						watch(
							() => props.modelValue,
							(val) => {
								value.value = val;
							},
							{
								immediate: true
							}
						);
						return {
							loading,
							value,
							onChange(val: string) {
								emit("update:modelValue", val);
							}
						}

					},
					render(ctx: any) {
						// 绑定值
						return <cl-select label-key="categoryName" value-key="id"  options={ parentCategory } v-model={ctx.value} onChange={ctx.onChange} />

					}
				}
			}
		},
		{
			label: "排序",
			prop: "sortOrder",
			value: 0,
			required: true,
			component: {
				name: 'el-input-number',
				props: {
					placeholder: '请输入排序号'
				}
			}
		},
		{
			label: "状态",
			prop: "status",
			component: {
				name: 'el-switch',
				props: {
					activeValue: 1,
					inactiveValue: 0,
				}
			}
		}
	]
});

// // cl-table
const Table = useTable({

	columns: [
		{ type: "selection" },
		{ label: "名称", prop: "categoryName" },
		{ label: "排序", prop: "sortOrder" },
		{ label: "状态", prop: "status",
			dict: [
				{
					label: "开启",
					value: 1,
					type: "primary",
				},
				{
					label: "关闭",
					value: 0,
					type: "danger",
				},
			],
		},
		{ label: "更新时间", prop: "updateTime", sortable: true },
		{ label: "创建时间", prop: "createTime", sortable: true },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud
const Crud = useCrud(
	{
		service: service.goods.category
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

<style lang="scss">
.cl-goods-category {
	height: 100%;
	user-select: none;
}
</style>
