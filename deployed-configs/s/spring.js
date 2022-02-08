new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://rwinch.github.io/spring-reference/framework/5.3/",
    "https://rwinch.github.io/",
    "https://rwinch.github.io/spring-reference/framework/5.6/",
    "https://rwinch.github.io/spring-reference/framework/6/",
    "https://rwinch.github.io/spring-reference/security/5.3/",
    "https://rwinch.github.io/spring-reference/security/5.6/",
    "https://rwinch.github.io/spring-reference/security/6/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://rwinch.github.io/**"],
  schedule: "at 15:30 on Friday",
  actions: [
    {
      indexName: "spring",
      pathsToMatch: [
        "https://rwinch.github.io/spring-reference/framework/5.3/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            version: {
              defaultValue: ["5.3"],
            },
            platform: {
              defaultValue: ["framework"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "spring",
      pathsToMatch: [
        "https://rwinch.github.io/spring-reference/framework/5.6/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            version: {
              defaultValue: ["5.6"],
            },
            platform: {
              defaultValue: ["framework"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "spring",
      pathsToMatch: [
        "https://rwinch.github.io/spring-reference/framework/6/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            version: {
              defaultValue: ["6"],
            },
            platform: {
              defaultValue: ["framework"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "spring",
      pathsToMatch: [
        "https://rwinch.github.io/spring-reference/security/5.3/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            version: {
              defaultValue: ["5.3"],
            },
            platform: {
              defaultValue: ["security"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "spring",
      pathsToMatch: [
        "https://rwinch.github.io/spring-reference/security/5.6/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            version: {
              defaultValue: ["5.6"],
            },
            platform: {
              defaultValue: ["security"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "spring",
      pathsToMatch: ["https://rwinch.github.io/spring-reference/security/6/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            version: {
              defaultValue: ["6"],
            },
            platform: {
              defaultValue: ["security"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    spring: {
      attributesForFaceting: ["type", "lang", "version", "platform"],
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
      separatorsToIndex: "_",
    },
  },
});