"use client";

interface PreviewProps {
    file: File | null;
  }
  
  export default function Preview({ file }: PreviewProps) {
    return (
      <div>
        {file ? (
          <p>Preview of: {file.name}</p>
        ) : (
          <p>No file uploaded yet</p>
        )}
      </div>
    );
  }
  