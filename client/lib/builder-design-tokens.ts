/**
 * Builder.io Design Tokens
 *
 * Registers design tokens with the Builder.io Visual Editor via
 * `register("editor.settings", { designTokens })`. Imported for its
 * side effect from client/App.tsx so the postMessage fires on every
 * route the editor previews — not only the Builder catch-all page.
 *
 * Values are sourced from client/global.css (:root CSS variables) and
 * tailwind.config.ts. Colors are resolved hex equivalents of the
 * light-theme HSL triplets; Builder's color picker needs literal
 * colors, not hsl(var(--…)) references.
 *
 * The SDK posts the registration to `parent.postMessage` once at
 * module load. If the editor's listener isn't attached yet (a real
 * race during iframe boot), that single message is lost. To make
 * registration reliable we also re-broadcast whenever the editor
 * sends us *any* message — by then we know it's listening.
 */

import { register } from "@builder.io/sdk-react";

const designTokens = {
  colors: [
    // Brand palette
    { name: "Primary (Pine Green)", value: "#367D59" },
    { name: "Primary Foreground", value: "#FFFFFF" },
    { name: "Secondary (Terracotta)", value: "#D68F5C" },
    { name: "Secondary Foreground", value: "#FFFFFF" },
    // Surfaces
    { name: "Background (Warm Cream)", value: "#FCFAF8" },
    { name: "Foreground (Deep Forest)", value: "#293D33" },
    { name: "Card", value: "#FFFFFF" },
    { name: "Card Foreground", value: "#293D33" },
    { name: "Popover", value: "#FFFFFF" },
    { name: "Popover Foreground", value: "#293D33" },
    // UI states
    { name: "Muted", value: "#EEF1F0" },
    { name: "Muted Foreground", value: "#5C7066" },
    { name: "Accent (Sky Blue)", value: "#DBE9F0" },
    { name: "Accent Foreground", value: "#367D59" },
    { name: "Destructive", value: "#EF4444" },
    { name: "Destructive Foreground", value: "#F8FAFC" },
    // Borders & inputs
    { name: "Border", value: "#D5DDD9" },
    { name: "Input", value: "#D5DDD9" },
    { name: "Ring", value: "#367D59" },
  ],
  fontFamily: [
    { name: "Sans (Inter)", value: "Inter, sans-serif" },
    { name: "Serif (Merriweather)", value: "Merriweather, serif" },
  ],
  fontSize: [
    { name: "XS", value: "0.75rem" },
    { name: "SM", value: "0.875rem" },
    { name: "Base", value: "1rem" },
    { name: "LG", value: "1.125rem" },
    { name: "XL", value: "1.25rem" },
    { name: "2XL", value: "1.5rem" },
    { name: "3XL", value: "1.875rem" },
    { name: "4XL", value: "2.25rem" },
  ],
  spacing: [
    { name: "1 (4px)", value: "0.25rem" },
    { name: "2 (8px)", value: "0.5rem" },
    { name: "3 (12px)", value: "0.75rem" },
    { name: "4 (16px)", value: "1rem" },
    { name: "6 (24px)", value: "1.5rem" },
    { name: "8 (32px)", value: "2rem" },
    { name: "12 (48px)", value: "3rem" },
    { name: "16 (64px)", value: "4rem" },
  ],
  borderRadius: [
    // --radius is 0.5rem (8px); values below are the resolved equivalents.
    { name: "None", value: "0" },
    { name: "SM", value: "0.25rem" },
    { name: "MD", value: "0.375rem" },
    { name: "Default (LG)", value: "0.5rem" },
    { name: "Full", value: "9999px" },
  ],
};

function broadcastDesignTokens() {
  register("editor.settings", { designTokens });
}

// First broadcast — fires immediately on module load.
broadcastDesignTokens();

// Re-broadcast on any message from a Builder editor host. Once the editor
// sends us anything (builder.configureSdk, builder.sdkInfo ack, etc.) we
// know its message listener is attached, so a resend will actually land.
if (typeof window !== "undefined") {
  const TRUSTED_HOSTS = [
    "builder.io",
    "beta.builder.io",
    "qa.builder.io",
    "localhost",
  ];

  const isTrustedEditor = (origin: string) => {
    try {
      const { hostname } = new URL(origin);
      return TRUSTED_HOSTS.some(
        (h) => hostname === h || hostname.endsWith(`.${h}`),
      );
    } catch {
      return false;
    }
  };

  window.addEventListener("message", (event: MessageEvent) => {
    if (!event.data || typeof event.data !== "object") return;
    const type = (event.data as { type?: string }).type;
    if (typeof type !== "string" || !type.startsWith("builder.")) return;
    if (!isTrustedEditor(event.origin)) return;
    broadcastDesignTokens();
  });
}
