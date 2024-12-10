export const ROUTES = {
  HOME: '/',
  ABOUT: '/ueber-uns',
  PROGRAM: '/programm',
  EVENTS: '/veranstaltungen',
  PRESS: '/presse',
  JOIN: '/mitmachen',
  CONTACT: '/kontakt',
  LOGIN: '/login',
} as const;

export const STATIC_ROUTES = Object.values(ROUTES);