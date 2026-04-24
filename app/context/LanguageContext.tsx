'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    branding: "RuralNet Sudan",
    tagline: "Affordable, Solar-Powered Internet for Rural Communities.",
    connect_btn: "Connect to Internet",
    admin_btn: "Admin Dashboard",
    voucher_label: "Voucher Code",
    voucher_placeholder: "Enter 5-digit code",
    login_btn: "Connect Now",
    login_help: "Need assistance? Contact your local network administrator.",
    login_error: "Invalid voucher code. Please try again.",
    connected_title: "You're Connected!",
    connected_msg: "Your device is now successfully authenticated on the RuralNet Sudan local network.",
    start_browsing: "Start Browsing",
    edu_content: "Educational Content",
    offline: "Offline",
    dash_title: "RuralNet Sudan - Admin Overview",
    dash_subtitle: "Monitor node performance and live voucher redemptions.",
    total_users: "Total Users",
    active: "Active",
    revenue: "Daily Revenue",
    sdg: "SDG",
    uptime: "Network Uptime",
    usage: "Bandwidth Usage",
    recent_activity: "Recent Voucher Redemptions",
    user_id: "User ID",
    voucher_type: "Voucher Type",
    time: "Time",
    status: "Status",
    success: "Success",
    back_home: "Back to Home",
    sign_out: "Sign Out",
    overview: "Overview",
    subscribers: "Subscribers",
    settings: "Settings",
    manager: "Sudan Manager",
    daily_access: "Daily Access",
    weekly_premium: "Weekly Premium",
    mins_ago: "mins ago",
    hours_ago: "hours ago",
    hackathon: "MVP Version • Built for Hackathon Demo",
    solar_powered: "Solar Powered",
    reliable: "Reliable Connectivity",
    secure: "Secure Access",
    lead_dev: "Lead Developer",
    executive_overview: "Executive Overview",
    network_analytics: "Network Analytics",
    system_settings: "System Settings",
    portal_home: "Portal Home",
    growth_impact_dash: "Growth & Impact Dashboard",
    live_status: "Live Network Status",
    systems_operational: "Systems Operational",
    active_users: "Active Users",
    peak_dau: "Peak DAU",
    cost_per_user: "Cost Per User",
    efficiency_high: "High Efficiency",
    down_from_jan: "Down from 10k SDG in Jan",
    avg_baseline: "Avg Baseline",
    avg_speed: "Avg Speed",
    target_coverage: "Target Coverage",
    usage_breakdown: "Network Usage Breakdown",
    education: "Education",
    farming: "Farming / Agriculture",
    social: "Social / Other",
    impact_highlight: "Impact Highlight",
    impact_msg: "Our data shows that over half of network capacity is directly supporting educational initiatives in the region.",
    q4_performance: "Q4 Performance & Growth",
    quarterly_benchmarks: "Quarterly Benchmarks",
    regional_stats: "Regional Performance Data",
    month: "Month",
    verified_by: "Verified by Awad • Data Analysis Team",
    nodes_optimized: "Nodes Optimized",
    october: "October",
    november: "November",
    december: "December"
  },
  ar: {
    branding: "رورال نت السودان",
    tagline: "إنترنت بأسعار معقولة يعمل بالطاقة الشمسية للمجتمعات الريفية.",
    connect_btn: "الاتصال بالإنترنت",
    admin_btn: "لوحة تحكم المسؤول",
    voucher_label: "رمز القسيمة",
    voucher_placeholder: "أدخل الرمز المكون من 5 أرقام",
    login_btn: "اتصل الآن",
    login_help: "تحتاج مساعدة؟ تواصل مع مسؤول الشبكة المحلي.",
    login_error: "رمز القسيمة غير صالح. يرجى المحاولة مرة أخرى.",
    connected_title: "أنت متصل الآن!",
    connected_msg: "تمت مصادقة جهازك بنجاح على شبكة رورال نت السودان المحلية.",
    start_browsing: "ابدأ التصفح",
    edu_content: "المحتوى التعليمي",
    offline: "بدون إنترنت",
    dash_title: "رورال نت السودان - نظرة عامة",
    dash_subtitle: "مراقبة أداء العقدة وعمليات استرداد القسائم.",
    total_users: "إجمالي المستخدمين",
    active: "نشط",
    revenue: "الإيرادات اليومية",
    sdg: "جنيه سوداني",
    uptime: "وقت التشغيل",
    usage: "استهلاك البيانات",
    recent_activity: "أحدث القسائم المستردة",
    user_id: "معرف المستخدم",
    voucher_type: "نوع القسيمة",
    time: "الوقت",
    status: "الحالة",
    success: "ناجح",
    back_home: "العودة للرئيسية",
    sign_out: "تسجيل الخروج",
    overview: "نظرة عامة",
    subscribers: "المشتركون",
    settings: "الإعدادات",
    manager: "مدير السودان",
    daily_access: "وصول يومي",
    weekly_premium: "مميز أسبوعي",
    mins_ago: "دقائق مضت",
    hours_ago: "ساعات مضت",
    hackathon: "نسخة أولية • صُممت لعرض الهاكاثون",
    solar_powered: "طاقة شمسية",
    reliable: "اتصال موثوق",
    secure: "وصول آمن",
    lead_dev: "المطور الرئيسي",
    executive_overview: "نظرة عامة تنفيذية",
    network_analytics: "تحليلات الشبكة",
    system_settings: "إعدادات النظام",
    portal_home: "الرئيسية",
    growth_impact_dash: "لوحة التحكم للنمو والتأثير",
    live_status: "حالة الشبكة الحالية",
    systems_operational: "الأنظمة تعمل",
    active_users: "المستخدمون النشطون",
    peak_dau: "ذروة النشاط اليومي",
    cost_per_user: "التكلفة لكل مستخدم",
    efficiency_high: "كفاءة عالية",
    down_from_jan: "انخفضت من 10 آلاف جنيه في يناير",
    avg_baseline: "المتوسط المرجعي",
    avg_speed: "متوسط السرعة",
    target_coverage: "التغطية المستهدفة",
    usage_breakdown: "توزيع استخدام الشبكة",
    education: "التعليم",
    farming: "الزراعة",
    social: "اجتماعي / أخرى",
    impact_highlight: "تسليط الضوء على التأثير",
    impact_msg: "تظهر بياناتنا أن أكثر من نصف سعة الشبكة تدعم بشكل مباشر المبادرات التعليمية في المنطقة.",
    q4_performance: "أداء ونمو الربع الرابع",
    quarterly_benchmarks: "المعايير الفصلية",
    regional_stats: "بيانات الأداء الإقليمي",
    month: "الشهر",
    verified_by: "تم التحقق بواسطة عوض • فريق تحليل البيانات",
    nodes_optimized: "تم تحسين العقد",
    october: "أكتوبر",
    november: "نوفمبر",
    december: "ديسمبر"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
