
var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var leftCode;
var rightCode;
var upCode;
var downCode;

var firstAngle=0.15;
var secondAngle=1.95;




// $(document).ready(function() {
// 	document.getElementById("start").addEventListener("click", setUpSetting);  
// 	document.getElementById("random").addEventListener("click", setUpSetting);   
 
// 	context = canvas.getContext("2d");
// 	Start();
// });

function readyToGame(){
	// document.getElementById("start").addEventListener("click", setUpSetting);  
	// document.getElementById("random").addEventListener("click", setUpSetting);   
	setUpSetting();
	context = canvas.getContext("2d");
	Start();
}
function setUpSetting(){
	document.getElementById("lblUserName").value = currentLoginUser;//write the current userName
	
	document.getElementById("left-arrow").innerText=": "+leftChoose;
	
	document.getElementById("right-arrow").innerText=": "+rightChoose;
	document.getElementById("up-arrow").innerText=": "+upChoose;
	document.getElementById("down-arrow").innerText=": "+downChoose;
	document.getElementById("monster-setting").innerText=document.getElementById("numberOfMonsters").value;
	document.getElementById("firstPoint").style.color=document.getElementById("colorpadfirst").value;

	document.getElementById("secondPoint").style.color=document.getElementById("colorpadsecond").value;
	document.getElementById("thirdPoint").style.color=document.getElementById("colorpadfirstthird").value;
	document.getElementById("totalTime").innerText=document.getElementById("choosenGameTime").value;
	document.getElementById("totalBalls").innerText=document.getElementById("numberOfBalls").value;

}
function Start() {
	board = new Array();

		
 board = [
	[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
	[4, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
	[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4],
	[4, 0, 4, 4, 0, 4, 0, 4, 0, 0, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 0, 0, 0, 4],
	[4, 0, 4, 0, 0, 4, 0, 4, 0, 0, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
	[4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
	[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
	[4, 0, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 0, 4],
	[4, 0, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 0, 4],
	[4, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4],
	[4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
	[4, 0, 4, 0, 0, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 0, 4, 4, 0, 4],
	[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4],
	[4, 4, 4, 4, 0, 0, 0, 4, 4, 0, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4],
	[4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 4, 4, 0, 4],
	[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 0, 0, 0, 0, 4],
	[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4],
	[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4],
	[4, 0, 4, 4, 0, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 0, 4, 4, 4, 4],
	[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
	[4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4],
	[4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4],
	[4, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4],
	[4, 0, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4],
	[4, 0, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4, 4],
	[4, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 4],
	[4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4],
	[4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4, 4, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 4],
	[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
	[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
];


	score = 0;
	pac_color = "yellow";
	var cnt = 312;
	var food_remain = document.getElementById("numberOfBalls").value;
	var pacman_remain = 1;
	start_time = new Date();
	for (var i = 0; i <30; i++) {
		// board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 30; j++) {
	
			if(board[i][j]==4||board[i][j]==7){

			}
			else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					let rand=Math.random();
					if(rand>=0.9){//25 point
						board[i][j]=25;
					}
					if(rand<0.9&&rand>=0.6){//15 point
						board[i][j]=15;
					}
					if(rand>=0&&rand<0.6){//5 point
						board[i][j]=5;
					}
					food_remain--;
				
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					shape.i = i;
					shape.j = j;

					pacman_remain--;
					board[i][j] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}
		}
	}
	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1;
		food_remain--;
	}
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			let left=leftChoose;
			let right=rightChoose;
			let up=upChoose;
			let down=downChoose;
			let code= e.code
			if(e.code==leftChoose||e.code==rightChoose||e.code==downChoose||e.code==upChoose){
				keysDown[e.code] = true;
			}
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			if(e.code==leftChoose||e.code==rightChoose||e.code==downChoose||e.code==upChoose){
				keysDown[e.code] = false;
			}
		},
		false
	);

	window.addEventListener("keydown", function(e) {
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
	}, false);
	interval = setInterval(UpdatePosition, 250);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 29 + 1);
	var j = Math.floor(Math.random() * 29 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 29 + 1);
		j = Math.floor(Math.random() * 29 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {

	if (keysDown[upChoose]) {
		return 1;
	}
	if (keysDown[downChoose]) {
		return 2;
	}
	if (keysDown[leftChoose]) {
		return 3;
	}
	if (keysDown[rightChoose]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	var cellHeight=canvas.height/30;
	var cellWidth=canvas.width/30;
	for (var i = 0; i < 30; i++) {
		for (var j = 0; j <30; j++) {
			var start = new Object();
			start.x = i *cellWidth;
			start.y = j *cellHeight;
			let centerX=i *cellWidth+0.5*cellWidth;
			let centerY=j *cellHeight+0.5*cellHeight;
			
			
			/*PACMAN */
			if (board[i][j] == 2) {
				context.beginPath();
				// context.arc(centerY, centerX, 9, 0.15 * Math.PI, 1.95 * Math.PI); // half circle
				context.arc(centerX, centerY, 12,firstAngle* Math.PI,secondAngle * Math.PI); // half circle
				context.lineTo(centerX, centerY);
				context.fillStyle = pac_color; //color
				context.fill();

				context.arc(centerX, centerY, 12,firstAngle* Math.PI,secondAngle * Math.PI); // half circle
				context.lineWidth =1;
				context.strokeStyle = "black";
				context.stroke();

				context.beginPath();
				if(firstAngle==1.6){//up
					context.arc(centerX-7, centerY-6, 1.5, 0, 2 * Math.PI); // circle

				}
				else{
					if(firstAngle==0.7){//down
						context.arc(centerX+ 4, centerY-2, 1.5, 0, 2 * Math.PI); // circle

					}
					else{
						context.arc(centerX+ 1, centerY-6, 1.5, 0, 2 * Math.PI); // circle
					}
				}

				context.fillStyle = "black"; //color
				context.fill();
				
			} else
			/*Balls*/
			 if (board[i][j] == 5) {
				context.beginPath();
				context.arc(centerX, centerY,5, 0, 2 * Math.PI); // circle
				context.fillStyle =document.getElementById("colorpadfirst").value;
				context.fill();	
				
				context.font= "bold 10px Ariel";
				context.fillStyle =invertColor(document.getElementById("colorpadfirstthird").value);
				context.fillText('5',centerX-2,centerY +3);
				

			 }
			 if (board[i][j] == 15) {
				context.beginPath();
				context.arc(centerX, centerY, 9, 0, 2 * Math.PI); // circle
				context.fillStyle =document.getElementById("colorpadsecond").value;
				context.fill();



				context.font= "bold 12px Ariel";
				context.fillStyle =invertColor(document.getElementById("colorpadfirstthird").value);
				context.fillText('15',centerX-7,centerY +4);
			 }
			 if (board[i][j] == 25) {
				context.beginPath();
				context.arc(centerX, centerY,12, 0, 2 * Math.PI); // circle
				context.fillStyle =document.getElementById("colorpadfirstthird").value;
				context.fill();
				
				let negativeColor=invertColor(document.getElementById("colorpadfirstthird").value);
				context.arc(centerX, centerY, 12, 0, 2 * Math.PI);
				context.lineWidth = 2;
				context.strokeStyle = "red";
				context.stroke();

				context.font= "bold 15px Lucida Console";
				context.fillStyle =negativeColor
				context.fillText('25',centerX-10,centerY +5);
				
			 }
				/*Walls*/
			 else
			 if (board[i][j] == 4) {
				context.beginPath();
				context.rect(start.x, start.y,cellWidth,cellHeight);
				context.fillStyle = "#8FBC8F"; //color
				context.fill();
				context.lineWidth = 1;
				context.strokeStyle = "#696969";
				context.strokeRect(start.x, start.y,cellWidth,cellHeight);
				
				
			}
			if(i==1&&j==1){
			if (board[i][j] == 7) {
				context.beginPath();
				// context.rect(start.x, start.y,cellWidth,cellHeight);
				
				img=new Image();
				img.src="images/images-removebg-preview.png";
				context.beginPath();
				context.drawImage(img, start.x, start.y,cellWidth*1.2,cellHeight*1.2);
				
			
				
				
			}
		}
	
		}
	}

	

		

}

function UpdatePosition() {
	let lasti=shape.i;
	let lastj=shape.j;
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {//up
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
			firstAngle=1.6;
			secondAngle=3.35;
		}
	}
	if (x == 2) {//down
		if (shape.j < 29 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
			firstAngle=0.7;
			secondAngle=2.3;
		}
	}
	if (x == 3) {//left
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
			firstAngle=1.1;
			secondAngle=2.9;
		}
	}
	if (x == 4) {//right
		if (shape.i < 29 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
			firstAngle=0.15;
			secondAngle=1.85;
		}
	}
	let newi=shape.i;
	let newj=shape.j;
	
	//lblScore
	
	if (board[shape.i][shape.j] == 5) {
		score=score+5;
	}
	if (board[shape.i][shape.j] == 15) {
		score=score+15;
	}
	if (board[shape.i][shape.j] == 25) {
		score=score+25;
	}
	document.getElementById("lblScore").value=score;
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	// if (score >= 20 && time_elapsed <= 10) {
	// 	pac_color = "green";
	// }
	// if (score == 50) {
	// 	window.clearInterval(interval);
	// 	window.alert("Game completed");
	// } else {
		Draw();

	// }
}

function startNewGame(){
	setUpSetting();
	//init timer
	start();
}

// function invertColor(hex) {
//     if (hex.indexOf('#') === 0) {
//         hex = hex.slice(1);
//     }
//     // convert 3-digit hex to 6-digits.
//     if (hex.length === 3) {
//         hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
//     }
//     if (hex.length !== 6) {
//         throw new Error('Invalid HEX color.');
//     }
//     // invert color components
//     var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
//         g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
//         b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
//     // pad each with zeros and return
//     return '#' + padZero(r) + padZero(g) + padZero(b);
// }

// function padZero(str, len) {
//     len = len || 2;
//     var zeros = new Array(len).join('0');
//     return (zeros + str).slice(-len);
// }

function invertColor(hexTripletColor) {
	var color = hexTripletColor;
	color = color.substring(1); // remove #
	color = parseInt(color, 16); // convert to integer
	color = 0xFFFFFF ^ color; // invert three bytes
	color = color.toString(16); // convert to hex
	color = ("000000" + color).slice(-6); // pad with leading zeros
	color = "#" + color; // prepend #
	return color;
}
$(".demo").each(function() {
	var c1 = randomColor();
	var c2 = invertColor(c1);
	$(this).text(c1 + " " + c2).css({
		"color": c1,
		"background-color": c2
	});
});