export default function FooterList({ headerText, children }) {
  return (
    <div>
      <h4>{headerText.toUpperCase()}</h4>
      {children}
    </div>
  );
}
