import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock,
  Target,
  Award,
  Zap,
  Shield,
  Globe,
  LineChart,
  BarChart3,
  PieChart
} from "lucide-react";

export function AdvancedStats() {
  const mainStats = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "ROI Promedio",
      description: "Retorno de inversión promedio en proyectos de automatización",
      color: "from-green-500 to-emerald-500",
      trend: "+25% vs año anterior"
    },
    {
      icon: DollarSign,
      value: "$2.5M",
      label: "Ahorros Generados",
      description: "Reducción de costos operativos para nuestros clientes",
      color: "from-blue-500 to-cyan-500",
      trend: "Solo en 2024"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Reducción de Tiempo",
      description: "Disminución en tiempo de procesos manuales",
      color: "from-purple-500 to-pink-500",
      trend: "Promedio en automatización"
    },
    {
      icon: Users,
      value: "98%",
      label: "Satisfacción Cliente",
      description: "Índice de satisfacción basado en +50 proyectos",
      color: "from-orange-500 to-red-500",
      trend: "Basado en NPS"
    }
  ];

  const industryStats = [
    { icon: Globe, label: "E-commerce", value: "+185%", metric: "Crecimiento Ventas" },
    { icon: Shield, label: "Finanzas", value: "95%", metric: "Precisión Forecasting" },
    { icon: Target, label: "Retail", value: "4.8x", metric: "ROAS Promedio" },
    { icon: Zap, label: "Logística", value: "-75%", metric: "Errores Manuales" },
    { icon: Award, label: "Salud", value: "92%", metric: "Satisfacción" },
    { icon: LineChart, label: "Legal", value: "100%", metric: "Cumplimiento" }
  ];

  const comparisonData = {
    before: [
      { label: "Tiempo de Respuesta", value: "48 horas", status: "slow" },
      { label: "Costos Operativos", value: "$15,000/mes", status: "high" },
      { label: "Errores Manuales", value: "15%", status: "high" },
      { label: "Satisfacción Cliente", value: "72%", status: "medium" },
      { label: "Disponibilidad", value: "8h/día", status: "low" }
    ],
    after: [
      { label: "Tiempo de Respuesta", value: "2 minutos", status: "fast" },
      { label: "Costos Operativos", value: "$6,000/mes", status: "low" },
      { label: "Errores Manuales", value: "2%", status: "low" },
      { label: "Satisfacción Cliente", value: "95%", status: "high" },
      { label: "Disponibilidad", value: "24/7", status: "excellent" }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'fast':
      case 'low':
      case 'high':
      case 'excellent':
        return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'medium':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'slow':
        return 'text-red-500 bg-red-500/10 border-red-500/20';
      default:
        return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <BarChart3 className="h-3 w-3 mr-1" />
            Resultados Medibles
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Números Que <span className="text-primary">Hablan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Métricas reales y resultados tangibles que demuestran el impacto de nuestras soluciones
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainStats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 group relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                  {stat.value}
                </div>
                
                <div className="font-semibold text-lg mb-2">{stat.label}</div>
                
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {stat.description}
                </p>
                
                <Badge variant="outline" className="text-xs">
                  {stat.trend}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Industry Performance */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Resultados por <span className="text-primary">Industria</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industryStats.map((industry, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <industry.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-sm font-semibold text-muted-foreground mb-2">
                  {industry.label}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {industry.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {industry.metric}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Before vs After Comparison */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            <span className="text-primary">Antes</span> vs <span className="text-primary">Después</span>
          </h3>
          
          <Card className="p-8 border-2">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <h4 className="text-lg font-bold">Antes de IonosHub</h4>
                </div>
                <div className="space-y-3">
                  {comparisonData.before.map((item, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border ${getStatusColor(item.status)} transition-all`}
                    >
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      <div className="font-bold text-lg">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <h4 className="text-lg font-bold">Después de IonosHub</h4>
                </div>
                <div className="space-y-3">
                  {comparisonData.after.map((item, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border ${getStatusColor(item.status)} transition-all`}
                    >
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      <div className="font-bold text-lg">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Improvement Summary */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-500">-60%</div>
                  <div className="text-xs text-muted-foreground">Costos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">+95%</div>
                  <div className="text-xs text-muted-foreground">Velocidad</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">-87%</div>
                  <div className="text-xs text-muted-foreground">Errores</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">+32%</div>
                  <div className="text-xs text-muted-foreground">Satisfacción</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Visual Chart Representation */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">+30</div>
            <div className="text-sm text-muted-foreground">Industrias Atendidas</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Proyectos Completados</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <LineChart className="h-12 w-12 text-primary mx-auto mb-4" />
            <div className="text-2xl font-bold mb-2">$10M+</div>
            <div className="text-sm text-muted-foreground">En Valor Generado</div>
          </Card>
        </div>
      </div>
    </section>
  );
}

