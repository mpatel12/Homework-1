var favjobs=[];


function jobfunt() { 

var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupY = ['farmers', 'astronauts', 'children', 'programmers', 'students', 'dogs', 'teachers'];



var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));





	document.getElementById('jobs1').value = startupX[random1];
	document.getElementById('jobs2').value = startupY[random2];


//	console.log('cloick');
}



function fav() {

	var liked = document.getElementById('jobs1').value + ', ' + document.getElementById('jobs2').value
	favjobs.push(liked);
	
	//console.log(favjobs);

}


function show(){

	$("#list").empty();

 for (index = 0; index < favjobs.length; index++)
        {
            $("#list").append("<li>"  + favjobs[index] + "</li>");
        }
   $("#list").show('slow');
    

// console.log(favjobs);
}

// console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);
