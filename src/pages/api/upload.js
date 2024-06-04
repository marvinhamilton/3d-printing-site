// pages/api/upload.js
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { sendToPrinter } from '../../app/lib/printer';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

export default async function handler(req, res) {
  const form = formidable({ multiples: false, uploadDir });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to upload file' });
    }

    const file = files.file;

    // Move the file to the desired location
    const newPath = path.join(uploadDir, file.originalFilename);
    fs.renameSync(file.filepath, newPath);

    try {
      const result = await sendToPrinter(newPath);
      res.status(200).json({ message: 'File uploaded and sent to printer successfully', result });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send file to printer', details: error.message });
    }
  });
}
