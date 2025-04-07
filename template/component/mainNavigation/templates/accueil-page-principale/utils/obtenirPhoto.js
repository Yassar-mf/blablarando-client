
const CLOUD_NAME = 'di2cd2b6l';

const obtenirPhoto = async (publicId, options = {}) => {
  const { width, height, crop = 'scale' } = options;
  let baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/`;

  if (width || height) {
    baseUrl += `w_${width},h_${height},c_${crop}/`;
  }

  return `${baseUrl}${publicId}`;
};

export default obtenirPhoto