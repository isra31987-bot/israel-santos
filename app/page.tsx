import { getDictionary } from "@/i18n/getDictionary";
import { getLocale } from "@/i18n/locale";
import ProcessFlow from "@/components/ProcessFlow";
import ApproachSection from "@/components/ApproachSection";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import HomeValueSection from "@/components/HomeValueSection";
import TrackLink from "@/components/TrackLink";
import { CV_PDF_HREF } from "@/data/site";

export default async function HomePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <>
      <section className="hero-section relative mx-auto flex min-h-[85vh] w-full max-w-6xl flex-1 flex-col px-6 pb-8 pt-16 lg:min-h-[90vh] lg:pb-10 lg:pt-12">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-grid my-auto grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-16 xl:gap-20">
          <div className="hero-copy relative">
            <span className="hero-light-line" aria-hidden="true" />
            <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              {dict.profile.brand}
            </p>
            <p className="mt-4 text-sm text-muted">{dict.profile.title}</p>
            <h1 className="mt-6 max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {dict.profile.headline}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {dict.profile.subheadline}
            </p>
            {/* CTA row aislada del light-line para evitar solapes */}
            <div className="hero-cta-row">
              <TrackLink
                href="/work"
                event="view_projects"
                className="cta-primary text-sm font-medium tracking-[0.16em] text-accent"
              >
                {dict.home.ctaProjects}
              </TrackLink>
              <TrackLink
                href={CV_PDF_HREF}
                event="download_cv"
                className="cta-secondary border-b border-ink pb-0.5 text-sm tracking-[0.16em] text-ink"
                target="_blank"
                rel="noopener noreferrer"
                download="Israel-Santos-CV.pdf"
              >
                {dict.home.ctaCv}
              </TrackLink>
            </div>
          </div>

          <ProcessFlow
            steps={dict.process.steps}
            ariaLabel={dict.process.ariaLabel}
          />
        </div>

        <p className="hero-scroll-hint pointer-events-none mt-10 text-center text-[10px] tracking-[0.22em] text-muted">
          {dict.home.scrollHint}
        </p>
      </section>

      <ApproachSection />
      <SelectedWorkSection />
      <HomeValueSection />
    </>
  );
}
