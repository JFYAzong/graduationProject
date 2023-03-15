import { ModuleConfig } from "/@/cool";
import Crud from "@cool-vue/crud";
import "@cool-vue/crud/dist/index.css";

export default (): ModuleConfig => {
	return {
		options: {
			crud: {
				dict: {
					sort: {
						prop: "order",
						order: "sort"
					}
				}
			}
		},
		install: Crud.install
	};
};
