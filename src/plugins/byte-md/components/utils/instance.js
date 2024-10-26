import gfm from "@bytemd/plugin-gfm";
import highlightssr from "@bytemd/plugin-highlight-ssr";
import breaks from "@bytemd/plugin-breaks";
import footnotes from "@bytemd/plugin-footnotes";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import mermaid from "@bytemd/plugin-mermaid";
import math from "@bytemd/plugin-math";

// 代码高亮主题
import highlightTheme from "@ziuchen/bytemd-plugin-highlight-theme";
import highlights from "@ziuchen/bytemd-plugin-highlight-theme/dist/highlights.json";
import zhHansHighlightTheme from "@ziuchen/bytemd-plugin-highlight-theme/locales/zh_Hans.json";

// markdown主题
import markdownTheme from "@ziuchen/bytemd-plugin-markdown-theme";
import themes from "@ziuchen/bytemd-plugin-markdown-theme/dist/themes.json";
import zhHansMarkdownTheme from "@ziuchen/bytemd-plugin-markdown-theme/locales/zh_Hans.json";

// 语言包
import zhHansGfm from "@bytemd/plugin-gfm/locales/zh_Hans.json";
import zhHansMath from "@bytemd/plugin-math/locales/zh_Hans.json";
import zhHansMerimaid from "@bytemd/plugin-mermaid/locales/zh_Hans.json";

import html2mdPlugin from "./html2md";

export const plugins = [
	// 将所有的扩展功能放入插件数组中，然后就可以生效了
	gfm({
		locale: zhHansGfm
	}),
	highlightssr(),
	breaks(),
	frontmatter(),
	footnotes(),
	gemoji(),
	mediumZoom(),
	math({
		locale: zhHansMath
	}),
	mermaid({
		locale: zhHansMerimaid
	}),
	markdownTheme({
		locale: zhHansMarkdownTheme,
		themes,
		defaultTheme: "channing-cyan"
	}),
	highlightTheme({
		locale: zhHansHighlightTheme,
		highlights,
		defaultHighlight: "xcode"
	}),
	html2mdPlugin()
];
