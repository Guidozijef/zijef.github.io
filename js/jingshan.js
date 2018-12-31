$(function() {
	$.ajax({
		type: 'get',
		url: 'http://open.iciba.com/dsapi/',
		async: true,
		dataType: 'jsonp',
		jsonpCallback: 'info',
		success: function info(response) {
			// console.log(response);
			document.getElementById('jingshan-img').src = response.picture2;
			// $('.jingshan .jingshan-img img').attr({ src: response.picture2 });
			$('.jingshan-content p').html(response.content);
			$('.jingshan-content span').html(response.note);
		}
	});
});
