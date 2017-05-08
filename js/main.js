let howmanyBeans = 6;
let howmayCows = 2;

//$(this).hide() - hides the current element.

//$("p").hide() - hides all <p> elements.

//$(".test").hide() - hides all elements with class="test".

//$("#test").hide() - hides the element with id="test".

$("#resultBtn").click( () => {
	console.log("clicked on result btn");
	resultFunction(howmanyBeans, howmayCows);
});

function resultFunction(a,b){
	//let ??
	let result = a*b;
	$("#result-1").html(result);
}

$("#scaryBtn").click(() => {
	$("dd").toggle();
	console.log("ishidden", $("dd").is(":hidden"));
	$("dd").is(":hidden") ? $("#scaryBtn").html("Show") : $("#scaryBtn").html("Too Scary");
});

let storyItems = $(".story");
//this is a class so it returns an array

for(let i=0; i < storyItems.length; i++){
	storyItems[i].onmouseover = over;
	storyItems[i].onmouseout = out;
}

//this means the particular storyItem that got rolled over
function over(){
	this.style.backgroundColor = "#cc0000";
}

function out(){
	this.style.backgroundColor = "#ffffff";
}

//since we are using jquery, we can use actual array methods on it...
//this is jquery...

$(".inner").append(`, <strong>Chief</strong>`);
//append is jquery


$("#holiday").click(() => {
	doSomething($("#holiday"));
});

function doSomething(obj){
	console.log("obj", obj, event);
	event.target.style.backgroundColor = "orange";
}





