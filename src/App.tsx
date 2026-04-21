/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  PawPrint, 
  Cat,
  Bird,
  Rabbit,
  Fish,
  Rat,
  Search, 
  ClipboardList, 
  MessageCircle,
  Menu,
  X,
  Smartphone,
  Building2,
  TrendingUp,
  Clock,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  Lock,
  FileText,
  ShieldAlert,
  LogIn,
  UserPlus,
  LayoutDashboard,
  LogOut,
  Plus,
  Eye,
  Settings,
  Bell,
  BarChart3,
  Home,
  DollarSign,
  CreditCard,
  Filter,
  MoreVertical,
  Trash2,
  Edit,
  UserCheck,
  UserX,
  AlertTriangle,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Upload,
  Briefcase,
  Calendar,
  Instagram,
  Zap,
  Baby,
  Smile,
  Info,
  History,
  Star,
  Map,
  LayoutGrid,
  List,
  HeartPulse,
  Award,
  BookOpen,
  FileSearch,
  MessageSquare,
  QrCode
} from 'lucide-react';

// --- Icons ---
const AppleIcon = () => (
  <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
);

// --- Components ---

const Navbar = ({ onNavigate, currentPage, user, onLogout }: { 
  onNavigate: (page: string) => void, 
  currentPage: string,
  user: any,
  onLogout: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => handleNav('home')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-brand-primary p-2 rounded-xl">
              <PawPrint className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-display font-bold text-brand-secondary">PetMatch</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {currentPage === 'home' ? (
              <>
                <a href="#problema" className="text-sm font-medium hover:text-brand-primary transition-colors">O Problema</a>
                <a href="#solucao" className="text-sm font-medium hover:text-brand-primary transition-colors">Solução</a>
                <a href="#como-funciona" className="text-sm font-medium hover:text-brand-primary transition-colors">Como Funciona</a>
                <a href="#precos" className="text-sm font-medium hover:text-brand-primary transition-colors">Preços</a>
              </>
            ) : (
              <button onClick={() => handleNav('home')} className="text-sm font-medium hover:text-brand-primary transition-colors">Início</button>
            )}
            <button onClick={() => handleNav('about')} className="text-sm font-medium hover:text-brand-primary transition-colors">Sobre Nós</button>
            <button onClick={() => handleNav('contact')} className="text-sm font-medium hover:text-brand-primary transition-colors">Contato</button>
            
            {user ? (
              <div className="flex items-center gap-4 border-l border-brand-secondary/10 pl-8">
                <button 
                  onClick={() => handleNav('dashboard')}
                  className="flex items-center gap-2 text-sm font-bold text-brand-secondary hover:text-brand-primary transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4" /> Painel
                </button>
                <button 
                  onClick={onLogout}
                  className="p-2 text-brand-secondary/40 hover:text-red-500 transition-colors"
                  title="Sair"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3 border-l border-brand-secondary/10 pl-8">
                <button 
                  onClick={() => handleNav('login')}
                  className="text-sm font-bold text-brand-secondary hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  <LogIn className="w-4 h-4" /> Entrar
                </button>
                <button 
                  onClick={() => handleNav('register')}
                  className="bg-brand-secondary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-secondary/90 transition-all flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4" /> Criar Conta
                </button>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-b border-brand-secondary/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <button onClick={() => handleNav('home')} className="text-left text-lg font-medium">Início</button>
              <button onClick={() => handleNav('about')} className="text-left text-lg font-medium">Sobre Nós</button>
              <button onClick={() => handleNav('contact')} className="text-left text-lg font-medium">Contato</button>
              <button onClick={() => handleNav('faq')} className="text-left text-lg font-medium">FAQ</button>
              
              {user ? (
                <>
                  <button onClick={() => handleNav('dashboard')} className="text-left text-lg font-bold text-brand-primary">Meu Painel</button>
                  <button onClick={onLogout} className="text-left text-lg font-medium text-red-500">Sair da Conta</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleNav('login')} className="text-left text-lg font-medium">Entrar</button>
                  <button onClick={() => handleNav('register')} className="bg-brand-secondary text-white px-6 py-3 rounded-xl text-lg font-semibold">
                    Criar Conta Grátis
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-bold mb-8 border border-brand-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>Plataforma de Gestão para ONGs</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.95] mb-8 tracking-tight text-balance">
              O match perfeito para o seu <span className="text-brand-primary font-serif italic font-normal">trabalho</span>.
            </h1>
            <p className="text-xl text-brand-secondary/70 mb-10 max-w-lg leading-relaxed">
              Gerencie sua ONG de forma inteligente, segura e conectada. O PetMatch Web é o seu portal de controle e visibilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => onNavigate('register')}
                className="bg-brand-primary text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-brand-primary/40 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/20 group"
              >
                Cadastrar minha ONG <Building2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </button>
              <button className="bg-white border-2 border-brand-secondary/10 px-8 py-5 rounded-2xl text-lg font-bold hover:bg-brand-secondary/5 transition-all flex items-center justify-center gap-2">
                Conhecer Recursos <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 p-6 bg-white/50 rounded-3xl border border-white/50 backdrop-blur-sm w-fit">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/petmatch-user-${i}/100/100`} 
                    alt="User" 
                    className="w-14 h-14 rounded-full border-4 border-brand-bg object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm font-medium">
                <span className="block text-brand-secondary font-bold text-lg">+1.200 Pets</span>
                <span className="text-brand-secondary/60">encontraram um lar este ano</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Background Decorative Circles */}
            <div className="absolute w-[120%] h-[120%] bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute w-[80%] h-[80%] border-2 border-dashed border-brand-primary/20 rounded-full animate-[spin_20s_linear_infinite] -z-10"></div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-brand-secondary/5 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-secondary">Match de 98%</p>
                  <p className="text-[10px] text-brand-secondary/60">Perfil Ideal Encontrado</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-10 left-0 z-20 bg-white p-4 rounded-2xl shadow-2xl border border-brand-secondary/5 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="bg-brand-accent/20 p-2 rounded-full">
                  <Heart className="text-brand-primary w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-secondary">Adoção Segura</p>
                  <p className="text-[10px] text-brand-secondary/60">Processo Verificado</p>
                </div>
              </div>
            </motion.div>

            {/* The "PNG" Style Pet Image */}
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10"
              >
                {/* Using a high-quality pet image that works well as a cutout/PNG style */}
                <img 
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800" 
                  alt="Cute Dog PNG Style" 
                  className="w-full max-w-[500px] h-auto drop-shadow-[0_35px_35px_rgba(255,140,66,0.3)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-10 z-20 bg-brand-primary text-white px-6 py-3 rounded-2xl font-bold shadow-xl rotate-6">
                Oi, eu sou o Bento! 🐾
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Interessados sem preparo",
      desc: "ONGs perdem horas filtrando pessoas que não entendem a responsabilidade de um pet."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Processo bagunçado",
      desc: "Falta de controle e histórico gera confusão e aumenta o risco de devoluções."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Escolha por impulso",
      desc: "Usuários adotam pela aparência, sem saber se o pet combina com seu estilo de vida."
    }
  ];

  return (
    <section id="problema" className="py-24 bg-brand-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display mb-6">A adoção hoje está quebrada.</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            O abandono muitas vezes começa em uma adoção mal planejada. Resolvemos os problemas reais de quem salva e de quem quer adotar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10"
            >
              <div className="bg-brand-primary w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-white/60 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const features = [
    {
      title: "Match Inteligente",
      desc: "Não mostramos qualquer pet. Mostramos o pet certo para a pessoa certa, analisando perfil e comportamento.",
      icon: <Sparkles className="w-8 h-8 text-brand-primary" />
    },
    {
      title: "Processo Guiado",
      desc: "Fluxo organizado de interesse, análise, aprovação e adoção. Sem burocracia desnecessária.",
      icon: <ClipboardList className="w-8 h-8 text-brand-primary" />
    },
    {
      title: "Segurança Total",
      desc: "Pessoas verificadas e histórico registrado. Reduzimos drasticamente o risco de abandono.",
      icon: <ShieldCheck className="w-8 h-8 text-brand-primary" />
    },
    {
      title: "Pós-Adoção Ativo",
      desc: "Acompanhamento contínuo com dicas, lembretes e suporte para garantir a adaptação.",
      icon: <Heart className="w-8 h-8 text-brand-primary" />
    }
  ];

  return (
    <section id="solucao" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-secondary/5">
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-sm text-brand-secondary/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-display mb-8">Mais que um app, um <span className="text-brand-primary">ecossistema</span> de cuidado.</h2>
            <p className="text-lg text-brand-secondary/70 mb-8">
              Criamos uma ponte inteligente entre a vontade de ajudar e a necessidade de um lar. Nossa tecnologia remove o atrito e foca no que importa: a conexão emocional.
            </p>
            <ul className="space-y-4">
              {[
                "Redução de 40% nas devoluções",
                "Filtro inteligente de candidatos",
                "Suporte especializado 24/7",
                "Comunidade de adotantes verificados"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-semibold">
                  <CheckCircle2 className="text-brand-primary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<'user' | 'ong'>('user');

  const userSteps = [
    { icon: <Smartphone />, title: "Onboarding", desc: "Responda perguntas sobre sua rotina, casa e tempo disponível." },
    { icon: <Search />, title: "Descoberta", desc: "Veja apenas pets compatíveis com seu perfil e estilo de vida." },
    { icon: <Heart />, title: "Interesse", desc: "Manifeste interesse e envie seu perfil completo para a ONG." },
    { icon: <MessageCircle />, title: "Acompanhamento", desc: "Siga cada etapa da análise até a aprovação final." }
  ];

  const ongSteps = [
    { icon: <Building2 />, title: "Cadastro", desc: "Crie o perfil da sua ONG e comece a gerenciar seus animais." },
    { icon: <PawPrint />, title: "Pets", desc: "Adicione informações detalhadas de comportamento e necessidades." },
    { icon: <Users />, title: "Interessados", desc: "Receba candidatos já filtrados e com nível de compatibilidade." },
    { icon: <TrendingUp />, title: "Gestão", desc: "Mova os processos de 'Novo' até 'Concluído' com um clique." }
  ];

  const steps = activeTab === 'user' ? userSteps : ongSteps;

  return (
    <section id="como-funciona" className="py-24 bg-brand-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-8">Como o PetMatch funciona</h2>
          
          <div className="inline-flex p-1 bg-white rounded-2xl shadow-sm border border-brand-secondary/5">
            <button 
              onClick={() => setActiveTab('user')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'user' ? 'bg-brand-secondary text-white' : 'text-brand-secondary/60 hover:text-brand-secondary'}`}
            >
              Para Adotantes
            </button>
            <button 
              onClick={() => setActiveTab('ong')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'ong' ? 'bg-brand-secondary text-white' : 'text-brand-secondary/60 hover:text-brand-secondary'}`}
            >
              Para ONGs
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {steps.map((step, i) => (
              <motion.div 
                key={`${activeTab}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-3xl border border-brand-secondary/5 h-full">
                  <div className="text-brand-primary mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-sm text-brand-secondary/60 leading-relaxed">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-brand-secondary/20 w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <section id="precos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Planos para ONGs</h2>
          <p className="text-lg text-brand-secondary/60 max-w-2xl mx-auto">
            Acesso total a todas as ferramentas. A única diferença é a quantidade de animais que você pode cadastrar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Plano Gratuito</h3>
            <p className="text-brand-secondary/60 mb-6 text-sm">Ideal para protetores independentes.</p>
            <div className="text-4xl font-display font-bold mb-8">R$ 0<span className="text-lg font-sans font-normal text-brand-secondary/40">/mês</span></div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-brand-primary w-5 h-5" /> <b>Até 10 animais ativos</b></li>
              <li className="flex items-center gap-3 text-sm font-medium text-brand-secondary/60"><CheckCircle2 className="text-brand-primary w-5 h-5" /> Perfil básico verificado</li>
              <li className="flex items-center gap-3 text-sm font-medium text-brand-secondary/60"><CheckCircle2 className="text-brand-primary w-5 h-5" /> Match inteligente básico</li>
            </ul>
            <button 
              onClick={() => onNavigate('register')}
              className="w-full py-4 rounded-2xl border-2 border-brand-secondary text-brand-secondary font-bold hover:bg-brand-secondary hover:text-white transition-all"
            >
              Começar Grátis
            </button>
          </div>

          <div className="bg-brand-secondary p-10 rounded-[40px] text-white relative overflow-hidden shadow-2xl flex flex-col scale-105 z-10 border-4 border-brand-primary/50">
            <div className="absolute top-0 right-0 bg-brand-primary px-6 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-widest">
              Mais Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Plano Essencial</h3>
            <p className="text-white/60 mb-6 text-sm">Para ONGs em crescimento constante.</p>
            <div className="text-4xl font-display font-bold mb-8">R$ 49<span className="text-lg font-sans font-normal text-white/40">/mês</span></div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-brand-primary w-5 h-5" /> <b>Até 50 animais ativos</b></li>
              <li className="flex items-center gap-3 text-sm font-medium text-white/80"><CheckCircle2 className="text-brand-primary w-5 h-5" /> Suporte via chat prioritário</li>
              <li className="flex items-center gap-3 text-sm font-medium text-white/80"><CheckCircle2 className="text-brand-primary w-5 h-5" /> Destaque nas buscas locais</li>
              <li className="flex items-center gap-3 text-sm font-medium text-white/80"><CheckCircle2 className="text-brand-primary w-5 h-5" /> Gestão de CRM avançada</li>
            </ul>
            <button 
              onClick={() => onNavigate('register')}
              className="w-full py-4 rounded-2xl bg-brand-primary text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20"
            >
              Assinar Essencial
            </button>
          </div>

          <div className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold mb-2">Plano Ilimitado</h3>
            <p className="text-brand-secondary/60 mb-6 text-sm">Escala total para grandes instituições.</p>
            <div className="text-4xl font-display font-bold mb-8">R$ 99<span className="text-lg font-sans font-normal text-brand-secondary/40">/mês</span></div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 className="text-brand-primary w-5 h-5" /> <b>Pets ilimitados</b></li>
              <li className="flex items-center gap-3 text-sm font-medium text-brand-secondary/60"><CheckCircle2 className="text-brand-primary w-5 h-5" /> Relatórios de IA avançados</li>
              <li className="flex items-center gap-3 text-sm font-medium text-brand-secondary/60"><CheckCircle2 className="text-brand-primary w-5 h-5" /> Gestão de doações integrada</li>
              <li className="flex items-center gap-3 text-sm font-medium text-brand-secondary/60"><CheckCircle2 className="text-brand-primary w-5 h-5" /> API para site próprio</li>
            </ul>
            <button 
              onClick={() => onNavigate('register')}
              className="w-full py-4 rounded-2xl border-2 border-brand-secondary text-brand-secondary font-bold hover:bg-brand-secondary hover:text-white transition-all"
            >
              Falar com Consultor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-brand-secondary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-primary p-2 rounded-xl">
                <PawPrint className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-bold">PetMatch</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Transformando a adoção de animais em uma experiência inteligente, segura e cheia de amor. Junte-se a nós nessa missão.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Institucional</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><button onClick={() => handleNav('about')} className="hover:text-brand-primary transition-colors">Sobre Nós</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-brand-primary transition-colors">Contato</button></li>
              <li><button onClick={() => handleNav('faq')} className="hover:text-brand-primary transition-colors">FAQ</button></li>
              <li><button onClick={() => handleNav('security')} className="hover:text-brand-primary transition-colors">Segurança</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><button onClick={() => handleNav('privacy')} className="hover:text-brand-primary transition-colors">Política de Privacidade</button></li>
              <li><button onClick={() => handleNav('terms')} className="hover:text-brand-primary transition-colors">Termos de Uso</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
          © 2026 PetMatch. Todos os direitos reservados. Feito com ❤️ para os animais.
        </div>
      </div>
    </footer>
  );
};

// --- New Page Components ---

const AboutPage = () => (
  <div className="pt-32 pb-20 max-w-5xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-display mb-8 tracking-tight">Nossa Missão: <span className="text-brand-primary">Conexões Reais</span></h1>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="prose prose-lg text-brand-secondary/70">
          <p className="mb-6 text-xl leading-relaxed font-medium text-brand-secondary">
            O PetMatch não é apenas uma plataforma de tecnologia. É um movimento nascido da paixão por animais e da crença de que cada vida merece um lar onde seja compreendida e amada.
          </p>
          <p className="mb-6">
            Identificamos que a principal causa do abandono pós-adoção no Brasil é o "desajuste de expectativas". Um cão hiperativo em um apartamento pequeno com um dono sedentário é uma receita para o estresse. Nós mudamos essa narrativa.
          </p>
          <p className="mb-6">
            Usamos algoritmos de compatibilidade comportamental para garantir que o "match" seja baseado em estilo de vida, energia e necessidades mútuas, e não apenas em uma foto bonita.
          </p>
        </div>
        <div className="space-y-6">
          <div className="bg-brand-primary/5 p-8 rounded-[40px] border border-brand-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-brand-primary flex items-center gap-2">
              <Sparkles className="w-6 h-6" /> Nosso Impacto
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-4xl font-display font-bold text-brand-secondary">98%</p>
                <p className="text-xs uppercase font-bold opacity-50">Taxa de Sucesso</p>
              </div>
              <div>
                <p className="text-4xl font-display font-bold text-brand-secondary">150+</p>
                <p className="text-xs uppercase font-bold opacity-50">ONGs Parceiras</p>
              </div>
            </div>
          </div>
          <div className="bg-brand-secondary text-white p-8 rounded-[40px]">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-brand-primary" /> Por que fazemos?
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Acreditamos que a tecnologia deve servir à empatia. Cada linha de código que escrevemos tem um objetivo final: ver um rabo abanando em um novo lar definitivo.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-20 max-w-6xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h1 className="text-6xl font-display mb-6">Vamos Conversar?</h1>
      <p className="text-xl text-brand-secondary/60 max-w-2xl mx-auto">
        Seja para tirar uma dúvida, sugerir uma melhoria ou iniciar uma parceria, estamos aqui para ouvir você.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1 space-y-8">
        <div className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Canais Diretos</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="bg-brand-primary/10 p-4 rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all"><Mail /></div>
              <div>
                <p className="text-[10px] font-bold uppercase opacity-40">E-mail Geral</p>
                <p className="font-bold">oi@petmatch.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="bg-brand-primary/10 p-4 rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all"><Building2 /></div>
              <div>
                <p className="text-[10px] font-bold uppercase opacity-40">Parcerias ONGs</p>
                <p className="font-bold">ongs@petmatch.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="bg-brand-primary/10 p-4 rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all"><Phone /></div>
              <div>
                <p className="text-[10px] font-bold uppercase opacity-40">WhatsApp Suporte</p>
                <p className="font-bold">+55 (11) 99999-8888</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-primary p-8 rounded-[40px] text-white">
          <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
          <p className="text-sm opacity-80 mb-4">Nossa equipe de suporte e moderação trabalha para garantir a segurança de todos.</p>
          <div className="flex justify-between text-sm font-bold border-t border-white/20 pt-4">
            <span>Seg - Sex</span>
            <span>09:00 - 19:00</span>
          </div>
          <div className="flex justify-between text-sm font-bold mt-2">
            <span>Sábados</span>
            <span>10:00 - 14:00</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <form className="bg-white p-10 rounded-[50px] border border-brand-secondary/5 shadow-2xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold px-1">Seu Nome</label>
              <input type="text" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all" placeholder="Como podemos te chamar?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold px-1">Seu E-mail</label>
              <input type="email" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all" placeholder="exemplo@email.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold px-1">Assunto</label>
            <select className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all appearance-none">
              <option>Dúvida sobre Adoção</option>
              <option>Cadastro de ONG</option>
              <option>Suporte Técnico</option>
              <option>Sugestões</option>
              <option>Outros</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold px-1">Mensagem</label>
            <textarea className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all h-40 resize-none" placeholder="Escreva aqui sua mensagem detalhada..."></textarea>
          </div>
          <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-brand-primary/20">
            Enviar Mensagem Agora
          </button>
          <p className="text-[10px] text-center text-brand-secondary/40">
            Ao enviar, você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </form>
      </div>
    </div>
  </div>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "O PetMatch é realmente gratuito para adotantes?", 
      a: "Sim, 100% gratuito. Nossa missão é facilitar a adoção responsável. Não cobramos taxas de intermediação, mensalidades ou comissões dos adotantes. O único custo envolvido pode ser a taxa de adoção cobrada diretamente por algumas ONGs para cobrir custos de vacinação e castração, o que é tratado fora da nossa plataforma." 
    },
    { 
      q: "Como o algoritmo de 'Match' funciona?", 
      a: "Nosso algoritmo analisa mais de 20 variáveis, incluindo: nível de energia do pet, espaço disponível na sua casa, presença de crianças ou outros animais, tempo que o pet ficará sozinho e sua experiência prévia. Cruzamos esses dados com o perfil comportamental detalhado que as ONGs preenchem para cada animal." 
    },
    { 
      q: "Quais são os requisitos para cadastrar uma ONG?", 
      a: "Para garantir a segurança, exigimos que a ONG ou protetor independente forneça documentos básicos de identificação (CNPJ ou CPF do responsável), comprove a existência do abrigo ou lar temporário e aceite nossos termos de ética e bem-estar animal." 
    },
    { 
      q: "O PetMatch realiza a entrega do animal?", 
      a: "Não realizamos o transporte. A logística de entrega ou retirada do animal é combinada diretamente entre o adotante e a ONG através do nosso chat interno, após a aprovação do perfil." 
    },
    { 
      q: "Como vocês garantem a segurança dos meus dados?", 
      a: "Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados). Seus dados sensíveis só são liberados para a ONG após você demonstrar interesse em um pet específico e autorizar o compartilhamento para fins de análise de adoção." 
    },
    { 
      q: "Posso devolver um animal se a adaptação não funcionar?", 
      a: "Embora nosso objetivo seja evitar isso através do match inteligente, entendemos que imprevistos ocorrem. O PetMatch oferece suporte pós-adoção com especialistas em comportamento para tentar resolver problemas de adaptação. Caso a devolução seja inevitável, ela deve ser coordenada com a ONG de origem conforme o contrato de adoção assinado." 
    }
  ];

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-display mb-6 tracking-tight">Dúvidas Frequentes</h1>
        <p className="text-xl text-brand-secondary/60">Tudo o que você precisa saber sobre o PetMatch.</p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[32px] border border-brand-secondary/5 overflow-hidden shadow-sm"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-10 py-8 flex justify-between items-center text-left hover:bg-brand-primary/5 transition-all group"
            >
              <span className="font-bold text-xl pr-8 group-hover:text-brand-primary transition-colors">{faq.q}</span>
              <div className={`bg-brand-bg p-2 rounded-full transition-transform duration-500 ${openIndex === i ? 'rotate-180 bg-brand-primary text-white' : ''}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                >
                  <div className="px-10 pb-10 text-brand-secondary/60 leading-relaxed text-lg border-t border-brand-secondary/5 pt-6">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 p-12 bg-brand-secondary rounded-[50px] text-white text-center">
        <h3 className="text-3xl font-display mb-4">Ainda tem dúvidas?</h3>
        <p className="text-white/60 mb-8">Nossa equipe está pronta para ajudar você em canais personalizados.</p>
        <button onClick={() => window.scrollTo(0, 0)} className="bg-brand-primary text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
          Falar com Suporte
        </button>
      </div>
    </div>
  );
};

const PrivacyPage = () => (
  <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-6 mb-12"
    >
      <div className="bg-brand-primary/10 p-6 rounded-[30px] text-brand-primary shadow-inner"><Lock className="w-10 h-10" /></div>
      <div>
        <h1 className="text-6xl font-display tracking-tight">Política de Privacidade</h1>
        <p className="text-brand-secondary/40 font-bold uppercase text-xs tracking-widest mt-2">Conformidade com a LGPD (Lei 13.709/2018)</p>
      </div>
    </motion.div>
    
    <div className="prose prose-lg max-w-none text-brand-secondary/70 bg-white p-12 rounded-[50px] border border-brand-secondary/5 shadow-sm">
      <p className="text-sm italic mb-10">Última atualização: 11 de Abril de 2026</p>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">1. Introdução e Compromisso</h3>
      <p>O PetMatch (doravante "Plataforma") valoriza a sua privacidade. Esta Política explica como coletamos, usamos, armazenamos e protegemos seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD) do Brasil.</p>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">2. Dados Coletados e Finalidade</h3>
      <p>Coletamos dados para as seguintes finalidades:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Identificação:</strong> Nome completo, CPF e e-mail para criação de conta e segurança.</li>
        <li><strong>Perfil de Adoção:</strong> Informações sobre moradia, rotina e preferências para o algoritmo de match.</li>
        <li><strong>Comunicação:</strong> Notificações sobre processos de adoção e atualizações da plataforma.</li>
        <li><strong>Segurança:</strong> Endereço IP e logs de acesso para prevenção de fraudes.</li>
      </ul>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">3. Seus Direitos (Art. 18 da LGPD)</h3>
      <p>Você, como titular dos dados, possui os seguintes direitos:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Confirmação da existência de tratamento de dados.</li>
        <li>Acesso facilitado aos seus dados.</li>
        <li>Correção de dados incompletos ou inexatos.</li>
        <li>Eliminação de dados desnecessários ou excessivos.</li>
        <li>Revogação do consentimento a qualquer momento.</li>
      </ul>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. Compartilhamento com Terceiros</h3>
      <p>Seus dados de perfil (excluindo documentos sensíveis como CPF) são compartilhados com as ONGs parceiras apenas quando você inicia um processo de adoção. Não vendemos seus dados para anunciantes ou terceiros sob nenhuma circunstância.</p>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">5. Retenção e Exclusão</h3>
      <p>Mantemos seus dados enquanto sua conta estiver ativa. Caso solicite a exclusão, os dados serão removidos em até 15 dias úteis, exceto aqueles que somos legalmente obrigados a manter por períodos determinados (ex: Marco Civil da Internet).</p>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">6. Contato do Encarregado (DPO)</h3>
      <p>Para exercer seus direitos ou tirar dúvidas, entre em contato com nosso Encarregado de Proteção de Dados através do e-mail: <strong>dpo@petmatch.com.br</strong>.</p>
    </div>
  </div>
);

const TermsPage = () => (
  <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-6 mb-12"
    >
      <div className="bg-brand-primary/10 p-6 rounded-[30px] text-brand-primary shadow-inner"><FileText className="w-10 h-10" /></div>
      <div>
        <h1 className="text-6xl font-display tracking-tight">Termos de Uso</h1>
        <p className="text-brand-secondary/40 font-bold uppercase text-xs tracking-widest mt-2">Contrato de Utilização da Plataforma</p>
      </div>
    </motion.div>

    <div className="prose prose-lg max-w-none text-brand-secondary/70 bg-white p-12 rounded-[50px] border border-brand-secondary/5 shadow-sm">
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">1. Aceitação dos Termos</h3>
      <p>Ao acessar ou usar o PetMatch, você concorda em cumprir estes Termos. Se você não concordar, não deverá utilizar nossos serviços.</p>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">2. Elegibilidade</h3>
      <p>Para adotar um animal através da plataforma, você deve ter pelo menos 18 anos de idade e plena capacidade civil de acordo com as leis brasileiras.</p>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">3. Natureza do Serviço</h3>
      <p>O PetMatch é uma plataforma de tecnologia que facilita o encontro entre adotantes e ONGs/Protetores. Não somos proprietários dos animais e não garantimos a conclusão de nenhuma adoção, que é uma decisão soberana da ONG parceira após análise de perfil.</p>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">4. Conduta do Usuário</h3>
      <p>É estritamente proibido:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Usar a plataforma para comercialização (venda) de animais.</li>
        <li>Fornecer informações falsas ou enganosas no perfil.</li>
        <li>Assediar ou maltratar representantes de ONGs ou outros usuários.</li>
        <li>Publicar conteúdo que incite maus-tratos aos animais.</li>
      </ul>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">5. Propriedade Intelectual</h3>
      <p>Todo o conteúdo da plataforma (logotipos, algoritmos, design) é de propriedade exclusiva do PetMatch e protegido pelas leis de direitos autorais e propriedade industrial.</p>
      
      <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">6. Foro</h3>
      <p>Este contrato é regido pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias.</p>
    </div>
  </div>
);

const SecurityPage = () => (
  <div className="pt-32 pb-20 max-w-5xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center mb-20"
    >
      <div className="inline-block bg-brand-primary/10 p-6 rounded-[40px] text-brand-primary mb-8">
        <ShieldAlert className="w-16 h-16" />
      </div>
      <h1 className="text-6xl font-display tracking-tight mb-6">Segurança em Primeiro Lugar</h1>
      <p className="text-xl text-brand-secondary/60 max-w-3xl mx-auto leading-relaxed">
        Construímos o PetMatch com as tecnologias mais seguras do mercado para garantir que sua jornada de adoção seja protegida de ponta a ponta.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Criptografia Bancária",
          desc: "Todos os seus dados pessoais e conversas no chat são protegidos por criptografia SSL/TLS de 256 bits, o mesmo padrão usado por grandes bancos.",
          icon: <Lock className="w-8 h-8" />
        },
        {
          title: "Verificação de ONGs",
          desc: "Nenhuma ONG entra na plataforma sem passar por uma auditoria humana. Verificamos documentos, redes sociais e reputação na comunidade pet.",
          icon: <ShieldCheck className="w-8 h-8" />
        },
        {
          title: "Proteção contra Fraudes",
          desc: "Nossos sistemas de IA monitoram padrões de comportamento para detectar e banir perfis falsos ou tentativas de comercialização ilegal de animais.",
          icon: <ShieldAlert className="w-8 h-8" />
        },
        {
          title: "Infraestrutura em Nuvem",
          desc: "Utilizamos servidores de alta disponibilidade com redundância geográfica, garantindo que o serviço esteja sempre disponível e seus dados seguros.",
          icon: <Smartphone className="w-8 h-8" />
        },
        {
          title: "Conformidade LGPD",
          desc: "Nossa arquitetura foi desenhada 'Privacy by Design', respeitando cada detalhe da Lei Geral de Proteção de Dados brasileira.",
          icon: <FileText className="w-8 h-8" />
        },
        {
          title: "Auditorias Periódicas",
          desc: "Realizamos testes de intrusão e auditorias de segurança mensais para identificar e corrigir vulnerabilidades proativamente.",
          icon: <TrendingUp className="w-8 h-8" />
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm hover:shadow-xl transition-all group"
        >
          <div className="bg-brand-bg w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold mb-4">{item.title}</h3>
          <p className="text-sm text-brand-secondary/60 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
    
    <div className="mt-20 bg-brand-bg p-12 rounded-[60px] border border-brand-secondary/5 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h3 className="text-3xl font-display mb-4 tracking-tight">Encontrou algo suspeito?</h3>
        <p className="text-brand-secondary/60 leading-relaxed">
          Temos um canal de denúncias prioritário para casos de maus-tratos, perfis falsos ou uso indevido da plataforma. Sua ajuda é fundamental.
        </p>
      </div>
      <button className="bg-red-500 text-white px-10 py-5 rounded-2xl font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20">
        Denunciar Irregularidade
      </button>
    </div>
  </div>
);

// --- Auth Components ---

const LoginPage = ({ onLogin, onNavigate }: { onLogin: (role: string) => void, onNavigate: (page: string) => void }) => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logic for demo: 
    // - admin@
    // - ong@
    // - user@
    const emailLower = email.toLowerCase();
    const role = emailLower.includes('admin') ? 'admin' : emailLower.includes('user') ? 'user' : 'ong';
    onLogin(role);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side: Image/Branding */}
      <div className="hidden md:flex md:w-1/2 bg-brand-secondary relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 text-white max-w-lg">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-brand-primary p-3 rounded-2xl">
                <PawPrint className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-display font-bold tracking-tighter">PetMatch <span className="text-brand-primary">Web</span></span>
            </div>
            <h2 className="text-5xl font-display font-bold leading-tight mb-6">
              Gerencie suas adoções com <span className="italic text-brand-primary">inteligência</span>.
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Acesse sua conta para gerenciar animais, responder interessados e acompanhar o impacto da sua ONG.
            </p>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/auth-${i}/100/100`} 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-4 border-brand-secondary object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-brand-secondary bg-brand-primary flex items-center justify-center text-xs font-bold">
                +500
              </div>
            </div>
            <p className="mt-4 text-sm text-white/50 font-medium">Mais de 500 ONGs já utilizam o PetMatch Web.</p>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-grid">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-brand-secondary/40 hover:text-brand-primary transition-colors mb-8 text-sm font-bold group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Voltar para o Início
            </button>
            <h1 className="text-4xl font-display font-bold mb-3">Bem-vindo de volta</h1>
            <p className="text-brand-secondary/60">Acesse sua conta para continuar.</p>
            <div className="mt-4 flex gap-2">
              <span className="text-[10px] font-bold text-brand-secondary/40 uppercase bg-brand-bg px-2 py-1 rounded">Dica: use "user@" para adotante, "admin@" para admin ou "ong@" para ONG</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-brand-secondary/80 ml-1">E-mail</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-secondary/30" />
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@ong.org"
                  className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-brand-secondary/80">Senha</label>
                <button type="button" className="text-xs font-bold text-brand-primary hover:underline">Esqueceu a senha?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-secondary/30" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 ml-1">
              <input type="checkbox" id="remember" className="w-5 h-5 rounded-lg border-brand-secondary/10 text-brand-primary focus:ring-brand-primary/10" />
              <label htmlFor="remember" className="text-sm font-medium text-brand-secondary/60">Lembrar de mim</label>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-2"
            >
              Entrar no Painel <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-brand-secondary/5 text-center">
            <p className="text-sm text-brand-secondary/60">
              Sua ONG ainda não é parceira? 
              <button 
                onClick={() => onNavigate('register')}
                className="text-brand-primary font-bold ml-2 hover:underline"
              >
                Cadastrar agora
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const RegisterPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onNavigate('login');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side: Branding/Info */}
      <div className="hidden md:flex md:w-1/3 bg-brand-primary relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paws.png')]"></div>
        <div className="relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="bg-white p-3 rounded-2xl">
                <PawPrint className="w-8 h-8 text-brand-primary" />
              </div>
              <span className="text-3xl font-display font-bold tracking-tighter">PetMatch</span>
            </div>
            
            <h2 className="text-4xl font-display font-bold leading-tight mb-8">
              Junte-se à revolução da <span className="text-brand-secondary">adoção animal</span>.
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white/20 p-3 rounded-xl h-fit"><CheckCircle2 className="w-6 h-6" /></div>
                <div>
                  <p className="font-bold text-lg">Visibilidade Nacional</p>
                  <p className="text-white/70 text-sm">Seus animais vistos por milhares de adotantes qualificados.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/20 p-3 rounded-xl h-fit"><Sparkles className="w-6 h-6" /></div>
                <div>
                  <p className="font-bold text-lg">Match Inteligente</p>
                  <p className="text-white/70 text-sm">Reduza devoluções com nosso algoritmo de compatibilidade.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Register Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-grid overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-2xl"
        >
          <div className="mb-12">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 text-brand-secondary/40 hover:text-brand-primary transition-colors mb-8 text-sm font-bold group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> Voltar para o Início
            </button>
            <h1 className="text-4xl font-display font-bold mb-3">Cadastre sua ONG</h1>
            <p className="text-brand-secondary/60">Preencha os dados básicos para criar sua conta.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-secondary/80 ml-1">Nome da Instituição</label>
                <input type="text" required placeholder="Ex: Patas Felizes" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-secondary/80 ml-1">CNPJ ou CPF</label>
                <input type="text" required placeholder="00.000.000/0000-00" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-secondary/80 ml-1">E-mail</label>
                <input type="email" required placeholder="contato@ong.org" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-secondary/80 ml-1">Telefone</label>
                <input type="tel" required placeholder="(00) 00000-0000" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-secondary/80 ml-1">Senha</label>
                <input type="password" required placeholder="••••••••" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-secondary/80 ml-1">Confirmar Senha</label>
                <input type="password" required placeholder="••••••••" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-primary/20"
            >
              Criar Conta e Continuar
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm text-brand-secondary/60">
              Já possui acesso? 
              <button 
                onClick={() => onNavigate('login')}
                className="text-brand-primary font-bold ml-2 hover:underline"
              >
                Fazer Login
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const UserDashboard = ({ user, onLogout, onNavigate }: { user: any, onLogout: () => void, onNavigate: (p: string) => void }) => {
  const [activeTab, setActiveTab] = useState('explore');
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [hasCompletedQuestionnaire, setHasCompletedQuestionnaire] = useState(false);

  const renderContent = () => {
    switch(activeTab) {
      case 'explore': return <UserPetExplorer onOpenQuestionnaire={() => setShowQuestionnaire(true)} hasMatch={hasCompletedQuestionnaire} />;
      case 'favorites': return <UserFavorites />;
      case 'adoptions': return <UserAdoptions />;
      case 'settings': return <div className="p-10 text-center">Configurações do Perfil</div>;
      default: return <UserPetExplorer onOpenQuestionnaire={() => setShowQuestionnaire(true)} hasMatch={hasCompletedQuestionnaire} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex">
      {showQuestionnaire && (
        <LifestyleQuestionnaire 
          onClose={() => setShowQuestionnaire(false)} 
          onComplete={() => {
            setShowQuestionnaire(false);
            setHasCompletedQuestionnaire(true);
          }} 
        />
      )}

      <Sidebar 
        role="user" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={onLogout}
        onNavigate={onNavigate}
        items={[
          { id: 'explore', label: 'Explorar Pets', icon: <Search className="w-5 h-5" /> },
          { id: 'favorites', label: 'Meus Favoritos', icon: <Heart className="w-5 h-5" /> },
          { id: 'adoptions', label: 'Minhas Adoções', icon: <History className="w-5 h-5" /> },
          { id: 'settings', label: 'Configurações', icon: <Settings className="w-5 h-5" /> },
        ]}
      />
      
      <div className="flex-1 ml-72">
        <DashboardHeader user={user} />
        
        <main className="pt-28 pb-20 px-8 max-w-7xl mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const LifestyleQuestionnaire = ({ onClose, onComplete }: { onClose: () => void, onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    {
      id: 1,
      title: "Seu Espaço",
      desc: "Onde o seu novo amigo irá morar?",
      questions: [
        { label: "Tipo de Residência", options: ["Apartamento", "Casa sem Quintal", "Casa com Quintal Médio", "Casa com Quintal Grande"] },
        { label: "Tem telas de proteção?", options: ["Sim, em todas", "Apenas em algumas", "Não possuo"] }
      ]
    },
    {
      id: 2,
      title: "Sua Rotina",
      desc: "Quanto tempo você tem disponível?",
      questions: [
        { label: "Tempo fora de casa", options: ["Trabalho Remoto", "Até 4 horas", "De 4 a 8 horas", "Mais de 8 horas"] },
        { label: "Nível de Atividade", options: ["Sedentário (Sofá)", "Leve (Caminhadas)", "Moderado (Ativo)", "Intenso (Esportes)"] }
      ]
    },
    {
      id: 3,
      title: "Experiência",
      desc: "Você já teve animais antes?",
      questions: [
        { label: "Histórico", options: ["Primeira vez", "Já tive no passado", "Tenho animais atualmente"] },
        { label: "Outros residentes", options: ["Moro sozinho", "Apenas adultos", "Tem crianças pequenas", "Tem idosos"] }
      ]
    },
    {
      id: 4,
      title: "Preferências",
      desc: "O que você busca?",
      questions: [
        { label: "Espécie de preferência", options: ["Cachorro", "Gato", "Tanto faz"] },
        { label: "Idade do pet", options: ["Filhote", "Adulto", "Sênior", "Qualquer idade"] }
      ]
    }
  ];

  const current = steps[step - 1];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-secondary/40 backdrop-blur-md" onClick={onClose}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-2xl rounded-[40px] shadow-2xl relative z-10 overflow-hidden"
      >
        <div className="bg-brand-primary p-12 text-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <button onClick={onClose} className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-xl transition-colors"><X className="w-6 h-6" /></button>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-display font-bold mb-3">{current.title}</h2>
            <p className="text-white/80 font-medium">{current.desc}</p>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-10 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white" 
              initial={{ width: `${(step-1)/totalSteps * 100}%` }}
              animate={{ width: `${step/totalSteps * 100}%` }}
            />
          </div>
        </div>

        <div className="p-12 space-y-8">
          {current.questions.map((q, i) => (
            <div key={i} className="space-y-4">
              <label className="text-sm font-bold text-brand-secondary/40 uppercase tracking-widest">{q.label}</label>
              <div className="grid grid-cols-2 gap-3">
                {q.options.map((opt, j) => (
                  <button key={j} className="p-4 bg-brand-bg border border-brand-secondary/5 rounded-2xl text-left font-bold text-brand-secondary hover:border-brand-primary hover:bg-brand-primary/5 transition-all">
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-6 flex gap-4">
            {step > 1 && (
              <button 
                onClick={() => setStep(prev => prev - 1)}
                className="flex-1 py-5 rounded-2xl font-bold border border-brand-secondary/5 text-brand-secondary/40 hover:bg-brand-bg transition-colors"
              >
                Voltar
              </button>
            )}
            <button 
              onClick={() => step < totalSteps ? setStep(prev => prev + 1) : onComplete()}
              className="flex-[2] bg-brand-primary text-white py-5 rounded-2xl font-bold shadow-xl shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              {step === totalSteps ? "Concluir e Ver Matches" : "Próximo Passo"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CompleteProfilePage = ({ onComplete }: { onComplete: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-2xl max-w-4xl mx-auto"
  >
    <div className="text-center mb-12">
      <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary">
        <Sparkles className="w-8 h-8" />
      </div>
      <h1 className="text-3xl font-display font-bold">Perfil da Instituição</h1>
      <p className="text-brand-secondary/60 mt-2">Complete as informações para validação e aprovação da sua conta.</p>
    </div>

    <form onSubmit={(e) => { e.preventDefault(); onComplete(); }} className="space-y-12">
      {/* Seção 1: Responsável pela Conta */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-brand-secondary/5">
          <div className="p-2 bg-brand-bg rounded-lg text-brand-primary"><Users className="w-4 h-4" /></div>
          <h3 className="font-bold text-lg">Responsável pela Conta</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Nome Completo</label>
            <input type="text" required defaultValue="Ricardo Oliveira" placeholder="Nome do representante legal" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">CPF do Responsável</label>
            <input type="text" required defaultValue="123.456.789-00" placeholder="000.000.000-00" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Cargo / Função</label>
            <input type="text" required defaultValue="Presidente" placeholder="Ex: Diretor, Presidente, Voluntário" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Telefone Direto</label>
            <input type="tel" required defaultValue="(41) 99988-7766" placeholder="(00) 00000-0000" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
        </div>
      </div>

      {/* Seção 2: Endereço da Sede */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-brand-secondary/5">
          <div className="p-2 bg-brand-bg rounded-lg text-brand-primary"><MapPin className="w-4 h-4" /></div>
          <h3 className="font-bold text-lg">Endereço da Sede</h3>
        </div>
        <div className="grid md:grid-cols-6 gap-6">
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">CEP</label>
            <input type="text" required defaultValue="80010-000" placeholder="00000-000" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2 md:col-span-4">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Logradouro (Rua/Avenida)</label>
            <input type="text" required defaultValue="Rua das Palmeiras" placeholder="Ex: Rua das Flores" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2 md:col-span-1">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Número</label>
            <input type="text" required defaultValue="450" placeholder="123" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Complemento</label>
            <input type="text" defaultValue="Sala 02" placeholder="Sala, Bloco, etc." className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2 md:col-span-3">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Bairro</label>
            <input type="text" required defaultValue="Centro" placeholder="Ex: Centro" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2 md:col-span-4">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Cidade</label>
            <input type="text" required defaultValue="Curitiba" placeholder="Ex: Curitiba" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Estado (UF)</label>
            <select required defaultValue="PR" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 appearance-none">
              <option value="">Selecione</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
        </div>
      </div>

      {/* Seção 3: Informações Institucionais */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-brand-secondary/5">
          <div className="p-2 bg-brand-bg rounded-lg text-brand-primary"><Building2 className="w-4 h-4" /></div>
          <h3 className="font-bold text-lg">Informações Institucionais</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Data de Fundação</label>
            <input type="date" required defaultValue="2015-06-12" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Website</label>
            <input type="url" defaultValue="https://www.patasfelizes.org" placeholder="https://www.suaong.org" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Instagram</label>
            <input type="text" defaultValue="@patasfelizes" placeholder="@suaong" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Facebook</label>
            <input type="text" defaultValue="facebook.com/patasfelizes" placeholder="facebook.com/suaong" className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Missão e Objetivos</label>
            <textarea rows={4} required defaultValue="Nossa missão é resgatar, reabilitar e encontrar lares amorosos para animais em situação de risco, promovendo a posse responsável e o bem-estar animal em nossa comunidade." placeholder="Descreva brevemente o propósito da sua ONG e as principais atividades realizadas..." className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 resize-none" />
          </div>
        </div>
      </div>

      {/* Seção 4: Documentação para Validação */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 pb-2 border-b border-brand-secondary/5">
          <div className="p-2 bg-brand-bg rounded-lg text-brand-primary"><ShieldCheck className="w-4 h-4" /></div>
          <h3 className="font-bold text-lg">Documentação para Validação</h3>
        </div>
        <p className="text-sm text-brand-secondary/40">Anexe os documentos originais (PDF ou Imagem) para que nossa equipe possa validar sua conta.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { label: 'Cartão CNPJ', icon: <FileText className="w-5 h-5" /> },
            { label: 'Estatuto Social', icon: <FileText className="w-5 h-5" /> },
            { label: 'Doc. Responsável', icon: <Users className="w-5 h-5" /> }
          ].map((doc, i) => (
            <div key={i} className="relative group">
              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
              <div className="p-6 border-2 border-dashed border-brand-secondary/10 rounded-3xl bg-brand-bg/30 group-hover:bg-brand-primary/5 group-hover:border-brand-primary/30 transition-all text-center">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 text-brand-secondary/40 group-hover:text-brand-primary transition-colors shadow-sm">
                  <Upload className="w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-brand-secondary/60 group-hover:text-brand-primary transition-colors">{doc.label}</p>
                <p className="text-[10px] text-brand-secondary/30 mt-1">Clique para anexar</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-8">
        <button 
          type="submit"
          className="w-full bg-brand-primary text-white py-6 rounded-[24px] font-bold text-lg hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-brand-primary/30 flex items-center justify-center gap-3"
        >
          Enviar Perfil para Aprovação <ArrowRight className="w-5 h-5" />
        </button>
        <p className="text-center text-xs text-brand-secondary/40 mt-6 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4" /> Seus dados estão protegidos e serão usados apenas para validação.
        </p>
      </div>
    </form>
  </motion.div>
);

// --- Dashboard Components ---

// --- Dashboard Components ---

const Sidebar = ({ role, onLogout, onNavigate, activeTab, setActiveTab, isApproved = true, items }: { 
  role?: string, 
  onLogout: () => void, 
  onNavigate: (page: string) => void,
  activeTab?: string,
  setActiveTab?: (tab: string) => void,
  isApproved?: boolean,
  items?: { id: string, icon: ReactNode, label: string, locked?: boolean }[]
}) => {
  const defaultItems = role === 'admin' ? [
    { id: 'overview', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview' },
    { id: 'moderation', icon: <ShieldCheck className="w-5 h-5" />, label: 'Moderação' },
    { id: 'ongs', icon: <Building2 className="w-5 h-5" />, label: 'ONGs Parceiras' },
    { id: 'users', icon: <Users className="w-5 h-5" />, label: 'Usuários' },
    { id: 'pets', icon: <PawPrint className="w-5 h-5" />, label: 'Pets Globais' },
    { id: 'reports', icon: <ShieldAlert className="w-5 h-5" />, label: 'Denúncias' },
    { id: 'analytics', icon: <BarChart3 className="w-5 h-5" />, label: 'Relatórios' },
    { id: 'financial', icon: <DollarSign className="w-5 h-5" />, label: 'Financeiro' },
    { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Configurações' },
  ] : [
    { id: 'overview', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Meu Painel' },
    { id: 'pets', icon: <PawPrint className="w-5 h-5" />, label: 'Meus Pets', locked: !isApproved },
    { id: 'messages', icon: <MessageCircle className="w-5 h-5" />, label: 'Mensagens', locked: !isApproved },
    { id: 'adoptions', icon: <ClipboardList className="w-5 h-5" />, label: 'Adoções', locked: !isApproved },
    { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'Configurações' },
  ];

  const menuItems = items || defaultItems;

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-brand-secondary text-white flex flex-col p-6 z-50">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="bg-brand-primary p-2 rounded-xl">
          <PawPrint className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-display font-bold tracking-tighter">PetMatch</span>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
        {menuItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => !item.locked && setActiveTab?.(item.id)}
            disabled={item.locked}
            className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all font-medium group ${
              activeTab === item.id 
                ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
                : item.locked ? 'opacity-30 cursor-not-allowed' : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-4">
              {item.icon}
              {item.label}
            </div>
            {item.locked && <Lock className="w-3 h-3 opacity-50" />}
          </button>
        ))}
      </nav>

      <div className="pt-6 border-t border-white/10 space-y-2">
        <button 
          onClick={() => onNavigate('home')}
          className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-white/50 hover:text-white hover:bg-white/5 transition-all font-medium"
        >
          <Home className="w-5 h-5" />
          Voltar ao Site
        </button>
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all font-medium"
        >
          <LogOut className="w-5 h-5" />
          Sair da Conta
        </button>
      </div>
    </aside>
  );
};

const DashboardHeader = ({ user }: { user: any }) => (
  <header className="fixed top-0 right-0 left-72 h-20 bg-white border-b border-brand-secondary/5 flex items-center justify-between px-8 z-40 backdrop-blur-md bg-white/80">
    <div className="flex items-center gap-4">
      <div className="bg-brand-bg p-2 rounded-xl md:hidden">
        <Menu className="w-6 h-6" />
      </div>
      <div className="relative hidden md:block">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary/30" />
        <input 
          type="text" 
          placeholder="Pesquisar no painel..." 
          className="bg-brand-bg border-none rounded-xl pl-12 pr-6 py-2.5 text-sm w-80 focus:ring-2 focus:ring-brand-primary/20 outline-none"
        />
      </div>
    </div>

    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <button className="p-2.5 bg-brand-bg rounded-xl text-brand-secondary/40 hover:text-brand-primary transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2.5 bg-brand-bg rounded-xl text-brand-secondary/40 hover:text-brand-primary transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>
      
      <div className="h-10 w-px bg-brand-secondary/5"></div>

      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold leading-none">{user?.name}</p>
          <p className="text-[10px] font-bold text-brand-primary uppercase mt-1 tracking-wider">{user?.role}</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold shadow-lg shadow-brand-primary/20">
          {user?.name?.[0]}
        </div>
      </div>
    </div>
  </header>
);

const AdminDashboard = ({ user, onLogout, onNavigate, onApproveOng }: { user: any, onLogout: () => void, onNavigate: (p: string) => void, onApproveOng: () => void }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return <AdminOverview onApproveOng={onApproveOng} />;
      case 'moderation': return <AdminModeration onApprove={onApproveOng} />;
      case 'ongs': return <AdminOngs onApproveOng={onApproveOng} />;
      case 'users': return <AdminUsers />;
      case 'pets': return <AdminPets />;
      case 'reports': return <AdminReports />;
      case 'analytics': return <AdminAnalytics />;
      case 'financial': return <AdminFinancial />;
      case 'settings': return <AdminSettings />;
      default: return <AdminOverview onApproveOng={onApproveOng} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex">
      <Sidebar role="admin" onLogout={onLogout} onNavigate={onNavigate} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 ml-72">
        <DashboardHeader user={user} />
        
        <main className="pt-28 pb-20 px-8 max-w-7xl mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

const AdminOverview = ({ onApproveOng }: { onApproveOng: () => void }) => (
  <>
    <div className="flex justify-between items-end mb-10">
      <div>
        <h1 className="text-4xl font-display font-bold">Visão Geral</h1>
        <p className="text-brand-secondary/60 mt-1">Bem-vindo ao centro de comando PetMatch.</p>
      </div>
      <div className="flex gap-3">
        <button className="bg-white border border-brand-secondary/10 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-brand-bg transition-colors">Exportar Dados</button>
        <button className="bg-brand-primary text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform">Novo Relatório</button>
      </div>
    </div>

    <div className="grid md:grid-cols-4 gap-6 mb-10">
      {[
        { label: 'Total de Usuários', val: '12.450', change: '+12%', icon: <Users className="w-5 h-5" /> },
        { label: 'ONGs Ativas', val: '184', change: '+5', icon: <Building2 className="w-5 h-5" /> },
        { label: 'Pets Adotados', val: '3.120', change: '+18%', icon: <PawPrint className="w-5 h-5" /> },
        { label: 'Denúncias', val: '2', change: '-1', icon: <ShieldAlert className="w-5 h-5" />, color: 'text-red-500' }
      ].map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-[32px] border border-brand-secondary/5 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-2xl bg-brand-bg ${stat.color || 'text-brand-primary'}`}>{stat.icon}</div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${stat.change.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>{stat.change}</span>
          </div>
          <p className="text-xs text-brand-secondary/40 font-bold uppercase tracking-wider">{stat.label}</p>
          <p className="text-3xl font-display font-bold mt-1">{stat.val}</p>
        </div>
      ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Chart Placeholder */}
        <div className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-xl">Crescimento de Adoções</h3>
            <select className="bg-brand-bg border-none rounded-xl px-4 py-2 text-xs font-bold outline-none">
              <option>Últimos 7 dias</option>
              <option>Últimos 30 dias</option>
            </select>
          </div>
          <div className="h-64 w-full bg-brand-bg rounded-3xl flex items-end justify-between p-6 gap-2">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  className="w-full bg-brand-primary/20 rounded-t-lg group-hover:bg-brand-primary transition-colors relative" 
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-secondary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                    {h * 12}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-brand-secondary/30 uppercase">Dia {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-brand-secondary/5 flex justify-between items-center">
            <h3 className="font-bold text-xl">ONGs Aguardando Verificação</h3>
            <button className="text-brand-primary text-sm font-bold hover:underline">Ver Todas</button>
          </div>
          <div className="divide-y divide-brand-secondary/5">
            {[
              { name: 'Abrigo Patas Felizes', city: 'Curitiba, PR', date: 'Há 2 horas', status: 'Pendente' },
              { name: 'ONG Vida Animal', city: 'Salvador, BA', date: 'Há 5 horas', status: 'Análise' },
              { name: 'Protetores Independentes SP', city: 'São Paulo, SP', date: 'Ontem', status: 'Pendente' }
            ].map((ong, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-brand-bg transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary font-bold group-hover:bg-brand-primary group-hover:text-white transition-colors">{ong.name[0]}</div>
                  <div>
                    <p className="font-bold">{ong.name}</p>
                    <p className="text-xs text-brand-secondary/40">{ong.city} • {ong.date}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={onApproveOng}
                    className="px-5 py-2.5 bg-brand-primary text-white text-xs font-bold rounded-xl hover:scale-105 transition-transform"
                  >
                    Aprovar
                  </button>
                  <button className="px-5 py-2.5 bg-brand-bg text-brand-secondary text-xs font-bold rounded-xl hover:bg-brand-secondary/5 transition-colors">Detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-brand-secondary text-white rounded-[40px] p-8 shadow-xl shadow-brand-secondary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h3 className="font-bold text-xl mb-6 relative z-10">Logs do Sistema</h3>
          <div className="space-y-6 relative z-10">
            {[
              { text: 'Novo backup do sistema concluído', time: '10 min atrás', type: 'success' },
              { text: 'Tentativa de login suspeita bloqueada', time: '45 min atrás', type: 'warning' },
              { text: 'Atualização de termos publicada', time: '1 hora atrás', type: 'info' },
              { text: 'Servidor operando em 99.9% uptime', time: '2 horas atrás', type: 'success' }
            ].map((log, i) => (
              <div key={i} className="flex gap-4 group cursor-help">
                <div className={`w-1 h-10 rounded-full transition-all group-hover:w-2 ${
                  log.type === 'success' ? 'bg-green-500' : 
                  log.type === 'warning' ? 'bg-yellow-500' : 'bg-brand-primary'
                }`}></div>
                <div>
                  <p className="text-sm font-medium text-white/90">{log.text}</p>
                  <p className="text-[10px] opacity-40 uppercase font-bold mt-1 tracking-wider">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-white/10 hover:bg-white/20 rounded-2xl text-xs font-bold transition-colors">Ver Todos os Logs</button>
        </div>

        <div className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm">
          <h3 className="font-bold text-xl mb-6">Suporte Prioritário</h3>
          <div className="bg-brand-bg p-6 rounded-3xl border border-brand-secondary/5 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary"><MessageCircle className="w-5 h-5" /></div>
              <div>
                <p className="text-sm font-bold">Tickets Abertos</p>
                <p className="text-xs text-brand-secondary/40">3 aguardando resposta</p>
              </div>
            </div>
            <button className="w-full bg-brand-primary text-white py-3 rounded-xl text-xs font-bold hover:scale-105 transition-transform">Ir para o Suporte</button>
          </div>
          <p className="text-[10px] text-center text-brand-secondary/30 font-bold uppercase tracking-widest">Versão v2.4.0-stable</p>
        </div>
      </div>
    </div>
  </>
);

const AdminOngs = ({ onApproveOng }: { onApproveOng: () => void }) => {
  const [selectedOng, setSelectedOng] = useState<any>(null);

  const ongs = [
    { 
      id: 1,
      name: 'Abrigo Patas Felizes', 
      city: 'Curitiba, PR', 
      status: 'Ativa', 
      pets: 42, 
      email: 'contato@patasfelizes.org',
      phone: '(41) 98888-7777',
      responsible: 'João Almeida',
      cpf: '123.456.789-00',
      foundation: '12/05/2010',
      website: 'www.patasfelizes.org',
      mission: 'Nossa missão é garantir que cada animal resgatado encontre um lar amoroso e seguro.',
      address: 'Rua das Flores, 123 - Centro'
    },
    { id: 2, name: 'ONG Vida Animal', city: 'Salvador, BA', status: 'Pendente', pets: 0, email: 'vida@animal.org' },
    { id: 3, name: 'Protetores Independentes', city: 'São Paulo, SP', status: 'Ativa', pets: 128, email: 'sp@protetores.com' },
    { id: 4, name: 'Cão Sem Dono', city: 'Rio de Janeiro, RJ', status: 'Ativa', pets: 85, email: 'contato@caosemdono.com.br' },
    { id: 5, name: 'Gatos de Rua', city: 'Belo Horizonte, MG', status: 'Suspensa', pets: 12, email: 'bh@gatosderua.org' },
  ];

  if (selectedOng) {
    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSelectedOng(null)}
            className="p-3 bg-white rounded-2xl border border-brand-secondary/5 text-brand-secondary/40 hover:text-brand-primary transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <div>
            <h1 className="text-4xl font-display font-bold">{selectedOng.name}</h1>
            <div className="flex items-center gap-4 mt-1">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                selectedOng.status === 'Ativa' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {selectedOng.status}
              </span>
              <p className="text-brand-secondary/40 text-sm font-medium">{selectedOng.city} • Parceira desde {selectedOng.foundation || '2023'}</p>
            </div>
          </div>
          <div className="ml-auto flex gap-3">
            <button className="px-6 py-3 bg-brand-bg text-brand-secondary text-sm font-bold rounded-xl hover:bg-brand-secondary/5 transition-colors">Bloquear ONG</button>
            <button className="px-8 py-3 bg-brand-primary text-white text-sm font-bold rounded-xl shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform">Enviar Mensagem</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm space-y-10">
              <div>
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                  <Info className="w-5 h-5 text-brand-primary" /> Informações Institucionais
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-brand-secondary/30 uppercase tracking-widest">Missão</p>
                    <p className="text-sm text-brand-secondary/70 leading-relaxed">{selectedOng.mission || 'Missão não informada.'}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-brand-secondary/20" />
                      <p className="text-sm font-medium text-brand-primary">{selectedOng.website || 'Não informado'}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-brand-secondary/20" />
                      <p className="text-sm font-medium">{selectedOng.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-brand-secondary/20" />
                      <p className="text-sm font-medium">{selectedOng.phone || 'Não informado'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-brand-secondary/5">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                  <UserPlus className="w-5 h-5 text-brand-primary" /> Responsável Legal
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-brand-bg/50 p-6 rounded-3xl">
                    <p className="text-[10px] font-bold text-brand-secondary/30 uppercase mb-1">Nome Completo</p>
                    <p className="font-bold text-brand-secondary">{selectedOng.responsible || 'Informação restrita'}</p>
                  </div>
                  <div className="bg-brand-bg/50 p-6 rounded-3xl">
                    <p className="text-[10px] font-bold text-brand-secondary/30 uppercase mb-1">CPF Verificado</p>
                    <p className="font-bold text-brand-secondary">{selectedOng.cpf || 'Informação restrita'}</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-brand-secondary/5">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-primary" /> Endereço da Sede
                </h3>
                <div className="p-6 bg-brand-bg/50 rounded-3xl flex items-start gap-4">
                  <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl">
                    <Map className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-secondary">{selectedOng.address || 'Endereço não informado'}</p>
                    <p className="text-sm text-brand-secondary/40">{selectedOng.city}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-brand-secondary/5 flex justify-between items-center">
                <h3 className="font-bold text-xl">Pets Cadastrados ({selectedOng.pets})</h3>
                <button className="text-brand-primary text-sm font-bold hover:underline">Ver Todos</button>
              </div>
              <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="group relative aspect-square bg-brand-bg rounded-3xl overflow-hidden cursor-pointer">
                    <img src={`https://picsum.photos/seed/ong_pet_${i}/400/400`} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white font-bold text-sm">Pet #{i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-secondary text-white p-8 rounded-[40px] shadow-xl">
              <h3 className="font-bold text-xl mb-6">Métricas da ONG</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <div>
                    <p className="text-xs opacity-40 uppercase font-bold">Adoções</p>
                    <p className="text-2xl font-display font-bold">128</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-400 opacity-50" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <div>
                    <p className="text-xs opacity-40 uppercase font-bold">Taxa de Match</p>
                    <p className="text-2xl font-display font-bold">92%</p>
                  </div>
                  <Sparkles className="w-8 h-8 text-brand-primary opacity-50" />
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <div>
                    <p className="text-xs opacity-40 uppercase font-bold">Tempo médio</p>
                    <p className="text-2xl font-display font-bold">14 dias</p>
                  </div>
                  <Clock className="w-8 h-8 text-blue-400 opacity-50" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm space-y-6">
              <h3 className="font-bold text-lg">Documentação</h3>
              <div className="space-y-4">
                {['Estatuto Social', 'CNPJ Validado', 'Documento do Responsável'].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-brand-bg rounded-2xl">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-brand-secondary/20" />
                      <p className="text-xs font-bold text-brand-secondary/60">{doc}</p>
                    </div>
                    <button className="text-brand-primary"><Eye className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-4xl font-display font-bold">ONGs Parceiras</h1>
        <p className="text-brand-secondary/60 mt-1">Gerencie e valide as instituições cadastradas.</p>
      </div>
      <div className="flex gap-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary/30" />
          <input type="text" placeholder="Buscar ONG..." className="bg-white border border-brand-secondary/10 rounded-xl pl-12 pr-6 py-3 text-sm w-64 outline-none focus:ring-2 focus:ring-brand-primary/20" />
        </div>
        <button className="bg-white border border-brand-secondary/10 p-3 rounded-xl hover:bg-brand-bg transition-colors"><Filter className="w-5 h-5 text-brand-secondary/40" /></button>
      </div>
    </div>

    <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-brand-bg/50 border-b border-brand-secondary/5">
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Instituição</th>
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Localização</th>
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Status</th>
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Pets</th>
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider text-right">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-secondary/5">
          {ongs.map((ong, i) => (
            <tr key={i} className="hover:bg-brand-bg/30 transition-colors group">
              <td className="px-8 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary font-bold">{ong.name[0]}</div>
                  <div>
                    <p className="font-bold text-sm">{ong.name}</p>
                    <p className="text-xs text-brand-secondary/40">{ong.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-8 py-5 text-sm text-brand-secondary/60">{ong.city}</td>
              <td className="px-8 py-5">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                  ong.status === 'Ativa' ? 'bg-green-100 text-green-700' :
                  ong.status === 'Pendente' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                }`}>
                  {ong.status}
                </span>
              </td>
              <td className="px-8 py-5 text-sm font-bold text-brand-secondary/80">{ong.pets}</td>
              <td className="px-8 py-5 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setSelectedOng(ong)}
                    className="p-2 hover:bg-brand-bg rounded-lg text-brand-secondary/40 transition-colors"
                    title="Ver Perfil"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  {ong.status === 'Pendente' && (
                    <button 
                      onClick={onApproveOng}
                      className="p-2 hover:bg-green-50 rounded-lg text-green-600 transition-colors"
                      title="Aprovar"
                    >
                      <UserCheck className="w-4 h-4" />
                    </button>
                  )}
                  <button className="p-2 hover:bg-brand-primary/10 rounded-lg text-brand-primary transition-colors"><Edit className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-red-50 rounded-lg text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  <button className="p-2 hover:bg-brand-bg rounded-lg text-brand-secondary/40 transition-colors"><MoreVertical className="w-4 h-4" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-6 bg-brand-bg/30 border-t border-brand-secondary/5 flex justify-between items-center">
        <p className="text-xs text-brand-secondary/40 font-bold uppercase">Mostrando 5 de 184 ONGs</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-brand-secondary/10 rounded-xl text-xs font-bold text-brand-secondary/40">Anterior</button>
          <button className="px-4 py-2 bg-white border border-brand-secondary/10 rounded-xl text-xs font-bold text-brand-secondary">Próxima</button>
        </div>
      </div>
    </div>
  </div>
  );
};

const UserPetExplorer = ({ onOpenQuestionnaire, hasMatch }: { onOpenQuestionnaire: () => void, hasMatch: boolean }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [search, setSearch] = useState('');

  const pets = [
    { id: 1, name: 'Bento', breed: 'Vira-lata', age: 'Adulto', size: 'Médio', match: 98, img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e', energy: 'Alto', loc: 'Curitiba, PR', gender: 'male' },
    { id: 2, name: 'Luna', breed: 'Siamês', age: 'Filhote', size: 'Pequeno', match: 86, img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba', energy: 'Baixo', loc: 'Pinhais, PR', gender: 'female' },
    { id: 3, name: 'Paçoca', breed: 'Golden', age: 'Jovem', size: 'Grande', match: 92, img: 'https://images.unsplash.com/photo-1552053831-71594a27632d', energy: 'Muito Alto', loc: 'Curitiba, PR', gender: 'male' },
    { id: 4, name: 'Mia', breed: 'SRD', age: 'Sênior', size: 'Médio', match: 75, img: 'https://images.unsplash.com/photo-1573865667647-5c573c756d75', energy: 'Muito Baixo', loc: 'Colombo, PR', gender: 'female' }
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold">Encontre seu novo amigo</h1>
          <p className="text-brand-secondary/60 mt-1">Explorando pets em Curitiba e região.</p>
        </div>
        {!hasMatch && (
          <button 
            onClick={onOpenQuestionnaire}
            className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-primary/20"
          >
            <Sparkles className="w-5 h-5" /> Fazer Teste de Match
          </button>
        )}
      </div>

      <div className="bg-white p-6 rounded-[32px] border border-brand-secondary/5 shadow-sm flex flex-col lg:flex-row items-center gap-4">
        <div className="flex-1 relative w-full">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-secondary/20" />
          <input 
            type="text" 
            placeholder="Nome, raça ou cidade..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-brand-bg border border-brand-secondary/5 rounded-2xl pl-14 pr-6 py-4 outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all font-medium"
          />
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none px-6 py-4 bg-brand-bg rounded-2xl font-bold text-brand-secondary/60 flex items-center justify-center gap-2 hover:bg-brand-primary/5 hover:text-brand-primary transition-all">
            <Filter className="w-4 h-4" /> Filtros
          </button>
          <div className="h-10 w-[1px] bg-brand-secondary/5 hidden lg:block mx-2"></div>
          <div className="flex bg-brand-bg p-1.5 rounded-2xl">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-brand-primary' : 'text-brand-secondary/30'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-brand-primary' : 'text-brand-secondary/30'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className={viewMode === 'grid' ? "grid md:grid-cols-2 lg:grid-cols-4 gap-8" : "space-y-4"}>
        {pets.map((pet) => (
          <motion.div 
            key={pet.id}
            whileHover={{ y: -8 }}
            className={`bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden group cursor-pointer ${viewMode === 'list' ? 'flex items-center' : ''}`}
          >
            <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'aspect-[4/5]' : 'w-48 aspect-square shrink-0'}`}>
              <img src={pet.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[10px] font-bold text-brand-secondary shadow-sm">
                  {pet.loc}
                </div>
              </div>
              <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-brand-secondary hover:text-red-500 transition-colors shadow-sm active:scale-90">
                <Heart className="w-5 h-5" />
              </button>
              {hasMatch && (
                <div className="absolute inset-x-4 bottom-4 bg-brand-primary/90 backdrop-blur-md p-4 rounded-3xl text-white shadow-xl shadow-brand-primary/20 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Seu Match</p>
                      <p className="text-2xl font-display font-bold">{pet.match}%</p>
                    </div>
                    <Sparkles className="w-6 h-6 opacity-30" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-8 flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-display font-bold text-brand-secondary">{pet.name}</h3>
                <span className="bg-brand-bg px-2 py-1 rounded text-[10px] font-bold text-brand-secondary/40 uppercase">{pet.breed}</span>
              </div>
              <p className="text-sm text-brand-secondary/40 font-medium mb-6">{pet.age} • {pet.size} • {pet.gender === 'male' ? 'Macho' : 'Fêmea'}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-brand-bg rounded-2xl p-3">
                  <p className="text-[8px] font-bold text-brand-secondary/30 uppercase mb-1">Energia</p>
                  <p className="text-xs font-bold text-brand-secondary/80">{pet.energy}</p>
                </div>
                <div className="bg-brand-bg rounded-2xl p-3">
                  <p className="text-[8px] font-bold text-brand-secondary/30 uppercase mb-1">Saúde</p>
                  <p className="text-xs font-bold text-brand-secondary/80">Check-up OK</p>
                </div>
              </div>

              <button className="w-full bg-brand-bg text-brand-primary py-4 rounded-2xl font-bold hover:bg-brand-primary hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2">
                Conhecer {pet.name} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const UserFavorites = () => (
  <div className="space-y-10">
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-display font-bold">Meus Favoritos</h1>
        <p className="text-brand-secondary/60 mt-1">Pet que tocaram seu coração.</p>
      </div>
      <button className="text-sm font-bold text-brand-primary hover:underline">Limpar Favoritos</button>
    </div>

    <div className="grid md:grid-cols-3 gap-8 opacity-40 grayscale flex flex-col items-center justify-center py-20 text-center">
      <div className="bg-brand-bg w-24 h-24 rounded-full flex items-center justify-center mb-6">
        <Star className="w-10 h-10 text-brand-secondary/20" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Sua lista está vazia</h3>
      <p className="text-brand-secondary/60">Comece a explorar e favorite os pets que você mais gostar.</p>
    </div>
  </div>
);

const UserAdoptions = () => (
  <div className="space-y-10">
    <div>
      <h1 className="text-4xl font-display font-bold">Minhas Adoções</h1>
      <p className="text-brand-secondary/60 mt-1">Acompanhe o caminho até seu novo companheiro.</p>
    </div>

    <div className="space-y-6">
      {[
        { pet: 'Bento', ong: 'Patas Felizes', status: 'interview', date: 'Há 2 dias', progress: 45 },
        { pet: 'Luna', ong: 'Vida Animal', status: 'pendent', date: 'Há 1 semana', progress: 15 }
      ].map((ad, i) => (
        <div key={i} className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-3xl bg-brand-bg overflow-hidden shrink-0">
            <img src={`https://picsum.photos/seed/${ad.pet}/200/200`} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  Adoção do {ad.pet} 
                  <span className="text-sm font-normal text-brand-secondary/40 ml-2">com {ad.ong}</span>
                </h3>
                <p className="text-xs text-brand-secondary/40 font-bold uppercase mt-1">Atualizado em {ad.date}</p>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${
                ad.status === 'interview' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
              }`}>
                {ad.status === 'interview' ? 'Entrevista Agendada' : 'Análise de Perfil'}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-brand-secondary/60">
                <span>Progresso do Processo</span>
                <span>{ad.progress}%</span>
              </div>
              <div className="h-2 bg-brand-bg rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${ad.progress}%` }}
                  className="h-full bg-brand-primary"
                />
              </div>
            </div>

            <div className="flex items-center gap-8 pt-2">
              <div className="flex items-center gap-2 text-[10px] font-bold text-brand-primary opacity-40">
                <CheckCircle2 className="w-4 h-4" /> Cadastro Realizado
              </div>
              <div className={`flex items-center gap-2 text-[10px] font-bold ${ad.progress >= 40 ? 'text-brand-primary' : 'text-brand-secondary/20'}`}>
                <Clock className="w-4 h-4" /> Entrevista Pendente
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-brand-secondary/20">
                <MapPin className="w-4 h-4" /> Visita Domiciliar
              </div>
            </div>
          </div>

          <button className="px-8 py-4 bg-brand-bg rounded-2xl font-bold text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
            Ver Detalhes
          </button>
        </div>
      ))}
    </div>

    <div className="bg-brand-primary/5 p-8 rounded-[40px] border border-brand-primary/10 flex items-center gap-6">
      <div className="bg-brand-primary w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 shrink-0">
        <MessageCircle className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-lg text-brand-secondary">Tem dúvidas sobre o processo?</h4>
        <p className="text-sm text-brand-secondary/60">Nosso guia completo de adoção consciente pode te ajudar com cada passo.</p>
      </div>
      <button className="ml-auto text-brand-primary font-bold hover:underline shrink-0">Ler Guia</button>
    </div>
  </div>
);
const AdminUsers = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-4xl font-display font-bold">Usuários</h1>
        <p className="text-brand-secondary/60 mt-1">Gerencie adotantes e moderadores da plataforma.</p>
      </div>
      <div className="flex gap-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary/30" />
          <input type="text" placeholder="Buscar usuário..." className="bg-white border border-brand-secondary/10 rounded-xl pl-12 pr-6 py-2.5 text-sm w-64 outline-none focus:ring-2 focus:ring-brand-primary/20" />
        </div>
        <button className="bg-brand-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform truncate">Convidar Moderador</button>
      </div>
    </div>

    <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-brand-bg/50 border-b border-brand-secondary/5">
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Usuário</th>
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Perfil</th>
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Cidade</th>
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Adoções</th>
            <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider text-right">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-secondary/5">
          {[
            { name: 'Ana Silva', email: 'ana@gmail.com', city: 'Curitiba, PR', adoptions: 1, type: 'Adotante' },
            { name: 'João Pedro', email: 'jp@outlook.com', city: 'São Paulo, SP', adoptions: 0, type: 'Adotante' },
            { name: 'Ricardo M.', email: 'ricardo@petmatch.com', city: 'Curitiba, PR', adoptions: 0, type: 'Admin' },
            { name: 'Juliana Mendes', email: 'ju.mendes@uol.com.br', type: 'Moderador', city: 'Belo Horizonte, MG', adoptions: 0 },
            { name: 'Marcos Souza', email: 'marcos.s@outlook.com', type: 'Adotante', city: 'Porto Alegre, RS', adoptions: 0 },
          ].map((user, i) => (
            <tr key={i} className="hover:bg-brand-bg/30 transition-colors group">
              <td className="px-8 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-bg rounded-xl flex items-center justify-center font-bold text-brand-secondary">{user.name[0]}</div>
                  <div>
                    <p className="font-bold text-sm">{user.name}</p>
                    <p className="text-xs text-brand-secondary/40">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-8 py-5">
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                  user.type === 'Admin' ? 'bg-purple-100 text-purple-700' : 
                  user.type === 'Moderador' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {user.type}
                </span>
              </td>
              <td className="px-8 py-5 text-sm text-brand-secondary/60">{user.city || 'N/A'}</td>
              <td className="px-8 py-5 text-sm font-bold text-brand-secondary/80 text-center">{user.adoptions ?? 0}</td>
              <td className="px-8 py-5 text-right">
                <button className="p-2 hover:bg-brand-bg rounded-lg text-brand-secondary/40 transition-colors"><MoreVertical className="w-4 h-4" /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const AdminAnalytics = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-4xl font-display font-bold">Relatórios e IA</h1>
        <p className="text-brand-secondary/60 mt-1">Insights avançados sobre o comportamento dos usuários.</p>
      </div>
      <div className="flex gap-3">
        <button className="bg-white border border-brand-secondary/10 px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-brand-bg transition-colors">
          <Download className="w-4 h-4" />
          Baixar PDF
        </button>
      </div>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm">
          <h3 className="font-bold text-xl mb-8 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-brand-primary" /> Eficiência do Match
          </h3>
          <div className="h-80 w-full flex items-end justify-between px-4 pb-10 border-b border-brand-secondary/5 gap-4">
            {[85, 92, 78, 95, 88, 94, 91].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                <div className="w-full bg-brand-primary/10 rounded-2xl group-hover:bg-brand-primary transition-all relative" style={{ height: `${v}%` }}>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-brand-secondary text-white text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity font-bold whitespace-nowrap">
                    {v}% de acerto
                  </div>
                </div>
                <span className="text-[10px] font-bold text-brand-secondary/40 uppercase">Sem {i+1}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-8">
             <div>
               <p className="text-[10px] font-bold text-brand-secondary/40 uppercase mb-1">Taxa média</p>
               <p className="text-2xl font-display font-bold">89.4%</p>
             </div>
             <div>
               <p className="text-[10px] font-bold text-brand-secondary/40 uppercase mb-1">Retenção</p>
               <p className="text-2xl font-display font-bold">76%</p>
             </div>
             <div>
               <p className="text-[10px] font-bold text-brand-secondary/40 uppercase mb-1">Satisfação</p>
               <p className="text-2xl font-display font-bold">4.9/5</p>
             </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm">
          <h3 className="font-bold text-xl mb-8">Adoções por Categoria</h3>
          <div className="space-y-6">
            {[
              { label: 'Cachorros Adultos', val: 45, color: 'bg-brand-primary' },
              { label: 'Filhotes de Cachorro', val: 30, color: 'bg-blue-500' },
              { label: 'Gatos Adultos', val: 15, color: 'bg-purple-500' },
              { label: 'Gatinhos', val: 10, color: 'bg-pink-500' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-brand-secondary/60">{item.label}</span>
                  <span>{item.val}%</span>
                </div>
                <div className="h-3 bg-brand-bg rounded-full overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-brand-primary text-white p-8 rounded-[40px] shadow-xl shadow-brand-primary/20">
          <Sparkles className="w-8 h-8 mb-6 opacity-40" />
          <h3 className="text-xl font-bold mb-4">AI Insights</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-8">
            Nossa IA detectou um aumento de 24% na procura por cães idosos após a última campanha regional. Recomendamos sugerir ONGs com foco em geriátricos para novos usuários.
          </p>
          <button className="w-full py-4 bg-white text-brand-primary rounded-2xl font-bold text-sm hover:scale-105 transition-transform shadow-xl">Baixar Relatório IA</button>
        </div>

        <div className="bg-brand-secondary text-white rounded-[40px] p-8">
          <h3 className="text-xl font-bold mb-4">Impacto 2024</h3>
          <p className="text-white/60 text-sm mb-6">Resumo consolidado de vidas salvas e doações repassadas.</p>
          <div className="space-y-4">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-2xl font-display font-bold">12k+</p>
              <p className="text-[10px] uppercase font-bold opacity-40 mt-1">Vidas Salvas</p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-2xl font-display font-bold">R$ 45k</p>
              <p className="text-[10px] uppercase font-bold opacity-40 mt-1">Doações</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AdminModeration = ({ onApprove }: { onApprove: () => void }) => {
  const [activeSubTab, setActiveSubTab] = useState<'ongs' | 'pets'>('ongs');

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold">Fila de Moderação</h1>
          <p className="text-brand-secondary/60 mt-1">Validação rigorosa de novos cadastros na rede.</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-brand-secondary/5">
          <button 
            onClick={() => setActiveSubTab('ongs')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeSubTab === 'ongs' ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-brand-secondary/40 hover:bg-brand-bg'}`}
          >
            ONGs (3)
          </button>
          <button 
            onClick={() => setActiveSubTab('pets')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${activeSubTab === 'pets' ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-brand-secondary/40 hover:bg-brand-bg'}`}
          >
            Pets (12)
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {activeSubTab === 'ongs' ? (
          [
            { name: 'Abrigo Patas Felizes', doc: 'Estatuto_Social.pdf', resp: 'Ricardo Oliveira', date: 'Há 2h' },
            { name: 'Vida Animal', doc: 'CNPJ_Regular.pdf', resp: 'Mariana Costa', date: 'Há 5h' },
            { name: 'Amigos dos Bigodes', doc: 'Comprovante_Sede.pdf', resp: 'João Silva', date: 'Há 1d' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm hover:border-brand-primary/20 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary font-bold text-xl">{item.name[0]}</div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{item.name}</h3>
                    <p className="text-xs text-brand-secondary/40">Responsável: {item.resp}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-brand-secondary/20 uppercase bg-brand-bg px-2 py-1 rounded">{item.date}</span>
              </div>

              <div className="bg-brand-bg p-6 rounded-3xl mb-8 flex items-center justify-between group-hover:bg-brand-primary/5 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-brand-secondary/40" />
                  <span className="text-sm font-bold text-brand-secondary/70">{item.doc}</span>
                </div>
                <button className="text-brand-primary p-2 hover:bg-white rounded-lg transition-all"><Download className="w-4 h-4" /></button>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={onApprove}
                  className="flex-1 bg-brand-primary text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-brand-primary/20 hover:scale-[1.02] transition-all"
                >
                  Aprovar ONG
                </button>
                <button className="flex-1 bg-red-50 text-red-500 py-4 rounded-2xl font-bold text-sm hover:bg-red-100 transition-colors">
                  Recusar
                </button>
              </div>
            </div>
          ))
        ) : (
          [
            { name: 'Bento', breed: 'Bulldog', ong: 'Patas Felizes', date: 'Há 10m', img: 'https://picsum.photos/seed/moddog1/400/400' },
            { name: 'Luna', breed: 'Siamês', ong: 'Vida Animal', date: 'Há 1h', img: 'https://picsum.photos/seed/modcat1/400/400' }
          ].map((pet, i) => (
            <div key={i} className="bg-white p-6 rounded-[40px] border border-brand-secondary/5 shadow-sm flex gap-6 group hover:border-brand-primary/20 transition-all">
              <div className="w-32 h-32 rounded-3xl overflow-hidden shrink-0">
                <img src={pet.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1 py-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-lg">{pet.name}</h3>
                  <span className="text-[10px] font-bold text-brand-secondary/20 uppercase tracking-widest">{pet.date}</span>
                </div>
                <p className="text-xs text-brand-secondary/40 font-bold uppercase mb-4">{pet.breed} • {pet.ong}</p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-brand-primary text-white py-2.5 rounded-xl text-[10px] font-bold shadow-md shadow-brand-primary/10">Aprovar</button>
                  <button className="flex-1 bg-brand-bg text-brand-secondary/40 py-2.5 rounded-xl text-[10px] font-bold">Ver Detalhes</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-[40px] flex gap-6 items-center">
        <div className="bg-yellow-100 p-4 rounded-2xl text-yellow-600 shadow-sm"><AlertTriangle className="w-6 h-6" /></div>
        <div>
          <h4 className="font-bold text-yellow-800">Atenção na Análise</h4>
          <p className="text-sm text-yellow-700/80 leading-relaxed">Certifique-se de validar os documentos anexados antes da aprovação. ONGs aprovadas ganham visibilidade total no sistema e podem começar a processar adoções.</p>
        </div>
      </div>
    </div>
  );
};

const AdminPets = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-4xl font-display font-bold">Pets Globais</h1>
        <p className="text-brand-secondary/60 mt-1">Monitore todos os animais cadastrados na rede.</p>
      </div>
      <div className="flex gap-3">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary/30" />
          <input type="text" placeholder="Buscar pet..." className="bg-white border border-brand-secondary/10 rounded-xl pl-12 pr-6 py-3 text-sm w-64 outline-none focus:ring-2 focus:ring-brand-primary/20" />
        </div>
        <button className="bg-white border border-brand-secondary/10 p-3 rounded-xl hover:bg-brand-bg transition-colors"><Filter className="w-5 h-5 text-brand-secondary/40" /></button>
      </div>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {[
        { name: 'Thor', type: 'Cachorro', breed: 'Golden Retriever', ong: 'Patas Felizes', img: 'https://picsum.photos/seed/dog1/400/400' },
        { name: 'Luna', type: 'Gato', breed: 'Siamês', ong: 'Vida Animal', img: 'https://picsum.photos/seed/cat1/400/400' },
        { name: 'Max', type: 'Cachorro', breed: 'Vira-lata', ong: 'Cão Sem Dono', img: 'https://picsum.photos/seed/dog2/400/400' },
        { name: 'Mel', type: 'Gato', breed: 'Persa', ong: 'Gatos de Rua', img: 'https://picsum.photos/seed/cat2/400/400' },
        { name: 'Bento', type: 'Cachorro', breed: 'Bulldog', ong: 'Patas Felizes', img: 'https://picsum.photos/seed/dog3/400/400' },
        { name: 'Simba', type: 'Gato', breed: 'SRD', ong: 'Vida Animal', img: 'https://picsum.photos/seed/cat3/400/400' },
        { name: 'Pipoca', type: 'Cachorro', breed: 'Poodle', ong: 'Protetores SP', img: 'https://picsum.photos/seed/dog4/400/400' },
        { name: 'Nina', type: 'Gato', breed: 'Maine Coon', ong: 'Gatos de Rua', img: 'https://picsum.photos/seed/cat4/400/400' },
        { name: 'Fred', type: 'Cachorro', breed: 'Beagle', ong: 'Cão Sem Dono', img: 'https://picsum.photos/seed/dog5/400/400' },
        { name: 'Zeca', type: 'Cachorro', breed: 'Labrador', ong: 'Patas Felizes', img: 'https://picsum.photos/seed/dog6/400/400' },
      ].map((pet, i) => (
        <div key={i} className="bg-white rounded-3xl border border-brand-secondary/5 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
          <div className="aspect-square relative overflow-hidden">
            <img src={pet.img} alt={pet.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-brand-secondary">{pet.type}</div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-sm">{pet.name}</h3>
            <p className="text-[10px] text-brand-secondary/40 font-bold uppercase mt-1">{pet.breed}</p>
            <div className="mt-3 pt-3 border-t border-brand-secondary/5 flex items-center gap-2">
              <div className="w-5 h-5 bg-brand-primary/10 rounded-md flex items-center justify-center text-[8px] font-bold text-brand-primary">{pet.ong[0]}</div>
              <p className="text-[10px] text-brand-secondary/60 font-medium truncate">{pet.ong}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AdminReports = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-4xl font-display font-bold">Denúncias</h1>
        <p className="text-brand-secondary/60 mt-1">Analise denúncias de maus-tratos ou perfis falsos.</p>
      </div>
      <div className="flex gap-3">
        <select className="bg-white border border-brand-secondary/10 rounded-xl px-4 py-3 text-sm font-bold outline-none">
          <option>Todas as Denúncias</option>
          <option>Urgentes</option>
          <option>Em Análise</option>
          <option>Resolvidas</option>
        </select>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      {[
        { title: 'Possível Perfil Falso de ONG', user: 'Anônimo', target: 'Abrigo Amigo Fiel', date: 'Há 15 min', severity: 'Média', desc: 'A ONG utiliza fotos de outros abrigos e não possui CNPJ válido informado.' },
        { title: 'Maus-tratos relatados em adoção', user: 'Maria Silva', target: 'Adotante: João P.', date: 'Há 2 horas', severity: 'Alta', desc: 'O adotante não envia notícias do animal há 3 meses e vizinhos relataram barulhos suspeitos.' },
        { title: 'Anúncio de venda de animais', user: 'Pedro H.', target: 'Perfil: Canil Gold', date: 'Ontem', severity: 'Alta', desc: 'A plataforma é exclusiva para adoção, mas o perfil está cobrando taxas abusivas.' },
        { title: 'Linguagem imprópria em chat', user: 'Sistema (Auto)', target: 'Usuário: Carlos M.', date: 'Ontem', severity: 'Baixa', desc: 'O filtro automático detectou palavras ofensivas em conversas com ONGs.' },
      ].map((report, i) => (
        <div key={i} className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-2 h-full ${
            report.severity === 'Alta' ? 'bg-red-500' : 
            report.severity === 'Média' ? 'bg-yellow-500' : 'bg-blue-500'
          }`}></div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider ${
                report.severity === 'Alta' ? 'bg-red-50 text-red-600' : 
                report.severity === 'Média' ? 'bg-yellow-50 text-yellow-600' : 'bg-blue-50 text-blue-600'
              }`}>
                Prioridade {report.severity}
              </span>
              <h3 className="font-bold text-lg mt-2">{report.title}</h3>
            </div>
            <p className="text-xs text-brand-secondary/40 font-bold">{report.date}</p>
          </div>
          <p className="text-sm text-brand-secondary/60 leading-relaxed mb-6">{report.desc}</p>
          <div className="flex items-center justify-between pt-6 border-t border-brand-secondary/5">
            <div className="text-xs">
              <span className="text-brand-secondary/40">Alvo: </span>
              <span className="font-bold text-brand-secondary/80">{report.target}</span>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-brand-bg text-brand-secondary text-xs font-bold rounded-xl hover:bg-brand-secondary/5 transition-colors">Ignorar</button>
              <button className="px-4 py-2 bg-brand-primary text-white text-xs font-bold rounded-xl hover:scale-105 transition-transform">Investigar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AdminFinancial = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-4xl font-display font-bold">Financeiro e Planos</h1>
        <p className="text-brand-secondary/60 mt-1">Gestão de assinaturas de ONGs e doações da rede.</p>
      </div>
      <div className="flex gap-3">
        <button className="bg-brand-primary text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform">Configurar Taxas</button>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-green-50 text-green-600 rounded-2xl"><DollarSign className="w-6 h-6" /></div>
          <h3 className="font-bold text-lg">Receita Total</h3>
        </div>
        <p className="text-4xl font-display font-bold">R$ 124.500,00</p>
        <p className="text-xs text-brand-secondary/40 font-bold uppercase mt-2 tracking-wider">+15% em relação ao mês anterior</p>
      </div>

      <div className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><CreditCard className="w-6 h-6" /></div>
          <h3 className="font-bold text-lg">Assinaturas Ativas</h3>
        </div>
        <p className="text-4xl font-display font-bold">156</p>
        <p className="text-xs text-brand-secondary/40 font-bold uppercase mt-2 tracking-wider">ONGs no Plano Premium</p>
      </div>

      <div className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><Globe className="w-6 h-6" /></div>
          <h3 className="font-bold text-lg">Doações Globais</h3>
        </div>
        <p className="text-4xl font-display font-bold">R$ 42.180</p>
        <p className="text-xs text-brand-secondary/40 font-bold uppercase mt-2 tracking-wider">Repassado para abrigos</p>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-brand-secondary/5 flex justify-between items-center">
          <h3 className="font-bold text-xl">Planos Disponíveis</h3>
          <button className="text-brand-primary text-sm font-bold hover:underline">Editar Planos</button>
        </div>
        <div className="p-8 space-y-6">
          {[
            { name: 'Plano Gratuito', price: 'R$ 0', features: ['Até 10 pets', 'Suporte via FAQ', 'Perfil básico'], active: 28 },
            { name: 'Plano Essencial', price: 'R$ 49/mês', features: ['Até 50 pets', 'Suporte via Chat', 'Destaque em buscas'], active: 112 },
            { name: 'Plano Ilimitado', price: 'R$ 99/mês', features: ['Pets ilimitados', 'Suporte Prioritário', 'Relatórios avançados'], active: 44 },
          ].map((plan, i) => (
            <div key={i} className="flex items-center justify-between p-6 bg-brand-bg rounded-3xl border border-brand-secondary/5">
              <div>
                <p className="font-bold text-lg">{plan.name}</p>
                <p className="text-brand-primary font-bold">{plan.price}</p>
                <div className="flex gap-2 mt-2">
                  {plan.features.map((f, j) => (
                    <span key={j} className="text-[8px] bg-white px-2 py-0.5 rounded-full font-bold text-brand-secondary/40 uppercase">{f}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-display font-bold">{plan.active}</p>
                <p className="text-[10px] text-brand-secondary/40 font-bold uppercase">ONGs</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-brand-secondary/5 flex justify-between items-center">
          <h3 className="font-bold text-xl">Transações Recentes</h3>
          <button className="text-brand-primary text-sm font-bold hover:underline">Ver Extrato</button>
        </div>
        <div className="divide-y divide-brand-secondary/5">
          {[
            { ong: 'Patas Felizes', type: 'Assinatura', val: '+ R$ 99,00', date: 'Hoje, 10:45' },
            { ong: 'Vida Animal', type: 'Doação Repasse', val: '- R$ 450,00', date: 'Hoje, 09:12' },
            { ong: 'Cão Sem Dono', type: 'Assinatura', val: '+ R$ 49,00', date: 'Ontem, 18:30' },
            { ong: 'Gatos de Rua', type: 'Assinatura', val: '+ R$ 99,00', date: 'Ontem, 14:20' },
            { ong: 'Protetores SP', type: 'Assinatura', val: '+ R$ 49,00', date: '08/04, 11:05' },
          ].map((tx, i) => (
            <div key={i} className="p-6 flex items-center justify-between hover:bg-brand-bg transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${tx.val.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                  {tx.val.startsWith('+') ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-bold text-sm">{tx.ong}</p>
                  <p className="text-xs text-brand-secondary/40">{tx.type} • {tx.date}</p>
                </div>
              </div>
              <p className={`font-bold ${tx.val.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{tx.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AdminSettings = () => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-4xl font-display font-bold">Configurações</h1>
        <p className="text-brand-secondary/60 mt-1">Ajustes globais do sistema e regras de negócio.</p>
      </div>
      <button className="bg-brand-primary text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform">Salvar Alterações</button>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-4">
        {[
          { id: 'general', label: 'Geral', icon: <Settings className="w-5 h-5" /> },
          { id: 'security', label: 'Segurança', icon: <ShieldCheck className="w-5 h-5" /> },
          { id: 'notifications', label: 'Notificações', icon: <Bell className="w-5 h-5" /> },
          { id: 'api', label: 'API & Integrações', icon: <Globe className="w-5 h-5" /> },
          { id: 'legal', label: 'Jurídico', icon: <FileText className="w-5 h-5" /> },
        ].map((item) => (
          <button key={item.id} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
            item.id === 'general' ? 'bg-white shadow-sm text-brand-primary' : 'text-brand-secondary/40 hover:bg-white/50'
          }`}>
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm space-y-8">
          <div>
            <h3 className="font-bold text-xl mb-6">Informações da Plataforma</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Nome do Sistema</label>
                <input type="text" defaultValue="PetMatch Brasil" className="w-full bg-brand-bg border-none rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">E-mail de Suporte</label>
                <input type="email" defaultValue="suporte@petmatch.com.br" className="w-full bg-brand-bg border-none rounded-xl px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-brand-primary/20" />
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-secondary/5">
            <h3 className="font-bold text-xl mb-6">Regras de Adoção</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-brand-bg rounded-3xl">
                <div>
                  <p className="font-bold">Verificação de Documentos Obrigatória</p>
                  <p className="text-xs text-brand-secondary/40">Exigir CPF/CNPJ para qualquer cadastro de ONG.</p>
                </div>
                <div className="w-12 h-6 bg-brand-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 bg-brand-bg rounded-3xl">
                <div>
                  <p className="font-bold">Moderação Automática de Fotos</p>
                  <p className="text-xs text-brand-secondary/40">Utilizar IA para detectar imagens impróprias.</p>
                </div>
                <div className="w-12 h-6 bg-brand-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 bg-brand-bg rounded-3xl">
                <div>
                  <p className="font-bold">Permitir Doações Diretas</p>
                  <p className="text-xs text-brand-secondary/40">Habilitar botão de doação nos perfis das ONGs.</p>
                </div>
                <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-secondary/5">
            <h3 className="font-bold text-xl mb-6 text-red-500">Zona de Perigo</h3>
            <div className="p-6 border-2 border-red-100 rounded-3xl flex items-center justify-between bg-red-50/30">
              <div>
                <p className="font-bold text-red-600">Manutenção do Sistema</p>
                <p className="text-xs text-red-400">Colocar a plataforma em modo offline para atualizações.</p>
              </div>
              <button className="px-6 py-3 bg-red-500 text-white rounded-xl text-xs font-bold hover:bg-red-600 transition-colors">Ativar Modo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OngOverview = ({ onNewPet }: { onNewPet: () => void }) => (
  <>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
      <div>
        <h1 className="text-4xl font-display font-bold">Painel da ONG</h1>
        <p className="text-brand-secondary/60 mt-1">Gerencie seus animais e pedidos de adoção.</p>
      </div>
      <button 
        onClick={onNewPet}
        className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-brand-primary/20"
      >
        <Plus className="w-5 h-5" /> Cadastrar Novo Pet
      </button>
    </div>

    <div className="grid md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white p-8 rounded-[32px] border border-brand-secondary/5 shadow-sm">
        <p className="text-sm font-bold text-brand-secondary/40 uppercase mb-1">Pets Ativos</p>
        <p className="text-4xl font-display font-bold">24</p>
      </div>
      <div className="bg-white p-8 rounded-[32px] border border-brand-secondary/5 shadow-sm">
        <p className="text-sm font-bold text-brand-secondary/40 uppercase mb-1">Novos Pedidos</p>
        <p className="text-4xl font-display font-bold text-brand-primary">12</p>
      </div>
      <div className="bg-white p-8 rounded-[32px] border border-brand-secondary/5 shadow-sm">
        <p className="text-sm font-bold text-brand-secondary/40 uppercase mb-1">Adoções este mês</p>
        <p className="text-4xl font-display font-bold text-green-500">8</p>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-brand-secondary/5 flex justify-between items-center">
          <h3 className="font-bold text-xl">Meus Animais</h3>
          <button className="text-brand-primary text-sm font-bold hover:underline">Ver Todos</button>
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          {[
            { name: 'Bento', type: 'Cão • Adulto', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e' },
            { name: 'Luna', type: 'Gato • Filhote', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba' }
          ].map((pet, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-40 rounded-2xl overflow-hidden mb-3">
                <img src={pet.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md p-2 rounded-lg"><Eye className="w-4 h-4" /></div>
              </div>
              <p className="font-bold">{pet.name}</p>
              <p className="text-xs text-brand-secondary/40">{pet.type}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-brand-secondary/5 flex justify-between items-center">
          <h3 className="font-bold text-xl">Pedidos de Adoção</h3>
          <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded-full">3 NOVOS</span>
        </div>
        <div className="divide-y divide-brand-secondary/5">
          {[
            { user: 'Ana Silva', pet: 'Bento', match: '98%', date: 'Há 10 min' },
            { user: 'Carlos Lima', pet: 'Luna', match: '85%', date: 'Há 1 hora' },
            { user: 'Mariana Costa', pet: 'Bento', match: '92%', date: 'Há 3 horas' }
          ].map((req, i) => (
            <div key={i} className="p-6 flex items-center justify-between hover:bg-brand-bg transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-bg rounded-full flex items-center justify-center font-bold text-brand-secondary">{req.user[0]}</div>
                <div>
                  <p className="text-sm font-bold">{req.user} <span className="text-brand-secondary/40 font-normal">quer adotar</span> {req.pet}</p>
                  <p className="text-[10px] font-bold text-brand-primary uppercase">Match: {req.match}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-brand-primary/10 rounded-lg transition-colors"><ArrowRight className="w-5 h-5 text-brand-primary" /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

const OngPets = ({ onNewPet }: { onNewPet: () => void }) => (
  <div className="space-y-8">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-4xl font-display font-bold">Meus Pets</h1>
        <p className="text-brand-secondary/60 mt-1">Gerencie os animais disponíveis para adoção.</p>
      </div>
      <button 
        onClick={onNewPet}
        className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-brand-primary/20"
      >
        <Plus className="w-5 h-5" /> Novo Pet
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white rounded-3xl border border-brand-secondary/5 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
          <div className="aspect-square relative overflow-hidden">
            <img src={`https://picsum.photos/seed/pet${i}/400/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-brand-secondary">Cachorro</div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-sm">Pet Nome {i}</h3>
            <p className="text-[10px] text-brand-secondary/40 font-bold uppercase mt-1">Vira-lata • Adulto</p>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2 bg-brand-bg text-brand-secondary text-[10px] font-bold rounded-lg hover:bg-brand-secondary/5 transition-colors">Editar</button>
              <button className="px-3 py-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OngNewPet = ({ onCancel }: { onCancel: () => void }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [petData, setPetData] = useState({
    name: '',
    species: 'dog',
    breed: '',
    age: 'young',
    size: 'medium',
    gender: 'male',
    description: '',
    energy: 3,
    vaccinated: 'yes',
    castrated: 'yes',
    microchip: 'no',
    compatibility: { kids: true, dogs: true, cats: false },
    traits: [] as string[],
    requirements: [] as string[],
    weight: '',
    rescueDate: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulação de salvamento
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => {
        onCancel();
      }, 2000);
    }, 1500);
  };

  const speciesOptions = [
    { id: 'dog', label: 'Cachorro', icon: <PawPrint className="w-5 h-5" /> },
    { id: 'cat', label: 'Gato', icon: <Cat className="w-5 h-5" /> },
    { id: 'bird', label: 'Pássaro', icon: <Bird className="w-5 h-5" /> },
    { id: 'rabbit', label: 'Coelho', icon: <Rabbit className="w-5 h-5" /> },
    { id: 'hamster', label: 'Roedor', icon: <Rat className="w-5 h-5" /> },
    { id: 'fish', label: 'Peixe', icon: <Fish className="w-5 h-5" /> },
    { id: 'other', label: 'Outro', icon: <Plus className="w-5 h-5" /> },
  ];

  const toggleTrait = (trait: string) => {
    setPetData(prev => ({
      ...prev,
      traits: prev.traits.includes(trait) 
        ? prev.traits.filter(t => t !== trait)
        : [...prev.traits, trait]
    }));
  };

  const toggleRequirement = (req: string) => {
    setPetData(prev => ({
      ...prev,
      requirements: prev.requirements.includes(req)
        ? prev.requirements.filter(r => r !== req)
        : [...prev.requirements, req]
    }));
  };

  if (showSuccess) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-green-100 text-green-600 rounded-[40px] flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h2 className="text-3xl font-display font-bold mb-2">Pet Publicado com Sucesso!</h2>
        <p className="text-brand-secondary/60">O perfil de {petData.name || 'seu pet'} agora está visível para milhares de adotantes.</p>
        <p className="mt-8 text-xs text-brand-secondary/30 font-bold uppercase tracking-widest animate-pulse">Redirecionando...</p>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 pb-20"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onCancel}
            className="p-3 bg-white rounded-2xl border border-brand-secondary/5 text-brand-secondary/40 hover:text-brand-primary transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <div>
            <h1 className="text-4xl font-display font-bold">Cadastrar Novo Pet</h1>
            <p className="text-brand-secondary/60 mt-1">Preencha todos os detalhes para encontrar o match perfeito.</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-xl text-xs font-bold">
          <ShieldCheck className="w-4 h-4" />
          Cadastro Verificado
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          {/* Informações Básicas */}
          <div className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm space-y-8">
            <div className="flex items-center justify-between pb-2 border-b border-brand-secondary/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-bg rounded-lg text-brand-primary"><PawPrint className="w-4 h-4" /></div>
                <h3 className="font-bold text-lg">Informações Básicas</h3>
              </div>
              <span className="text-[10px] font-bold text-brand-secondary/20 uppercase tracking-widest">Passo 01/03</span>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Espécie do Animal</label>
                <div className="grid grid-cols-2 lg:grid-cols-7 gap-3">
                  {speciesOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPetData({...petData, species: opt.id})}
                      className={`p-4 rounded-3xl border-2 font-bold text-xs flex flex-col items-center justify-center gap-3 transition-all ${
                        petData.species === opt.id 
                          ? 'border-brand-primary bg-brand-primary/5 text-brand-primary shadow-lg shadow-brand-primary/10 scale-105' 
                          : 'border-brand-secondary/5 bg-brand-bg text-brand-secondary/40 hover:border-brand-secondary/10'
                      }`}
                    >
                      <div className={`p-2 rounded-xl transition-colors ${petData.species === opt.id ? 'bg-brand-primary text-white' : 'bg-white'}`}>
                        {opt.icon}
                      </div>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Nome do Pet</label>
                  <input 
                    type="text" 
                    required 
                    value={petData.name}
                    onChange={(e) => setPetData({...petData, name: e.target.value})}
                    placeholder="Ex: Bento, Luna..." 
                    className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 transition-all font-medium" 
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Gênero</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['male', 'female'].map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setPetData({...petData, gender: g})}
                        className={`py-4 rounded-2xl border-2 font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                          petData.gender === g 
                            ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' 
                            : 'border-brand-secondary/5 bg-brand-bg text-brand-secondary/40 hover:border-brand-secondary/10'
                        }`}
                      >
                        {g === 'male' ? 'Macho' : 'Fêmea'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Raça</label>
                  <input 
                    type="text" 
                    required 
                    value={petData.breed}
                    onChange={(e) => setPetData({...petData, breed: e.target.value})}
                    placeholder="Ex: Vira-lata, Golden..." 
                    className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 font-medium" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Idade Aproximada</label>
                  <select 
                    required 
                    value={petData.age}
                    onChange={(e) => setPetData({...petData, age: e.target.value})}
                    className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 appearance-none font-medium cursor-pointer"
                  >
                    <option value="puppy">Filhote (0-1 ano)</option>
                    <option value="young">Jovem (1-3 anos)</option>
                    <option value="adult">Adulto (3-7 anos)</option>
                    <option value="senior">Sênior (7+ anos)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Porte</label>
                  <select 
                    required 
                    value={petData.size}
                    onChange={(e) => setPetData({...petData, size: e.target.value})}
                    className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 appearance-none font-medium cursor-pointer"
                  >
                    <option value="small">Pequeno</option>
                    <option value="medium">Médio</option>
                    <option value="large">Grande</option>
                    <option value="extra-large">Gigante</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Peso Aproximado (kg)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      step="0.1"
                      min="0"
                      required
                      value={petData.weight}
                      onChange={(e) => setPetData({...petData, weight: e.target.value})}
                      placeholder="Ex: 12.5" 
                      className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 font-medium pr-12" 
                    />
                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-secondary/30 font-bold text-xs">kg</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Descrição e História</label>
                <textarea 
                  rows={5} 
                  required 
                  value={petData.description}
                  onChange={(e) => setPetData({...petData, description: e.target.value})}
                  placeholder="Conte sobre a personalidade, como foi resgatado e o que ele busca em um lar..." 
                  className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 resize-none font-medium" 
                />
              </div>
            </div>
          </div>

          {/* Saúde e Comportamento */}
          <div className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm space-y-10">
            <div className="flex items-center justify-between pb-2 border-b border-brand-secondary/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-bg rounded-lg text-brand-primary"><ShieldCheck className="w-4 h-4" /></div>
                <h3 className="font-bold text-lg">Saúde e Comportamento</h3>
              </div>
              <span className="text-[10px] font-bold text-brand-secondary/20 uppercase tracking-widest">Passo 02/03</span>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h4 className="text-sm font-bold text-brand-secondary/80 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-primary" /> Nível de Energia
                </h4>
                <div className="space-y-4">
                  <input 
                    type="range" min="1" max="5" step="1" 
                    value={petData.energy}
                    onChange={(e) => setPetData({...petData, energy: parseInt(e.target.value)})}
                    className="w-full h-2 bg-brand-bg rounded-lg appearance-none cursor-pointer accent-brand-primary" 
                  />
                  <div className="flex justify-between text-[10px] font-bold text-brand-secondary/40 uppercase tracking-wider">
                    <span>Muito Calmo</span>
                    <span>Moderado</span>
                    <span>Muito Ativo</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-bold text-brand-secondary/80 flex items-center gap-2">
                  <Baby className="w-4 h-4 text-brand-primary" /> Compatibilidade
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'kids', label: 'Crianças', icon: <Baby className="w-3 h-3" /> },
                    { key: 'dogs', label: 'Cães', icon: <PawPrint className="w-3 h-3" /> },
                    { key: 'cats', label: 'Gatos', icon: <Cat className="w-3 h-3" /> }
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setPetData({
                        ...petData, 
                        compatibility: { ...petData.compatibility, [item.key]: !petData.compatibility[item.key as keyof typeof petData.compatibility] }
                      })}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        petData.compatibility[item.key as keyof typeof petData.compatibility]
                          ? 'bg-green-50 border-green-200 text-green-600'
                          : 'bg-brand-bg border-brand-secondary/5 text-brand-secondary/30'
                      }`}
                    >
                      {item.icon}
                      <span className="text-[10px] font-bold">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Vacinado?</label>
                <select 
                  value={petData.vaccinated}
                  onChange={(e) => setPetData({...petData, vaccinated: e.target.value})}
                  className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-4 py-3 text-sm font-bold appearance-none cursor-pointer"
                >
                  <option value="yes">Sim</option>
                  <option value="no">Não</option>
                  <option value="partial">Parcial</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Castrado?</label>
                <select 
                  value={petData.castrated}
                  onChange={(e) => setPetData({...petData, castrated: e.target.value})}
                  className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-4 py-3 text-sm font-bold appearance-none cursor-pointer"
                >
                  <option value="yes">Sim</option>
                  <option value="no">Não</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Microchip?</label>
                <select 
                  value={petData.microchip}
                  onChange={(e) => setPetData({...petData, microchip: e.target.value})}
                  className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl px-4 py-3 text-sm font-bold appearance-none cursor-pointer"
                >
                  <option value="no">Não possui</option>
                  <option value="yes">Sim</option>
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-secondary/5 space-y-6">
              <h4 className="text-sm font-bold text-brand-secondary/80 flex items-center gap-2">
                <Heart className="w-4 h-4 text-brand-primary" /> Temperamento e Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Dócil', 'Agitado', 'Calmo', 'Sociável', 'Protetor', 'Brincalhão', 'Independente', 'Assustado', 'Carente', 'Silencioso'].map(trait => (
                  <label 
                    key={trait} 
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition-all border ${
                      petData.traits.includes(trait) 
                        ? 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary' 
                        : 'bg-brand-bg border-transparent text-brand-secondary/60 hover:bg-brand-primary/5 hover:border-brand-primary/10'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      checked={petData.traits.includes(trait)}
                      onChange={() => toggleTrait(trait)}
                      className="hidden" 
                    />
                    <span className="text-xs font-bold">{trait}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Requisitos e Resgate */}
          <div className="bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm space-y-8">
            <div className="flex items-center justify-between pb-2 border-b border-brand-secondary/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-bg rounded-lg text-brand-primary"><ClipboardList className="w-4 h-4" /></div>
                <h3 className="font-bold text-lg">Requisitos e Resgate</h3>
              </div>
              <span className="text-[10px] font-bold text-brand-secondary/20 uppercase tracking-widest">Passo 03/03</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Requisitos de Adoção</label>
                <div className="space-y-3">
                  {[
                    'Apartamento telado',
                    'Casa com muro alto',
                    'Sem outros animais',
                    'Experiência prévia',
                    'Espaço amplo'
                  ].map(req => (
                    <label 
                      key={req} 
                      className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer border transition-all ${
                        petData.requirements.includes(req)
                          ? 'bg-brand-primary/5 border-brand-primary/20 text-brand-primary shadow-sm'
                          : 'bg-brand-bg border-transparent text-brand-secondary/80 hover:bg-brand-primary/5 hover:border-brand-primary/10'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={petData.requirements.includes(req)}
                        onChange={() => toggleRequirement(req)}
                        className="w-5 h-5 rounded-lg border-brand-secondary/20 text-brand-primary focus:ring-brand-primary cursor-pointer" 
                      />
                      <span className="text-sm font-bold">{req}</span>
                    </label>
                  ))}
                </div>
              </div>

                <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Data do Resgate</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary/20" />
                    <input 
                      type="date" 
                      value={petData.rescueDate}
                      onChange={(e) => setPetData({...petData, rescueDate: e.target.value})}
                      className="w-full bg-brand-bg border border-brand-secondary/10 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-primary/10 font-medium" 
                    />
                  </div>
                </div>
                
                <div className="p-6 bg-brand-primary/5 rounded-3xl border border-brand-primary/10">
                  <div className="flex items-center gap-2 text-brand-primary mb-2">
                    <Info className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Dica do Match</span>
                  </div>
                  <p className="text-[10px] text-brand-secondary/60 leading-relaxed">
                    Quanto mais detalhes você fornecer, mais preciso será o nosso algoritmo de Match para encontrar o adotante ideal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          {/* Preview Card */}
          <div className="bg-brand-secondary text-white p-8 rounded-[40px] shadow-2xl shadow-brand-secondary/20 relative overflow-hidden group border border-white/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/10 transition-colors" />
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              <Eye className="w-5 h-5 text-brand-primary" /> Prévia do Card
            </h3>
            
            <div className="bg-white rounded-[32px] overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-brand-bg flex items-center justify-center relative">
                {petData.species === 'dog' && <PawPrint className="w-12 h-12 text-brand-secondary/10" />}
                {petData.species === 'cat' && <Cat className="w-12 h-12 text-brand-secondary/10" />}
                {petData.species === 'bird' && <Bird className="w-12 h-12 text-brand-secondary/10" />}
                {petData.species === 'rabbit' && <Rabbit className="w-12 h-12 text-brand-secondary/10" />}
                {petData.species === 'hamster' && <Rat className="w-12 h-12 text-brand-secondary/10" />}
                {petData.species === 'fish' && <Fish className="w-12 h-12 text-brand-secondary/10" />}
                {petData.species === 'other' && <PawPrint className="w-12 h-12 text-brand-secondary/10" />}
                <div className="absolute top-3 right-3 bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase">Novo</div>
              </div>
              <div className="p-6 text-brand-secondary">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-xl">{petData.name || 'Nome do Pet'}</h4>
                  <span className="bg-brand-bg px-2 py-1 rounded-lg text-[8px] font-bold text-brand-secondary/40 uppercase">Match {Math.floor(Math.random() * 20) + 80}%</span>
                </div>
                <p className="text-xs font-bold text-brand-secondary/40 uppercase">
                  {speciesOptions.find(o => o.id === petData.species)?.label} • {petData.breed || 'SRD'}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="px-3 py-1.5 bg-brand-bg rounded-xl text-[10px] font-bold">
                    {petData.age === 'puppy' ? 'Filhote' : petData.age === 'young' ? 'Jovem' : petData.age === 'adult' ? 'Adulto' : 'Sênior'}
                  </div>
                  <div className="px-3 py-1.5 bg-brand-bg rounded-xl text-[10px] font-bold">
                    {petData.gender === 'male' ? 'Macho' : 'Fêmea'}
                  </div>
                  <div className="px-3 py-1.5 bg-brand-bg rounded-xl text-[10px] font-bold">
                    {petData.size === 'small' ? 'Pequeno' : petData.size === 'medium' ? 'Médio' : petData.size === 'large' ? 'Grande' : 'Gigante'}
                  </div>
                  <div className="px-3 py-1.5 bg-brand-primary/10 text-brand-primary rounded-xl text-[10px] font-bold">
                    {petData.weight || '0'} kg
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-white/30 mt-6 text-center italic">Assim que os adotantes verão o pet na busca.</p>
          </div>

          {/* Fotos */}
          <div className="bg-white p-8 rounded-[40px] border border-brand-secondary/5 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-brand-secondary/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-bg rounded-lg text-brand-primary"><Upload className="w-4 h-4" /></div>
                <h3 className="font-bold text-lg">Fotos</h3>
              </div>
              <span className="text-[10px] font-bold text-brand-secondary/20 uppercase tracking-widest">03/03</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-brand-bg border-2 border-dashed border-brand-secondary/10 rounded-3xl flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:bg-brand-primary/5 hover:border-brand-primary/30 transition-all group">
                <Plus className="w-6 h-6 text-brand-secondary/20 group-hover:text-brand-primary mb-2" />
                <p className="text-[10px] font-bold text-brand-secondary/40 group-hover:text-brand-primary uppercase">Principal</p>
              </div>
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square bg-brand-bg border-2 border-dashed border-brand-secondary/10 rounded-3xl flex items-center justify-center cursor-pointer hover:bg-brand-primary/5 hover:border-brand-primary/30 transition-all">
                  <Plus className="w-4 h-4 text-brand-secondary/10" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <button 
              type="submit" 
              disabled={isSaving}
              className={`w-full bg-brand-primary text-white py-6 rounded-[24px] font-bold text-lg shadow-2xl shadow-brand-primary/30 transition-all flex items-center justify-center gap-3 ${isSaving ? 'opacity-70 cursor-not-allowed scale-95' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
            >
              {isSaving ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Publicando...
                </>
              ) : (
                <>
                  Publicar Pet <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            <button 
              type="button" 
              disabled={isSaving}
              onClick={onCancel} 
              className="w-full bg-white text-brand-secondary/40 py-5 rounded-[24px] font-bold border border-brand-secondary/5 hover:bg-brand-bg transition-colors disabled:opacity-50"
            >
              Cancelar e Voltar
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

const OngMessages = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-display font-bold">Mensagens</h1>
      <p className="text-brand-secondary/60 mt-1">Converse com possíveis adotantes.</p>
    </div>

    <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden flex h-[600px]">
      <div className="w-80 border-r border-brand-secondary/5 flex flex-col">
        <div className="p-6 border-b border-brand-secondary/5">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-secondary/30" />
            <input type="text" placeholder="Buscar conversa..." className="w-full bg-brand-bg border-none rounded-xl pl-12 pr-4 py-3 text-sm outline-none" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-brand-secondary/5">
          {[
            { name: 'Ana Silva', last: 'Olá, o Bento ainda está disponível?', time: '10 min', unread: true },
            { name: 'Carlos Lima', last: 'Entendido, levarei os documentos.', time: '1 hora', unread: false },
            { name: 'Mariana Costa', last: 'Qual o horário de visita?', time: '3 horas', unread: false },
          ].map((chat, i) => (
            <div key={i} className={`p-6 flex items-center gap-4 cursor-pointer hover:bg-brand-bg transition-colors ${chat.unread ? 'bg-brand-primary/5' : ''}`}>
              <div className="w-12 h-12 bg-brand-bg rounded-full flex items-center justify-center font-bold text-brand-secondary">{chat.name[0]}</div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-bold text-sm truncate">{chat.name}</p>
                  <span className="text-[10px] text-brand-secondary/40 font-bold whitespace-nowrap">{chat.time}</span>
                </div>
                <p className="text-xs text-brand-secondary/60 truncate">{chat.last}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-brand-bg/30">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-brand-primary shadow-sm mb-6">
          <MessageCircle className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-bold mb-2">Selecione uma conversa</h3>
        <p className="text-brand-secondary/40 text-sm max-w-xs">Escolha um adotante na lista ao lado para iniciar o atendimento.</p>
      </div>
    </div>
  </div>
);

const OngAdoptions = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  const candidates = [
    { id: 1, user: 'Ana Silva', pet: 'Bento', date: '12/04/2024', match: 98, status: 'Em Análise', address: 'Curitiba, PR', house: 'Apartamento telado', routine: 'Trabalho Remoto', experience: 'Já teve animais' },
    { id: 2, user: 'Carlos Lima', pet: 'Luna', date: '11/04/2024', match: 85, status: 'Documentação', address: 'Pinhais, PR', house: 'Casa com quintal', routine: 'Fora 8h/dia', experience: 'Primeira vez' },
    { id: 3, user: 'Mariana Costa', pet: 'Bento', date: '10/04/2024', match: 92, status: 'Entrevista', address: 'Curitiba, PR', house: 'Apartamento', routine: 'Trabalho Remoto', experience: 'Tem animais atualmente' },
  ];

  return (
    <div className="space-y-8 relative">
      {selectedCandidate && (
        <div className="fixed inset-0 z-[110] flex items-center justify-end">
          <div className="absolute inset-0 bg-brand-secondary/20 backdrop-blur-sm" onClick={() => setSelectedCandidate(null)}></div>
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            className="w-full max-w-2xl bg-white h-full shadow-2xl relative z-10 flex flex-col pt-20"
          >
            <div className="p-10 flex-1 overflow-y-auto custom-scrollbar">
              <button 
                onClick={() => setSelectedCandidate(null)}
                className="mb-8 p-3 bg-brand-bg rounded-2xl text-brand-secondary/40 hover:text-brand-primary transition-colors flex items-center gap-2 font-bold"
              >
                <X className="w-5 h-5" /> Fechar Detalhes
              </button>

              <div className="flex items-center gap-6 mb-12">
                <div className="w-24 h-24 bg-brand-primary/10 rounded-[32px] flex items-center justify-center text-3xl font-display font-bold text-brand-primary">
                  {selectedCandidate.user[0]}
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-brand-secondary">{selectedCandidate.user}</h2>
                  <p className="text-brand-secondary/40 font-bold uppercase tracking-wider mt-1">{selectedCandidate.address}</p>
                  <div className="flex gap-2 mt-4">
                    <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                       <Sparkles className="w-3 h-3" /> {selectedCandidate.match}% Match
                    </span>
                    <span className="bg-brand-bg text-brand-secondary/60 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                       Interessado em {selectedCandidate.pet}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-brand-bg p-6 rounded-3xl border border-brand-secondary/5">
                  <p className="text-[10px] uppercase font-bold text-brand-secondary/40 mb-3 tracking-widest">Residência</p>
                  <p className="font-bold text-brand-secondary flex items-center gap-2">
                    <Home className="w-4 h-4 text-brand-primary" /> {selectedCandidate.house}
                  </p>
                </div>
                <div className="bg-brand-bg p-6 rounded-3xl border border-brand-secondary/5">
                  <p className="text-[10px] uppercase font-bold text-brand-secondary/40 mb-3 tracking-widest">Rotina</p>
                  <p className="font-bold text-brand-secondary flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-primary" /> {selectedCandidate.routine}
                  </p>
                </div>
                <div className="bg-brand-bg p-6 rounded-3xl border border-brand-secondary/5 col-span-2">
                  <p className="text-[10px] uppercase font-bold text-brand-secondary/40 mb-3 tracking-widest">Experiência com Animais</p>
                  <p className="font-bold text-brand-secondary flex items-center gap-2">
                    <Award className="w-4 h-4 text-brand-primary" /> {selectedCandidate.experience}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-bold text-xl flex items-center gap-2">
                  <History className="w-5 h-5 text-brand-primary" /> Timeline do Processo
                </h3>
                <div className="space-y-6 pl-4 border-l-2 border-brand-bg ml-2">
                   {[
                     { label: 'Formulário Inicial', date: selectedCandidate.date, done: true },
                     { label: 'Análise de Perfil', date: 'Em análise...', done: true, current: true },
                     { label: 'Entrevista Online', date: 'Pendente', done: false },
                     { label: 'Visita Domiciliar', date: 'Pendente', done: false },
                     { label: 'Entrega do Animal', date: 'Pendente', done: false }
                   ].map((step, i) => (
                     <div key={i} className="relative">
                        <div className={`absolute -left-[25px] top-1.5 w-4 h-4 rounded-full border-4 border-white ${step.done ? 'bg-brand-primary' : 'bg-brand-bg'}`}></div>
                        <div className={step.current ? 'text-brand-secondary' : 'text-brand-secondary/40'}>
                          <p className={`font-bold ${step.current ? 'text-lg' : 'text-sm'}`}>{step.label}</p>
                          <p className="text-xs font-bold uppercase tracking-widest mt-0.5">{step.date}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-brand-secondary/5 bg-brand-bg/30 flex gap-4">
              <button className="flex-1 bg-brand-primary text-white py-5 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-primary/20">
                Aprovar para Entrevista
              </button>
              <button className="px-6 py-5 bg-white border border-brand-secondary/10 rounded-2xl text-red-500 font-bold hover:bg-red-50 transition-colors">
                Rejeitar Candidato
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <div>
        <h1 className="text-4xl font-display font-bold">Gerenciamento de Candidatos (CRM)</h1>
        <p className="text-brand-secondary/60 mt-1">Filtre por match e gerencie interessados com facilidade.</p>
      </div>

      <div className="bg-white rounded-[40px] border border-brand-secondary/5 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-bg/50 border-b border-brand-secondary/5">
              <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Adotante</th>
              <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Pet</th>
              <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Data</th>
              <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Match</th>
              <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider">Status</th>
              <th className="px-8 py-5 text-xs font-bold text-brand-secondary/40 uppercase tracking-wider text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-secondary/5">
            {candidates.map((req, i) => (
              <tr 
                key={i} 
                className="hover:bg-brand-bg/30 transition-colors group cursor-pointer"
                onClick={() => setSelectedCandidate(req)}
              >
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-bg rounded-xl flex items-center justify-center font-bold text-brand-secondary">{req.user[0]}</div>
                    <p className="font-bold text-sm text-brand-secondary group-hover:text-brand-primary transition-colors">{req.user}</p>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm font-bold text-brand-secondary/80">{req.pet}</td>
                <td className="px-8 py-5 text-sm text-brand-secondary/60">{req.date}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${req.match >= 90 ? 'text-brand-primary' : 'text-orange-500'}`}>{req.match}%</span>
                    <div className="w-12 h-1.5 bg-brand-bg rounded-full overflow-hidden">
                       <div className={`h-full ${req.match >= 90 ? 'bg-brand-primary' : 'bg-orange-500'}`} style={{ width: `${req.match}%` }}></div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    req.status === 'Aprovado' ? 'bg-green-100 text-green-700' :
                    req.status === 'Rejeitado' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {req.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="p-2 hover:bg-brand-bg rounded-lg text-brand-secondary/40 transition-colors"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const OngSettings = () => (
  <div className="space-y-8">
    <div>
      <h1 className="text-4xl font-display font-bold">Configurações</h1>
      <p className="text-brand-secondary/60 mt-1">Gerencie sua conta e preferências.</p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white p-10 rounded-[40px] border border-brand-secondary/5 shadow-sm space-y-8">
        <div className="space-y-6">
          <h3 className="font-bold text-xl">Perfil da Instituição</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Nome da ONG</label>
              <input type="text" defaultValue="Patas Felizes" className="w-full bg-brand-bg border-none rounded-xl px-4 py-3 text-sm font-medium outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">E-mail de Contato</label>
              <input type="email" defaultValue="contato@patasfelizes.org" className="w-full bg-brand-bg border-none rounded-xl px-4 py-3 text-sm font-medium outline-none" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-brand-secondary/40 uppercase ml-1">Endereço</label>
              <input type="text" defaultValue="Rua das Flores, 123 - Curitiba, PR" className="w-full bg-brand-bg border-none rounded-xl px-4 py-3 text-sm font-medium outline-none" />
            </div>
          </div>
          <button className="bg-brand-primary text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform">Salvar Alterações</button>
        </div>

        <div className="pt-8 border-t border-brand-secondary/5 space-y-6">
          <h3 className="font-bold text-xl">Notificações</h3>
          <div className="space-y-4">
            {[
              { label: 'Novos pedidos de adoção', desc: 'Receba um e-mail quando alguém se interessar por um pet.' },
              { label: 'Novas mensagens', desc: 'Notificar quando um adotante enviar uma mensagem.' },
              { label: 'Relatórios semanais', desc: 'Resumo de atividades e estatísticas da sua ONG.' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-brand-bg rounded-3xl">
                <div>
                  <p className="font-bold text-sm">{item.label}</p>
                  <p className="text-xs text-brand-secondary/40">{item.desc}</p>
                </div>
                <div className="w-12 h-6 bg-brand-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-brand-secondary text-white p-8 rounded-[40px] shadow-xl shadow-brand-secondary/20">
          <h3 className="font-bold text-xl mb-4">Plano Atual</h3>
          <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm mb-6">
            <p className="text-xs uppercase font-bold opacity-40 mb-1">Plano</p>
            <p className="text-2xl font-display font-bold">Essencial</p>
            <p className="text-xs mt-2 opacity-60">Válido até 12/05/2024</p>
          </div>
          <button className="w-full py-3 bg-brand-primary text-white rounded-xl text-xs font-bold hover:scale-105 transition-transform">Fazer Upgrade</button>
        </div>
      </div>
    </div>
  </div>
);

const WaitingApproval = () => (
  <div className="min-h-[80vh] flex items-center justify-center px-4">
    <div className="text-center max-w-md">
      <div className="w-24 h-24 bg-brand-primary/10 rounded-[40px] flex items-center justify-center mx-auto mb-8 text-brand-primary animate-pulse">
        <Clock className="w-12 h-12" />
      </div>
      <h1 className="text-3xl font-display font-bold mb-4">Perfil em Análise</h1>
      <p className="text-brand-secondary/60 leading-relaxed mb-8">
        Recebemos suas informações! Nossa equipe de administradores está revisando seu cadastro para garantir a segurança de todos os pets.
      </p>
      <div className="bg-white p-6 rounded-3xl border border-brand-secondary/5 shadow-sm text-left">
        <h4 className="font-bold text-sm mb-3">O que acontece agora?</h4>
        <ul className="space-y-3">
          {[
            'Verificação de documentos (CNPJ/CPF)',
            'Análise da descrição e redes sociais',
            'Aprovação final em até 48 horas úteis'
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-xs text-brand-secondary/60">
              <div className="w-5 h-5 rounded-full bg-brand-bg flex items-center justify-center shrink-0 text-brand-primary font-bold">{i+1}</div>
              {step}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-8 text-xs text-brand-secondary/30 font-bold uppercase tracking-widest">Você receberá um e-mail assim que for aprovado.</p>
    </div>
  </div>
);

const OngDashboard = ({ user, onLogout, onNavigate, updateStatus }: { user: any, onLogout: () => void, onNavigate: (p: string) => void, updateStatus: (s: string) => void }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    if (user.status === 'pending_profile') {
      return <CompleteProfilePage onComplete={() => updateStatus('approved')} />;
    }

    if (user.status === 'pending_approval') {
      return <WaitingApproval />;
    }

    switch(activeTab) {
      case 'overview': return <OngOverview onNewPet={() => setActiveTab('new-pet')} />;
      case 'pets': return <OngPets onNewPet={() => setActiveTab('new-pet')} />;
      case 'new-pet': return <OngNewPet onCancel={() => setActiveTab('pets')} />;
      case 'messages': return <OngMessages />;
      case 'adoptions': return <OngAdoptions />;
      case 'settings': return <OngSettings />;
      default: return <OngOverview onNewPet={() => setActiveTab('new-pet')} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex">
      <Sidebar 
        role="ong" 
        onLogout={onLogout} 
        onNavigate={onNavigate} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isApproved={user.status === 'approved'}
      />
      
      <div className="flex-1 ml-72">
        <DashboardHeader user={user} />
        
        <main className="pt-28 pb-20 px-8 max-w-7xl mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<any>(null);

  const handleLogin = (role: string) => {
    const newUser = { 
      role, 
      name: role === 'admin' ? 'Admin' : role === 'ong' ? 'ONG Parceira' : 'Adotante',
      status: role === 'user' ? 'active' : role === 'admin' ? 'approved' : 'pending_profile'
    };
    setUser(newUser);
    setCurrentPage('dashboard');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const updateStatus = (newStatus: string) => {
    setUser((prev: any) => prev ? { ...prev, status: newStatus } : null);
  };

  const renderPage = () => {
    // If user is logged in and on dashboard, show specific dashboard
    if (currentPage === 'dashboard' && user) {
      switch(user.role) {
        case 'admin': return <AdminDashboard user={user} onLogout={handleLogout} onNavigate={setCurrentPage} onApproveOng={() => updateStatus('approved')} />;
        case 'ong': return <OngDashboard user={user} onLogout={handleLogout} onNavigate={setCurrentPage} updateStatus={updateStatus} />;
        case 'user': return <UserDashboard user={user} onLogout={handleLogout} onNavigate={setCurrentPage} />;
        default: return <UserDashboard user={user} onLogout={handleLogout} onNavigate={setCurrentPage} />;
      }
    }

    switch(currentPage) {
      case 'home': return (
        <>
          <Hero onNavigate={setCurrentPage} />
          <ProblemSection />
          <SolutionSection />
          <HowItWorks />
          <Pricing onNavigate={setCurrentPage} />
          
          <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-4xl md:text-6xl font-display mb-8 tracking-tight">Pronto para encontrar seu novo melhor amigo?</h2>
              <p className="text-xl mb-12 text-white/80 max-w-2xl mx-auto">
                Baixe o PetMatch agora e comece sua jornada de adoção inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform shadow-2xl">
                  <AppleIcon />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold opacity-60 leading-none">Download na</p>
                    <p className="text-xl font-bold leading-none mt-1">App Store</p>
                  </div>
                </button>
                <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform shadow-2xl">
                  <PlayStoreIcon />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold opacity-60 leading-none">Disponível no</p>
                    <p className="text-xl font-bold leading-none mt-1">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </>
      );
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      case 'faq': return <FAQPage />;
      case 'privacy': return <PrivacyPage />;
      case 'terms': return <TermsPage />;
      case 'security': return <SecurityPage />;
      case 'login': return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'register': return <RegisterPage onNavigate={setCurrentPage} />;
      default: return <Hero onNavigate={setCurrentPage} />;
    }
  };

  const showNavbar = !['login', 'register', 'dashboard'].includes(currentPage);

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      {showNavbar && (
        <Navbar 
          onNavigate={setCurrentPage} 
          currentPage={currentPage} 
          user={user}
          onLogout={handleLogout}
        />
      )}
      <main>
        {renderPage()}
      </main>
      {showNavbar && <Footer onNavigate={setCurrentPage} />}
    </div>
  );
}
