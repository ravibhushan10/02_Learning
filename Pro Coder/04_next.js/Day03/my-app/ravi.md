how to make layout (header content footer)
->use the layout.js file: it is root layout component

this is the common page for all pages

->Layout wala content every page par render hoga
<!-- ************************ -->
Order or Rendring :
1: layout.tsx renders first.
2: Inside it, {children} is placed.
3: The actual page.tsx becomes that {children} content.

