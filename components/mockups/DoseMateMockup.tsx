export function DoseMateMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[38px] border border-line bg-surface p-1 shadow-[0_24px_48px_-28px_rgba(22,24,29,0.35)]">
        <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-surface">
          <div className="flex items-center justify-between px-7 pt-6 text-[11px] font-medium text-ink-muted">
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-4 rounded-sm bg-ink" />
              <span className="h-1.5 w-3 rounded-sm bg-ink" />
              <span className="h-2 w-2.5 rounded-sm bg-ink" />
            </span>
          </div>

          <div className="border-b border-line px-6 pb-5 pt-6">
            <div className="flex items-center justify-between">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] accent-text">
                Dose Mate
              </p>
              <span className="chip !px-2.5 !py-0.5 !text-[9px] uppercase">
                Support only
              </span>
            </div>
            <h3 className="mt-3 font-display text-[24px] font-medium leading-[1.1] text-ink">
              Epinephrine · Pediatric
            </h3>
            <p className="mt-1 font-sans text-[11px] text-ink-muted">
              IV · Cardiac arrest
            </p>
          </div>

          <div className="px-5 pt-4">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-line bg-surface-alt p-3.5">
                <p className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                  Weight
                </p>
                <p className="mt-1.5 font-display text-[22px] font-medium leading-none text-ink">
                  12.4
                  <span className="ml-1 font-sans text-xs text-ink-muted">kg</span>
                </p>
              </div>
              <div className="rounded-2xl border border-gold bg-surface p-3.5">
                <p className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] accent-text">
                  Dose
                </p>
                <p className="mt-1.5 font-display text-[22px] font-medium leading-none text-ink">
                  0.12
                  <span className="ml-1 font-sans text-xs text-ink-muted">mg</span>
                </p>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {[
                ["Concentration", "1 mg / 10 mL"],
                ["Volume", "1.24 mL"],
                ["Route", "IV push"],
                ["Repeat", "q 3–5 min"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between border-b border-line pb-2 font-sans text-[12px]"
                >
                  <span className="text-ink-muted">{k}</span>
                  <span className="font-medium text-ink">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-gold bg-surface-alt p-3">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] accent-text">
                Verify before use
              </p>
              <p className="mt-1 font-sans text-[11px] leading-[1.5] text-ink-muted">
                Result is support only. Confirm dose against clinical judgement and
                local protocol.
              </p>
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-4 flex items-center justify-between rounded-full border border-line bg-surface px-4 py-3">
            {[
              { label: "Calc", active: true },
              { label: "Formula" },
              { label: "Algo" },
              { label: "Saved" },
            ].map((tab) => (
              <span
                key={tab.label}
                className={`font-sans text-[11px] font-medium ${
                  tab.active ? "text-ink" : "text-ink-muted"
                }`}
              >
                {tab.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
