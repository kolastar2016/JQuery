/*
$(function(){
  $('#inp1').val('56');
  $('#inp1').on('input',function(){
  $('#inp1').next().html($('#inp1').val());
  })
  $('input:eq(1)').val('BATTON');
})

$(function(){
  $('.lang:checkbox').val('0');
  $('.lang:checkbox').on('change',function(){
    var s = $(this).val();
      if (s==='0'){
        $(this).val('1');
      }
        else{
          $(this).val('0');
        }
    $(this).parent().children().last().html($(this).val());
  })
})

$(function(){
  $(document.body).append('<p id="p1">Hello !!!</p>');
  //$('b:eq(0)').append('<p id="p1">Hello !!!</p>');
  $('b:first').append('<p id="p1">Hello !!!</p>');
  $('p').appendTo('#dv1');
  $('<p>Bye</p>').appendTo('#dv1');
})

$(function(){
  $('#dv1').prepend('<img src = "" width="100%">');
  $('<span class = "cl1">i</span>').prependTo('#tab1 td');
  $('<tr><td></td><td></td><td></td></tr>').prependTo('#tab1');
  $('#tab1 tr:eq(3) td').css('backgroundColor','red');
  $('#tab1 tr:first td').css('backgroundColor','green');
  $('#tab1 tr:eq(2) td').css('backgroundColor','yellow');
  $('#tab1 tr:last').prependTo('#tab1');
})

$(function(){
  $('#tab1 tr').each(function(i,elem){
    $(elem).children().last().after('<td class="rez">'+i+'</td>');
    $(this).children().last().css('borderColor','red');
    $(elem).children().last().css('borderStyle','dotted');
    console.log($('#tab1 tr').index(this));
  });
})

$(function(){
  var clon1 = $('#tab1').clone();
  $(clon1).attr('id','tab2');
  $('#dv1').before(clon1);
  $($('#tab1').clone()).attr('id','tab3').insertBefore('#tab2');
})

$(function(){
  $.fn.hello = function(){
    console.log('hello');
    return this;
  };
  $.fn.middle = function(){
    var n=this.length;
    //$(this).each(function())
    
	var srn=Math.floor(n/2);
	console.log(srn);
    
	var el,k;
    $(this).each(function(i,elem){
      if(i==srn){
        el = elem;
		k = i;
      }
    })
	if(n%2==0){
		console.log('Yes');
		console.log($(this).eq(k-1));
		return $(el).add($(this).eq(k-1));
	}
    console.log(el);
    return $(el);
  }
});

$(function(){
	$.expr[':'].liv=function (elem){
		if(elem.tagName.toLowerCase()=='li'){
			if ($(elem).attr('data-v')!=undefined){
				console.log('ok');
				return true;
			}else{
				console.log('no');
				return false;
			}
		}
	}	
});

$(function(){
  $('#tab2').hello().css('borderWidth','10px').hello();
  $('#tab2 td').middle().css('backgroundColor','blue');
  $('ol li').middle().css('color','red');
  $('*:liv').animate({'fontSize':'40pt'},5000);
});
*/