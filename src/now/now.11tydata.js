const path = require("path");

module.exports = {
  layout: "now.njk",
  tags: "now",

  eleventyComputed: {
    // Permalink based on filename
    permalink: (data) => {
      const name = path.basename(
        data.page.inputPath,
        path.extname(data.page.inputPath)
      );
      return `/${name}/`; // results in /2025-11-27/
    },
    // Title formatted from filename
    title: (data) => {
      const name = path.basename(
        data.page.inputPath,
        path.extname(data.page.inputPath)
      );
      const date = new Date(name);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
    // Date object parsed from filename for sorting
    date: (data) => {
      const name = path.basename(
        data.page.inputPath,
        path.extname(data.page.inputPath)
      );
      return new Date(name);
    },
  },
};
