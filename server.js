const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the CORS package
const app = express();
const port = 5000;

const apiKey = 'E8vmRHI08HUGzeks2fdlqZcUCQh6AhKC';

// Use the CORS middleware
app.use(cors());

app.use(express.json());

app.get('/server', async (req, res) => {
  try {
    // Define the API endpoint with the API key as a query parameter
    const apiUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=' + apiKey;
    const response = await axios.get(apiUrl);

    const data = response.data;
    
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
