export default function handler(req, res) {
    res.status(200).json({
      merchantId: process.env.GOOGLE_PAY_MERCHANT_ID,
      gatewayId: process.env.PUBLIC_BASYS_GATEWAY_ID,
      paymentProfileId: process.env.GOOGLE_PAYMENT_PROFILE_ID,
      environment: process.env.ENVIRONMENT,
    });
  }
  