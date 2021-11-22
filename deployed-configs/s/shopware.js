new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developers.shopware.com/developers-guide/rest-api",
    "https://developers.shopware.com/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**.md"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developers.shopware.com/**"],
  schedule: "at 15:10 on Friday",
  actions: [
    {
      indexName: "shopware",
      pathsToMatch: [
        "https://developers.shopware.com/developers-guide/rest-api**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".inner-container h1",
            content:
              ".inner-container p, .inner-container p, .inner-container td",
            lvl0: {
              selectors: "",
              defaultValue: "REST API",
            },
            lvl2: ".inner-container h2",
            lvl3: ".inner-container h3",
            lvl4: ".inner-container h4",
            lvl5: ".inner-container h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "shopware",
      pathsToMatch: [
        "https://developers.shopware.com**/**",
        "!https://developers.shopware.com/developers-guide/rest-api**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".inner-container h1",
            content:
              ".inner-container p, .inner-container p, .inner-container td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".inner-container h2",
            lvl3: ".inner-container h3",
            lvl4: ".inner-container h4",
            lvl5: ".inner-container h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    shopware: {
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