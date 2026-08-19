import json, re, urllib.request
from datetime import datetime, timezone
from pathlib import Path

SOURCES = {
  "chain":"https://www.larochelle.fr/annuaires/lieux/annuaire/tour-de-la-chaine-1",
  "lanterne":"https://www.larochelle.fr/annuaires/lieux/annuaire/tour-de-la-lanterne-1",
  "museum":"https://museum.larochelle.fr/preparer-la-visite/informations-pratiques/acces-tarifs-et-horaires",
  "newworld":"https://museedunouveaumonde.larochelle.fr/preparer-la-visite/acces-tarifs-et-horaires",
  "maritime":"https://museemaritime.larochelle.fr/de/preparer-la-visite/acces-tarifs-et-horaires",
  "chapelle":"https://www.larochelle.fr/annuaires/lieux/annuaire/chapelle-des-dames-blanches",
  "jardin":"https://www.larochelle.fr/annuaires/lieux/annuaire/le-jardin-des-plantes"
}
out={"schemaVersion":"1.0","checkedAt":datetime.now(timezone.utc).isoformat(),"source":"GitHub Actions / official-source checks","overrides":{},"sources":SOURCES}
for key,url in SOURCES.items():
    try:
        req=urllib.request.Request(url,headers={"User-Agent":"CityGuides-LR-status-check/2.0"})
        html=urllib.request.urlopen(req,timeout=20).read().decode("utf-8","ignore")
        txt=re.sub(r"<[^>]+>"," ",html)
        txt=re.sub(r"\s+"," ",txt).lower()
        # Only treat strong, explicit temporary closure language as a live override.
        if "fermé jusqu'à nouvel ordre" in txt or "fermée jusqu'à nouvel ordre" in txt:
            out["overrides"][key]={"status":"closed","note":"Official page reports closure until further notice."}
        elif "fermé temporairement" in txt or "fermée temporairement" in txt:
            out["overrides"][key]={"status":"closed","note":"Official page reports temporary closure."}
    except Exception as exc:
        out.setdefault("errors",{})[key]=str(exc)
Path("status.json").write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding="utf-8")
