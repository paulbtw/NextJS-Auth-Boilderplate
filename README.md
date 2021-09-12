# Boilerplate NextJS 11+, Chakra-UI and TypeScript

🚀 Boilerplate and Starter for Next.js, Chakra-UI and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, VSCode, Chakra-UI.

Inspired by [ixartz boilerplate](https://github.com/ixartz/Next-js-Boilerplate)

### Features

Developer experience first:

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- 🎨 Integrate with [Chakra-UI](https://chakra-ui.com/)
- 💡 Light and dark mode included
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 👓 [Conventional Commits](https://www.conventionalcommits.org/)
- 👮 Role based authentication with [Next-Auth](https://next-auth.js.org/)
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deployment with Vercel (or manual deployment to any hosting services)
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Requirements

- Node.js and npm or yarn

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/paulbtw/NextJS-Auth-Boilderplate.git my-project-name
cd my-project-name
yarn install
```

Then, you can run locally in development mode with live reload:

```
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.
```

.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── img              # Images folder
├── src
│   ├── components           # All components are located here
│   ├── config               # Configuration files
│   ├── context              # Context folder
│   ├── hooks                # Custom hooks folder
│   ├── layout               # Default layout
│   ├── models               # extended next-auth models
│   ├── pages                # Next JS pages
│   ├── theme                # Edited Chakra-UI theme
│   ├── types                # Custom or extended typescript types
│   └── utils                # Utility folder
├── .env                     # Enviromental variables
└── tsconfig.json            # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/theme/main.css`: your custom theme file using Chakra-UI
- `src/config/AppConfig.ts`: configuration file
- `src/layout/DefaultLayout.tsx`: default theme

### Deploy to production

You can see the results locally in production mode with:

```
$ yarn build
$ yarn start
```

The generated HTML and CSS files are minified (built-in feature from Next js).

You can create an optimized production build with:

```
yarn build-prod
```

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fpaulbtw%2Fnextjs-auth-boilderplate)

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.
