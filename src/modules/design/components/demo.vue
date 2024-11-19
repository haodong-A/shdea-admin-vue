<template>
	<div class="dp-demo">
		<el-scrollbar>
			<div class="group" v-for="(group, index) in tab.list" :key="index">
				<p class="label">{{ group.label }}</p>

				<draggable
					v-model="group.children"
					class="list"
					item-key="label"
					:group="{
						name: 'A',
						pull: 'clone',
						put: false
					}"
					:sort="false"
					:clone="onClone"
					@end="onEnd"
				>
					<template #item="{ element: item }">
						<div class="item" @click="add(item)">
							<img :src="icons[item.name]" />
							<span>{{ item.label }}</span>
						</div>
					</template>
				</draggable>
			</div>
		</el-scrollbar>
	</div>
</template>

<script lang="tsx" setup>
import { ElMessage } from "element-plus";
import { cloneDeep } from "lodash-es";
import { reactive } from "vue";
import Draggable from "vuedraggable/src/vuedraggable";
import { useDp } from "../hooks";
import { Dp } from "../types";
import { useCool } from "/@/cool";
import { deepMerge, uuid } from "/@/cool/utils";

const { mitt } = useCool();
const { dp } = useDp();

// 图标
const files: any = import.meta.glob("/src/modules/design/static/icon/*", {
	eager: true
});

const icons = reactive<any>({});

for (const i in files) {
	icons[i.replace("/src/modules/design/static/icon/", "").replace(".png", "")] = files[i].default;
}

// 基础
const demo: Dp.DemoItem[] = [
	{
		label: "单行文字",
		name: "text",
	},
	{
		label: "多行文字",
		name: "textarea",
		config: {
			items: [
				{
					label: '字数限制',
					renderLabel: (
						<p class="form-label">
							字数 <span>最多200字</span>
						</p>
					),
					prop: 'maxlength',
					value: 200,
					component: {
						name: "el-input-number"
					}
				}
			]
		}
	},
	{
		label: "单项选择",
		name: "radio",
		component: {
			name: "demo-item",
			props: {
				placeholder: "请选择",
				arrowIcon: true,
				options: []
			}
		},
		config: {
			items: [
				{
					label: "选项",
					renderLabel: (
						<p class="form-label">
							选项 <span>最多200项，每项最多50个字</span>
						</p>
					),
					component: {
						name: "demo-select"
					}
				}
			]
		}
	},
	{
		label: "多项选择",
		name: "checkbox",
		component: {
			name: "demo-item",
			props: {
				placeholder: "请选择",
				arrowIcon: true,
				options: []
			}
		},
		config: {
			items: [
			{
				label: "选项",
				renderLabel: (
					<p class="form-label">
						选项 <span>最多200项，每项最多50个字</span>
					</p>
				),
				component: {
					name: "demo-select"
				}
			}
			]
		}
	},
	{
		label: "时间",
		name: "time",
		component: {
			name: "demo-item",
			props: {
				placeholder: "请选择",
				arrowIcon: true
			}
		},
		config: {

			items: [
				{
					label: '日期类型',
					prop: 'type',
					component: {
						name: 'el-select',
						props: {
							placeholder: '请选择时间类型'
						},
						options: [
							{
								label: '年份 - year',
								value: 'year'
							},

							{
								label: '月份 - month',
								value: 'month'
							},
							{
								label: '日期 - date',
								value: 'date'
							},
							{
								label: '星期 - week',
								value: 'week'
							},
							{
								label: '日期时间 - datetime',
								value: 'datetime'
							},
							{
								label: '年份集合',
								value: 'years'
							},
							{
								label: '月份集合',
								value: 'months'
							},

							{
								label: '日期集合',
								value: 'dates'
							},
							{
								label: '日期区间',
								value: 'datetimerange'
							},

						]
					}
				},
				{
					//【很重要】是否隐藏
					hidden({ scope }) {
						// scope 为表单值
						// 返回一个 boolean 来控制当前表单项的隐藏/显示
						return scope.type != 'datetimerange';
					},
					label: '开始日期提示',
					prop: 'startPlaceholder',
					component: {
						name: 'el-input'
					}
				},
				{
					//【很重要】是否隐藏
					hidden({ scope }) {
						// scope 为表单值
						// 返回一个 boolean 来控制当前表单项的隐藏/显示
						return scope.type != 'datetimerange';
					},
					label: '结束日期提示',
					prop: 'endPlaceholder',
					component: {
						name: 'el-input'
					}
				},
				{
					label: "日期格式",
					prop: "valueFormat",
					renderLabel: (
						<p class="form-label">
							日期格式 <span>需要和日期类型相对应，否则容易显示错误</span>
						</p>
					),
					value: "YYYY-MM-DD",
					component: {
						name: "el-radio-group",
						options: [
							{
								label: '年份',
								value: 'YYYY'
							},
							{
								label: '月份',
								value: 'MM'
							},
							{
								label: '星期',
								value: 'dddd'
							},
							{
								label: "年-月-日",
								value: "YYYY-MM-DD"
							},
							{
								label: "年-月-日 时:分",
								value: "YYYY-MM-DD HH:mm"
							},
							{
								label: "年-月-日 时:分:秒",
								value: "YYYY-MM-DD HH:mm:ss"
							}
						]
					}
				}
			]
		}
	},
	{
		label: "数字",
		name: "number",
		config: {
			items: [
				{
					label: "数据类型",
					prop: "precision",
					value: 0,
					component: {
						name: "el-radio-group",
						options: [
							{
								label: "整数",
								value: 0
							},
							{
								label: "一位小数",
								value: 1
							},
							{
								label: "两位位小数",
								value: 2
							}
						]
					}
				},
				{
					label: "数值区间",
					prop: "range",
					value: [],
					component: {
						name: "demo-num-range"
					}
				},
				{
					label: "默认值",
					prop: "defaultValue",
					component: {
						name: "el-input"
					}
				}
			]
		}
	},
	{
		label: "组合",
		name: "group",
		component: {
			name: "demo-group",
			props: {
				children: []
			}
		},
		config: {
			defs: ["title", 'paramName']
		}
	},
];

function getDemo(name: string, data?: any) {
	const d = demo.find((e) => e.name == name);
	return deepMerge(cloneDeep(d), data || {});
}

// 数据
const tab = reactive<{ list: { label: string; children: Dp.DemoItem[] }[] }>({
	list: [
		{
			label: "基础组件",
			children: demo
		},
		{
			label: "组合套件",
			children: [
				{
					label: "加班审批",
					name: "jiaban",
					group: [
						getDemo("radio", {
							label: "加班类型",
							required: true,
							component: {
								props: {
									options: [
										{
											label: "工作日加班",
											value: 0
										},
										{
											label: "休息日加班",
											value: 1
										},
										{
											label: "节假日加班",
											value: 2
										}
									]
								}
							}
						}),
						getDemo("radio", {
							label: "加班补偿方式",
							required: true,
							component: {
								props: {
									options: [
										{
											label: "不计补偿",
											value: 0
										},
										{
											label: "加班工资",
											value: 1
										},
										{
											label: "加班调休",
											value: 2
										},
										{
											label: "加班工资或加班调休",
											value: 3
										}
									]
								}
							},
							config: {
								items: [
									{},
									{
										label: "类型匹配",
										prop: "match",
										value: [],
										component: {
											name: "demo-jb-match"
										}
									}
								]
							}
						}),

						getDemo("textarea", {
							label: "加班原因",
							required: true
						}),
						getDemo("file"),
						{
							label: "流程",
							name: "approval-process",
							component: {
								props: {
									placeholder: "请选择",
									arrowIcon: true
								}
							}
						}
					]
				},
				{
					label: "出差审批",
					name: "chuchai",
					group: [
						{
							label: "出差城市",
							required: true,
							name: "region",
							component: {
								props: {
									placeholder: "请选择",
									arrowIcon: true
								}
							}
						},
						{
							label: "目的城市",
							required: true,
							name: "region",
							component: {
								props: {
									placeholder: "请选择",
									arrowIcon: true
								}
							}
						},

						getDemo("textarea", {
							label: "出差事由"
						}),
						getDemo("file"),
						{
							label: "流程",
							name: "approval-process",
							component: {
								props: {
									placeholder: "请选择",
									arrowIcon: true
								}
							}
						}
					]
				},
				{
					label: "补卡审批",
					name: "buka",
					group: [
						getDemo("time", {
							label: "补卡时间",
							required: true
						}),
						getDemo("textarea", {
							label: "补卡事由",
							required: true
						}),
						getDemo("pic"),
						{
							label: "流程",
							name: "approval-process",
							component: {
								props: {
									placeholder: "请选择",
									arrowIcon: true
								}
							}
						}
					]
				},
				{
					label: "调班审批",
					name: "tiaoban",
					group: [
						getDemo("radio", {
							label: "实际申请人",
							required: true
						}),
						getDemo("time", {
							label: "调班日期",
							required: true
						}),
						getDemo("time", {
							label: "被调班日期",
							required: true
						}),
						{
							label: "调班班次"
						},
						getDemo("textarea", {
							label: "调班原因"
						}),
						getDemo("file"),
						{
							label: "流程",
							name: "approval-process",
							component: {
								props: {
									placeholder: "请选择",
									arrowIcon: true
								}
							}
						}
					]
				},
				{
					label: "请假审批",
					name: "qingjia",
					group: [
						getDemo("radio", {
							label: "请假类型",
							required: true,
							component: {
								props: {
									options: [
										{
											label: "事假",
											value: 1
										},
										{
											label: "年假",
											value: 2
										},
										{
											label: "病假",
											value: 3
										},
										{
											label: "调休",
											value: 4
										},
										{
											label: "产假",
											value: 5
										},
										{
											label: "陪产假",
											value: 6
										},
										{
											label: "婚假",
											value: 7
										},
										{
											label: "丧假",
											value: 8
										},
										{
											label: "哺乳假",
											value: 9
										}
									]
								}
							}
						}),

						getDemo("textarea", {
							label: "请假事由",
							required: true
						}),
						getDemo("pic")
					],
					config: {
						tips: "适用于员工本人或他人代为发起请假申请"
					}
				},
				{
					label: "外出审批",
					name: "waichu",
					group: [

						getDemo("textarea", {
							label: "外出事由",
							required: true
						}),
						getDemo("pic")
					],
					config: {
						tips: "适用于员工本人或他人代为发起外出申请"
					}
				}
			]
		}
	]
});

// 解析
function parse(item: Dp.DemoItem) {
	function next(data: Dp.DemoItem, options: any = {}) {
		const { autoInc = true } = options;

		const d: Dp.DemoItem = cloneDeep({
			...data,
			id: uuid()
		});

		// 默认配置
		if (!d.config) {
			d.config = {};
		}

		if (!d.config.items) {
			d.config.items = [];
		}

		if (!d.config.defs) {
			d.config.defs = ["title", "placeholder", "paramName"];
		}

		d.config.title = d.label;

		if (autoInc) {
			// 序号
			data._index = data._index !== undefined ? data._index + 1 : 0;

			if (data._index > 0) {
				d.label += data._index;
			}
		}

		// 默认组件
		if (!d.component) {
			d.component = {};
		}
		if (!d.component.name) {
			d.component.name = "demo-item";
		}
		if (!d.component.props) {
			d.component.props = {};
		}
		if (!d.component.props.label) {
			d.component.props.label = d.label;
		}
		if (!d.component.props.name) {
			d.component.props.name = d.name;
		}
		if (d.required) {
			d.component.props.required = true;
		}

		switch (d.getType) {
			// 系统自动获取
			case "auto":
				d.component.props.placeholder = "系统自动获取";
				break;
		}

		// 表单项组件
		const items = [];

		// 标题
		if (d.config.defs.includes("title")) {
			items.unshift({
				label: "标题",
				renderLabel: (
					<p class="form-label">
						标题 <span>最多20字</span>
					</p>
				),
				prop: "label",
				value: d.label,
				component: {
					name: "el-input",
					props: {
						maxlength: 20,
						clearable: true,
						placeholder: "请输入",
						disabled: d.config.disabled
					}
				}
			});
		}
		if (d.config.defs.includes("paramName")) {
			items.unshift({
				label: '参数名称',
				prop: 'paramName',
				renderLabel: (
					<p class="form-label">
						参数名称 <span>展示在页面的参数名称，建议用英文</span>
					</p>
				),
				component: {
					name: 'el-input',
					props: {
						clearable: true,
						placeholder: "请输入参数名称",
						disabled: d.config.disabled
					}
				}
				});
		}

		// 占位符
		if (d.config.defs.includes("placeholder")) {
			items.push({
				label: "提示文字",
				renderLabel: (
					<p class="form-label">
						提示文字 <span>最多50字</span>
					</p>
				),
				prop: "placeholder",
				value: "请输入",
				component: {
					name: "el-input",
					props: {
						maxlength: 50,
						clearable: true,
						placeholder: "请输入",
						disabled: d.config.disabled
					}
				}
			});
		}

		d.config.items.unshift(...items);
		d.config.items.push({
			label: "验证",
			prop: "required",
			component: {
				name: "slot-required"
			}
		});

		return d;
	}

	let v = null;

	if (item.group) {
		if (dp.hasTemp()) {
			ElMessage.warning("请先删除已选套件");
			return undefined;
		}

		const arr = item.group.map((e) => next(e, { autoInc: false }));
		arr.forEach((e: any) => {
			e.config.disabled = true;
			e.isDel = false;
		});
		v = next({
			label: item.label,
			name: item.name,
			isTemp: true,
			component: {
				name: "demo-group",
				props: {
					children: arr
				}
			},
			config: {
				defs: ["title"],
				...item.config
			}
		});
	} else {
		v = next(item);
	}

	return v;
}

// 获取配置
function getConfig(name: string) {
	let d = null;

	tab.list.find((e) => {
		d = e.children.find((a) => a.name == name);

		return !!d;
	});

	return d ? parse(d)?.config : {};
}

// 复制
let _d: any = null;

function onClone(item: any) {
	// 记录复制的数据
	_d = parse(item);

	// 发送拉取消息
	mitt.emit("dp.pull", _d);

	return _d;
}

function add(item: any) {
	dp.add(onClone(item));
	dp.scrollToBottom();
}

function onEnd() {
	if (_d) {
		mitt.emit("dp.setActive", _d.id);
	}
}

defineExpose({
	getConfig
});
</script>

<style lang="scss" scoped>
.dp-demo {
	width: 350px;
	background-color: #fff;
	border-radius: 5px;

	.group {
		.label {
			font-size: 15px;
			padding: 15px 20px;
		}

		.list {
			display: flex;
			flex-wrap: wrap;
			padding: 0 8px;

			.item {
				display: flex;
				align-items: center;
				height: 40px;
				width: calc(50% - 16px);
				margin: 0 8px 6px 8px;
				padding: 0 8px 0 18px;
				box-sizing: border-box;
				border: 1px dashed currentColor;
				border-radius: 3px;
				cursor: pointer;
				color: #bfbfbf;

				img {
					height: 20px;
					width: 20px;
					margin-right: 14px;
				}

				span {
					font-size: 15px;
				}

				&:hover {
					border-color: var(--color-primary);
				}
			}
		}

		&:last-child {
			.list {
				padding-bottom: 20px;
			}
		}
	}
}
</style>
