const handleSubmit = async (data,setErrors,postInscription,validate,setMessageServeur) => {
    const { prenom, nom, email, motdepasse, selectedGenre,description, ville,rue, codePostale,telephone,setTelephone,pays } = data
    console.log('inscription email :',data)
    const validationErrors = validate(prenom,nom,email,motdepasse);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      // Vous pouvez ajouter ici la logique pour envoyer les données au serveur
      const message = await postInscription({ prenom, nom, email, motdepasse, selectedGenre,description, ville,rue, codePostale,telephone,setTelephone,pays })
      console.log('messssage :::',message);
      setMessageServeur(message.data.message)
    }
  };

  export default handleSubmit