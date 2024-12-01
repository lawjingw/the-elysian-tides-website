export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <a href="/rooms" className="transition-colors hover:text-accent-400">
            Rooms
          </a>
        </li>
        <li>
          <a href="/about" className="transition-colors hover:text-accent-400">
            About
          </a>
        </li>
        <li>
          <a
            href="/account"
            className="transition-colors hover:text-accent-400"
          >
            Guest area
          </a>
        </li>
      </ul>
    </nav>
  );
}
