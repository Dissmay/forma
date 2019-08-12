
$(function(){


var min = $('.button__minus');
var max = $('.button__plus');
	
var counterPlace = $('.counter-place');
var counter = 0;

max.on('click', function(e){
	var target = $(e.target);
	var inputValue = +target.prev().attr('value');	

	inputValue += 1;	
	target.prev().attr('value', inputValue);
	if(inputValue){
		counter++;
		counterPlace.text(counter);
	};
	
});

min.on('click', function(e){
	var target = $(e.target);
	var inputValue = +target.next().attr('value');	
	inputValue -= 1;
	if(inputValue < 0) inputValue = 0;
	target.next().attr('value', inputValue);
	if(inputValue){
		
		counter--;
		counterPlace.text(counter);
	}else if(counter == 0 && inputValue == 0){
			
	}else{
			counter --;
			counterPlace.text(counter);
		
	}

	
	
});


	







});