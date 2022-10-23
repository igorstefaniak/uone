$('#switchld').click(
    function(){ 
        if($(this).prop("checked") == true){
            $('._dark').addClass('_light'); 
            $('._light').removeClass('_dark');
        }
        if($(this).prop("checked") == false){
            $('._light').addClass('_dark'); 
            $('._dark').removeClass('_light');
        }
    }
)