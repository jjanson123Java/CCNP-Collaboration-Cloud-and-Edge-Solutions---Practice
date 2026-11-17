import hashlib
import subprocess
import time
from pathlib import Path


REPO = Path(__file__).resolve().parents[2]
ZIP = REPO / "download" / "CLCEI-Practice-Offline.zip"


def digest():
    return hashlib.sha256(ZIP.read_bytes()).hexdigest()


subprocess.run(["python", "authoring/make_offline_zips.py", "."], cwd=REPO, check=True)
first = digest()
time.sleep(2.1)
subprocess.run(["python", "authoring/make_offline_zips.py", "."], cwd=REPO, check=True)
second = digest()
assert first == second, f"offline ZIP is not reproducible: {first} != {second}"
print(f"OK: reproducible offline ZIP {first}")
