const fetchData = async (setListeVente,getListeVente) => {
    const data = await getListeVente()
    setListeVente(data)
}

export default fetchData;