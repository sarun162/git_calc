function displayData(data){
    result.value+=data
}
function allclear(){
    result.value=""

}
function findout(){
    result.value=eval(result.value)
}

function backspace(){
    result.value=result.value.slice(0,-1)
}