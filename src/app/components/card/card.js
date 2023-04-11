import Link from "next/link";
import Image from "next/image";

import styles from "./card.module.css";
const Card = (props) => {
    return (
      <Link className={styles.cardLink} href={props.href}>
        <div className={styles.card}>
          <h2 className={styles.cardHeader}>{props.name}</h2>
          <Image
            className={styles.cardImage}
            src={props.imgUrl}
            width={260}
            height={160}
            alt={"Image of " + props.name}
          />
          <p className={styles.cardInfo}>{props.info}</p>
        </div>
      </Link>
    );
}

export default Card;