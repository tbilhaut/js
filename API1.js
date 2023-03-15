 //EXO1 API
 
 function mafunction(){
        //pour appeler une API on utilise la méthode fetch()
        fetch('http://192.168.64.140/theo/DonneMoi.php').then(
        (resp) => resp.json())
        .then(function(data) {
        // data est la réponse http de notre API.
        console.log(data);
        UpdateDiv("arenne",data[0]);
        })
        .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log(error);
        });
       }
       function UpdateDiv(id,text){
        var e = document.getElementById(id).innerHTML = text;
       }
