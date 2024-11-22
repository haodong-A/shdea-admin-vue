<script setup lang="ts" name="cl-goods-moq">

import { ref, watch } from 'vue';
import { isString } from 'lodash-es';
import ClRow from '/~/crud/src/components/row';
import { Delete } from '@element-plus/icons-vue';

interface GoodsMoq {
	moq: {
		max: number
		min: number
	},
	price: number
}

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
	modelValue: {
		type: String,
	}
});

const values = ref<GoodsMoq[]>([]);

const total = ref<number>(0);

watch(()=> props.modelValue, (val) => {
	if(props.modelValue && isString(props.modelValue)) {
		values.value = JSON.parse(props.modelValue) || []
	}
})
watch(()=>total.value , (val) => {
	values.value[total.value-1] = {
		price: 0.00,
		moq: {
			max: 0,
			min: 0,
		}
	}
})

watch(()=> values.value, (val) => {
	emits('update:modelValue', JSON.stringify(values.value));
}, {deep: true })

function deleteRow(index: number) {
	values.value.splice(index, 1)
	total.value -=1
}


//先不弄
function change(value: GoodsMoq) {

	if(value.moq.max < value.moq.min) {

	}

}
</script>



<template>
<div>
	<template v-for="(item, index) in values" :key="`${item.moq}-${index}`" >


		<cl-row style="margin-bottom: 15px; align-items: center ">
			<el-input-number placeholder="请输入起订量区间最小值" controls-position="right" v-model="values[index].moq.min" style="margin-right: 10px;" :min=0 />
				-
			<el-input-number  placeholder="请输入起订量区间最大值" controls-position="right" v-model="values[index].moq.max" style="margin: 0 10px;" :min=0  />

			<el-input-number :precision="2" placeholder="请输入单价" controls-position="right" v-model="values[index].price" :min=0 >
				<template #suffix>
					<span>USD</span>
				</template>
			</el-input-number>

			<el-icon @click="deleteRow(index)">
					<delete />
			</el-icon>
		</cl-row>
	</template>
	<cl-row>
		<el-button plain @click="total+=1"> 点击添加价格 </el-button>
	</cl-row>

</div>
</template>

<style scoped lang="scss">

.el-icon {
	cursor: pointer;
	transition: color .3s;
	margin-left: 10px;
	&:hover {
		color: red;
	}
}

</style>
