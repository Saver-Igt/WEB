function sendData(){
    var username = $( "#username" ).val();

    var email = $( "#emailAddress" ).val();

    var message = $('textarea#txtArea').val();

    console.log(username, email, message);
    $.ajax({
        url: 'setdata_3b.php',
        method: 'post',
        dataType: 'json',
        data:{username: username, email:email, message:message},
        success: function(response){
            alert('Успех');
        }
    })
}

$( document ).ready(function() {
    $.ajax({
        url: 'getdata_3b.php', 
        method: 'get', 
        dataType: 'json',
        success: function(response){
            console.log(response);
            for (let index = 0; index < response.length; index++) {
                $( ".reviews" ).append(
                    `<div class="card mt-5">
                        <div class="card-header">
                            <h5>`+ response[index].username +`</h5>
                            <h6>`+response[index].email+`</h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text">`+response[index].message+`</p>
                        </div>
                    </div>`);
            }
        }
    });
});