export declare type Toolbars = Array<
	| "-"
	| "="
	| "bold"
	| "underline"
	| "italic"
	| "strikeThrough"
	| "title"
	| "sub"
	| "sup"
	| "quote"
	| "unorderedList"
	| "orderedList"
	| "task"
	| "codeRow"
	| "code"
	| "link"
	| "image"
	| "table"
	| "mermaid"
	| "katex"
	| "revoke"
	| "next"
	| "save"
	| "prettier"
	| "pageFullscreen"
	| "fullscreen"
	| "preview"
	| "htmlPreview"
	| "catalog"
>;

export declare type PreviewTheme =
	| "default"
	| "github"
	| "vuepress"
	| "mk-cute"
	| "smart-blue"
	| "cyanosis";

export declare type CodeTheme =
	| "atom"
	| "a11y"
	| "github"
	| "gradient"
	| "kimbie"
	| "paraiso"
	| "qtcreator"
	| "stackoverflow";

export declare interface EditorMdOptions {
	options: {
		editorId?: string;
		language?: "zh-CN" | "en-US";
		previewTheme?: PreviewTheme;
		codeTheme?: CodeTheme;
		toolbars?: Toolbars;
		toolbarsExclude?: Toolbars;
		footers?: Array<"markdownTotal" | "=" | "scrollSwitch">;
	};
}
