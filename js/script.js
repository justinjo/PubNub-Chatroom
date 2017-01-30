// generate random UUID as username
var uuid = PubNub.generateUUID();

var pubnub = new PubNub({
 	subscribeKey: 'sub-c-22d37992-dea5-11e6-b2ae-0619f8945a4f',
    publishKey: 'pub-c-211da9ce-adcf-44ab-b2d1-fc1c0a8eaadc',
    uuid: uuid
});

pubnub.subscribe({
    channels: ['Test Channel'],
    error : function (error) {
        // Handle error here
        console.log(JSON.stringify(error));
    }
});

pubnub.publish({
    message : {
    	uuid : uuid,
    	text: 'Logging on!'
    },
    channel : 'Test Channel',
},
function (status, response) {
    if (status.error) {
        // handle error
        console.log(status)
    } else {
        console.log("message Published w/ timetoken", response.timetoken)
    }
}
);

function send_message() {
    var message = document.getElementById("usermessage").value;
    document.getElementById("usermessage").value = "";
    pubnub.publish({
        message : {
            uuid : uuid,
            text : message
        },
        channel : 'Test Channel',
    });
}

(function() {
    pubnub.addListener({
        message: function(m) {
            var chat = document.getElementById("chatbox");
            chat.innerHTML = chat.innerHTML + 'User ' + m.message.uuid + ': \'' + m.message.text + '\'<br>';
            console.log(m)
        }
    })
})();

