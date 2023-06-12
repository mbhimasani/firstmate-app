import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

// Document is only rendered in the server
export default class MainDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <>
        <Html lang={"en"} dir={"ltr"}>
          <Head />
          <body>
            <Main />
            <NextScript />
            <div id="modal-root"></div>
          </body>
        </Html>
      </>
    );
  }
}
