simply.fullscreen(true);
simply.style('mono');
simply.text({}, true);

simply.on('singleClick', function(e){
	if (e.button === 'select')
		ajax('http://cdn.socket.io/socket.io-1.0.4.js', function(data){
			simply.body(data, true);
			simply.scrollable(true);
		}, function(){
			simply.vibe();
		});
});
