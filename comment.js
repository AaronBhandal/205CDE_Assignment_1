// JavaScript File
'use strict';
//Requires less input

function addComment() {
//Declares addComment function

   var textbox = document.getElementById("comment");
   //Declares variable for locating contents within the text with the id "comment_field"
   
   var commentText = textbox.value;
   //Declares variable for holding contents of above mentioned textbox
   
   var commentList = document.getElementById("commentList")
   //Declares a variable for locating the list with the id "commentList"
   
   var commentListItem = document.createElement("li");
   //Declares a variable to create a new list element
   
   var html = commentText;
   //Allows for creation of html elements
   
   commentListItem.innerHTML = html;
   //Same as previous
   
   if (textbox.value != "") {
   //If the textbox is not empty, execute the following code;

       commentList.appendChild(commentListItem);
       //Adds the new comment to the end of the list
       
       textbox.value = "";
       //Resets textbox after a comment has been submitted
   }
   
   return false;
   //terminate
   
}

var button = document.getElementById("post_comment");
//Declares variable for locating the button with the id "post_button"

button.onclick = addComment;
//Declares event listener in order to execute the addComment function