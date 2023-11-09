// const express = require('express');
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

const CHATGPT_KEI= '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';

app.use(express.json());

app.post('/chatgpt', async(req, res) => {
     console.log(req.body);
        let chatGptResponse =  await callChatGpt(req.body.message);
        console.log(chatGptResponse);
        res.json({
                "response": chatGptResponse
            });
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})




async function  callChatGpt(prompt) {
     
    const bodyRequest = {
        model:  "gpt-3.5-turbo",
        max_tokens: 2000,
        messages:[
            {
                role: "user", content: prompt
            }
        ]
    }
    const request = { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CHATGPT_KEI}`
        },
        body: JSON.stringify(bodyRequest)
        
    }  

  const respuesta =   await fetch('https://api.openai.com/v1/chat/completions', request)
   
  const json = await respuesta.json(); 
   return json.choices[0].message.content;

}

