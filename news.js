$(document).ready(function(){
	$.getJSON( 'https://newsapi.org/v1/articles?source=[WEBSITE]&apiKey=[YOUR_API_KEY]', function(data){

		$.each(data.articles, function(i, articles){
			$('.news').append(
				"<div style='display:none; position:absolute; top:0; left:0' class='articolo'>"+
				"<img src='"+articles.urlToImage+"' style='width: 40vw'>"+
				"<div id='titolo'>"+articles.title+"<br></div>"+
				"<div id='autore'>"+articles.author+"<br></div>"+
				"<div id='testo'>"+articles.description+"<br></div></div>"
			);
		});

		$('.news .articolo').first().addClass('active').fadeToggle();
		
		setInterval(function(){
			var attivo = $('.news .articolo.active');
			attivo.removeClass('active').fadeToggle();
			if(attivo.is(':last-child')){
				$('.news .articolo').first().addClass('active').fadeToggle();
			}
			else{
				attivo.next().addClass('active').fadeToggle();
			}
		}, 10000);
	});
});
