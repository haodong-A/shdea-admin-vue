<script setup lang="ts" name="cl-parse-input">
import { useForm } from '@cool-vue/crud';
import { nextTick, onMounted, reactive, ref, toRaw, watchEffect } from 'vue';
import { isArray } from 'lodash-es';

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

function getComponent(name: string) {
	switch (name) {
		case 'text': return 'el-input' ;
		case 'textarea': return   'el-input';
	}
}


const Form = useForm();

function parse () {
	if(isArray(props.fieldOptions)){
		const fields = toRaw(props.fieldOptions);
		console.log(fields);
		return fields.map((field: any) => {
			return {
				label: field?.label,
				prop: field?.props.paramName,
				required: field?.props.required,
				span: 24,
				component: {
					name: getComponent(field?.name),
					props: {
						type: field?.name,
						... field?.props,
					},
					options: field?.props.options,
				},
			}
		})
	}
}
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
