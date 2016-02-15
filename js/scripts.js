$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var duration = ($("input#age").val());
    var environment = $("select#gender").val();
    var type = $("").val();
    var status = $("").val();
    var language = $("").val();

    var location = (100 - age) * 3;
    if (gender === 'male' && age < 26) {
      quote += 50;
    }

    $("#spot").text(location);
    $("#location").show()

    event.preventDefault();
  });
});
