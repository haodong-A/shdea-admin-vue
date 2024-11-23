<script setup lang="tsx" name="cl-parse-input">
import { useForm } from '@cool-vue/crud';
import { nextTick, onMounted, toRaw, watch } from 'vue';
import { isArray, isString } from 'lodash-es';
import { ElMessage } from 'element-plus';
import Json from '/$/base/components/code/json.vue';

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
	modelValue: {
		type: [String , Object],
		default: ''
	},
	fieldOptions: {
		type: [Array, String],
		required: true,
		default: ''
	}
});

//预处理输入框
function getComponent(field: any): any {
	let preConfig = {};
	switch (field.name) {
		case 'text': preConfig = { name: 'el-input'} ; break;
		case 'textarea': preConfig = { name: 'el-input', props: {type: 'textarea'}} ; break;
		case 'number': preConfig = {
			name: 'el-input-number',
			props: {
				max: Math.max(...field.props.range) == Number.NEGATIVE_INFINITY? 1000 : Math.max(...field.props.range),
				min: Math.min(...field.props.range ) == Number.POSITIVE_INFINITY? 0 : Math.min(...field.props.range )
			}
		} ; break;
		case 'time' : preConfig = { name: 'el-date-picker' } ; break;
		case 'radio' : preConfig = { name: 'el-radio-group' } ; break;
		case 'checkbox' : preConfig = { name: 'el-checkbox-group' }; break;
		default : preConfig = { name: 'el-input'};
	}
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
	} else if(fields && isString(fields)){
		try {

			const fieldsObj = JSON.parse(fields);
			return parse(fieldsObj);
		} catch (e) {
			ElMessage.error('模板出错，请重新获取编辑页面');
		}

	}


}

watch(()=>props.modelValue, (value)=> {
	if (value && isString(value)) {
		const parseObj = JSON.parse(value);

		const form = Form.value?.form
		Object.keys(form).forEach((item) => {
			form[item] = parseObj[item]
		})

	}
})
watch(()=> Form.value?.form, ()=> {
	Form.value?.getForm();
	//监听并回传
	emits('update:modelValue', Form.value?.getForm())
}, { deep: true });

onMounted(()=>{

	nextTick(()=> {
		const fields = toRaw(props.fieldOptions);
		Form.value?.open({
			op: {
				hidden: true
			},
			items: parse(fields),
		});
	})


})
async function validate(): Promise<boolean>{
	let isPass = true
	await Form.value?.validate((isValid, invalidFields)=>{
		isPass =  isValid;
	})
	return isPass
}

defineExpose({
	validate
})
</script>

<template>
<div style="width: 100%">
	<el-empty :image-size="100" v-show="!fieldOptions || fieldOptions.length === 0" description="请先设计字段" />
	<cl-form ref="Form"  inner />
</div>
</template>

<style scoped lang="scss">

</style>
