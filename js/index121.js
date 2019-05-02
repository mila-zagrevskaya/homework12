function addToCookie(){
    var res = document.cookie
        .split ( "; " )
            .map ( x =>
                Object.assign (
                    {},
                    (
                        arr => {
                         return { [ arr [0] ] : arr [1] }
                        }
                    ) ( x.split ( "=" ))
                )
            )
                .find(
                    date => {
                        return date.lastVisit
                    }
                )
    res ? document.querySelector('.result1').appendChild(
            document.createElement('p')
            ).innerText = `Last visit was : ${res.lastVisit}` 
                : null
    document.cookie = `lastVisit=${new Date().toLocaleString()}`   
}



function exercise1 (event) {
	addToCookie()		
}




// function showCode(param1, param2){
//     document.querySelector(param2).innerHTML = param1.toLocaleString()
// }

