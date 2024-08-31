import React, { useRef, useState, useEffect } from "react";
import { uploadFile } from "../services/api";
import QRCode from "qrcode.react";
import { toast } from "react-toastify";

const Content = () => {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const [email, setEmail] = useState("");
  const fileInputRef = useRef();

  useEffect(() => {
    const getImg = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImg();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  const copyLinkToClipboard = () => {
    toast.success("Link copied to clipboard!");
    navigator.clipboard.writeText(result);
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fileId: result.split("/").pop() }), // Adjust as needed
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the email.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[92vh] bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 border border-solid border-black h-[500px] w-[650px] p-4 rounded-lg shadow-lg">
        <h1 className="text-[44px] leading-[54px] font-[700] text-white mt-4 text-center">
          Simple and reliable file transfers
        </h1>

        <button
          onClick={() => onUploadClick()}
          type="button"
          className="mt-[40px] ml-[40%] p-2 bg-blue-600 rounded-md cursor-pointer hover:bg-blue-800 text-white font-bold"
        >
          Upload File
        </button>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          ref={fileInputRef}
          id="fileUpload"
          className="hidden"
        />

        {result && (
          <div className="mt-10 flex flex-col items-center">
            <a
              href={result}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-white underline"
            >
              {result}
            </a>
            <div className="flex items-center space-x-4 mt-4">
              <button
                onClick={copyLinkToClipboard}
                className="w-[140px] h-[40px] bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded-lg"
              >
                Copy Link
              </button>
              <QRCode value={result} size={128} />
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full p-3 text-gray-800 placeholder-gray-500 bg-white border-2 border-gray-300 rounded-lg shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                />

                <button
                  onClick={sendEmail}
                  className="mt-2 w-[140px] h-[40px] bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Send Email
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
