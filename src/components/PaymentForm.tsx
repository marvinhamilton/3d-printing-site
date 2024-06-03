"use client";
import { useState, ChangeEvent, FormEvent } from 'react';

export interface PaymentDetails {
  name: string;
  address: string;
  cardNumber: string;
}

interface PaymentFormProps {
  onSubmit: (details: PaymentDetails) => void;
}

export default function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [details, setDetails] = useState<PaymentDetails>({
    name: '',
    address: '',
    cardNumber: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={details.name} onChange={handleChange} placeholder="Name" required />
      <input name="address" value={details.address} onChange={handleChange} placeholder="Address" required />
      <input name="cardNumber" value={details.cardNumber} onChange={handleChange} placeholder="Card Number" required />
      <button type="submit">Submit</button>
    </form>
  );
}
