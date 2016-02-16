$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var duration = $("select#duration").val();
    var environment = $("select#environment").val();
    var type = $("select#type").val();
    var status = $("select#status").val();
    var language = $("select#language").val();

    var location = (duration + environment + type + status + language);

    if ((duration === '2week') && (environment ==='nature') && (type === 'adventure') && (status === 'single') && (language === 'english')) {
    $("#tulum").show();
    }

    if ((duration === '>2week') && (environment === 'nature') && (type === 'adventure') && (status === 'couple') && (language === 'english')) {
    $("#cairns").show();
    }

    event.preventDefault();
  });
});
