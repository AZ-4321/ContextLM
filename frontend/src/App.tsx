import { useState } from 'react'
import { Button } from '@mui/material';

function App() {
  

  return (
    <>
     <div>Welcome to ContextLM</div>
     <div>Please accept Terms of Service before using</div>
     <div>ContextLM is a web application inspired by NotebookLM, which allows users to upload 
      research papers and ask the app any questions for context regarding their paper. This app is not a
      replacepemtn or to be compete with NotebookLM but for learning purposes. Even though no data will be saved,
      please do not upload any document with your personal information or anyone's on it. Also please do not upload
      any document containing any innapropriate content. All documents to be uploaded should be an approved research paper
      published by credtable sites such as IEEE. 

      When chatting with the chatbot, only ask questions regarding the research paper uploaded as it is programmed to read the paper.
      Do not ask any personal questions or anything else unrelated to the specific paper. Do not use any vulgar or extreme language.
      Upon leaving this website, any information provided to the chatbot will not be saved and be erased.

      If you accept these tersms and serves please click the Agree buttton
     </div>

     <div>
      <Button variant="contained">
        I Accept
      </Button>
     </div>
    </>
  )
}

export default App
