simply.buttonConfig({
/*
	up: true,
	down: true,
*/
	back: true,
	select: true
});
simply.fullscreen(true);
simply.style('mono');
simply.text({}, true);
simply.scrollable(true);

var script = 'http://cdn.socket.io/socket.io-1.0.4.js';

var body = '';
function log(text)
{
	body += text + '\n';
	simply.body(body);
}

simply.on('singleClick', function(e){
	if (e.button === 'select')
	{
		log('fetching ' + script)
		ajax(script, function(data){
			log('got ' + script);
			//log(data);
		}, function(){
			simply.vibe();
		});
	}
});
