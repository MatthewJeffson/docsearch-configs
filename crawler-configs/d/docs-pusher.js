new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://pusher.com/docs/channels",
    "https://pusher.com/",
    "https://pusher.com/docs/chatkit",
    "https://pusher.com/docs/beams",
  ],
  renderJavaScript: false,
  sitemaps: ["https://pusher.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://pusher.com/**"],
  schedule: "at 15:30 on Tuesday",
  actions: [
    {
      indexName: "docs-pusher",
      pathsToMatch: ["https://pusher.com/docs/channels**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h1",
            content: "main article p, main article li",
            lvl0: {
              selectors: "nav h1",
              defaultValue: "Documentation",
            },
            lvl2: "main article h2",
            lvl3: "main article h3",
            lvl4: "main article h4",
            tags: {
              defaultValue: ["channels"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "docs-pusher",
      pathsToMatch: ["https://pusher.com/docs/chatkit**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h1",
            content: "main article p, main article li",
            lvl0: {
              selectors: "nav h1",
              defaultValue: "Documentation",
            },
            lvl2: "main article h2",
            lvl3: "main article h3",
            lvl4: "main article h4",
            tags: {
              defaultValue: ["chatkit"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "docs-pusher",
      pathsToMatch: ["https://pusher.com/docs/beams**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main article h1",
            content: "main article p, main article li",
            lvl0: {
              selectors: "nav h1",
              defaultValue: "Documentation",
            },
            lvl2: "main article h2",
            lvl3: "main article h3",
            lvl4: "main article h4",
            tags: {
              defaultValue: ["beams"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "docs-pusher": {
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