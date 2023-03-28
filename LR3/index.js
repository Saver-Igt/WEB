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
                
            }
        });
        tek = tek + 5;
    }else{
        console.log('enough')
    }
}