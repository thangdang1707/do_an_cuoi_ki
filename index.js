const express = require ('express');
const app = express ();
const PORT = process.env.PORT || 3000;
app.listen ( PORT , () => {
    console.log (`Server listening on ${ PORT }`);
});
// middlewares
const bodyParser = require ('body-parser');
app.use ( bodyParser.json ({ limit : '10 mb' }) );
app.use (bodyParser.urlencoded ({ extended : true , limit : '10 mb' }) );

// apis
app.use('/api/admin', require ('./api/admin.js'));