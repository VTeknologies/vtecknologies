import { useEffect } from 'react';

const BASE_URL = 'https://www.vtecknologies.com';
const DEFAULT_IMAGE = `${BASE_URL}/logo512.png`;
const DEFAULT_TITLE = 'VTecknologies | SaaS Integration Apps for Freshworks, Zoho & More';
const DEFAULT_DESCRIPTION =
  'VTecknologies builds powerful apps and integrations for Freshworks, Zoho, Zendesk, and other SaaS platforms. Automate workflows and improve team productivity.';

function upsertMeta(selector, attrKey, attrValue, content) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrKey, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const useSEO = ({
  title,
  description,
  image,
  canonicalPath,
  type = 'website',
  robots = 'index, follow',
}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | VTecknologies` : DEFAULT_TITLE;
    const metaDesc = description || DEFAULT_DESCRIPTION;
    const metaImage = image || DEFAULT_IMAGE;
    const canonical = canonicalPath
      ? `${BASE_URL}${canonicalPath}`
      : `${BASE_URL}${window.location.pathname}`;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', 'name', 'description', metaDesc);
    upsertMeta('meta[name="robots"]', 'name', 'robots', robots);

    upsertLink('canonical', canonical);

    upsertMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', metaDesc);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', metaImage);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', type);
    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'VTecknologies');
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_US');

    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metaDesc);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', metaImage);
    upsertMeta('meta[name="twitter:site"]', 'name', 'twitter:site', '@vtecknologies');
  }, [title, description, image, canonicalPath, type, robots]);
};

export default useSEO;
