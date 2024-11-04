<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';
import { service } from '/@/cool';

//选中的param-type
const selectedVal = ref();

//字段
const fields = ref([]);


//加载中
const loading = ref(false)

const props = defineProps({
	paramType: {
		type: Array as () => Eps.DictTypeEntity[]
	},
	value: {
		type: String
	}
})


watch(() => props.value,(value) => {

	if (value) {
		try {
			//解析value
			const parse = JSON.parse(value);
			if(parse.param_type) {
				selectedVal.value = parse.param_type
			}
		} catch (e) {
			console.log(e);
		}
	}
} , { immediate: true} )


async function onSelected(value: string) {
	loading.value = true;
	await service.dict.info.list({ id: value }).then((res) => {

	}).finally(()=> { loading.value=false })
}


</script>

<template>
	<div>
		<el-select
			v-model="selectedVal"
			value-key="id"
			placeholder="请选择指定选项的内容"
			@change="onSelected"
			style="width: 240px">
			<el-option
				v-for="item in paramType"
				:key="item.key"
				:label="item.name"
				:value="item.id"
			/>
		</el-select>

		<div style="width: 100%; height: 300px" v-loading="loading">
			<el-form >
				<el-form-item></el-form-item>
			</el-form>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>
