import React from "react";
import ReactDOM from "react-dom/client";
import Favicon from "react-favicon";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { ParallaxProvider } from "react-scroll-parallax";
import Banner from "./components/ui/banner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Favicon url="https://www.icegif.com/wp-content/uploads/2022/12/icegif-286.gif" />
      <ParallaxProvider>
        <Banner />
        <App />
      </ParallaxProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
