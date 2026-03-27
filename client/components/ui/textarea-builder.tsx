import * as React from "react";
import { Textarea, TextareaProps } from "./textarea";

/**
 * Builder.io-safe Textarea wrapper
 *
 * This wrapper handles the case where Builder.io might pass children to the textarea.
 * Since HTML textarea elements can't have children in React, we convert any children
 * to the defaultValue prop instead.
 */
export interface BuilderTextareaProps extends TextareaProps {
  children?: React.ReactNode;
}

export const BuilderTextarea = React.forwardRef<HTMLTextAreaElement, BuilderTextareaProps>(
  ({ children, defaultValue, value, ...props }, ref) => {
    // If children are provided, use them as the defaultValue (unless value/defaultValue is already set)
    const textValue = value !== undefined
      ? value
      : defaultValue !== undefined
        ? defaultValue
        : children
          ? String(children)
          : undefined;

    return (
      <Textarea
        ref={ref}
        {...props}
        defaultValue={value === undefined ? textValue : undefined}
        value={value}
      />
    );
  }
);

BuilderTextarea.displayName = "BuilderTextarea";
