<template>
	<cl-editor-md v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref(`# cl-editor-md 编辑器

-   v1.0.0 (2024-02-27)
    -   初始版本

\`\`\`json
{
	label: "markdown 编辑器",
	description: "基于 md-editor-v3 封装的 markdown 编辑器",
	author: "任我行不行",
	version: "1.0.0",
	updateTime: "2024-02-27",
}
\`\`\`
`);
</script>
