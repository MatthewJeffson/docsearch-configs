new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://glamorous.rocks/",
    "https://fr.glamorous.rocks/",
    "https://es.glamorous.rocks/",
    "https://de.glamorous.rocks/",
    "https://zh.glamorous.rocks/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://glamorous.rocks/**",
    "https://fr.glamorous.rocks/**",
    "https://es.glamorous.rocks/**",
    "https://de.glamorous.rocks/**",
    "https://zh.glamorous.rocks/**",
  ],
  schedule: "at 06:20 on Wednesday",
  actions: [
    {
      indexName: "glamorous",
      pathsToMatch: ["https://glamorous.rocks/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            tags: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "glamorous",
      pathsToMatch: ["https://fr.glamorous.rocks/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            tags: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "glamorous",
      pathsToMatch: ["https://es.glamorous.rocks/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            tags: {
              defaultValue: ["es"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "glamorous",
      pathsToMatch: ["https://de.glamorous.rocks/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            tags: {
              defaultValue: ["de"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "glamorous",
      pathsToMatch: ["https://zh.glamorous.rocks/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            tags: {
              defaultValue: ["zh"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    glamorous: {
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