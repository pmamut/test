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
			
			var io = eval(data);
			
			log('connecting...')
			var socket = io('http://estimably.azurewebsites.net');
			socket.on('connect', function(){
				log('connected!');
			}).on('error', function(){
				log('boom!');
			});
		}, function(){
			simply.vibe();
		});
	}
});
