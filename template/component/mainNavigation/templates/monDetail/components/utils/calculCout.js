const monCalculCout = (qte,prix) => {

    const multiplesEntier = isNaN(qte) == false && isNaN(prix) == false && qte.length > 0

    const coutHT = multiplesEntier ? parseFloat(qte)*parseFloat(prix) : 0 // la TVA de 20%
    const coutTTC = multiplesEntier ? parseFloat(qte)*parseFloat(prix)*1.2 : 0 // la TVA de 20%

    return coutHT;

}

export default monCalculCout;