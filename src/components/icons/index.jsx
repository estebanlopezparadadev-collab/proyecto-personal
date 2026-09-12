const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function WhatsAppIcon(props) {
  return (
    <svg {...base} strokeWidth={0} fill="currentColor" {...props}>
      <path d="M17.3 14.5c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.6.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.2-.2-.2-.5-.3z" />
      <path d="M20.5 3.5A11 11 0 0 0 3 17.4L2 22l4.7-1.2a11 11 0 0 0 16.8-8.8c0-2.9-1.1-5.7-3-7.5zM12 20.2a9 9 0 0 1-4.6-1.3l-.3-.2-3.2.8.9-3.1-.2-.3A9.1 9.1 0 1 1 21 11.1 9.1 9.1 0 0 1 12 20.2z" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="13" r="4.2" />
      <path d="M12 11v2.2l1.6 1" />
      <path d="M10 4.5h4M12 4.5V6.5" />
    </svg>
  );
}

export function MailXIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="1.6" />
      <path d="M3.5 7 12 13.5 20.5 7" />
      <path d="M15.5 20.5l4-4M19.5 20.5l-4-4" strokeWidth={2} />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="5.8" />
      <path d="M15 15l5.5 5.5" />
      <path d="M10.5 8.3v.1" strokeWidth={2.4} />
      <path d="M10.5 12.8v-2.3" strokeWidth={2} />
    </svg>
  );
}

export function CardXIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 9.8h19" />
      <path d="M14.7 15.2l3.6 3.6M18.3 15.2l-3.6 3.6" strokeWidth={2} />
    </svg>
  );
}

export function CrackIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="M2.5 8.5h19" />
      <path d="M8 8.5l3 4-2 1.5 3.5 5.5" />
    </svg>
  );
}

export function PhoneWarnIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
      <path d="M10.5 18.3h3" strokeWidth={2} />
      <path d="M12 7.2l2.1 3.7h-4.2z" strokeLinejoin="round" />
      <path d="M12 9v.9" strokeWidth={1.6} />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12.5l5 5L20 6.5" strokeWidth={2.4} />
    </svg>
  );
}
