import { useEffect } from 'react';

const SITE_URL = 'https://www.barakamedicals.com';

/**
 * Keeps the document title, description, canonical URL and Open Graph tags in
 * sync with the active route.
 *
 * This app is a client-rendered SPA, so every route is served the same
 * index.html. Without this, /about and /contact would inherit the home page
 * metadata, which costs both search snippets and link previews.
 *
 * Tags are mutated in place rather than injected so the values already present
 * in index.html stay authoritative for crawlers that do not execute JavaScript.
 */
const setMetaContent = (selector, content) => {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute('content', content);
  }
};

const useDocumentMeta = ({ title, description, path }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);

    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }
  }, [title, description, path]);
};

export default useDocumentMeta;
