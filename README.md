# __APP_NAME__

Scaffolded by [Nexus](https://github.com/Bike4Mind/nexus) onto the SST paved road (SST v4 + Next.js 16).

- prod: https://__DOMAIN__
- staging: https://__STAGING_DOMAIN__
- previews: https://__PREVIEW_DOMAIN__ (per PR, torn down on close)

## Day one

```bash
pnpm install
pnpm dev
```

CI/CD is already wired: push to `main` deploys staging + production, PRs against `main` get preview environments (if enabled at scaffold time).

## Before feature work

1. Declare secrets in `secrets.example.ts` + `sst.config.ts`.
2. `sst secret set <Name> <value> --stage production` and `--fallback` for previews (without the fallback, preview stages deploy with broken config).
3. Replace `app/page.tsx`.

## Template maintainers

This repo is the **public** template `Bike4Mind/sst-app-template` (public so any org can instantiate it. cross-org constraint). Placeholder tokens (`__LIKE_THIS__`) are substituted by Nexus's render-config stage; `pnpm check-tokens` verifies none remain in a scaffolded copy. The token list is a contract with `cli/gateway.ts renderTemplateTokens()` in the Nexus repo. change both together.

Setup checklist a consumer repo needs (Nexus automates all of this):
- GitHub Environments `production`, `staging`, `preview_cleanup`, each with `AWS_ROLE_ARN`
- Repo added to org-secret visibility lists (`B4M_CI_BOT_PRIVATE_KEY`, `SLACK_WEBHOOK_URL`)
- OIDC deploy roles + DNS records (b4m-infra tofu)
