import type { EditorMdOptions } from "./types";
import type { Merge, ModuleConfig } from "/@/cool";
import logo from "./static/logo.jpg";

export default (): Merge<ModuleConfig, EditorMdOptions> => {
	return {
		label: "markdown 编辑器",
		description: "基于 md-editor-v3 封装的 markdown 编辑器", // https://github.com/imzbf/md-editor-v3
		author: "任我行不行",
		version: "1.0.0",
		updateTime: "2024-02-27",
		logo,
		demo: [
			{
				name: "基础用法",
				component: () => import("./demo/base.vue")
			}
		],

		options: {
			editorId: "cl-editor-md",
			language: "zh-CN",
			previewTheme: "default",
			codeTheme: "atom",
			toolbars: [
				"bold",
				"underline",
				"italic",
				"-",
				"strikeThrough",
				"title",
				"sub",
				"sup",
				"quote",
				"unorderedList",
				"orderedList",
				"task",
				"-",
				"codeRow",
				"code",
				"link",
				"image",
				"table",
				"mermaid",
				"katex",
				"-",
				"revoke",
				"next",
				"=",
				"prettier",
				"pageFullscreen",
				"fullscreen",
				"preview",
				"catalog"
			],
			footers: ["markdownTotal", "=", "scrollSwitch"]
		},

		components: [() => import("./components/md")]
	};
};
