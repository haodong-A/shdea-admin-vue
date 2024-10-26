// 用于将 html 转换为 markdown

import type { BytemdPlugin } from "bytemd";
import { html2md } from "./tools.js";

export default function html2mdPlugin(): BytemdPlugin {
	console.log("html2mdPlugin");

	return {
		editorEffect({ editor }) {
			editor.on("paste", ($editor: any, event: Event) => {
				// 拦截粘贴事件
				event.preventDefault();
				console.log("paste", $editor, event);
				// 获取剪切板数据
				const clipboardData = (event as ClipboardEvent).clipboardData;
				const html = clipboardData?.getData("text/html");
				const text = clipboardData?.getData("text/plain");

				if (!html) {
					return $editor.replaceSelection(text);
				}

				const md = html2md(html);

				$editor.replaceSelection(md);
			});
		}
	};
}
