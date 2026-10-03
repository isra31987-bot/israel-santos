"use client";

import { video } from "@/data/video";
import { useDictionary } from "@/components/DictionaryProvider";

function isEmbedUrl(url: string) {
  return /youtube\.com|youtu\.be|vimeo\.com/.test(url);
}

function toEmbedUrl(url: string) {
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("vimeo.com")) {
    const id = url.split("vimeo.com/")[1]?.split("?")[0];
    return `https://player.vimeo.com/video/${id}`;
  }
  return url;
}

export default function VideoSection() {
  const { dict } = useDictionary();
  const v = dict.video;
  const hasVideo = video.url.trim().length > 0;

  return (
    <section className="video-section border-t border-line" aria-labelledby="video-heading">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
              {v.label}
            </p>
            <h2
              id="video-heading"
              className="mt-4 text-3xl font-medium leading-tight tracking-tight sm:text-4xl"
            >
              {v.title}
            </h2>
            <p className="mt-4 text-sm text-muted">{v.subtitle}</p>
            <p className="mt-6 leading-relaxed text-muted">{v.description}</p>
            <p className="mt-4 text-xs tracking-[0.14em] text-muted uppercase">
              {v.duration}
            </p>
          </div>

          <div className="video-frame">
            {hasVideo ? (
              isEmbedUrl(video.url) ? (
                <iframe
                  src={toEmbedUrl(video.url)}
                  title={v.title}
                  className="video-embed"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video className="video-player" src={video.url} controls preload="metadata">
                  {v.noVideoSupport}
                </video>
              )
            ) : (
              <div className="video-placeholder" aria-label={v.comingSoon}>
                <p className="video-placeholder-kicker">{v.seedance}</p>
                <p className="video-placeholder-label">{v.comingSoon}</p>
                <ol className="video-method">
                  {v.methodSteps.map((step, index) => (
                    <li key={step}>
                      <span className="video-method-num">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="video-method-label">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
