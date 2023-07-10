import QrReader from "./qr-reader";

export default function QrRecording() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Grant access, and point your camera to the QR code.
      </h3>
      <QrReader />
    </div>
  )
}