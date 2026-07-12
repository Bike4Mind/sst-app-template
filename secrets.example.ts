/**
 * Every SST Secret this app expects, in one place. The template ships EMPTY
 * on purpose: first deploy must be green with zero secrets (proves infra).
 *
 * When you add one:
 *   1. declare it here and in sst.config.ts:  const apiKey = new sst.Secret('ApiKey')
 *   2. set per-stage values:                  sst secret set ApiKey <value> --stage production
 *   3. set the account-wide preview fallback: sst secret set ApiKey <value> --fallback
 *      (without --fallback every prNNN preview deploys broken. b4m-infra#185 prereq 9)
 */
export const EXPECTED_SECRETS: string[] = [];
