const handleDelete = (navigation, route, id,array,setListeVente) => {
    const itemToDelete = array.find(item => item.id === id)
    const newArray = [...array];
    const indexTodelete = newArray.indexOf(itemToDelete)
    newArray.splice(indexTodelete,1)
    console.log('noooouveau tableau :',newArray)
    setListeVente(newArray)
    alert("deleted")

}

export default handleDelete;