const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 5241;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
