/*
	File: wp_admin.js
	function: Declara & Depura elementos auxiliares para ser usados en la aplicación.
*/

const NAME = 'soymaratonista';
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const POSTS = `${API_WP}/posts?_embed`;
const POST = `${API_WP}/posts`;
const SEARCH = `${API_WP}/search?_embed&search=`;
const CATEGORIES = `${API_WP}/categories`;

export default { NAME, DOMAIN, SITE, API_WP, POSTS, POST, SEARCH, CATEGORIES };

/*
	const PAGES = `${API_WP}/pages`;
	
*/
