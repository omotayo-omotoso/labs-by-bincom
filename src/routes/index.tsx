import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Code2, Users } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/labs-team-collaboration.jpg";
import bincomLogo from "@/assets/bincom-dev-center-logo.png.asset.json";

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

const tracks = ["PHP", "FrontEnd / Mobile App", "Backend Development", "Python", "Project Management", "Digital Marketing", "UI/UX & Design", "Product Management", "Infrastructure", "Others"];
const statuses = ["Tech Professional", "Non-Tech Transitioner", "Fresh Graduate / NYSC", "Freelancer", "Student"];
const sources = ["Social Media", "Friend or Colleague", "Bincom Dev Center", "Search Engine", "Event or Community", "Other"];
const benefits = [
  "An active program with real life projects",
  "A virtual lab where you can hone your skills",
  "Use the work experience to apply for various tech-enabled visas",
  "Build a startup of your own",
  "You can use it for your IT Placement",
  "You can put it on your CV as your work experience",
];
const skills = ["PHP", "FrontEnd / Mobile App", "Backend Development", "Python", "Digital Marketing", "UI/UX & Design", "Product Management", "Infrastructure", "Project Management"];

const fieldClass = "h-12 w-full rounded-md border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary";

function Header() {
  return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
    <div className="section-shell flex h-20 items-center justify-between gap-4">
      <a href="#overview" className="font-display text-lg font-bold sm:text-xl">LABS <span className="font-normal text-muted-foreground">by Bincom</span></a>
      <div className="flex items-center gap-3 sm:gap-4">
        <img src={bincomLogo.url} alt="Bincom Dev Center" width={768} height={768} className="h-10 w-14 object-contain sm:h-12 sm:w-20"/>
        <Button asChild variant="labs" size="lg" className="hidden sm:inline-flex"><a href="#register">Register Now<ArrowRight /></a></Button>
      </div>
    </div>
  </header>;
}

function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  // TODO: submissions will be handed off to the Mautic integration by the dev team.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }
  return <form onSubmit={onSubmit} className="grid gap-4 border border-foreground bg-background p-6 shadow-labs md:p-8">
    <div><p className="text-xs font-bold uppercase text-primary">Registration</p><h2 className="mt-2 text-2xl font-bold md:text-3xl">Start Your Application</h2></div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-2 text-xs font-bold uppercase">Full Name<input required name="fullName" type="text" maxLength={100} placeholder="Jane Doe" className={`${fieldClass} font-normal normal-case`} /></label>
      <label className="grid gap-2 text-xs font-bold uppercase">Email Address<input required name="email" type="email" maxLength={255} placeholder="jane@email.com" className={`${fieldClass} font-normal normal-case`} /></label>
      <label className="grid gap-2 text-xs font-bold uppercase">Phone Number<input required name="phone" type="tel" maxLength={30} placeholder="+234 800 000 0000" className={`${fieldClass} font-normal normal-case`} /></label>
      <label className="grid gap-2 text-xs font-bold uppercase">Location / City<input required name="location" type="text" maxLength={100} placeholder="Lagos" className={`${fieldClass} font-normal normal-case`} /></label>
      <label className="grid gap-2 text-xs font-bold uppercase">Tech Track<select required name="track" defaultValue="" className={`${fieldClass} font-normal normal-case`}><option value="" disabled>Select a track</option>{tracks.map(x => <option key={x}>{x}</option>)}</select></label>
      <label className="grid gap-2 text-xs font-bold uppercase">Current Status<select name="status" defaultValue="" className={`${fieldClass} font-normal normal-case`}><option value="" disabled>Select your status</option>{statuses.map(x => <option key={x}>{x}</option>)}</select></label>
      <label className="grid gap-2 text-xs font-bold uppercase sm:col-span-2">How did you hear about LABS by Bincom?<select name="source" defaultValue="" className={`${fieldClass} font-normal normal-case`}><option value="" disabled>Select an option</option>{sources.map(x => <option key={x}>{x}</option>)}</select></label>
    </div>
    <Button type="submit" variant="labs" size="lg" className="w-full">Complete Registration →</Button>
    {submitted && <p className="text-sm font-semibold text-primary">Thanks! Your application has been received — our team will be in touch shortly.</p>}
  </form>;
}

function Index() {
  return <div className="overflow-hidden bg-background text-foreground"><Header /><main>
    <section id="overview" className="grid-paper border-b border-border"><div className="section-shell grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
      <div className="animate-rise">
        <div className="mb-7 inline-flex items-center gap-2 border border-foreground bg-background px-3 py-2 text-xs font-bold uppercase"><span className="size-2 bg-primary"/>Applications open</div>
        <h1 className="max-w-3xl text-balance text-5xl font-bold leading-[.94] md:text-7xl">BUILD REAL PRODUCTS.<br/><span className="text-primary">GAIN REAL EXPERIENCE.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">LABS by Bincom is a 3–6 months pre-incubator program that brings together cross-functional teams to build digital technology products used by real-life users.</p>
        <div className="mt-8">
          <Button asChild variant="labs" size="lg"><a href="#register">Apply to LABS<ArrowRight /></a></Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">{["3–6 Month Program", "Public Domain / Open Source", "Y Combinator Curriculum Integrated"].map(x => <span key={x} className="border border-border bg-background px-3 py-2 text-xs font-semibold">{x}</span>)}</div>
      </div>
      <div id="register" className="scroll-mt-24 animate-rise [animation-delay:150ms]"><RegistrationForm /></div>
    </div></section>

    <section id="benefits" className="py-20 md:py-24"><div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div>
        <p className="text-xs font-bold uppercase text-primary">Program benefits</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">WHAT'S IN IT FOR YOU?</h2>
        <ul className="mt-8 space-y-4">{benefits.map(x => <li key={x} className="flex items-start gap-3 border-b border-border pb-4 text-base font-semibold"><span className="mt-0.5 flex size-6 shrink-0 items-center justify-center bg-primary"><Check className="size-4"/></span>{x}</li>)}</ul>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <img src={heroImage} alt="Technology team collaborating around a product prototype" width={1600} height={1200} className="col-span-3 aspect-[4/3] w-full object-cover md:col-span-2 md:row-span-2 md:h-full"/>
        <div className="hidden min-h-44 bg-foreground p-5 text-background md:flex md:flex-col md:justify-between"><Code2 className="size-8 text-primary"/><p className="font-display text-xl font-bold">BUILD<br/>TOGETHER</p></div>
        <div className="hidden min-h-44 bg-primary p-5 md:flex md:flex-col md:justify-between"><Users className="size-8"/><p className="font-display text-xl font-bold">REAL<br/>USERS</p></div>
      </div>
    </div></section>

    <section id="watch" className="border-y border-border bg-surface py-20 md:py-24"><div className="section-shell">
      <p className="text-xs font-bold uppercase text-primary">Introduction</p>
      <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">DISCOVER LABS BY BINCOM.</h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Watch the video to understand what Labs by Bincom is all about, how it works, and the opportunities it creates for aspiring and growing tech professionals.</p>
      <div className="mt-9 overflow-hidden border border-foreground shadow-labs">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/YjvBZA4p7dE"
          title="LABS by Bincom — Watch the program overview"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div></section>

    <section id="skills" className="bg-foreground py-20 text-background md:py-24"><div className="section-shell">
      <p className="text-xs font-bold uppercase text-primary">03 / Skills involved & tracks</p>
      <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">FIND YOUR PLACE IN THE TEAM.</h2>
      <div className="mt-9 flex flex-wrap gap-3">{skills.map(x => <span key={x} className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">{x}</span>)}</div>
    </div></section>

    <section className="bg-primary"><div className="section-shell grid items-end gap-10 py-16 md:grid-cols-[1fr_auto] md:py-20">
      <div><p className="text-xs font-bold uppercase">Your next chapter starts here</p><h2 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight md:text-6xl">READY TO TURN YOUR IDEA INTO A REAL-WORLD PRODUCT?</h2></div>
      <Button asChild variant="labsDark" size="lg"><a href="#register">Register for LABS by Bincom now<ArrowRight /></a></Button>
    </div></section>
  </main>
  <footer className="bg-foreground text-background"><div className="section-shell flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex items-center gap-4"><img src={bincomLogo.url} alt="Bincom Dev Center" width={768} height={768} className="h-10 w-14 object-contain"/><p className="font-display text-xl font-bold">LABS <span className="font-normal text-background/60">by Bincom</span></p></div>
    <p className="text-xs text-background/50">© 2026 Bincom Dev Center. All rights reserved.</p>
  </div></footer></div>;
}
