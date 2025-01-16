const validateToken = async (token) => {
    try {
      const response = await axios.get(`https://votreapi.com/modificationdemotdepasse?token=${token}`);
      if (response.data.success) {
        alert('Utilisateur trouvé');
        // Afficher le formulaire de réinitialisation avec les infos de l'utilisateur
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert('Token invalide ou expiré.');
    }
  };

export default validateToken;