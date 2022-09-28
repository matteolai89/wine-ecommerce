import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { React, useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <StateContext>
      {loading === true ? (
        <div className="spinner">
          <ClipLoader color="#fac160" loading={loading} size={100} />
        </div>
      ) : (
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      )}
    </StateContext>
  );
};

export default MyApp;
