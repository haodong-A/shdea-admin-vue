<script setup lang="tsx" name="cl-parse-input">
import { useForm } from '@cool-vue/crud';
import { h, nextTick, onMounted, reactive, ref, resolveComponent, toRaw, watch, watchEffect } from 'vue';
import { isArray, isString } from 'lodash-es';
import { ElInput, ElMessage } from 'element-plus';

const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	},
	fieldOptions: {
		type: [Array, String],
		required: true,
		default: ''
	}
});

const values = ref<any>({})

//预处理输入框
function getComponent(field: any): any {
	let preConfig = {};
	switch (field.name) {
		case 'text': preConfig = { name: 'el-input'} ; break;
		case 'textarea': preConfig = { name: 'el-input', props: {type: 'textarea'}} ; break;
		case 'number': preConfig = {
			name: 'el-input-number',
			props: {
				max: Math.max(...field.props.range) == Number.POSITIVE_INFINITY? 1000 : Math.max(...field.props.range),
				min: Math.min(...field.props.range ) == Number.POSITIVE_INFINITY? 0 : Math.min(...field.props.range )
			}
		} ; break;
		case 'time' : preConfig = { name: 'el-date-picker'} ; break;
	}
	console.log(preConfig);
	return preConfig;
}


const Form = useForm();


//删除为null undefined, 空字符串元素
function preProcessData(formData) {
	function isEmpty(obj) {
		if (typeof obj === 'undefined' || obj === null || obj === '') return true;
		return false
	}
	Object.keys(formData).forEach(item => {
		if (isEmpty(formData[item])) {
			delete formData[item];
		}
	})
	return formData;

}



function parse (fields): ClForm.Items | undefined {
	if(isArray(fields)){

		return fields.map((field: any) => {
			if(field.isGroup || field.name == 'group') {
				return {
					component: {
						name: 'cl-form-card',
						props: {
							label: field.label,
							expand: true
						}
					},
					children: parse(field.children),
				}
			}
			return {
				label: field?.label,
				prop: field?.prop || field?.props.paramName,
				required: field?.props.required,
				span: 24,
				component: {
					name: getComponent(field).name,

					props: {
						...Object.assign(preProcessData(field.props), getComponent(field)?.props || {})
					},
					options: field.props.options || [],
				},

			}
		})
	} else if(isString(fields)){
		try {
			const fieldsObj = JSON.parse(fields);
			parse(fieldsObj);
		} catch (e) {
			ElMessage.error('模板出错，请重新获取编辑页面');
		}

	}


}

watch(()=> Form.value?.form, ()=> {
	console.log(Form.value?.form);
}, { immediate: true, deep: true });

onMounted(()=>{
	const fields = toRaw(props.fieldOptions);
	console.log(parse(fields));
	Form.value?.open({
		op: {
			hidden: true
		},
		items: parse(fields),
	})
})


</script>

<template>
<div style="width: 100%">
	<cl-form ref="Form"  inner>

	</cl-form>
</div>
</template>

<style scoped lang="scss">

</style>
