"use-client";
import { Box, Text, useColorMode, Button } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";

function DemoSample() {
  return (
    <>
      <div className="container">
        <div className="alert alert-warning">
          <p
            className="text-muted "
            style={{
              position: "absolute",
              top: "500px",
              left: "-10%",
              margin: "10px",
            }}
          >
            Hello
            <abbr>
              <mark className="text-success d-inline p-2">Railey</mark>
            </abbr>
          </p>
          <p
            style={{ position: "absolute", left: "10%" }}
            className="text-success d-inline p-2"
          >
            World
          </p>
        </div>
      </div>
      <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
      <Box
        w="100%"
        h="200px"
        bgGradient="radial(gray.300, yellow.400, pink.200)"
      />
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>

      <Text textAlign="center">Hello My Friend</Text>
    </>
  );
}

export default DemoSample;
