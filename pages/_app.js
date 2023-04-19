
// import "../src/globalstyles"
import "../styles/globals.css";
import "../styles/globw.scss";
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Home from '../pages/Home'
import Layout from "../components/Layout";
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { CacheProvider, EmotionCache } from '@emotion/react';
// import theme from '../src/theme';
// import createEmotionCache from '../src/createEmotionCache';

const MyApp=(props)=> {
  const { Component , pageProps } = props;


  return (
   
<div >
      <Head>
       
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        </Head>
        

     
       <Layout/>
       
     
  </div>
  
  )
  
}




// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
 
//   pageProps: PropTypes.object.isRequired,
// };
export default MyApp;
