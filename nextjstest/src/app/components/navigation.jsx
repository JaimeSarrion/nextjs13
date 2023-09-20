import Link from "next/link";
const links = [
  {
    route: "/",
    label: "home",
  },
  {
    route: "/about",
    label: "about",
  },
];

export default function Navigation({ children }) {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ route, label }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
