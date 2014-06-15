simply.fullscreen(true);
simply.style('mono');
simply.text({}, true);

ajax('http://cdn.socket.io/socket.io-1.0.4.js', function(data){
		simply.body(data.substr(100), true);
		simply.scrollable(true);
}, function(){
	simply.vibe();
});
