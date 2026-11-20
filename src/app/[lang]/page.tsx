import { notFound } from "next/navigation";
import { getContent, hasLocale } from "@/content";
import Calculator from "@/components/Calculator";
import Clients from "@/components/Clients";
import Compare from "@/components/Compare";
import DemoForm from "@/components/DemoForm";
import Devices from "@/components/Devices";
import Facts from "@/components/Facts";
import Faq from "@/components/Faq";
import Flow from "@/components/Flow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowSteps from "@/components/HowSteps";
import LandingShell from "@/components/LandingShell";
import Modules from "@/components/Modules";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import ToTop from "@/components/ToTop";
import Video from "@/components/Video";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getContent(lang);

  return (
    <LandingShell>
      <Hero locale={lang} t={t} />
      <main>
        <Facts t={t} />
        <Results t={t} />
        <Modules t={t} />
        <Flow t={t} />
        <Devices t={t} />
        <Video t={t} />
        <HowSteps t={t} />
        <Pricing t={t} />
        <Compare t={t} />
        <Calculator t={t} />
        <Clients t={t} />
        <Faq t={t} />
        <DemoForm t={t} />
      </main>
      <Footer t={t} />
      <ToTop label={t.a11y.toTop} />
    </LandingShell>
  );
}
