<script setup lang="tsx" name="cl-parse-input">
import { useForm } from '@cool-vue/crud';
import { h, nextTick, onMounted, reactive, ref, resolveComponent, toRaw, watch, watchEffect } from 'vue';
import { isArray } from 'lodash-es';
import { ElInput } from 'element-plus';

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

function getComponent(field: any) {
	let name = '';
	switch (field.name) {
		case 'text':
		case 'textarea': name = 'el-input'; break;
	}
	return name;
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



function parse (): ClForm.Items | undefined {
	if(isArray(props.fieldOptions)){
		const fields = toRaw(props.fieldOptions);

		return fields.map((field: any) => {
			return {
				label: field?.label,
				prop: field?.prop || field?.props.paramName,
				required: field?.props.required,
				span: 24,
				component: {
					name: getComponent(field),
					props: {
						...preProcessData(field.props),
						type: field.name == 'textarea'? 'textarea' : null
					},
					options: field.props.options || [],
				},

			}
		})
	}
}

watch(()=> Form.value?.form, ()=> {
	console.log(Form.value?.form);
}, { immediate: true, deep: true });
onMounted(()=>{
	console.log(parse());
	Form.value?.open({
		op: {
			hidden: true
		},
		items: parse(),
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
