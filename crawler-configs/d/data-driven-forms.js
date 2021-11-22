new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://data-driven-forms.org/",
    "https://data-driven-forms.org/components/renderer",
    "https://data-driven-forms.org/schema/introduction",
    "https://data-driven-forms.org/hooks/use-field-api",
    "https://data-driven-forms.org/mappers/custom-mapper",
    "https://data-driven-forms.org/examples/mui-one-row-layout",
    "https://data-driven-forms.org/utilities/standalone-validation",
    "https://data-driven-forms.org/provided-mappers/component-api",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [
    "https://data-driven-forms.org/provided-mappers/checkbox((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/checkbox((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/checkbox-multiple((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/checkbox-multiple((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/date-picker((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/date-picker((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/dual-list-select((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/dual-list-select((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/field-array((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/field-array((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/plain-text((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/plain-text((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/radio((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/radio((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/select((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/select((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/slider((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/slider((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/sub-form((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/sub-form((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/switch((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/switch((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/tabs((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/tabs((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/textarea((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/textarea((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/text-field((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/text-field((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/time-picker((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/time-picker((?!?)|(\\?mapper=&schema=))**/**",
    "https://data-driven-forms.org/provided-mappers/wizard((?!?)|(\\?mapper=&schema=))**",
    "https://data-driven-forms.org/provided-mappers/wizard((?!?)|(\\?mapper=&schema=))**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://data-driven-forms.org/**"],
  schedule: "at 15:00 on Tuesday",
  actions: [
    {
      indexName: "data-driven-forms",
      pathsToMatch: [
        "https://data-driven-forms.org/**",
        "https://data-driven-forms.org/components/renderer**/**",
        "https://data-driven-forms.org/schema/introduction**/**",
        "https://data-driven-forms.org/hooks/use-field-api**/**",
        "https://data-driven-forms.org/mappers/custom-mapper**/**",
        "https://data-driven-forms.org/examples/mui-one-row-layout**/**",
        "https://data-driven-forms.org/utilities/standalone-validation**/**",
        "https://data-driven-forms.org/provided-mappers/component-api**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h2",
            content:
              ".DocSearch-content p, .DocSearch-content li, .DocSearch-content .DocTable",
            lvl0: {
              selectors: ".DocSearch-content h1",
            },
            lvl2: ".DocSearch-content h3",
            lvl3: ".DocSearch-content h4",
            lvl4: ".DocSearch-content h5",
            lvl5: ".DocSearch-content h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "data-driven-forms": {
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