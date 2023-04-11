//replaces _app.js from React < v13
import "./globals.css";
// import Footer from "./components/footer/footer";

//this covers the head component from next.js <= v12
export const metadata = {
  title: "Java Sprint!",
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
