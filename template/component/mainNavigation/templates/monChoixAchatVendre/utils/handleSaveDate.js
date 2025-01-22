const handleSaveDate = (date,heure,setFiltre) => {

    const dateTime = {
        date: date,
        heure: heure
    }
console.log('dddatte time : ',dateTime)
    setFiltre(dateTime)

    return dateTime

}

export default handleSaveDate