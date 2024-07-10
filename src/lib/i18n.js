import { register, init } from 'svelte-i18n';
import { browser } from '$app/environment';

const defaultLocale = 'en';
register('en-US', () => import('../translations/en.json'));
register('es', () => import('../translations/es.json'));
register('kr', () => import('../translations/kr.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
});
