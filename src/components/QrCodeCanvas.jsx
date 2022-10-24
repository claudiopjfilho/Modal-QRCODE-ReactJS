import React from "react";
import QRCode, { toCanvas } from "qrcode";

import { useRef } from "react";
import { useEffect } from "react";

export default function QrCodeCanvas({ text }) {
  const canvasRef = useRef();

  useEffect(() => {
    QRCode, toCanvas(canvasRef.current, text, (error) => console.log(error));
  }, [text]);

  return (
    <div>
      <canvas ref={canvasRef} id="canvas"></canvas>
    </div>
  );
}
