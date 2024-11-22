<script setup lang="ts" name="cl-goods-other-images">

import {  ref, toRaw, watch } from 'vue';
import { isArray, isString } from 'lodash-es';

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
	modelValue: {
		type: String,
	}
});

const urls = ref<string[]>(["", "", "", "", ""]);


watch(()=>urls.value, ()=> {
	emits('update:modelValue', JSON.stringify(urls.value));
}, { deep: true })


watch(() => props.modelValue, ()=> {
	const values = toRaw(props.modelValue);
	if(values && isString(values)){

		const parse = JSON.parse(values)
		if (isArray(parse)) {
			urls.value = parse;
		}
	}
}, { deep: true, immediate: true } )
</script>

<template>
<div>
	<cl-row>
		<cl-upload v-model="urls[0]" style="margin-right: 10px"/>
		<cl-upload v-model="urls[1]" style="margin-right: 10px"/>
		<cl-upload v-model="urls[2]" style="margin-right: 10px"/>
		<cl-upload v-model="urls[3]" style="margin-right: 10px"/>
		<cl-upload v-model="urls[4]" style="margin-right: 10px"/>
	</cl-row>

</div>
</template>
