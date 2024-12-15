declare namespace Eps {
	interface BaseSysParamEntity {
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

	interface BaseSysDepartmentEntity {
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

	interface BaseSysMenuEntity {
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

	interface PluginInfoEntity {
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

	interface GoodsFieldEntity {
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface GoodsSpecEntity {
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

	interface GoodsInfoEntity {
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

	interface UserInfoEntity {
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

	interface BaseSysParam {
		/**
		 * html
		 */
		html(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysParamEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysParamEntity[];
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
		 * 权限标识
		 */
		permission: {
			html: string;
			delete: string;
			info: string;
			page: string;
			update: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			html: boolean;
			delete: boolean;
			info: boolean;
			page: boolean;
			update: boolean;
			add: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysUser {
		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysUserEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysUserEntity[];
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
		 * list
		 */
		list(data?: any): Promise<BaseSysUserEntity[]>;

		/**
		 * move
		 */
		move(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			page: string;
			update: string;
			add: string;
			list: string;
			move: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			page: boolean;
			update: boolean;
			add: boolean;
			list: boolean;
			move: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysDepartment {
		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysDepartmentEntity[]>;

		/**
		 * order
		 */
		order(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { update: string; add: string; list: string; order: string; delete: string };

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			add: boolean;
			list: boolean;
			order: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysLog {
		/**
		 * getKeep
		 */
		getKeep(data?: any): Promise<any>;

		/**
		 * setKeep
		 */
		setKeep(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysLogEntity[];
			[key: string]: any;
		}>;

		/**
		 * clear
		 */
		clear(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: { getKeep: string; setKeep: string; page: string; clear: string };

		/**
		 * 权限状态
		 */
		_permission: { getKeep: boolean; setKeep: boolean; page: boolean; clear: boolean };

		request: Service["request"];
	}

	interface BaseSysMenu {
		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysMenuEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysMenuEntity[];
			[key: string]: any;
		}>;

		/**
		 * create
		 */
		create(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysMenuEntity[]>;

		/**
		 * import
		 */
		import(data?: any): Promise<any>;

		/**
		 * export
		 */
		export(data?: any): Promise<any>;

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
			page: string;
			create: string;
			delete: string;
			list: string;
			import: string;
			export: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			info: boolean;
			page: boolean;
			create: boolean;
			delete: boolean;
			list: boolean;
			import: boolean;
			export: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface BaseSysRole {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<BaseSysRoleEntity>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: BaseSysRoleEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<BaseSysRoleEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			add: string;
			info: string;
			update: string;
			page: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			add: boolean;
			info: boolean;
			update: boolean;
			page: boolean;
			list: boolean;
		};

		request: Service["request"];
	}

	interface BaseComm {
		/**
		 * upload
		 */
		upload(data?: any): Promise<any>;

		/**
		 * personUpdate
		 */
		personUpdate(data?: any): Promise<any>;

		/**
		 * eps
		 */
		eps(data?: any): Promise<any>;

		/**
		 * uploadMode
		 */
		uploadMode(data?: any): Promise<any>;

		/**
		 * logout
		 */
		logout(data?: any): Promise<any>;

		/**
		 * person
		 */
		person(data?: any): Promise<any>;

		/**
		 * program
		 */
		program(data?: any): Promise<any>;

		/**
		 * permmenu
		 */
		permmenu(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			upload: string;
			personUpdate: string;
			eps: string;
			uploadMode: string;
			logout: string;
			person: string;
			program: string;
			permmenu: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			upload: boolean;
			personUpdate: boolean;
			eps: boolean;
			uploadMode: boolean;
			logout: boolean;
			person: boolean;
			program: boolean;
			permmenu: boolean;
		};

		request: Service["request"];
	}

	interface BaseOpen {
		/**
		 * html
		 */
		html(data?: any): Promise<any>;

		/**
		 * login
		 */
		login(data?: any): Promise<any>;

		/**
		 * refreshToken
		 */
		refreshToken(data?: any): Promise<any>;

		/**
		 * captcha
		 */
		captcha(data?: any): Promise<any>;

		/**
		 * eps
		 */
		eps(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			html: string;
			login: string;
			refreshToken: string;
			captcha: string;
			eps: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			html: boolean;
			login: boolean;
			refreshToken: boolean;
			captcha: boolean;
			eps: boolean;
		};

		request: Service["request"];
	}

	interface PluginInfo {
		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<PluginInfoEntity[]>;

		/**
		 * install
		 */
		install(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<PluginInfoEntity>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

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
		 * 权限标识
		 */
		permission: {
			update: string;
			list: string;
			install: string;
			info: string;
			add: string;
			page: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			update: boolean;
			list: boolean;
			install: boolean;
			info: boolean;
			add: boolean;
			page: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface RecycleData {
		/**
		 * info
		 */
		info(data?: any): Promise<RecycleDataEntity>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: RecycleDataEntity[];
			[key: string]: any;
		}>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<RecycleDataEntity[]>;

		/**
		 * restore
		 */
		restore(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			delete: string;
			page: string;
			update: string;
			list: string;
			restore: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			delete: boolean;
			page: boolean;
			update: boolean;
			list: boolean;
			restore: boolean;
			add: boolean;
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
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<SpaceInfoEntity[]>;

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
			add: string;
			info: string;
			page: string;
			list: string;
			update: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			info: boolean;
			page: boolean;
			list: boolean;
			update: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface SpaceType {
		/**
		 * info
		 */
		info(data?: any): Promise<SpaceTypeEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: SpaceTypeEntity[];
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
		 * list
		 */
		list(data?: any): Promise<SpaceTypeEntity[]>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			page: string;
			delete: string;
			add: string;
			list: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			page: boolean;
			delete: boolean;
			add: boolean;
			list: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface DictType {
		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<DictTypeEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictTypeEntity[];
			[key: string]: any;
		}>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<DictTypeEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			delete: string;
			info: string;
			page: string;
			update: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			delete: boolean;
			info: boolean;
			page: boolean;
			update: boolean;
			list: boolean;
		};

		request: Service["request"];
	}

	interface DictInfo {
		/**
		 * info
		 */
		info(data?: any): Promise<DictInfoEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DictInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<DictInfoEntity[]>;

		/**
		 * data
		 */
		data(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			page: string;
			add: string;
			list: string;
			data: string;
			delete: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			page: boolean;
			add: boolean;
			list: boolean;
			data: boolean;
			delete: boolean;
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
		 * info
		 */
		info(data?: any): Promise<GoodsFieldEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsFieldEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<GoodsFieldEntity[]>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			info: string;
			page: string;
			add: string;
			update: string;
			list: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			info: boolean;
			page: boolean;
			add: boolean;
			update: boolean;
			list: boolean;
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
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsSpecEntity[];
			[key: string]: any;
		}>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<GoodsSpecEntity[]>;

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
			page: string;
			delete: string;
			list: string;
			update: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			info: boolean;
			page: boolean;
			delete: boolean;
			list: boolean;
			update: boolean;
		};

		request: Service["request"];
	}

	interface GoodsCategory {
		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<GoodsCategoryEntity>;

		/**
		 * allLevel
		 */
		allLevel(data?: any): Promise<any>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsCategoryEntity[];
			[key: string]: any;
		}>;

		/**
		 * list
		 */
		list(data?: any): Promise<GoodsCategoryEntity[]>;

		/**
		 * data
		 */
		data(data?: any): Promise<any>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			add: string;
			update: string;
			info: string;
			allLevel: string;
			page: string;
			list: string;
			data: string;
			delete: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			add: boolean;
			update: boolean;
			info: boolean;
			allLevel: boolean;
			page: boolean;
			list: boolean;
			data: boolean;
			delete: boolean;
		};

		request: Service["request"];
	}

	interface GoodsInfo {
		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * info
		 */
		info(data?: any): Promise<GoodsInfoEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: GoodsInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<GoodsInfoEntity[]>;

		/**
		 * data
		 */
		data(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			page: string;
			add: string;
			list: string;
			data: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			page: boolean;
			add: boolean;
			list: boolean;
			data: boolean;
		};

		request: Service["request"];
	}

	interface TaskInfo {
		/**
		 * info
		 */
		info(data?: any): Promise<TaskInfoEntity>;

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
		 * log
		 */
		log(data?: any): Promise<any>;

		/**
		 * start
		 */
		start(data?: any): Promise<any>;

		/**
		 * update
		 */
		update(data?: any): Promise<any>;

		/**
		 * add
		 */
		add(data?: any): Promise<any>;

		/**
		 * once
		 */
		once(data?: any): Promise<any>;

		/**
		 * stop
		 */
		stop(data?: any): Promise<any>;

		/**
		 * 权限标识
		 */
		permission: {
			info: string;
			page: string;
			delete: string;
			log: string;
			start: string;
			update: string;
			add: string;
			once: string;
			stop: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			page: boolean;
			delete: boolean;
			log: boolean;
			start: boolean;
			update: boolean;
			add: boolean;
			once: boolean;
			stop: boolean;
		};

		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * info
		 */
		info(data?: any): Promise<UserInfoEntity>;

		/**
		 * page
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserInfoEntity[];
			[key: string]: any;
		}>;

		/**
		 * delete
		 */
		delete(data?: any): Promise<any>;

		/**
		 * list
		 */
		list(data?: any): Promise<UserInfoEntity[]>;

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
			info: string;
			page: string;
			delete: string;
			list: string;
			update: string;
			add: string;
		};

		/**
		 * 权限状态
		 */
		_permission: {
			info: boolean;
			page: boolean;
			delete: boolean;
			list: boolean;
			update: boolean;
			add: boolean;
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
				param: BaseSysParam;
				user: BaseSysUser;
				department: BaseSysDepartment;
				log: BaseSysLog;
				menu: BaseSysMenu;
				role: BaseSysRole;
			};
			comm: BaseComm;
			open: BaseOpen;
		};
		plugin: { info: PluginInfo };
		recycle: { data: RecycleData };
		space: { info: SpaceInfo; type: SpaceType };
		dict: { type: DictType; info: DictInfo };
		goods: { field: GoodsField; spec: GoodsSpec; category: GoodsCategory; info: GoodsInfo };
		task: { info: TaskInfo };
		user: { info: UserInfo };
		chat: { message: ChatMessage; session: ChatSession };
	};
}
