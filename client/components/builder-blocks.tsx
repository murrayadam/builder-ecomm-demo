import { ArrowRight, Check, Mountain, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

/**
 * Content-editor-friendly blocks for Builder.io.
 *
 * Each block is a self-contained, composed section with a small set of
 * meaningful inputs (headline, image, link, etc.) — designed for content
 * marketers and non-technical editors, not developers.
 */

type LinkProps = {
  label?: string;
  url?: string;
  style?: "primary" | "secondary" | "outline" | "ghost" | "link";
};

function CtaButton({ label, url, style = "primary", className = "" }: LinkProps & { className?: string }) {
  if (!label) return null;
  const variant =
    style === "primary" ? "default" :
    style === "secondary" ? "secondary" :
    style === "outline" ? "outline" :
    style === "ghost" ? "ghost" : "link";
  return (
    <a href={url || "#"} className="inline-block">
      <Button variant={variant} size="lg" className={className}>
        {label}
      </Button>
    </a>
  );
}

// ─── Hero Banner ────────────────────────────────────────────────────────────
export function HeroBanner({
  backgroundImage,
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  overlayOpacity = 20,
  height = "large",
  alignment = "left",
}: {
  backgroundImage?: string;
  eyebrow?: string;
  headline?: string;
  description?: string;
  primaryCta?: LinkProps;
  secondaryCta?: LinkProps;
  overlayOpacity?: number;
  height?: "small" | "medium" | "large";
  alignment?: "left" | "center";
}) {
  const heightClass =
    height === "small" ? "h-[50vh]" :
    height === "medium" ? "h-[65vh]" : "h-[80vh]";
  const alignClass = alignment === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section className={`relative ${heightClass} w-full overflow-hidden`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
        >
          <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity / 100 }} />
        </div>
      )}
      <div className={`relative container mx-auto px-4 h-full flex flex-col justify-center text-white ${alignClass}`}>
        {eyebrow && (
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-primary/90 backdrop-blur-sm rounded-full">
            {eyebrow}
          </span>
        )}
        {headline && (
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 max-w-2xl leading-tight">
            {headline}
          </h1>
        )}
        {description && (
          <p className="text-lg md:text-xl mb-8 max-w-xl text-white/90 font-light">
            {description}
          </p>
        )}
        {(primaryCta?.label || secondaryCta?.label) && (
          <div className={`flex flex-col sm:flex-row gap-4 ${alignment === "center" ? "justify-center" : ""}`}>
            <CtaButton {...primaryCta} className="bg-white text-primary hover:bg-white/90 border-none min-w-[160px]" />
            <CtaButton {...secondaryCta} style="outline" className="text-white border-white hover:bg-white/20 min-w-[160px] bg-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Announcement Bar ───────────────────────────────────────────────────────
export function AnnouncementBar({
  message,
  linkLabel,
  linkUrl,
  tone = "primary",
}: {
  message?: string;
  linkLabel?: string;
  linkUrl?: string;
  tone?: "primary" | "secondary" | "dark";
}) {
  const bg =
    tone === "secondary" ? "bg-secondary text-secondary-foreground" :
    tone === "dark" ? "bg-foreground text-background" :
    "bg-primary text-primary-foreground";
  return (
    <div className={`${bg} w-full py-2 px-4 text-center text-sm`}>
      <span>{message}</span>
      {linkLabel && (
        <a href={linkUrl || "#"} className="ml-2 font-semibold underline hover:opacity-80">
          {linkLabel} →
        </a>
      )}
    </div>
  );
}

// ─── Section Heading ────────────────────────────────────────────────────────
export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "left",
  viewAllLabel,
  viewAllUrl,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  alignment?: "left" | "center";
  viewAllLabel?: string;
  viewAllUrl?: string;
}) {
  const align = alignment === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4`}>
      <div className={`flex flex-col ${align}`}>
        {eyebrow && (
          <span className="text-secondary font-medium tracking-wide uppercase text-sm mb-2">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-muted-foreground max-w-xl">{description}</p>
        )}
      </div>
      {viewAllLabel && (
        <a href={viewAllUrl || "#"} className="hidden md:flex items-center text-primary font-medium hover:underline whitespace-nowrap">
          {viewAllLabel} <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      )}
    </div>
  );
}

// ─── Product Card ───────────────────────────────────────────────────────────
export function ProductCard({
  image,
  imageAlt,
  name,
  description,
  price,
  badge,
  productUrl,
}: {
  image?: string;
  imageAlt?: string;
  name?: string;
  description?: string;
  price?: string;
  badge?: string;
  productUrl?: string;
}) {
  const inner = (
    <Card className="group overflow-hidden border-none shadow-none bg-transparent">
      <CardContent className="p-0 relative aspect-square overflow-hidden rounded-xl bg-muted">
        {image && (
          <img
            src={image}
            alt={imageAlt || name || "Product image"}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {badge && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
            {badge}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 px-0">
        {name && (
          <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
            {name}
          </h3>
        )}
        {description && <p className="text-sm text-muted-foreground mb-2">{description}</p>}
        {price && <span className="font-medium text-primary">{price}</span>}
      </CardFooter>
    </Card>
  );
  return productUrl ? <a href={productUrl}>{inner}</a> : inner;
}

// ─── Product Grid ───────────────────────────────────────────────────────────
export function ProductGrid({
  eyebrow,
  title,
  description,
  viewAllLabel,
  viewAllUrl,
  products = [],
  background = "default",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  viewAllLabel?: string;
  viewAllUrl?: string;
  products?: Array<{
    image?: string;
    name?: string;
    description?: string;
    price?: string;
    badge?: string;
    productUrl?: string;
  }>;
  background?: "default" | "muted";
}) {
  const bg = background === "muted" ? "bg-muted/30" : "bg-background";
  return (
    <section className={`py-20 ${bg}`}>
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          viewAllLabel={viewAllLabel}
          viewAllUrl={viewAllUrl}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Feature Spotlight (side-by-side image + text) ──────────────────────────
export function FeatureSpotlight({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  features = [],
  cta,
  imagePosition = "left",
}: {
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  features?: Array<{ title?: string; description?: string }>;
  cta?: LinkProps;
  imagePosition?: "left" | "right";
}) {
  const imageOrder = imagePosition === "right" ? "lg:order-2" : "";
  const textOrder = imagePosition === "right" ? "lg:order-1" : "";
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className={`w-full lg:w-1/2 relative ${imageOrder}`}>
            <div className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-2xl shadow-xl">
              {image && (
                <img
                  src={image}
                  alt={imageAlt || title || "Feature image"}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full -z-10 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-2xl" />
          </div>

          <div className={`w-full lg:w-1/2 space-y-6 ${textOrder}`}>
            {eyebrow && (
              <div className="flex items-center gap-2 text-secondary font-medium tracking-wide uppercase text-sm">
                <Mountain className="h-4 w-4" />
                <span>{eyebrow}</span>
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
            )}

            {features.length > 0 && (
              <div className="space-y-4 pt-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      {f.title && <h4 className="font-semibold text-primary">{f.title}</h4>}
                      {f.description && (
                        <p className="text-sm text-muted-foreground">{f.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cta?.label && (
              <div className="pt-6">
                <CtaButton {...cta} className="bg-primary text-white hover:bg-primary/90" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Call To Action Banner ──────────────────────────────────────────────────
export function CallToAction({
  title,
  description,
  primaryCta,
  background = "primary",
}: {
  title?: string;
  description?: string;
  primaryCta?: LinkProps;
  background?: "primary" | "secondary" | "muted";
}) {
  const bg =
    background === "secondary" ? "bg-secondary text-secondary-foreground" :
    background === "muted" ? "bg-muted text-foreground" :
    "bg-primary text-white";
  return (
    <section className={`py-20 ${bg} relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        {title && (
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{title}</h2>
        )}
        {description && (
          <p className="opacity-80 max-w-2xl mx-auto mb-8 text-lg">{description}</p>
        )}
        {primaryCta?.label && (
          <CtaButton {...primaryCta} style={background === "primary" ? "secondary" : "primary"} className="font-semibold" />
        )}
      </div>
    </section>
  );
}

// ─── Testimonial ────────────────────────────────────────────────────────────
export function Testimonial({
  quote,
  authorName,
  authorTitle,
  authorImage,
  rating,
}: {
  quote?: string;
  authorName?: string;
  authorTitle?: string;
  authorImage?: string;
  rating?: number;
}) {
  return (
    <div className="p-8 bg-white rounded-2xl shadow-sm border border-border/40 h-full flex flex-col">
      {rating && rating > 0 && (
        <div className="flex gap-1 mb-4 text-secondary">
          {Array.from({ length: Math.min(5, Math.floor(rating)) }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
      )}
      {quote && (
        <blockquote className="text-lg text-foreground leading-relaxed mb-6 flex-1">
          &ldquo;{quote}&rdquo;
        </blockquote>
      )}
      <div className="flex items-center gap-3">
        {authorImage && (
          <img src={authorImage} alt={authorName || ""} className="h-10 w-10 rounded-full object-cover" />
        )}
        <div>
          {authorName && <div className="font-semibold text-primary">{authorName}</div>}
          {authorTitle && <div className="text-sm text-muted-foreground">{authorTitle}</div>}
        </div>
      </div>
    </div>
  );
}

// ─── FAQ Section ────────────────────────────────────────────────────────────
export function FAQSection({
  eyebrow,
  title,
  description,
  items = [],
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: Array<{ question?: string; answer?: string }>;
}) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          alignment="center"
        />
        {items.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-serif text-lg text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
}

// ─── Newsletter Signup ──────────────────────────────────────────────────────
export function NewsletterSignup({
  title,
  description,
  placeholder = "Enter your email",
  buttonLabel = "Subscribe",
  background = "muted",
}: {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  background?: "muted" | "primary" | "default";
}) {
  const bg =
    background === "primary" ? "bg-primary text-white" :
    background === "muted" ? "bg-muted" :
    "bg-background";
  return (
    <section className={`py-16 ${bg}`}>
      <div className="container mx-auto px-4 max-w-2xl text-center">
        {title && (
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{title}</h2>
        )}
        {description && <p className="opacity-80 mb-8 text-lg">{description}</p>}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder={placeholder}
            className="flex-1 h-11 px-4 rounded-md border bg-white text-foreground text-sm"
          />
          <Button type="submit" size="lg">{buttonLabel}</Button>
        </form>
      </div>
    </section>
  );
}

// ─── Stat Block ─────────────────────────────────────────────────────────────
export function StatBlock({
  stats = [],
  background = "default",
}: {
  stats?: Array<{ value?: string; label?: string; description?: string }>;
  background?: "default" | "muted" | "primary";
}) {
  const bg =
    background === "primary" ? "bg-primary text-white" :
    background === "muted" ? "bg-muted" :
    "bg-background";
  return (
    <section className={`py-16 ${bg}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              {s.value && (
                <div className="text-4xl md:text-5xl font-serif font-bold mb-2 text-primary">
                  {s.value}
                </div>
              )}
              {s.label && (
                <div className="font-semibold uppercase tracking-wide text-sm mb-1">
                  {s.label}
                </div>
              )}
              {s.description && (
                <p className="text-sm opacity-70">{s.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Rich Text Section ──────────────────────────────────────────────────────
export function RichTextSection({
  eyebrow,
  title,
  body,
  alignment = "center",
  background = "default",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  alignment?: "left" | "center";
  background?: "default" | "muted";
}) {
  const bg = background === "muted" ? "bg-muted/30" : "bg-background";
  const align = alignment === "center" ? "text-center mx-auto" : "text-left";
  return (
    <section className={`py-16 ${bg}`}>
      <div className={`container mx-auto px-4 max-w-3xl ${align}`}>
        {eyebrow && (
          <span className="text-secondary font-medium tracking-wide uppercase text-sm mb-2 block">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            {title}
          </h2>
        )}
        {body && (
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
            {body}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Promoted Link Button (standalone) ──────────────────────────────────────
export function LinkButton({
  label,
  url,
  style = "primary",
  size = "default",
}: LinkProps & { size?: "default" | "small" | "large" }) {
  if (!label) return null;
  const variant =
    style === "primary" ? "default" :
    style === "secondary" ? "secondary" :
    style === "outline" ? "outline" :
    style === "ghost" ? "ghost" : "link";
  const sz = size === "small" ? "sm" : size === "large" ? "lg" : "default";
  return (
    <a href={url || "#"} className="inline-block">
      <Button variant={variant} size={sz}>{label}</Button>
    </a>
  );
}

// ─── Highlight Badge ────────────────────────────────────────────────────────
export function HighlightBadge({
  label,
  style = "default",
}: {
  label?: string;
  style?: "default" | "secondary" | "outline";
}) {
  if (!label) return null;
  return <Badge variant={style}>{label}</Badge>;
}
