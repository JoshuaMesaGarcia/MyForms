toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    initApply = function() {
        var firstConnection;
        var data;
        var secondConnection;
        var dataInsert;
        var valueJson;
    };

    initApply.prototype.connection = function() {
        firstConnection = new XMLHttpRequest();
        firstConnection.onreadystatechange = function() {
            initApply.prototype.connectionReady();
        };
        firstConnection.open('GET', 'External/pagina1.php', true);
        firstConnection.send();
    };

    initApply.prototype.connectionReady = function() {
        if (firstConnection.readyState == 4) {
            data = JSON.parse(firstConnection.responseText);
            toastr.success("Success", "The connection is okay");
            initApply.prototype.chargeDB();
        }
    };

    initApply.prototype.chargeDB = function() {
      var i;
      var varMyTable="<tr><th>Id</th><th>Name</th><th>Age</th><th>Gender</th><th>Email</th><th>Address</th><th>TLF</th></tr>";
      var text = "";
      for(i=0; i < data.length; i++){
         text +=
         "<tr><td>" + data[i].id + "</td>" +
         "<td>" + data[i].nombre + "</td>" +
         "<td>" + data[i].edad + "</td>" +
         "<td>" + data[i].genero + "</td>" +
         "<td>" + data[i].email + "</td>" +
         "<td>" + data[i].localidad + "</td>" +
         "<td>" + data[i].telefono + "</td></tr>";
      }
      document.getElementById("myTable").innerHTML = varMyTable + text;
    };

    $("#formSubmit").click(function(){
        var userName = $("#first_name").val();
        var userAge = $("#age").val();
        var userGender = $("#gender").val();
        var userEmail = $("#email").val();
        var userAddres = $("#local").val();
        var userTlf = $("#tlf").val();

        var userArray = [
          {"nombre":userName,"edad":userAge,"genero":userGender,"email":userEmail,"localidad":userAddres,"telefono":userTlf}
        ];

        valueJson = JSON.stringify(userArray);
        initApply.prototype.connection2(valueJson);

    });
    initApply.prototype.connection2 = function(valueJson) {
      secondConnection = new XMLHttpRequest();
      secondConnection.open('GET', 'External/pagina2.php?param='+ valueJson, true);
      secondConnection.send();
    };
