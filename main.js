//function yout(){
//    fetch("https://youtube138.p.rapidapi.com/video/comments/?id=urZ0shWe7is&hl=en&gl=US")
//    .then(datos => datos.json())
//    .then(data =>{
//        console.log(data);
//})}
//yout()}

let id="";
let id1="";
let id2="";
let id3="";
async function video(){
	document.getElementById("relacion").innerHTML=""
	const url = `https://youtube138.p.rapidapi.com/search/?q=${busca.value}&hl=en&gl=US`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'de713c439cmshce3c9dbc4b6799ap1f2fc9jsn51c7a89e795b',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
	
	
	let idd=result.contents[0].video.videoId;
	console.log(idd);
	
	
	
	id=idd;
	comentarios()
	document.getElementById("video").innerHTML=`<iframe width="800" height="380" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br><br>
	<h2>${result.contents[0].video.title}</h2>`;
	document.getElementById("Descripcion").innerHTML=`<h4>${result.contents[0].video.descriptionSnippet}</h4>`
	document.getElementById("rel").innerHTML=`Videos relacionados`
	for(let i=0; i< 3; i++){
	let ide=result.contents[i].video.videoId;
	document.getElementById("relacion").innerHTML+=`
	
	<div class="col rl">
	<iframe width="200" height="100" src="https://www.youtube.com/embed/${ide}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	</div>
	`
}
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
		'X-RapidAPI-Key': 'de713c439cmshce3c9dbc4b6799ap1f2fc9jsn51c7a89e795b',
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




