const path = require("path");

module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      const name = path.basename(
        data.page.inputPath,
        path.extname(data.page.inputPath)
      );
      return `/${name}/`; // outputs /nl1/ for nl1.md
    },
  },
};
