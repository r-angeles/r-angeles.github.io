const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
    // Watch content images for the image pipeline.
	// eleventyConfig.addWatchTarget("content/**/*.{avif,svg,webp,png,jpeg}");

    // Copy Files to /_Site
    eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    });

    eleventyConfig.addPassthroughCopy("./src/static/css/styles.css");

    eleventyConfig.addPassthroughCopy("./src/static/img");

    eleventyConfig.addPassthroughCopy("./src/favicon.ico");

    // Watch changes for the pipeline.
    eleventyConfig.addWatchTarget("./src/static/css/tailwind.css");

    // Minify HTML
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
        });
        return minified;
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

        // pptional:
        dir: {
            input: "content", // default: "."
            output: "public", 
            // default: "_includes",
            // default: "_data",
        },
    }
};