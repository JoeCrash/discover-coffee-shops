//replaces index.js from React < v13
"use client"; //rendering as client to pass on click handler
import Image from "next/image";
import { Maven_Pro, Nunito } from "next/font/google";
import styles from "./page.module.css";

import Banner from "./components/banner/banner";
import Card from "./components/card/card";

import coffeeStores from "./data/coffee-stores.json"; //skipped getStaticProps function since we are using next.js 13+

const headlineFont = Maven_Pro({
  subsets: ["latin"],
  variable: "--headline-font",
});
const copyFont = Nunito({
  subsets: ["latin"],
  variable: "--copy-font",
});
export default function Home() {
  //console.log("styles", styles);
  const handleOnBannerBtnClick = () => {
    console.log("handleOnBannerBtnClick");
  };
  return (
    <div className={headlineFont.variable + " " + copyFont.variable }>
      <main className={styles.main}>
        <Banner
          buttonText="Find a Nearby Shop"
          handleOnClick={handleOnBannerBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            // loader={myLoader}
            src="/static/javasprinter.png"
            alt="Java Sprinter"
            width="0"
            height="0"
            sizes="75vw"
            object-fit="cover"
            style={{ width: "50%", height: "auto" }}
          />
        </div>

        {coffeeStores.length > 0 ? (
          <>
            <div className={styles.center}>
              <h2 className={styles.heading2}>NYC Coffee Shops</h2>
            </div>
          
            <div className={styles.center}>
              <div className={styles.grid}>
                {coffeeStores.map((coffeeStore) => {
                  return (
                    <Card
                      key={coffeeStore.id}
                      name={coffeeStore.name}
                      info={coffeeStore.websiteUrl || coffeeStore.address}
                      href={`/coffee-shop/${coffeeStore.id}`}
                      imgUrl={coffeeStore.imgUrl}
                    />
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </main>
    </div>
  );
}
