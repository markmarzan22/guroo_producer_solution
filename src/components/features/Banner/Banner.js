import styles from './Banner.module.css';

const Banner = ({ data, bannerStyle, visible = true }) => {
    const { title, description, asset } = data;

    return (
        <div className={`${styles.bannerWrapper} ${styles[bannerStyle]} ${visible ? styles.visible : ''}`}>
            <div className={styles.banner}>
                <div className={styles.icon}>
                    <img src={asset} alt={`${title} graphic`} />
                </div>
                <div className={styles.content}>
                    <h1>{title}</h1>
                    <div>{description}</div> {/* !!TODO: Format HTML correctly*/}
                </div>
            </div>
        </div>
    );
};

export default Banner;
