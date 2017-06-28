/*$('body').css('color',"red");
jQuery('body').css('fontSize','30pt')

//var dollar = jQuery.noConflict();
//dollar('#sp1').hide();

//dollar('#sp1').show(3000).hide(3000).show(1);

var obj = document.querySelector('#sp1');
//dollar(obj).css('textDecoration','underline');
//dollar(document.body).css('backgroundColor','pink');

$(function(){
  $("#tab td:not(:first)").width('50px').height(50); 
  $("#tab tr:first").css('backgroundColor','yellow');
  $("#tab td").html('5');
  $("#tab td:eq(6)").css({"color":"#ffff10","background-color":"blue","font-size":"45pt"});
  $("#tab td").eq(4).html('100');
  $('#tab td').eq(4).toggle();
  $('#tab').click(function(){
    $('#tab td').eq(4).toggle()
  })
  var x=$("#tab td:last").html();
  console.log(x);

  $("#tab td:eq(7)").on('mousemove',function(){
    $(this).css("color","black");
  }).on("mouseout",function(){
    $(this).css("color","");
  })
})

$(function(){

})

*/