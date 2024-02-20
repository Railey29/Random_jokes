// Import necessary modules
"use-client";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Random Jokes",
  description: "Isang halimbawa ng website description.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
