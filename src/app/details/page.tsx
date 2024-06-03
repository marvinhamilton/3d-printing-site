/* details/page.tsx */
"use client";
import PaymentForm, { PaymentDetails } from '../../components/PaymentForm';
import Link from 'next/link';

export default function Details() {
  const handleSubmit = (details: PaymentDetails) => {
    console.log('Payment and Shipping Details:', details);
    // Here you can call your payment API and process the order
  };

  return (
    <div>
      <h1>Payment and Shipping Details</h1>
      <PaymentForm onSubmit={handleSubmit} />
    </div>
  );
}
