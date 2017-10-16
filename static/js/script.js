var inputForm = document.getElementById("contact_form");

inputForm.addEventListener("submit", function(event) {
    var name = inputForm.Name.value;
    var subject = inputForm.Subject.value;
    var message = inputForm.Message.value;
    var email = inputForm.Email.value;
    if ((name.length != 0) & (subject.length != 0) & (message.length) != 0 & (email.length != 0)) {

        var h_r = new XMLHttpRequest();
		h_r.open("POST","/email_form",true);

		h_r.send('{"Name":"' + name  + '","Email":"' +  email + '","Subject":"'
            + subject + '","Message":"' + message + '"}')

        document.getElementById("contact_us_notice").innerHTML = "Hi " + name + " ,your message has been sent.";
        inputForm.Name.value = "";
        inputForm.Subject.value = "";
        inputForm.Message.value = "";
        inputForm.Email.value = "";
    } else {
        var NoteMessage = "Please fill out ";
        var num = 0;
        if(name.length == 0) {
            num += 1;
            NoteMessage += "Name";
        }

        if (email.length == 0) {
            if (num > 0){
                NoteMessage += ", ";
            }
            NoteMessage += "Email";
            num += 1;
        }

        if (subject.length == 0) {
            if (num > 0){
                NoteMessage += ", ";
            }
            NoteMessage += "Subject";
            num += 1;
        }
        if (message.length == 0) {
            if (num > 1) {
                NoteMessage += ", and Message";
            }else if (num > 0) {
                NoteMessage += ", Message";
            } else{
                NoteMessage += "Message";
            }

        }
        document.getElementById("contact_us_notice").innerHTML = NoteMessage + ".";
    }
    event.preventDefault();
});