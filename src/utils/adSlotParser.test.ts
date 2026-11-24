import test from 'node:test';
import assert from 'node:assert/strict';
import {
  generateAdsConfigTsFile,
  generateVercelEnvBlock,
  isBanner250x300Active,
  isMonetagPopunderActive,
  isNativeBannerActive,
  isSocialBarActive,
  normalizeScriptUrl,
  parseAdsterraBanner250x300,
  parseAdsterraNativeBanner,
  parseAdsterraSocialBar,
  parseMonetagPopunder,
  type SiteAdsConfig,
} from './adSlotParser';

test('normalizeScriptUrl converts protocol-relative and trims quotes', () => {
  assert.equal(
    normalizeScriptUrl(" '//pl12345.profitablecpmrate.com/ab/cd/ef.js' "),
    'https://pl12345.profitablecpmrate.com/ab/cd/ef.js'
  );
  assert.equal(
    normalizeScriptUrl('https://example.com/tag.js'),
    'https://example.com/tag.js'
  );
  assert.equal(normalizeScriptUrl(''), '');
});

test('parseAdsterraSocialBar extracts script src from Adsterra snippet or URL', () => {
  const snippet = `<script type='text/javascript' src='//pl25111222.profitablecpmrate.com/aa/bb/cc/112233.js'></script>`;
  assert.deepEqual(parseAdsterraSocialBar(snippet), {
    scriptSrc: 'https://pl25111222.profitablecpmrate.com/aa/bb/cc/112233.js',
  });
});

test('parseAdsterraNativeBanner extracts async invoke script src and container id', () => {
  const snippet = `
    <script async="async" data-cfasync="false" src="//pl25111222.profitablecpmrate.com/998877665544/invoke.js"></script>
    <div id="container-998877665544"></div>
  `;
  assert.deepEqual(parseAdsterraNativeBanner(snippet), {
    scriptSrc: 'https://pl25111222.profitablecpmrate.com/998877665544/invoke.js',
    containerId: 'container-998877665544',
  });
});

test('parseAdsterraBanner250x300 extracts key, dimensions, and invoke script', () => {
  const snippet = `
    <script type="text/javascript">
      atOptions = {
        'key' : 'abcd1234ef567890abcd1234ef567890',
        'format' : 'iframe',
        'height' : 300,
        'width' : 250,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="//www.highperformanceformat.com/abcd1234ef567890abcd1234ef567890/invoke.js"></script>
  `;
  assert.deepEqual(parseAdsterraBanner250x300(snippet), {
    key: 'abcd1234ef567890abcd1234ef567890',
    scriptSrc: 'https://www.highperformanceformat.com/abcd1234ef567890abcd1234ef567890/invoke.js',
    width: 250,
    height: 300,
  });
});

test('parseMonetagPopunder extracts zone and script src across Monetag formats', () => {
  const modernSnippet = `<script>(function(s){s.dataset.zone='8765432',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>`;
  assert.deepEqual(parseMonetagPopunder(modernSnippet), {
    zoneId: '8765432',
    scriptSrc: 'https://al5sm.com/tag.min.js',
  });

  const tagAttrSnippet = `<script src="https://thubanoa.com/1?z=7654321" data-zone="7654321" async></script>`;
  assert.deepEqual(parseMonetagPopunder(tagAttrSnippet), {
    zoneId: '7654321',
    scriptSrc: 'https://thubanoa.com/1?z=7654321',
  });

  const classicSnippet = `<script>(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('grooktes.net',6543210,document.createElement('script'))</script>`;
  assert.deepEqual(parseMonetagPopunder(classicSnippet), {
    zoneId: '6543210',
    scriptSrc: 'https://grooktes.net/400/6543210',
  });
});

test('Ad active predicates and config export generators work cleanly', () => {
  const cfg: SiteAdsConfig = {
    socialBar: {
      enabled: true,
      scriptSrc: 'https://cdn.example.com/social.js',
      rawSnippet: '',
    },
    nativeBanner: {
      enabled: true,
      scriptSrc: 'https://cdn.example.com/native/invoke.js',
      containerId: 'container-abc123',
      rawSnippet: '',
    },
    banner250x300: {
      enabled: true,
      key: 'abc123key',
      scriptSrc: 'https://www.highperformanceformat.com/abc123key/invoke.js',
      width: 250,
      height: 300,
      showInSidebar: true,
      showInArticle: true,
      rawSnippet: '',
    },
    monetagPopunder: {
      enabled: true,
      zoneId: '8765432',
      scriptSrc: 'https://al5sm.com/tag.min.js',
      rawSnippet: '',
    },
  };

  assert.equal(isSocialBarActive(cfg.socialBar), true);
  assert.equal(isNativeBannerActive(cfg.nativeBanner), true);
  assert.equal(isBanner250x300Active(cfg.banner250x300), true);
  assert.equal(isMonetagPopunderActive(cfg.monetagPopunder), true);

  const tsOut = generateAdsConfigTsFile(cfg);
  assert.ok(tsOut.includes('DEFAULT_ADS_CONFIG'));
  assert.ok(tsOut.includes('container-abc123'));

  const envOut = generateVercelEnvBlock(cfg);
  assert.ok(envOut.includes('NEXT_PUBLIC_ADSTERRA_SOCIALBAR_SRC="https://cdn.example.com/social.js"'));
  assert.ok(envOut.includes('NEXT_PUBLIC_MONETAG_POPUNDER_ZONE="8765432"'));
});
