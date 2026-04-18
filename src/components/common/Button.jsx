export default function Button({ children, onClick, variant = 'primary' }) {
  return <button onClick={onClick}>{children}</button>;
}
