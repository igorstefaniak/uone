
$('#alert').css('display', 'none')

$('#search-input').focus(
  function(){
    $('#dropdown').removeClass('_vanish');
  }
)

$('#search-input').focusout(
  function(){
    $('#dropdown').addClass('_vanish');
  }
)

function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    alert = document.getElementById("alert")
    div = document.getElementById("list");
    a = div.getElementsByTagName("li");
    n = 0;
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        alert.style.display = "none";
      } 
      else {
        a[i].style.display = "none";
        n++;
          if(n == a.length){
            alert.style.display = "";
          }
      }
    }
}

function fast_search() {

var pos = $('#search-input');
var left = pos.offset().left;
var width = pos.width() + 48 + 'px';

$('#dropdown').css({
  position:'fixed',
  left:left,
  width:width
});

}


window.addEventListener('resize', function(event) {
  fast_search();
}, true);
