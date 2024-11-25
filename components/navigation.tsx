import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/account">Account</Link>
        </li>
        <li>
          <Link href="/cottages">Cottages</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
