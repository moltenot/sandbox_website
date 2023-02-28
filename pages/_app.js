import "@/styles/globals.css";
import { Krub, Merriweather_Sans } from "next/font/google";
const krub = Krub({
  weight: ["200", "300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"]
})
const merriweather = Merriweather_Sans({
  weight: ["300", "400", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
      :root {
          --merriweather-font: ${merriweather.style.fontFamily};
          --krub-font: ${krub.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
