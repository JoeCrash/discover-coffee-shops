import styles from './banner.module.css';
const Banner = (props) => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.title1}>Java</span>
          <span className={styles.title2}>Sprint!</span>
        </h1>
        <p className={styles.subTitle}>Find a coffee shop you can run over to!</p>
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
        </div>
        
      </div>
    );
}

export default Banner;