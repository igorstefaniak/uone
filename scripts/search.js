$('#dropdown').addClass('_vanish');
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
    div = document.getElementById("list");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }