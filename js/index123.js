function exercise3 (event) {
	
	var addElem = (tagName, container) => document.querySelector(container).appendChild (
		document.createElement ( tagName )
	)

	var timeOut = time => new Promise (
		resolve => setTimeout ( () => resolve(), time )
	)


	var startButton = addElem ( 'button', ".result3" )
	startButton.className = "btn"
	startButton.innerText = 'Крутить рулетку'



	startButton.onclick = event => {
		var winner = Math.round ( Math.random() * 20000 )
		event.target.style.display = "none"
		var user
		function show( photoURL, login ) {
			img.src = photoURL
			user = addElem ( "h4", ".result3" )
			user.innerText = `winner: ${login}`
		}
		var img = addElem( "img", ".result3" )
		img.height = "200"
		img.src = "https://thumbs.gfycat.com/LivelyObviousAnhinga-size_restricted.gif"
		img.style.transition = "all 0.5s"
		timeOut ( 4000 )
			.then ( () => img.src = "https://thumbs.gfycat.com/OddWideHookersealion-small.gif" )
		timeOut ( 3500 )
			.then ( () => img.style.opacity = 0 ) 
		timeOut ( 4500 )
			.then ( () => img.style.opacity = 1 )
		timeOut ( 5500 )
			.then (
				() => {
					let exit = true;
					( function getAvatar () {
						fetch (`https://api.github.com/users/${winner}`)
						.then (
							response => response.status === 200 ? response.json ()
							.then ( user => document.querySelector(".result3").appendChild (
								document.createElement ('img').className = "user"
								).src = user.avatar_url,
							error => exit = false
							) : null

							)
						exit ? null : getAvatar ()
					}
					)() 
				}
			)

		timeOut ( 10000 )
		.then ( () => {
			img ? img.remove() : null
			user ? user.remove() : null
			event.target.style.display = "block"
		})
	}



}


function showCode(param1, param2){
	document.querySelector(param2).innerHTML = param1.toLocaleString()
}