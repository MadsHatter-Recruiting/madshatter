const CONSULTATION_URL = "https://calendly.com/madshatter/30min";

export function FloatingConsultationButton() {
  return (
    <a
      href={CONSULTATION_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
      aria-label="Book a free consultation"
    >
      Book Free Consultation
    </a>
  );
}
