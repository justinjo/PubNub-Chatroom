// generate random UUID as username
var uuid = PubNub.generateUUID();

var pubnub = new PubNub({
    subscribeKey: 'sub-c-22d37992-dea5-11e6-b2ae-0619f8945a4f',
    publishKey: 'pub-c-211da9ce-adcf-44ab-b2d1-fc1c0a8eaadc',
    uuid: uuid
});


pubnub.subscribe({
    channels: ['Chat Channel'],
    error : function (error) {
        // Handle error here
        console.log(JSON.stringify(error));
    }
});

// log in 
pubnub.publish({
    message : {
    	uuid : uuid,
    	text: 'Logging on...'
    },
    channel : 'Chat Channel',
},
function (status, response) {
    if (status.error) {
        // handle error
        console.log(status)
    } else {
        console.log('message Published w/ timetoken', response.timetoken)
    }
}
);

// called externally
function send_message() {
    var message = document.getElementById('usermessage').value;
    if (message.length > 0) {
        send(message);
    }
    document.getElementById('usermessage').value = '';
}

// called internally
function send(m) {
    pubnub.publish({
        message : {
            uuid : uuid,
            text : m
        },
        channel : 'Chat Channel',
    });
}

// update chat box
(function() {
    pubnub.addListener({
        message: function(m) {
            var chat = document.getElementById('chatbox');
            // first 8 characters of UUID determines username
            var message = 'User ' + m.message.uuid.substring(0,8) + ': \'' + m.message.text + '\'<br>';
            chat.innerHTML = chat.innerHTML + message;
            console.log(m)

            // scroll to bottom of chatbox
            var chat = document.getElementById('chatbox');
            chat.scrollTop = chat.scrollHeight;
        }
    })

    window.onbeforeunload = function() {
        send_message('Logging off!')
    }
})();