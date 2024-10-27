import { createPinia } from 'pinia';
import { type App } from 'vue';
import { createModule } from './module';
import { router } from '../router';
import { Loading } from '../utils';
import { createEps } from './eps';
import 'virtual:svg-register';
import linkCardModule from '@wangeditor/plugin-link-card';
import { Boot } from '@wangeditor/editor';

export async function bootstrap(app: App) {


	//注册编辑器插件
	Boot.registerModule(linkCardModule);

	// pinia
	app.use(createPinia());

	// 路由
	app.use(router);

	// 模块
	const { eventLoop, list } = createModule(app);

	// eps
	createEps(list);

	// 加载
	Loading.set([eventLoop()]);
}
