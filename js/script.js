// generate random UUID as username
var uuid = PubNub.generateUUID();

var messages = ['','','','',''];

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

function send_message(m) {
    pubnub.publish({
        message : {
            uuid : uuid,
            text : m
        },
        channel : 'Test Channel',
    });
}

(function() {
    pubnub.addListener({
        message: function(m) {

            document.getElementById("chatbox0").innerHTML = 

            //'User ' + m.message.uuid + ': \'' + m.message.text + '\'<br>';
            //document.write('User ' + m.message.uuid + ': \'' + m.message.text + '\'<br>')
            console.log(m)
        }
    })
})();

