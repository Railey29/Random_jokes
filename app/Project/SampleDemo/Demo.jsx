import React from "react";
("use-client");
import { Box, Text, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

import "bootstrap/dist/css/bootstrap.min.css";
function Demo() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    </>
  );
}

export default Demo;
