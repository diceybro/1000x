import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, TrendingUp, Zap, Users, Shield, Rocket, Target, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.05}% ${50 + scrollY * 0.03}%, oklch(0.65 0.25 290 / 0.3) 0%, transparent 50%)`,
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${30 - scrollY * 0.03}% ${70 - scrollY * 0.05}%, oklch(0.7 0.2 195 / 0.3) 0%, transparent 50%)`,
          }}
        />
        
        <div className="container relative z-10 text-center">
          <div className="inline-block mb-6 px-6 py-2 border border-primary/30 bg-primary/10">
            <span className="text-sm font-accent font-semibold text-primary uppercase tracking-wider">
              Product Strategy Framework
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="gradient-text">DICEY</span>
            <br />
            <span className="text-foreground">GAMIFIED TRADING</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-medium">
            A comprehensive analysis of the competitive landscape, strategic options, and recommended approach for entering the GambleFi market
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 glow-border bg-card hover:bg-card/80 transition-all"
              onClick={() => document.getElementById('executive-summary')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Strategy <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/10"
              onClick={() => document.getElementById('competitive-analysis')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Competitive Analysis
            </Button>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="executive-summary" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 gradient-text">EXECUTIVE SUMMARY</h2>
            <div className="glass-card p-8 space-y-6">
              <p className="text-lg leading-relaxed">
                This document outlines a strategic framework for Dicey's entry into the gamified trading market. The analysis of the competitive landscape, market trends, and internal capabilities suggests a significant opportunity to capture a new user segment and differentiate the Dicey brand.
              </p>
              <p className="text-lg leading-relaxed">
                We recommend a <span className="text-primary font-semibold">phased approach</span>, starting with a fast-to-market MVP that leverages familiar casino mechanics while introducing trading concepts, followed by a more sophisticated, feature-rich product. This strategy balances speed, innovation, and risk, positioning Dicey for long-term leadership in the emerging "GambleFi" space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Landscape */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <h2 className="text-5xl font-black mb-12 text-center gradient-text">MARKET LANDSCAPE</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="glass-card p-8 border-l-4 border-l-chart-1 hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-10 h-10 text-chart-1" />
                <div>
                  <div className="text-4xl font-display font-bold text-chart-1">$81.4B</div>
                  <div className="text-sm text-muted-foreground">Crypto Casino Market 2024</div>
                </div>
              </div>
              <p className="text-sm mb-2">5x growth from 2022 levels, driven by stablecoins and layer-2 scaling</p>
              <a href="https://sigma.world/news/crypto-gambling-2025-market-growth/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                Source: SiGMA World (Nov 2025)
              </a>
            </Card>
            
            <Card className="glass-card p-8 border-l-4 border-l-chart-2 hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-10 h-10 text-chart-2" />
                <div>
                  <div className="text-4xl font-display font-bold text-chart-2">$2.39B</div>
                  <div className="text-sm text-muted-foreground">Solana Ecosystem Revenue 2025</div>
                </div>
              </div>
              <p className="text-sm mb-2">+46% YoY | Gaming: ~$400M</p>
              <a href="https://news.bitcoin.com/solanas-ecosystem-hits-2-39-billion-revenue-high-in-2025/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                Source: Solana Foundation (Jan 2026)
              </a>
            </Card>
            
            <Card className="glass-card p-8 border-l-4 border-l-chart-3 hover:scale-105 transition-transform">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-10 h-10 text-chart-3" />
                <div>
                  <div className="text-4xl font-display font-bold text-chart-3">$86T</div>
                  <div className="text-sm text-muted-foreground">Crypto Derivatives Market 2025</div>
                </div>
              </div>
              <p className="text-sm mb-2">79% of all crypto trading volume | BTC, ETH, SOL futures dominate</p>
              <a href="https://www.coinglass.com/learn/2025-annual-report-en" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                Source: CoinGlass (Dec 2025)
              </a>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto glass-card p-8">
            <h3 className="text-2xl font-bold mb-6 text-primary">Key Market Trends</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                  <p>Crypto casinos growing faster than traditional online casinos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                  <p>Solana gaming: $400M annual revenue, +46% YoY growth</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                  <p>Active communities and innovative games driving adoption</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
                  <p>Crypto derivatives dominate: $86T annual volume, 79% of all crypto trading</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
                  <p>AI-powered differentiation and viral content</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
                  <p>Founder credibility and trust-building crucial</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                <strong>Note:</strong> Dicey TAM: $2B-$5B (1-5% of $86T crypto derivatives market). Addressable through gamified UI/UX, high-frequency trading mechanics, and Solana's speed advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section id="competitive-analysis" className="py-24">
        <div className="container">
          <h2 className="text-5xl font-black mb-12 text-center gradient-text">COMPETITIVE ANALYSIS</h2>
          
          <Tabs defaultValue="rollbit" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-8 bg-transparent p-0 gap-4">
              <TabsTrigger value="rollbit" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-primary/30 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all">
                Rollbit
              </TabsTrigger>
              <TabsTrigger value="rush" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-accent/30 data-[state=active]:border-accent data-[state=active]:bg-accent/10 data-[state=active]:text-accent hover:border-accent/60 hover:bg-accent/5 transition-all">
                Rush Trade
              </TabsTrigger>
              <TabsTrigger value="rugs" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-chart-3/30 data-[state=active]:border-chart-3 data-[state=active]:bg-chart-3/10 data-[state=active]:text-chart-3 hover:border-chart-3/60 hover:bg-chart-3/5 transition-all">
                Rugs.fun
              </TabsTrigger>
              <TabsTrigger value="bcgame" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-chart-5/30 data-[state=active]:border-chart-5 data-[state=active]:bg-chart-5/10 data-[state=active]:text-chart-5 hover:border-chart-5/60 hover:bg-chart-5/5 transition-all">
                BC.Game
              </TabsTrigger>
              <TabsTrigger value="coinfutures" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-chart-2/30 data-[state=active]:border-chart-2 data-[state=active]:bg-chart-2/10 data-[state=active]:text-chart-2 hover:border-chart-2/60 hover:bg-chart-2/5 transition-all">
                CoinFutures
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="rollbit" className="space-y-6">
              <Card className="glass-card p-8">
                <h3 className="text-3xl font-bold mb-4 text-primary">Rollbit (1000X Futures)</h3>
                <p className="text-muted-foreground mb-6">Extreme leverage crypto derivatives with social trading features</p>
                <div className="mb-6 p-4 bg-chart-1/10 rounded border border-chart-1/30">
                  <p className="text-sm text-chart-1 font-semibold">2025 Performance: $987.7M annual GGR | 1.9M users | 20.3K DAU | 3.64% market share</p>
                  <a href="https://tanzanite.io" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-2 inline-block">
                    Source: Tanzanite Analytics (Feb 2026)
                  </a>
                </div>                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-accent">Core Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Up to 1000x leverage on 20+ cryptocurrencies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Two fee structures: PnL Cut or Flat Fee (4 bps)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Up to 60% fee discount using $RLB token</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Composite index pricing from multiple exchanges</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-accent">Social Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Leaderboards (most profitable, highest ROI)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Trade sharing functionality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>View other users' trades on chart</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Seamless casino integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 border-l-4 border-l-primary">
                  <p className="text-sm font-semibold">Target User: Casino users seeking trading exposure with extreme leverage</p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="rush" className="space-y-6">
              <Card className="glass-card p-8">
                <h3 className="text-3xl font-bold mb-4 text-primary">Rush Trade (Tap Trading)</h3>
                <p className="text-muted-foreground mb-6">Ultra-fast 10-second trading rounds on Solana - $900M+ volume in 3 months</p>
                <div className="mb-6 p-4 bg-accent/10 rounded border border-accent/30">
                  <p className="text-sm text-accent font-semibold">2025 Performance: 50-200 trades/user/day | 1K users | 70% mobile | $900M volume</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-accent">Core Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>10-second rounds with instant settlement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>One-tap up/down predictions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Fully onchain (Solana + Ephemeral Rollups)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Gasless transactions</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-accent">Game Modes</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Tap: Standard up/down prediction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>1000x: High-leverage futures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Multiplayer tournaments (winner-takes-all)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Simulation mode for practice</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-accent/10 border-l-4 border-l-accent">
                  <p className="text-sm font-semibold">Target User: Mobile-first traders seeking instant gratification and social competition</p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="rugs" className="space-y-6">
              <Card className="glass-card p-8">
                <h3 className="text-3xl font-bold mb-4 text-primary">Rugs.fun (Crash-Style)</h3>
                <p className="text-muted-foreground mb-6">"Buy, Sell & Escape Before The Rug" crash game on Solana</p>
                <div className="mb-6 p-4 bg-chart-4/10 rounded border border-chart-4/30">
                  <p className="text-sm text-chart-4 font-semibold">30-Day Performance: 9.2K UAW | +27.56% growth | 70.98K transactions | $2.19M volume</p>
                  <a href="https://dappradar.com/dapp/rugs-fun/analytics?range-ds=30d&range-ha=30d" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline mt-2 inline-block">
                    Source: DappRadar (Feb 2026)
                  </a>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-accent">Game Mechanics</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Multiplier starts at 1x and increases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Buy in and sell at any multiplier</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Crash ends round - unsold positions lose</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Provably fair with SHA-256 verification</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-accent">Social Elements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Live chat with 197+ concurrent users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Leaderboards (24h, 7d, 30d PnL)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Golden Hour special events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Real-time player positions visible</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-chart-3/10 border-l-4 border-l-chart-3">
                  <p className="text-sm font-semibold">Target User: Crash game enthusiasts and social traders seeking community-driven gameplay</p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="bcgame" className="space-y-6">
              <Card className="glass-card p-8">
                <h3 className="text-3xl font-bold mb-4 text-primary">BC.Game (Multi-Product Platform)</h3>
                <p className="text-muted-foreground mb-6">Major competitor with 9M users using DeTrade for gamified trading</p>
                <div className="mb-6 p-4 bg-chart-5/10 rounded border border-chart-5/30">
                  <p className="text-sm text-chart-5 font-semibold">2025 Performance: 9M users | 500K MAU | $30B total bets | $500M monthly wagered</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-accent">Product Portfolio</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>10,000+ casino slot games</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>DeTrade-powered gamified trading</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Tap Trading, 1000x Futures, High/Low</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Telegram mini-app (COCO Rush: 1.3M users)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-accent">Growth Strategy</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Leicester City FC sponsorship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Celebrity partnerships (Jason Derulo, Lil Pump)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>Esports team (Counter-Strike, IEM Dallas 2025)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">▸</span>
                        <span>$BC token staking and rewards</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-chart-5/10 border-l-4 border-l-chart-5">
                  <p className="text-sm font-semibold">Key Insight: BC.Game uses DeTrade white-label provider - proves gamified trading can scale to 9M users</p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="coinfutures" className="space-y-6">
              <Card className="glass-card p-8">
                <h3 className="text-3xl font-bold mb-4 text-chart-2">CoinFutures.io (Desktop/Mobile App)</h3>
                <p className="text-muted-foreground mb-6">Crypto futures prediction game with desktop and mobile app distribution, dual fee models</p>
                <div className="mb-6 p-4 bg-chart-2/10 rounded border border-chart-2/30">
                  <p className="text-sm text-chart-2 font-semibold">2025 Performance: Estimated $120M+ annual GGR | Growing mobile-first user base | Strong app store presence</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-chart-2">Product Features</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>Long/short predictions on BTC, ETH, and other cryptos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>Up to 1000x multiplier leverage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>Live price chart monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>Early cash-out option</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>Simulated price action (no real crypto exposure)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-chart-2">Distribution & Monetization</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>Desktop web + mobile app (iOS/Android)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>Dual fee model: PnL-based or flat fee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>Users choose fee model per round</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>Smart algorithm mimics real volatility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-chart-2">▸</span>
                        <span>High-speed experience without exchange complexity</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-chart-2/10 border-l-4 border-l-chart-2">
                  <p className="text-sm font-semibold">Key Insight: App-first distribution model provides direct user acquisition channel and reduces dependency on web traffic</p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Monetization Models */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <h2 className="text-5xl font-black mb-12 text-center gradient-text">MONETIZATION MODELS</h2>
          
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="rollbit" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8 bg-transparent p-0 gap-4">
                <TabsTrigger value="rollbit" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-primary/30 data-[state=active]:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all">Rollbit</TabsTrigger>
                <TabsTrigger value="rush" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-accent/30 data-[state=active]:border-accent data-[state=active]:bg-accent/10 data-[state=active]:text-accent hover:border-accent/60 hover:bg-accent/5 transition-all">Rush Trade</TabsTrigger>
                <TabsTrigger value="bcgame" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-chart-5/30 data-[state=active]:border-chart-5 data-[state=active]:bg-chart-5/10 data-[state=active]:text-chart-5 hover:border-chart-5/60 hover:bg-chart-5/5 transition-all">BC.Game</TabsTrigger>
                <TabsTrigger value="rugs" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-chart-3/30 data-[state=active]:border-chart-3 data-[state=active]:bg-chart-3/10 data-[state=active]:text-chart-3 hover:border-chart-3/60 hover:bg-chart-3/5 transition-all">Rugs.fun</TabsTrigger>
                <TabsTrigger value="coinfutures" className="px-6 py-4 text-lg font-bold rounded-lg border-2 border-chart-2/30 data-[state=active]:border-chart-2 data-[state=active]:bg-chart-2/10 data-[state=active]:text-chart-2 hover:border-chart-2/60 hover:bg-chart-2/5 transition-all">CoinFutures</TabsTrigger>
              </TabsList>
              
              <TabsContent value="rollbit">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Rollbit: Dual Fee Structure</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-accent">Synthetic Coins (Provably Fair)</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground"><strong>How it works:</strong> Daily seed-based pricing using BLAKE2b hashing with 0.1% volatility</p>
                    <p className="text-muted-foreground"><strong>Revenue:</strong> House edge + user losses</p>
                    <p className="text-muted-foreground"><strong>Estimated Revenue:</strong> $46.9M (2.5% house edge + 5% profit fee)</p>
                    <p className="text-xs text-muted-foreground mt-3">Users can verify prices are fair using published seed</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-accent">Real Asset Futures</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground"><strong>Model A (PnL):</strong> 0% entry/exit, 10% on profits</p>
                    <p className="text-muted-foreground"><strong>Model B (Flat):</strong> 0.5% of position, 100% profit keep</p>
                    <p className="text-muted-foreground"><strong>Estimated Annual:</strong> $27.35M combined</p>
                    <p className="text-xs text-muted-foreground mt-3">Users choose fee model based on trading style</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <p className="text-sm text-muted-foreground"><strong>Total Rollbit Revenue (Est.):</strong> $74.25M annually</p>
                <p className="text-xs text-muted-foreground"><strong>Index Pricing:</strong> Composite index from 9 exchanges (Binance, Coinbase, Kraken, Huobi, OKEx), updated every 500ms</p>
                <p className="text-xs text-muted-foreground"><strong>Market Impact:</strong> Dynamic pricing formula for large trades to replicate real exchange slippage</p>
              </div>
            </Card>
              </TabsContent>
              
              <TabsContent value="rush">
                <Card className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Rush Trade: High-Frequency Model</h3>
              <div className="space-y-4 text-sm">
                <p className="text-muted-foreground"><strong>Revenue Mechanism:</strong> Entry/exit spreads (1%) + slippage + liquidation fees</p>
                <p className="text-muted-foreground"><strong>Volume:</strong> $900M in 3 months (Sep-Dec 2025)</p>
                <p className="text-muted-foreground"><strong>Estimated Annual Revenue:</strong> $18.25M</p>
                <p className="text-muted-foreground"><strong>Engagement:</strong> 50-200 trades per user per day</p>
                <p className="text-xs text-muted-foreground mt-3">50-200 trades per user per day drives volume-based profitability</p>
              </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="bcgame">
                <Card className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">BC.Game: Diversified Revenue</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground"><strong>Casino Games:</strong> 2-3% house edge</p>
                  <p className="text-muted-foreground"><strong>Crash Games:</strong> 3-5% house edge</p>
                  <p className="text-muted-foreground"><strong>Real Futures:</strong> PnL or flat fees</p>
                  <p className="text-muted-foreground"><strong>Synthetic Trading:</strong> Provably fair</p>
                  <p className="text-muted-foreground"><strong>Token Staking:</strong> $BC rewards</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground"><strong>Monthly Volume:</strong> $500M</p>
                  <p className="text-muted-foreground"><strong>Estimated Annual Revenue:</strong> $150M</p>
                  <p className="text-muted-foreground"><strong>Stability:</strong> Multiple revenue streams reduce risk</p>
                </div>
              </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="rugs">
                <Card className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Rugs.fun: Crash Game Focus</h3>
              <div className="space-y-4 text-sm">
                <p className="text-muted-foreground"><strong>Revenue Model:</strong> 0.05% house edge per 250ms tick</p>
                <p className="text-muted-foreground"><strong>30-Day Volume:</strong> $2.19M (70.98K transactions)</p>
                <p className="text-muted-foreground"><strong>Estimated Annual Revenue:</strong> $525.6K</p>
                <p className="text-xs text-muted-foreground mt-3">Smaller user base but focused product generates steady revenue</p>
              </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="coinfutures">
                <Card className="glass-card p-8">
                  <h3 className="text-2xl font-bold mb-4 text-chart-2">CoinFutures.io: Dual Fee Model</h3>
              <div className="space-y-4 text-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-chart-2 mb-2">Fee Model A: PnL-Based</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Small percentage on profits only</li>
                      <li>• Users choose per round</li>
                      <li>• Incentivizes winning trades</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-chart-2 mb-2">Fee Model B: Flat Fee</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Fixed fee to enter and exit</li>
                      <li>• No result-dependent charges</li>
                      <li>• Predictable cost structure</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4"><strong>Distribution Advantage:</strong> App-first model (iOS/Android + web) reduces user acquisition costs vs. web-only platforms</p>
                <p className="text-muted-foreground"><strong>Estimated Annual Revenue:</strong> $120M+ (based on mobile-first user base and dual fee optionality)</p>
                <p className="text-xs text-muted-foreground mt-3">Key differentiator: Users control fee structure per trade, creating flexibility and reducing friction</p>
              </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* White-Label Providers */}
      <section className="py-24 bg-background/50">
        <div className="container">
          <h2 className="text-5xl font-black mb-12 text-center gradient-text">WHITE-LABEL PROVIDERS</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">TradeSmarder</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-accent mb-2">Pricing:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Setup: $55K</li>
                    <li>• Monthly: $3K minimum</li>
                    <li>• Revenue Share: 7-10%</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-2">Features:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• High/Low trading</li>
                    <li>• Turbo mode</li>
                    <li>• Established relationship</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Status: Proposal received from Magic Eden</p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">DeTrade</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-accent mb-2">Proven Track Record:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Powers BC.Game (9M users)</li>
                    <li>• $227.9M daily volume</li>
                    <li>• MISA licensed</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-accent mb-2">Features:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 1000x Futures</li>
                    <li>• Tap Trading</li>
                    <li>• High/Low, Spread, Up/Down</li>
                    <li>• Zero trading fees</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">Recommendation: Request pricing and compare vs. TradeSmarder</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Options */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <h2 className="text-5xl font-black mb-12 text-center gradient-text">STRATEGIC OPTIONS</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="glass-card p-8 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-chart-1/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Option A</h3>
              <h4 className="text-lg text-primary mb-4">In-House Novel Game</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-chart-3 mb-2">Pros:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Complete control</li>
                    <li>• Unique differentiator</li>
                    <li>• No vendor dependency</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-destructive mb-2">Cons:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Longest time-to-market</li>
                    <li>• Highest upfront cost</li>
                    <li>• Higher product risk</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-8 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-chart-2/20 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Option B</h3>
              <h4 className="text-lg text-primary mb-4">White-Label Integration</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-chart-3 mb-2">Pros:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Fastest launch (2-4 weeks)</li>
                    <li>• Lower upfront cost</li>
                    <li>• Proven product</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-destructive mb-2">Cons:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Limited differentiation</li>
                    <li>• Vendor dependency</li>
                    <li>• Revenue sharing</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-8 border-2 border-primary hover:scale-105 transition-transform relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
                RECOMMENDED
              </div>
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Option C</h3>
              <h4 className="text-lg text-primary mb-4">Phased Approach - MVP First</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-chart-3 mb-2">Pros:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Balances speed & control</li>
                    <li>• User validation early</li>
                    <li>• Reduces risk</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-destructive mb-2">Cons:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Initial product not unique</li>
                    <li>• Requires clear V2 roadmap</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 gradient-text text-center">RECOMMENDATION</h2>
            
            <Card className="glass-card p-12 border-2 border-primary">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Recommended: 1000X Synthetic Futures MVP</h3>
                  <p className="text-lg text-muted-foreground">
                    Launch MVP with synthetic asset 1000x futures in 1-2 months, validating product-market fit before transitioning to real assets.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-primary/5 border-l-4 border-l-primary">
                  <h4 className="text-xl font-bold mb-3">Why 1000X Synthetic Futures MVP?</h4>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-3">
                      <span className="text-primary font-bold">1.</span>
                      <span><strong>Minimize regulatory complexity</strong> by launching with synthetic assets, avoiding real-asset custody and settlement requirements</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-primary font-bold">2.</span>
                      <span><strong>Validate product-market fit</strong> with 1000x leverage on synthetic assets, extreme volatility, and visible player positions before investing in real-asset infrastructure</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-primary font-bold">3.</span>
                      <span><strong>Build community early</strong>, get active players and concurrent users watching each other's trades in real-time</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="text-primary font-bold">4.</span>
                      <span><strong>Maintain full control</strong> over product roadmap, mechanics, and user experience with in-house development</span>
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card">
                    <h4 className="text-lg font-bold mb-3">Phase 1: Synthetic 1000X Futures MVP</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 1000x leverage on synthetic assets</li>
                      <li>• Long/short positions with real-time visibility</li>
                      <li>• See other players' open/close positions</li>
                      <li>• Real-time chat & social layer</li>
                      <li>• 1-2 month launch</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-card">
                    <h4 className="text-lg font-bold mb-3 text-accent">Phase 2-4: Real Assets & New Mechanics</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Phase 2: Real 1000x on crypto & memecoins</li>
                      <li>• Phase 3: Tap trading version</li>
                      <li>• Phase 4: Crash game mechanism</li>
                      <li>• Leaderboards & tournaments</li>
                      <li>• 6+ month ongoing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* TradeSmarder Analysis */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-5xl font-black mb-12 text-center gradient-text">TRADESMARDER ANALYSIS</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <Card className="glass-card p-8">
              <h3 className="text-3xl font-bold mb-4 text-primary">TradeSmarder White-Label Proposal</h3>
              <p className="text-muted-foreground mb-6">Complete crypto derivatives platform with High/Low, Turbo, SpreadX, and 1000X products</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-accent">Pricing Structure</h4>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-primary/5 rounded">
                      <p className="font-semibold text-primary">Setup Costs</p>
                      <p className="text-muted-foreground">$55K total (includes API, customization, branding)</p>
                    </div>
                    <div className="p-3 bg-accent/5 rounded">
                      <p className="font-semibold text-accent">Monthly Minimum</p>
                      <p className="text-muted-foreground">$3K for tech support & monitoring</p>
                    </div>
                    <div className="p-3 bg-chart-3/5 rounded">
                      <p className="font-semibold text-chart-3">Revenue Share</p>
                      <p className="text-muted-foreground">7-10% of GGR (tiered by volume)</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-accent">Key Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">▸</span>
                      <span>4 product types included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">▸</span>
                      <span>Mobile apps (PWA) included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">▸</span>
                      <span>24/7 monitoring & support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">▸</span>
                      <span>Risk management included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">▸</span>
                      <span>Leaderboards & tournaments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">▸</span>
                      <span>Full API access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Financial Impact: Year 1 Scenarios</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Scenario</th>
                      <th className="text-right py-3 px-4 font-semibold">Monthly GGR</th>
                      <th className="text-right py-3 px-4 font-semibold">Annual Cost</th>
                      <th className="text-right py-3 px-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50 hover:bg-primary/5 transition">
                      <td className="py-3 px-4">Conservative</td>
                      <td className="text-right py-3 px-4">$250K</td>
                      <td className="text-right py-3 px-4 font-semibold">$336K</td>
                      <td className="text-right py-3 px-4"><span className="text-chart-1">●</span></td>
                    </tr>
                    <tr className="border-b border-border/50 hover:bg-primary/5 transition">
                      <td className="py-3 px-4">Moderate</td>
                      <td className="text-right py-3 px-4">$1M</td>
                      <td className="text-right py-3 px-4 font-semibold">$1.116M</td>
                      <td className="text-right py-3 px-4"><span className="text-chart-2">●</span></td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition">
                      <td className="py-3 px-4">Strong</td>
                      <td className="text-right py-3 px-4">$2M</td>
                      <td className="text-right py-3 px-4 font-semibold">$2.196M</td>
                      <td className="text-right py-3 px-4"><span className="text-chart-3">●</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Revenue share becomes expensive at scale: $5M monthly GGR = $4.8M annual cost</p>
            </Card>
            
            <Card className="glass-card p-8 border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-4 text-primary">Advantages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm">Fastest launch: 3-5 weeks</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm">Lowest upfront cost: $55K</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm">Compliance built-in</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm">24/7 support included</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm">Multiple products included</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm">Minimal execution risk</span>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-8 border-l-4 border-l-destructive">
              <h3 className="text-2xl font-bold mb-4 text-destructive">Disadvantages</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✗</span>
                  <span className="text-sm">Revenue sharing (7-10%)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✗</span>
                  <span className="text-sm">Limited differentiation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✗</span>
                  <span className="text-sm">Vendor lock-in risk</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✗</span>
                  <span className="text-sm">Cannot build proprietary features</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✗</span>
                  <span className="text-sm">Expensive at scale</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-destructive font-bold">✗</span>
                  <span className="text-sm">Difficult to migrate away</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Considerations */}
      <section className="py-24 bg-card/30">
        <div className="container">
          <h2 className="text-5xl font-black mb-12 text-center gradient-text">REGULATORY CONSIDERATIONS</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Gambling vs. Trading Classification</h3>
              <p className="text-muted-foreground mb-4">
                The most critical regulatory question is whether the product will be classified as gambling or financial trading. This distinction has significant implications for licensing, marketing, and operations.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-primary/5 border-l-4 border-l-primary">
                  <h4 className="font-bold mb-2">Gambling</h4>
                  <p className="text-sm text-muted-foreground">Gaming commission regulation, existing casino license applicable, responsible gaming measures required</p>
                </div>
                <div className="p-4 bg-accent/5 border-l-4 border-l-accent">
                  <h4 className="font-bold mb-2">Trading</h4>
                  <p className="text-sm text-muted-foreground">Securities/financial authority regulation, different licensing required (e.g., broker-dealer), investor protection rules</p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Proposed Compliance Strategy</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Leverage Existing Gaming License</h4>
                    <p className="text-sm text-muted-foreground">Operate under Dicey's current gaming license as the crash mechanic is widely recognized as a casino game</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Clear Product Messaging</h4>
                    <p className="text-sm text-muted-foreground">Position as a game inspired by markets, not a financial trading product. Avoid investment advice language</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Responsible Gaming Features</h4>
                    <p className="text-sm text-muted-foreground">Integrate existing tools: deposit limits, self-exclusion, problem gambling resources</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Jurisdictional Fencing</h4>
                    <p className="text-sm text-muted-foreground">Use geo-blocking to restrict access from jurisdictions where the product may be illegal</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground text-sm">
            Product Strategy Framework | January 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
