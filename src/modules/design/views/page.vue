<template>
<!---->

		<cl-crud ref="Crud">
			<cl-row>
				<!-- 刷新按钮 -->
				<cl-refresh-btn />
				<!-- 新增按钮 -->
				<el-button type="primary" v-permission="service.goods.field.permission.add" @click="openDrawer = true"> 新增 </el-button>
				<!-- 删除按钮 -->
				<cl-multi-delete-btn />

				<cl-flex1 />
				<!-- 关键字搜索 -->

				<cl-search-key placeholder="搜索关键字" />
			</cl-row>

			<cl-row>
				<cl-table ref="Table"></cl-table>
			</cl-row>

				<el-drawer v-model="openDrawer" size="100%" title="编辑模板">
					<div class="form">
						<div class="container">
							<dp :ref="setRefs('dp')" />
						</div>

						<div class="footer">
							<el-button @click="clear">清空</el-button>
							<el-button type="info" @click="save">保存草稿</el-button>
							<el-button type="success" @click="create">生成代码</el-button>
							<el-button type="primary" @click="open">预览</el-button>
							<el-button type="success" @click="open">提交</el-button>
						</div>

						<el-dialog v-model="openInputPreview" title="预览" destroy-on-close >
							<cl-parse-input :fieldOptions="refs.dp.getData()"/>

						</el-dialog>


						<cl-editor-preview title="代码预览" name="monaco" :ref="setRefs('preview')" />
					</div>
				</el-drawer>
		</cl-crud>

</template>

<script lang="ts" setup>
import { service, useCool } from '/@/cool';
import { ElMessage, ElMessageBox } from "element-plus";
import Dp from "../components/index.vue";
import { ref } from 'vue';
import { useCrud, useTable } from '@cool-vue/crud';


const Crud = useCrud({
	service: service.goods.field,
}, (app) => {
	app.refresh();
})

const Table = useTable({
	contextMenu: ["refresh", "check", "order-desc", "order-asc", {
		label: '编辑',
		callback(item,done) {
			console.log(item);
			done();
		},
	}],
	columns: [
		{
			type: "selection",
		},
		{
			prop: 'name',
			label: '模板名称',
			width: 200
		},
		{

			props: 'template',
			label: '模板代码',
			component: {
				name: 'cl-code-json',
				props: {
					popover: true
				}
			}
		},
		{
			props: 'templateV',
			label: '模板版本',
			width: 200
		},
		{
			label: "状态",
			prop: "status",
			dict: [
				{
					label: "开启",
					value: 1,
					type: "success",
				},
				{
					label: "关闭",
					value: 0,
					type: "danger",
				},
			],
		},
	],
})

const { refs, setRefs } = useCool();


const openDrawer = ref(false);

const openInputPreview = ref(false);
function save() {
	refs.dp.saveDraft();
	ElMessage.success("保存草稿成功");
}

//打开代码预览
function open() {
	openInputPreview.value=true;
}
function create() {
	refs.preview.open(refs.dp.getData());
}

function clear() {
	ElMessageBox.confirm("是否清空列表所有数据？", "提示", {
		type: "warning"
	})
		.then(() => {
			refs.dp.clear();
		})
		.catch(() => null);
}
</script>

<style lang="scss" scoped>
.form {
	background-color: #fff;
	position: relative;
	min-width: 1100px;
	height: 100%;
	overflow: hidden;

	.container {
		height: calc(100% - 80px);
	}

	.footer {
		display: flex;
		justify-content: center;
		padding-top: 20px;
		height: 80px;
		width: 100%;
		box-sizing: border-box;
		background-color: #fff;
		border-top: 1px solid #ebeef5;
		z-index: 9;
	}
}
</style>
