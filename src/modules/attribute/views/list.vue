<template>
	<cl-view-group ref="ViewGroup">

		<template #right>
			<cl-crud ref="Crud">
				<cl-row>
					<!-- 刷新按钮 -->
					<cl-refresh-btn />
					<!-- 新增按钮 -->
					<cl-add-btn />
					<!-- 删除按钮 -->
					<cl-multi-delete-btn />


					<cl-flex1 />
					<cl-filter label="字段类型">
						<cl-select :options="options.fieldType" prop="fieldType" :width="120"></cl-select>
					</cl-filter>
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
	</cl-view-group>


</template>

<script lang="ts" name="attribute-info" setup>
import { setFocus, useCrud, useTable, useUpsert } from '@cool-vue/crud';
import { useCool } from "/@/cool";
import { reactive } from "vue";
import { useViewGroup } from '/#/view';

const { service } = useCool();

// 选项
const options = reactive({
	required: [
		{ label: "非必填", value: 0, type: "danger" },
		{ label: "必填", value: 1, type: "success" }
	],
	fieldType: [
		{ label: "字符串", value: 0 },
		{ label: "文本", value: 1 },
		{ label: "日期", value: 2 },
	]
});


const { ViewGroup } = useViewGroup({
	service: service.attribute.type,
	title: '属性字段',
	label: '属性类型',
	onEdit(item) {
		return {
			title: "属性类型",
			width: "500px",
			props: {
				labelWidth: "80px",
			},
			items: [
				{
					label: "中文名称",
					prop: "name",
					component: {
						name: "el-input",
						props: {
							maxlength: 20,
						},
					},
					required: true,
				},
				{
					label: "英文名称",
					prop: "englishName",
					component: {
						name: "el-input",
						props: {
							maxlength: 20,
						},
					},
					required: true,
				},
			],
		};
	},
});

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: "名称",
			prop: "name",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "英文名称",
			prop: "englishName",
			component: { name: "el-input", props: { clearable: true } },
			required: true
		},
		{
			label: "是否必填",
			prop: "required",
			component: { name: "el-radio-group", options: options.required },
			value: 0
		},
		{
			label: "字段类型",
			prop: "fieldType",
			component: {
				name: "el-select",
				options: options.fieldType,
				props: {  filterable: true }
			},
			required: true,
			value: []
		},
		{ label: "状态", prop: "status", flex: false, component: { name: "cl-switch" } },
		{
			label: "备注",
			prop: "remark",
			component: { name: "el-input", props: { type: "textarea", rows: 4 } }
		}
	],
	onSubmit(data, { next }) {

		next({
			...data,
			typeId: ViewGroup.value?.selected?.id
		});
	},
	plugins: [setFocus('name')]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "名称", prop: "name", minWidth: 140 },
		{ label: "英文名称", prop: "englishName", minWidth: 140 },
		{ label: "是否必填", prop: "required", dict: options.required, minWidth: 120 },
		{ label: "字段类型", prop: "fieldType", dict: options.fieldType, minWidth: 120 },
		{ label: "状态", prop: "status", minWidth: 100, component: { name: "cl-switch" } },
		{ label: "备注", prop: "remark", showOverflowTooltip: true, minWidth: 200 },
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
		service: service.attribute.info
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
