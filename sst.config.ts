/// <reference path="./.sst/platform/config.d.ts" />

/**
 * Paved-road SST v4 config. Nexus's render-config stage substitutes the
 * __TOKENS__ at scaffold time (see scripts/check-tokens.sh for the contract).
 *
 * Stage tiers come from the shim's SST_STAGE_TIER export (b4m-infra#185):
 * production | staging | preview. No per-repo stage-name string checks.
 *
 * This template requires ZERO secrets to deploy green. that's deliberate:
 * the first deploy proves infra, not app config.
 */
const TIER = process.env.SST_STAGE_TIER ?? 'staging';

export default $config({
  app(input) {
    return {
      name: '__APP_NAME__',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    const domain =
      TIER === 'production' ? '__DOMAIN__' : TIER === 'staging' ? '__STAGING_DOMAIN__' : `${$app.stage}.__DOMAIN__`;
    new sst.aws.Nextjs('Web', { domain });
  },
});
