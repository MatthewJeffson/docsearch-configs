new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://docs.mongodb.com/"],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "https://docs.mongodb.com/vd**",
    "https://docs.mongodb.com/vd**/**",
    "**/release-notes/**",
    "**/api/**",
    "**/reference/**",
    "**/master/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.mongodb.com/**"],
  schedule: "at 10:30 on Thursday",
  actions: [
    {
      indexName: "mongodb",
      pathsToMatch: ["https://docs.mongodb.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#on-this-page";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".section h1",
            content: ".section p, .section li",
            lvl0: {
              selectors: ".bc > ul > li:nth-child(1) > a",
              defaultValue: "Documentation",
            },
            lvl2: ".section h2",
            lvl3: ".section h3",
            lvl4: ".section h4",
            lvl5: ".section h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    mongodb: {
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