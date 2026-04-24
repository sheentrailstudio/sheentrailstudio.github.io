export function QtGardenMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="absolute -inset-6 rounded-[42px] bg-gradient-to-br from-ember-50 via-paper-soft to-moss-50/60 blur-2xl" />
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[38px] border border-ink-hair bg-paper p-1 shadow-[0_40px_80px_-30px_rgba(16,19,15,0.35)]">
        <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-gradient-to-b from-paper to-paper-soft">
          <div className="flex items-center justify-between px-7 pt-6 text-[11px] font-medium text-ink-muted">
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-4 rounded-sm bg-ink" />
              <span className="h-1.5 w-3 rounded-sm bg-ink" />
              <span className="h-2 w-2.5 rounded-sm bg-ink" />
            </span>
          </div>

          <div className="px-6 pt-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-ember-500">
              April 24 · Morning
            </p>
            <h3 className="mt-2 font-serif text-[26px] font-[450] leading-[1.1] text-ink">
              Today&apos;s quiet time
            </h3>
          </div>

          <div className="mt-6 space-y-3 px-5">
            <div className="rounded-2xl border border-ink-hair bg-paper p-4">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-moss-600">
                Scripture
              </p>
              <p className="mt-2 font-serif text-[15px] italic leading-[1.5] text-ink">
                &ldquo;就是清晨的日光從高天臨到我們。&rdquo;
              </p>
              <p className="mt-2 font-sans text-[11px] text-ink-muted">
                路加福音 1:78
              </p>
            </div>

            <div className="rounded-2xl border border-ink-hair bg-paper p-4">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-ember-500">
                Reflect
              </p>
              <div className="mt-3 space-y-1.5">
                <div className="h-2 w-full rounded-full bg-paper-deep" />
                <div className="h-2 w-10/12 rounded-full bg-paper-deep" />
                <div className="h-2 w-7/12 rounded-full bg-paper-deep" />
              </div>
            </div>

            <div className="rounded-2xl border border-ink-hair bg-moss-50/70 p-4">
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-moss-600 text-[10px] text-paper">
                  ✦
                </span>
                <p className="font-sans text-[11px] font-medium text-moss-700">
                  小園丁 · 陪伴你整理
                </p>
              </div>
              <p className="mt-2 font-serif text-[13px] leading-[1.5] text-ink">
                今天你被什麼字觸動？讓它停留一會，再寫下來。
              </p>
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-4 flex items-center justify-between rounded-full border border-ink-hair bg-paper px-4 py-3">
            {[
              { label: "Read", active: true },
              { label: "Pray" },
              { label: "Write" },
              { label: "Review" },
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
