export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["camera.jpg","favicon.png","painting.jpg","tie-dye.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c6fcb0f3.js","app":"_app/immutable/entry/app.bf77b68e.js","imports":["_app/immutable/entry/start.c6fcb0f3.js","_app/immutable/chunks/index.2b6a9462.js","_app/immutable/chunks/singletons.e8594c02.js","_app/immutable/entry/app.bf77b68e.js","_app/immutable/chunks/index.2b6a9462.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
