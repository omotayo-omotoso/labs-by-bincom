import { createFileRoute } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Check, ChevronDown, CircleGauge, Code2, ExternalLink, Globe2, GraduationCap, Lightbulb, Menu, Rocket, Users, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/labs-team-collaboration.jpg";

const REGISTER_URL = "https://bit.ly/labsbybincom";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "LABS by Bincom | Build Real Products" },
    { name: "description", content: "Join LABS by Bincom, a 3–6 month pre-incubator where cross-functional teams build products for real users." },
    { property: "og:title", content: "LABS by Bincom | Build Real Products" },
    { property: "og:description", content: "Gain real product experience in a 3–6 month cross-functional pre-incubator." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const nav = [["Overview", "overview"], ["Benefits", "benefits"], ["Who Should Join", "audience"], ["Skills", "skills"], ["How It Works", "journey"], ["Curriculum", "expectations"], ["Calendar", "calendar"], ["FAQs", "faqs"]];
const benefits = [
  { title: "Real World Experience", text: "Work on active products with real users, real constraints and real outcomes.", icon: CircleGauge, className: "md:col-span-2" },
  { title: "Virtual Lab", text: "Hone your craft remotely within a focused, collaborative environment.", icon: Globe2, className: "" },
  { title: "CV Enhancement", text: "Gain credible IT placement and work experience references.", icon: BriefcaseBusiness, className: "" },
  { title: "Startup Building", text: "Take an idea from concept to a working technology product.", icon: Rocket, className: "" },
  { title: "Visa Portfolio", text: "Build verifiable experience for relevant tech-enabled visa pathways.", icon: BadgeCheck, className: "md:col-span-2" },
];
const audience = ["Tech Professionals", "Non-Tech Transitioners", "Fresh Graduates & NYSC Members", "Freelancers"];
const skills = ["PHP", "FrontEnd / Mobile App", "Backend Development", "Python", "Digital Marketing", "UI/UX & Design", "Product Management", "Infrastructure", "Project Management"];
const stages = [
  ["Stage 0", "Preliminary Session", "Hackathon format, team formation and project pitching."],
  ["Stage 1", "Onboarding & Project Brief", "Team onboarding with Y Combinator curriculum integration."],
  ["Stage 2", "Project Execution", "Build the product and complete the Y Combinator course."],
  ["Stage 3", "Real User Deployment", "Release to real users and demonstrate a working prototype."],
];
const judging = ["Problem clarity", "User relevance", "Team collaboration", "Product execution", "Technical quality", "Evidence of learning", "Demo readiness"];
const calendar = [["01", "Preliminary Session"], ["02", "Onboarding & Mentor Meeting"], ["04", "Product Document Submission"], ["08", "Mid-Program Review & Demo"], ["13", "Product Test Results Submission"], ["14", "Next Steps / Incubator Transition"]];
const faqs = [
  ["How long is the program?", "LABS runs for 3–6 months, depending on your team, track and product pathway."],
  ["How can I access the opportunities?", "Register through the application link. Shortlisted applicants receive the next steps and preliminary-session details."],
  ["What level of expertise is needed?", "The program is open to all skill levels. What matters most is commitment, collaboration and a willingness to learn by building."],
  ["What are the portfolio and public domain rules?", "Work is built transparently for public-domain or open-source use. Your contributions can form part of a demonstrable professional portfolio."],
  ["Is School Internship & IT Placement supported?", "Yes. Relevant participants can gain structured work experience and supporting references based on active participation."],
  ["What are the startup funding rules?", "Funding is not guaranteed. Promising products may progress toward incubation, while approved testing and marketing expenditure is capped at £350."],
];

function ApplyButton({ dark = false, label = "Apply Now" }: { dark?: boolean; label?: string }) {
  return <Button asChild variant={dark ? "labsDark" : "labs"} size="lg"><a href={REGISTER_URL} target="_blank" rel="noreferrer">{label}<ArrowRight /></a></Button>;
}

function SectionHeader({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return <div className="mb-10 grid gap-5 border-t border-border pt-5 md:grid-cols-[1fr_2fr] md:mb-14"><div className="flex items-center gap-3 text-xs font-bold uppercase text-muted-foreground"><span className="text-primary">{number}</span>{eyebrow}</div><div><h2 className="max-w-3xl text-balance text-3xl font-bold leading-tight md:text-5xl">{title}</h2>{copy && <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{copy}</p>}</div></div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
    <div className="section-shell flex h-20 items-center justify-between gap-5">
      <a href="#overview" className="font-display text-xl font-bold">LABS <span className="font-normal text-muted-foreground">by Bincom</span></a>
      <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}</nav>
      <div className="ml-auto hidden items-center gap-4 sm:flex"><div aria-label="Bincom Dev Center logo placeholder" className="border-l border-border pl-4 text-right leading-none"><span className="block text-[10px] font-bold uppercase text-muted-foreground">Bincom</span><span className="text-xs font-bold">Dev Center</span></div><ApplyButton label="Register Now" /></div>
      <Button variant="ghost" size="icon" className="xl:hidden" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="section-shell grid border-t border-border py-4 xl:hidden">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-semibold">{label}</a>)}<a className="mt-4 flex h-12 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground" href={REGISTER_URL} target="_blank" rel="noreferrer">Register Now</a></nav>}
  </header>;
}

function Index() {
  return <div className="overflow-hidden bg-background text-foreground"><Header /><main>
    <section id="overview" className="grid-paper border-b border-border"><div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
      <div className="animate-rise"><div className="mb-7 inline-flex items-center gap-2 border border-foreground bg-background px-3 py-2 text-xs font-bold uppercase"><span className="size-2 bg-primary"/>Applications open</div><h1 className="max-w-3xl text-balance text-5xl font-bold leading-[.94] md:text-7xl lg:text-[5.5rem]">BUILD REAL PRODUCTS.<br/><span className="text-primary">GAIN REAL EXPERIENCE.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">LABS by Bincom is a 3–6 months pre-incubator program that brings together cross-functional teams to build digital technology products used by real-life users.</p><div className="mt-8"><ApplyButton label="Apply to LABS" /></div><div className="mt-10 flex flex-wrap gap-2">{["3–6 Month Program", "Public Domain / Open Source", "Y Combinator Curriculum Integrated"].map(x => <span key={x} className="border border-border bg-background px-3 py-2 text-xs font-semibold">{x}</span>)}</div></div>
      <div className="relative animate-rise [animation-delay:150ms]"><div className="absolute -left-4 -top-4 z-10 bg-primary px-4 py-3 font-display text-sm font-bold uppercase md:-left-7">Learn by doing</div><div className="grid grid-cols-3 gap-2"><img src={heroImage} alt="Technology team collaborating around a product prototype" width={1600} height={1200} className="col-span-3 aspect-[4/3] w-full object-cover md:col-span-2 md:row-span-2 md:h-full"/><div className="hidden min-h-44 bg-foreground p-5 text-background md:flex md:flex-col md:justify-between"><Code2 className="size-8 text-primary"/><p className="font-display text-xl font-bold">BUILD<br/>TOGETHER</p></div><div className="hidden min-h-44 bg-primary p-5 md:flex md:flex-col md:justify-between"><Users className="size-8"/><p className="font-display text-xl font-bold">REAL<br/>USERS</p></div></div></div>
    </div></section>

    <section id="benefits" className="py-20 md:py-28"><div className="section-shell"><SectionHeader number="01" eyebrow="Program benefits" title="WHAT'S IN IT FOR YOU?" copy="Not another passive training course. LABS is a structured environment for turning knowledge into evidence of what you can do."/><div className="grid gap-3 md:grid-cols-3">{benefits.map(({title,text,icon:Icon,className}) => <article key={title} className={`group min-h-56 border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary hover:bg-background ${className}`}><div className="mb-12 flex size-11 items-center justify-center bg-primary"><Icon className="size-5"/></div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div></div></section>

    <section id="audience" className="bg-foreground py-20 text-background md:py-28"><div className="section-shell grid gap-16 lg:grid-cols-2"><div><p className="mb-5 text-xs font-bold uppercase text-primary">02 / Who should join</p><h2 className="text-4xl font-bold md:text-5xl">WHO IS THIS FOR?</h2><div className="mt-10 divide-y divide-background/20 border-y border-background/20">{audience.map((x,i)=><div key={x} className="flex items-center justify-between py-5"><span className="font-display text-xl font-semibold">{x}</span><span className="text-sm text-primary">0{i+1}</span></div>)}</div></div><div id="skills"><p className="mb-5 text-xs font-bold uppercase text-primary">Skills involved & tracks</p><h2 className="text-4xl font-bold md:text-5xl">FIND YOUR PLACE IN THE TEAM.</h2><p className="mt-5 max-w-xl leading-7 text-background/70">Great digital products need more than code. Bring your discipline, learn how others work and build as one cross-functional unit.</p><div className="mt-9 flex flex-wrap gap-3">{skills.map(x=><span key={x} className="bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">{x}</span>)}</div></div></div></section>

    <section id="journey" className="py-20 md:py-28"><div className="section-shell"><SectionHeader number="03" eyebrow="How it works" title="FROM FIRST PITCH TO REAL USERS."/><div className="grid gap-10 lg:grid-cols-[1fr_22rem]"><div>{stages.map(([stage,title,text],i)=><article key={stage} className="grid grid-cols-[4rem_1fr] gap-5 border-b border-border py-7 first:pt-0 md:grid-cols-[8rem_1fr]"><div><span className="inline-flex size-12 items-center justify-center bg-primary font-display font-bold">0{i}</span></div><div><p className="text-xs font-bold uppercase text-muted-foreground">{stage}</p><h3 className="mt-2 text-2xl font-bold">{title}</h3><p className="mt-2 text-muted-foreground">{text}</p></div></article>)}</div><aside className="h-fit border border-foreground bg-surface p-6 lg:sticky lg:top-28"><div className="mb-7 flex items-center gap-3"><Lightbulb className="text-primary"/><h3 className="text-xl font-bold">Judge Evaluation Criteria</h3></div><ol className="space-y-4">{judging.map((x,i)=><li key={x} className="flex items-center gap-3 text-sm"><span className="flex size-6 shrink-0 items-center justify-center bg-foreground text-xs text-background">{i+1}</span>{x}</li>)}</ol></aside></div></div></section>

    <section id="expectations" className="border-y border-border bg-surface py-20 md:py-28"><div className="section-shell"><SectionHeader number="04" eyebrow="The agreement" title="COMMITMENT IN. EXPERIENCE OUT."/><div className="grid gap-4 md:grid-cols-2"><article className="bg-foreground p-7 text-background md:p-10"><p className="text-xs font-bold uppercase text-primary">Your side</p><h3 className="mt-4 text-3xl font-bold">What We Expect From You</h3><ul className="mt-8 space-y-5">{["8 hrs/week minimum commitment", "Active Slack engagement", "Public GitHub code and documentation", "Consistent mentor syncs"].map(x=><li key={x} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary"/>{x}</li>)}</ul></article><article className="bg-primary p-7 md:p-10"><p className="text-xs font-bold uppercase">Our side</p><h3 className="mt-4 text-3xl font-bold">What You Can Expect From Us</h3><ul className="mt-8 space-y-5">{["Hands-on product execution", "Cross-functional team exposure", "Quality mentorship and feedback", "Reference letters for meaningful contribution"].map(x=><li key={x} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0"/>{x}</li>)}</ul></article></div></div></section>

    <section id="calendar" className="py-20 md:py-28"><div className="section-shell"><SectionHeader number="05" eyebrow="Calendar & entry" title="THE ROAD AHEAD, WEEK BY WEEK."/><div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]"><div><h3 className="mb-6 text-xl font-bold">Program Calendar</h3><div className="border-t border-foreground">{calendar.map(([week,event])=><div key={week} className="grid grid-cols-[5rem_1fr] items-center border-b border-border py-5"><span className="font-display text-3xl font-bold text-primary">{week}</span><div><span className="text-xs font-bold uppercase text-muted-foreground">Week {Number(week)}</span><p className="mt-1 font-semibold">{event}</p></div></div>)}</div></div><div><h3 className="mb-6 text-xl font-bold">3 Ways to Join</h3><div className="space-y-3">{[["Paid Member","£750 program fee"],["Partner Brand Delegate","Join through a partner organisation"],["Scholarship Application","Apply for a supported place"]].map(([t,d],i)=><div key={t} className="flex gap-5 border border-border bg-surface p-5"><span className="font-display text-xl font-bold text-primary">0{i+1}</span><div><h4 className="font-bold">{t}</h4><p className="mt-1 text-sm text-muted-foreground">{d}</p></div></div>)}</div><div className="mt-5 border-l-4 border-primary bg-accent p-5"><p className="text-xs font-bold uppercase">Finance guideline</p><p className="mt-2 text-sm leading-6">Approved testing and marketing expenditure is capped at <strong>£350 maximum</strong>.</p></div></div></div></div></section>

    <section id="faqs" className="border-t border-border bg-surface py-20 md:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase text-primary">06 / FAQs</p><h2 className="mt-5 text-4xl font-bold md:text-5xl">GOOD QUESTIONS.<br/>CLEAR ANSWERS.</h2><p className="mt-5 max-w-sm text-muted-foreground">Everything you need to know before applying to LABS.</p></div><Accordion.Root type="single" collapsible className="border-t border-foreground">{faqs.map(([q,a],i)=><Accordion.Item key={q} value={`item-${i}`} className="border-b border-border"><Accordion.Header><Accordion.Trigger className="group flex w-full items-center justify-between gap-5 py-6 text-left font-display text-lg font-bold"><span>{q}</span><ChevronDown className="size-5 shrink-0 transition-transform group-data-[state=open]:rotate-180"/></Accordion.Trigger></Accordion.Header><Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"><p className="max-w-2xl pb-6 leading-7 text-muted-foreground">{a}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section>

    <section className="bg-primary"><div className="section-shell grid items-end gap-10 py-16 md:grid-cols-[1fr_auto] md:py-20"><div><p className="text-xs font-bold uppercase">Your next chapter starts here</p><h2 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight md:text-6xl">READY TO TURN YOUR IDEA INTO A REAL-WORLD PRODUCT?</h2></div><ApplyButton dark label="Register for LABS by Bincom now" /></div></section>
  </main><footer className="bg-foreground text-background"><div className="section-shell grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end"><div><p className="font-display text-2xl font-bold">LABS <span className="font-normal text-background/60">by Bincom</span></p><p className="mt-3 max-w-md text-sm text-background/60">Building people who build products that matter.</p></div><div className="flex flex-wrap gap-6 text-sm"><a href="#overview">Overview</a><a href="#faqs">FAQs</a><a href={REGISTER_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary">Apply now <ExternalLink className="size-3"/></a></div></div><div className="section-shell flex flex-col gap-2 border-t border-background/15 py-5 text-xs text-background/50 sm:flex-row sm:justify-between"><span>© 2026 Bincom Dev Center. All rights reserved.</span><span>LABS by Bincom</span></div></footer></div>;
}
