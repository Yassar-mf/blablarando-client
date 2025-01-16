const handleSaveDate = (date,heure,setFiltre) => {

    const dateTime = {
        date: date,
        heure: heure
    }

    setFiltre(dateTime)

    return dateTime

}

export default handleSaveDate