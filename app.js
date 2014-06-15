simply.fullscreen(true);
simply.style('mono');
simply.text({}, true);

var script = 'http://cdn.socket.io/socket.io-1.0.4.js';

simply.on('singleClick', function(e){
	if (e.button === 'select')
		simply.body('fetching ' + script)
		ajax(script, function(data){
			simply.body('ghot it!');
			//simply.scrollable(true);
		}, function(){
			simply.vibe();
		});
});
