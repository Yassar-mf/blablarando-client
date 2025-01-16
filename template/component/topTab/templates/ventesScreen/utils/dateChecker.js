const dateChecker = (date) => {
    const currentDate = new Date()
    const jour = new Date(date).getDate() - currentDate.getDate()
    const heure = new Date(date).getHours() - currentDate.getHours()
    const minutes = new Date(date).getMinutes() - currentDate.getMinutes()
    const secondes = new Date(date).getSeconds() - currentDate.getSeconds()
    console.log('jour :',jour,'heure :',heure,'minutes :', minutes,'secondes :',secondes)
    if(jour < 0 && heure < 0 && minutes < 0 && secondes < 0){
        return false
    } 

    return true;

}

export default dateChecker