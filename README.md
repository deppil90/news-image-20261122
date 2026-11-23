# One Day in the World — Sunday, 22 November 2026

make.fun entry for `news-image-20261122`: one image summing up the
world's news of Sunday, 22 November 2026.

The front page covers the day's biggest real stories, checked against
same-day reporting: the COP31 climate talks ending with no deal in
Antalya; suspected Ukrainian sea drones striking a Russian warship in
Libya; Iran striking US bases in Bahrain and tankers near Hormuz; the
capture of cartel boss 'El Chapo Isidro' in Mexico; the AI-led stock
sell-off (S&P 500 −3.7%, Nikkei −5.1%); and the World Court's genocide
verdict against Myanmar over the Rohingya — plus a footer strip with
the US House result, BepiColombo reaching Mercury, the Cikande factory
fire and the EU–Indonesia trade deal.

## Files

- `entry.png` — the image itself (1024×1024, under 1 MiB).
- `main.ts` — the entry program: copies `entry.png` into
  `$MAKEFUN_OUTPUT_DIR` (default `/output`) and verifies the bytes
  match, so both grading runs write identical output.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
