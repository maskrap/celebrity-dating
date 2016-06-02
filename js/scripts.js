$(document).ready(function() {
  $("form#questions").submit(function(event));

    var name = $("#name").val();
    var age = $("#age").val();
    var gender = $("#gender").val();

    if (age < 18) {
      $('#underage').show();
    }

    else if (age > 40 && male)  {
      $('#jeff').show();
    }

    else if (age <= 40 && male)  {
      $('#michael').show();
    }

    else if (age <= 40 && female)  {
      $('#emma').show();

    else if (age > 40 && female || name === Sam)  {
      $('#helen').show();

    else {
      $('#horse').show();
    }



//  var result = $("Your name is " + name + " and you are " + age + " years old and interested in" + "gender")
//  $("#results").text(result);

    $("#results").show();

  });
  event.preventDefault();
});
