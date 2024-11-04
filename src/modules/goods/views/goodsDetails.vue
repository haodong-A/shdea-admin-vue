<script setup lang="ts">
import { onMounted, ref } from 'vue';
	import ClForm from '/~/crud/src/components/form';
	import { useForm } from '@cool-vue/crud';
import { service } from '/@/cool';
import MultipleInput from '/$/goods/components/multiple-input.vue';

	const form = useForm()
	const initLoading = ref(true);

	const categoryOptions = ref([]);

	//参数字典
	const paramsType = ref();
	onMounted(async () => {
		//初始化
		categoryOptions.value = await service.goods.category.allLevel();
		paramsType.value = await service.dict.type.list();

		initLoading.value = false;

		form.value?.open({
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
								label: '基本参数',
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
					required: true,
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


				// 其他信息 group = other
				{
					group: 'param', // 标识
					prop: 'specificAttributes',
					component: {
						name: 'slot-specific'
					}
				},

			],
			on: {
				//【提示】当第一组验证通过后，会自动切换到下一组展示，直到全部通过才可提交
				submit(data, { close }) {
					close();
				}
			}
		});

	})
</script>

<template>
<div style=" width: 100%; height: 100%" v-loading="initLoading" element-loading-text="初始化中...">

	<cl-form ref="form" :inner="true">
		<template #slot-specific="{ scope }">
			<multiple-input v-model="scope.specificAttributes" :param-type="paramsType" />
		</template>
	</cl-form>
</div>
</template>

<style scoped lang="scss">

</style>
