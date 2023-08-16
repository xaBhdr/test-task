const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/ask', (req, res) => {
    const userRequest = req.body.request;
    console.log('poluchen ', userRequest);
    const response = { userRequest };
    res.json({ response });

})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


