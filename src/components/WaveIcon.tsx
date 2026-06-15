interface WaveIconProps {
  className?: string;
  size?: number;
}

export default function WaveIcon({ className = '', size = 32 }: WaveIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 20C4.5 16 7 14 10 14C13 14 15.5 17 18.5 17C21.5 17 24 15 26 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M2 24C4.5 20 7 18 10 18C13 18 15.5 21 18.5 21C21.5 21 24 19 26 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="26" cy="8" r="3" fill="currentColor" opacity="0.8" />
      <path
        d="M23 8 Q24 4 27 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
