const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		let resultado = JSON.parse (this.response)
		console.log(this.responseText);
		document.getElementById ("%"). value = resultado. percentage
	}
	if(parseInt(resultado.percentage) < 20){
        document.getElementById("foto").src="./img/corazon partido.webp"
	}if(parseInt(resultado.percentage) = 50){
        document.getElementById("foto").src="./buenos amigos.webp"
	}
	if(parseInt(resultado.percentage) > 50){
        document.getElementById("foto").src="./img/kiss.png"
	}if(parseInt(resultado.percentage) > 75){
        document.getElementById("foto").src="./img/pareja.png"
	}
	if(parseInt(resultado.percentage) > 99){
        document.getElementById("foto").src="./img/anillo.png"
	}
});

document.getElementById ("buto").addEventListener ("click", function(){
	let n1 = document.getElementById("n1").value
	let n2 = document.getElementById("n2").value

xhr.open ('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname='+n1+'&fname='+n2);
xhr.setRequestHeader('x-rapidapi-key', '80b1e4a3ccmsh453e4715ff6cd07p1c9feejsn353da2a9907a');
xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');

xhr.send(data);
})