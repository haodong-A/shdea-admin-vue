declare namespace Eps {
	interface GoodsSpecEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsFieldEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsCategoryEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface RecycleDataEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictTypeEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface DictInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysUserEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysLogEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysRoleEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysParamEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysMenuEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface BaseSysDepartmentEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface SpaceTypeEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface PluginInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface TaskInfoEntity {
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

	interface DictInfo {
		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * data
		 */
		data(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			delete: string;
			info: string;
			data: string;
			list: string;
			add: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			delete: boolean;
			info: boolean;
			data: boolean;
			list: boolean;
			add: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface DictType {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			info: string;
			add: string;
			list: string;
			update: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			info: boolean;
			add: boolean;
			list: boolean;
			update: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysDepartment {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * order
		 */
		order(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { delete: string; add: string; order: string; list: string; update: string };

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			add: boolean;
			order: boolean;
			list: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysUser {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysUserEntity[];
			[key: string]: any;
		}>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * move
		 */
		move(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysUserEntity[]>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			delete: string;
			info: string;
			move: string;
			list: string;
			add: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			delete: boolean;
			info: boolean;
			move: boolean;
			list: boolean;
			add: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysRole {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysRoleEntity[];
			[key: string]: any;
		}>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

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

	interface BaseSysMenu {
		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * import
		 */
		import(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * create
		 */
		create(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysMenuEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * export
		 */
		export(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			update: string;
			import: string;
			list: string;
			delete: string;
			create: string;
			page: string;
			add: string;
			export: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			update: boolean;
			import: boolean;
			list: boolean;
			delete: boolean;
			create: boolean;
			page: boolean;
			add: boolean;
			export: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysLog {
		/**
		 * setKeep
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * clear
		 */
		clear(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysLogEntity[];
			[key: string]: any;
		}>;

		/**
		 * getKeep
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { setKeep: string; clear: string; page: string; getKeep: string };

		/**
		 * 权限状态
		 */
		_permission: { setKeep: boolean; clear: boolean; page: boolean; getKeep: boolean };

		request: Service["request"];
	}

	interface BaseSysParam {
		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * html
		 */
		html(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysParamEntity[];
			[key: string]: any;
		}>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			add: string;
			update: string;
			html: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			add: boolean;
			update: boolean;
			html: boolean;
			page: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface BaseOpen {
		/**
		 * refreshToken
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * html
		 */
		html(data?: any): Promise<any>;

		/**
		 * login
		 */
		login(data?: any): Promise<any>;

		/**
		 * eps
		 */
		eps(data?: any): Promise<any>;

		/**
		 * captcha
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			refreshToken: string;
			html: string;
			login: string;
			eps: string;
			captcha: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			refreshToken: boolean;
			html: boolean;
			login: boolean;
			eps: boolean;
			captcha: boolean;
		};

		request: Service["request"];
	}

	interface BaseComm {
		/**
		 * upload
		 */
		upload(data?: any): Promise<any>;

		/**
		 * permmenu
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * eps
		 */
		eps(data?: any): Promise<any>;

		/**
		 * person
		 */
		person(data?: any): Promise<any>;

		/**
		 * uploadMode
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * program
		 */
		program(data?: any): Promise<any>;

		/**
		 * personUpdate
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * logout
		 */
		logout(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			upload: string;
			permmenu: string;
			eps: string;
			person: string;
			uploadMode: string;
			program: string;
			personUpdate: string;
			logout: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			upload: boolean;
			permmenu: boolean;
			eps: boolean;
			person: boolean;
			uploadMode: boolean;
			program: boolean;
			personUpdate: boolean;
			logout: boolean;
		};

		request: Service["request"];
	}

	interface TaskInfo {
		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: TaskInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * stop
		 */
		stop(data?: any): Promise<any>;

		/**
		 * once
		 */
		once(data?: any): Promise<any>;

		/**
		 * start
		 */
		start(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<TaskInfoEntity>;

		/**
		 * log
		 */
		log(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			update: string;
			page: string;
			delete: string;
			stop: string;
			once: string;
			start: string;
			info: string;
			log: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			update: boolean;
			page: boolean;
			delete: boolean;
			stop: boolean;
			once: boolean;
			start: boolean;
			info: boolean;
			log: boolean;
		};

		request: Service["request"];
	}

	interface GoodsCategory {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * data
		 */
		data(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<GoodsCategoryEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsCategoryEntity[];
			[key: string]: any;
		}>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * allLevel
		 */
		allLevel(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<GoodsCategoryEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			data: string;
			list: string;
			page: string;
			update: string;
			add: string;
			allLevel: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			data: boolean;
			list: boolean;
			page: boolean;
			update: boolean;
			add: boolean;
			allLevel: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface GoodsInfo {
		/**
		 * info
		 */
		info(data?: any): Promise<GoodsInfoEntity>;

		/**
		 * data
		 */
		data(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<GoodsInfoEntity[]>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			data: string;
			list: string;
			add: string;
			page: string;
			update: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			data: boolean;
			list: boolean;
			add: boolean;
			page: boolean;
			update: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface GoodsSpec {
		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<GoodsSpecEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<GoodsSpecEntity[]>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsSpecEntity[];
			[key: string]: any;
		}>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			info: string;
			list: string;
			delete: string;
			page: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			info: boolean;
			list: boolean;
			delete: boolean;
			page: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface GoodsField {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<GoodsFieldEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsFieldEntity[];
			[key: string]: any;
		}>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<GoodsFieldEntity>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			list: string;
			page: string;
			update: string;
			add: string;
			info: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			list: boolean;
			page: boolean;
			update: boolean;
			add: boolean;
			info: boolean;
		};

		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * info
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			delete: string;
			add: string;
			list: string;
			page: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			delete: boolean;
			add: boolean;
			list: boolean;
			page: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface SpaceInfo {
		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<SpaceInfoEntity>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			info: string;
			update: string;
			list: string;
			delete: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			info: boolean;
			update: boolean;
			list: boolean;
			delete: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface SpaceType {
		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			info: string;
			delete: string;
			list: string;
			add: string;
			page: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			info: boolean;
			delete: boolean;
			list: boolean;
			add: boolean;
			page: boolean;
		};

		request: Service["request"];
	}

	interface PluginInfo {
		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: PluginInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * install
		 */
		install(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * list
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			update: string;
			page: string;
			delete: string;
			add: string;
			install: string;
			info: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			page: boolean;
			delete: boolean;
			add: boolean;
			install: boolean;
			info: boolean;
			list: boolean;
		};

		request: Service["request"];
	}

	interface RecycleData {
		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: RecycleDataEntity[];
			[key: string]: any;
		}>;

		/**
		 * restore
		 */
		restore(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<RecycleDataEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			page: string;
			restore: string;
			update: string;
			add: string;
			info: string;
			delete: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			page: boolean;
			restore: boolean;
			update: boolean;
			add: boolean;
			info: boolean;
			delete: boolean;
			list: boolean;
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

		dict: { info: DictInfo; type: DictType };
		base: {
			sys: {
				department: BaseSysDepartment;
				user: BaseSysUser;
				role: BaseSysRole;
				menu: BaseSysMenu;
				log: BaseSysLog;
				param: BaseSysParam;
			};
			open: BaseOpen;
			comm: BaseComm;
		};
		task: { info: TaskInfo };
		goods: { category: GoodsCategory; info: GoodsInfo; spec: GoodsSpec; field: GoodsField };
		user: { info: UserInfo };
		space: { info: SpaceInfo; type: SpaceType };
		plugin: { info: PluginInfo };
		recycle: { data: RecycleData };
		chat: { message: ChatMessage; session: ChatSession };
	};
}
