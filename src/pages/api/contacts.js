// pages/api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Here you can add your logic to handle the form submission, e.g., send an email
      // For this example, we'll just log the message to the console
  
      console.log('Contact Form Submission:', { name, email, message });
  
      // Simulate a successful response
      return res.status(200).json({ message: 'Message sent successfully!' });
    }
  
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  