export function ajax( props ){

	let { url, callBackSuccess } = props;

	fetch( url )
	.then( res => res.ok ? res.json() : Promise.reject( res ) )
	.then( json => callBackSuccess( json ) )
	.catch( err => {
		console.log( err );
		const message = err.statusText || 'Ah Ocurrido un Error al Solicitar los Datos';
		document.getElementById('root').innerHTML = `
		<div class="alert alert-danger" role="alert">
		  <b>Error ${err.status}:</b> ${message}
		</div>
	`;
	});

}