//% color="#00B3E6" icon="\u26A1" weight=100
namespace controlloPin {

    /**
     * Accende il pin selezionato (scrive valore alto).
     * @param pin Il pin da accendere, ad esempio: P0
     */
    //% block="accendi il pin %pin"
    //% pin.shadow="digitalPin"
    export function accendiPin(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    /**
     * Spegne il pin selezionato (scrive valore basso).
     * @param pin Il pin da spegnere, ad esempio: P0
     */
    //% block="spegni il pin %pin"
    //% pin.shadow="digitalPin"
    export function spegniPin(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }
}
