import type { Dict } from "@/lib/i18n";
import { Icon } from "./icons";

// Bouton WhatsApp flottant, visible sur toutes les pages.
export default function WhatsAppFloat({ d }: { d: Dict }) {
  const number = d.footer.whatsapp.replace(/[^0-9]/g, "");

  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={d.footer.whatsappCta}
      title={d.footer.whatsappCta}
      className="wa-float fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center
        rounded-full bg-[#25D366] text-white transition-transform duration-200
        hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <Icon name="whatsappFill" className="h-7 w-7" />
    </a>
  );
}
