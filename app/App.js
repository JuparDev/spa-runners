import wpApi from './helpers/wp_api.js';
import {ajax} from './helpers/ajax.js';
import {LoadPage} from './components/LoadPage.js';

import {Header} from './components/Header.js';
import {Menu} from './components/Menu.js';


export function App(){
    
	const $root = document.getElementById('root');
    
    // Load Page
    // $root.appendChild(LoadPage());
    
    
    $root.appendChild( Header() );
    $root.appendChild( Menu() );
    
    
    
    
}
