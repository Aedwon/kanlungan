import { PhotoSlot } from "./Photo";
import { processHeading, processLine, processSteps } from "@/data/home-process";

// Home: "How a furnishing project works". Six rows, image and text, no scroll pin.
export function HomeProcess({ id }: { id: string }) {
  return (
    <section className="hproc" aria-labelledby={id}>
      <h2 id={id} className="hproc-h">{processHeading}</h2>
      <p className="hproc-line">{processLine}</p>
      <ol className="hproc-rows" role="list">
        {processSteps.map((step, i) => (
          <li key={step.name} className={`hproc-row${i % 2 ? " flip" : ""}`}>
            <div className="hproc-im">
              <PhotoSlot name={step.photo} alt={step.alt} sizes="(min-width: 1280px) 640px, 100vw" />
            </div>
            <div className="hproc-tx">
              <h3 className="hproc-h3">{step.name}</h3>
              {step.week ? <p className="hproc-wk">{step.week}</p> : null}
              <p className="hproc-p">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
