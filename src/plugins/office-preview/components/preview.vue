<template>
	<cl-dialog v-model="visible" :title="title" :height="height" :width="width">
		<div class="cl-office-preview">
			<component
				:is="componentName"
				:src="link"
				:options="options"
				@rendered="rendered"
				@error="error"
				v-if="componentName"
			/>
		</div>
	</cl-dialog>
</template>

<script lang="ts" setup name="cl-office-preview">
import { computed, ref } from "vue";
import { extname } from "/@/cool/utils";
import VueOfficeDocx from "@vue-office/docx";
import VueOfficePdf from "@vue-office/pdf";
import VueOfficeExcel from "@vue-office/excel";
import "@vue-office/docx/lib/index.css";

const props = defineProps({
	url: String,
	title: {
		type: String,
		default: "预览"
	},
	height: {
		type: String,
		default: "70vh"
	},
	width: String,
	options: Object // https://501351981.github.io/vue-office/examples/docs/config/
});

const emit = defineEmits(["rendered", "error"]);

const visible = ref(false);
const link = ref("");

const componentName = computed(() => {
	if (!link.value) {
		return null;
	}

	const ext = extname(link.value).toLocaleLowerCase();

	switch (ext) {
		case "docx":
		case "doc":
			return VueOfficeDocx;

		case "pdf":
			return VueOfficePdf;

		case "xlsx":
			return VueOfficeExcel;

		default:
			return null;
	}
});

function rendered() {
	emit("rendered");
}

function error() {
	emit("error");
}

function open(url: string) {
	link.value = url || props.url!;
	visible.value = true;
}

function close() {
	visible.value = false;
}

defineExpose({
	open,
	close
});
</script>
