import { useRazorpay } from 'react-razorpay';
export const PaymentComponent = () => {
    const { error, isLoading, Razorpay } = useRazorpay();
    const handlePayment = async () => {
      try {
        // 1. Create order on server
        const res = await fetch('/create-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 50000 }), // Amount in paise
        });
        const { id: order_id } = await res.json();

        // 2. Open Razorpay checkout
        const options = {
          key: 'YOUR_RAZORPAY_KEY_ID',
          amount: 50000,
          currency: 'INR',
          name: 'Test Company',
          description: 'Test Transaction',
          order_id: order_id,
          handler: async (response) => {
            // 3. Verify payment on server
              await fetch('/payment-verification', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(response),
            });
          },
          prefill: {
            name: 'user name',
            email: 'user@example.com',
            contact: '1234567890',
          },
        };
        const rzp = new Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div>
        <button onClick={handlePayment} disabled={isLoading}>
          Pay Now
        </button>
        {error && <p>Error loading Razorpay: {error.message}</p>}
      </div>
    );
  };