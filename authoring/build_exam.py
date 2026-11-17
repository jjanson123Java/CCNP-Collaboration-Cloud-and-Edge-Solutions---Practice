#!/usr/bin/env python3
"""
Build one practice-exam page from the shared template.

Usage:
    python3 build_exam.py <exam_dir> <repo_root>

<exam_dir> must contain:
    config.json   - page text, links, folder (see exam/clcei/config.json)
    questions.js  - defines:  const BANK = [ ... ];
    sources.js    - defines:  const SRC = {...};  const VER = {...};  const CHANGES = [...];

Writes:
    <repo_root>/<folder>/index.html
    <repo_root>/<folder>/manifest.webmanifest   (only when folder is not the repo root)

Run validate_bank.js first; this script also refuses to build if a placeholder is left unfilled.
"""
import json, re, sys, os, html

def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    exam_dir, repo = sys.argv[1], sys.argv[2]
    here = os.path.dirname(os.path.abspath(__file__))
    tpl = open(os.path.join(here, "template", "exam_template.html"), encoding="utf-8").read()
    cfg = json.load(open(os.path.join(exam_dir, "config.json"), encoding="utf-8"))
    bank_js = open(os.path.join(exam_dir, "questions.js"), encoding="utf-8").read().strip()
    src_js = open(os.path.join(exam_dir, "sources.js"), encoding="utf-8").read().strip()

    # Count chapters / questions from the generated JSON-compatible bank.
    match = re.fullmatch(r"const\s+BANK\s*=\s*(\[.*\]);", bank_js, flags=re.S)
    if not match:
        sys.exit("questions.js: BANK must be a JSON-compatible array")
    bank = json.loads(match.group(1))
    nums = [int(ch["n"]) for ch in bank]
    qcount = sum(len(ch["qs"]) for ch in bank)
    if not nums or not qcount:
        sys.exit("questions.js: could not find chapters/questions - check the format")

    folder = cfg["folder"].strip("/")
    prefix = "" if folder == "" else "../" * len(folder.split("/"))

    vals = {
        "PAGE_TITLE": cfg["page_title"],
        "META_DESCRIPTION": cfg["meta_description"],
        "APP_SHORT_NAME": cfg["app_short_name"],
        "EYEBROW": cfg["eyebrow"],
        "H1_TITLE": cfg["h1_title_html"],
        "STUDY_GUIDE_URL": cfg["study_guide_url"],
        "STUDY_GUIDE_LINK_TEXT": cfg["study_guide_link_text"],
        "OFFLINE_ZIP_URL": cfg["offline_zip_url"],
        "REPO_URL": cfg["repo_url"],
        "REPO_URL_TEXT": cfg["repo_url"].replace("https://", ""),
        "EXAM_NUMBER": cfg["exam_number"],
        "STORAGE_KEY": cfg["storage_key"],
        "PREP_SITES_HTML": cfg["prep_sites_html"],
        "OTHER_EXAM_LINKS": cfg.get("other_exam_links_html", ""),
        "FIRST_CH": str(min(nums)),
        "LAST_CH": str(max(nums)),
        "TOTAL_Q": str(qcount),
        "ASSET_PREFIX": prefix,
    }
    out = tpl.replace("/*{{BANK_JS}}*/", bank_js).replace("/*{{SOURCES_JS}}*/", src_js)
    for k, v in vals.items():
        out = out.replace("{{" + k + "}}", v)
    # The per-exam manifest sits next to index.html, not at the asset prefix.
    if folder:
        out = out.replace(f'href="{prefix}manifest.webmanifest"', 'href="manifest.webmanifest"')
    left = re.findall(r"\{\{[A-Z_]+\}\}", out)
    if left:
        sys.exit(f"Unfilled placeholders: {sorted(set(left))}")

    dest = os.path.join(repo, folder) if folder else repo
    os.makedirs(dest, exist_ok=True)
    open(os.path.join(dest, "index.html"), "w", encoding="utf-8").write(out)

    man = {
            "name": cfg["manifest_name"],
            "short_name": cfg["app_short_name"],
            "description": cfg["meta_description"],
            "start_url": "./index.html",
            "scope": "./",
            "display": "standalone",
            "orientation": "any",
            "background_color": "#0b1220",
            "theme_color": "#0b1220",
            "categories": ["education", "productivity"],
            "icons": [
                {"src": prefix + "icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
                {"src": prefix + "icons/icon-512.png", "sizes": "512x512", "type": "image/png"},
                {"src": prefix + "icons/maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
            ],
    }
    json.dump(man, open(os.path.join(dest, "manifest.webmanifest"), "w", encoding="utf-8"), indent=2)

    print(f"Built {os.path.join(dest, 'index.html')}: {len(set(nums))} chapters, {qcount} questions")

if __name__ == "__main__":
    main()
