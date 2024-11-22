import { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
	return {
		components: Object.values(import.meta.glob("./components/*.{vue,tsx}"))
	};
};
