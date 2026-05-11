import { useState } from "react"
import type { FormEvent } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  Globe,
  Layout,
  Mail,
  MessageCircle,
  Monitor,
  Palette,
  Phone,
  Send,
  User,
  Zap,
} from "lucide-react"

const projectTypes = [
  {
    value: "landing-page",
    label: "Landing Page",
    desc: "Página única focada em conversão",
    icon: Layout,
  },
  {
    value: "institutional",
    label: "Site Institucional",
    desc: "Site completo para empresa ou negócio",
    icon: Building2,
  },
  {
    value: "ecommerce",
    label: "E-commerce",
    desc: "Loja virtual com catálogo e checkout",
    icon: Globe,
  },
  {
    value: "webapp",
    label: "Aplicação Web",
    desc: "Sistema com dashboard e funcionalidades",
    icon: Monitor,
  },
  {
    value: "api",
    label: "API / Backend",
    desc: "API RESTful, banco de dados e integrações",
    icon: Database,
  },
  {
    value: "redesign",
    label: "Redesign",
    desc: "Modernizar site ou sistema existente",
    icon: Palette,
  },
] as const

const features = [
  { value: "responsivo", label: "Design Responsivo" },
  { value: "seo", label: "Otimização SEO" },
  { value: "blog", label: "Blog / CMS" },
  { value: "painel", label: "Painel Administrativo" },
  { value: "pagamentos", label: "Integração de Pagamentos" },
  { value: "maps", label: "Google Maps / Localização" },
  { value: "whatsapp", label: "Integração WhatsApp" },
  { value: "email-marketing", label: "Newsletter / E-mail Marketing" },
  { value: "multilingue", label: "Versão Multilíngue" },
  { value: "acessibilidade", label: "Acessibilidade (WCAG)" },
  { value: "analytics", label: "Google Analytics / Métricas" },
  { value: "hospedagem", label: "Hospedagem e Domínio" },
  { value: "manutencao", label: "Plano de Manutenção" },
  { value: "performance", label: "Otimização de Performance" },
] as const

const timelineOptions = [
  { value: "urgente", label: "Urgente (1-2 semanas)", icon: Zap },
  { value: "curto", label: "Curto Prazo (2-4 semanas)", icon: ChevronUp },
  { value: "medio", label: "Médio Prazo (1-2 meses)", icon: ChevronDown },
  { value: "longo", label: "Sem Pressa (2+ meses)", icon: ChevronDown },
] as const

const pageOptions = [
  { value: "1", label: "1 página" },
  { value: "2-5", label: "2 a 5 páginas" },
  { value: "6-10", label: "6 a 10 páginas" },
  { value: "10+", label: "Mais de 10 páginas" },
] as const

type FormData = {
  nome: string
  email: string
  telefone: string
  empresa: string
  projeto: string
  paginas: string
  descricao: string
  funcionalidades: string[]
  prazo: string
  orcamento: number
  referencia: string
}

const initialForm: FormData = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  projeto: "",
  paginas: "",
  descricao: "",
  funcionalidades: [],
  prazo: "",
  orcamento: 50,
  referencia: "",
}

const steps = [
  { label: "Dados", icon: User },
  { label: "Projeto", icon: Code2 },
  { label: "Detalhes", icon: Layout },
  { label: "Prazo", icon: Zap },
  { label: "Enviar", icon: Send },
]

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2">
      {steps.map(({ label, icon: Icon }, idx) => (
        <div key={label} className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex flex-col items-center gap-1">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-all duration-500 sm:h-10 sm:w-10 sm:text-sm ${
                idx < current
                  ? "bg-emerald-400/20 text-emerald-300"
                  : idx === current
                    ? "bg-white/15 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                    : "bg-white/5 text-slate-500"
              }`}
            >
              {idx < current ? (
                <Check className="h-4 w-4" />
              ) : (
                <Icon className="h-4 w-4" />
              )}
            </div>
            <span
              className={`hidden text-[10px] font-medium uppercase tracking-wider sm:block ${
                idx === current ? "text-white" : "text-slate-500"
              }`}
            >
              {label}
            </span>
          </div>
          {idx < steps.length - 1 && (
            <div
              className={`mt-0 h-px w-6 transition-colors duration-500 sm:mt-5 sm:w-12 ${
                idx < current ? "bg-emerald-400/40" : "bg-white/10"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}

function InputField({
  label,
  icon: Icon,
  ...props
}: {
  label: string
  icon?: React.ComponentType<{ className?: string }>
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="space-y-1.5">
      <span className="flex items-center gap-1.5 text-sm text-slate-300">
        {Icon && <Icon className="h-3.5 w-3.5 text-sky-300" />}
        {label}
      </span>
      <input
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-sky-400/30 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-sky-400/10"
        {...props}
      />
    </label>
  )
}

function TextareaField({
  label,
  ...props
}: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="space-y-1.5">
      <span className="flex items-center gap-1.5 text-sm text-slate-300">
        <MessageCircle className="h-3.5 w-3.5 text-sky-300" />
        {label}
      </span>
      <textarea
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-sky-400/30 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-sky-400/10"
        {...props}
      />
    </label>
  )
}

export function BudgetForm() {
  const [step, setStep] = useState(0)
  const [sent, setSent] = useState(false)
  const [expandedFeatures, setExpandedFeatures] = useState(false)
  const [form, setForm] = useState<FormData>(initialForm)

  const update = <K extends keyof FormData>(
    key: K,
    value: (typeof form)[K],
  ) => setForm((prev) => ({ ...prev, [key]: value }))

  const toggleFeature = (value: string) => {
    setForm((prev) => ({
      ...prev,
      funcionalidades: prev.funcionalidades.includes(value)
        ? prev.funcionalidades.filter((f) => f !== value)
        : [...prev.funcionalidades, value],
    }))
  }

  const canAdvance = () => {
    switch (step) {
      case 0:
        return form.nome.trim() && form.email.trim() && form.telefone.trim()
      case 1:
        return !!form.projeto
      case 2:
        return form.descricao.trim().length > 10
      case 3:
        return !!form.prazo
      default:
        return true
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setStep(0)
    setForm(initialForm)
    setTimeout(() => setSent(false), 6000)
  }

  const budgetLabel =
    form.orcamento <= 25
      ? "Até R$ 1.000"
      : form.orcamento <= 50
        ? "R$ 1.000 - R$ 5.000"
        : form.orcamento <= 75
          ? "R$ 5.000 - R$ 15.000"
          : "Acima de R$ 15.000"

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Solicite um Orçamento
        </h2>
        <p className="text-sm text-slate-400">
          Preencha as informações abaixo para receber uma proposta personalizada.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="overflow-hidden rounded-2xl bg-white/[0.06] shadow-[0_14px_40px_rgba(15,23,42,0.32)] backdrop-blur-sm"
      >
        <div className="border-b border-white/[0.06] px-5 py-5 md:px-7">
          <StepIndicator current={step} />
        </div>

        <div className="px-5 py-6 md:px-7 md:py-8">
          <div className="relative min-h-[320px]">
            {step === 0 && (
              <div className="animate-in space-y-4 fade-in slide-in-from-right-4 duration-500">
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-sky-300/70">
                  Etapa 1 de 4
                </p>
                <h3 className="text-lg font-medium text-white">
                  Dados do Cliente
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <InputField
                    label="Nome"
                    icon={User}
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={(e) => update("nome", e.target.value)}
                  />
                  <InputField
                    label="E-mail"
                    icon={Mail}
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  <InputField
                    label="Telefone / WhatsApp"
                    icon={Phone}
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={form.telefone}
                    onChange={(e) => update("telefone", e.target.value)}
                  />
                  <InputField
                    label="Empresa (opcional)"
                    icon={Building2}
                    type="text"
                    placeholder="Nome da empresa"
                    value={form.empresa}
                    onChange={(e) => update("empresa", e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="animate-in space-y-4 fade-in slide-in-from-right-4 duration-500">
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-sky-300/70">
                  Etapa 2 de 4
                </p>
                <h3 className="text-lg font-medium text-white">
                  Tipo de Projeto
                </h3>
                <p className="text-sm text-slate-400">
                  Selecione a categoria que melhor descreve seu projeto.
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {projectTypes.map(({ value, label, desc, icon: Icon }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => update("projeto", value)}
                      className={`group relative rounded-xl border p-4 text-left transition-all duration-300 ${
                        form.projeto === value
                          ? "border-sky-400/40 bg-sky-400/[0.07] shadow-[0_0_30px_rgba(56,189,248,0.06)]"
                          : "border-white/[0.06] bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg transition-all ${
                          form.projeto === value
                            ? "bg-sky-400/20 text-sky-300"
                            : "bg-white/[0.06] text-slate-400 group-hover:bg-white/10"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="mt-0.5 text-xs text-slate-500">{desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in space-y-4 fade-in slide-in-from-right-4 duration-500">
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-sky-300/70">
                  Etapa 3 de 4
                </p>
                <h3 className="text-lg font-medium text-white">
                  Detalhes do Projeto
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-sm text-slate-300">
                      <Layout className="h-3.5 w-3.5 text-sky-300" />
                      Quantidade de páginas
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {pageOptions.map(({ value, label }) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => update("paginas", value)}
                          className={`rounded-xl border px-3 py-2 text-sm transition-all ${
                            form.paginas === value
                              ? "border-sky-400/30 bg-sky-400/[0.07] text-sky-200"
                              : "border-white/[0.06] bg-white/[0.03] text-slate-400 hover:border-white/20"
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-sm text-slate-300">
                      <Code2 className="h-3.5 w-3.5 text-sky-300" />
                      Funcionalidades
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap gap-2">
                        {features
                          .slice(0, expandedFeatures ? features.length : 4)
                          .map(({ value, label }) => (
                            <button
                              key={value}
                              type="button"
                              onClick={() => toggleFeature(value)}
                              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs transition-all ${
                                form.funcionalidades.includes(value)
                                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                                  : "border-white/[0.06] bg-white/[0.03] text-slate-400 hover:border-white/20"
                              }`}
                            >
                              {form.funcionalidades.includes(value) && (
                                <Check className="h-3 w-3" />
                              )}
                              {label}
                            </button>
                          ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setExpandedFeatures(!expandedFeatures)}
                        className="text-xs text-sky-400/70 transition hover:text-sky-300"
                      >
                        {expandedFeatures
                          ? "Mostrar menos"
                          : `+${features.length - 4} funcionalidades`}
                      </button>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <TextareaField
                      label="Descreva seu projeto"
                      required
                      rows={4}
                      placeholder="Conte sobre seu projeto: objetivo, público-alvo, funcionalidades essenciais, referências de design..."
                      value={form.descricao}
                      onChange={(e) => update("descricao", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in space-y-4 fade-in slide-in-from-right-4 duration-500">
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-sky-300/70">
                  Etapa 4 de 4
                </p>
                <h3 className="text-lg font-medium text-white">
                  Prazo e Orçamento
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-sm text-slate-300">
                      <Zap className="h-3.5 w-3.5 text-sky-300" />
                      Prazo desejado
                    </span>
                    <div className="grid gap-2">
                      {timelineOptions.map(
                        ({ value, label, icon: Icon }) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => update("prazo", value)}
                            className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 text-sm transition-all ${
                              form.prazo === value
                                ? "border-sky-400/30 bg-sky-400/[0.07] text-sky-200"
                                : "border-white/[0.06] bg-white/[0.03] text-slate-400 hover:border-white/20"
                            }`}
                          >
                            <Icon
                              className={`h-4 w-4 ${
                                form.prazo === value
                                  ? "text-sky-300"
                                  : "text-slate-500"
                              }`}
                            />
                            {label}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="flex items-center gap-1.5 text-sm text-slate-300">
                      <Database className="h-3.5 w-3.5 text-sky-300" />
                      Estimativa de investimento
                    </span>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-5">
                      <p className="text-center text-sm text-slate-400">
                        Faixa estimada:
                      </p>
                      <p className="mt-1 text-center text-xl font-semibold text-white">
                        {budgetLabel}
                      </p>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                        value={form.orcamento}
                        onChange={(e) =>
                          update("orcamento", Number(e.target.value))
                        }
                        className="mt-4 h-1.5 w-full appearance-none rounded-full bg-white/[0.08] accent-sky-400 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-sky-400 [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(56,189,248,0.4)]"
                      />
                      <div className="mt-2 flex justify-between text-[10px] text-slate-500">
                        <span>Até R$ 1.000</span>
                        <span>Acima de R$ 15.000</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <span className="flex items-center gap-1.5 text-sm text-slate-300">
                        <Globe className="h-3.5 w-3.5 text-sky-300" />
                        Referências (opcional)
                      </span>
                      <input
                        type="url"
                        placeholder="URL de site de referência..."
                        value={form.referencia}
                        onChange={(e) =>
                          update("referencia", e.target.value)
                        }
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 transition focus:border-sky-400/30 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-sky-400/10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {!sent && (
          <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-4 md:px-7">
            <button
              type="button"
              onClick={() => setStep((prev) => Math.max(0, prev - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:text-white disabled:opacity-0 disabled:invisible"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => prev + 1)}
                disabled={!canAdvance()}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Avançar
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canAdvance()}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2 text-sm font-medium text-white shadow-[0_0_24px_rgba(16,185,129,0.25)] transition hover:bg-emerald-400 hover:shadow-[0_0_32px_rgba(16,185,129,0.35)] disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                Enviar Solicitação
              </button>
            )}
          </div>
        )}
      </form>

      {sent && (
        <div className="animate-in space-y-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] px-5 py-4 fade-in slide-in-from-top-2 duration-500">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20">
              <Check className="h-5 w-5 text-emerald-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-emerald-200">
                Solicitação enviada com sucesso!
              </p>
              <p className="text-xs text-slate-400">
                Recebi seus dados e retornarei em até 24h com uma proposta
                personalizada.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="https://wa.me/5511967064125"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/20 px-3 py-1.5 text-xs font-medium text-emerald-200 transition hover:bg-emerald-500/30"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Falar no WhatsApp
            </a>
            <a
              href="mailto:contato@rianmessias.dev"
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/15"
            >
              <Mail className="h-3.5 w-3.5" />
              contato@rianmessias.dev
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
