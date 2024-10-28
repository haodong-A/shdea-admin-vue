declare namespace Eps {
	interface BaseSysDepartmentEntity {
		/**
		 * 部门名称
		 */
		name?: string;

		/**
		 * 上级部门ID
		 */
		parentId?: number;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysUserEntity {
		/**
		 * 部门ID
		 */
		departmentId?: number;

		/**
		 * 姓名
		 */
		name?: string;

		/**
		 * 用户名
		 */
		username?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 密码版本
		 */
		passwordV?: number;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 头像
		 */
		headImg?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 邮箱
		 */
		email?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 状态 0:禁用 1：启用
		 */
		status?: number;

		/**
		 * socketId
		 */
		socketId?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * 父菜单ID
		 */
		parentId?: number;

		/**
		 * 菜单名称
		 */
		name?: string;

		/**
		 * 权限
		 */
		perms?: string;

		/**
		 * 类型 0：目录 1：菜单 2：按钮
		 */
		type?: number;

		/**
		 * 图标
		 */
		icon?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 菜单地址
		 */
		router?: string;

		/**
		 * 视图地址
		 */
		viewPath?: string;

		/**
		 * 路由缓存
		 */
		keepAlive?: boolean;

		/**
		 * 是否显示
		 */
		isShow?: boolean;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * 键
		 */
		keyName?: string;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 数据
		 */
		data?: string;

		/**
		 * 数据类型 0:字符串 1:数组 2:键值对
		 */
		dataType?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysRoleEntity {
		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 角色标签
		 */
		label?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 数据权限是否关联上下级
		 */
		relevance?: number;

		/**
		 * 菜单权限
		 */
		menuIdList?: string;

		/**
		 * 部门权限
		 */
		departmentIdList?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * 用户ID
		 */
		userId?: number;

		/**
		 * 行为
		 */
		action?: string;

		/**
		 * IP
		 */
		ip?: string;

		/**
		 * 参数
		 */
		params?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictInfoEntity {
		/**
		 * 类型ID
		 */
		typeId?: number;

		/**
		 * 父ID
		 */
		parentId?: number;

		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 值
		 */
		value?: string;

		/**
		 * 排序
		 */
		orderNum?: number;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictTypeEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 标识
		 */
		key?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 登录唯一ID
		 */
		unionid?: string;

		/**
		 * 头像
		 */
		avatarUrl?: string;

		/**
		 * 昵称
		 */
		nickName?: string;

		/**
		 * 手机号
		 */
		phone?: string;

		/**
		 * 性别 0-未知 1-男 2-女
		 */
		gender?: number;

		/**
		 * 状态 0-禁用 1-正常 2-已注销
		 */
		status?: number;

		/**
		 * 登录方式 0-小程序 1-公众号 2-H5
		 */
		loginType?: string;

		/**
		 * 密码
		 */
		password?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 任务ID
		 */
		jobId?: string;

		/**
		 * 最大执行次数 不传为无限次
		 */
		repeatCount?: number;

		/**
		 * 每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效
		 */
		every?: number;

		/**
		 * 状态 0:停止 1：运行
		 */
		status?: number;

		/**
		 * 服务实例名称
		 */
		service?: string;

		/**
		 * 状态 0:cron 1：时间间隔
		 */
		taskType?: number;

		/**
		 * 状态 0:系统 1：用户
		 */
		type?: number;

		/**
		 * 任务数据
		 */
		data?: string;

		/**
		 * 备注
		 */
		remark?: string;

		/**
		 * cron
		 */
		cron?: string;

		/**
		 * 下一次执行时间
		 */
		nextRunTime?: Date;

		/**
		 * 开始时间
		 */
		startDate?: Date;

		/**
		 * 结束时间
		 */
		endDate?: Date;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * 地址
		 */
		url?: string;

		/**
		 * 类型
		 */
		type?: string;

		/**
		 * 分类ID
		 */
		classifyId?: number;

		/**
		 * 文件id
		 */
		fileId?: string;

		/**
		 * 文件名
		 */
		name?: string;

		/**
		 * 文件大小
		 */
		size?: number;

		/**
		 * 文档版本
		 */
		version?: number;

		/**
		 * 文件位置
		 */
		filePath?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * 类别名称
		 */
		name?: string;

		/**
		 * 父分类ID
		 */
		parentId?: number;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsInfoEntity {
		/**
		 * 编号
		 */
		goodsId?: string;

		/**
		 * 标题
		 */
		title?: string;

		/**
		 * 示例图
		 */
		cover?: string;

		/**
		 * 分类
		 */
		category?: string;

		/**
		 * 品牌
		 */
		brand?: string;

		/**
		 * 特殊属性
		 */
		specificAttributes?: string;

		/**
		 * 其他属性
		 */
		otherAttributes?: string;

		/**
		 * 交货
		 */
		delivery?: string;

		/**
		 * 状态 0-下架 1-上架
		 */
		status?: number;

		/**
		 * 浏览次数
		 */
		viewCount?: number;

		/**
		 * 收藏次数
		 */
		favoriteCount?: number;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsCategoryEntity {
		/**
		 * 名称
		 */
		categoryName?: string;

		/**
		 * 父分类ID
		 */
		parentCategoryId?: number;

		/**
		 * 排序
		 */
		sortOrder?: number;

		/**
		 * 状态 0-禁用 1-正常
		 */
		status?: number;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * 表信息
		 */
		entityInfo?: string;

		/**
		 * 操作人
		 */
		userId?: number;

		/**
		 * 被删除的数据
		 */
		data?: string;

		/**
		 * 请求的接口
		 */
		url?: string;

		/**
		 * 请求参数
		 */
		params?: string;

		/**
		 * 删除数据条数
		 */
		count?: number;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PluginInfoEntity {
		/**
		 * 名称
		 */
		name?: string;

		/**
		 * 简介
		 */
		description?: string;

		/**
		 * 实例对象
		 */
		key?: string;

		/**
		 * Hook
		 */
		hook?: string;

		/**
		 * 描述
		 */
		readme?: string;

		/**
		 * 版本
		 */
		version?: string;

		/**
		 * Logo(base64)
		 */
		logo?: string;

		/**
		 * 作者
		 */
		author?: string;

		/**
		 * 状态 0-禁用 1-启用
		 */
		status?: number;

		/**
		 * 插件的plugin.json
		 */
		pluginJson?: string;

		/**
		 * 配置
		 */
		config?: string;

		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ChatMessageEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface ChatSessionEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	type json = any;

	interface BaseSysMenu {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysMenuEntity[];
			[key: string]: any;
		}>;

		/**
		 * 导出
		 */
		export(data?: any): Promise<any>;

		/**
		 * 创建代码
		 */
		create(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 导入
		 */
		import(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<BaseSysMenuEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			delete: string;
			list: string;
			page: string;
			export: string;
			create: string;
			update: string;
			import: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			delete: boolean;
			list: boolean;
			page: boolean;
			export: boolean;
			create: boolean;
			update: boolean;
			import: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysParam {
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<BaseSysParamEntity>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 根据键返回网页的参数值
		 */
		html(data: { key: string }): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysParamEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			info: string;
			delete: string;
			add: string;
			html: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			info: boolean;
			delete: boolean;
			add: boolean;
			html: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysDepartment {
		/**
		 * 排序
		 */
		order(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { order: string; add: string; update: string; list: string; delete: string };

		/**
		 * 权限状态
		 */
		_permission: {
			order: boolean;
			add: boolean;
			update: boolean;
			list: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysLog {
		/**
		 * 获得日志报错时间
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * 清理日志
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysLogEntity[];
			[key: string]: any;
		}>;

		/**
		 * 设置日志保存时间
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getKeep: string; clear: string; page: string; setKeep: string };

		/**
		 * 权限状态
		 */
		_permission: { getKeep: boolean; clear: boolean; page: boolean; setKeep: boolean };

		request: Service["request"];
	}

	interface BaseSysRole {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysRoleEntity[];
			[key: string]: any;
		}>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<BaseSysRoleEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			list: string;
			page: string;
			info: string;
			add: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			list: boolean;
			page: boolean;
			info: boolean;
			add: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysUser {
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<BaseSysUserEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysUserEntity[];
			[key: string]: any;
		}>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<BaseSysUserEntity>;

		/**
		 * 移动部门
		 */
		move(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			list: string;
			add: string;
			delete: string;
			page: string;
			info: string;
			move: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			list: boolean;
			add: boolean;
			delete: boolean;
			page: boolean;
			info: boolean;
			move: boolean;
		};

		request: Service["request"];
	}

	interface BaseComm {
		/**
		 * 个人信息
		 */
		person(data?: any): Promise<any>;

		/**
		 * 编程
		 */
		program(data?: any): Promise<any>;

		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 文件上传模式
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * 权限与菜单
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * 修改个人信息
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * 退出
		 */
		logout(data?: any): Promise<any>;

		/**
		 * 文件上传
		 */
		upload(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			person: string;
			program: string;
			eps: string;
			uploadMode: string;
			permmenu: string;
			personUpdate: string;
			logout: string;
			upload: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			person: boolean;
			program: boolean;
			eps: boolean;
			uploadMode: boolean;
			permmenu: boolean;
			personUpdate: boolean;
			logout: boolean;
			upload: boolean;
		};

		request: Service["request"];
	}

	interface BaseOpen {
		/**
		 * 登录
		 */
		login(data?: any): Promise<any>;

		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 刷新token
		 */
		refreshToken(data: { refreshToken: string }): Promise<any>;

		/**
		 * 获得网页内容的参数值
		 */
		html(data?: any): Promise<any>;

		/**
		 * 验证码
		 */
		captcha(data: {
			/** 类型：svg|base64  */
			type?: string;
			/** 宽度  */
			width?: integer;
			/** 高度  */
			height?: integer;
		}): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			login: string;
			eps: string;
			refreshToken: string;
			html: string;
			captcha: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			login: boolean;
			eps: boolean;
			refreshToken: boolean;
			html: boolean;
			captcha: boolean;
		};

		request: Service["request"];
	}

	interface SpaceInfo {
		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<SpaceInfoEntity>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			list: string;
			update: string;
			page: string;
			add: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			list: boolean;
			update: boolean;
			page: boolean;
			add: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface SpaceType {
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<SpaceTypeEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			list: string;
			update: string;
			page: string;
			delete: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			list: boolean;
			update: boolean;
			page: boolean;
			delete: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface DictInfo {
		/**
		 * 查询
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<DictInfoEntity>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 获得字典数据
		 */
		data(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			page: string;
			add: string;
			update: string;
			info: string;
			delete: string;
			data: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			page: boolean;
			add: boolean;
			update: boolean;
			info: boolean;
			delete: boolean;
			data: boolean;
		};

		request: Service["request"];
	}

	interface DictType {
		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<DictTypeEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			update: string;
			info: string;
			add: string;
			delete: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			update: boolean;
			info: boolean;
			add: boolean;
			delete: boolean;
			list: boolean;
		};

		request: Service["request"];
	}

	interface PluginInfo {
		/**
		 * 查询
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 安装插件
		 */
		install(data: {
			/** 文件  */
			files: array;
			/** 是否强制安装  */
			force: boolean;
		}): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PluginInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 卸载插件
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<PluginInfoEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			list: string;
			update: string;
			install: string;
			page: string;
			delete: string;
			add: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			list: boolean;
			update: boolean;
			install: boolean;
			page: boolean;
			delete: boolean;
			add: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface TaskInfo {
		/**
		 * 执行一次
		 */
		once(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: TaskInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 开始任务
		 */
		start(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<TaskInfoEntity>;

		/**
		 * 任务日志
		 */
		log(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 停止任务
		 */
		stop(data?: any): Promise<any>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			once: string;
			page: string;
			start: string;
			info: string;
			log: string;
			update: string;
			stop: string;
			delete: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			once: boolean;
			page: boolean;
			start: boolean;
			info: boolean;
			log: boolean;
			update: boolean;
			stop: boolean;
			delete: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface RecycleData {
		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: RecycleDataEntity[];
			[key: string]: any;
		}>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<RecycleDataEntity>;

		/**
		 * 恢复数据
		 */
		restore(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<RecycleDataEntity[]>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			info: string;
			restore: string;
			add: string;
			update: string;
			list: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			info: boolean;
			restore: boolean;
			add: boolean;
			update: boolean;
			list: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<UserInfoEntity>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			page: string;
			info: string;
			add: string;
			list: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			page: boolean;
			info: boolean;
			add: boolean;
			list: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface GoodsCategory {
		/**
		 * 获得商品分类数据
		 */
		data(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<GoodsCategoryEntity[]>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsCategoryEntity[];
			[key: string]: any;
		}>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<GoodsCategoryEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			data: string;
			update: string;
			add: string;
			list: string;
			delete: string;
			page: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			data: boolean;
			update: boolean;
			add: boolean;
			list: boolean;
			delete: boolean;
			page: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface GoodsInfo {
		/**
		 * 获得商品数据
		 */
		data(data?: any): Promise<any>;

		/**
		 * 查询
		 */
		list(data?: any): Promise<GoodsInfoEntity[]>;

		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;

		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;

		/**
		 * 分页
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 信息
		 */
		info(data: { id: integer }): Promise<GoodsInfoEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			data: string;
			list: string;
			add: string;
			update: string;
			page: string;
			delete: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			data: boolean;
			list: boolean;
			add: boolean;
			update: boolean;
			page: boolean;
			delete: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface ChatMessage {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ChatMessageEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<ChatMessageEntity[]>;

		/**
		 * info
		 */
		info(data?: any): Promise<ChatMessageEntity>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			list: string;
			info: string;
			delete: string;
			update: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			list: boolean;
			info: boolean;
			delete: boolean;
			update: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface ChatSession {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: ChatSessionEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<ChatSessionEntity[]>;

		/**
		 * info
		 */
		info(data?: any): Promise<ChatSessionEntity>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			list: string;
			info: string;
			delete: string;
			update: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			list: boolean;
			info: boolean;
			delete: boolean;
			update: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	type Service = {
		/**
		 * 基础请求
		 */
		request(options?: {
			url: string;
			method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
			data?: any;
			params?: any;
			headers?: {
				authorization?: string;
				[key: string]: any;
			};
			timeout?: number;
			proxy?: boolean;
			[key: string]: any;
		}): Promise<any>;

		base: {
			sys: {
				menu: BaseSysMenu;
				param: BaseSysParam;
				department: BaseSysDepartment;
				log: BaseSysLog;
				role: BaseSysRole;
				user: BaseSysUser;
			};
			comm: BaseComm;
			open: BaseOpen;
		};
		space: { info: SpaceInfo; type: SpaceType };
		dict: { info: DictInfo; type: DictType };
		plugin: { info: PluginInfo };
		task: { info: TaskInfo };
		recycle: { data: RecycleData };
		user: { info: UserInfo };
		goods: { category: GoodsCategory; info: GoodsInfo };
		chat: { message: ChatMessage; session: ChatSession };
	};
}
