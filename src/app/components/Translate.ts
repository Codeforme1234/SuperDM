const axios = require('axios');

const translateText = async () => {
  try {
    const response = await axios.post("https://libretranslate.com/translate", {
      q: "hello what is happening",
      source: "auto",
      target: "fr",
      format: "text",
      alternatives: 3,
      api_key: ""
    }, {
      headers: { "Content-Type": "application/json" }
    });

    console.log(response.data);
  } catch (error) {
    console.error("Error translating text:", error);
  }
};
 export default translateText;
