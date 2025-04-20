// routes/siteRoutes.js
import express from 'express';
import { sendContactEmail } from '../controllers/contactController.js';

const router = express.Router();

// Contact form submission endpoint - matches your frontend API call
router.post('/send', sendContactEmail);

export default router;
