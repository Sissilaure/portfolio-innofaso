// Monogramme InnoFaso recréé en SVG (le logo officiel n'a pas pu être récupéré en local).
// Reprend le vert de marque et un symbole de feuille/croissance, cohérent avec leur identité
// "nutrition / santé / agroalimentaire".
export default function InnoFasoMark({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#1F7A4D" />
      <path
        d="M16 7C12 9 9.5 12.8 9.5 17c0 3.3 2.2 6 5.2 6.7"
        stroke="#EAF6EE" strokeWidth="2" strokeLinecap="round" fill="none"
      />
      <path
        d="M16 7c4 2 6.5 5.8 6.5 10 0 3.3-2.2 6-5.2 6.7"
        stroke="#7ED9A5" strokeWidth="2" strokeLinecap="round" fill="none"
      />
      <circle cx="16" cy="7" r="2" fill="#EAF6EE" />
    </svg>
  );
}
