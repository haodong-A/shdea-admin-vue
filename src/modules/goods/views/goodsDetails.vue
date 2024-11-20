<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';

import { useForm } from '@cool-vue/crud';
import { service, useRefs } from '/@/cool';

	const { refs, setRefs } = useRefs();
	const Form = useForm()
	const initLoading = ref(true);

	const categoryOptions = ref([]);

	const goodsId = ref();


	const template = ref<string>();
	onMounted(async () => {
		//初始化
		categoryOptions.value = await service.goods.category.allLevel();
		const params = await service.goods.field.list({ status: 1});
		template.value = params[0].template

		initLoading.value = false;

		Form.value?.open({
			items: [
				{
					//【很重要】必须为 tabs
					type: 'tabs',
					props: {
						// 分组样式
						type: 'border-card',
						// 分组列表，必须是 { label, value } 的数组格式
						labels: [
							{
								label: '基础信息', // 标题
								value: 'base' // 唯一标识
							},
							{
								label: '商品参数',
								value: 'param'
							}
						]
					}
				},
				// 基础信息
				{
					group: 'base', // 标识
					label: '编号',
					prop: 'goodsId',
					required: true,
					span: 16,
					component: {
						name: 'el-input'
					}
				},
				{
					group: 'base', // 标识
					label: '标题',
					prop: 'title',
					required: true,
					span: 16,
					component: {
						name: 'el-input'
					}
				},
				{
					group: 'base', // 标识
					label: '示例图',
					prop: 'cover',
					// required: true,
					component: {
						name: 'cl-upload'
					}
				},
				{
					group: 'base', // 标识
					label: '分类',
					prop: 'category',
					required: true,
					span:16,
					component: {
						name: 'el-cascader',
						props: {
							options: categoryOptions.value
						}
					}
				},
				{
					group: 'base', // 标识
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
					group: 'base', // 标识
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

				{
					group: 'param',
					prop: 'params',
					component: {
						ref: setRefs("params"),
						name: 'cl-parse-input',
						props: {
							fieldOptions: template.value
						}
					},
				},

				// 其他信息 group = other


			],
			on: {
				//【提示】当第一组验证通过后，会自动切换到下一组展示，直到全部通过才可提交
				submit: async (data, { done, close }) => {
					const isValid = await refs?.params.validate();
					if(!isValid) {
						//TODO【bug】 官方的changeTab无法使用
						await Form.value?.Tabs.change('param', false)
					}
					if(!goodsId.value) {
						service.goods.info.add(data)
					} else {
						service.goods.info.update({...data, id: goodsId.value})
					}

					done();
				}
			}
		});

	})

</script>

<template>
	<el-scrollbar  v-loading="initLoading" element-loading-text="初始化中..." style="padding: 10px">

		<div style="height: 100%; width: 100%;">
		<!---->
			<cl-form ref="Form" :inner="true">


			</cl-form>
		</div>
	</el-scrollbar>
</template>

<style scoped lang="scss">

</style>
