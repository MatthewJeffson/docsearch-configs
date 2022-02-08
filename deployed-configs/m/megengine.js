new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://megengine.org.cn/doc/stable/zh/reference/api/",
    "https://megengine.org.cn/",
    "https://megengine.org.cn/doc/stable/zh/user-guide/",
    "https://megengine.org.cn/doc/stable/zh/getting-started/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/index.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://megengine.org.cn/**"],
  schedule: "at 10:00 on Thursday",
  actions: [
    {
      indexName: "megengine",
      pathsToMatch: ["https://megengine.org.cn/doc/stable/zh/reference/api/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Python API",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            tags: {
              defaultValue: ["api"],
            },
            pageRank: "10",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "megengine",
      pathsToMatch: ["https://megengine.org.cn/doc/stable/zh/user-guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Guide",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            tags: {
              defaultValue: ["guide"],
            },
            pageRank: "8",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "megengine",
      pathsToMatch: [
        "https://megengine.org.cn/doc/stable/zh/getting-started/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorial",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            tags: {
              defaultValue: ["tutorial"],
            },
            pageRank: "6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    megengine: {
      attributesForFaceting: ["type", "lang", "tags"],
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