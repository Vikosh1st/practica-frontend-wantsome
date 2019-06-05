function setCookie(cookieName,cookieValue,daysToExpire){
    // create date
    // create cookie 
      }
function getCookie(cookieName){
       // access cookie
      }
function verifiyCookie(){
        let user = getCookie("exerciseCookie");
        if (user!="") {
            alert("Welcome Back " + user + "!!!");
        } else {
          user = prompt("Please enter your name");
          num = prompt("How many days you want to store your name on your computer?");
          if (user!="" && user!=null){
            setCookie("exerciseCookie", user, num);
          }
        }
      }