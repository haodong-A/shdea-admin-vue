<script setup lang="ts">

import { nextTick, onMounted, ref, watch } from 'vue';
import { service } from '/@/cool';

const emits = defineEmits(["update:modelValue", "change"]);

const props = defineProps({
	modelValue: {
		type: String
	}
})

//值
const values = ref<any>({})


watch(()=> props.modelValue, () => {
	if(props.modelValue) {
		const parse = JSON.parse(props.modelValue)

	}
}, { immediate: true } )



onMounted(async () => {
	//获取所有参数结构-表单
})
</script>

<template>
<div>


</div>
</template>

<style scoped lang="scss">

</style>
