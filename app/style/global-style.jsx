// GlobalStyle.js

import React from "react";

const GlobalStyle = () => (
  <>
    <style jsx global>{`
      /* Reset margin and padding for html and body */
      html,
      body {
        margin: 0;
        padding: 0;
      }

      /* Ensure no padding at the top */
      body {
        padding-top: 0;
        background-color: white;
      }
    `}</style>
  </>
);

GlobalStyle.displayName = "GlobalStyle";

export default GlobalStyle;
