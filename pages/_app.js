import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps, countryPages }) {
  return (
    <Layout countryPages={countryPages}>
      <Component {...pageProps} />
    </Layout>
  );
}
