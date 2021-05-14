import React from "react";
import marked from "marked";
import {
  Text,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const Output = (file) => {
  const getMarkdownText = () => {
    var rawMarkup = marked("_Nothing_ to show ");
    if (file.file) {
      rawMarkup = marked(file.file);
      // console.log("file is", file);
    } else {
      rawMarkup = marked("_Nothing_ to show ");
    }
    return { __html: rawMarkup };
  };
  return (
    <Box flex="1" bg="white" border="1px" borderColor="gray.10" p={5}>
      <Tabs>
        <TabList>
          <Tab>Output</Tab>
          <Tab>Preview</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text whiteSpace="pre-line">{file.file}</Text>
          </TabPanel>
          <TabPanel>
            <div dangerouslySetInnerHTML={getMarkdownText()} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
export default Output;
