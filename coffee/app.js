$('#coffee1').click(function(){
    window.location.href = "cappucino.html";
})
$('#coffee2').click(function(){
    window.location.href = "espresso.html";
})
$('#coffee3').click(function(){
    window.location.href = "latte.html";
})
$('.bg').hover(function(){ 
    $(this).css({opacity:0.5,position:'relative',left:'20px'});
},function(){
    $(this).css({opacity:1});
})
 $('.im').hover(function() {
    $(this).css({width : '320px',height:'220px',opacity:0.8});
}, function() {
    $(this).css({width: '300px', opacity:1},
    );
});