import wpApi from '../helpers/wp_api.js';

export function Title(){
    const $h1 = document.createElement('h1');
    $h1.innerHTML = `
        <a href="${wpApi.DOMAIN}" target="_blank" rel="noopener">
            ${wpApi.NAME}
        </a>
    `;
    return $h1;
}