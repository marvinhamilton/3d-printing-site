// lib/printer.js
import fetch from 'node-fetch';

const PRINTER_API_URL = 'http://your-printer-api-url';
const PRINTER_API_KEY = 'your-printer-api-key';

export async function sendToPrinter(filePath) {
  const response = await fetch(`${PRINTER_API_URL}/print`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${PRINTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filePath }),
  });

  if (!response.ok) {
    throw new Error('Failed to send file to printer');
  }

  return await response.json();
}
