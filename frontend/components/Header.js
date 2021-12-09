import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Smart Shop</Link>
      </div>
      <div className="sub-bar">
        <p>Search Bar</p>
      </div>
      <Nav />
    </header>
  );
}
