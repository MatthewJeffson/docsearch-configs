new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://school.nicezhuanye.com/opendocs/docs/",
    "http://school.nicezhuanye.com/",
    "http://school.nicezhuanye.com/opendocs/docs/open/guide/%e6%8e%a5%e5%85%a5%e6%b5%81%e7%a8%8b",
  ],
  renderJavaScript: false,
  sitemaps: ["http://school.nicezhuanye.com/opendocs/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://school.nicezhuanye.com/**"],
  schedule: "at 15:10 on Thursday",
  actions: [
    {
      indexName: "nicezhuanye_school",
      pathsToMatch: [
        "http://school.nicezhuanye.com/opendocs/docs/**",
        "http://school.nicezhuanye.com/opendocs/docs/open/guide/%e6%8e%a5%e5%85%a5%e6%b5%81%e7%a8%8b**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[class^='docItemContainer_'] h1",
            content:
              "[class^='docItemContainer_'] p, [class^='docItemContainer_'] li",
            lvl0: {
              selectors: ".menu__link--sublist.menu__link--active",
              defaultValue: "Documentation",
            },
            lvl2: "[class^='docItemContainer_'] h2",
            lvl3: "[class^='docItemContainer_'] h3",
            lvl4: "[class^='docItemContainer_'] h4",
            lvl5: "[class^='docItemContainer_'] h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    nicezhuanye_school: {
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