#!/usr/bin/env python3
"""Build download/CLCEI-Practice-Offline.zip.
Usage: python3 make_offline_zips.py <repo_root>
Each ZIP holds one folder with index.html (fully self-contained), README.md and icons/.
The offline copy opens straight from disk (file://); no internet needed."""
import sys, os, zipfile, re
repo = sys.argv[1]
def pack(zip_name, folder_name, page_path):
    html = open(page_path, encoding="utf-8").read()
    # In the ZIP, index.html sits next to icons/, so strip any ../ asset prefixes.
    html = re.sub(r'(href|src)="(\.\./)+(icons/|manifest\.webmanifest|sw\.js)', r'\1="\3', html)
    html = html.replace('register("../sw.js")', 'register("sw.js")')
    out = os.path.join(repo, "download", zip_name)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr(f"{folder_name}/index.html", html)
        z.write(os.path.join(repo, "README.md"), f"{folder_name}/README.md")
        for f in sorted(os.listdir(os.path.join(repo, "icons"))):
            z.write(os.path.join(repo, "icons", f), f"{folder_name}/icons/{f}")
    print("wrote", out)
pack("CLCEI-Practice-Offline.zip", "CLCEI-Practice", os.path.join(repo, "index.html"))
