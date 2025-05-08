export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
  
    try {
      const { amount, currencyCode, paymentMethod } = req.body;
      const rawTokenString = paymentMethod.token;
  
      const payload = JSON.stringify({
        type: "sale",
        amount: 123,
        currency: "USD",
        payment_method: {
          google_pay_token: rawTokenString,
        },
        billing_address: {
          address_line_1: "123 Example St",
          city: "Chicago",
          state: "IL",
          postal_code: "60601",
        },
      });
  
      const basysResponse = await fetch(
        "https://sandbox.basysiqpro.com/api/transaction",
        {
          method: "POST",
          headers: {
            Authorization: process.env.PRIVATE_BASYS_GATEWAY_ID,
            "Content-Type": "application/json",
          },
          body: payload,
        }
      );
  
      const data = await basysResponse.json();
      res.status(basysResponse.status).json(data);
    } catch (err) {
      console.error("Proxy Error:", err);
      res.status(500).json({ error: "Internal server error", details: err.message });
    }
  }
  