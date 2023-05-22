//function yout(){
//    fetch("https://youtube138.p.rapidapi.com/video/comments/?id=urZ0shWe7is&hl=en&gl=US")
//    .then(datos => datos.json())
//    .then(data =>{
//        console.log(data);
//})}
//yout()}

let id="";
async function video(){

	const url = `https://youtube138.p.rapidapi.com/search/?q=${busca.value}&hl=en&gl=US`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2791634466msh68bd6379ab5dfdap1cb8bbjsnc5d9de46ed9e',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	console.log(result.contents[0].video.videoId);
	let idd=result.contents[0].video.videoId;
	console.log(idd);
	id=idd;
	document.getElementById("video").innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/watch?v=ixZ_3A5jzk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
	comentarios()
	console.log(id,"id");
} catch (error) {
	console.error(error);
}


}



async function comentarios(){
	document.getElementById("comentarios").innerHTML="";
	const urlc = `https://youtube138.p.rapidapi.com/video/comments/?id=${id}&hl=en&gl=US`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2791634466msh68bd6379ab5dfdap1cb8bbjsnc5d9de46ed9e',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
	try {
		console.log(id,"sip");
		const response = await fetch(urlc, options);
		console.log(urlc),"l";
	const result = await response.json();
	console.log(result,);
	//console.log(result.comments[1].author,"A");
	//console.log(result.comments[0].author.avatar[0].url);
    //console.log(result.comments[0].content ,"A"); 
    for(let i=0; i< result.comments.length; i++){
    document.getElementById("comentarios").innerHTML+=`<div class="">
	<div id="coment">
	<div class="row">
	<div class="col-1"><img src="${result.comments[i].author.avatar[0].url}" alt=""></div>
	<div class="col"><h5>${result.comments[i].author.title}</h5></div>
	
	
	</div>
	
	
	${result.comments[i].content}</div>`
	}
} catch (error) {
	console.error(error);
	}
}






let busca= document.getElementById("buscador");
let boton= document.getElementById("btnGroupAddon2");

 boton.addEventListener("click",(e)=>{
 	video()
 	comentarios()
 	console.log(busca.value);
 })




