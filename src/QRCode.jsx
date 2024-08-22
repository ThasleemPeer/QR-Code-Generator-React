// src/QRCode.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');

  return (
    <div>
      <input
        type="url"
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder='Enter Your URL to generate QR Code'
        required
      />
      {/* Render QR code with custom colors if URL is not empty */}
      {url && (
        <QRCode
          value={url}
          fgColor="green" /* Black color for the QR code */
          bgColor="black" /* Green color for the background */
          size={200}
        />
      )}
    </div>
  );
};

export default QRCodeGenerator;
