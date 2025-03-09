import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Exercise Tracker</h1> {/* ✅ Title remains centered */}
      <nav className="header-nav"> {/* ✅ Ensure this class is applied */}
        <a href="/">Home</a>
        <a href="/leaderboard">LeaderBoard</a>
        <a href="/chatbot">ChatBot</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
