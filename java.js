console.log ("Welcome ya 3rs")
 
var UserName = "Ahmed" ;   // string
var userAge = "25" ;      // Number
var isLogIn = "true" ;   // boolean


 /*window.alert ("Hello")*/ 
 /*prompt.("Hello")*/
 

var userName =30 ;  // true , false
if(userAge >=30)
{
    console.log("Welcome")
}
else(userAge >=30)
{
    console.log("NO Welcome")
}


 //document.getElementById('').innerHTML;


var userName = "ibrahim"

switch(userName)
{
    case"ahmed" : 
        console.log("Welcome Ahmed");
        break;
    
    case "ibrahim" :
        console.log("Welcome Hema");
        break;

    default: 
        console.log("Welcome AAAAA");
        break;
}

for(var i = 1 ; i <= 10 ; i++)
{
    console.log("welcome")
}


var comment = "web design and development";

for(var i = 0 ; i<comment.length ; i++)
{
    if(comment.charAt(i) == "d")
     {console.log(i);}
}

var friends = ["ahmed" , "sara" , "ali" , "amr" ,"sed" ] ;

for (var i=0 ; i < friends.length ; i++)
{
    console.log(friends [i]) 
}  

JSON.parse(localStorage.getItem("name") || "[]");
