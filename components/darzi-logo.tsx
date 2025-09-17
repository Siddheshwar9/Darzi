interface DarziLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function DarziLogo({ className = "", size = "md" }: DarziLogoProps) {
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto",
    lg: "h-12 w-auto",
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg className={sizeClasses[size]} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle for logo */}
        <circle cx="25" cy="25" r="24" fill="#f4a259" stroke="#ffffff" strokeWidth="2" />

        {/* Needle - main element */}
        <path d="M15 35L35 15" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

        {/* Needle eye */}
        <circle cx="33" cy="17" r="2.5" fill="none" stroke="#ffffff" strokeWidth="2" />

        {/* Thread coming from needle */}
        <path
          d="M31 19C29 21 27 23 25 25C23 27 21 29 19 31C17 33 15 35 13 37"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 2"
          fill="none"
        />

        {/* Decorative stitching pattern around the circle */}
        <path
          d="M10 25C12 23 14 21 16 19M34 31C36 33 38 35 40 37M25 10C27 12 29 14 31 16M19 40C21 38 23 36 25 34"
          stroke="#5b8e7d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="2 1"
        />

        {/* Small fabric pieces */}
        <path d="M8 42C8 40 10 38 12 38C14 38 16 40 16 42" fill="#5b8e7d" />
        <path d="M34 12C34 10 36 8 38 8C40 8 42 10 42 12" fill="#5b8e7d" />
      </svg>

      <div className="flex flex-col">
        <span
          className={`font-bold text-card-foreground ${size === "sm" ? "text-lg" : size === "md" ? "text-2xl" : "text-3xl"}`}
        >
          Darzi
        </span>
        {size !== "sm" && (
          <span className="text-xs text-muted-foreground -mt-1 tracking-wider">TAILORING PLATFORM</span>
        )}
      </div>
    </div>
  )
}
