// @ts-check

const getAPI = (city, format = 'json', limit = 5, language = 'en-US') => {
  const host = 'https://nominatim.openstreetmap.org/';
  const props = `city=${city}&format=${format}&limit=${limit}&accept-language=${language}`;

  return [host, props].join('?');
};

export default getAPI;
