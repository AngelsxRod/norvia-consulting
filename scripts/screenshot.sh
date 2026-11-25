#!/usr/bin/env bash
# Capturas a pantalla completa de una ruta en varios anchos con Chrome headless.
# Uso: scripts/screenshot.sh <ruta> <directorio-salida> [anchos...]
set -euo pipefail
route="$1"; out="$2"; shift 2
widths=("${@:-360 768 1440}")
mkdir -p "$out"
name=$(echo "$route" | tr '/' '_' | sed 's/^_//;s/_$//'); name=${name:-home}
for w in ${widths[@]}; do
  google-chrome --headless=new --disable-gpu --hide-scrollbars --window-size="$w",${HEIGHT:-900} \
    --virtual-time-budget=8000 --screenshot="$out/$name-$w.png" "http://localhost:${PORT:-4174}$route" 2>/dev/null
done
