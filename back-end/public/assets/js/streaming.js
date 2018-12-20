var sdk = window['phenix-web-sdk'];
var channelExpress = new sdk.express.ChannelExpress({
  backendUri: 'https://phenixrts.com/demo',
  authenticationData: {userId:'YourUserId', password: 'YourUserPassword'} // This info is appended to the body of requests to your backend. You may pass whatever you like here. We don't use this information. Use it for authenticating users requesting to publish or subscribe to streams
});
var videoElement = document.getElementById('myVideoId');
var isMobileAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isOtherMobile = /Android|webOS|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent);
var channelAlias = 'realtimebox';

console.log('isMobileAppleDevice', isMobileAppleDevice);


// Mobile devices only support autoplay with WebRTC. In order to autoplay with 'streaming' (not real-time) you need to mute the video element
if ((isMobileAppleDevice || isOtherMobile) && !sdk.RTC.webrtcSupported) {
  videoElement.muted = true;

  // show button to unmute
}

channelExpress.joinChannel({
  alias: channelAlias,
  videoElement: videoElement
}, function joinChannelCallback(error, response) {
  if (error) {
    // Handle error
    console.error('Unable to join channel', error);
  }

  if (response.status === 'room-not-found') {
    // Handle room not found - Create a Channel Or Publish to a Channel
    setUserMessage('Room Does Not Exist - Please publish first or manually create the channel');
  } else if (response.status !== 'ok') {
    // Handle error
    console.warn('Unable to join room, status: ' + response.status);
  }

  // Successfully joined channel
  if (response.status === 'ok' && response.roomService) {
    // Do something with roomService
    setUserMessage('Joined Channel');innerText
  }
}, function subscriberCallback(error, response) {
  if (error) {
    // Handle error
    console.error('Unable to join channel', error);
  }

  if (response.status === 'no-stream-playing') {
    // Handle no stream playing in channel - Wait for one to start
    setUserMessage('No Stream Playing In Channel - Waiting for one to start');
  } else if (response.status !== 'ok') {
    // Handle error
    console.warn('New Status: ' + response.status);
  }

  // Successfully subscribed to most recent channel presenter
  if (response.status === 'ok' && response.mediaStream) {
    // Do something with mediaStream
    setUserMessage('Viewing stream: ' + response.mediaStream.getStreamId());
  }
});

function setUserMessage(message) {
  var userMessageElement = document.getElementById('userMessage');

  userMessageElement.innerText = message;
}