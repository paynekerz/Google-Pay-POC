const express = require("express");
const https = require("https");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend from /public
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// Config endpoint to securely expose required values
app.get("/config", (req, res) => {
  res.json({
    merchantId: process.env.GOOGLE_PAY_MERCHANT_ID,
    gatewayId: process.env.PUBLIC_BASYS_GATEWAY_ID,
    paymentProfileId: process.env.GOOGLE_PAYMENT_PROFILE_ID,
    environment: process.env.ENVIRONMENT,
  });
});

// Proxy endpoint to securely call API (Only in POC version to avoid CORS)
app.post("/proxy/transactions", async (req, res) => {
  try {
    const { amount, currencyCode, paymentMethod, billingAddress } = req.body;

    // 1) Parse the raw token string into JSON
    const rawTokenString = paymentMethod.token;
    // const testObject = JSON.parse(paymentMethod)
    
    console.log("Google Pay token:", paymentMethod);

    // 2) Build the payload
    const payload = JSON.stringify({
      "type": "sale",
      "amount": 123, 
      "currency": "USD", 
      "payment_method": {
        "google_pay_token": rawTokenString, 
      },
      "billing_address": {
        "address_line_1": "123 Example St",
        "city": "Chicago",
        "state": "IL",
        "postal_code": "60601",
      },
    });

    console.log(payload)

    // 3) POST to the transaction endpoint
    const basysResponse = await fetch(
      "https://sandbox.basysiqpro.com/api/transaction",
      {
        method: "POST",
        headers: {
          "Authorization": process.env.PRIVATE_BASYS_GATEWAY_ID,
          "Content-Type": "application/json",
        },
        body: payload,
      }
    );

    const data = await basysResponse.json();
    return res.status(basysResponse.status).json(data);
  } catch (err) {
    console.error("Proxy Error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
      google_pay_token: rawTokenString
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`POC running at http://localhost:${PORT}`);
});
