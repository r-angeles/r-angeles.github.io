const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");
const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {

    // Human readable date
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
        "dd LLL yyyy"
        );
    });

    // Inlining SVG
    eleventyConfig.addNunjucksAsyncShortcode("inlineSvg", async (src, alt, sizes) => {
        let metadata = await Image(src, {
          formats: ["svg"],
          dryRun: true,
        })  
        
        return metadata.svg[0].buffer.toString()
    })

    // Add support for .yaml Extension in _data
    // You may remove this if you can use JSON
    eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

    // Copy files to /_site
    eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    });
    eleventyConfig.addPassthroughCopy("./src/static/img");
    eleventyConfig.addPassthroughCopy("./src/favicon.ico");

    // Watch changes for the pipeline.
    eleventyConfig.addWatchTarget("./src/static/css/tailwind.css");
    eleventyConfig.addWatchTarget("./src/static/img");

    // Minify HTML - use transforms below only for Eleventy versions prior 2.0
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
        return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
        });
    }

    return content;
    });

    return {
        // Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
        templateFormats: ["html", "md", "njk"],

        // Pre-process *.md files with: (default: `liquid`)
        markdownTemplateEngine: "njk",

        // Pre-process *.html files with: (default: `liquid`)
        htmlTemplateEngine: "njk",

        // Pre-process data with: (default: `liquid`)
        dataTemplateEngine: "njk",

        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            data: "_data",
        },
    }
};