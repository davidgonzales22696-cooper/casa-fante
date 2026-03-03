import { whatsappLink, ctaText } from "@/lib/tokens";

interface CTAButtonProps {
  variant?: "solid" | "outline";
  label?: string;
  className?: string;
  href?: string;
}

export default function CTAButton({
  variant = "solid",
  label = ctaText,
  className = "",
  href,
}: CTAButtonProps) {
  const target = href ?? whatsappLink;

  const base =
    "inline-block font-inter font-medium text-sm tracking-widest uppercase " +
    "transition-all duration-300 ease-out px-8 py-4 rounded-none " +
    "hover:scale-[1.03] hover:shadow-lg active:scale-[0.97]";

  const variants = {
    solid:
      "bg-olive text-white hover:bg-olive-dark",
    outline:
      "border border-olive text-olive hover:bg-olive hover:text-white",
  };

  return (
    <a
      href={target}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
