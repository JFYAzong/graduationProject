export const proxy = {
	"/dev": {
		target: "http://127.0.0.1:8000",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, "")
	},

	// todo
	"/prod": {
		target: "http://127.0.0.1:8000",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "/api")
	}
};
