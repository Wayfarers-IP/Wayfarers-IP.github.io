function feedbacks(){

    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var feedback = document.getElementById('feedback').value;

    if(feedback == ""){
        window.alert('Please Fill Feedback');
    }else{
        firebase.database().ref('Feedback').push({
            Name : name,
            Feedback : feedback,
            Email : email
        });
        window.alert('Successfully Sent! ');
        document.getElementById('email').value = "";
        document.getElementById('name').value = "";
        document.getElementById('feedback').value = "";
    }
}