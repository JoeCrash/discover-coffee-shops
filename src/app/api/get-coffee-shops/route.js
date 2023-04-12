const sdk = require("api")("@fsq-developer/v1.0#2ehz6bc12len5ghzp");

sdk
  .placeSearch()
  .then(({ data }) => console.log(data))
  .catch((err) => console.error(err));
