
function amLastrun(){
	$.getJSON("returned_data/home/AM-details.json", function(data){
		$('#am-lastrun').append(data[0]);	
		$('#current-url').append(data[1]);	
	});
};

amLastrun();




function pmLastrun(){
	$.getJSON("returned_data/home/PM-details.json", function(data){

		$('#pm-lastrun').append(data[0]);		
	});
};

pmLastrun();




function amHeadlines(){
	$.getJSON("returned_data/home/AM-headlines.json", function(data){

		$.each(data, function(key, value){
			$('.am-headlines ul').append('<li>' + value + '</li>');

		});

	});
		
}
amHeadlines();


function pmHeadlines(){
	$.getJSON("returned_data/home/PM-headlines.json", function(data){

			//console.log(data);
			$.each(data, function(key, value){

				$('td.pm-headlines ul').append('<li>' + value + '</li>');
			});
		});
	}
	pmHeadlines();


	function headlineComparison(){
		// if am and pm headlines are the same
		//echo 'Looks like there weren't any story updates
		//expand to see list of headlines
		//else
		//'Looks like there were story updates'
		//expand to see list of headlines
		$('#status').append("This would be the status that shows if there's a diff.");

	}
	headlineComparison();

	function showContent(){
		var clickableArea = $('.header-wrap'); 
		$(clickableArea).each(function(index){
			console.log($(this));
			$(this).click(function(){

				$(this).next().toggleClass('show');
			});
			

		});
	}

	showContent();
		