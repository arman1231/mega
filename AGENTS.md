# Repository Guidelines

## Project Structure & Module Organization
This repository is a static marketing site for `megahvat.ru`. Page templates live at the repository root as standalone `.html` files such as `index.html`, `asortiment.html`, and `kontakt.html`. Shared styles are in `css/` (`main.css`, `media.css`, `fonts.css`), shared behavior is in `js/common.js`, and the contact form handler is `mail.php` at the root. Media assets are stored in `img/`, `fonts/`, and `favicon.*`. Third-party CSS is vendored in `libs/bootstrap/`.

## Build, Test, and Development Commands
There is no package-managed build step in this project.

- `python3 -m http.server 5501` serves the site locally for HTML/CSS/JS review.
- `php -S localhost:8000` serves the repo with PHP enabled so form submissions can reach `mail.php`.
- `git status` checks for unintended edits before committing.

Use the port already configured in `.vscode/settings.json` (`5501`) if you rely on Live Server.

## Coding Style & Naming Conventions
Preserve the existing static-site conventions instead of reformatting whole files. Use lowercase filenames for pages and assets; existing content uses transliterated names with underscores, for example `kak_uvelichit_silu_hvata.html`. Keep HTML and CSS indentation at 2 spaces where present, and match the surrounding indentation in older jQuery code. Reuse the current BEM-like CSS class pattern such as `header__menu` and `main_offer-item`. Avoid introducing frameworks or bundlers unless the repository is explicitly restructured.

## Testing Guidelines
No automated tests or coverage gates are configured. Validate changes manually in a local browser:

- check desktop and mobile layouts on edited pages;
- verify navigation, external embeds, and image paths;
- submit the contact form when PHP is running and confirm the request reaches `mail.php`.

For SEO-sensitive edits, also confirm page `<title>`, `meta description`, and Open Graph tags remain intact.

## Commit & Pull Request Guidelines
Recent history uses short, lowercase commit subjects such as `price update 2` and `company info change`. Keep commits focused on one content or layout change and write concise summaries in that style. Pull requests should include: a brief description of the changed pages, screenshots for visual edits, notes on any SEO or content updates, and manual verification steps.

## Security & Configuration Tips
Do not commit real mailbox changes, credentials, or hosting secrets without review. Treat `.htaccess`, `robots.txt`, `sitemap.xml`, and `mail.php` as production-sensitive files because they affect routing, indexing, and form delivery.
