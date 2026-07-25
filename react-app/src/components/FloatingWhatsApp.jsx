export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/263771234567?text=Hi%20Frozen%20Solutions%2C%20I%27m%20interested%20in%20your%20equipment."
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse-wa fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-white text-2xl"></i>
    </a>
  );
}