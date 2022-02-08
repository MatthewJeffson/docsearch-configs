new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://nsfi.github.io/fishd-mobile-site/#/en-US/components/",
    "https://nsfi.github.io/",
    "https://nsfi.github.io/fishd-mobile-site/#/zh-CN/components/",
    "https://nsfi.github.io/fishd-mobile-site/#/zh-CN/components/quickStart",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: ["**/demo/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://nsfi.github.io/**"],
  schedule: "at 01:10 on Wednesday",
  actions: [
    {
      indexName: "fishd-mobile",
      pathsToMatch: [
        "https://nsfi.github.io/fishd-mobile-site/#/en-US/components/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md-owner";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: ".fishd-menu-submenu-selected .misc-type",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
            lang: {
              defaultValue: ["en-US"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fishd-mobile",
      pathsToMatch: [
        "https://nsfi.github.io/fishd-mobile-site/#/zh-CN/components/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md-owner";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: ".fishd-menu-submenu-selected .misc-type",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "fishd-mobile",
      pathsToMatch: [
        "https://nsfi.github.io/fishd-mobile-site/#/zh-CN/components/quickStart**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md-owner";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content: ".markdown p, .markdown li",
            lvl0: {
              selectors: ".fishd-menu-submenu-selected .misc-type",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "fishd-mobile": {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});