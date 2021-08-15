import "tailwindcss/tailwind.css";

import Header from "../components/Header";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
