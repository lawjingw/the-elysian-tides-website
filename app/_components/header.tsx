import Logo from "./logo";
import Navigation from "./navigation";

function Header() {
  return (
    <header className="border-primary-900 border-b px-8 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
