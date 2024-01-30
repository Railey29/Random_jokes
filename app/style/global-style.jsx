// global-style.js

// Assign the arrow function to a variable before exporting
const globalStyle = () => (
  <style jsx global>{`
    body {
      padding: 0;
      margin: 0;
      background-color: white;
    }
  `}</style>
);

// Add a display name to your React component
globalStyle.displayName = "GlobalStyle";

export default globalStyle;
