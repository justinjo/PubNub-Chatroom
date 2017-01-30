# PubNub-Chatroom
======
Basic Chatroom using [PubNub's Javascript V4 SDK](https://github.com/pubnub/javascript)  
Access page at [https://justinjo.github.io/PubNub-Chatroom/](https://justinjo.github.io/PubNub-Chatroom/)  


##### Table of Contents  
======
* [PubNub-Chatroom](#pubnub-chatroom)
* [Table of Contents](#table-of-contents)  
* [Usage](#usage)  
* [Directory Structure](#directory-structure)
* [Process](#process) 

Usage
======
To use your own copy of this chatroom, first [create a PubNub account](https://admin.pubnub.com/#/register) to generate personal Subscribe/Publish keys.  

Next, clone this repository and access [lines 5 and 6 of the JavaScript file (found in '/js/script.js').](https://github.com/justinjo/PubNub-Chatroom/blob/master/js/script.js#L5-L6)  

The code should look like this:  

'''javascript  
var pubnub = new PubNub({  
    subscribeKey: 'sub-c-22d37992-dea5-11e6-b2ae-0619f8945a4f',  
    publishKey: 'pub-c-211da9ce-adcf-44ab-b2d1-fc1c0a8eaadc',  
    uuid: uuid  
});
'''  

You will then need to paste in your own Publish/Subscribe keys into 'script.js'. Upon doing so, the website is read to go! Host the website in any manner of your choosing, or [click here](https://justinjo.github.io/PubNub-Chatroom/) for a demonstration.  



Directory Structure
======
'''
PubNub-Chatroom/
+-- README.md
+-- index.html
+-- css
    +-- stylesheet.css
+-- images
    +-- icon.png
+-- js
    +-- script.js
'''



Process
======

While this project was written and published in less than 24 hours, it really began a week and a half ago.
