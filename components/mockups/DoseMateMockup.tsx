export function DoseMateMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="absolute -inset-6 rounded-[42px] bg-gradient-to-br from-med-50 via-paper-soft to-moss-50/50 blur-2xl" />
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[38px] border border-ink-hair bg-paper p-1 shadow-[0_40px_80px_-30px_rgba(16,19,15,0.35)]">
        <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-paper">
          <div className="flex items-center justify-between px-7 pt-6 text-[11px] font-medium text-ink-muted">
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-4 rounded-sm bg-ink" />
              <span className="h-1.5 w-3 rounded-sm bg-ink" />
              <span className="h-2 w-2.5 rounded-sm bg-ink" />
            </span>
          </div>

          <div className="border-b border-ink-hair px-6 pb-5 pt-6">
            <div className="flex items-center justify-between">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-med-500">
                Dose Mate
              </p>
              <span className="chip !px-2.5 !py-0.5 !text-[9px] uppercase">
                Support only
              </span>
            </div>
            <h3 className="mt-3 font-serif text-[24px] font-[450] leading-[1.1] text-ink">
              Epinephrine · Pediatric
            </h3>
            <p className="mt-1 font-sans text-[11px] text-ink-muted">
              IV · Cardiac arrest
            </p>
          </div>

          <div className="px-5 pt-4">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-ink-hair bg-paper-soft p-3.5">
                <p className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-med-500">
                  Weight
                </p>
                <p className="mt-1.5 font-serif text-[22px] font-[450] leading-none text-ink">
                  12.4
                  <span className="ml-1 font-sans text-xs text-ink-muted">kg</span>
                </p>
              </div>
              <div className="rounded-2xl border border-ink-hair bg-med-50 p-3.5">
                <p className="font-sans text-[9px] font-medium uppercase tracking-[0.2em] text-med-700">
                  Dose
                </p>
                <p className="mt-1.5 font-serif text-[22px] font-[450] leading-none text-med-700">
                  0.12
                  <span className="ml-1 font-sans text-xs text-med-500">mg</span>
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
                  className="flex items-center justify-between border-b border-ink-hair/60 pb-2 font-sans text-[12px]"
                >
                  <span className="text-ink-muted">{k}</span>
                  <span className="font-medium text-ink">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-ember-300/40 bg-ember-50/60 p-3">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-ember-600">
                Verify before use
              </p>
              <p className="mt-1 font-sans text-[11px] leading-[1.5] text-ink-soft">
                Result is support only. Confirm dose against clinical judgement and
                local protocol.
              </p>
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-4 flex items-center justify-between rounded-full border border-ink-hair bg-paper px-4 py-3">
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
