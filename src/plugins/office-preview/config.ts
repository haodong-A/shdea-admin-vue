import type { ModuleConfig } from "/@/cool";

// https://www.npmjs.com/package/@vue-office/excel
export default (): ModuleConfig => {
  return {
    order: 100,
    label: "Office preview",
    description:
      "基于 vue-office 的一个支持多种文件(docx、.xlsx、pdf)预览的组件库",
    author: "COOL",
    version: "1.0.0",
    updateTime: "2024-10-16",

    demo: [
      {
        name: "基础用法",
        component: () => import("./demo/base.vue"),
      },
    ],

    components: [() => import("./components/preview.vue")],
  };
};
