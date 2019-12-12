# Password Generator
This assignment is to make a password generator.  This read me will be updated with specifications to the assignment and instructions on how to use it at a later time.

### Password Generator
This site was created to be able generate a random password to meet user specifications.
It can be viewed at - https://sforzemon.github.io/Password-Generator/

### Criteria
###### The goal of this project was to allow a user a place to generate a password with the following qualities:
* Upercase lettering
* Lowercase lettering
* Numbers
* Special Characters

###### The user should also be able to request how long they would like the password.
* I have given them a range of 8-128

### Design
I deviated slightly from the simple design given as an example.
While I kept the main components, I decided to theme my site in a way that I found humorous

A _suspiciously_ helpful government site that wants to "help" you.
Everything about the site is done in a way to scream "This is fishy and maybe I shouldn't trust it."

*All of the images on the site, aside from the favicon and NSA logo, were lovingly lifted from both the FBI and NSA websites.*


The meat behind the site is in the JS.  
I went out of my way to make it as indepth as possible.

I have a slew of for and do loops so that I can simulate a government agent by the name of Dave helping you out.
Dave was made to be able to comment on nearly every action you can take.

Aside from leaving the page, he can't comment on that, so just know that ***while alone he sits and quietly cries***.

For the password validation I used do loops and set my password to check itself to see if it matched with my regex variables

![NSA PassGen](https://github.com/Sforzemon/Password-Generator/blob/master/images/PassGen%20Screeshot.png)
