import { UserProvider } from "./contexts/UserContext";
import "./global.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <UserProvider>{children}</UserProvider>
        </Providers>
      </body>
    </html>
  );
}
