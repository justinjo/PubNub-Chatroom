# PubNub-Chatroom

Basic chatroom using [PubNub's Javascript V4 SDK](https://github.com/pubnub/javascript).  

This chatroom automatically assigns users random IDs, and allows them to send messages to the general chat. The chatbox autoscrolls with new messages and sends login and logoff messages for every user. To send a message, type in the provided textbox below the chat and either click the enter button, or press the enter key on your keyboard.  

Access the page at [https://justinjo.github.io/PubNub-Chatroom/](https://justinjo.github.io/PubNub-Chatroom/)  


## Table of Contents  
======
* [PubNub-Chatroom](#pubnub-chatroom)
* [Table of Contents](#table-of-contents)  
* [Usage](#usage)  
* [Directory Structure](#directory-structure)
* [Process](#process) 


Usage
======
To use your own copy of this chatroom, first [create a PubNub account](https://admin.pubnub.com/#/register) to generate personal Subscribe/Publish keys.  

Next, clone this repository and access [lines 5 and 6 of the JavaScript file)](https://github.com/justinjo/PubNub-Chatroom/blob/master/js/script.js#L5-L6) (found in `/js/script.js`).

The code should look like this:  

```javascript  
var pubnub = new PubNub({  
    subscribeKey: 'paste-your-subkey',  
    publishKey: 'paste-your-pubkey',  
    uuid: uuid  
});
``` 

You will then need to paste in your own Publish/Subscribe keys into `script.js`. Upon doing so, the website is read to go! Host the website in any manner of your choosing, or [click here](https://justinjo.github.io/PubNub-Chatroom/) for a demonstration.  


Directory Structure
======
```
PubNub-Chatroom/
+-- README.md
+-- index.html
+-- css
|   +-- stylesheet.css
+-- images
|   +-- icon.png
+-- js
    +-- script.js
```



Process
======

While this website was built within the past 24 hours (1/30/2017), it really began a week and a half prior. My initial goal was to integrate PubNub's POSIX C++ SDK into my [Command Line Pacman](https://github.com/justinjo/Terminal-Pacman) project. The plan was to use PubNub's Data Stream Network to create a sports commentator that would comment on the player's behavior and progress within the game. This commentary would be published on a basic website for fans to tune in to.  

Unfortunately, I struggled with integrating the C++ SDK into my project. So after some back and forth with support, I ultimately decided to put the C++ on the backburner and try out some of the other SDKs.

I settled on the JavaScript SDK, which was lightweight and quick to get up and running. I had never used JavaScript before, so I took this opportunity to familiarize myself with PubNub and JavaScript at the same time.  

In tinkering with basic pub/subbing, I built two simple pages– one sent messages using buttons and the other received them. Eventually, I added more features like usernames and login messages for unique users. With every basic feature I added, the project seemed to be pushing towards chatroom functionality.

To build the chatroom, I merged the two sites into a single page that could both send and display messages. After adding auto-scrolling, logoff messages, and some basic formatting, the chatroom was live!

In developing this project, I had to quickly familiarize myself with technology I had little to no experience with. With HTML and CSS, I used some reference sites to get back up to speed. With PubNub's SDK and JavaScript as a whole, the learning process was much more involved. To learn how to use the two, I built and tested code piece by piece, making sure each segment did what I expected and needed it to do.  

The end result of this process was a proof of concept chatroom using PubNub's Global Data Stream Network. In completing this project, I learned to quickly prototype and test features in an unfamiliar language. Some future goals and features include customizable usernames, the option to change text color, and a sleeker UI.  
