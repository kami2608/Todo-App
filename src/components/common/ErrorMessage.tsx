import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export default function ErrorMessage({
  error,
}: {
  error:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | (Record<string, Partial<{ type: string | number; message: string }>> &
        Partial<{ type: string | number; message: string }>)
    | undefined;
}) {
  return (
    <div className={"min-h-5"}>
      {error && (
        <p className="text-sm text-red-700 px-1">
          {typeof error.message === "string" ? error.message : null}
        </p>
      )}
    </div>
  );
}
