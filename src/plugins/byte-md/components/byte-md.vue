<script lang="js">
import { ref, defineComponent, onMounted, watch } from "vue";
import { useCool } from "/@/cool";

import { ContextMenu } from "@cool-vue/crud";
import "bytemd/dist/index.css"; // 导入编辑器样式
import { Editor, Viewer } from "@bytemd/vue-next";
import { plugins } from "./utils/instance";

import zhHans from "bytemd/lib/locales/zh_Hans.json";

export default defineComponent({
	name: "cl-byte-md",
	components: {
		// eslint-disable-next-line vue/no-unused-components
		Editor,
		// eslint-disable-next-line vue/no-unused-components
		Viewer
	},
	props: {
		modelValue: String
	},
	emits: ["update:modelValue"],
	setup(props, { emit }) {
		const { refs, setRefs } = useCool();
		const show = ref(false);
		const value = ref(""); // 获取的内容
		const editerCtx = ref();

		const imageUploadPlugin = () => {
			// 选择图片
			return {
				actions: [
					{
						title: "选择图片",
						icon: '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="arco-icon arco-icon-file-image" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter" filter="" data-v-249840b0="" style="font-size: 32px;"><path d="m26 33 5-6v6h-5Zm0 0-3-4-4 4h7Zm11 9H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2ZM17 19h1v1h-1v-1Z"></path></svg>',
						handler: {
							type: "action",
							click: (ctx) => {
								editerCtx.value = ctx;
								refs.image.open();
							}
						}
					}
				]
			};
		};

		const editPlugins = [...plugins, imageUploadPlugin()];

		const onFileConfirm = (files) => {
			const { editor, appendBlock, codemirror } = editerCtx.value;

			refs.image.close();
			const pos = appendBlock(
				files
					.map(({ url, alt, title }, i) => {
						alt = alt != null ? alt : files[i].name;
						return `![${alt}](${url}${title ? ` "${title}"` : ""})`;
					})
					.join("\n\n") + "\n"
			);
			editor.setSelection(pos, codemirror.Pos(pos.line + files.length * 2 - 2));
			editor.focus();
		};

		const onContextMenu = (e) => {
			console.log(e);
			ContextMenu.open(e, {
				hover: {
					target: "item-file__wrap"
				},
				list: [
					{
						label: "预览",
						callback(done) {
							preview();
							done();
						}
					},
					{
						label: "复制链接",
						callback(done) {
							if (info.value.url) {
								copy(info.value.url);
								ElMessage.success("复制成功");
							}

							done();
						}
					},
					{
						label: isSelected.value ? "取消选中" : "选中",
						callback(done) {
							select();
							done();
						}
					},
					{
						label: "删除",
						callback(done) {
							remove();
							done();
						}
					}
				]
			});
		};

		onMounted(() => {
			value.value = props.modelValue;
		});

		watch(
			() => props.modelValue,
			(v) => {
				value.value = v;
			}
		);

		const handleChange = (v) => {
			emit("update:modelValue", v);
			value.value = v;
		};

		return {
			refs,
			setRefs,
			value,
			editPlugins,
			zhHans,
			handleChange,
			onFileConfirm,
			onContextMenu,
			show,
			editerCtx
		};
	}
});
</script>

<template>
	<div class="details">
		<editor
			:ref="setRefs('mdEditor')"
			class="editos"
			:value="value"
			:plugins="editPlugins"
			:locale="zhHans"
			@change="handleChange"
		/>

		<!-- 图片 -->
		<cl-upload-space
			:ref="setRefs('image')"
			accept="image/*"
			:show-btn="false"
			@confirm="onFileConfirm"
		/>
	</div>
</template>

<style lang="scss">
.medium-zoom-overlay {
	z-index: 600 !important;
}

.medium-zoom-image--opened {
	z-index: 601 !important;
}

.details {
	width: 100%;
	height: 100%;

	.katex-html {
		display: none;
	}

	.editos {
		height: 400px;

		.bytemd {
			height: 100% !important; // 改变编辑器默认高度，不需要的可以不配置
			z-index: 500;
		}
	}

	.viewer {
		margin-top: 20px;
		background: #fff;
		padding: 20px;

		.bytemd {
			height: calc(100% - 200px) !important;
		}
	}

	.btn {
		flex-direction: row-reverse;
		margin: 20px;

		.el-button {
			margin-right: 20px;
		}
	}
}
</style>
