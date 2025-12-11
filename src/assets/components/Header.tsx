import Navigation from "./Navigation";
import "./styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Mi Portfolio</div>
      <Navigation />
    </header>
  );
}