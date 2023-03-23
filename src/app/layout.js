//replaces _app.js from React < v13
import "./globals.css";
// import Footer from "./components/footer/footer";

export const metadata = {
  title: "Java Sprint",
  description: "Discover your local coffee shops!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
