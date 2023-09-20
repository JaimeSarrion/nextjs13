import Link from "next/link";
import styled from "./navigation.module.css";

const links = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about",
    label: "About",
  },
];

export default function Navigation({ children }) {
  return (
    <header className={styled.header}>
      <nav>
        <ul className={styled.navigation}>
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
