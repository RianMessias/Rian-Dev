import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  Globe,
  Layers3,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

const stacks = [
  { name: "C# .NET", icon: Code2 },
  { name: "Angular", icon: Layers3 },
  { name: "React", icon: Globe },
  { name: "HTML, CSS, JavaScript", icon: Code2 },
  { name: "Banco de Dados SQL", icon: Database },
];

const siteShowcase = [
  {
    src: "/imagns/site1.png",
    title: "Site Funilaria e Pintura - Home",
  },
  {
    src: "/imagns/site2.png",
    title: "Site Funilaria e Pintura - Serviços",
  },
  {
    src: "/imagns/site3.png",
    title: "Site Funilaria e Pintura - Contato",
  },
];

const gamerShowcase = [
  {
    src: "/imagns/gamer1.png",
    title: "Dashboard Biblioteca Gamer - Visão geral",
  },
  {
    src: "/imagns/gamer2.png",
    title: "Dashboard Biblioteca Gamer - Catálogo",
  },
  {
    src: "/imagns/gamer3.png",
    title: "Dashboard Biblioteca Gamer - Métricas",
  },
];

function App() {
  const [sent, setSent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGamerSlide, setCurrentGamerSlide] = useState(0);

  useEffect(() => {
    const timerFunilaria = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % siteShowcase.length);
    }, 4500);

    const timerGamer = window.setInterval(() => {
      setCurrentGamerSlide((prev) => (prev + 1) % gamerShowcase.length);
    }, 5000);

    return () => {
      window.clearInterval(timerFunilaria);
      window.clearInterval(timerGamer);
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? siteShowcase.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % siteShowcase.length);
  };

  const handleGamerPrevious = () => {
    setCurrentGamerSlide((prev) =>
      prev === 0 ? gamerShowcase.length - 1 : prev - 1,
    );
  };

  const handleGamerNext = () => {
    setCurrentGamerSlide((prev) => (prev + 1) % gamerShowcase.length);
  };

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
              href="#parte-5"
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
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-white shadow-[0_10px_28px_rgba(15,23,42,0.28)] backdrop-blur-sm"
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
          <article className="rounded-2xl bg-white/10 p-5 text-slate-200 shadow-[0_10px_28px_rgba(15,23,42,0.28)] backdrop-blur-sm">
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
            <article className="rounded-2xl bg-white/10 p-4 text-slate-100 shadow-[0_10px_28px_rgba(15,23,42,0.28)] backdrop-blur-sm">
              <p className="text-sm text-sky-300">01</p>
              <h3 className="mt-1 font-medium text-white">Diagnóstico</h3>
              <p className="mt-2 text-sm text-slate-200">
                Levantamento de objetivos, escopo e restrições técnicas.
              </p>
            </article>
            <article className="rounded-2xl bg-white/10 p-4 text-slate-100 shadow-[0_10px_28px_rgba(15,23,42,0.28)] backdrop-blur-sm">
              <p className="text-sm text-sky-300">02</p>
              <h3 className="mt-1 font-medium text-white">Implementação</h3>
              <p className="mt-2 text-sm text-slate-200">
                Desenvolvimento limpo, organizado e orientado a resultados.
              </p>
            </article>
            <article className="rounded-2xl bg-white/10 p-4 text-slate-100 shadow-[0_10px_28px_rgba(15,23,42,0.28)] backdrop-blur-sm">
              <p className="text-sm text-sky-300">03</p>
              <h3 className="mt-1 font-medium text-white">Evolução</h3>
              <p className="mt-2 text-sm text-slate-200">
                Ajustes, melhorias e monitoramento contínuo de performance.
              </p>
            </article>
          </div>
        </section>

        <section id="parte-5" className="space-y-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Amostra real: funilaria e pintura
          </h2>
          <p className="text-sm text-slate-200">
            Carrossel com o projeto que você desenvolveu para o cliente de
            funilaria e pintura.
          </p>

          <div className="relative overflow-hidden rounded-3xl bg-white/10 shadow-[0_20px_50px_rgba(15,23,42,0.45)] backdrop-blur-sm">
            <div className="relative h-[260px] w-full sm:h-[360px] md:h-[480px]">
              {siteShowcase.map((item, index) => (
                <figure
                  key={item.src}
                  className={`absolute inset-0 transition-all duration-700 ${
                    currentSlide === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 sm:p-6">
                    <p className="text-sm font-medium text-white sm:text-base">
                      {item.title}
                    </p>
                  </div>
                </figure>
              ))}
            </div>

            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white backdrop-blur transition hover:bg-slate-800/90"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white backdrop-blur transition hover:bg-slate-800/90"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {siteShowcase.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-7 bg-emerald-300"
                      : "w-2.5 bg-white/60 hover:bg-white/90"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Amostra real: dashboard de biblioteca gamer
          </h2>
          <p className="text-sm text-slate-200">
            Interface de dashboard para gestão e visualização da biblioteca de
            jogos.
          </p>

          <div className="relative overflow-hidden rounded-3xl bg-white/10 shadow-[0_20px_50px_rgba(15,23,42,0.45)] backdrop-blur-sm">
            <div className="relative h-[260px] w-full sm:h-[360px] md:h-[480px]">
              {gamerShowcase.map((item, index) => (
                <figure
                  key={item.src}
                  className={`absolute inset-0 transition-all duration-700 ${
                    currentGamerSlide === index
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 sm:p-6">
                    <p className="text-sm font-medium text-white sm:text-base">
                      {item.title}
                    </p>
                  </div>
                </figure>
              ))}
            </div>

            <button
              type="button"
              onClick={handleGamerPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white backdrop-blur transition hover:bg-slate-800/90"
              aria-label="Slide anterior do dashboard gamer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleGamerNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white backdrop-blur transition hover:bg-slate-800/90"
              aria-label="Próximo slide do dashboard gamer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {gamerShowcase.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setCurrentGamerSlide(index)}
                  aria-label={`Ir para slide gamer ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    currentGamerSlide === index
                      ? "w-7 bg-emerald-300"
                      : "w-2.5 bg-white/60 hover:bg-white/90"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            LinkBio autoral
          </h2>
          <p className="text-sm text-slate-200">
            Página única para centralizar seus links, contatos e redes.
          </p>
          <article className="mx-auto grid max-w-5xl gap-6 rounded-3xl bg-white/10 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.45)] backdrop-blur-sm md:grid-cols-[1.1fr_0.9fr] md:p-7">
            <div className="space-y-4">
              <p className="inline-flex rounded-full bg-sky-400/15 px-3 py-1 text-xs font-medium text-sky-200">
                Projeto pessoal
              </p>
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                LinkBio com identidade própria e foco em conversão.
              </h3>
              <p className="text-sm leading-relaxed text-slate-200">
                Estrutura pensada para apresentar sua marca, facilitar o acesso
                aos canais e aumentar cliques em poucos segundos.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-100">
                <span className="rounded-full bg-white/15 px-3 py-1">
                  Design responsivo
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1">
                  Navegação direta
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1">
                  Marca pessoal
                </span>
              </div>
              <a
                href="https://rianlinks.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleARiCO5leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaf3-WaKhWPxTm3RE6bHrm_BRDb5aZyiY5cD5dK7--TbCVrDN77JliWloVh6lg_aem_GHUgtlJD0XmU6RTQvy-qCg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
              >
                Acessar LinkBio
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-400/30 via-cyan-300/10 to-transparent blur-xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950/75 p-2 shadow-[0_20px_50px_rgba(15,23,42,0.6)]">
                <img
                  src="/imagns/linkbio.png"
                  alt="Preview do LinkBio autoral"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover object-top"
                />
              </div>
            </div>
          </article>
        </section>

        <section id="contato" className="space-y-4 pb-6">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Formulário de contato
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid gap-3 rounded-2xl bg-white/10 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.32)] backdrop-blur-sm md:grid-cols-2"
          >
            <label className="space-y-1 md:col-span-1">
              <span className="text-sm text-slate-200">Nome</span>
              <input
                type="text"
                required
                placeholder="Seu nome"
                className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </label>
            <label className="space-y-1 md:col-span-1">
              <span className="text-sm text-slate-200">E-mail</span>
              <input
                type="email"
                required
                placeholder="seuemail@dominio.com"
                className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </label>
            <label className="space-y-1 md:col-span-2">
              <span className="text-sm text-slate-200">Mensagem</span>
              <textarea
                required
                rows={5}
                placeholder="Descreva seu projeto."
                className="w-full rounded-lg bg-slate-950/70 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
            </label>
            <div className="flex flex-wrap items-center gap-3 md:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
              >
                <Send className="h-4 w-4" />
                Enviar mensagem
              </button>
              {sent ? (
                <p className="text-sm text-emerald-300">
                  Mensagem enviada no frontend. Podemos integrar com backend em
                  seguida.
                </p>
              ) : null}
            </div>
          </form>

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
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.25)] hover:bg-white/15"
            >
              <Briefcase className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:contato@rianmessias.dev"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 shadow-[0_8px_24px_rgba(15,23,42,0.25)] hover:bg-white/15"
            >
              <Mail className="h-4 w-4" />
              contato@rianmessias.dev
            </a>
            <a
              href="https://wa.me/55119670564125"
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
        href="https://wa.me/55119670564125"
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
