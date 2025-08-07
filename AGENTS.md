<general_rules>
- Always use absolute imports with the `@/*` alias when importing files (configured in `jsconfig.json` to point to the root directory)
- Run `npm run lint` before committing any changes to ensure code quality (uses ESLint with next/core-web-vitals configuration)
- Use inline styles or import style objects from `/styles/styles.js` for consistent styling patterns - do not use CSS modules
- When creating new components, place them in the `/components` directory following PascalCase naming conventions (e.g., `MyComponent.js`)
- Before creating new components, search the `/components` directory to check if a similar component already exists
- Follow Next.js file-based routing patterns when creating new pages in the `/pages` directory
- Use dynamic routes with square brackets for parameterized pages (e.g., `[year].js`, `[subject].js`)
- Maintain the existing component structure where the Layout component wraps all pages via `_app.js`
- Use FontAwesome icons consistently with the existing pattern (`@fortawesome/react-fontawesome`)
- Follow the established pattern of exporting components as named exports from component files
</general_rules>

<repository_structure>
This is a Next.js quiz application called Quizmastr with the following main directories:

- `/components` - Contains reusable UI components including Layout (main wrapper), Quiz (quiz functionality), Header, Footer, and various Card components (YearCard, SubjectCard) for navigation
- `/pages` - Next.js file-based routing with dynamic nested routes: `/year/[year]` for year selection and `/year/[year]/subject/[subject]` for subject-specific quizzes, plus special pages like `_app.js`, `_document.js`
- `/styles` - Contains `globals.css` for global styles and `styles.js` which exports reusable style objects used throughout the application
- `/public` - Static assets including favicons, background images, and web manifest files
- Root configuration files include `jsconfig.json` (absolute imports), `next.config.js` (Next.js config), `.eslintrc.json` (linting rules)

The Layout component wraps all pages via `_app.js` and provides consistent header, footer, and background styling across the application.
</repository_structure>

<dependencies_and_installation>
- Package manager: npm (use `npm install` to install dependencies)
- Standard Next.js installation process - run `npm install` in the root directory
- Key dependencies: React 18.2.0, Next.js (latest), styled-components, FontAwesome icons (@fortawesome packages), lodash, and openai
- Development server: Start with `npm run dev` and access at http://localhost:3000
- Available scripts: `npm run dev` (development), `npm run build` (production build), `npm run start` (production server), `npm run lint` (code linting)
- Cloud development environment available via Gitpod (configured in `.gitpod.yml`)
- Deployment recommended via Vercel platform (Next.js creators)
</dependencies_and_installation>

<testing_instructions>
No testing framework is currently configured in this repository. There are no Jest configurations, test scripts in package.json, or existing test files. If testing is required for new features or components, developers should:

- Set up their preferred testing framework (Jest, Vitest, etc.)
- Add appropriate test scripts to package.json
- Create test files following the chosen framework's conventions
- Focus testing on Quiz component logic, routing functionality, and component rendering
- Consider testing dynamic route handling and quiz question processing logic
</testing_instructions>

<pull_request_formatting>
</pull_request_formatting>
