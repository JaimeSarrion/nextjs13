import Link from "next/link";
import styled from "./navigation.module.css";
import Card from "../card/card";
import { colors } from "../../../utils/theme";
import { StyledH3 } from "../../../utils/fonts";

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
      <Card background={colors.red_400}>
        <nav>
          <ul className={styled.navigation}>
            {links.map(({ route, label }) => (
              <li key={route}>
                <Link href={route}>
                  <StyledH3>{label}</StyledH3>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Card>
    </header>
  );
}
