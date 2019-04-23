

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
    !res.lastVisit ? document.cookie = `lastVisit=${new Date().toLocaleString()}` 
                : document.querySelector(".result3").appendChild(
            document.createElement('p')).innerText = `Last visit was : ${res.lastVisit}` 
       
}
function exercise1 (event) {
	addToCookie()		
}




function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
