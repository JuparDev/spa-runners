
export function Header(){
    const $nav = document.createElement( 'nav' );
    $nav.classList.add( 'navbar' );
    $nav.classList.add( 'navbar-light' );
    $nav.classList.add( 'navbar-appbar' );
    
     
    
    const $link = document.createElement( 'a' );
    $link.href = '#';
    $link.classList.add( 'navbar-brand' );
    
    const $logo = document.createElement( 'img' );
    
    $logo.src = './app/assets/logo.png';
    $logo.classList.add( 'd-inline-block' );
    $logo.classList.add( 'align-top' );
    $logo.classList.add( 'logo-navbar' );
    
    $link.appendChild( $logo );
    
    const $btn = document.createElement( 'button' );
    $btn.classList.add( 'btn' );
    $btn.classList.add( 'my-2' );
    $btn.classList.add( 'my-sm-0' );
    $btn.classList.add( 'btn-burger-menu' );
    $btn.type = 'button';
    
    $btn.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    
    
    $nav.appendChild( $link );
    $nav.appendChild( $btn );
    
    return $nav;
    
}
