import "./globals.css";
import Navigation from "../components/navigation/navigation";
import Card from "../components/card/card";
import { colors } from "../utils/theme";
import styled from "./rootLayout.module.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with next 13</title>
      </head>
      <body>
        <Card background={colors.red_100} borderColor={colors.white}>
          <div className={styled.content}>
            <Navigation />
            {children}
          </div>
        </Card>
      </body>
    </html>
  );
}
