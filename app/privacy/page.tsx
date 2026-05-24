import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Your trust matters" title="Privacy" accent="& confidentiality." />
      <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="space-y-4 text-body leading-relaxed text-ink/75">
          <p>Your privacy is sacred to us. Anything you share with Havenora Care — in a session, a form, or an email — is kept strictly confidential and handled with care.</p>
          <p>We only collect the information needed to support you and respond to your requests, and we never sell or share it. This page will hold our full, finalized policy before launch.</p>
          <p>Questions? Write to <a href="mailto:hello@havenora.care" className="text-lavender hover:underline">hello@havenora.care</a>.</p>
        </div>
      </section>
    </>
  );
}
