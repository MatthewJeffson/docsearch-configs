new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://at-design.alibaba-inc.com/dev-doc/",
    "https://at-design.alibaba-inc.com/",
    "https://at-design.alibaba-inc.com/doc/layout-pattern/",
    "https://at-design.alibaba-inc.com/doc/",
    "https://at-design.alibaba-inc.com/basic/",
    "https://at-design.alibaba-inc.com/biz/",
    "https://at-design.alibaba-inc.com/uiless/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://at-design.alibaba-inc.com/public/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://at-design.alibaba-inc.com/**"],
  schedule: "at 01:20 on Tuesday",
  actions: [
    {
      indexName: "alibaba-inc_clarity_design",
      pathsToMatch: ["https://at-design.alibaba-inc.com/dev-doc/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".demo-section";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc-page-body-wrapper header h1",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors:
                ".side-menu .next-menu-item.next-opened .subnav-label-text",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown-body h1",
            lvl3: ".markdown-body h2",
            lvl4: ".markdown-body h3",
            lvl5: ".markdown-body h4",
            lvl6: ".markdown-body h5",
            tags: {
              defaultValue: ["dev-doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "alibaba-inc_clarity_design",
      pathsToMatch: ["https://at-design.alibaba-inc.com/doc/layout-pattern/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".demo-section";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc-page-body-wrapper header h1",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors:
                ".side-menu .next-menu-item.next-opened .subnav-label-text",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown-body h1",
            lvl3: ".markdown-body h2",
            lvl4: ".markdown-body h3",
            lvl5: ".markdown-body h4",
            lvl6: ".markdown-body h5",
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "alibaba-inc_clarity_design",
      pathsToMatch: ["https://at-design.alibaba-inc.com/doc/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".demo-section";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc-page-body-wrapper header h1",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors:
                ".side-menu .next-menu-item.next-opened .subnav-label-text",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown-body h1",
            lvl3: ".markdown-body h2",
            lvl4: ".markdown-body h3",
            lvl5: ".markdown-body h4",
            lvl6: ".markdown-body h5",
            tags: {
              defaultValue: ["basic"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "alibaba-inc_clarity_design",
      pathsToMatch: ["https://at-design.alibaba-inc.com/basic/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".demo-section";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc-page-body-wrapper header h1",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors:
                ".side-menu .next-menu-item.next-opened .subnav-label-text",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown-body h1",
            lvl3: ".markdown-body h2",
            lvl4: ".markdown-body h3",
            lvl5: ".markdown-body h4",
            lvl6: ".markdown-body h5",
            tags: {
              defaultValue: ["basic"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "alibaba-inc_clarity_design",
      pathsToMatch: ["https://at-design.alibaba-inc.com/biz/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".demo-section";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc-page-body-wrapper header h1",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors:
                ".side-menu .next-menu-item.next-opened .subnav-label-text",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown-body h1",
            lvl3: ".markdown-body h2",
            lvl4: ".markdown-body h3",
            lvl5: ".markdown-body h4",
            lvl6: ".markdown-body h5",
            tags: {
              defaultValue: ["biz"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "alibaba-inc_clarity_design",
      pathsToMatch: ["https://at-design.alibaba-inc.com/uiless/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".demo-section";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc-page-body-wrapper header h1",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors:
                ".side-menu .next-menu-item.next-opened .subnav-label-text",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown-body h1",
            lvl3: ".markdown-body h2",
            lvl4: ".markdown-body h3",
            lvl5: ".markdown-body h4",
            lvl6: ".markdown-body h5",
            tags: {
              defaultValue: ["uiless"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "alibaba-inc_clarity_design": {
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