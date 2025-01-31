module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // Add collection for blog posts
  eleventyConfig.addCollection("post", function(collection) {
      return collection.getFilteredByGlob(["posts/*.html", "posts/*.md"]).reverse();
  });

  // Footer shortcode
  eleventyConfig.addShortcode("footer", function() {
      return `<footer><p>© 3024 Galactic Explorer's Log | All rights reserved</p></footer>`;
  });

  return {
    dir: {
      input: ".",         // Root folder for content
      includes: "_includes", // Where layout files are stored
      output: "_site"      // Where the generated site will go
    },
    htmlTemplateEngine: "liquid" // Forces .html files to process Liquid
  };
};
