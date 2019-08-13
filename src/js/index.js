$(function(){

var btns = $('.button');

 

var counterPlace = $('.counter-place');
var quantityPlace = $('.counter-place__quantity');

function computeTotal(){
	var totalCounter = 0;
	var totalQuantity = 0;
	for( var i = 0; i < rows.length; i++ ){
		var current = $(rows[i]);
		var price = parseFloat( current.find('.form__money').text() );
		var count = parseFloat( current.find('.input').attr('value') );
		totalCounter += price * count;
		totalQuantity += count;
	}

	counterPlace.text( totalCounter );
	quantityPlace.text( totalQuantity );
}

computeTotal();

btns.on('click', function(e){
	var target = $( e.target );
	var typeOfButton = ( target.hasClass('button__plus') ) ? '+' : '-' ;

	var input = target.parents('.form__size').find('.input');
	var inputValue = +input.attr('value');
	if( typeOfButton === '+' ){
		inputValue += 1;
	} else {
		inputValue -= 1;
		inputValue = ( inputValue < 0 ) ? 0 : inputValue;
	}
	input.attr('value', inputValue);

	computeTotal();

});




	


$.ajax({
    type: "POST",
    url: "http://1512526.dissmay.web.hosting-test.net/decorazz/func.php",
    data: JSON.stringify( $('.form').serializeArray() ),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(response){console.log(response);},
    error: function(errMsg) {
        console.log(errMsg);
    }
});


});