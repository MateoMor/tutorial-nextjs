import { montserrat } from "./ui/fonts";
import "./ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer>
          Hecho con amor por a gente de Vercel
        </footer>
      </body>
    </html>
  );
}
