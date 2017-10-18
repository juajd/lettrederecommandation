new p5;
var myarray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "]
var mytext = "yoo";
var count = 0;
var yo = 0;
var numberoftrials = 20;
var allmytests1 = [];
var subarray = [];
var test;
var score;
var rand = 0;
function setup(){
	print(mytext.length);
	print("chances of getting it randomly");
	print(pow(myarray.length,mytext.length));

	for(var x = 0; x<numberoftrials;x++){
		test = "";
		score = 0;
		for(var i = 0;i<mytext.length;i++){
			var a = getrands(0,myarray.length);
			test += myarray[a];
			if(myarray[a]==mytext[a]){
				score += 1;
			}
		}
		subarray[0] = test;
		subarray[1] = score;
		allmytests1[x] = subarray;
	}
	allmytests1.sort(function(a, b){return a[1] - b[1]});
	for(var x = 0; x<numberoftrials;x++){
		print(allmytests1[x][1]);
	}
}
function draw(){
	createsuccessors();
}
function getrands(a,b){
	return int(random(a,b));
}
function createsuccessors(){
	for(var x = 0; x<numberoftrials;x++){
		var f = int(random(0,5));
		if(f == 0){
		}
	}
}