import React, { useState } from 'react';
import validate from './utils/validerCompte';
import styles from './styles';
import postInscription from './utils/postInscription';
import ListeCustomInput from './templates/listeCustomInput'
const RegisterPage = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motdepasse, setMotdepasse] = useState('');
  const [errors, setErrors] = useState({});
  const [messageServeur,setMessageServeur]=useState('')
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [pays, setPays] = useState('');
  const [ville, setVille] = useState('');
  const [rue,setRue] = useState('');
  const [telephone,setTelephone] = useState('');
  const [codePostale,setCodePostale] = useState('');
  const [description,setDescription] = useState('');
  
  return (

    <ListeCustomInput
      styles={styles}    
      prenom={prenom}    setPrenom={setPrenom}
      nom={nom}    setNom={setNom}
      email={email}    setEmail={setEmail}
      motdepasse={motdepasse}   setMotdepasse={setMotdepasse}
      errors={errors}     setErrors={setErrors}
      postInscription={postInscription}
      validate={validate}
      setMessageServeur={setMessageServeur}
      messageServeur={messageServeur}
      selectedGenre={selectedGenre} 
      setSelectedGenre={setSelectedGenre}
      ville={ville}
      setVille={setVille}
      rue={rue}
      setRue={setRue}
      codePostale={codePostale}
      setCodePostale={setCodePostale}
      telephone= {telephone}
      setTelephone={setTelephone}
      pays={pays}
      setPays={setPays}
      description={description}
      setDescription={setDescription}
    />
          
  );
};

export default RegisterPage;