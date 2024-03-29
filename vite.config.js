import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use '$lib/scss/variables'
					@use '$lib/scss/mixins'
				`
			}
		}
	},
	plugins: [sveltekit()],
	server: {
		watch: {
			useFsEvents: false
		}
	}
});
