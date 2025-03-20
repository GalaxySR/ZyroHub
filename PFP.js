const express = require('express');
const axios = require('axios');
const app = express();

app.get('/getPfp', async (req, res) => {
    const robloxUserId = req.query.robloxId;
    const discordId = await getDiscordIdFromRoblox(robloxUserId); // Get Discord ID from your DB

    const discordResponse = await axios.get(`https://discord.com/api/v9/users/${discordId}`);
    const avatarUrl = `https://cdn.discordapp.com/avatars/${discordId}/${discordResponse.data.avatar}.png`;

    res.json({ avatarUrl });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
