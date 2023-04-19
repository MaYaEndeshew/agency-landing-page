import React from 'react';
import Document, { Html,Head, Main, NextScript } from 'next/document';
import  {ServerStyleSheet} from 'styled-components';
// import { ServerStyleSheets } from '@mui/material';
// import theme from '../src/theme';

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const styledComponentsSheet = new ServerStyleSheet()
   
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => props => styledComponentsSheet.collectStyles((<App {...props} />))
          })
        const initialProps = await Document.getInitialProps(ctx)
        return {
          ...initialProps,
          styles: (
            <React.Fragment>
              {initialProps.styles}
      
              {styledComponentsSheet.getStyleElement()}
            </React.Fragment>
          )
        }
      } finally {
        styledComponentsSheet.seal()
      }
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
        <meta name="theme-color"  />
                  <link rel="shortcut icon" href="/static/favicon.ico" />
                  <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                  />
                  <meta name="emotion-insertion-point" content="" />
                  {this.props.emotionStyleTags}
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
