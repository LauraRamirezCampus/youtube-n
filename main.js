//function yout(){
//    fetch("https://youtube138.p.rapidapi.com/video/comments/?id=urZ0shWe7is&hl=en&gl=US")
//    .then(datos => datos.json())
//    .then(data =>{
//        console.log(data);
//})}
//yout()}
async function comentarios(){
    const url = 'https://youtube138.p.rapidapi.com/video/comments/?id=urZ0shWe7is&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2daa10056fmsh994f9baf16fad70p1bd676jsn58ae54cabb15',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	//console.log(result);
	//console.log(result.comments[0].author);
    /* console.log(result.comments[0].content); */
    for(let i=0; i< result.comments.length; i++){
    document.getElementById("comentarios").innerHTML+=`<div class=""><div id="coment">${result.comments[i].content}</div>`
}
} catch (error) {
	console.error(error);
}
}
comentarios()


