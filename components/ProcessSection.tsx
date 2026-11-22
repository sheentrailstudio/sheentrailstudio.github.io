import { Reveal } from "@/components/Reveal";
import {
  processLead,
  processNote,
  processSteps,
  processTitle,
} from "@/content/process";

export function ProcessSection({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="section scroll-mt-24 border-t border-line bg-surface-alt"
    >
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[0.55fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="display-xl text-balance">{processTitle}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl body lg:ml-auto lg:text-right">
              {processLead}
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={(i % 3) * 80}>
              <div className="border-t-2 border-gold pt-6">
                <p className="num-badge">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                  {s.t}
                </h3>
                <p className="mt-3 body">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={120}>
          <p className="mt-14 body">{processNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
