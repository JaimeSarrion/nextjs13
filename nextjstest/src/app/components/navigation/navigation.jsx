import Link from "next/link";
import styled from "./navigation.module.css";
import Card from "../card/card";

const links = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/posts",
    label: "Posts",
  },
];

export default function Navigation({ children }) {
  return (
    <header className={styled.header}>
      <Card>
        <nav>
          <ul className={styled.navigation}>
            {links.map(({ route, label }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Card>
    </header>
  );
}
