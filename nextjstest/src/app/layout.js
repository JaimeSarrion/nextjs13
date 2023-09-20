import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with next 13</title>
      </head>
      <body className={inter.className}>
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
        {children}
      </body>
    </html>
  );
}
