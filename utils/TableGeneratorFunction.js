const generatePrise = () => {
    const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let temp_prise = "";
    for (let index = 0; index < 11; index++) {
        if (index == 2){
            temp_prise += list.charAt(Math.floor(Math.random() * list.length));
        }
        temp_prise += Math.floor(Math.random() * 10);
    }
    return temp_prise;
};

const generateTravail = () => {
    let num = Math.floor(Math.random() * 1000);
    if (num % 5 == 0){
        num+=2;
    }
    return num.toString();
};

const TableGeneratorFunction = () => {
    let temp_data = [];
    const zones = ["Marketing", "Commerciale", "Comptabilité", "Juridique", "RH"];
    const localisation = ["Paris 12ème"];
    const etage = ["Etage n°1", "Etage n°2", "Etage n°3", "RDC"];
    for (let index = 0; index < 100; index++) {
        temp_data.push({
            prise: generatePrise(),
            travail: generateTravail(),
            localisation: localisation[Math.floor(Math.random() * localisation.length)],
            etage: etage[Math.floor(Math.random() * etage.length)],
            zone: zones[Math.floor(Math.random() * zones.length)],
            shutdown: "L M M J V - De 20h à " + Math.floor(Math.random() * 9) + "h",
        });
    }
    return temp_data;
};

export default TableGeneratorFunction;