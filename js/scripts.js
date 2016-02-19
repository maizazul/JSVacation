$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var duration = $("select#duration").val();
    var environment = $("select#environment").val();
    var type = $("select#type").val();
    var status = $("select#status").val();
    var language = $("select#language").val();

    var location = (duration + environment + type + status + language);

    if ((duration === '2week')) {
    $("#tulum").show();
    }

    if ((duration === '>2week') && (language === 'english')) {
    $("#cairns").show();
    }

    if ((duration === '>2week') && (language === 'foreign')) {
    $("#turkey").show();
    }

    event.preventDefault();
  });
});
