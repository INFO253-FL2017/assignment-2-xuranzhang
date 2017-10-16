var inputForm = document.getElementById("blog_comment");

inputForm.addEventListener("submit", function(event) {
    var name = inputForm.YourName.value;
    var message = inputForm.YourComments.value;

    if ((name.length != 0) & (message.length) != 0) {
        document.getElementById("commentState").innerHTML = "Thanks for submitting comments!";
        var toPast =  "<br /r>" + name + " says: <br /r>" + message + "<br /r>";
        document.getElementById("PastContent").innerHTML += toPast;

        inputForm.YourName.value = "";
        inputForm.YourComments.value = "";

    } else {
        var NoteMessage = "Please fill out ";
        var num = 0;
        if (name.length == 0) {
            NoteMessage += "Your Name.";
        } else {
            NoteMessage += "Your Comment.";
        }
        document.getElementById("commentState").innerHTML = NoteMessage;
    }
    event.preventDefault();
});