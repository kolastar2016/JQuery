
$(function(){
  $('#inputText').val('56');
  $('#inputText').on('input',function(){
  $('#inputText').next().html($('#inputText').val());
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
      else {
         $(this).val('0');
      }
    $(this).parent().children().last().html($(this).val());
  })
})

$(function(){
  $('#divClone').prepend('<img src = "" width="100%">');
  $('<span class = "cl1">i</span>').prependTo('#tableColorTest td');
  $('<tr><td></td><td></td><td></td></tr>').prependTo('#tableColorTest');
  $('#tableColorTest tr:eq(3) td').css('backgroundColor','red');
  $('#tableColorTest tr:first td').css('backgroundColor','green');
  $('#tableColorTest tr:eq(2) td').css('backgroundColor','yellow');
  $('#tableColorTest tr:last').prependTo('#tableColorTest');
})

$(function(){
  $('#tableColorTest tr').each(function(i,elem){
    $(elem).children().last().after('<td class="rez">'+i+'</td>');
    $(this).children().last().css('borderColor','red');
    $(elem).children().last().css('borderStyle','dotted');
    console.log($('#tableColorTest tr').index(this));
  });
})

$(function(){
  var clon1 = $('#tableColorTest').clone();
  $(clon1).attr('id','tableCloneTest');
  $('#divClone').before(clon1);
  $($('#tableColorTest').clone()).attr('id','tableCloneTestNext').insertBefore('#tableCloneTest');
})

$(function(){
  $.fn.hello = function(){
    console.log('hello');
    return this;
  };
  $.fn.middle = function(){
    var n=this.length;
    
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
  $('#tableCloneTest').hello().css('borderWidth','10px').hello();
  $('#tableCloneTest td').middle().css('backgroundColor','blue');
  $('ol li').middle().css('color','red');
  $('*:liv').animate({'fontSize':'40pt'},5000);
});
