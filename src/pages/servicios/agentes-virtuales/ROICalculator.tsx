import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Clock, 
  BarChart3, 
  Download, 
  Share2, 
  MessageCircle,
  Plus, 
  Minus,
  Bot,
  Target,
  Zap,
  CheckCircle,
  AlertCircle,
  Info,
  ChevronDown,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Footer } from "@/components/Footer";

const ROICalculator = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showValidations, setShowValidations] = useState(false);
  const [formData, setFormData] = useState({
    // Información básica
    companyName: "",
    industry: "",
    
    // Personal actual
    agents: 3,
    salaryPerAgent: 800,
    workingHours: 8,
    workingDays: 5,
    
    // Volumen de trabajo
    dailyQueries: 150,
    avgTimePerQuery: 12,
    
    // Costos de implementación
    implementationCost: 2000,
    monthlyMaintenance: 300,
    
    // Metas y expectativas
    targetResponseTime: 2,
    targetLanguages: 1,
    targetAvailability: 24
  });

  // Opciones predefinidas
  const industryOptions = [
    { value: "retail", label: "Retail / Comercio" },
    { value: "salud", label: "Salud / Medicina" },
    { value: "finanzas", label: "Servicios Financieros" },
    { value: "educacion", label: "Educación" },
    { value: "tecnologia", label: "Tecnología" },
    { value: "inmobiliaria", label: "Inmobiliaria" },
    { value: "restaurantes", label: "Restaurantes / Gastronomía" },
    { value: "logistica", label: "Logística / Transporte" },
    { value: "turismo", label: "Turismo / Hotelería" },
    { value: "otros", label: "Otros" }
  ];

  const budgetOptions = [
    { 
      value: "basico", 
      label: "Básico - $1,000", 
      implementation: 1000, 
      monthly: 200,
      description: "Perfecto para pequeñas empresas o startups. Incluye configuración básica, entrenamiento del modelo IA y soporte por email.",
      features: ["1 agente virtual", "Hasta 100 consultas/día", "Soporte por email", "Configuración básica"]
    },
    { 
      value: "estandar", 
      label: "Estándar - $2,000", 
      implementation: 2000, 
      monthly: 300,
      description: "Ideal para empresas medianas. Incluye integración con sistemas existentes, múltiples canales y soporte prioritario.",
      features: ["2-3 agentes virtuales", "Hasta 500 consultas/día", "Soporte telefónico", "Integración básica", "Múltiples idiomas"]
    },
    { 
      value: "avanzado", 
      label: "Avanzado - $3,500", 
      implementation: 3500, 
      monthly: 500,
      description: "Para empresas grandes con necesidades complejas. Incluye análisis avanzado, personalización completa y soporte dedicado.",
      features: ["5+ agentes virtuales", "Hasta 1000 consultas/día", "Soporte dedicado", "Integración completa", "Análisis avanzado", "Personalización"]
    },
    { 
      value: "premium", 
      label: "Premium - $5,000", 
      implementation: 5000, 
      monthly: 800,
      description: "Solución enterprise completa. Incluye consultoría estratégica, desarrollo personalizado y soporte 24/7.",
      features: ["Agentes ilimitados", "Consultas ilimitadas", "Soporte 24/7", "Desarrollo personalizado", "Consultoría estratégica", "SLA garantizado"]
    },
    { 
      value: "personalizado", 
      label: "Personalizado", 
      implementation: 0, 
      monthly: 0,
      description: "Solución completamente personalizada según tus necesidades específicas.",
      features: ["A medida", "Consultoría personalizada", "Desarrollo específico"]
    }
  ];

  // CSS personalizado para eliminar spinners
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type="number"] {
        -moz-appearance: textfield;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Inputs completamente básicos sin componentes personalizados

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Funciones de validación para cada paso
  const validateStep1 = () => {
    return formData.companyName.trim() !== "" && formData.industry !== "";
  };

  const validateStep2 = () => {
    return formData.agents > 0 && formData.salaryPerAgent > 0 && 
           formData.workingHours > 0 && formData.workingDays > 0;
  };

  const validateStep3 = () => {
    return formData.dailyQueries > 0 && formData.avgTimePerQuery > 0;
  };

  const validateStep4 = () => {
    return formData.implementationCost > 0 && formData.monthlyMaintenance > 0;
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1: return validateStep1();
      case 2: return validateStep2();
      case 3: return validateStep3();
      case 4: return validateStep4();
      default: return true;
    }
  };

  // Cálculos avanzados del ROI
  const calculateROI = () => {
    // Costos actuales
    const monthlySalary = formData.agents * formData.salaryPerAgent;
    const weeklyHours = formData.workingHours * formData.workingDays;
    const monthlyHours = weeklyHours * 4.33;
    const hourlyRate = monthlySalary / monthlyHours;
    const dailyWorkload = formData.dailyQueries * formData.avgTimePerQuery / 60;
    const currentMonthlyCost = hourlyRate * dailyWorkload * 30;

    // Costos con agentes virtuales
    const virtualAgentCost = formData.monthlyMaintenance;
    const monthlySavings = currentMonthlyCost - virtualAgentCost;
    const annualSavings = monthlySavings * 12;
    
    // ROI y métricas
    const roi = formData.implementationCost > 0 ? 
      ((annualSavings - formData.implementationCost) / formData.implementationCost) * 100 : 0;
    const paybackPeriod = monthlySavings > 0 ? 
      formData.implementationCost / monthlySavings : 0;
    const threeYearSavings = annualSavings * 3 - formData.implementationCost;

    // Métricas de eficiencia
    const efficiencyGain = formData.avgTimePerQuery > 0 ? 
      ((formData.avgTimePerQuery - formData.targetResponseTime) / formData.avgTimePerQuery) * 100 : 0;
    const availabilityGain = (formData.workingHours * formData.workingDays) > 0 ? 
      ((formData.targetAvailability - (formData.workingHours * formData.workingDays)) / (formData.workingHours * formData.workingDays)) * 100 : 0;

    // Debug: log para verificar valores
    // console.log('ROI Calculation Debug:', {
    //   formData,
    //   monthlySalary,
    //   currentMonthlyCost,
    //   virtualAgentCost,
    //   monthlySavings,
    //   roi
    // });

    return {
      currentMonthlyCost: currentMonthlyCost || 0,
      virtualAgentCost: virtualAgentCost || 0,
      monthlySavings: monthlySavings || 0,
      annualSavings: annualSavings || 0,
      roi: roi || 0,
      paybackPeriod: paybackPeriod || 0,
      threeYearSavings: threeYearSavings || 0,
      efficiencyGain: efficiencyGain || 0,
      availabilityGain: availabilityGain || 0,
      hourlyRate: hourlyRate || 0,
      dailyWorkload: dailyWorkload || 0
    };
  };

  const results = calculateROI();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Hola, he calculado mi ROI con Agentes Virtuales de IonosHub:\n\n` +
      `📊 Datos de mi empresa:\n` +
      `• ${formData.agents} agentes humanos\n` +
      `• $${formData.salaryPerAgent}/mes por agente\n` +
      `• ${formData.dailyQueries} consultas diarias\n` +
      `• ${formData.avgTimePerQuery} min por consulta\n\n` +
      `💰 Resultados del cálculo:\n` +
      `• Ahorro mensual: $${results.monthlySavings.toLocaleString()}\n` +
      `• ROI primer año: ${results.roi.toFixed(1)}%\n` +
      `• Recuperación: ${results.paybackPeriod.toFixed(1)} meses\n\n` +
      `Me interesa conocer más sobre la implementación.`
    );
    window.open(`https://wa.me/593992249152?text=${message}`, "_blank", "noopener,noreferrer");
  };

  const handleDownloadReport = () => {
    const reportData = {
      company: formData.companyName || "Empresa",
      date: new Date().toLocaleDateString(),
      inputs: formData,
      results: results
    };
    
    const dataStr = JSON.stringify(reportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ROI-Report-${formData.companyName || 'Empresa'}-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const steps = [
    { id: 1, title: "Información Básica", icon: Info },
    { id: 2, title: "Personal Actual", icon: Users },
    { id: 3, title: "Volumen de Trabajo", icon: BarChart3 },
    { id: 4, title: "Costos", icon: DollarSign },
    { id: 5, title: "Resultados", icon: TrendingUp }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Información de tu Empresa</h3>
              <p className="text-muted-foreground">Comencemos con algunos datos básicos</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="companyName" className="text-sm font-medium">Nombre de tu empresa</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="Ej: Mi Empresa S.A."
                  className="h-12 mt-2"
                />
                {showValidations && formData.companyName.trim() === "" && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    El nombre de la empresa es obligatorio
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="industry" className="text-sm font-medium">Industria</Label>
                <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                  <SelectTrigger className="h-12 mt-2">
                    <SelectValue placeholder="Selecciona tu industria" />
                  </SelectTrigger>
                  <SelectContent>
                    {industryOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {showValidations && formData.industry === "" && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Debes seleccionar una industria
                  </p>
                )}
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">¿Por qué necesitamos esta información?</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Estos datos nos ayudan a personalizar el cálculo y generar un reporte más preciso para tu industria específica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Personal de Atención Actual</h3>
              <p className="text-muted-foreground">Cuéntanos sobre tu equipo de atención al cliente</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="agents" className="text-sm font-medium">¿Cuántos agentes humanos tienes?</Label>
                <p className="text-xs text-muted-foreground mb-2">Personas que atienden clientes actualmente</p>
                <input
                  id="agents"
                  type="number"
                  min="1"
                  max="50"
                  value={formData.agents}
                  onChange={(e) => handleInputChange('agents', parseInt(e.target.value) || 1)}
                  placeholder="Ej: 5"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12"
                />
                {showValidations && formData.agents <= 0 && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Debe ser mayor a 0
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="salary" className="text-sm font-medium">¿Cuánto pagas mensualmente por agente?</Label>
                <p className="text-xs text-muted-foreground mb-2">Incluye salario + beneficios + cargas sociales</p>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm pointer-events-none">$</span>
                  <input
                    id="salary"
                    type="number"
                    min="0"
                    max="10000"
                    value={formData.salaryPerAgent}
                    onChange={(e) => handleInputChange('salaryPerAgent', parseInt(e.target.value) || 0)}
                    placeholder="Ej: 800"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 pl-8"
                  />
                </div>
                {showValidations && formData.salaryPerAgent <= 0 && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Debe ser mayor a $0
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="hours" className="text-sm font-medium">¿Cuántas horas trabajan por día?</Label>
                <p className="text-xs text-muted-foreground mb-2">Horas efectivas de atención al cliente</p>
                <input
                  id="hours"
                  type="number"
                  min="1"
                  max="24"
                  value={formData.workingHours}
                  onChange={(e) => handleInputChange('workingHours', parseInt(e.target.value) || 1)}
                  placeholder="Ej: 8"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12"
                />
                {showValidations && formData.workingHours <= 0 && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Debe ser mayor a 0 horas
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="days" className="text-sm font-medium">¿Cuántos días trabajan por semana?</Label>
                <p className="text-xs text-muted-foreground mb-2">Días laborales de atención al cliente</p>
                <input
                  id="days"
                  type="number"
                  min="1"
                  max="7"
                  value={formData.workingDays}
                  onChange={(e) => handleInputChange('workingDays', parseInt(e.target.value) || 1)}
                  placeholder="Ej: 5"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12"
                />
                {showValidations && formData.workingDays <= 0 && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Debe ser mayor a 0 días
                  </p>
                )}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Costo actual calculado</h4>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Basado en tus datos: <strong>${results.currentMonthlyCost.toLocaleString()}/mes</strong> en costos de personal
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Volumen de Trabajo</h3>
              <p className="text-muted-foreground">¿Cuántas consultas maneja tu equipo?</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="queries" className="text-sm font-medium">¿Cuántas consultas reciben por día?</Label>
                <p className="text-xs text-muted-foreground mb-2">WhatsApp, llamadas, emails, chat web</p>
                <input
                  id="queries"
                  type="number"
                  min="1"
                  max="10000"
                  value={formData.dailyQueries}
                  onChange={(e) => handleInputChange('dailyQueries', parseInt(e.target.value) || 1)}
                  placeholder="Ej: 200"
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12"
                />
                {showValidations && formData.dailyQueries <= 0 && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Debe ser mayor a 0 consultas
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="time" className="text-sm font-medium">¿Cuánto tiempo toma cada consulta?</Label>
                <p className="text-xs text-muted-foreground mb-2">Tiempo promedio en minutos por consulta</p>
                <div className="relative">
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm pointer-events-none">min</span>
                  <input
                    id="time"
                    type="number"
                    min="1"
                    max="120"
                    value={formData.avgTimePerQuery}
                    onChange={(e) => handleInputChange('avgTimePerQuery', parseInt(e.target.value) || 1)}
                    placeholder="Ej: 10"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 pr-12"
                  />
                </div>
                {showValidations && formData.avgTimePerQuery <= 0 && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Debe ser mayor a 0 minutos
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">{results.dailyWorkload.toFixed(1)}h</div>
                <div className="text-sm text-muted-foreground">Horas diarias de trabajo</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">${results.hourlyRate.toFixed(2)}</div>
                <div className="text-sm text-muted-foreground">Costo por hora</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">{formData.dailyQueries * 30}</div>
                <div className="text-sm text-muted-foreground">Consultas mensuales</div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Costos de Implementación</h3>
              <p className="text-muted-foreground">Define tu presupuesto para agentes virtuales</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="budget" className="text-sm font-medium">¿Qué tipo de solución necesitas?</Label>
                <p className="text-xs text-muted-foreground mb-2">Selecciona según el tamaño y complejidad de tu empresa</p>
                <Select 
                  value={budgetOptions.find(opt => opt.implementation === formData.implementationCost && opt.monthly === formData.monthlyMaintenance)?.value || "estandar"}
                  onValueChange={(value) => {
                    const option = budgetOptions.find(opt => opt.value === value);
                    if (option) {
                      handleInputChange('implementationCost', option.implementation);
                      handleInputChange('monthlyMaintenance', option.monthly);
                    }
                  }}
                >
                  <SelectTrigger className="h-12 mt-2">
                    <SelectValue placeholder="Selecciona tu presupuesto" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {showValidations && formData.implementationCost <= 0 && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Debes seleccionar una opción de presupuesto
                  </p>
                )}
              </div>
              <div>
                <Label className="text-sm font-medium">Resumen de costos</Label>
                <div className="mt-2 p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Implementación:</span>
                    <span className="font-semibold">${formData.implementationCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Mensual:</span>
                    <span className="font-semibold">${formData.monthlyMaintenance.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Opción personalizada */}
            {budgetOptions.find(opt => opt.implementation === formData.implementationCost && opt.monthly === formData.monthlyMaintenance)?.value === "personalizado" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="custom-implementation" className="text-sm font-medium">Presupuesto personalizado para implementación</Label>
                  <p className="text-xs text-muted-foreground mb-2">Define tu propio presupuesto</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm pointer-events-none">$</span>
                    <input
                      id="custom-implementation"
                      type="number"
                      min="0"
                      max="50000"
                      value={formData.implementationCost}
                      onChange={(e) => handleInputChange('implementationCost', parseInt(e.target.value) || 0)}
                      placeholder="Ej: 2000"
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 pl-8"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="custom-maintenance" className="text-sm font-medium">Mantenimiento mensual personalizado</Label>
                  <p className="text-xs text-muted-foreground mb-2">Define tu presupuesto mensual</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm pointer-events-none">$</span>
                    <input
                      id="custom-maintenance"
                      type="number"
                      min="0"
                      max="5000"
                      value={formData.monthlyMaintenance}
                      onChange={(e) => handleInputChange('monthlyMaintenance', parseInt(e.target.value) || 0)}
                      placeholder="Ej: 300"
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 pl-8"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Descripción de la opción seleccionada */}
            {(() => {
              const selectedOption = budgetOptions.find(opt => opt.implementation === formData.implementationCost && opt.monthly === formData.monthlyMaintenance);
              if (selectedOption && selectedOption.value !== "personalizado") {
                return (
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                      <Info className="h-5 w-5" />
                      {selectedOption.label}
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                      {selectedOption.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {selectedOption.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-blue-800 dark:text-blue-200">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })()}

            <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Inversión inicial</h4>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    La implementación incluye: configuración personalizada, entrenamiento del modelo IA, integración con tus sistemas y capacitación del equipo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Resultados del Análisis</h3>
              <p className="text-muted-foreground">Tu ROI calculado con agentes virtuales</p>
            </div>

            {/* Debug info */}
            {/* {process.env.NODE_ENV === 'development' && (
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Debug Info:</h4>
                <pre className="text-xs text-yellow-700 dark:text-yellow-300 overflow-auto">
                  {JSON.stringify(results, null, 2)}
                </pre>
              </div>
            )} */}

            {/* Verificar si hay resultados válidos */}
            {results && results.currentMonthlyCost > 0 ? (
              <>
                {/* Métricas principales */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-red-500 mb-1">
                  ${results.currentMonthlyCost.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Costo Actual</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-500 mb-1">
                  ${results.virtualAgentCost.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Con Agentes Virtuales</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500 mb-1">
                  ${results.monthlySavings.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Ahorro Mensual</div>
              </Card>
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-500 mb-1">
                  {results.roi.toFixed(1)}%
                </div>
                <div className="text-sm text-muted-foreground">ROI Primer Año</div>
              </Card>
            </div>

            {/* Gráfico de comparación */}
            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Comparación de Costos
              </h4>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-full h-32 bg-gradient-to-t from-red-500/20 to-red-500/5 rounded-lg flex items-end justify-center mb-3">
                    <div 
                      className="w-8 bg-red-500 rounded-t"
                      style={{ height: `${Math.min((results.currentMonthlyCost / results.currentMonthlyCost) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="text-lg font-semibold text-red-500">
                    ${results.currentMonthlyCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Costo Actual</div>
                </div>

                <div className="text-center">
                  <div className="w-full h-32 bg-gradient-to-t from-blue-500/20 to-blue-500/5 rounded-lg flex items-end justify-center mb-3">
                    <div 
                      className="w-8 bg-blue-500 rounded-t"
                      style={{ height: `${Math.min((results.virtualAgentCost / results.currentMonthlyCost) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="text-lg font-semibold text-blue-500">
                    ${results.virtualAgentCost.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Con Agentes Virtuales</div>
                </div>

                <div className="text-center">
                  <div className="w-full h-32 bg-gradient-to-t from-green-500/20 to-green-500/5 rounded-lg flex items-end justify-center mb-3">
                    <div 
                      className="w-8 bg-green-500 rounded-t"
                      style={{ height: `${Math.min(Math.abs(results.monthlySavings / results.currentMonthlyCost) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="text-lg font-semibold text-green-500">
                    ${results.monthlySavings.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Ahorro Mensual</div>
                </div>
              </div>
            </Card>

            {/* Métricas adicionales */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4">Métricas de Retorno</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Ahorro Anual</span>
                    <span className="font-semibold text-green-500">${results.annualSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Recuperación de Inversión</span>
                    <span className="font-semibold">{results.paybackPeriod.toFixed(1)} meses</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Ahorro a 3 años</span>
                    <span className="font-semibold text-green-500">${results.threeYearSavings.toLocaleString()}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4">Beneficios Adicionales</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-yellow-500" />
                    <div>
                      <div className="font-semibold">Respuesta Instantánea</div>
                      <div className="text-sm text-muted-foreground">Menos de {formData.targetResponseTime} segundos</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-semibold">Disponibilidad 24/7</div>
                      <div className="text-sm text-muted-foreground">Sin horarios ni días festivos</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="font-semibold">Múltiples Idiomas</div>
                      <div className="text-sm text-muted-foreground">Hasta {formData.targetLanguages} idiomas</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Acciones */}
            <div className="text-center bg-gradient-to-r from-primary/10 via-blue-light/10 to-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">¿Listo para implementar?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Basado en tu análisis, los agentes virtuales pueden generar un ahorro significativo mientras mejoran la experiencia del cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-blue-light" onClick={handleWhatsAppContact}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contactar por WhatsApp
                </Button>
                <Button size="lg" variant="outline" onClick={handleDownloadReport}>
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Reporte
                </Button>
              </div>
            </div>
              </>
            ) : (
              <div className="text-center py-12">
                <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Error en el cálculo</h3>
                <p className="text-muted-foreground mb-4">
                  No se pudieron calcular los resultados. Por favor, verifica que todos los campos estén completos correctamente.
                </p>
                <Button onClick={() => setCurrentStep(1)} variant="outline">
                  Volver al inicio
                </Button>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={() => navigate('/agentes-virtuales')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" />
              <span className="font-semibold">ROI Calculator</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-primary border-primary text-primary-foreground' 
                    : 'border-muted-foreground text-muted-foreground'
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-2 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-muted-foreground'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">{steps[currentStep - 1].title}</h2>
            <Progress value={(currentStep / steps.length) * 100} className="mt-2" />
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-8 mb-8">
          {renderStepContent()}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => {
              setCurrentStep(Math.max(1, currentStep - 1));
              setShowValidations(false); // Reset validations when going back
            }}
            disabled={currentStep === 1}
          >
            Anterior
          </Button>
          
          {currentStep < steps.length ? (
            <Button
              onClick={() => {
                if (canProceedToNext()) {
                  setCurrentStep(Math.min(steps.length, currentStep + 1));
                  setShowValidations(false); // Reset validations for next step
                } else {
                  setShowValidations(true); // Show validations when trying to proceed
                }
              }}
              disabled={!canProceedToNext()}
              className={`bg-gradient-to-r from-primary to-blue-light ${!canProceedToNext() ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Siguiente
            </Button>
          ) : (
            <Button 
              onClick={() => setCurrentStep(1)}
              variant="outline"
            >
              Empezar de Nuevo
            </Button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ROICalculator;
