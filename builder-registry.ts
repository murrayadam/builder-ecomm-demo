/**
 * Builder.io Component Registry
 *
 * Registers all client/components/ui components for use in Builder.io's
 * visual editor (Publish). Uses the Gen2 SDK customComponents pattern.
 *
 * Import this array and pass it to the `customComponents` prop of <Content />.
 */

import type { RegisteredComponent } from "@builder.io/sdk-react";

// --- UI Component Imports ---
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./client/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./client/components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./client/components/ui/alert-dialog";
import { AspectRatio } from "./client/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "./client/components/ui/avatar";
import { Badge } from "./client/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./client/components/ui/breadcrumb";
import { Button } from "./client/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./client/components/ui/card";
import { Checkbox } from "./client/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./client/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./client/components/ui/dialog";
import { Input } from "./client/components/ui/input";
import { Label } from "./client/components/ui/label";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "./client/components/ui/pagination";
import { Progress } from "./client/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "./client/components/ui/radio-group";
import { ScrollArea } from "./client/components/ui/scroll-area";
import { Separator } from "./client/components/ui/separator";
import { Skeleton } from "./client/components/ui/skeleton";
import { Slider } from "./client/components/ui/slider";
import { Switch } from "./client/components/ui/switch";
import { Table, TableBody, TableCaption, TableCell, TableFooter as TableFooterComp, TableHead, TableHeader, TableRow } from "./client/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./client/components/ui/tabs";
import { Textarea } from "./client/components/ui/textarea";
import { Toggle } from "./client/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "./client/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./client/components/ui/tooltip";

export const customComponents: RegisteredComponent[] = [
  // ─── Accordion ────────────────────────────────────────────────────────────
  {
    component: Accordion,
    name: "Accordion",
    canHaveChildren: true,
    inputs: [
      {
        name: "type",
        type: "text",
        friendlyName: "Type",
        defaultValue: "single",
        enum: [
          { label: "Single (one item open at a time)", value: "single" },
          { label: "Multiple (many items open)", value: "multiple" },
        ],
        helperText: "Whether one or many items can be expanded",
      },
      {
        name: "collapsible",
        type: "boolean",
        friendlyName: "Collapsible",
        defaultValue: true,
        helperText: "Allow closing an already-open item (single mode only)",
      },
    ],
  },
  {
    component: AccordionItem,
    name: "AccordionItem",
    canHaveChildren: true,
    inputs: [
      {
        name: "value",
        type: "text",
        friendlyName: "Value",
        required: true,
        defaultValue: "item-1",
        helperText: "Unique identifier for this accordion item",
      },
    ],
  },
  {
    component: AccordionTrigger,
    name: "AccordionTrigger",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AccordionContent,
    name: "AccordionContent",
    canHaveChildren: true,
    inputs: [],
  },

  // ─── Alert ────────────────────────────────────────────────────────────────
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
  {
    component: AlertTitle,
    name: "AlertTitle",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AlertDescription,
    name: "AlertDescription",
    canHaveChildren: true,
    inputs: [],
  },

  // ─── Alert Dialog ─────────────────────────────────────────────────────────
  {
    component: AlertDialog,
    name: "AlertDialog",
    canHaveChildren: true,
    inputs: [
      {
        name: "defaultOpen",
        type: "boolean",
        friendlyName: "Default Open",
        defaultValue: false,
      },
    ],
  },
  {
    component: AlertDialogTrigger,
    name: "AlertDialogTrigger",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AlertDialogContent,
    name: "AlertDialogContent",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AlertDialogHeader,
    name: "AlertDialogHeader",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AlertDialogFooter,
    name: "AlertDialogFooter",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AlertDialogTitle,
    name: "AlertDialogTitle",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AlertDialogDescription,
    name: "AlertDialogDescription",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AlertDialogAction,
    name: "AlertDialogAction",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AlertDialogCancel,
    name: "AlertDialogCancel",
    canHaveChildren: true,
    inputs: [],
  },

  // ─── Aspect Ratio ─────────────────────────────────────────────────────────
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

  // ─── Avatar ───────────────────────────────────────────────────────────────
  {
    component: Avatar,
    name: "Avatar",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: AvatarImage,
    name: "AvatarImage",
    inputs: [
      {
        name: "src",
        type: "file",
        friendlyName: "Image",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        helperText: "Avatar image source URL",
      },
      {
        name: "alt",
        type: "text",
        friendlyName: "Alt Text",
        defaultValue: "Avatar",
        helperText: "Accessible description of the image",
      },
    ],
  },
  {
    component: AvatarFallback,
    name: "AvatarFallback",
    canHaveChildren: true,
    inputs: [],
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

  // ─── Breadcrumb ───────────────────────────────────────────────────────────
  {
    component: Breadcrumb,
    name: "Breadcrumb",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: BreadcrumbList,
    name: "BreadcrumbList",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: BreadcrumbItem,
    name: "BreadcrumbItem",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: BreadcrumbLink,
    name: "BreadcrumbLink",
    canHaveChildren: true,
    inputs: [
      {
        name: "href",
        type: "url",
        friendlyName: "Link URL",
        helperText: "Destination URL of this breadcrumb step",
      },
    ],
  },
  {
    component: BreadcrumbPage,
    name: "BreadcrumbPage",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: BreadcrumbSeparator,
    name: "BreadcrumbSeparator",
    inputs: [],
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
  {
    component: Card,
    name: "Card",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: CardHeader,
    name: "CardHeader",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: CardTitle,
    name: "CardTitle",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: CardDescription,
    name: "CardDescription",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: CardContent,
    name: "CardContent",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: CardFooter,
    name: "CardFooter",
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

  // ─── Collapsible ──────────────────────────────────────────────────────────
  {
    component: Collapsible,
    name: "Collapsible",
    canHaveChildren: true,
    inputs: [
      {
        name: "defaultOpen",
        type: "boolean",
        friendlyName: "Default Open",
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
  {
    component: CollapsibleTrigger,
    name: "CollapsibleTrigger",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: CollapsibleContent,
    name: "CollapsibleContent",
    canHaveChildren: true,
    inputs: [],
  },

  // ─── Dialog ───────────────────────────────────────────────────────────────
  {
    component: Dialog,
    name: "Dialog",
    canHaveChildren: true,
    inputs: [
      {
        name: "defaultOpen",
        type: "boolean",
        friendlyName: "Default Open",
        defaultValue: false,
      },
    ],
  },
  {
    component: DialogTrigger,
    name: "DialogTrigger",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: DialogContent,
    name: "DialogContent",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: DialogHeader,
    name: "DialogHeader",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: DialogFooter,
    name: "DialogFooter",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: DialogTitle,
    name: "DialogTitle",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: DialogDescription,
    name: "DialogDescription",
    canHaveChildren: true,
    inputs: [],
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

  // ─── Pagination ───────────────────────────────────────────────────────────
  {
    component: Pagination,
    name: "Pagination",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: PaginationContent,
    name: "PaginationContent",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: PaginationItem,
    name: "PaginationItem",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: PaginationPrevious,
    name: "PaginationPrevious",
    inputs: [
      {
        name: "href",
        type: "url",
        friendlyName: "Previous URL",
      },
    ],
  },
  {
    component: PaginationNext,
    name: "PaginationNext",
    inputs: [
      {
        name: "href",
        type: "url",
        friendlyName: "Next URL",
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

  // ─── RadioGroup ───────────────────────────────────────────────────────────
  {
    component: RadioGroup,
    name: "RadioGroup",
    canHaveChildren: true,
    inputs: [
      {
        name: "defaultValue",
        type: "text",
        friendlyName: "Default Value",
        helperText: "Value of the initially selected radio item",
      },
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
    ],
  },
  {
    component: RadioGroupItem,
    name: "RadioGroupItem",
    inputs: [
      {
        name: "value",
        type: "text",
        friendlyName: "Value",
        required: true,
        defaultValue: "option-1",
        helperText: "Unique value for this radio option",
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
      {
        name: "defaultValue",
        type: "list",
        friendlyName: "Default Value",
        defaultValue: [50],
        subFields: [
          {
            name: "value",
            type: "number",
          },
        ],
        helperText: "Initial slider value(s)",
      },
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

  // ─── Table ────────────────────────────────────────────────────────────────
  {
    component: Table,
    name: "Table",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TableHeader,
    name: "TableHeader",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TableBody,
    name: "TableBody",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TableFooterComp,
    name: "TableFooter",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TableRow,
    name: "TableRow",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TableHead,
    name: "TableHead",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TableCell,
    name: "TableCell",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TableCaption,
    name: "TableCaption",
    canHaveChildren: true,
    inputs: [],
  },

  // ─── Tabs ─────────────────────────────────────────────────────────────────
  {
    component: Tabs,
    name: "Tabs",
    canHaveChildren: true,
    inputs: [
      {
        name: "defaultValue",
        type: "text",
        friendlyName: "Default Tab",
        defaultValue: "tab-1",
        helperText: "Value of the tab open by default",
      },
    ],
  },
  {
    component: TabsList,
    name: "TabsList",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TabsTrigger,
    name: "TabsTrigger",
    canHaveChildren: true,
    inputs: [
      {
        name: "value",
        type: "text",
        friendlyName: "Value",
        required: true,
        defaultValue: "tab-1",
        helperText: "Must match the value in the corresponding TabsContent",
      },
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
    ],
  },
  {
    component: TabsContent,
    name: "TabsContent",
    canHaveChildren: true,
    inputs: [
      {
        name: "value",
        type: "text",
        friendlyName: "Value",
        required: true,
        defaultValue: "tab-1",
        helperText: "Must match the value in the corresponding TabsTrigger",
      },
    ],
  },

  // ─── Textarea ─────────────────────────────────────────────────────────────
  {
    component: Textarea,
    name: "Textarea",
    inputs: [
      {
        name: "placeholder",
        type: "text",
        friendlyName: "Placeholder",
        defaultValue: "",
        helperText: "Ghost text shown when empty",
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

  // ─── ToggleGroup ──────────────────────────────────────────────────────────
  {
    component: ToggleGroup,
    name: "ToggleGroup",
    canHaveChildren: true,
    inputs: [
      {
        name: "type",
        type: "text",
        friendlyName: "Selection Type",
        defaultValue: "single",
        enum: [
          { label: "Single", value: "single" },
          { label: "Multiple", value: "multiple" },
        ],
      },
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
    ],
  },
  {
    component: ToggleGroupItem,
    name: "ToggleGroupItem",
    canHaveChildren: true,
    inputs: [
      {
        name: "value",
        type: "text",
        friendlyName: "Value",
        required: true,
        defaultValue: "item-1",
        helperText: "Unique identifier for this toggle option",
      },
      {
        name: "disabled",
        type: "boolean",
        friendlyName: "Disabled",
        defaultValue: false,
      },
    ],
  },

  // ─── Tooltip ──────────────────────────────────────────────────────────────
  {
    component: TooltipProvider,
    name: "TooltipProvider",
    canHaveChildren: true,
    inputs: [
      {
        name: "delayDuration",
        type: "number",
        friendlyName: "Delay Duration (ms)",
        defaultValue: 700,
        helperText: "Milliseconds before tooltip opens",
      },
    ],
  },
  {
    component: Tooltip,
    name: "Tooltip",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TooltipTrigger,
    name: "TooltipTrigger",
    canHaveChildren: true,
    inputs: [],
  },
  {
    component: TooltipContent,
    name: "TooltipContent",
    canHaveChildren: true,
    inputs: [
      {
        name: "side",
        type: "text",
        friendlyName: "Side",
        defaultValue: "top",
        enum: [
          { label: "Top", value: "top" },
          { label: "Bottom", value: "bottom" },
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
        helperText: "Which side of the trigger the tooltip appears on",
      },
      {
        name: "sideOffset",
        type: "number",
        friendlyName: "Side Offset",
        defaultValue: 4,
        helperText: "Distance in pixels from the trigger",
      },
    ],
  },
];
