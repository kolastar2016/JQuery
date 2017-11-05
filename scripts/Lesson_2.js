$(function(){
  $('.pOne').each(function(i,E){
    $(this).css('fontSize', (i+1)*20+'px');
  });
})

$(function(){
  for (var i=0; i < $('.pTwo').length; i++){
    $('.pTwo').eq(i).css('fontSize', (i+1)*20+'px');
  }
})

$(function(){
  $('#greenDivShow SPAN:eq(0)').on('click',function(){
    $(this).hide();
    $('#greenDivShow SPAN:eq(1)').delay(1000).show(1000);
    $('#showhide').show(1000);
  })

  $('#greenDivShow SPAN:eq(1)').on('click',function(){
    $(this).hide();
    $('#greenDivShow SPAN:eq(0)').delay(500).show(1000);
    $('#showhide').hide(1000);
  })
})

$(function(){
   $('#dvfade SPAN:eq(0)').on('click',function(){
    $(this).fadeOut();
    $('#dvfade SPAN:eq(1)').delay(1000).fadeIn(1000);
    $('#fadeInToOut').fadeTo(1000,0.1).delay(1000).fadeTo(1000,0.5).delay(1000).fadeTo(1000,1);
  })

   $('#dvfade SPAN:eq(1)').on('click',function(){
    $(this).fadeOut();
    $('#dvfade SPAN:eq(0)').delay(1000).fadeIn(1000);
    $('#fadeInToOut').fadeToggle(2000);
  })
});

$(function(){
   $('#dvSlide SPAN').on('click',function(){
    $(this).slideToggle(1000,function(){
      var ind=$('#dvSlide SPAN').index(this);
      if(ind == 0){
        ind = 1;
      } else {
        ind == 0;
      }
      $('#dvSlide SPAN').eq(ind).slideToggle(1000);
    });
    $('#slide').slideToggle(2000); 
  })
});

$(function(){
  $('#fade>SPAN:eq(1)').on('click',function(){
    $(this).FADEOUT();
    $('#dvfade>SPAN:eq(0)').delay(1000).FADEIN(1000);
    $('#Out').FADEOUT(1000);
  })
});

$(function(){
  $('#anim1').click(function(){
    $(this).animate({marginLeft:'300px'},3000).animate({fontSize:'40px'},3000);
    $('#anim1 span').animate({fontHeight:'900px'},1000,function(){
		$('#anim1 span').animate({marginLeft:'40px'},1000,function(){
			$('#anim1 span').animate({marginLeft:'8px'},1000);
        });
      });
    });
});
