const WAVE = [
  6, 11, 18, 9, 22, 30, 17, 26, 38, 21, 14, 29, 41, 24, 12, 19, 33, 27, 15, 8,
  20, 35, 23, 13, 28, 16, 10, 7,
];

export function AmenJournalMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="absolute -inset-6 rounded-[42px] bg-gradient-to-br from-aurora-100/50 via-plasma-100/30 to-transparent blur-3xl" />
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[38px] border border-chrome-hair bg-void p-1 shadow-[0_40px_90px_-34px_rgba(92,238,192,0.35)]">
        <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-gradient-to-b from-void-soft to-void">
          <div className="flex items-center justify-between px-7 pt-6 text-[11px] font-medium text-chrome-muted">
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-4 rounded-sm bg-chrome" />
              <span className="h-1.5 w-3 rounded-sm bg-chrome" />
              <span className="h-2 w-2.5 rounded-sm bg-chrome" />
            </span>
          </div>

          <div className="px-6 pt-8">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-star-500">
              August 4 · Evening
            </p>
            <h3 className="mt-2 font-display text-[26px] font-medium leading-[1.1] text-chrome">
              今天的禱告
            </h3>
          </div>

          <div className="mt-6 space-y-3 px-5">
            {/* Voice entry */}
            <div className="rounded-2xl border border-chrome-hair bg-chrome p-4 text-void">
              <div className="flex items-center justify-between">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-star-300">
                  Voice · 錄音中
                </p>
                <span className="font-sans text-[11px] tabular-nums text-void/70">
                  01:24
                </span>
              </div>
              <div className="mt-3 flex h-11 items-center gap-[3px]">
                {WAVE.map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h + 4}px` }}
                    className={`w-[3px] shrink-0 rounded-full ${
                      i < 18 ? "bg-star-300" : "bg-void/25"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 font-serif text-[13px] leading-[1.5] text-void/80">
                &ldquo;主啊，今天有點撐不住⋯⋯&rdquo;
              </p>
              <p className="mt-1 font-sans text-[10px] text-void/45">
                自動逐字稿 · 可修改
              </p>
            </div>

            {/* Photo + text entry */}
            <div className="rounded-2xl border border-chrome-hair bg-void p-4">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-aurora-600">
                Photo · Note
              </p>
              <div className="mt-3 flex gap-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-star-200 via-void-deep to-aurora-200" />
                <div className="flex-1 space-y-1.5 pt-1">
                  <div className="h-2 w-full rounded-full bg-void-deep" />
                  <div className="h-2 w-10/12 rounded-full bg-void-deep" />
                  <div className="h-2 w-6/12 rounded-full bg-void-deep" />
                </div>
              </div>
            </div>

            {/* AI trail card */}
            <div className="rounded-2xl border border-chrome-hair bg-aurora-50/70 p-4">
              <div className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-aurora-600 text-[10px] text-void">
                  ✦
                </span>
                <p className="font-sans text-[11px] font-medium text-aurora-700">
                  禱告軌跡 · 本月回顧
                </p>
              </div>
              <p className="mt-2 font-serif text-[13px] leading-[1.5] text-chrome">
                你為「家人的健康」禱告了 9 次，其中 3 次已經記下回應。
              </p>
              <div className="mt-3 flex items-end gap-1">
                {[8, 14, 10, 20, 16, 26, 22].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}px` }}
                    className="w-full rounded-sm bg-aurora-300/70"
                  />
                ))}
              </div>
            </div>

            {/* Shared intercession */}
            <div className="flex items-center gap-3 rounded-2xl border border-chrome-hair bg-void p-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-star-50 text-[13px] text-star-500">
                ▶
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-sans text-[12px] font-medium text-chrome">
                  給小雅的代禱 · 0:47
                </p>
                <p className="font-sans text-[10px] text-chrome-muted">
                  已分享 · 7 天後失效
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-chrome-hair px-2.5 py-1 font-sans text-[10px] text-chrome-muted">
                連結
              </span>
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-4 flex items-center justify-between rounded-full border border-chrome-hair bg-void px-4 py-3">
            {[
              { label: "Speak", active: true },
              { label: "Write" },
              { label: "Photo" },
              { label: "Trail" },
            ].map((tab) => (
              <span
                key={tab.label}
                className={`font-sans text-[11px] font-medium ${
                  tab.active ? "text-chrome" : "text-chrome-muted"
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
