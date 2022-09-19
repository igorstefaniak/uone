$('#icon1').mouseenter(
    function(){ $(this).removeClass('bx-bookmark-alt'); $(this).addClass('bxs-bookmark-alt')},)
$('#icon1').mouseleave(
    function(){ $(this).removeClass('bxs-bookmark-alt'); $(this).addClass('bx-bookmark-alt')},)

$('#icon2').mouseenter(
    function(){ $(this).removeClass('bx-heart'); $(this).addClass('bxs-heart'); document.getElementById("icon2").style.color = "#e91e43";},)
$('#icon2').mouseleave(
    function(){ $(this).removeClass('bxs-heart'); $(this).addClass('bx-heart'); document.getElementById("icon2").style.color = "#ffffff";},)

$('#icon3').mouseenter(
    function(){ $(this).removeClass('bx-user'); $(this).addClass('bxs-user')},)
$('#icon3').mouseleave(
    function(){ $(this).removeClass('bxs-user'); $(this).addClass('bx-user')},)

$('#search').mouseenter(
    function(){ $(this).removeClass('bx-search'); $(this).addClass('bxs-search')},)
$('#search').mouseleave(
    function(){ $(this).removeClass('bxs-search'); $(this).addClass('bx-search')},)

$('#add').mouseenter(
    function(){ $(this).removeClass('bx-message-add'); $(this).addClass('bxs-message-add')},)
$('#add').mouseleave(
    function(){ $(this).removeClass('bxs-message-add'); $(this).addClass('bx-message-add')},)