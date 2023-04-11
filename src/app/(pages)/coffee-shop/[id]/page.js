"use client";
import { notFound } from "next/navigation"; //next.js 13+ 404 error setup
import Link from "next/link";
import Image from "next/image";
import coffeeStores from "../../../data/coffee-stores.json"; //skipped getStaticProps function since we are using next.js 13+
import styles from "../coffee-shop.module.css";

export function generateMetadata({ params }) {
  const { id } = params;
  const shop = getShop(id);
  const title = shop ? shop.name : "404 error!";
  return {
    title: title,
  };
}

const getShop = (id) => {
  //moved this out of CoffeeShop, DRY
  return coffeeStores.find((store) => {
    return store.id.toString() === id;
  });
};

const CoffeeShop = (props) => {
  console.log("coffeeshop props", props);
  const { id } = props.params;
  const result = getShop(id);

  if (!result) {
    notFound();
  }

  console.log("find shop", result);
  const { address, name, neighbourhood, imgUrl } = result;

  const handleUpvoteButton = (props) => {
    console.log("upvote mE", props);
  };
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back to Home Page</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width="350"
            height="350"
            className={styles.storeImg}
            alt={name}
          />
        </div>
        <div className={"glass " + styles.col2}>
          <div className={styles.iconWrapper}>
            <Image
              src={"/static/icons/places.svg"}
              width="24"
              height="24"
              alt="icon"
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={"/static/icons/nearMe.svg"}
              width="24"
              height="24"
              alt="icon"
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src={"/static/icons/star.svg"}
              width="24"
              height="24"
              alt="icon"
            />
            <p className={styles.text}>{1}</p>
          </div>
          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Upvote!
          </button>
        </div>
      </div>

      {/* <Link href="/coffee-shop/dynamic">Dynamic Page</Link> */}
    </div>
  );
};

export default CoffeeShop;
