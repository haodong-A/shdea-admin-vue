<template>
  <cl-office-preview :ref="setRefs('preview')" width="1000px" />

  <el-button @click="open('docx')">预览DOCX</el-button>
  <el-button @click="open('pdf')">预览PDF</el-button>
  <el-button @click="open('excel')">预览Excel</el-button>
</template>

<script lang="ts" setup>
import { useCool } from "/@/cool";

const { refs, setRefs } = useCool();

function open(key: string) {
  let url = "";

  if (key == "docx") {
    url =
      "https://cool-service.oss-cn-shanghai.aliyuncs.com/app%2Fbase%2Fd8801c06fae640e7819f77dab6ff8adf_%E6%96%B0%E5%BB%BA%20DOCX%20%E6%96%87%E6%A1%A3.docx";
  }

  if (key == "pdf") {
    url =
      "https://cool-service.oss-cn-shanghai.aliyuncs.com/app%2Fbase%2Fc5ffc82818704ae09dbd7f15d4a2e779_%E6%96%B0%E5%BB%BA%20DOCX%20%E6%96%87%E6%A1%A3.pdf";
  }

  if (key == "excel") {
    url =
      "https://cool-service.oss-cn-shanghai.aliyuncs.com/app%2Fbase%2Fdfc004593df145d584444e62f10b597d_%E8%81%94%E7%B3%BB%E4%BA%BA%E5%AF%BC%E5%85%A5%E6%A8%A1%E7%89%88.xlsx";
  }

  refs.preview?.open(url);
}
</script>
