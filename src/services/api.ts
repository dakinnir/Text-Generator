import axios from 'axios';

export const fetchContentData = (contentCount: Number, contentType: String) => {
  console.log(`https://baconipsum.com/api/?type=all-meat&paras=${contentCount}&format=${contentType}`)
  const options = {
    method: "GET",
    url: `https://baconipsum.com/api/?type=all-meat&paras=${contentCount}&format=${contentType}`,
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.error(error);
    });
};