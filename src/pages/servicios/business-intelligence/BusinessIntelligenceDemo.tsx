import { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  DollarSign, 
  ShoppingCart,
  Clock,
  Target,
  Zap,
  Eye,
  RefreshCw,
  Download,
  Share2,
  MessageCircle,
  Settings,
  Filter,
  Calendar,
  MapPin,
  Smartphone,
  Monitor,
  Tablet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const BusinessIntelligenceDemo = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Datos simulados que se actualizan en tiempo real
  const [metrics, setMetrics] = useState({
    totalRevenue: 125000,
    monthlyGrowth: 12.5,
    activeUsers: 2847,
    conversionRate: 3.2,
    avgOrderValue: 89.50,
    customerSatisfaction: 4.7,
    inventoryTurnover: 8.3,
    employeeProductivity: 92
  });

  // Actualizar tiempo cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simular actualización de métricas cada 5 segundos
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      setMetrics(prev => ({
        totalRevenue: prev.totalRevenue + Math.floor(Math.random() * 1000 - 500),
        monthlyGrowth: Math.max(0, prev.monthlyGrowth + (Math.random() * 2 - 1)),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 20 - 10),
        conversionRate: Math.max(0, prev.conversionRate + (Math.random() * 0.2 - 0.1)),
        avgOrderValue: Math.max(0, prev.avgOrderValue + (Math.random() * 2 - 1)),
        customerSatisfaction: Math.min(5, Math.max(0, prev.customerSatisfaction + (Math.random() * 0.2 - 0.1))),
        inventoryTurnover: Math.max(0, prev.inventoryTurnover + (Math.random() * 0.5 - 0.25)),
        employeeProductivity: Math.min(100, Math.max(0, prev.employeeProductivity + (Math.random() * 2 - 1)))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [isLive]);

  const handleVolver = () => {
    navigate('/business-intelligence');
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola, he visto la demo de Business Intelligence y me interesa implementar algo similar en mi empresa.\n\n` +
      `📊 Necesito:\n` +
      `• Dashboards como el que vi en la demo\n` +
      `• Integración con mis sistemas actuales\n` +
      `• Análisis predictivo para mi industria\n\n` +
      `¿Podrían contactarme para una consultoría personalizada?`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('es-ES').format(num);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={handleVolver}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Business Intelligence
            </Button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                <span className="text-sm font-medium">
                  {isLive ? 'En Vivo' : 'Pausado'}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                {formatTime(currentTime)} • {formatDate(currentTime)}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLive(!isLive)}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isLive ? 'animate-spin' : ''}`} />
                {isLive ? 'Pausar' : 'Reanudar'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Demo Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            <Eye className="h-3 w-3 mr-1" />
            Demo Interactiva en Vivo
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Dashboard Ejecutivo <span className="text-primary">IonosHub BI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experimenta cómo nuestros dashboards transforman datos complejos en insights 
            accionables para la toma de decisiones estratégicas.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted/50 rounded-lg p-1">
            <Button
              variant={activeTab === "dashboard" ? "default" : "ghost"}
              onClick={() => setActiveTab("dashboard")}
              className="mx-1"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Dashboard Principal
            </Button>
            <Button
              variant={activeTab === "reports" ? "default" : "ghost"}
              onClick={() => setActiveTab("reports")}
              className="mx-1"
            >
              <Download className="h-4 w-4 mr-2" />
              Reportes
            </Button>
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +{metrics.monthlyGrowth.toFixed(1)}%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{formatCurrency(metrics.totalRevenue)}</h3>
                  <p className="text-sm text-muted-foreground">Ingresos Totales</p>
                  <Progress value={85} className="h-2" />
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5.2%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{formatNumber(metrics.activeUsers)}</h3>
                  <p className="text-sm text-muted-foreground">Usuarios Activos</p>
                  <Progress value={72} className="h-2" />
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +{metrics.conversionRate.toFixed(1)}%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{metrics.conversionRate.toFixed(1)}%</h3>
                  <p className="text-sm text-muted-foreground">Tasa de Conversión</p>
                  <Progress value={64} className="h-2" />
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +2.1%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{formatCurrency(metrics.avgOrderValue)}</h3>
                  <p className="text-sm text-muted-foreground">Valor Promedio</p>
                  <Progress value={78} className="h-2" />
                </div>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Revenue Chart */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Ingresos por Mes</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Últimos 12 meses
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Gráfico SVG con espaciado mejorado */}
                <div className="h-80 bg-gradient-to-t from-primary/5 to-transparent rounded-lg p-4 mb-4 relative">
                  <svg width="100%" height="100%" className="absolute inset-0">
                    {/* Líneas de referencia horizontales */}
                    <line x1="15%" y1="20%" x2="100%" y2="20%" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                    <line x1="15%" y1="40%" x2="100%" y2="40%" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                    <line x1="15%" y1="60%" x2="100%" y2="60%" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                    <line x1="15%" y1="80%" x2="100%" y2="80%" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
                    
                    {/* Barras del gráfico */}
                    {[65000, 78000, 82000, 75000, 88000, 92000, 85000, 90000, 95000, 87000, 93000, 85000].map((amount, index) => {
                      const maxAmount = 100000;
                      const barHeight = (amount / maxAmount) * 70; // 70% del espacio disponible
                      const barWidth = 85 / 12 - 0.5; // Ancho de cada barra (85% del espacio disponible)
                      const x = 15 + (index * 85 / 12) + 0.5; // Empezar desde 15% + espaciado
                      const y = 80 - barHeight; // Posición desde abajo
                      const isCurrentMonth = index === 11;
                      
                      return (
                        <rect
                          key={index}
                          x={`${x}%`}
                          y={`${y}%`}
                          width={`${barWidth}%`}
                          height={`${barHeight}%`}
                          fill={isCurrentMonth ? "url(#currentGradient)" : "url(#normalGradient)"}
                          rx="2"
                          className="hover:opacity-80 transition-opacity cursor-pointer"
                        />
                      );
                    })}
                    
                    {/* Gradientes */}
                    <defs>
                      <linearGradient id="currentGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--blue-light))" />
                      </linearGradient>
                      <linearGradient id="normalGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="hsl(var(--blue-light))" stopOpacity="0.7" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Labels de meses */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
                    {['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'].map((month, index) => (
                      <span 
                        key={month}
                        className={`text-xs ${index === 11 ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                      >
                        {month}
                      </span>
                    ))}
                  </div>
                  
                  {/* Labels de valores en el eje Y con más espacio */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-2 text-xs text-muted-foreground w-12">
                    <span>$100K</span>
                    <span>$75K</span>
                    <span>$50K</span>
                    <span>$25K</span>
                    <span>$0</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Promedio</p>
                    <p className="font-semibold">{formatCurrency(87500)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Máximo</p>
                    <p className="font-semibold">{formatCurrency(125000)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Crecimiento</p>
                    <p className="font-semibold text-green-500">+{metrics.monthlyGrowth.toFixed(1)}%</p>
                  </div>
                </div>
              </Card>

              {/* Customer Satisfaction */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Satisfacción del Cliente</h3>
                  <Badge variant="secondary">
                    <Zap className="h-3 w-3 mr-1" />
                    En Tiempo Real
                  </Badge>
                </div>
                
                {/* Layout optimizado para usar todo el espacio */}
                <div className="h-80 flex flex-col">
                  {/* Sección superior: Rating principal */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-3">
                        {metrics.customerSatisfaction.toFixed(1)}/5.0
                      </div>
                      <div className="flex justify-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div
                            key={star}
                            className={`w-8 h-8 ${
                              star <= Math.floor(metrics.customerSatisfaction)
                                ? 'text-yellow-400'
                                : star === Math.ceil(metrics.customerSatisfaction) && metrics.customerSatisfaction % 1 !== 0
                                ? 'text-yellow-200'
                                : 'text-gray-300'
                            }`}
                          >
                            ★
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Basado en {formatNumber(1247)} evaluaciones
                      </div>
                    </div>
                  </div>
                  
                  {/* Sección inferior: Desglose detallado */}
                  <div className="flex-1 space-y-4">
                    <div className="text-center mb-4">
                      <h4 className="text-sm font-semibold text-muted-foreground">Distribución por Calificación</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm">Excelente (5⭐)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-32 h-3 bg-gray-200 rounded-full">
                            <div className="w-3/4 h-3 bg-green-500 rounded-full" />
                          </div>
                          <span className="text-sm font-medium w-12 text-right">68%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">Bueno (4⭐)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-32 h-3 bg-gray-200 rounded-full">
                            <div className="w-1/2 h-3 bg-blue-500 rounded-full" />
                          </div>
                          <span className="text-sm font-medium w-12 text-right">24%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm">Regular (3⭐)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-32 h-3 bg-gray-200 rounded-full">
                            <div className="w-1/4 h-3 bg-yellow-500 rounded-full" />
                          </div>
                          <span className="text-sm font-medium w-12 text-right">8%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <span className="text-sm">Malo (2⭐)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-32 h-3 bg-gray-200 rounded-full">
                            <div className="w-1/12 h-3 bg-orange-500 rounded-full" />
                          </div>
                          <span className="text-sm font-medium w-12 text-right">2%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Muy Malo (1⭐)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-32 h-3 bg-gray-200 rounded-full">
                            <div className="w-1/20 h-3 bg-red-500 rounded-full" />
                          </div>
                          <span className="text-sm font-medium w-12 text-right">1%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Métricas adicionales en la parte inferior */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Tendencia</p>
                      <p className="font-semibold text-green-500 flex items-center justify-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        +0.3%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Última Actualización</p>
                      <p className="font-semibold">{formatTime(currentTime)}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Performance Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Tiempo de Respuesta</h3>
                    <p className="text-sm text-muted-foreground">Promedio</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-500 mb-2">1.2s</div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingDown className="h-4 w-4" />
                  -15% vs mes anterior
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Productividad</h3>
                    <p className="text-sm text-muted-foreground">Empleados</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-500 mb-2">{metrics.employeeProductivity.toFixed(0)}%</div>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <TrendingUp className="h-4 w-4" />
                  +8% vs mes anterior
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Rotación Inventario</h3>
                    <p className="text-sm text-muted-foreground">Veces por año</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-500 mb-2">{metrics.inventoryTurnover.toFixed(1)}x</div>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <TrendingUp className="h-4 w-4" />
                  +12% vs mes anterior
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Reportes Automatizados</h2>
              <p className="text-xl text-muted-foreground">
                Generación automática de informes ejecutivos y análisis comparativos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Reporte Ejecutivo</h3>
                    <p className="text-sm text-muted-foreground">Mensual</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Resumen completo de KPIs, tendencias y recomendaciones estratégicas.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Análisis de Ventas</h3>
                    <p className="text-sm text-muted-foreground">Semanal</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Desglose detallado de ventas por producto, región y canal.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Satisfacción Cliente</h3>
                    <p className="text-sm text-muted-foreground">Quincenal</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Análisis de feedback y métricas de experiencia del cliente.
                </p>
              </Card>
            </div>

            <Card className="p-6">
              <p>aqui vamos a poner un elemento tipo galeria/carrusel vamos a poner los dashboard del orli</p>
            </Card>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-blue-light/10 border border-primary/20 rounded-2xl p-12 mt-12">
          <p>aqui va un cta</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessIntelligenceDemo;
