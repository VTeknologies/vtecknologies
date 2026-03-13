import { useEffect } from 'react';

const useSEO = ({ title, description }) => {
  useEffect(() => {
    // Update document title
    document.title = title
      ? `${title} | VTecknologies`
      : 'VTecknologies | SaaS Integration Apps for Freshworks, Zoho & More';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description ||
      'Build smarter workflows with integration apps for Freshdesk, Zoho Books, FreshSales, and Twilio. Trusted by support, finance, and operations teams.';
  }, [title, description]);
};

export default useSEO;
