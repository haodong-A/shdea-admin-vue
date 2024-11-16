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

const values = reactive<any>({})

function getComponent(name: string) {
	switch (name) {
		case 'text': return 'el-input' ;
		case 'textarea': return   'el-input';
	}
}

const fieldsRef = ref<any>();

watchEffect(()=>{
	console.log(props.fieldOptions);


})

const Form = useForm();

function parse () {
	if(isArray(props.fieldOptions)){
		const fields = toRaw(props.fieldOptions);
		return fields.map((field: any) => {
			return {
				label: field?.label,
				prop: field?.props.paramName,
				required: field?.required,
				component: {
					name: getComponent(field?.name),
					props: {
						type: field?.name,
						placeholder: field?.props.placeholder,
					},
					options: field?.props.options,
				},
			}
		})
	}
}
onMounted(()=>{

	nextTick(()=>{
		console.log(parse());
			Form.value?.open({
				items: parse(),
			})
	})

})


</script>

<template>
<div>
	<cl-form ref="Form" :inline="true" inner>

	</cl-form>
</div>
</template>

<style scoped lang="scss">

</style>
