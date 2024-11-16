export declare namespace Dp {
	interface DemoItem {
		label: string;
		name?: string;
		required?: boolean;
		getType?: "auto";
		component?: {
			name?: string;
			props?: {
				children?: any[];
				[key: string]: any;
			};
		};
		config?: {
			defs?: string[];
			tips?: string;
			disabled?: boolean;
			items?: ClForm.Item[];
			[key: string]: any;
		};
		group?: DemoItem[];
		[key: string]: any;
	}

	interface Provide {
		form: {
			[key: string]: any;
		};
		get(prop: string): any;
		getGroup(id: string): any;
		getData(): any[];
		toDet(item: any): void;
		setActive(id: string): void;
		add(data: any): void;
		remove(index: number): void;
		removeBy(options: { id?: string; index?: number }): void;
		clear(): boolean;
		hasTemp(): boolean;
		clearConfig(id?: string): void;
		saveDraft(): void;
		scrollToBottom(): void;
	}
}


//字段配置
export declare namespace Fo{
	interface FieldItem {
		id: string | number;
		name: 'text' | 'textarea' | 'radio' | 'checkbox' | 'number';
		label: string;
		isGroup?: boolean;
		props: FieldProps
	}

	interface FieldProps {
		name: 'text' | 'textarea' | 'radio' | 'checkbox' | 'number';
		label: string;
		placeholder?: string;
		//参数名称 建议英文，前台名称
		paramName: string;
		options?: { label: string; value: string | number }[];
		required?: boolean;
		//格式化，目前仅用于日期才会出现
		format?: string;
	}

}
