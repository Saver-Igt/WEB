var tek = 5;
function letsGo(){
    if(tek < 15){
        $.ajax({
            url: '3.php', 
            method: 'get', 
            dataType: 'json',
            data: {kol: 5, tek: this.tek},
            success: function(response){
                for (let index = 0; index < response.length; index++) {
                    $( "section" ).append(
                        `<div class="row mt-2 mb-2 shadow news">
                            <div class="col-3">
                                <img src="`+ response[index].imgURL + `"
                                    class="img-fluid mb-4 mt-4">
                            </div>
                            <div class="col mb-4 mt-4">
                                <h3 class="mb-2">`+ response[index].Title + `</h3>
                                <p>`+ response[index].Desc + `</p>
                            </div>
                        </div>`);
                }
            }
        });
        tek = tek + 5;
        if(tek == 15){
            //$('.upload').prop('disabled', true);
            $(".upload").css("display", "none");
        }
    }
}