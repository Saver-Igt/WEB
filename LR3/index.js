var tek = 5;
function letsGo(){
    if(tek < 15){
        $.ajax({
            url: '3.php', 
            method: 'get', 
            dataType: 'json',
            data: {kol: 5, tek: this.tek},
            success: function(response){
                console.log(response);
                for (let index = 0; index < response.length; index++) {
                    $( "section" ).append(
                        `<div class="row mt-2 mb-2 shadow news">
                            <div class="col-3">
                                <img src="https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp"
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