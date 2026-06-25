/**
 * Builder.io Component Registry
 *
 * Registers a trimmed set of standalone UI primitives for use in Builder.io's
 * visual editor (Publish). Uses the Gen2 SDK customComponents pattern.
 *
 * --- Trim policy (why this file is short) ---
 *
 * Earlier versions of this registry exposed every shadcn/Radix sub-part
 * (AccordionItem, DialogContent, TableRow, AlertDialogAction, …) as its own
 * draggable component. That caused two problems in the editor:
 *
 *  1. Sub-parts that rely on React context from a Radix parent (Dialog.*,
 *     Accordion.*, Tabs.*, Tooltip.*, etc.) crash the preview iframe when
 *     dropped onto the canvas standalone — they call `useContext` and get
 *     `undefined`, which throws during render.
 *  2. The Insert menu / schema payload bloated to ~79 entries, slowing the
 *     editor and offering authors many "components" that only work in
 *     specific parent trees.
 *
 * The rule now: only register components that render usefully on their own.
 * Anything that requires a parent context or sibling sub-parts to be
 * meaningful (Dialog, Accordion, Tabs, Tooltip, AlertDialog, RadioGroup,
 * ToggleGroup, Collapsible, Avatar, Breadcrumb, Pagination, Table, …) is
 * intentionally excluded. Reintroduce those via higher-level wrapper
 * components that accept data props (e.g. `<SimpleAccordion items={[…]} />`)
 * and register the wrappers instead.
 *
 * Import this array and pass it to the `customComponents` prop of <Content />.
 */

import type { RegisteredComponent } from "@builder.io/sdk-react";

// --- UI Component Imports ---
import { Alert } from "./client/components/ui/alert";
import { AspectRatio } from "./client/components/ui/aspect-ratio";
import { Badge } from "./client/components/ui/badge";
import { Button } from "./client/components/ui/button";
import { Card } from "./client/components/ui/card";
import { Checkbox } from "./client/components/ui/checkbox";
import { Input } from "./client/components/ui/input";
import { Label } from "./client/components/ui/label";
import { Progress } from "./client/components/ui/progress";
import { ScrollArea } from "./client/components/ui/scroll-area";
import { Separator } from "./client/components/ui/separator";
import { Skeleton } from "./client/components/ui/skeleton";
import { Slider } from "./client/components/ui/slider";
import { Switch } from "./client/components/ui/switch";
import { BuilderTextarea } from "./client/components/ui/textarea-builder";
import { Toggle } from "./client/components/ui/toggle";

export const customComponents: RegisteredComponent[] = [
  // ─── Alert ────────────────────────────────────────────────────────────────
  // Root only. AlertTitle/AlertDescription are plain styled divs — authors
  // can use Builder Text blocks (or any children) inside.
  {
    component: Alert,
    name: "Alert",
    canHaveChildren: true,
    inputs: [
      {
        name: "variant",
        type: "text",
        friendlyName: "Variant",
        defaultValue: "default",
        enum: [
          { label: "Default", value: "default" },
          { label: "Destructive", value: "destructive" },
        ],
        helperText: "Visual style of the alert",
      },
    ],
  },

  // ─── AspectRatio ──────────────────────────────────────────────────────────
  {
    component: AspectRatio,
    name: "AspectRatio",
    canHaveChildren: true,
    inputs: [
      {
        name: "ratio",
        type: "number",
        friendlyName: "Ratio",
        defaultValue: 16 / 9,
        helperText: "Width to height ratio (e.g. 16/9 = 1.77)",
      },
    ],
  },

  // ─── Badge ────────────────────────────────────────────────────────────────
  {
    component: Badge,
    name: "Badge",
    canHaveChildren: true,
    inputs: [
      {
        name: "variant",
        type: "text",
        friendlyName: "Variant",
        defaultValue: "default",
        enum: [
          { label: "Default", value: "default" },
          { label: "Secondary", value: "secondary" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
        ],
        helperText: "Visual style of the badge",
      },
    ],
  },

  // ─── Button ───────────────────────────────────────────────────────────────
  {
    component: Button,
    name: "Button",
    canHaveChildren: true,
    inputs: [
      {
        name: "variant",
        type: "text",
        friendlyName: "Variant",
        defaultValue: "default",
        enum: [
          { label: "Default", value: "default" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Secondary", value: "secondary" },
          { label: "Ghost", value: "ghost" },
          { label: "Link", value: "link" },
        ],
      },
      {
        name: "size",
        type: "text",
        friendlyName: "Size",
        defaultValue: "default",
        enum: [
          { label: "Default", value: "default" },
          { label: "Small", value: "sm" },
          { label: "Large", value: "lg" },
          { label: "Icon", value: "icon" },
        ],
      },
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
    ],
  },

  // ─── Card ─────────────────────────────────────────────────────────────────
  // Root only. CardHeader/CardTitle/CardContent/etc. are plain styled divs —
  // authors can compose content with any Builder blocks as children.
  {
    component: Card,
    name: "Card",
    canHaveChildren: true,
    inputs: [],
  },

  // ─── Checkbox ─────────────────────────────────────────────────────────────
  {
    component: Checkbox,
    name: "Checkbox",
    inputs: [
      {
        name: "defaultChecked",
        type: "boolean",
        friendlyName: "Default Checked",
        defaultValue: false,
      },
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
      {
        name: "id",
        type: "text",
        friendlyName: "ID",
        helperText: "Used to associate with a Label's htmlFor",
        advanced: true,
      },
    ],
  },

  // ─── Input ────────────────────────────────────────────────────────────────
  {
    component: Input,
    name: "Input",
    inputs: [
      {
        name: "type",
        type: "text",
        friendlyName: "Input Type",
        defaultValue: "text",
        enum: [
          { label: "Text", value: "text" },
          { label: "Email", value: "email" },
          { label: "Password", value: "password" },
          { label: "Number", value: "number" },
          { label: "Search", value: "search" },
          { label: "Tel", value: "tel" },
          { label: "URL", value: "url" },
        ],
      },
      {
        name: "placeholder",
        type: "text",
        friendlyName: "Placeholder",
        defaultValue: "",
        helperText: "Ghost text shown when empty",
      },
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
    ],
  },

  // ─── Label ────────────────────────────────────────────────────────────────
  {
    component: Label,
    name: "Label",
    canHaveChildren: true,
    inputs: [
      {
        name: "htmlFor",
        type: "text",
        friendlyName: "For (htmlFor)",
        helperText: "ID of the input this label is associated with",
      },
    ],
  },

  // ─── Progress ─────────────────────────────────────────────────────────────
  {
    component: Progress,
    name: "Progress",
    inputs: [
      {
        name: "value",
        type: "number",
        friendlyName: "Value",
        defaultValue: 50,
        min: 0,
        max: 100,
        helperText: "Progress percentage (0–100)",
      },
    ],
  },

  // ─── ScrollArea ───────────────────────────────────────────────────────────
  {
    component: ScrollArea,
    name: "ScrollArea",
    canHaveChildren: true,
    inputs: [],
  },

  // ─── Separator ────────────────────────────────────────────────────────────
  {
    component: Separator,
    name: "Separator",
    inputs: [
      {
        name: "orientation",
        type: "text",
        friendlyName: "Orientation",
        defaultValue: "horizontal",
        enum: [
          { label: "Horizontal", value: "horizontal" },
          { label: "Vertical", value: "vertical" },
        ],
      },
    ],
  },

  // ─── Skeleton ─────────────────────────────────────────────────────────────
  {
    component: Skeleton,
    name: "Skeleton",
    inputs: [
      {
        name: "className",
        type: "text",
        friendlyName: "Custom Classes",
        defaultValue: "h-4 w-full",
        helperText: "Tailwind classes to set width and height",
        advanced: true,
      },
    ],
  },

  // ─── Slider ───────────────────────────────────────────────────────────────
  {
    component: Slider,
    name: "Slider",
    inputs: [
      {
        name: "min",
        type: "number",
        friendlyName: "Minimum",
        defaultValue: 0,
      },
      {
        name: "max",
        type: "number",
        friendlyName: "Maximum",
        defaultValue: 100,
      },
      {
        name: "step",
        type: "number",
        friendlyName: "Step",
        defaultValue: 1,
        helperText: "Increment between each selectable value",
      },
      // NOTE: previously a `defaultValue` input declared as `type: "list"`
      // with `subFields: [{ name: "value", type: "number" }]`. Builder fed
      // the component `[{ value: 50 }]` but Radix Slider expects `number[]`,
      // and the malformed schema also appears to break the editor's input
      // panel on load. Omit the input — Radix uses an internal default.
      // To restore an editable default later, expose Slider through a
      // wrapper component that takes a single `number` and passes
      // `[value]` to Slider's `defaultValue`.
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
    ],
  },

  // ─── Switch ───────────────────────────────────────────────────────────────
  {
    component: Switch,
    name: "Switch",
    inputs: [
      {
        name: "defaultChecked",
        type: "boolean",
        friendlyName: "Default Checked",
        defaultValue: false,
      },
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
      {
        name: "id",
        type: "text",
        friendlyName: "ID",
        helperText: "Used to associate with a Label's htmlFor",
        advanced: true,
      },
    ],
  },

  // ─── Textarea ─────────────────────────────────────────────────────────────
  {
    component: BuilderTextarea,
    name: "Textarea",
    canHaveChildren: true,
    inputs: [
      {
        name: "placeholder",
        type: "text",
        friendlyName: "Placeholder",
        defaultValue: "",
        helperText: "Ghost text shown when empty",
      },
      {
        name: "defaultValue",
        type: "text",
        friendlyName: "Default Value",
        defaultValue: "",
        helperText: "Initial text content",
      },
      {
        name: "rows",
        type: "number",
        friendlyName: "Rows",
        defaultValue: 3,
        helperText: "Visible height in rows",
      },
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
    ],
  },

  // ─── Toggle ───────────────────────────────────────────────────────────────
  {
    component: Toggle,
    name: "Toggle",
    canHaveChildren: true,
    inputs: [
      {
        name: "variant",
        type: "text",
        friendlyName: "Variant",
        defaultValue: "default",
        enum: [
          { label: "Default", value: "default" },
          { label: "Outline", value: "outline" },
        ],
      },
      {
        name: "size",
        type: "text",
        friendlyName: "Size",
        defaultValue: "default",
        enum: [
          { label: "Default", value: "default" },
          { label: "Small", value: "sm" },
          { label: "Large", value: "lg" },
        ],
      },
      {
        name: "defaultPressed",
        type: "boolean",
        friendlyName: "Default Pressed",
        defaultValue: false,
      },
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
    ],
  },
];

// Design tokens are registered in client/lib/builder-design-tokens.ts, which
// is imported from client/App.tsx for its side effect so the
// `register("editor.settings", …)` postMessage fires on every route.
