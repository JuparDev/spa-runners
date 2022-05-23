
export function SearchForm(){
    
    const $form = document.createElement('form');
    $form.classList.add( 'form-inline' );
    $form.id = 'search-form';
    
    const $imputSearch = document.createElement('input');
    $imputSearch.classList.add( 'form-control' );
    $imputSearch.classList.add( 'mr-sm-2' );
    $imputSearch.placeholder = 'Search..';
    $imputSearch.type = 'search';
    $imputSearch.name = 'search';
    
    
    const $btnSearch = document.createElement('button');
    $btnSearch.classList.add( 'color-white' );
    $btnSearch.classList.add( 'btn' );
    $btnSearch.classList.add( 'btn-outline-white' );
    $btnSearch.classList.add( 'my-2' );
    $btnSearch.classList.add( 'my-sm-0' );
    $btnSearch.type = 'submit';
    $btnSearch.innerHTML = '<i class="fa fa-search"></i>';

    
    $form.appendChild( $imputSearch );
    $form.appendChild( $btnSearch );
    
    return $form;
    
}