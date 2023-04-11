//"use client";
import { notFound } from "next/navigation"; //next.js 13+ 404 error setup

import Link from "next/link";
import coffeeStores from "../../../data/coffee-stores.json"; //skipped getStaticProps function since we are using next.js 13+

const CoffeeShop = (props) => {
    console.log("coffeeshop props", props);
    const {id} = props.params;
    const result = coffeeStores.find((store)=>{
      return store.id.toString() === id;
    });

    console.log("find shop", result);

    if (!result) {
      notFound();
    }

    return (
      <div>
        Coffee Shop Page {id}
        <Link href="/">Back to Home Page</Link>
        <Link href="/coffee-shop/dynamic">Dynamic Page</Link>
      </div>
    );
};

export default CoffeeShop;
