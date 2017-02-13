$(document).ready(function() {

    jQuery.validator.addMethod("namePattern", function(value, element) {
      // allow any non-whitespace characters as the host part
      return this.optional( element ) || /^[A-Za-z]+$/.test( value );
  }, '<li>Please enter a valid name without numbers.</li>');

    $("#myForm").validate({
        rules:{
            first_name:{
                required:true,
                "namePattern": true
            },
            age:{
                required:true,
                digits:true,
                range:[10,100]
            },
            gender:{
                required:true,
            },
            email:{
                required:true,
                email:true
            },
            local:{
                required:true,
                minlength:5
            },
            tlf:{
                required:true,
                digits:true,
                minlength:9,
                maxlength:10
            },
        },
        messages:{
            first_name: {
                required: "<li>Please enter a name</li>"
            },
            age:{
                required:"<li>Please enter your age (please not lie)</li>",
                range: "<li>Age between 10-100. If you put 101, you can lie, either not</li>"
            },
            gender:{
                required:"<li>Please select your gender</li>"
            },
            email:{
                required:"<li>Please enter your email</li>",
                email:"<li>Please enter a correct email"
            },
            local:{
                required:"<li>Please enter your Address</li>",
                minlength:"<li>Moon?, please enter more than 5</li>"
            },
            tlf:{
                required:"<li>Please enter your telephone number </li>",
                minlength:"<li>A correct number</li>"
            }
        },
        errorElement: "div",
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        },
        submitHandler: function() {
        $("#formSubmit").submit();
        }
    });
});
