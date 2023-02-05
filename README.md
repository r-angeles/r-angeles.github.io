#  r-angeles.github.io ![Build GH-Pages](https://github.com/r-angeles/r-angeles.github.io/actions/workflows/deploy.yml/badge.svg)

A website making use of Static CMS, Eleventy, & Tailwind CSS that is deployed to GitHub Pages

## Website Link

- [Link to site](https://r-angeles.github.io)

## Getting Started
To start working locally, clone this repository:
```
git clone https://github.com/r-angeles/r-angeles.github.io.git insert-project-name
```

Go to the project directory and install Node dependencies:
```
npm install
```

Start development: 
```
npm run dev
```
Check http://localhost:8080 to see the site live

Generate a production-ready build:
```
npm run build
```
When ready, push to GitHub. Note that this website is set up on GitHub pages. It uses [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) to deploy to  [GitHub Pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages). 

Go to `Settings -> Pages -> Build and deployment` then change  `Source` to `GitHub Actions`.

### Using Static CMS locally
To start editing locally with Static CMS, run:
```
npm run local
```
Then visit `http://localhost:8080/admin`

### Edit metadata
Configure the metadata through navigating to `src -> _data` and modifying the files eg. `metadata.yaml`, `navigationLinks.yaml` 

OR, use Static CMS to edit `_data` on a GUI by visiting your-site-name.gihub.io/admin

### CMS OAuth
GitHub account will be used to log in to CMS. See the [Static CMS docs](https://www.staticcms.org/docs/github-backend) to set it up.

Alternatively, [Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/) can be used for authentication to edit files without logging in to GitHub. Visit the [Static CMS docs](https://www.staticcms.org/docs/add-to-your-site-cdn) for more details on setting it up (Note: The site must be hosted on [Netlify](https://www.netlify.com/) first)

## Under the hood
### What's used?
- [Eleventy](https://www.11ty.dev/) as main static site generator
- [Static CMS](https://www.staticcms.org/) for content management
- [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com)
- [luxon](https://moment.github.io/luxon/)
- [html-minifier](https://kangax.github.io/html-minifier/)
- [cssnano](https://cssnano.co/)
- [js-yaml](https://github.com/nodeca/js-yaml)

### To be added
- [Giscus](https://giscus.app/) comments system utilizing GitHub Discussions

### Known Issues
- Static CMS 1.0.0 does not throw error if `config.yml` has typos, bugs, etc. Current workaround is switching the Static CMS CDN to the Netlify CMS CDN on `admin/index.html` to check for errors
- Static CMS 1.0.0 have no current support for mobile editing
- SVG does not show

## License ![GitHub](https://img.shields.io/github/license/r-angeles/r-angeles.github.io)

Copyright (c) 2023 Rae Angeles ([@rae_angeles](https://twitter.com/rae_angeles))

This project is licensed under the MIT License - visit the [LICENSE.md](https://github.com/r-angeles/r-angeles.github.io/blob/main/LICENSE) file for more details

