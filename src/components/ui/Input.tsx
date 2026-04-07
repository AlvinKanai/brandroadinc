import { forwardRef, type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    hideLabel?: boolean;
    hint?: string;
    error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, hideLabel, hint, error, id, className, ...rest },
    ref,
) {
    const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
        <label className="flex w-full flex-col gap-2 text-sm font-medium text-slate-900" htmlFor={fieldId}>
            <span className={hideLabel ? "sr-only" : ""}>{label}</span>
            <input
                ref={ref}
                id={fieldId}
                className={[
                    "h-11 w-full rounded-xl border bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2",
                    error
                        ? "border-red-400 focus-visible:ring-red-300"
                        : "border-slate-300 focus-visible:border-brand-purple/60 focus-visible:ring-brand-purple/30",
                    className ?? "",
                ]
                    .join(" ")
                    .trim()}
                {...rest}
            />
            {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
            {error ? <span className="text-xs text-red-500">{error}</span> : null}
        </label>
    );
});
