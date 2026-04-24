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
    secure: "Secure Access"
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
    secure: "وصول آمن"
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
