import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Users, 
  Waves, 
  Terminal, 
  Github, 
  Twitter, 
  ExternalLink,
  Code2,
  Cpu,
  Sparkles,
  MoveDown,
  HelpCircle,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Data ---
const members = [
  {
    name: "Eduardo Fukui",
    role: "Founding Member / Architect",
    bio: "Exploring the boundaries of AI-human collaboration. Built J-WAVE site.",
    avatar: "EF",
    vibe: 98
  },
  {
    name: "Vibe Master",
    role: "Logic Weaver",
    bio: "Converting abstract vibes into executable codebases with 0 configuration.",
    avatar: "VM",
    vibe: 92
  },
  {
    name: "Neural Nomad",
    role: "Prompt Engineer",
    bio: "Specializing in multi-agent orchestration and latent space exploration.",
    avatar: "NN",
    vibe: 89
  },
  {
    name: "Cyber Sakai",
    role: "Interface Shaper",
    bio: "Crafting the visual language of the next-generation web.",
    avatar: "CS",
    vibe: 95
  }
];

const manifestoPoints = [
  {
    title: "High Precision, Low Friction",
    description: "Code should flow as fast as thought. We optimize for intent, not configuration."
  },
  {
    title: "AI-Native Reasoning",
    description: "Thinking in agents and tokens. The compiler is no longer just a checker; it is a collaborator."
  },
  {
    title: "The Aesthetic of Speed",
    description: "Polished interfaces built in minutes. Beauty is a first-class citizen of the dev loop."
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass">
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="w-8 h-8 bg-vibe-purple rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
        <Waves className="w-5 h-5 text-white" />
      </div>
      <span className="font-display font-bold text-xl tracking-tight">VIBE <span className="text-vibe-purple">CODING</span></span>
    </div>
    
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
      <a href="#lab" className="hover:text-white transition-colors uppercase tracking-wider">Research</a>
      <a href="#knowledge" className="hover:text-white transition-colors uppercase tracking-wider">Knowledge</a>
      <a href="#faq" className="hover:text-white transition-colors uppercase tracking-wider">F.A.Q</a>
      <a href="#news" className="hover:text-white transition-colors uppercase tracking-wider">News</a>
      <a href="#members" className="hover:text-white transition-colors uppercase tracking-wider">Members</a>
    </div>
    
    <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-vibe-purple hover:text-white transition-all">
      JOIN US
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
    {/* Mesh background effect */}
    <div className="absolute inset-0 mesh-gradient -z-10 opacity-60" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibe-purple/20 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibe-blue/20 blur-[120px] rounded-full animate-pulse [animation-delay:1s]" />

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vibe-purple/10 border border-vibe-purple/20 text-vibe-purple text-xs font-bold mb-6 tracking-widest uppercase">
        <Sparkles className="w-3 h-3" />
        Official Guide for Vibe Coders
      </div>
      
      <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
        VIBE CODING <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-vibe-purple via-vibe-blue to-vibe-pink text-glow font-display">
          研究会
        </span>
      </h1>
      
      <div id="vibe-definition" className="glass p-6 rounded-2xl mb-10 max-w-2xl mx-auto border-vibe-purple/30 bg-vibe-purple/5">
        <h3 className="text-vibe-purple font-bold mb-2 flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" /> 1分でわかる Vibe Coding の定義
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          「Vibe Coding」とは、プログラミング言語の細かな文法に縛られず、AIとの高い解像度の対話（バイブ）を通じて、抽象的な「意図」をそのまま動作するコードへと変換する次世代の開発手法です。<strong>構文ではなく、思考と審美眼が武器になる時代</strong>の到来です。
        </p>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button className="px-8 py-4 bg-vibe-purple rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-vibe-purple/20">
          <Terminal className="w-5 h-5" />
          入門ガイドを読む
        </button>
        <button className="px-8 py-4 glass rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-colors">
          <Github className="w-5 h-5" />
          GITHUB
        </button>
      </div>
    </motion.div>

    <motion.div 
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-10"
    >
      <MoveDown className="w-6 h-6 text-white/30" />
    </motion.div>
  </section>
);

const KeyTakeaways = () => (
  <section className="py-24 px-6 max-w-6xl mx-auto">
    <div className="glass p-12 rounded-[2.5rem] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-vibe-purple via-vibe-blue to-vibe-pink" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Vibe Coding の <br />
            <span className="text-vibe-blue">基本理念</span>
          </h2>
          <ul className="space-y-4">
            {[
              { label: "Intent-First", text: "実装方法（How）よりも目的（Why）と仕様（What）の定義を最優先する" },
              { label: "Rapid Cycle", text: "数分単位で「プロンプト → 生成 → 検証」のループを回し、完成度を爆速で高める" },
              { label: "AI Co-pilot", text: "AIは単なるツールではなく、設計思想を共有するパートナーとして扱う" },
              { label: "Zero To One", text: "環境構築やボイラープレートの記述をAIに任せ、0から1への時間を極限まで短縮する" }
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-vibe-purple flex-shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  <span className="font-bold text-white mr-2">{point.label}:</span>
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white/5 rounded-2xl p-8 border border-white/5 space-y-4 font-mono text-xs text-vibe-blue/60">
          <p className="text-white/40">// Core Philosophy Manifest</p>
          <div className="space-y-2">
            <p><span className="text-vibe-purple">concept:</span> "Vibe Coding"</p>
            <p><span className="text-vibe-purple">paradigm:</span> "Abstract Programming"</p>
            <p><span className="text-vibe-purple">core_value:</span> "Minimal Friction, Maximum Intent"</p>
            <p><span className="text-vibe-purple">era:</span> "Post-Prompt Engineering"</p>
          </div>
          <div className="pt-4 mt-4 border-t border-white/5">
            <p className="text-vibe-pink underline cursor-pointer">Copy summary for AI research</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MemberCard = ({ member, index }: { member: any; index: number; key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass p-6 rounded-2xl group hover:border-vibe-purple/40 transition-all flex flex-col gap-4"
  >
    <div className="flex items-center justify-between">
      <div className="w-12 h-12 rounded-xl bg-vibe-purple/20 border border-vibe-purple/30 flex items-center justify-center font-bold text-vibe-purple group-hover:bg-vibe-purple group-hover:text-white transition-all shadow-glow">
        {member.avatar}
      </div>
      <div className="text-right">
        <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Vibe Score</div>
        <div className="font-mono text-vibe-purple font-bold">%{member.vibe}</div>
      </div>
    </div>
    
    <div>
      <h3 className="font-display font-bold text-xl group-hover:text-vibe-purple transition-colors">{member.name}</h3>
      <p className="text-vibe-blue text-xs font-medium mb-2">{member.role}</p>
      <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
    </div>
    
    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-white/5">
      <Twitter className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" />
      <Github className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" />
      <ExternalLink className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors ml-auto" />
    </div>
  </motion.div>
);

const Manifesto = () => (
  <section id="manifesto" className="py-24 px-6 relative overflow-hidden">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
          THE VIBE <br />
          <span className="text-vibe-purple">MANIFESTO</span>
        </h2>
        <div className="space-y-8">
          {manifestoPoints.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-4"
            >
              <div className="mt-1">
                <Zap className="w-5 h-5 text-vibe-blue" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{point.title}</h4>
                <p className="text-white/50">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-vibe-purple/20 blur-3xl rounded-full" />
        <div className="glass aspect-square rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Cpu className="w-48 h-48 rotate-12" />
          </div>
          <div className="space-y-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-sm text-vibe-blue/80">
              <p className="text-vibe-purple">$ vibe init neuro-network</p>
              <p>Analyzing requirements...</p>
              <p>Optimizing architecture for scale...</p>
              <p className="text-green-400">Success: Collective mind synchronized.</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-white/40" />
              <span className="text-xs text-white/40">1,024 Nodes active</span>
            </div>
            <Code2 className="w-6 h-6 text-white/20" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ResearchLab = () => (
  <section id="lab" className="py-24 px-6 bg-vibe-purple/5 relative">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold mb-4">Research Lab</h2>
        <p className="text-white/40 max-w-xl mx-auto">
          We are pushing the boundaries of what's possible with LLM-orchestrated code generation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Cpu className="w-8 h-8 text-vibe-purple" />, title: "Recursive Refactoring", desc: "Agents that refactor their own architecture to optimize for token efficiency." },
          { icon: <Sparkles className="w-8 h-8 text-vibe-blue" />, title: "Zero-Shot UI", desc: "Generating complex, accessible design systems from single-line vibes." },
          { icon: <Zap className="w-8 h-8 text-vibe-pink" />, title: "Instant Backends", desc: "Automatic persistence and API generation based on frontend state usage patterns." }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/5 hover:border-vibe-purple/20 transition-all">
            <div className="mb-6">{item.icon}</div>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-white/40 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Glossary = () => (
  <section id="glossary" className="py-24 px-6 max-w-6xl mx-auto">
    <div className="flex items-center gap-4 mb-12">
      <div className="p-3 bg-vibe-blue/10 rounded-xl">
        <BookOpen className="w-6 h-6 text-vibe-blue" />
      </div>
      <div>
        <h2 className="font-display text-4xl font-bold">Glossary</h2>
        <p className="text-white/40">Vibe Coding を理解するための基本用語集</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {[
        { 
          term: "Vibe Coding (バイブ・コーディング)", 
          def: "プログラミングの構文や詳細な仕様を記述するのではなく、AIに対して「やりたいこと（Vibe）」を伝えることで、即座に機能するコードやアプリケーションを生成する開発手法。" 
        },
        { 
          term: "Intent-Driven Development (意図駆動開発)", 
          def: "実装の詳細（How）ではなく、開発者の意図（What）に焦点を当てたパラダイム。AIが複雑なロジックの構築を代行し、人間は抽象的な設計と検証に集中する。" 
        },
        { 
          term: "Latent Space Navigation (潜在空間ナビゲーション)", 
          def: "AI（LLM）が持つ膨大な知識空間（潜在空間）から、具体的な文脈やプロンプトを通じて最適なコード解を引き出すエンジニアリングスキル。" 
        },
        { 
          term: "Agentic Orchestration (エージェント・オーケストレーション)", 
          def: "複数の専門特化型AIエージェント（UI担当、ロジック担当、テスト担当など）を同期・連携させ、複雑なシステムを自律的に構築させる手法。" 
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-vibe-purple group-hover:scale-150 transition-transform" />
            <h4 className="font-bold text-lg text-white/90 group-hover:text-vibe-purple transition-colors">{item.term}</h4>
          </div>
          <p className="text-white/50 text-sm leading-relaxed pl-3.5 border-l border-white/5">{item.def}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="py-24 px-6 bg-vibe-blue/5 relative">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-4 mb-16 text-center">
        <div className="p-3 bg-vibe-pink/10 rounded-xl">
          <HelpCircle className="w-6 h-6 text-vibe-pink" />
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold">F.A.Q.</h2>
          <p className="text-white/40">よくある質問と回答</p>
        </div>
      </div>

      <div className="space-y-4">
        {[
          {
            q: "初心者でもVibe Codingを始められますか？",
            a: "はい、可能です。伝統的なプログラミング言語の構文を覚える必要はありません。「何を実現したいか」を明確に伝え、AIの出力を対話的に修正していく能力が最も重要です。"
          },
          {
            q: "既存のエンジニアリングスキルは不要になりますか？",
            a: "いいえ。むしろ設計の原則、データ構造、API設計などの基礎知識があるほど、AIに対して精密な指示（バイブ）を送ることができ、より高度な開発が可能になります。"
          },
          {
            q: "制作物（コード）の品質はどのように担保しますか？",
            a: "AIにコードを書かせるだけでなく、AIにテストコードを書かせ、別のAIにセキュリティレビューを行わせるなど、多重のAI検証ループを構築することで品質を担保します。"
          },
          {
            q: "どのLLMを使用するのがベストですか？",
            a: "用途によりますが、コード生成の文脈では Claude 3.5 Sonnet や Gemini 1.5 Pro が高い評価を得ています。Vibe Coding 研究会では、これらを統合的に利用するワークフローを推奨しています。"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-2xl group hover:border-vibe-pink/20 transition-all"
          >
            <h4 className="font-bold text-xl mb-4 flex items-start gap-3">
              <span className="text-vibe-pink font-mono">Q.</span>
              <span>{item.q}</span>
            </h4>
            <div className="flex items-start gap-3">
              <span className="text-vibe-blue font-mono font-bold">A.</span>
              <p className="text-white/60 leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const KnowledgeCluster = () => (
  <section id="knowledge" className="py-24 px-6 max-w-6xl mx-auto">
    <h2 className="font-display text-4xl font-bold mb-12 text-center">Vibe Coding 大全 <br /><span className="text-vibe-purple text-xl">Knowledge Cluster</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Vibe Coding 始め方", tags: ["初心者", "入門"], content: "まずは Replit Agent や Cursor などのツールをインストールすることから始まります。最初のプロンプトは『自分のプロフィールサイトを作って』のようなシンプルなものからで構いません。" },
        { title: "挫折しないための思考法", tags: ["マインドセット"], content: "AIが間違ったコードを出した際、それを修正させる技術を磨くことが重要です。一度で完璧を求めず、対話を繰り返すサイクルを楽しみましょう。" },
        { title: "Replit Agent 徹底活用", tags: ["ツール"], content: "プロジェクトの初期セットアップからデプロイまでを数分で完了させる魔法のツール。依存関係の解決まで任せられるのが最大の利点です。" },
        { title: "LLMの選び方", tags: ["技術"], content: "Claude-3.5-Sonnetが最も高い推論能力を持ちますが、リアルタイム性ならGemini-1.5-Flashなど、用途に応じた使い分けがプロへの道です。" },
        { title: "プロンプトの黄金律", tags: ["スキル"], content: "背景、役割、制約、出力形式の4点を明確に。バイブス（熱量）を込めて具体的に指示することが品質に直結します。" },
        { title: "未来の開発体験", tags: ["考案"], content: "キーボードから手を離し、思考のスピードでソフトウェアが形になる。バイブコーディングは個人の創造性を爆発させる革命です。" }
      ].map((item, i) => (
        <div key={i} className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
          <div className="flex gap-2 mb-4">
            {item.tags.map(tag => <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-vibe-purple/20 text-vibe-purple font-bold tracking-tighter">{tag}</span>)}
          </div>
          <h4 className="font-bold text-lg mb-3">{item.title}</h4>
          <p className="text-white/40 text-sm leading-relaxed">{item.content}</p>
        </div>
      ))}
    </div>
  </section>
);

const LatestNews = () => {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;
  if (news.length === 0) return null;

  return (
    <section id="news" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 bg-vibe-purple/10 rounded-xl">
          <Waves className="w-6 h-6 text-vibe-purple" />
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold">Latest News</h2>
          <p className="text-white/40">Vibe Coding に関する最新の動向（自動更新）</p>
        </div>
      </div>

      <div className="space-y-6">
        {news.map((item, i) => (
          <motion.a 
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="block glass p-6 rounded-2xl group hover:border-vibe-purple/40 transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-lg group-hover:text-vibe-purple transition-colors line-clamp-2 pr-4">{item.title}</h4>
              <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-vibe-purple flex-shrink-0" />
            </div>
            <div className="flex items-center gap-3 text-xs text-white/30">
              <span>{item.pubDate ? new Date(item.pubDate).toLocaleDateString('ja-JP') : ''}</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>Google News</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-vibe-purple/30 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <KeyTakeaways />
        <ResearchLab />
        <Glossary />
        <FAQ />
        <KnowledgeCluster />
        <LatestNews />
        
        <section id="members" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-display text-4xl font-bold mb-2">Members</h2>
              <p className="text-white/40">The founding architects of the vibe.</p>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase font-bold tracking-widest text-white/40">Researching</div>
              <div className="px-3 py-1 rounded-full border border-vibe-purple/30 bg-vibe-purple/10 text-[10px] uppercase font-bold tracking-widest text-vibe-purple">Active</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, i) => (
              <MemberCard key={i} member={member} index={i} />
            ))}
          </div>
        </section>

        <Manifesto />
      </main>

      <footer className="py-12 border-t border-white/5 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Waves className="w-5 h-5 text-vibe-purple" />
          <span className="font-display font-bold">VIBE CODING 研究会</span>
        </div>
        <p className="text-white/30 text-sm">
          Built with vibes. © 2026 Collective
        </p>
      </footer>
    </div>
  );
}

