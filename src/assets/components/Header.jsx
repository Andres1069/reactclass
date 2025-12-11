import "./styles/header.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Mi Portafolio</h1>
      <Navigation />
    </header>
  );
}
