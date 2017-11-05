$('body').css('color',"red");
jQuery('body').css('fontSize','30pt')

$(function(){
  $("#tableTest td:not(:first)").width('50px').height(50); 
  $("#tableTest tr:first").css('backgroundColor','yellow');
  $("#tableTest td").html('5');
  $("#tableTest td:eq(6)").css({"color":"#ffff10","background-color":"blue","font-size":"45pt"});
  $("#tableTest td").eq(4).html('100');
  $('#tableTest td').eq(4).toggle();
  $('#tableTest').click(function(){
    $('#tableTest td').eq(4).toggle()
  })
  var x=$("#tableTest td:last").html();
  console.log(x);

  $("#tableTest td:eq(7)").on('mousemove',function(){
    $(this).css("color","black");
  }).on("mouseout",function(){
    $(this).css("color","");
  })
});

//var dollar = jQuery.noConflict(); //Another version, when instead "$" writing "dollar"

$('#spanText').hide();                     //Another version, when instead "$" writing "dollar"

$('#spanText').show(3000).hide(3000).show(1);  //Another version, when instead "$" writing "dollar"

var obj = document.querySelector('#spanText'); //Another version, when instead "$" writing "dollar"
$(obj).css('textDecoration','underline'); //Another version, when instead "$" writing "dollar"
$(document.body).css('backgroundColor','#D3D3D3'); //Another version, when instead "$" writing "dollar"
