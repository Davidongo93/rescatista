export interface Video {
  id: string
  title: string
  description?: string
}

/**
 * Featured videos (used on home hero scroll section).
 * Kept minimal — only the two flagship pieces.
 */
export const featuredVideos: Video[] = [
  { id: 'm4rjfOJspfs', title: 'Documental Colombia Vertical' },
  { id: 'iMnyO3NEhEY', title: 'Tráiler Colombia Vertical' },
]

/**
 * Full video catalog (used on gallery + colombia-vertical pages).
 * Add new IDs here to make them available everywhere.
 */
export const allVideos: Video[] = [
  { id: 'm4rjfOJspfs', title: 'Documental Colombia Vertical' },
  { id: 'iMnyO3NEhEY', title: 'Tráiler Colombia Vertical' },
  { id: 'D6kHaNr35GI', title: 'Colombia Vertical · Pieza 1' },
  { id: 'ZMWaYmm5Ajs', title: 'Colombia Vertical · Pieza 2' },
  { id: 'fCCPoqFa_YU', title: 'Colombia Vertical · Pieza 3' },
  { id: 'pgH8L8Y4tHc', title: 'Colombia Vertical · Pieza 4' },
]
