// File: routes/newsletterRoutes.js
import express from "express";
import Subscriber from "../model/Subscriber.js";

const router = express.Router();

// Subscribe to newsletter
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }
    
    // Check if email already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    
    if (existingSubscriber) {
      // Handle existing subscriber
      if (existingSubscriber.isActive) {
        return res.status(200).json({ 
          success: true, 
          message: 'You\'re already subscribed to our newsletter!' 
        });
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        await existingSubscriber.save();
        return res.status(200).json({ 
          success: true, 
          message: 'Your subscription has been reactivated!' 
        });
      }
    }
    
    // Create new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    
    // Return success response
    return res.status(201).json({ 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    });
    
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // Handle duplicate key error (if unique constraint is violated)
    if (error.code === 11000) {
      return res.status(400).json({ 
        success: false, 
        message: 'This email is already subscribed.' 
      });
    }
    
    return res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
});

// Unsubscribe from newsletter
router.post("/unsubscribe", async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }
    
    const subscriber = await Subscriber.findOne({ email });
    
    if (!subscriber) {
      return res.status(404).json({ 
        success: false, 
        message: 'Subscription not found' 
      });
    }
    
    // Soft delete - just mark as inactive
    subscriber.isActive = false;
    await subscriber.save();
    
    return res.status(200).json({ 
      success: true, 
      message: 'You have been successfully unsubscribed.' 
    });
    
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
});

export default router;