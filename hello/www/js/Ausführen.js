/**
 * @author Julian Rehse
 * @version 1.0
 * Klasse zum ausführen der Funktionen
 */
class Ausführen extends Alles{
    constructor(){
        super();
        this.gesamtAusgaben = $("#GesamtAusgaben");
        this.gesamtEinkommen = $("#GesamtEinkommen");
        this.gesamtBudget = $('#GesamtBudget')
        this.itemListeAusgaben = [];
        this.itemIDAusgaben = 0;
        this.itemListeEinkommen = [];
        this.itemIDEinkommen = 0;
    }
    /**
     * funktion zum berechnen des Budgets
     */

    berechneBudget() {

        let ausgaben = parseFloat(this.gesamtAusgaben.text());
		let einkommen = parseFloat(this.gesamtEinkommen.text());
		const budget = einkommen - ausgaben;

        this.gesamtBudget.text(budget);



    }

    /**
     * funktion zum berechnen und einlesen der Ausgaben über die Klasse Alles
     */
    berechneAusg(){
            const berechneAus = new Alles(this.itemListeAusgaben, this.gesamtAusgaben, false);
            berechneAus.leseWert($('#AusgabeName').val(),$('#AusgabeDatum').val(),$('#AusgabePreis').val());

            this.berechneBudget();
    }

    /**
     * funktion zum berechnen und einlesen des Einkommens über die Klasse Alles
     */
    berechneEink(){
        const berechneEin = new Alles(this.itemListeAusgaben, this.gesamtEinkommen, true);
            berechneEin.leseWert($('#EinkommenName').val(),$('#EinkommenDatum').val(),$('#EinkommenPreis').val());
            this.berechneBudget();
    }
   
}