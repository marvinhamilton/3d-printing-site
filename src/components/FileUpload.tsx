"use client";
import { useState, ChangeEvent } from 'react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

export default function FileUpload({ onFileUpload }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      onFileUpload(e.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && <p>File: {file.name}</p>}
    </div>
  );
}
