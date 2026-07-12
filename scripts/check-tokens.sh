#!/usr/bin/env bash
# The token contract between this template and Nexus's render-config stage.
# Fails when placeholder tokens remain (i.e. render didn't run or missed one).
# Nexus's cli/gateway.ts renderTemplateTokens() must produce exactly this set.
set -euo pipefail

TOKENS=(
  __APP_NAME__
  __DOMAIN__
  __STAGING_DOMAIN__
  __PREVIEW_DOMAIN__
  __WORKFLOW_TEMPLATES_REF__
  __WORKFLOW_TEMPLATES_CLEANUP_REF__
  __PREVIEWS__
)

found=0
for t in "${TOKENS[@]}"; do
  if grep -rl --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next --exclude-dir=.sst --exclude=check-tokens.sh "$t" . > /dev/null 2>&1; then
    echo "unrendered token: $t"
    grep -rl --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next --exclude-dir=.sst --exclude=check-tokens.sh "$t" . | sed 's/^/  /'
    found=1
  fi
done

if [ "$found" -eq 1 ]; then
  echo "FAIL: template tokens remain. run the Nexus render-config stage (or substitute manually)."
  exit 1
fi
echo "OK: no template tokens remain."
