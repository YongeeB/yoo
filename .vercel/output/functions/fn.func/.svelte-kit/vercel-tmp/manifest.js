export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["camera.jpg","favicon.png","painting.jpg","tie-dye.jpg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.18dafc3f.js","app":"_app/immutable/entry/app.327f4abd.js","imports":["_app/immutable/entry/start.18dafc3f.js","_app/immutable/chunks/index.2b6a9462.js","_app/immutable/chunks/singletons.25410d4d.js","_app/immutable/entry/app.327f4abd.js","_app/immutable/chunks/index.2b6a9462.js"],"stylesheets":[],"fonts":[]},
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
