const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");


module.exports = function(eleventyConfig) {
  
  /* ---------------
   * Markdown Filter
   * ---------------- */
  const md = new markdownIt({
    html: true,       // allow HTML in Markdown
    linkify: true,
    typographer: true
  });

  eleventyConfig.addNunjucksFilter("markdownify", (content) => {
    return md.render(content);
  });

  /* ---------------------------
   * Passthrough & Watch Targets
   * --------------------------- */
  ["./src/styles/", "./src/assets/"].forEach(path => {
    eleventyConfig.addPassthroughCopy(path);
    eleventyConfig.addWatchTarget(path);
  });

  /* ---------------------------
   * Filters
   * --------------------------- */
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  eleventyConfig.addFilter("readableDate", (dateObj) =>
    DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLL d, yyyy")
  );

  eleventyConfig.addFilter("readDate", function(value, format = "MMM YYYY") {
    const date = new Date(value);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  });

  /* ---------------------------
   * Plugins
   * --------------------------- */
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(embedYouTube);

 /* ---------------------------
   * Collections
   * --------------------------- */

  // Essays (sorted by frontmatter `order`)
  eleventyConfig.addCollection("essays", (api) =>
    api.getFilteredByGlob("src/essays/*.md").sort((a, b) => {
      const orderA = a.data.order ?? 0;
      const orderB = b.data.order ?? 0;
      return orderB - orderA; // ascending
    })
  );

  // Poems (sorted by date)
  eleventyConfig.addCollection("poems", (api) =>
    api.getFilteredByGlob("src/poems/*.md").sort(
      (a, b) => b.data.date - a.data.date
    )
  );

  // Book Notes (sorted by date)
  eleventyConfig.addCollection("booknotes", (api) =>
    api.getFilteredByGlob("src/book-notes/*.md").sort(
      (a, b) => b.data.dateRead - a.data.dateRead
    )
  );

  // Paintings (sorted by date ended)
  eleventyConfig.addCollection("paintings", (api) =>
    api.getFilteredByGlob("src/paintings/*.md").sort((a, b) => {
      const dateEndedA = a.data.dateEnded ?? 0;
      const dateEndedB = b.data.dateEnded ?? 0;
      return dateEndedB - dateEndedA;
      }
  ));

  // Newsletters (sorted by date)
  eleventyConfig.addCollection("newsletters", (api) =>
    api.getFilteredByGlob("src/newsletters/*.md").sort(
      (a, b) => b.data.date - a.data.date
    )
  );

  // Now updates (newest first)
  eleventyConfig.addCollection("now", (api) =>
    api.getFilteredByGlob("src/now/*.md").sort(
      (a, b) => b.data.date - a.data.date
    )
  );

  // Music (combined singles + eps, sorted by date descending)
  eleventyConfig.addCollection("music", (api) => {
    const singles = api.getFilteredByGlob("src/music/singles/*.md");
    const eps = api.getFilteredByGlob("src/music/eps/*.md");

    // Combine and sort
    return [...singles, ...eps].sort(
      (a, b) => new Date(b.data.date) - new Date(a.data.date)
    );
  });

  /* ---------------------------
   * Shortcodes
   * --------------------------- */

  // Accordion shortcode
  eleventyConfig.addPairedShortcode("accordionItem", (content, title) => `
    <div class="accordion-item">
      <button class="accordion-toggle" aria-expanded="false">
        → ${title}
        <span class="accordion-icon">+</span>
      </button>
      <div class="accordion-content">
        ${content}
      </div>
    </div>
  `);

  // Age shortcode
  eleventyConfig.addShortcode("myAge", () => {
    const today = new Date();
    const birthDate = new Date("1993-01-22");
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDelta = today.getMonth() - birthDate.getMonth();
    if (monthDelta < 0 || (monthDelta === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age.toString();
  });

  // Years since 2015 shortcode
  eleventyConfig.addShortcode("yearsSince2015", () => {
    const today = new Date();
    const startDate = new Date("2015-03-31T00:00:00Z");
    const msPerYear = 31557600000; // 365.25 days

    const diffMs = today - startDate;
    const years = diffMs / msPerYear;

    return years.toFixed(1);
  });

  // Simple year format YYYY
  eleventyConfig.addFilter("yearSimple", (date) => {
    if (!date) return "";
    const dt = DateTime.fromJSDate(date instanceof Date ? date : new Date(date));
    return dt.isValid ? dt.year : "";
  });

  /* ---------------------------
   * Directories
   * --------------------------- */
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};