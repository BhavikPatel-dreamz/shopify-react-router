import type { Route } from "../+types/home";
import "../../styles/work-with-rare.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work With Rare - Careers at The House Of Rare" },
    {
      name: "description",
      content: "Join The House of Rare team. Explore current job opportunities and build your career with us.",
    },
  ];
}

export default function WorkWithRarePage() {
  return (
    <main className="work-with-rare-page">
      <div className="container">
        <div className="rte" style={{ textAlign: "center" }}>
          <div id="job-listing">
            <iframe
              src="https://zimyo.work/recruit/careerJoblist/NTQ5NQ=="
              title="Job Openings"
              className="job-iframe"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </main>
  );
}