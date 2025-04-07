import obtenirPhoto from './obtenirPhoto';
const fetchUri = async (id = 'avatar/mmrddmrff9ezsogu4vjm',setUriImage) => {
  const mUri = await obtenirPhoto(id);
  console.log("m uri :", mUri);
  setUriImage(mUri);
};

export default fetchUri;