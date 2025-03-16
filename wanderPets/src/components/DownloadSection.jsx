import qrCode from "../assets/images/qr-code3.png"; // Import the QR code image

const DownloadSection = () => {
  return (
    <div id="DownloadSection" className="flex flex-col items-center mt-20 py-10 bg-gray-100">
      <h2 className="text-3xl sm:text-5xl text-center text-green-800 tracking-wide mb-6">
        Download the WanderPets App
      </h2>
      <p className="text-lg text-center text-neutral-700 max-w-3xl mb-10">
        Scan the QR code below to download the app directly to your device and join the WanderPets community.
      </p>
      <div className="flex justify-center">
        <img
          src={qrCode}
          alt="QR Code"
          className="p-5 border border-green-300 shadow-md shadow-green-400 rounded-lg"
          style={{ maxHeight: "400px", maxWidth: "400px" }}
        />
      </div>
    </div>
  );
};

export default DownloadSection;
