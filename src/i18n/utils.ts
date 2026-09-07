import es from './es.json';
import en from './en.json';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type Locale = 'es' | 'en';
export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getLocale(locale?: string): Locale {
  return locale === 'en' ? 'en' : 'es';
}

export function getDictionary(locale?: string): Dictionary {
  return dictionaries[getLocale(locale)];
}

export function localizedUrl(locale: Locale, path = ''): string {
  return getRelativeLocaleUrl(locale, path);
}

export function switchLocaleUrl(locale: Locale, pathname: string): string {
  const path = pathname.replace(/^\/(?:es|en)(?=\/|$)/, '') || '/';
  return localizedUrl(locale, path);
}
