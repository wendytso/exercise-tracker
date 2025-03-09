import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>My App</h1>
      <nav>
        <a href="#">Home</a>
        <a href="/leaderboard">LeaderBoard</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
