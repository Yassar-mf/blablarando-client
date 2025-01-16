const handleDelete = (navigation, route, id,array,setListeAchat) => {
    const itemToDelete = array.find(item => item.id === id)
    const newArray = [...array];
    const indexTodelete = newArray.indexOf(itemToDelete)
    newArray.splice(indexTodelete,1)
    console.log('noooouveau tableau :',newArray)
    setListeAchat(newArray)
    alert("deleted")

}

export default handleDelete;