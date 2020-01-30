/**
 * @author Julian Rehse
 * @version 1.0
 * funktion zum ausklappen des "Liste" Buttons
 */
$('document').ready(function(){

	$('#ListeLink').hide();
	$('#bol1').click(function(){
	$('#ListeLink').toggle('slow');
});
	});

/**
 * @param itemListe
 * @param gesamt
 * @param farbe
 * 
 * Klasse zur definition aller Funktionabläufe
 */
class Alles{
    constructor(itemListe, gesamt, farbe) {
        this.gesamt = gesamt;
        this.itemListe = itemListe;
        this.itemID = 0;
        this.farbe = farbe;
}
    
    /**
     * allgemeine Funktion zum hinzufügen der Werte in das itemListe  Array
     * @param {String} Name 
     * @param {Date} Datum 
     * @param {Number} Wert 
     * @returns kein returnwert
     */
		leseWert(Name, Datum, Wert) {
                this.Name = Name;
                this.Datum = Datum;
                this.Wert= Wert;
    

			if(Name === '' || Datum === '' || Wert === '' || Wert < 0) {
				alert("Alle Felder müssen ausgefüllt und positiv sein");
            	} else {
            	let preisA = parseFloat(Wert);

            let ausgaben = {
                id: this.itemID,
                titel: Name,
                preis: preisA,
                datum: Datum
            }

            this.itemID ++;
            this.itemListe.push(ausgaben);
            this.erweiternListe(ausgaben);
            this.berechne();

            
   
            }
	 }

  /**
   * allgemeine Funktion zum hinzufügen einer Eingabe in Form eines HTML-Elements
   * @param {{id: number, titel: string, preis: number, datum: Date}}ausgaben 
   * @return kein returnwert
   */
 erweiternListe(ausgaben){


        const divElement = document.createElement('div');
      //  divElement.classList.add('expenseList'); cssKlasse hinzufügen

        
       if(this.farbe == true){
        divElement.innerHTML = 
        `<div class="container container-1" ><div class="box-1">${ausgaben.datum}</div>
        <div class="box-2">${ausgaben.titel}</div>
        <div class=""box-3">${ausgaben.preis}€</div></div>`;
       }else{
        divElement.innerHTML = 
        `<div class="container container-2" ><div class="box-1">${ausgaben.datum}</div>
        <div class="box-2">${ausgaben.titel}</div>
        <div class=""box-3">-${ausgaben.preis}€</div></div>`;
       }
        $("#list").append(divElement);
    }
    
    /**
     * allgemeine Funktion zum zusammenrechnen der Eingaben
     *
     * @returns {number}
     */
   berechne() {
        
        let total = 0;

        if(this.itemListe.length > 0){
            total = this.itemListe.reduce(function(ages, aje){//Achtung acc?
                ages = ages + aje.preis;
                return ages;
            }, 0)
        }
        this.gesamt.text(total);

        return total;
    }
}

