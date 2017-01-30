/* script.js
 * By Justin Jo
 * Last modified: 1/30/2017 */

// generate random UUID as username
var uuid = PubNub.generateUUID();

var pubnub = new PubNub({
    subscribeKey: 'sub-c-22d37992-dea5-11e6-b2ae-0619f8945a4f',
    publishKey: 'pub-c-211da9ce-adcf-44ab-b2d1-fc1c0a8eaadc',
    uuid: uuid
});


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

(function() {
    pubnub.subscribe({
        channels: ['Chat Channel']
    });

    pubnub.addListener({
        message: function(m) {
            var chat = document.getElementById('chatbox');
            // first 8 characters of UUID determines username
            var message = 'User ' + m.message.uuid.substring(0,8) + ': \'' + m.message.text + '\'<br>';
            chat.innerHTML = chat.innerHTML + message;
            console.log(m);

            // scroll to bottom of chatbox
            var chat = document.getElementById('chatbox');
            chat.scrollTop = chat.scrollHeight;
        }
    })

    send('Logging on...');

    window.onbeforeunload = function() {
        send('Logging off!');
        pubnub.unsubscribe({
            channels : ['Chat Channel']
        });
    }
})();