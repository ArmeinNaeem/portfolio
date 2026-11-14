const services = [
  "Landing pages",
  "E-commerce websites",
  "Portfolio sites",
  "Web apps",
  "API integration",
];

function ServiceItems() {
  return services.map((service) => (
    <span className="flex shrink-0 items-center gap-8" key={service}>
      <span>{service}</span>
      <span aria-hidden="true" className="text-[#d1ddc8]">✳</span>
    </span>
  ));
}

export default function ServiceMarquee() {
  return (
    <section
      aria-label="Services offered"
      className="overflow-hidden border-y border-[#718168]/20 bg-[#829078] py-2 text-[#fcfcf8] sm:py-2.5"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <div className="flex shrink-0 items-center gap-8 pr-8 text-xs font-normal uppercase tracking-[0.16em] sm:text-sm">
          <ServiceItems />
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-8 pr-8 text-xs font-normal uppercase tracking-[0.16em] motion-reduce:hidden sm:text-sm"
        >
          <ServiceItems />
        </div>
      </div>
    </section>
  );
}
