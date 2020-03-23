function SlackChannel(input) {
  this.message = `Welcome to ${input} channel`;
  this.listen = function (callback) {callback(this.message)}
  this.broadcast = function (message) { console.log(`Message: ${message}`) }
  this.broadcastLoud = function (message) { console.log(`Message: ${message.toUpperCase()}`) }
}


const slackChannel = new SlackChannel('FSA');
slackChannel.listen((message) => {
  console.log(`Message: ${message}`);
});

slackChannel.broadcast('Here is a regular message');
slackChannel.broadcastLoud('loud message');
/*
Message: Welcome to FSA channel
Message: Here is a regular message
Message: LOUD MESSAGE
*/
