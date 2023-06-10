import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      runtime: "nodejs18.x",
      pages: "build",
      assets: "build",
      fallback: null,
    }),
  },
};

export default config;
