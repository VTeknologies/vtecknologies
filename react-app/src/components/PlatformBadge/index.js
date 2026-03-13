const PlatformBadge = ({ platform, size = "sm" }) => {
  const platformStyles = {
    Freshdesk: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-200"
    },
    Freshworks: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-200"
    },
    FreshSales: {
      bg: "bg-blue-100",
      text: "text-blue-800",
      border: "border-blue-200"
    },
    Zoho: {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-200"
    },
    HubSpot: {
      bg: "bg-orange-100",
      text: "text-orange-800",
      border: "border-orange-200"
    },
    Intercom: {
      bg: "bg-indigo-100",
      text: "text-indigo-800",
      border: "border-indigo-200"
    },
    Twilio: {
      bg: "bg-pink-100",
      text: "text-pink-800",
      border: "border-pink-200"
    },
    default: {
      bg: "bg-gray-100",
      text: "text-gray-800",
      border: "border-gray-200"
    }
  };

  const sizeStyles = {
    xs: "text-xs px-2 py-0.5",
    sm: "text-sm px-2.5 py-1",
    md: "text-base px-3 py-1.5"
  };

  const style = platformStyles[platform] || platformStyles.default;
  const sizeStyle = sizeStyles[size] || sizeStyles.sm;

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border ${style.bg} ${style.text} ${style.border} ${sizeStyle}`}
    >
      {platform}
    </span>
  );
};

export default PlatformBadge;
