
export function MenuItem( $item ){
    
    const $li = document.createElement('li');
    $li.classList.add( 'menu-item' );
    
    $li.appendChild( $item );
    
    return $li;
}