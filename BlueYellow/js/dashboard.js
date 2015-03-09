
jQuery('.menutoggle').click(function(){
    var body = document.getElementById('leftpanel');
   if($(body).hasClass("leftpanel-collapsed"))
   {
   $(body).removeClass("leftpanel-collapsed").addClass("leftpanel-show");
       jQuery('.leftpanel .nav-dash li a span').css({display: 'block'});
       jQuery('.container-fluid').css({"padding-left": "95px"});
   }
    else
    {
       
    $(body).removeClass("leftpanel-show").addClass("leftpanel-collapsed");
        jQuery('.leftpanel .nav-dash li a span').attr('style','');
    jQuery('.container-fluid').css({"padding-left": "15px"});
    }
});
