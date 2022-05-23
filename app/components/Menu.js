import {SearchForm} from './SearchForm.js';
import wpApi from '../helpers/wp_api.js';
import {MenuItem} from './MenuItem.js';
import {LinkMenuItem} from './LinkMenuItem.js';

export function Menu(){
   
    const $list = document.createElement('ul');
    $list.classList.add( 'menu-list' );
    $list.classList.add( 'none' );
    
    $list.appendChild( MenuItem( SearchForm() ) );
    $list.appendChild( 
        MenuItem( 
            LinkMenuItem( wpApi.DOMAIN , 'Soy Maratonista' ) 
        ) 
    );
    
    $list.appendChild( 
        MenuItem( 
            LinkMenuItem( './blog' , 'Blog' ) 
        ) 
    );
    
    $list.appendChild( 
        MenuItem( 
            LinkMenuItem( './progresos' , 'progresos' ) 
        ) 
    );
    
    $list.appendChild( 
        MenuItem( 
            LinkMenuItem( './tienda' , 'Tienda' ) 
        ) 
    );
    
    
    return $list;
}