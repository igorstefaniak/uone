$('#bookmarks').mouseenter(
    function(){ $(this).removeClass('bx-bookmark-alt'); $(this).addClass('bxs-bookmark-alt')},)
$('#bookmarks').mouseleave(
    function(){ $(this).removeClass('bxs-bookmark-alt'); $(this).addClass('bx-bookmark-alt')},)

$('#love').mouseenter(
    function(){ $(this).removeClass('bx-heart'); $(this).addClass('bxs-heart'); $(this).attr('style', 'color:#e91e43');},)
$('#love').mouseleave(
    function(){ $(this).removeClass('bxs-heart'); $(this).addClass('bx-heart'); $(this).attr('style', 'color:#ffffff');},)

$('#search').mouseenter(
    function(){ $(this).removeClass('bx-search'); $(this).addClass('bxs-search')},)
$('#search').mouseleave(
    function(){ $(this).removeClass('bxs-search'); $(this).addClass('bx-search')},)

$('#add').mouseenter(
    function(){ $(this).removeClass('bx-message-add'); $(this).addClass('bxs-message-add')},)
$('#add').mouseleave(
    function(){ $(this).removeClass('bxs-message-add'); $(this).addClass('bx-message-add')},)