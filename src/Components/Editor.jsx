import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools.js";

const Heading = styled(Box)({
  background: "#1d1e22",
  display: "flex",
  padding: 5,
});

const Header = styled(Box)({
  display: "flex",
  background: "black",
  color: "#AAAEBC",
  justifyContent: "space-between",
  fontWeight: 700,
});

const Container = styled(Box)({ flexGrow: 1, flexBasic: 0 });

const Editor = ({ heading, icon, color, value, onChange, name }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (value) => {
    onChange(value)
  };

  const changeView=()=>{
    setOpen((prev) => !prev)
  }

  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading>
          <Box
            component="span"
            style={{
              background: color,
              color: "#000",
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={changeView}
        />
      </Header>
      <AceEditor
        value={value}
        highlightActiveLine={true}
        onChange={handleChange}
        mode= {name}
        theme="twilight"
        name="html-editor"
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
      />
    </Container>
  );
};

export default Editor;
