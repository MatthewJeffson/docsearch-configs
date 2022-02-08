new Crawler({
  appId: '',
  apiKey: '',
  rateLimit: 8,
  startUrls: [
    'https://sendbird.com/docs/chat/v1/ios/',
    'https://sendbird.com/',
    'https://sendbird.com/docs/chat/v1/android/',
    'https://sendbird.com/docs/chat/v1/javascript/',
    'https://sendbird.com/docs/chat/v1/flutter/',
    'https://sendbird.com/docs/chat/v1/dotnet/',
    'https://sendbird.com/docs/chat/v1/unity/',
    'https://sendbird.com/docs/chat/v1/platform-api/',
    'https://sendbird.com/docs/chat/v1/react/',
    'https://sendbird.com/docs/chat/v3/ios/',
    'https://sendbird.com/docs/chat/v3/android/',
    'https://sendbird.com/docs/chat/v3/javascript/',
    'https://sendbird.com/docs/chat/v3/flutter/',
    'https://sendbird.com/docs/chat/v3/dotnet/',
    'https://sendbird.com/docs/chat/v3/unity/',
    'https://sendbird.com/docs/chat/v3/platform-api/',
    'https://sendbird.com/docs/chat/v3/react/',
    'https://sendbird.com/docs/calls/v1/ios/',
    'https://sendbird.com/docs/calls/v1/android/',
    'https://sendbird.com/docs/calls/v1/javascript/',
    'https://sendbird.com/docs/calls/v1/flutter/',
    'https://sendbird.com/docs/calls/v1/dotnet/',
    'https://sendbird.com/docs/calls/v1/unity/',
    'https://sendbird.com/docs/calls/v1/platform-api/',
    'https://sendbird.com/docs/calls/v1/react/',
    'https://sendbird.com/docs/calls/v3/ios/',
    'https://sendbird.com/docs/calls/v3/android/',
    'https://sendbird.com/docs/calls/v3/javascript/',
    'https://sendbird.com/docs/calls/v3/flutter/',
    'https://sendbird.com/docs/calls/v3/dotnet/',
    'https://sendbird.com/docs/calls/v3/unity/',
    'https://sendbird.com/docs/calls/v3/platform-api/',
    'https://sendbird.com/docs/calls/v3/react/',
    'https://sendbird.com/docs/desk/v1/ios/',
    'https://sendbird.com/docs/desk/v1/android/',
    'https://sendbird.com/docs/desk/v1/javascript/',
    'https://sendbird.com/docs/desk/v1/flutter/',
    'https://sendbird.com/docs/desk/v1/dotnet/',
    'https://sendbird.com/docs/desk/v1/unity/',
    'https://sendbird.com/docs/desk/v1/platform-api/',
    'https://sendbird.com/docs/desk/v1/react/',
    'https://sendbird.com/docs/desk/v3/ios/',
    'https://sendbird.com/docs/desk/v3/android/',
    'https://sendbird.com/docs/desk/v3/javascript/',
    'https://sendbird.com/docs/desk/v3/flutter/',
    'https://sendbird.com/docs/desk/v3/dotnet/',
    'https://sendbird.com/docs/desk/v3/unity/',
    'https://sendbird.com/docs/desk/v3/platform-api/',
    'https://sendbird.com/docs/desk/v3/react/',
    'https://sendbird.com/docs/uikit/v1/ios/',
    'https://sendbird.com/docs/uikit/v1/android/',
    'https://sendbird.com/docs/uikit/v1/javascript/',
    'https://sendbird.com/docs/uikit/v1/flutter/',
    'https://sendbird.com/docs/uikit/v1/dotnet/',
    'https://sendbird.com/docs/uikit/v1/unity/',
    'https://sendbird.com/docs/uikit/v1/platform-api/',
    'https://sendbird.com/docs/uikit/v1/react/',
    'https://sendbird.com/docs/uikit/v3/ios/',
    'https://sendbird.com/docs/uikit/v3/android/',
    'https://sendbird.com/docs/uikit/v3/javascript/',
    'https://sendbird.com/docs/uikit/v3/flutter/',
    'https://sendbird.com/docs/uikit/v3/dotnet/',
    'https://sendbird.com/docs/uikit/v3/unity/',
    'https://sendbird.com/docs/uikit/v3/platform-api/',
    'https://sendbird.com/docs/uikit/v3/react/',
    'https://sendbird.com/docs/syncmanager/v1/ios/',
    'https://sendbird.com/docs/syncmanager/v1/android/',
    'https://sendbird.com/docs/syncmanager/v1/javascript/',
    'https://sendbird.com/docs/syncmanager/v1/flutter/',
    'https://sendbird.com/docs/syncmanager/v1/dotnet/',
    'https://sendbird.com/docs/syncmanager/v1/unity/',
    'https://sendbird.com/docs/syncmanager/v1/platform-api/',
    'https://sendbird.com/docs/syncmanager/v1/react/',
    'https://sendbird.com/docs/syncmanager/v3/ios/',
    'https://sendbird.com/docs/syncmanager/v3/android/',
    'https://sendbird.com/docs/syncmanager/v3/javascript/',
    'https://sendbird.com/docs/syncmanager/v3/flutter/',
    'https://sendbird.com/docs/syncmanager/v3/dotnet/',
    'https://sendbird.com/docs/syncmanager/v3/unity/',
    'https://sendbird.com/docs/syncmanager/v3/platform-api/',
    'https://sendbird.com/docs/syncmanager/v3/react/',
    'https://sendbird.com/docs/',
    'https://sendbird.com/docs/chat/v3/ios/getting-started/about-chat-sdk',
  ],
  renderJavaScript: false,
  sitemaps: ['https://sendbird.com/docs/sitemap.xml'],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ['https://sendbird.com/**'],
  schedule: 'at 15:00 on Friday',
  actions: [
    {
      indexName: 'sendbird',
      pathsToMatch: ['https://sendbird.com/docs/**'],
      recordExtractor: ({ $, helpers, url }) => {
        // This could be done by adding a `meta` tag on the website with the `platform`, `product` and `version`.
        // Read more here: https://docsearch.algolia.com/docs/required-configuration/#introduce-global-information-as-meta-tags

        // Splitting path to retrieve platform, product and version with following schema
        // domain.com/docs/PRODUCT/VERSION/PLATFORM/foo**
        const pathParts = url.pathname.split('/');
        const product = pathParts[1];
        const version = pathParts[2];
        const platform = pathParts[3];

        return helpers.docsearch({
          recordProps: {
            lvl1: '#sbd_platform',
            content:
              '#sbd_contents p, #sbd_contents li, #sbd_contents a, #sbd_contents blockquote, #sbd_contents table td p',
            lvl0: {
              selectors: '#sbd_product',
              defaultValue: 'Product',
            },
            lvl2: '#sbd_contents h1',
            lvl3: '#sbd_contents h2',
            lvl4: '#sbd_contents h3',
            lvl5: '#sbd_contents h4',
            platform: {
              defaultValue: [platform],
            },
            version: {
              defaultValue: [version],
            },
            product: {
              defaultValue: [product],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    sendbird: {
      attributesForFaceting: ['type', 'lang', 'product', 'version', 'platform'],
      attributesToRetrieve: ['hierarchy', 'content', 'anchor', 'url'],
      attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
      searchableAttributes: [
        'unordered(hierarchy_radio_camel.lvl0)',
        'unordered(hierarchy_radio.lvl0)',
        'unordered(hierarchy_radio_camel.lvl1)',
        'unordered(hierarchy_radio.lvl1)',
        'unordered(hierarchy_radio_camel.lvl2)',
        'unordered(hierarchy_radio.lvl2)',
        'unordered(hierarchy_radio_camel.lvl3)',
        'unordered(hierarchy_radio.lvl3)',
        'unordered(hierarchy_radio_camel.lvl4)',
        'unordered(hierarchy_radio.lvl4)',
        'unordered(hierarchy_radio_camel.lvl5)',
        'unordered(hierarchy_radio.lvl5)',
        'unordered(hierarchy_radio_camel.lvl6)',
        'unordered(hierarchy_radio.lvl6)',
        'unordered(hierarchy_camel.lvl0)',
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy_camel.lvl1)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy_camel.lvl2)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy_camel.lvl3)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy_camel.lvl4)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy_camel.lvl5)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy_camel.lvl6)',
        'unordered(hierarchy.lvl6)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
      separatorsToIndex: '-',
    },
  },
});
