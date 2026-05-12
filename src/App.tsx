import {
  Briefcase,
  Code2,
  Database,
  Globe,
  Layers3,
  Mail,
  MessageCircle,
} from "lucide-react";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { ProjectCarousel } from "@/components/ui/project-carousel";
import { ProjectCard } from "@/components/ui/project-card";
import { carouselProjects, cardProjects } from "@/data/projects";
import { BudgetForm } from "@/components/budget-form";

const stacks = [
  { name: "C# .NET", icon: Code2 },
  { name: "Angular", icon: Layers3 },
  { name: "React", icon: Globe },
  { name: "HTML, CSS, JavaScript", icon: Code2 },
  { name: "Banco de Dados SQL", icon: Database },
];

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-20">
        <SmokeBackground smokeColor="#66a4ff" />
      </div>
      <div className="fixed inset-0 -z-10 bg-slate-950/55" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:px-10 md:py-16">
        <section className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-300/90">
            Rian Dev
          </p>
          <h1 className="text-4xl font-semibold text-white md:text-6xl">
            Rian Messias, desenvolvedor focado em soluções web modernas.
          </h1>
          <p className="text-base text-slate-200 md:text-lg">
            Construo aplicações robustas com C# .NET, Angular, React e banco de
            dados SQL, unindo performance, clareza técnica e experiência de
            usuário.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contato"
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
            >
              Entrar em contato
            </a>
            <a
              href="#trabalhos"
              className="rounded-md border border-slate-300 bg-transparent px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Ver trabalhos
            </a>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Stacks conhecidas
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {stacks.map(({ name, icon: Icon }) => (
              <article
                key={name}
                className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 text-white shadow-card"
              >
                <Icon className="h-5 w-5 text-sky-300" />
                <p className="text-sm md:text-base">{name}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Sobre mim
          </h2>
          <article className="rounded-2xl bg-white/12 p-5 text-slate-200 shadow-card">
            <p className="leading-relaxed">
              Sou Rian Messias, desenvolvedor com foco em criar produtos web
              confiáveis, intuitivos e escaláveis. Atuo do backend ao frontend,
              entregando aplicações com integração sólida entre API, interface e
              banco de dados.
            </p>
          </article>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Processo de trabalho
          </h2>
          <div className="grid gap-3 md:grid-cols-3">
            <article className="rounded-2xl bg-white/12 p-4 text-slate-100 shadow-card">
              <p className="text-sm text-sky-300">01</p>
              <h3 className="mt-1 font-medium text-white">Diagnóstico</h3>
              <p className="mt-2 text-sm text-slate-200">
                Levantamento de objetivos, escopo e restrições técnicas.
              </p>
            </article>
            <article className="rounded-2xl bg-white/12 p-4 text-slate-100 shadow-card">
              <p className="text-sm text-sky-300">02</p>
              <h3 className="mt-1 font-medium text-white">Implementação</h3>
              <p className="mt-2 text-sm text-slate-200">
                Desenvolvimento limpo, organizado e orientado a resultados.
              </p>
            </article>
            <article className="rounded-2xl bg-white/12 p-4 text-slate-100 shadow-card">
              <p className="text-sm text-sky-300">03</p>
              <h3 className="mt-1 font-medium text-white">Evolução</h3>
              <p className="mt-2 text-sm text-slate-200">
                Ajustes, melhorias e monitoramento contínuo de performance.
              </p>
            </article>
          </div>
        </section>

        <section id="trabalhos" className="space-y-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Projetos
          </h2>
          <p className="text-sm text-slate-200">
            Conheça alguns dos projetos que desenvolvi.
          </p>

          <div className="space-y-12">
            {carouselProjects.map((project) => (
              <section key={project.id} className="space-y-4">
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  {project.heading}
                </h3>
                <p className="text-sm text-slate-200">
                  {project.description}
                </p>
                <ProjectCarousel
                  images={project.images}
                  autoPlayInterval={project.autoPlayInterval}
                />
              </section>
            ))}

            {cardProjects.map((project) => (
              <section key={project.id} className="space-y-4">
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  {project.heading}
                </h3>
                <p className="text-sm text-slate-200">
                  {project.description}
                </p>
                <ProjectCard project={project} />
              </section>
            ))}
          </div>
        </section>

        <section id="contato" className="space-y-4 pb-6">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Formulário de contato
          </h2>
          <BudgetForm />

          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
            <a
              href="https://github.com/RianMessias"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.25)] hover:bg-white/15"
            >
              <Code2 className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rian-messias-9b007b340/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.25)] hover:bg-white/15"
            >
              <Briefcase className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:rianmessiasofc@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.25)] hover:bg-white/15"
            >
              <Mail className="h-4 w-4" />
              rianmessiasofc@gmail.com
            </a>
            <a
              href="https://wa.me/5511967064125"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500/20 px-3 py-2 text-emerald-100 shadow-[0_8px_24px_rgba(16,185,129,0.35)] hover:bg-emerald-500/30"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </section>

        <footer className="pt-6">
          <p className="text-sm text-slate-300">
            Copyright © {new Date().getFullYear()} Rian Messias. Todos os
            direitos reservados.
          </p>
        </footer>
      </main>

      <a
        href="https://wa.me/5511967064125"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-end gap-3 md:bottom-7 md:right-7"
      >
        <div className="hidden max-w-[220px] rounded-lg bg-slate-900/90 px-3 py-2 text-xs text-emerald-100 shadow-lg backdrop-blur-sm sm:block">
          Vamos tirar seu projeto do papel? Posso construir um site sob medida
          para seu objetivo.
        </div>
        <div className="relative">
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 animate-ping rounded-full bg-emerald-300" />
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-300" />
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-200/60 bg-emerald-500 text-white shadow-[0_12px_28px_rgba(16,185,129,0.45)] transition hover:scale-105 hover:bg-emerald-400">
            <MessageCircle className="h-7 w-7" />
          </span>
        </div>
      </a>
    </div>
  );
}

export default App;
