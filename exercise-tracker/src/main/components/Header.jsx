import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Exercise Tracker</h1> {/* ✅ Separate title */}
      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="/leaderboard">LeaderBoard</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
