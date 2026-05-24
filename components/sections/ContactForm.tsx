"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { LeafSpark } from "@/components/ui/icons";

const fieldCls =
  "h-12 w-full rounded-2xl border border-sage-light/60 bg-cream px-4 text-body text-ink outline-none transition-colors focus:border-lavender";

/**
 * Contact form with client-side validation. Submission is stubbed (logs +
 * success state) until wired to a provider (Resend/Formspree) in a later
 * milestone — no data leaves the browser yet.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="grid h-full min-h-80 place-items-center rounded-3xl border border-sage-light/40 bg-cream p-10 text-center">
        <div>
          <LeafSpark className="mx-auto text-3xl text-lavender" />
          <h2 className="mt-3 text-h3 text-forest">Thank you for reaching out.</h2>
          <p className="mt-2 text-body text-ink/70">We&apos;ll be in touch gently and soon. Take care of yourself.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (!(e.currentTarget as HTMLFormElement).checkValidity()) {
          (e.currentTarget as HTMLFormElement).reportValidity();
          return;
        }
        setSent(true);
      }}
      className="rounded-3xl border border-sage-light/40 bg-ivory/70 p-7 sm:p-8"
      aria-label="Contact form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-small text-forest">Name</span>
          <input name="name" required autoComplete="name" className={fieldCls} placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-small text-forest">Email</span>
          <input name="email" type="email" required autoComplete="email" className={fieldCls} placeholder="you@email.com" />
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-1.5">
        <span className="text-small text-forest">I&apos;m interested in</span>
        <select name="topic" className={`${fieldCls} appearance-none`} defaultValue="">
          <option value="" disabled>Choose a session type</option>
          <option>Individual Therapy</option>
          <option>Couples Therapy</option>
          <option>Teen Therapy</option>
          <option>Group Therapy</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label className="mt-5 flex flex-col gap-1.5">
        <span className="text-small text-forest">Message</span>
        <textarea name="message" required rows={4} className={`${fieldCls} h-auto py-3`} placeholder="Share whatever feels comfortable…" />
      </label>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        Send message <LeafSpark className="text-honey" />
      </Button>
    </form>
  );
}
