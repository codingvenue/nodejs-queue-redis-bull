import express from 'express';
import bodyParser from 'body-parser';
import { sendNewEmail } from './queues/email.queue';
import { router } from 'bull-board';
const app = express();

app.use(bodyParser.json());

app.use('/admin/queues', router);

app.post('/send-email', async (req, res) => {
    const { message, ...restBody } = req.body;
    await sendNewEmail({
        ...restBody,
        html: `<p>${message}</p>`
    });
    res.send({ status: 'ok' });
});

app.listen(5000, () => console.log('App running on port 5000'));