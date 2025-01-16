const validate = (prenom,nom,email,password) => {
    const newErrors = {};
    if (prenom.length < 2) {
      newErrors.prenom = "Le nom d'utilisateur doit contenir au moins 2 caractères";
    }
    if (nom.length < 2) {
      newErrors.nom = "Le nom d'utilisateur doit contenir au moins 2 caractères";
    }
    if (!email.includes('@')) {
      newErrors.email = "Adresse e-mail invalide";
    }
    if (password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    }
    return newErrors;
  };

  export default validate;