
export function LinkMenuItem( url, text ){
    
    const $link = document.createElement('a');
    $link.classList.add('menu-link');
    $link.href = url;
    $link.innerHTML = text;
    
    return $link;
}