// @ts-check

const getAPI = (city, limit = 7, format = 'json', language = 'en-US') => {
  const host = 'https://nominatim.openstreetmap.org/';
  const props = `city=${city}&format=${format}&limit=${limit}&accept-language=${language}`;

  return [host, props].join('?');
};

export default getAPI;
