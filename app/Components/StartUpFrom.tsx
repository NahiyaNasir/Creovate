"use client";

import React, { useState, useActionState } from "react";

import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";

import { useRouter } from "next/navigation";
import { createPitch } from "@/lib/action";
import toast, { Toaster } from "react-hot-toast";
const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);

      const result = await createPitch(prevState, formData, pitch);

      if (result.status == "SUCCESS") {
       
        toast.success("Your startup pitch has been created successfully");

        router.push(`/startup/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErorrs = error.flatten().fieldErrors;

        setErrors(fieldErorrs as unknown as Record<string, string>);

        toast.error("Please check your inputs and try again");
  console.log(fieldErorrs);
        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast.error("An unexpected error has occurred");

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <>
      <form action={formAction} className="startup-form">
        <div>
          <label htmlFor="title" className="startup-form_label">
            Title
          </label>
          <input
            id="title"
            name="title"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            required
            placeholder="Startup Title"
          />

          {errors.title && <p className="startup-form_error">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="description" className="startup-form_label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className= "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            required
            placeholder="Startup Description"
          />

          {/* {errors.description && (
            <p className="startup-form_error">{errors.description}</p>
          )} */}
        </div>

        <div>
          <label htmlFor="category" className="startup-form_label">
            Category
          </label>
          <input
            id="category"
            name="category"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            required
            placeholder="Startup Category (Tech, Health, Education...)"
          />

          {errors.category && (
            <p className="startup-form_error">{errors.category}</p>
          )}
        </div>

        <div>
          <label htmlFor="link" className="startup-form_label">
            Image URL
          </label>
          <input
            id="link"
            name="link"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            required
            placeholder="Startup Image URL"
          />

          {errors.link && <p className="startup-form_error">{errors.link}</p>}
        </div>

        <div data-color-mode="light">
          <label htmlFor="pitch" className="startup-form_label">
            Pitch
          </label>

          <MDEditor
            value={pitch}
            onChange={(value) => setPitch(value as string)}
            id="pitch"
            preview="edit"
            height={300}
            style={{ borderRadius: 20, overflow: "hidden" }}
            textareaProps={{
              placeholder:
                "Briefly describe your idea and what problem it solves",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />

          {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
        </div>

        <Button
          type="submit"
          className="startup-form_btn text-white"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit Your Pitch"}
          <Send className="size-6 ml-2" />
        </Button>
      </form>
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
};

export default StartupForm;
