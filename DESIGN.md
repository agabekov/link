---
name: Daniyar Agabekov
description: A quiet personal page for writing, projects, and work.
colors:
  background: "#f8f8f8"
  text: "#252525"
  secondary: "#646464"
  line: "#dededb"
  accent: "#56634e"
  underline: "#a2a29c"
  selection: "#dfe5d9"
typography:
  display:
    fontFamily: "'Old Standard TT', Georgia, serif"
    fontSize: "clamp(40px, 4.22vw, 62px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Onest', sans-serif"
    fontSize: "clamp(18px, 1.5vw, 22px)"
    fontWeight: 400
    lineHeight: 1.5
  heading:
    fontFamily: "'Onest', sans-serif"
    fontSize: "clamp(22px, 1.77vw, 26px)"
    fontWeight: 600
    lineHeight: 1.25
  quote:
    fontFamily: "'Onest', sans-serif"
    fontSize: "clamp(18px, 1.36vw, 20px)"
    fontWeight: 400
    lineHeight: 1.4
  social:
    fontFamily: "'Onest', sans-serif"
    fontSize: "clamp(16px, 1.36vw, 20px)"
    fontWeight: 400
    lineHeight: 1.5
  description:
    fontFamily: "'Onest', sans-serif"
    fontSize: "clamp(17px, 1.36vw, 20px)"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  portrait: "50%"
  focus: "2px"
spacing:
  list-start: "16px"
  header-gap: "24px"
  mobile-section-gap: "36px"
  mobile-main-gap: "56px"
  desktop-main-gap: "80px"
components:
  full-name:
    textColor: "{colors.text}"
    typography: "{typography.display}"
  quote:
    textColor: "{colors.secondary}"
    typography: "{typography.quote}"
  social-nav:
    textColor: "{colors.text}"
    typography: "{typography.social}"
  writing-list:
    textColor: "{colors.text}"
    typography: "{typography.body}"
  project-entry:
    textColor: "{colors.text}"
    typography: "{typography.body}"
---

# Design System: Daniyar Agabekov

## Overview

**Creative North Star: "A Quiet Personal Page"**

A quiet personal page built around a small natural portrait, a centered full name, and readable text links. The approved centered composition uses almost-white paper, dark text, grey supporting copy, and generous space.

The serif name adds a personal, literary character; the sans-serif content stays direct. Writing occupies the full content width, followed by a two-column project grid, with Verdict first and Oneway second. The system remains light regardless of the device theme.

**Key Characteristics:**

- Centered portrait and full-name introduction.
- Locally hosted Cyrillic and Latin typography.
- Full-width writing titles with natural wrapping.
- Flat surfaces, fine underlines, and restrained olive interaction.

## Colors

The palette is nearly neutral, with a subdued olive reserved for interaction. Frontmatter values are normative and match the CSS custom properties in `index.html`.

### Primary

- **Muted Olive** (`accent`): link hover and keyboard focus.

### Neutral

- **Light Paper** (`background`): the fixed page background.
- **Dark Ink** (`text`): the name, section headings, project links, and writing titles.
- **Soft Grey** (`secondary`): the quote, descriptions, status, and footer.
- **Quiet Rule** (`line`): the divider below writing.
- **Underline Grey** (`underline`): resting link underlines.
- **Pale Olive Selection** (`selection`): selected text, retaining dark ink.

**The Quiet Interaction Rule.** Reserve the muted olive for link hover and keyboard focus; all resting links use dark text.

## Typography

**Display Font:** Old Standard TT, with Georgia and serif fallbacks.  
**Body Font:** Onest, with a sans-serif fallback.

Both families are locally hosted in Cyrillic and Latin WOFF2 subsets with `font-display: swap`. The build loads Old Standard TT at weight 400 and Onest at weights 400, 500, and 600; ordinary content uses 400 and section headings use 600.

The serif full name supplies the personal character. All supporting copy and navigation use the sans-serif. The frontmatter records the desktop fluid ramp; section headings and the full name use balanced wrapping. Supporting descriptions use the smaller description role. Post-title links inherit body type with line-height (1.6).

At viewport widths up to (700px), body type becomes (18px), the full name uses `clamp(34px, 8.7vw, 40px)` with line-height (1.15), the quote becomes (17px), social links (15px), section headings (22px), descriptions (17px), and the footer (14px). The desktop footer is (15px); status copy uses `clamp(18px, 1.43vw, 21px)`.

**The Natural Title Rule.** Writing titles remain complete and wrap naturally across the available content width.

## Layout

The centered page container uses `min(1160px, calc(100% - 96px))`, with block padding (96px 44px). The header is centered; main content is left-aligned and begins after the desktop main gap. The portrait width is `clamp(96px, 8.72vw, 128px)`. Its name follows after the header gap; the quote has a maximum width (440px) and top gap (18px). Social links wrap, with gaps `8px clamp(28px, 3.5vw, 52px)` and top gap (26px).

Writing spans the container width. Lists start after the list-start gap; post rows are separated by (14px). Writing ends with bottom padding (36px) and a fine divider. The lower grid starts after (38px), with equal columns `repeat(2, minmax(0, 1fr))` and gap `clamp(48px, 8.2vw, 120px)`. Project rows are separated by (22px). Descriptions sit (2px) below their link. The centered footer follows after (56px).

At widths up to (700px), the page uses `calc(100% - 48px)` with block padding (56px 32px). The portrait is (88px); the name gap is (20px). The quote narrows to (340px) with top gap (16px); social links use gaps (6px 18px) and top gap (24px). Main begins after the mobile main gap. Writing bottom padding becomes (28px). The lower grid becomes one column, with top gap (30px) and the mobile section gap between sections. Footer top spacing becomes (48px).

## Elevation & Depth

The page has no shadows or elevated containers. Space, typography, grey supporting copy, and the single divider establish hierarchy.

**The Flat Surface Rule.** Use spacing and a fine divider to separate content; the page has no elevated cards or shadows.

## Shapes

The portrait is the only clipped content silhouette: a circle with a square aspect ratio and cover crop. The source image is scaled (1.25) around origin (50% 28%) to match the approved framing. Content has no decorative panels. Links use a subtle rounded keyboard outline; their underlines and the writing divider are thin (1px).

## Components

### Full name and quote

A centered serif full name follows the small portrait. A restrained grey quote follows the name and balances across its limited measure. Preserve the approved full name rather than adding a role-led tagline.

### Text links and social navigation

All resting links use dark ink and use grey underlines with thickness (1px) and offset (5px). Writing, project, blog, and social links change the text and underline to the accent on hover. Keyboard focus uses a solid accent outline (2px) with offset (5px). Social links are centered, wrap as needed, and have a minimum height (32px). The build has no animated link transitions.

### Writing list

Up to five latest titles appear as ordinary linked list rows. They use the full writing section width and natural line wrapping, without truncation, cards, or a constrained title column. Muted loading, empty, and failure messages occupy the same list region. The separate blog navigation link follows after (24px), in smaller (16px) type and the shared dark link color.

### Project entries

Projects pair a dark underlined name with a grey description beneath one shared section heading. Verdict is on the left and Oneway on the right in equal desktop columns; on mobile they stack in the same order. The work section precedes projects as a separate full-width section.

### Work

The work section has a top gap (48px), two grey explanatory paragraphs in `clamp(17px, 1.36vw, 20px)` type, a maximum reading width (900px), and paragraph gaps (14px). A dark (16px) career link follows the copy after (20px), retaining its original destination.

### Music

The music section follows GitHub. It embeds the supplied Spotify playlist through the official player using the neutral theme. A clipped shell matches the work copy's (900px) maximum width, with (4px) corners, a (16px) heading gap, and a background matching the player. The (480px) height shows approximately five tracks. A separate (16px) link opens Spotify after a (16px) gap. The iframe loads lazily and does not start playback automatically.

### GitHub activity calendar

The activity calendar follows projects, with a top gap (48px). A section heading and a dark profile link sit above the seven-row day grid. Days use a five-step palette (`#e8e8e4`, `#d1d9c9`, `#a6b798`, `#7e946e`, `#56634e`), small rounded squares, and short Russian month labels. The total and a compact intensity legend appear below in (14px) secondary text. The graph has a minimum width (720px); smaller screens scroll horizontally and initially show the latest days. A readable summary labels the graph for assistive technology; individual day titles contain dates and counts.

Public data for `agabekov` loads through [GitHub Contributions API](https://github.com/grubersjoe/github-contributions-api) for the last year. Its upstream cache refreshes hourly. Loading and failure messages retain a permanent profile link; failed or invalid data never shows an invented calendar.

## Do's and Don'ts

### Do:

- Do keep the portrait small, circular, and natural.
- Do use Old Standard TT for the full name and Onest for content.
- Do let writing titles use the full content width and wrap naturally.
- Do preserve the fixed light background and visible keyboard focus.
- Do stack project entries at the established mobile breakpoint.

### Don't:

- Don't introduce poster-scale names, giant portraits, or saturated background fields.
- Don't replace the text links with dashboard cards or a sales pitch.
- Don't truncate post titles or restrict them to a narrow column.
- Don't add decorative motion to the current static presentation.
