
//$(Selector).each (name([index, Element])
$(function(){
  $('.p1').each(function(i,E){
    $(this).css('fontSize', (i+1)*20+'pt');
  });
})

$(function(){
  for (var i=0; i < $('.p2').length; i++){
    $('.p2').eq(i).css('fontSize', (i+1)*20+'pt');
  }
})

$(function(){
  $('.p2:eq(0)').html('CHANGE<B><I>  ABSAZ</I></B>');
  var s=$('.p2:last').html();
  $('.p2:last').html(s+'paragraf_new');

//alert($('.p2:first').html()+'\n'+$('.p2:first').text());
})

$(function(){
  $('#dvSH SPAN:eq(0)').on('click',function(){
    $(this).hide();
    $('#dvSH SPAN:eq(1)').delay(1000).show(1000);
    $('#showhide').show(1000);
  })

  $('#dvSH SPAN:eq(1)').on('click',function(){
    $(this).hide();
    $('#dvSH SPAN:eq(0)').delay(500).show(1000);
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
   $('#dvslide SPAN').on('click',function(){
    $(this).slideToggle(1000,function(){
      var ind=$('#dvslide SPAN').index(this);
      if(ind == 0){
        ind = 1;
      } else {
        ind == 0;
      }
      $('#dvslide SPAN').eq(ind).slideToggle(1000);
    });
    $('#slide').slideToggle(2000); 
  })
});
/*
$(function(){
   $('#fade>SPAN:eq(1)').on('click',function(){
    $(this).FADEOUT();
    $('#dvfade>SPAN:eq(0)').delay(1000).FADEIN(1000);
    $('#Out').FADEOUT(1000);
  })

})
*/
$(function(){
  $('#anim1').click(function(){
    $(this).animate({marginLeft:'300px'},3000).animate({fontSize:'40pt'},3000);
    $('#anim1 span').animate({fontHeight:'900pt'},1000,function(){
		$('#anim1 span').animate({marginLeft:'40pt'},1000,function(){
			$('#anim1 span').animate({marginLeft:'8pt'},1000);
        });
      });
    });
});




