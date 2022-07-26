

let boxs = [
	"Discussion about transportation",
	"Something about COVID testing",
	"Masking will stop soon! -Selmer",
	"People are not turing machines!",
	"Anything about Hyperslate",
	"Presentation is done in Keynote",
	"Crippling AV issues",
	"\"Is he actually a PhD student?\"",
	"*Silence* -Aiden",
	"Something about bibliography -Selmer",
	"Selmer mentions Naveen in positive light",
	"James says he stayed up all night",
	"Brandon mentions IBM",
	"James complains that something isn't real",
	"*Fakes demo*",
	"Someone writes a 5 line algorithm",
	"Selmer raises Eyebrows",
	"NATURAL LANGUAGE -anyone",
	"The 4th floor is the best floor! -James",
	"Something about the Winslow AC system -James",
	"Brandon talks about his last job",
	"\"The Logic Reading Group is cancelled this week\"",
	"Brandon thows a party (only james attends)",
	"Selmer leaves email on read",
	"A Footnote takes up 1/4th of page",
	"OUR Closet is accessed",
	"McGuiness is hacking at life -James",
	"Anyone complains about connectionist systems",
	"Someone complains they want RA funding"
];

function set(e){
	e.className = e.className == "sel" ? "" : "sel";
}

String.prototype.hashCode = function(){
    if (Array.prototype.reduce){
        return this.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
    } 
    var hash = 0;
    if (this.length === 0) 
		return hash;
    for (var i = 0; i < this.length; i++) {
        var character  = this.charCodeAt(i);
        hash  = ((hash<<5)-hash)+character;
        hash = hash & hash; //Convert to 32bit integer
    }
    return hash;
}

function shuffle(a, seed){
	srand(seed);
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(rand() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

let internseed = 0;
function srand(x){
	internseed = new String(x).hashCode();
}

function rand(){
    let x = Math.sin(internseed++) * 10000;
    return x - Math.floor(x);
}

function genrand(){
	gencard(Math.random().toString(36).substring(2, 7));
}

function genseed(){
	gencard(document.getElementById("seedin").value);
}

function gencard(seed){
	let cboxs = boxs.slice();
	let str = "<caption> RAIR Lab Bingo </caption>";
	shuffle(cboxs, seed);
	for(let i = 0; i < 5; i++){
		str += "<tr>";
		for(let j = 0; j < 5; j++)
			str += "<td onclick='set(this)'><div class='ti'>" + (i==2 && j==2 ? "Free Space" : cboxs[j + 5 * i]) + "</div></td>";
		str += "</tr>";
	}
	let table = document.getElementById("main");
	table.innerHTML=str;
	let seedcap = document.getElementById("seed");
	seedcap.innerHTML=seed;
}

window.addEventListener('load', function (){
	genrand();
});
