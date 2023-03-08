import styles from "@/styles/horizontalCards.module.css";
export default function HorizontalCards({ children, cards }) {
  return (
    <>
      <div className={`${styles.textcontainer} cont-md`}>{children}</div>
      <div className={styles.scrollcontainer}>
        <div className="flex-pad" />
        {cards}
        <div className="flex-pad" />
      </div>
    </>
  );
}
