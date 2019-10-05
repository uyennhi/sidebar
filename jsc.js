$(document).ready(function () {

   
    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover'
    });
    
    
	
    

     
     
    //idex-icon-1

   $('.area-left-menu  .list-group #scroll1.list-group-item').mouseleave(function(){
        $('.area-left-menu  .list-group #scroll1.list-group-item').css({"padding-left": '5px','width':'50px'});
        
   })
   $('.area-left-menu  .list-group #scroll1.list-group-item').mouseenter(function(){
       $('.area-left-menu  .list-group #scroll1').css({'width':'90px',"padding-left": '45px'});
    })
    //index-icon-2
    $('.area-left-menu  .list-group #scroll2.list-group-item').mouseleave(function(){
        $('.area-left-menu  .list-group #scroll2.list-group-item').css({"padding-left": '5px','width':'50px'});
        
   })
   $('.area-left-menu  .list-group #scroll2.list-group-item').mouseenter(function(){
       $('.area-left-menu  .list-group #scroll2').css({'width':'90px',"padding-left": '45px'});
    })
    //index-icon-3
    $('.area-left-menu  .list-group #scroll3.list-group-item').mouseleave(function(){
        $('.area-left-menu  .list-group #scroll3.list-group-item').css({"padding-left": '5px','width':'50px'});
        
   })
   $('.area-left-menu  .list-group #scroll3.list-group-item').mouseenter(function(){
       $('.area-left-menu  .list-group #scroll3').css({'width':'90px',"padding-left": '45px'});
    })
    //index-icon-4
    $('.area-left-menu  .list-group #scroll4.list-group-item').mouseleave(function(){
        $('.area-left-menu  .list-group #scroll4.list-group-item').css({"padding-left": '5px','width':'50px'});
        
   })
   $('.area-left-menu  .list-group #scroll4.list-group-item').mouseenter(function(){
       $('.area-left-menu  .list-group #scroll4').css({'width':'90px',"padding-left": '45px'});
    })
    //index-icon-5
    $('.area-left-menu  .list-group #scroll5.list-group-item').mouseleave(function(){
        $('.area-left-menu  .list-group #scroll5.list-group-item').css({"padding-left": '5px','width':'50px'});
        
   })
   $('.area-left-menu  .list-group #scroll5.list-group-item').mouseenter(function(){
       $('.area-left-menu  .list-group #scroll5').css({'width':'90px',"padding-left": '45px'});
    })
    //idex-icon-6
    $('.area-left-menu  .list-group #scroll6.list-group-item').mouseleave(function(){
        $('.area-left-menu  .list-group #scroll6.list-group-item').css({"padding-left": '5px','width':'50px'});
        
   })
   $('.area-left-menu  .list-group #scroll6.list-group-item').mouseenter(function(){
       $('.area-left-menu  .list-group #scroll6').css({'width':'90px',"padding-left": '45px'});
    })
    // idex-icon-7
    $('.area-left-menu  .list-group #scroll7.list-group-item').mouseleave(function(){
        $('.area-left-menu  .list-group #scroll7.list-group-item').css({"padding-left": '5px','width':'50px'});
        
   })
   $('.area-left-menu  .list-group #scroll7.list-group-item').mouseenter(function(){
       $('.area-left-menu  .list-group #scroll7').css({'width':'90px',"padding-left": '45px'});
    })
    //idex-icon-8
    $('.area-left-menu  .list-group #scroll8.list-group-item ').mouseleave(function(){
        $('.area-left-menu  .list-group #scroll8.list-group-item').css({"padding-left": '5px','width':'50px'});
        
   })
   $('.area-left-menu  .list-group #scroll8.list-group-item ').mouseenter(function(){
       $('.area-left-menu  .list-group #scroll8').css({'width':'90px',"padding-left": '45px'});
    })



    //scroll event

    $(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('.list-group-item').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
                    $('.area-left-menu  .list-group .list-group-item.newClass').css({"padding-left": '5px','width':'50px'});
                    $('.area-left-menu  .list-group .list-group-item').eq(i).css({'width':'90px',"padding-left": '45px'});
					
						
				}
		});
    }).scroll();

    // hide/show rightsidebar
    if($('.area-left-menu  .list-group list-group-item').scrollTop()>300)
                $('.left-menu').show();
    
    if($('.area-left-menu  .list-group list-group-item').scrollTop()<=300)
                $('.left-menu').hide();

});