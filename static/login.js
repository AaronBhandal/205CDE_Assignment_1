// JavaScript File
function check(form) {
 /*the following code checkes whether the entered userid and password are matching*/
 if (form.username.value == "guest" && form.password.value == "1234")
  {
    window.open('loggedinhome.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Incorrect Username/Password")/*displays error message*/
  }
}