import {Loader} from './Loader.js';

export function LoadPage(){
    const $loadPage = document.createElement('div');
    
    $loadPage.classList.add('load-page');
    
    $loadPage.appendChild( Loader() );
    
    return $loadPage;
}