import { React, useState } from "react";
import Modal from "react-modal";
import QrCodeCanvas from "./QrCodeCanvas";

export default function InputQrCode() {
  const [text, setText] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <div className="flex flex-col   ">
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite o link"
      ></input>
      {/* código para aparecer o QRCODE = <QrCodeCanvas text={text}></QrCodeCanvas> */}
      <h2 className="bg-red-600">Clique no botão para ver o qrcode</h2>
      <button onClick={handleOpenModal}>QrCode</button>

      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <button onClick={handleCloseModal}>close</button>

        <QrCodeCanvas text={text}></QrCodeCanvas>
      </Modal>
    </div>
  );
}
