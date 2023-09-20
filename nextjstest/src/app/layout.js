import Navigation from "./components/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first app with next 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
