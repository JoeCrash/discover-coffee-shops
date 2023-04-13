
import { NextResponse } from "next/server";
import { useSearchParams } from "next/navigation";
//

export const GET = async (request) => {
  //console.log("request", request);

  const { searchParams } = new URL(request.url); //get the params sent in the url
  const test = searchParams.get('test')
  console.log("searchParams test", test);
  const sdk = require("api")("@fsq-developer/v1.0#2ehz6bc12len5ghzp");

  sdk.auth(process.env.FOURSQUARE_API_KEY);
  return sdk
    .placeSearch({
      query: "coffee",
      ll: "40.73156878703941%2C-73.98953038668341",
      radius: "10000",
      limit: "9",
      open_now: "true",
      sort: "DISTANCE",
    })
    .then(({ data }) => {
      console.log("data", Object.keys(data));
      const response = data.results.map((shop) => {
        //console.log("shop", shop);

        const id = shop.fsq_id;
        const name = shop.name;
        const address = shop.location.formatted_address;
        const categories = shop.categories.map((x) => x.name).join(", ");
        const distance = shop.distance;
        return { id, name, address, categories, distance };
        console.log("shop", id, name, address, categories, distance);
      });
      //d = data; //instead of this, parse out what we need and return only that
      return NextResponse.json(response);
    })
    .catch((err) => console.error(err));
};
