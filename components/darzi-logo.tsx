import Image from "next/image"

interface DarziLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function DarziLogo({ className = "", size = "md" }: DarziLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-12 w-auto",
    lg: "h-16 w-auto",
  }

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/darzi-logo.jpg"
        alt="Darzi - Premium Tailoring Platform"
        width={size === "sm" ? 120 : size === "md" ? 160 : 200}
        height={size === "sm" ? 32 : size === "md" ? 48 : 64}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
    </div>
  )
}
