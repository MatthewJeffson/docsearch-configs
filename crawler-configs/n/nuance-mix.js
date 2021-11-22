new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.mix.nuance.com/",
    "https://docs.mix.nuance.com/nlu-trsx-app-spec/",
    "https://docs.mix.nuance.com/dialog-app-spec/",
    "https://docs.mix.nuance.com/technical-requirements/",
    "https://docs.mix.nuance.com/languages/",
    "https://docs.mix.nuance.com/glossary/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/downloads/**",
    "https://docs.mix.nuance.com/mix-datapack/v6_x/**",
    "https://docs.mix.nuance.com/asr-grpc/v1beta1/**",
    "https://docs.mix.nuance.com/asr-grpc/v1beta2/**",
    "**/index.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.mix.nuance.com/**"],
  schedule: "at 15:40 on Thursday",
  actions: [
    {
      indexName: "nuance-mix",
      pathsToMatch: [
        "https://docs.mix.nuance.com/**",
        "https://docs.mix.nuance.com/nlu-trsx-app-spec/**",
        "https://docs.mix.nuance.com/dialog-app-spec/**",
        "https://docs.mix.nuance.com/technical-requirements/**",
        "https://docs.mix.nuance.com/languages/**",
        "https://docs.mix.nuance.com/glossary/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".products-container";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content:
              ".content p, .content li, .content td:not(:first-child), .content aside",
            lvl0: {
              selectors: "title",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3, .content td:first-child",
            lvl4: ".content h4",
            lvl5: ".content h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "nuance-mix": {
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
      separatorsToIndex: "_",
    },
  },
});