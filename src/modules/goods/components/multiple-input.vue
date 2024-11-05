<script setup lang="ts">

import { onMounted, ref, watch, watchEffect } from 'vue';
import { service } from '/@/cool';

import { Delete } from '@element-plus/icons-vue';
//选中的param-type
const selectedVal = ref();

//字段
const fields = ref<any []>([]);

//字段值
const fieldValues = ref<any>({});

const emit = defineEmits(["update:modelValue", "change"]);

//是否已经初始化
const inited = ref(false);

onMounted(()=> {})
//加载中
const loading = ref(false)

const props = defineProps({
	paramType: {
		type: Array as () => Eps.DictTypeEntity[]
	},
	modelValue: {
		type: String
	}
})

//监听选中值
watchEffect(async ()=> {
	if (selectedVal.value) {
		loading.value = true;
		fieldValues.value.param_type = selectedVal.value;
		await service.dict.info.list({ typeId: selectedVal.value }).then((res) => {
			fields.value = res.map((item)=>({ name: item.name, value: item.value }))
		}).finally(()=> { loading.value = false })
	}
})



watch(() => props.modelValue,(value) => {
	//仅限未初始化，才需要执行
	if (value && !inited.value) {
		inited.value = true;
		try {
			//解析value, 为了初始化而执行
			fieldValues.value = JSON.parse(value)
			if(fieldValues.value.param_type){
				selectedVal.value = fieldValues.value.param_type;
			}
		} catch (e) {
			console.log(e);
		}
	}
} , { immediate: true} )





watch(() => fieldValues, ()=> {
	emit('update:modelValue', JSON.stringify(fieldValues.value));
}, { deep: true, immediate: true })


/**
 * @param value 字段名称
 *
 * 移除field字段， 并且fieldValues中也移除
 *
 * */
function removeField(value: string){
	fields.value = fields.value.filter((item) => item.value != value)
	if(Reflect.has(fieldValues.value, value)){
		Reflect.deleteProperty(fieldValues.value, value)
	}
}


</script>

<template>
	<div>
		<el-select
			v-model="selectedVal"
			value-key="id"
			placeholder="请选择指定选项的内容"
			style="width: 240px">
			<el-option
				v-for="item in paramType"
				:key="item.key"
				:label="item.name"
				:value="item.id"
			/>
		</el-select>

		<div class="custom-input-container" v-loading="loading" element-loading-text="加载中..." >
			<el-form label-width="80px">
				<template v-for="item in fields" :key="item.value" >
					<el-col :span="12" >
						<el-form-item :label="item.name">
							<el-input v-model="fieldValues[item.value]" :placeholder="`请输入${item.name}`">
								<template #append>
									<el-icon title="删除" style="cursor: pointer" @click="removeField(item.value)">
										<delete />
									</el-icon>
								</template>
							</el-input>


						</el-form-item>
					</el-col>
				</template>
			</el-form>
		</div>
	</div>
</template>

<style scoped lang="scss">

.custom-input-container {
	width: 100%;
	height: 300px;
	margin-top: 10px;
	padding: 0 10px ;
}
</style>
