require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const contacts = 'https://api.hubapi.com/crm/v3/objects/contacts';
const headers = {
    Authorization: `Bearer ${process.env.HUBSPOT_SERVICE_KEY}`,
    'Content-Type': 'application/json'
};

app.get('/', async (req, res) => {
    try {
        const data = [];
        let after;
        do {
            const response = await axios.get(contacts, {
                headers,
                params: { properties: 'dachshund_name,color,personality', limit: 100, after }
            });
            data.push(...response.data.results.filter(record => record.properties.dachshund_name));
            after = response.data.paging?.next?.after;
        } while (after);
        res.render('homepage', { title: 'Mini Dachshunds | Integrating With HubSpot I Practicum', data });
    } catch (error) {
        console.error('Could not load Mini Dachshunds:', error.response?.status, error.response?.data?.message || error.message);
        res.status(500).send('Could not load Mini Dachshunds. Please try again.');
    }
});

app.get('/update-cobj', (req, res) => {
    res.render('updates', { title: 'Update Custom Object Form | Integrating With HubSpot I Practicum' });
});

app.post('/update-cobj', async (req, res) => {
    const newRecord = {
        properties: {
            dachshund_name: req.body.name,
            // Contacts require a first name, last name, or email.
            firstname: req.body.name,
            color: req.body.color,
            personality: req.body.personality
        }
    };
    try {
        await axios.post(contacts, newRecord, { headers });
        res.redirect('/');
    } catch (error) {
        console.error('Could not create Mini Dachshund:', error.response?.status, error.response?.data?.message || error.message);
        res.status(500).send('Could not create Mini Dachshund. Please try again.');
    }
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));
