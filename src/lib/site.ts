import { getCollection, type CollectionEntry } from 'astro:content';

export type PageEntry = CollectionEntry<'pages'>;

export async function getPages(): Promise<PageEntry[]> {
  return (await getCollection('pages')).sort((a, b) => a.data.nav_order - b.data.nav_order);
}

export function hrefFor(page: PageEntry): string {
  const slug = page.data.slug.replace(/^\/+|\/+$/g, '');
  return slug ? `/${slug}/` : '/';
}

export function getAlternate(page: PageEntry, pages: PageEntry[]): PageEntry | undefined {
  return pages.find(
    (candidate) =>
      candidate.data.translation_key === page.data.translation_key &&
      candidate.data.language !== page.data.language
  );
}

export function getNav(page: PageEntry, pages: PageEntry[]): PageEntry[] {
  return pages
    .filter((candidate) => candidate.data.language === page.data.language)
    .sort((a, b) => a.data.nav_order - b.data.nav_order);
}
