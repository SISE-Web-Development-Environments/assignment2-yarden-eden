var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;

/**monsters position**/
var monster1;
var monster2;
var monster3;
var monster4;

var intervalMonster1;
var intervalMonster2;
var intervalMonster3;
var intervalMonster4;

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
	[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
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
	var numberOfMonsters = document.getElementById("numberOfMonsters").value;

	/**set monsters**/
	monster1 = {x: 1, y: 1};
	board[1][1] = 3;
	if(numberOfMonsters>=2){
		monster2 = {x: 28, y: 28};
		board[28][28] = 3;
	}
	if(numberOfMonsters>=3){
		monster3 = {x: 1, y: 28};
		board[1][28] = 3;
	}
	if(numberOfMonsters==4){
		monster4 = {x: 28, y: 1};
		board[28][1] = 3;
	}


	for (var i = 0; i <30; i++) {
		// board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 30; j++) {
	
			if(board[i][j]==4 || board[i][j]==3){//do nothing - monster/wall

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
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 250);
	/**create monsters interval according their number**/
	setMonstersInterval();
	
}


function setMonstersInterval(){
	intervalMonster1 = setInterval(UpdateMonsterPosition,2250);

	// if(numberOfMonsters>=2){
	// 	intervalMonster2 = setInterval(UpdateMonsterPosition,250);
	// }

	// if(numberOfMonsters>=3){
	// 	intervalMonster3 = setInterval(UpdateMonsterPosition,250);
	// }

	// if(numberOfMonsters==4){
	// 	intervalMonster4 = setInterval(UpdateMonsterPosition,250);
	// }
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
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
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
				context.arc(centerX, centerY, 9, 0.15 * Math.PI, 1.95 * Math.PI); // half circle
				context.lineTo(centerX, centerY);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(centerX+ 1, centerY-6, 1.5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else//monster
			if(monster1.x == i && monster1.y == j){
				var image = document.getElementById("monster-img");
				context.drawImage(image,start.x, start.y,cellWidth,cellHeight)
			}
			// if (board[i][j] == 3) {
			// 	var image = document.getElementById("monster-img");
			// 	context.drawImage(image,start.x, start.y,cellWidth,cellHeight);
			// } else
			/*Balls*/
			 if (board[i][j] == 5) {
				context.beginPath();
				context.arc(centerX, centerY, 7.5, 0, 2 * Math.PI); // circle
				context.fillStyle =document.getElementById("colorpadfirst").value;
				context.fill();
			 }
			 if (board[i][j] == 15) {
				context.beginPath();
				context.arc(centerX, centerY, 7.5, 0, 2 * Math.PI); // circle
				context.fillStyle =document.getElementById("colorpadsecond").value;
				context.fill();
			 }
			 if (board[i][j] == 25) {
				context.beginPath();
				context.arc(centerX, centerY, 7.5, 0, 2 * Math.PI); // circle
				context.fillStyle =document.getElementById("colorpadfirstthird").value;
				context.fill();
				
			 }
				/*Walls*/
			 else
			 if (board[i][j] == 4) {
				context.beginPath();
				context.rect(start.x, start.y,cellWidth,cellHeight);
				context.fillStyle = "blue"; //color
				context.fill();
			}
	
		}
	}
}

function bestMove(monster){
	let up;
	let down;
	let left;
	let right;

	//up
	if(board[(monster.y-1)][monster.x]!=4){
		var deltaX = Math.abs((monster.x)-shape.i);
  		var deltaY = Math.abs((monster.y-1)-shape.j);
  		up = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}
	else{
		//wall
		up = Infinity;
	}

	//down
	if(board[monster.y+1][monster.x]!=4){
		var deltaX = Math.abs(monster.x-shape.i);
  		var deltaY = Math.abs((monster.y+1)-shape.j);
  		down = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}
	else{
		//wall
		down = Infinity;
	}

	//left
	if(board[monster.y][monster.x-1]!=4){
		var deltaX = Math.abs((monster.x-1)-shape.i);
  		var deltaY = Math.abs(monster.y-shape.j);
  		left = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}
	else{
		//wall
		left = Infinity;
	}

	//right
	if( board[monster.y][monster.x+1]!=4){
		var deltaX = Math.abs((monster.x+1)-shape.i);
  		var deltaY = Math.abs(monster.y-shape.j);
  		right = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	}
	else{
		//wall
		right = Infinity;
	}

	/**find the minimun dist**/
	var minDist = Math.min(up,down,left,right);
	if(minDist==up){
		return [monster.x,monster.y-1];
		// monster.x = monster.x;
		// monster.y = monster.y--;
	}
	else{
		if(minDist==down){
			return [monster.x,monster.y+1];
			// monster.x = monster.x;
			// monster.y = monster.y++;
		}
		else{
			if(minDist==left){
				return [monster.x-1,monster.y];
				// monster.x = monster.x--;
				// monster.y = monster.y;
			}
			else{
				if(minDist==right){
					return [monster.x+1,monster.y];
					// monster.x = monster.x++;
					// monster.y = monster.y;
				}
			}
		}
	}

}

function UpdateMonsterPosition(){
	//what happend after doing the move ?

	//
	// let move = bestMove(monster1);

	// monster1.x = move[0];
	// monster1.y = move[1];

	// board[monster1.x, monster1.y] = 3;
	// Draw();
}

/**pacman**/
function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score++;
	}


	board[shape.i][shape.j] = 2;



	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;

	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}
}



