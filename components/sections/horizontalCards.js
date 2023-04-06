import styles from "@/styles/horizontalCards.module.css";
export default function HorizontalCards({ children }) {
  return (
    <>
      <div className={styles.scrollcontainer}>
        <div className="flex-pad" />
        {children}
        <div className="flex-pad" />
      </div>
    </>
  );
}
