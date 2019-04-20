const showTextArea = () => {
     if (document.getElementById("checkbox").checked === true) {
          document.getElementById("text").style.display = "block";
     } else {
          document.getElementById("text").style.display = "none";
     }
}

const verifyNumberOfChar = () => {
     let commentString = document.getElementById("text").value;
     let charNo = commentString.length;
     if (commentString !== "" && charNo < 160) {
               alert("Comment successfully sent");
     } else {
          document.getElementById("submitButton").disabled = true;
          document.getElementById("error").style.display = "inline-block";
          document.getElementById("break").style.display = "block";
     }
}

