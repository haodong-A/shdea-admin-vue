import { defineComponent, h } from "vue";
import { ref, useModel } from "vue";
import { useUpload } from "/#/upload/hooks";
import { useDark } from "@vueuse/core";
import { module } from "/@/cool";
import { MdEditor, MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import "md-editor-v3/lib/preview.css";

export default defineComponent({
	name: "cl-editor-md",

	components: {
		MdEditor,
		MdPreview
	},

	props: {
		// 绑定值
		modelValue: String,

		// 是否预览模式
		preview: Boolean
	},

	setup(props) {
		const config = module.config("editor-md");

		const { toUpload } = useUpload();
		const isDark = ref(useDark());

		// 绑定值
		const value = useModel(props, "modelValue");

		// 图片上传事件
		async function onUploadImg(files: File[], callback: (urls: string[]) => void) {
			const res = await Promise.all(
				files.map((file) => {
					return toUpload(file);
				})
			);

			callback(res.map((e) => e.url));
		}

		return () => {
			return h(
				props.preview ? (
					<md-preview v-model={value.value} />
				) : (
					<md-editor v-model={value.value} />
				),
				{
					placeholder: "请输入",
					theme: isDark.value ? "dark" : "light",
					onUploadImg,
					...config
				}
			);
		};
	}
});
