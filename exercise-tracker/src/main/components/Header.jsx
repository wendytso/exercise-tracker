import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Enduro</h1>
      <nav className="header-nav">
        <a href="/main">Home</a>
        <a href="/leaderboard">LeaderBoard</a>
        <a href="/chatbot">ChatBot</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
