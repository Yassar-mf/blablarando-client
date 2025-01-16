const fetchData = async (setListeAchat,getListeCommande) => {
    const data = await getListeCommande()
    setListeAchat(data)
}

export default fetchData;