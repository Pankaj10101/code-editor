import { Box, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context/DataProvide";

const Container = styled(Box)({
  height: '41vh',
  border:'2px solid black',
  marginTop: '0.5rem' 
});

const Result = () => {
  const [src, setSrc] = useState('');

  const { html, css, javascript } = useContext(DataContext);


  useEffect(() => {
    const time = setTimeout(() => {
      const srcCode = `
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>
        </html>
      `;
      setSrc(srcCode);
      console.log(src)
    }, 1000);

    return () => clearTimeout(time);
  }, [html, css, javascript]);

  return (
    <Container  >
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts allow-same-origin"
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
