//This psuedo-code is for the original idea, which i branched away from pretty quickly.


// Prompt the user for what Criteria the password should meet when they press 
// the generate button.
// 1st prompt should check for password length 16-128 characters
// 1st confirm should check for capital letters
// 2nd confirm should check for lower case letters
// 3rd confirm should check for numbers
// 4th comfirm should check for special icons
// Generate a password that matches the specifications
// check to validate that the password meets specifications
// generate another if it doesn't
// display generated password in text area
// allow user to be able to copy the password with the clipboard button


//I added in the use strict because it was keeping me honest about declaring variables
//I felt I meeded something like that in the beginning.
//"use strict";

//These are the character strings, so I can easily concatenate 
//them and then split them to make an array to choose from.
var capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowChar = "abcdefghijklmnopqrstuvwxzy";
var numChar = "1234567890";
var specChar = "~!@#$%^&*()_+{}|[];:'/?><,.`";


//I have four buttons on my page. 2 during standard screen sizes,
//and two for the smaller media screen.  We have the first 2 out of each
//of these groups for the larger screens.
var passGenBtn = document.querySelector("#passGen");
var copyClipBtn = document.querySelector("#copyClip");
var passGenBtnPhone = document.querySelector("#passGenPhone");
var copyClipBtnPhone = document.querySelector("#copyClipPhone");

passGenBtn.addEventListener("click", passIntro);
copyClipBtn.addEventListener("click", copyPass);
passGenBtnPhone.addEventListener("click", passIntro);
copyClipBtnPhone.addEventListener("click", copyPass);

//I wrote this before I realized I could put functions in functions.
//I like it though, so I'just kept it to the side.
function followDirections() {
    document.querySelector("#passwordForm").textContent = "";
    document.querySelector("#passwordForm").textContent = "1C4ntf0LL0wD1rect10ns!";
}
//This stupidly long function is because I wan't to have the secret 
//NSA agent on the other side to seem invested in your choices.  
//Which means he needs to be able to respond towhatever it is you choose.
function passIntro() {
    //Just establishing variables to be used in this function
    var newPass = "";
    var newPassArray = [];
    var newPassGen = "";
    var passLength = 0;
    var i = 0;
    //Obviously this is where the function actually begins.
    passLength = prompt("Hey there pal. My name is Dave and I am here because I want to help you have a better password.\n\nIdeally for your email, or if you have a Bitcoin wallet, or an Apple ID, really anything.  We are here to help.\n\nFirst thing though, gotta decide how long to make this password.\nThat'll keep the other hackers out.","Type a number between 8 and 128.");
    if (passLength >= 8 && passLength <= 128) {
        var addCaps = confirm("Not a bad number.  Mine is a little longer than that, but we're not here to judge. \n\nOk, lets make this thing, you want capital letters in it?");
        if (addCaps === true) {
            var addLower = confirm("That's what I'm talking about! We got something solid starting here.\nWhat about lower case letters?");
            if (addLower === true) {
                var addNum = confirm("YES, MY DUDE. Keep it going!\nWe gonna sprinkle some numbers up in here?");
                if (addNum === true) {
                    var addSym = confirm("I gotta hand it to you, if I wasn't helping you out right now, I would be bummed to have to figure this password out.\n\nYou're doing everything right, my friend, so I gotta ask.\n\nYou want some special symbols? Thats whats really gonna confuse the bad guys out there.");
                    if (addSym === true) {
                        alert("You have no idea how happy you have made me today. I'm gonna let all the folks in the office know about this.\n\nYou, not the password. That's our little secret.\n\nAnyway, here you go!");
                        newPass = newPass + capChar + lowChar + numChar + specChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("You know what, you already got all that other crap, who even care about some random symbol.\n\nYou do you beautiful.")
                        newPass = newPass + capChar + lowChar + numChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
                else {
                    var addSym = confirm("You were right to skip those, and anyone that judges you for it will have to answer to me.\n\nAnd trust me, I'll know as soon as they talk some crap.\n\nWhat about special characters though... you want those right?");
                    if (addSym === true) {
                        alert("Thats it, you got letters, you got these weirdo symbols.  You're golden.\n\nStephanie next to me is saying otherwise, but she's jealous, don't listen to her.")
                        newPass = newPass + capChar + lowChar + specChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("Haha, you went with just letters! You're brave as hell and I love it.\n\nYou can make incredibly tough passwords and you went with just the big and little letters.\n\nYou sweet little summer child, never change.");
                        newPass = newPass + capChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }                  
                }
            }
            else {
                var addNum = confirm("You're right, we already got big letters, we don't need little ones. Let's just move on.\n\nDid you want numbers in there?");
                if (addNum == true) {
                    var addSym = confirm("Now we're cooking, lets keep it rolling. I bet it takes Jim down the hall at least an hour to crack this one.\n\nAnyway, want some special characters in there too?");
                    if (assSym === true) {
                        alert("Ha! Your ass is going down Jim! I'm so sick of his smug ass getting my passwords before I get his.\n\n'Oooh, I'm Jim, I'm employee of the month. I don't live with my mom.' I hate him...\n\nUh, anyway, here yo go. See you later pal!");
                        newPass = newPass + capChar + numChar + specChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("Big letters and numbers?... Thats it?\n\nWell, I guess I'll see you soon when you need to make a new one.");
                        newPass = newPass + capChar + numChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
                else {
                    var addSym = confirm("Ok, that's cool.  We still got this.\n\nWe can fix this!\n\nDo... you... want...(yes)... special symbols?");
                    if (addSym === true) {
                        alert("Oh thank god! You were so close to having something like DHUGFYLFE be your password. This isn't much better, but at least its more than just capital letters.")
                        newPass = newPass + capChar + specChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("Really? You're serious right now? Just capital letters?\nHave fun... I guess.");
                        newPass = newPass + capChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
            }
        }
        //Now start branches if they said no to capital letters
        else {
            var addLower = confirm("Ok.. I mean, I get it, but I'm still surprised.\n\nHow about lowercase letters, want those?");
            if (addLower === true) {
                var addNum = confirm("Nice, I was real worried you were just going to say no to that too.\n\nOk, lets talk numbers.  Want 'em?");
                if (addNum === true) {
                    var addSym = confirm("Building steam! We're getting this puppy going! I'm not even gonna waste your time with my innane comments.  I'm so stoked right now that we are in a yes mood, I want to keep this train rolling.  Gotta keep the momentum.\n\nSpecial CHaracter. Yay or nay?");
                    if (addSym === true) {
                        alert("Oh man, I was worried my rambling might have pushed you to a no.\n\nI don't know how often you hear this, but:\nI'm proud of you, and I'm proud of what we were able to accomplish here today.");
                        newPass = newPass + lowChar + numChar + specChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("I knew I should have just stayed quiet.\n\n'Just do your job Dave.' They say.\n'You don't even have to say hi to them, just write down their IP and their password.'\n\nWell, excuse me for trying to bring some joy into this world. Sorry I don't want to be like these souless drones with thier nice big offices, and floor to ceiling windows.\n\nYou know how many windows I have?\n\n\n98! Because they won't let me get a newer computer.");
                        newPass = newPass + lowChar + numChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
                else {
                    var addSym = confirm("Ok, so we at least have lowercase letters... I have the feeling you may be a little simple, but that doesn't mean your password needs to be as well.\n\nWhat do you say? Special characters? For my, apparently very, special little friend?");
                    if (addSym === true) {
                        alert("Well, at least we got two things in this password.  You succesfully avoided having something like kasjdhflh.\n\nI suppose congratulations are in order.\nJust so you're not waiting, that statement was them.");
                        newPass = newPass + lowChar + specChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                } 
            }
            //Now we are on to the no letters at all track
            else {
                var addNum = confirm("So, no letters at all? I thought you were just gonna skip the capitals.\n\nYou're never going to remember a password that doesnt have a single letter.\n\nYou're lucky I'm here incase you ever forget it.\n\nSo, we adding numbers or are you skipping that one too?");
                if (addNum === true) {
                    var addSym = confirm("Ok, cool.  You picked something at least. I feel like I shouldn't congratulate you on such a simple task, and yet I feel compelled because I'm so surprised.\n\nWay to go!\n\nSo what about symbols? You want any of these or are you hoping to generate something that resembles binary?");
                    if (addSym === true) {
                        alert("Thank you.  Thank you for at least trying to make a password.  You know nobody is going to accept this thing right?\n\nWhat ever though, it's yours. Have fun.");
                        newPass = newPass + numChar + specChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        alert("You know what? This is my fault.  I put that binary idea in your head.  You realize that the odds of that happening are pretty low, right?  Whatever, I'm stuck at this computer all day anyway, so it's your time.");
                        newPass = newPass + numChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                }
                //No Numbers track. Which is, admittedly, pretty short.
                else {
                    var addSym = confirm("So let me get this straight:\n\nYou came here. You came to this website, to make a password. And you're not choosing a damn thing to make a password?\n\nYou're choosing symbols right? You couldn't have possibly come here and are going to say no to everything.  Are you?\n\nWhy are you doing this?I have a family to feed, and they will starve if you have a crap password.");
                    if (addSym === true) {
                        alert("Thank you.  My children thank you. Little Dave wasn't going to be too happy if he had to skip another meal because daddy couldn't make his quota.\n\nThis means a lot to me.  I won't forget it.\n\n\nYour password that is.  You have been a utter nightmare.");
                        newPass = specChar;
                        newPassArray = newPass.split("");
                        for (i = 0; i < passLength; i++){
                            newPassGen += newPassArray[Math.floor(Math.random()*newPassArray.length)];
                            }
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = newPassGen;
                    }
                    else {
                        newPassGen = prompt("Why did you even come here? You came to a password generator and said no to everything.\n\nYou said no to me.  We were supposed to be friends.\n\nI'm not even going to deal with you.\n\nWrite your own damn password.","Let's all laugh at Dave. Let's all mock him for trying to help us.");
                        document.querySelector("#passwordForm").textContent = "";
                        document.querySelector("#passwordForm").textContent = "No... I don't think so.  Get out of here. You don't come into my house and then deny me the pleasure of gifting you a password by choosing your own.";
                    }
                }
            }
        }
    }
    //This is for those dummies that cant even pick a number right.
    else {
        alert("They were such simple instructions... here just have a password")
        followDirections();
    }    
}
//clipboard copy function.
function copyPass() {
    var copyPass = "";
    copyPass = document.getElementById("passwordForm");
    copyPass.select();
    document.execCommand('copy');
    alert("Perfect. Your new password has been copied to our clipboards!");
}