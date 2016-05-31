
function amLastrun(){
	$.getJSON("returned_data/AM-details.json", function(data){
		$('#am-lastrun').append(data[0]);	
		$('#current-url').append(data[1]);	
	});
};

amLastrun();




function pmLastrun(){
	$.getJSON("returned_data/PM-details.json", function(data){
		$('#pm-lastrun').append(data[0]);		
	});
};

pmLastrun();




function amHeadlines(){
	$.getJSON("returned_data/AM-headlines.json", function(data){

		$.each(data, function(key, value){
			$('.am-headlines ul').append('<li>' + value + '</li>');

		});

	});
		
}
amHeadlines();


function pmHeadlines(){
	$.getJSON("returned_data/PM-headlines.json", function(data){

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


	}
		