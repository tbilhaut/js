/*exo10 */

		
		var maDiv = document.getElementById("maDiv");
        var divDives = document.querySelector(".Dives");

		maDiv.addEventListener("click", function() {
			
			if (maDiv.className == "rouge") {
				maDiv.className = "vert";
			} else {
				maDiv.className = "rouge";
			}

		});

		divDives.addEventListener("mouseover", function() {
			divDives.style.visibility = "hidden";

		});

		divDives.addEventListener("mouseout", function() {
			divDives.style.visibility = "visible";

		});


var  MaDiv  =  document . getElementById ( "MaDiveNum1" ) ;

Madiv . addEventListener ( "click" ,  ProceUnedureQuiChangeLetext ) ;

function  ProceUnedureQuiChangeLetext ( evenement ) {
    événement . cible . innerHTML  =  "On m'a cliqué dessus" ;
}
