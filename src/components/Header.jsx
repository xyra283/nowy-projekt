import "../sass/components/Header.scss";
function Header() {
  return (
    <div className="navbar">
      <img src="https://via.placeholder.com/100" alt="Giphy Logo" />

      <nav>
        <ul>
          <li>
            <a className="removelinkdefault" href="#">
              Trending
            </a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
