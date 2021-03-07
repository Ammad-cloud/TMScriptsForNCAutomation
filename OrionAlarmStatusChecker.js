// ==UserScript==
// @name         OrionCheckIfUpAgain
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        [Insert Orion URL]
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// ==/UserScript==

(function() {
    'use strict';

    let timesRefreshed;
    let timeToRefresh = 300000;

    (async () => {
        console.log(await GM.listValues());
        timesRefreshed = await GM.getValue('timesRefreshed', 0);
        console.log("times refreshed: " + parseInt(timesRefreshed));
    })();


    setTimeout(function(){

        let latestComponentEvent = document.getElementsByClassName('EventRow Event506')[0];
        let eventTime = latestComponentEvent.firstElementChild.innerText.substring(11,16); //gets the time
        console.log('Checking node status:');

        if(timesRefreshed > 2){
            //send Email
            console.log('I have now waited ' + timesRefreshed*(timeToRefresh/1000/60) + ' minutes');
            GM.deleteValue('timesRefreshed'); //Deletes the value in storage
            //GM.setValue('timesRefreshed', 0); //Is this better than deleting? This just resets the value back to 0
        }
        else{
            console.log('I have not waited ' + 2*(timeToRefresh/1000/60) + ' minutes yet');
            if (latestComponentEvent.lastElementChild.innerText.contains('is down')){
                console.log('Node is still down..');
                (async () => {
                    GM.setValue('timesRefreshed', timesRefreshed += 1);
                            console.log("after timesRefreshed++: " + parseInt(timesRefreshed));
                })();
                setTimeout(function(){
                    location.reload();
                }, timeToRefresh);
            }
            else if(latestComponentEvent.lastElementChild.innerText.contains('is up')){
                alert('I am up');
                //copy value
                //maybe send email
            }
        }

    }, 4000)
})();