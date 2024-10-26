import type { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
	return {
		label: "byteMd编辑器",
		description: "基于 byteMd 封装的富文本编辑器", // https://bytemd.js.org
		author: "4hyhzi",
		version: "1.0.0",
		updateTime: "2024-04-12",
		demo: [
			{
				name: "基础用法",
				component: () => import("./demo/base.vue")
			}
		],
		logo: "https://avatars.githubusercontent.com/u/66248486?s=400&u=ef4ce3ee56fbedc8bb86399ab2d888da7651309a&v=4",
		components: [() => import("./components/byte-md.vue")]
	};
};
