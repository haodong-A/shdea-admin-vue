<script setup lang="tsx" name="cl-spec">
import { useCrud, useForm, useTable } from '@cool-vue/crud';
import { service, useRefs } from '/@/cool';
import { useDict } from '/$/dict';
import { isString } from 'lodash-es';
import { ElMessage } from 'element-plus';
import ClFilter from '/~/crud/src/components/filter';
import ClSelect from '/#/crud/components/select';
import { onMounted, ref } from 'vue';

const props = defineProps({
	modelValue: {
		type: [Number, String],
	}
})

const FormSpec = useForm();

const { setRefs, refs } = useRefs()

const dict = useDict()
const options = [
		{ label: "正常", value: 0 },
		{ label: "禁用", value: 1 },
	];

const template = ref<string>();

onMounted(async ()=>{
	const params = await service.goods.field.list({ status: 1});

	template.value = params[0].template
})
function create(value?:number){

	FormSpec.value?.open({
		dialog: {
		},
		width: '80%',
		title: '编辑规格',
		items: [
			{
			//【很重要】必须为 tabs
			type: 'tabs',
			props: {
				// 分组样式
				type: '',
				// 分组列表，必须是 { label, value } 的数组格式
				labels: [
						{
							label: '基本信息', // 标题
							value: 'base' // 唯一标识
						},
						{
							label: '规格参数',
							value: 'param'
						},
						{
							label: '详情页',
							value: 'details'
						}
					]
				}
			},
			{
				group: 'base',
				label: '名称',
				prop: 'specName',
				required: true,
				component: {
					name: 'el-input',
				}
			},
			{
				group: 'base',
				label: '编号',
				prop: 'specModel',
				required: true,
				component: {
					name: 'el-input',
					prop: {
						placeholder: '请输入产品编号'
					}
				}
			},
			{
				group: 'base',
				label: '类型',
				prop: 'specType',
				required: true,
				component: {
					name: 'el-select',
					options: dict.dict.get('spec-type')
				}
			},
			{
				group: 'base',
				label: '主图',
				prop: 'mainImage',
				required: true,
				component: {
					name: 'cl-upload',
				}
			},
			{
				group: 'base',
				label: '副图',
				prop: 'otherImages',
				component: {
					name: 'cl-goods-other-images',
				}
			},
			{
				group: 'base',
				label: '起订量-价格',
				prop: 'moqPrices',
				component: {
					name: 'cl-goods-moq',
				},
				rules: {
					type: 'string',
					trigger: 'blur',
					validator (rule: any, value: any, callback){
						if(value && isString(value)) {
							const parse = JSON.parse(value) || [];
							parse.forEach((item: any) => {
								const {min, max} = item.moq;
								if (max==0) {
									callback(new Error("起订量最大区间不能为0"));

								}
								if(max < min) {
									callback(new Error("起订量最大区间不能小于最小区间"));
								}
							})
						}
						callback();
					}
				}
			},
			{
				group: 'base',
				label: '提供样品',
				prop: 'haveSample',
				value: 1,
				component: {
					name: 'el-switch',
					props: {
						activeValue: 1,
						inactiveValue: 0,
					}
				}
			},
			{
				group: 'base',
				label: '样品单价',
				prop: 'samplePrice',
				required: true,
				hidden(options) {
				    return !options.scope.haveSample
				},
				component: {
					name: 'el-input-number',
					props: {
						precision: 2,
						placeholder: '请输入样品单价'
					}
				},

			},
			{
				group: 'base',
				label: '排序',
				prop: 'order',
				value: 0,
				component: {
					name: 'el-input-number',
					props: {
						min: 0,
					}
				}
			},
			{
				group: 'base',
				label: '状态',
				prop: 'status',
				dict: options,
				minWidth: 120,
				component:{
					name: "cl-switch",
					props: {
						inlinePrompt: true,
						activeText: '正常',
						inactiveText: '禁用',
						style:"--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
					}
				}
			},
			{
				group: 'param',
				prop: 'specParam',
				component: {
					ref: setRefs("params"),
					name: 'cl-parse-input',
					props: {
						fieldOptions: template.value
					}
				},
			},
			{
				group: 'details',
				prop: 'detailPage',
				component: {
					name: 'cl-editor-wang',
					props: {
						height: 700,
					}
				}
			}
		],
		on: {
			open: async (data) =>  {
				if (value) {
					FormSpec.value?.showLoading();
					const info = await service.goods.spec.info({ id: value });
					Object.assign(data, info );
					FormSpec.value?.hideLoading();
				}

			},
			submit: async (data, { done, close }) => {
				const isPass = await refs.params.validate();

				if(!isPass) {
					FormSpec.value?.Tabs.change('param', false);
					done();
					return;
				}

				const specParam = data.specParam ? JSON.stringify(data.specParam): '';
				if (value) {
					await service.goods.spec.update({ ...data, id: value, infoId: props.modelValue, specParam })
				} else {
					await service.goods.spec.add({ ...data,  infoId: props.modelValue, specParam })
				}
				done();
				ElMessage.success("保存成功");
				close();
				refresh();
			},
		}
	})
}

const TableSpec = useTable({
	autoHeight: false,
	contextMenu: ["refresh", "check", "order-desc", "order-asc", (row)=>{
		return {
			label: '编辑',
			callback(done) {
			    create(row.id);
				done();
			},
		}
	}],
	columns: [
		{
			type: "selection",
		},
		{
			label: '规格名称',
			prop: 'specName',
		},
		{
			label: '产品编号',
			prop: 'specModel',
		},
		{
			label: '主图',
			prop: 'mainImage',
			component: {
				name: 'cl-image'
			}
		},
		{
			label: '规格类型',
			prop: 'specType',
			dict: dict.dict.get('spec-type'),
		},
		{
			label: '状态',
			prop: 'status',
			dict: options,
			minWidth: 120,
			component:{
				name: "cl-switch",
				props: {
					inlinePrompt: true,
					activeText: '正常',
					inactiveText: '禁用',
					style:"--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
				}
			}
		},
		{
			label: '排序',
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

function refresh() {
	CrudSpec.value?.refresh();
}
</script>

<template>
	<cl-crud ref="CrudSpec">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<el-button type="primary" v-permission="service.goods.spec.permission.add" @click="create()"> 新增 </el-button>
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />

			<cl-flex1 />
			<cl-filter>
				<cl-select prop="specType" :options="dict.dict.get('spec-type')" />
			</cl-filter>
			<!-- 关键字搜索 -->
			<cl-search-key placeholder="搜索关键字" />
		</cl-row>

		<cl-row>
			<cl-table ref="TableSpec" stripe />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<cl-form ref="FormSpec" />

	</cl-crud>
</template>

<style scoped lang="scss">

</style>
