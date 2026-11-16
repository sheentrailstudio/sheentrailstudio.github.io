#!/usr/bin/env bash
# Rebuild the Chinese font for the Amen Journal share image.
# The font is cut down to the characters that appear in route.tsx, so run this
# after changing any text there. Uses Google Fonts' `text=` subsetting; needs
# only curl and python3. Noto Sans TC is OFL (see OFL.txt beside the font).
set -euo pipefail
dir="$(cd "$(dirname "$0")/.." && pwd)/app/products/amenjournal/og.png"
text=$(python3 -c 'import sys; print("".join(sorted({c for c in open(sys.argv[1], encoding="utf-8").read() if c.isprintable()})))' "$dir/route.tsx")
query=$(python3 -c 'import sys, urllib.parse; print(urllib.parse.quote(sys.argv[1]))' "$text")
css=$(curl -fsS -A curl "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@600&text=$query")
url=$(printf '%s' "$css" | grep -o 'https://fonts.gstatic.com/[^)]*')
curl -fsS -o "$dir/NotoSansTC-SemiBold.subset.ttf" "$url"
ls -la "$dir/NotoSansTC-SemiBold.subset.ttf"
