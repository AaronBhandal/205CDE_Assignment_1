// Javascript File
'use strict';
//Allows for simple statement with less input

function addComment() {
//Declares addComment function

   var textbox = document.getElementById("comment");
   //Creates a variable which will serarch for a variable called "comment_field" and the text within
   
   var commentText = textbox.value;
   //Creates a variable to store the text within the comment box being looked for above
   
   var commentList = document.getElementById("commentList")
   //Creates a variable that looks for the id of an element called "commentList"
   
   var commentListItem = document.createElement("li");
   //Creates a variable for where the comments will be stored
   
   var html = commentText;
   //Allows HTML elements to be created
   
   commentListItem.innerHTML = html;
   //Allows HTML elements to be created
   
   if (textbox.value != "") {
   //Check whether there is actualy text within the text box if there is then carry on 

       commentList.appendChild(commentListItem);
       //Adds the new comment to the bottom of the list
       
       textbox.value = "";
       //Clears the textbox of text after submission
   }
   
   return false;
   //end
   
}

var button = document.getElementById("post_comment");
//Declares variable for locating the button with the id "post_button"

button.onclick = addComment;
//Declares event listener in order to execute the addComment function