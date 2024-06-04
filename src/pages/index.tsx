// pages/index.js
'use client';

import { useState } from 'react';
import FileUpload from '../components/FileUpload';
import Preview from '../components/Preview';
// import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from './Home.module.css';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1>Attach Your Model Here</h1>
        <FileUpload onFileUpload={setFile} />
        <Preview file={file} />
        {file && <button onClick={() => window.location.href = '/details'}>Next</button>}
        {/* <Link href="/">Home</Link>  */}
      </div>
      <Footer />
    </div>
  );
}
