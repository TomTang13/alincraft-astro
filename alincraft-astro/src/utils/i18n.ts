export function getLangFromUrl(url: URL): 'zh' | 'en' {
  const segments = url.pathname.split('/').filter(Boolean);
  return segments[0] === 'en' ? 'en' : 'zh';
}

export function getLocalizedPath(path: string, lang: 'zh' | 'en'): string {
  if (lang === 'en') {
    return `/en${path === '/' ? '' : path}`;
  }
  return path.startsWith('/en') ? path.replace('/en', '') || '/' : path;
}
