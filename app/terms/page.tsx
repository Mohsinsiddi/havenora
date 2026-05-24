import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="The essentials" title="Terms" accent="of service." />
      <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="space-y-4 text-body leading-relaxed text-ink/75">
          <p>By using the Havenora Care website and booking a session, you agree to engage with our services respectfully and in good faith.</p>
          <p>Therapy is a collaborative process and not a substitute for emergency care. If you are in crisis, please contact your local emergency services or a crisis line immediately.</p>
          <p>This page will hold our full, finalized terms before launch. Questions? Write to <a href="mailto:hello@havenora.care" className="text-lavender hover:underline">hello@havenora.care</a>.</p>
        </div>
      </section>
    </>
  );
}
