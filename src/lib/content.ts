export type Language = "fa" | "en";
export type Theme = "light" | "dark";

const fa = {
  brand: {
    name: "پیام پروژه",
    tagline: "سیستم مدیریت نگهداری پیشگیرانه",
    description:
      "پیام پروژه تجهیزات، برنامه‌های نگهداری، سوابق سرویس، قطعات یدکی و گزارش‌ها را در یک پنل پروژه‌محور با دسترسی نقش‌محور یکپارچه می‌کند.",
  },
  ui: {
    login: "ورود",
    startFree: "شروع رایگان",
    openMenu: "باز کردن منو",
    closeMenu: "بستن منو",
    mainNav: "ناوبری اصلی",
    mobileNav: "ناوبری موبایل",
    switchLanguage: "تغییر زبان",
    switchToLight: "تغییر به حالت روشن",
    switchToDark: "تغییر به حالت تیره",
    languageShort: "EN",
    builtWith: "ساخته‌شده با Next.js و React",
    summaryLabel: "خلاصه امکانات",
  },
  nav: [
    { href: "/#features", label: "امکانات" },
    { href: "/#product", label: "نمای پنل" },
    { href: "/#workflow", label: "گردش کار" },
    { href: "/#roles", label: "نقش‌ها" },
    { href: "/#faq", label: "سوالات متداول" },
    { href: "/about", label: "درباره ما" },
    { href: "/contact", label: "تماس با ما" },
  ],
  hero: {
    badge: "نگهداری پیشگیرانه، پروژه‌محور",
    titleLead: "خرابی را",
    titleAccent: "قبل از وقوع",
    titleTrail: "ببینید",
    description:
      "پیام پروژه تجهیزات، برنامه‌های نگهداری، سوابق سرویس و قطعات یدکی را در یک پنل پروژه‌محور کنار هم می‌آورد؛ با دسترسی نقش‌محور و گزارش‌هایی که تأخیرها را پیش از بحرانی شدن نشان می‌دهند.",
    ctaPrimary: "ورود به پنل",
    ctaSecondary: "آشنایی با امکانات",
    trust: ["رابط فارسی و راست‌به‌چپ", "دسترسی نقش‌محور", "گزارش‌های زنده"],
    float: { title: "هشدار انقضای قطعه", meta: "فیلتر هوا — ۱۲ روز مانده" },
    mock: {
      preview: "پیش‌نمایش پنل",
      welcome: "خوش آمدید",
      title: "داشبورد نگهداری",
      date: "آذر ۱۴۰۵",
      stats: ["کل تجهیزات", "پیش‌رو", "تأخیر", "نزدیک انقضا"],
      statValues: ["۱۲۸", "۲۴", "۶", "۳"],
      statusTitle: "وضعیت برنامه‌ها",
      statusCounts: ["۱۸۴", "۲۴", "۶"],
      overdueTitle: "تأخیرهای بحرانی",
      overdue: [
        { title: "سرویس فیلتر هوای چیلر", meta: "۵ روز تأخیر" },
        { title: "بازرسی پمپ آتش‌نشانی", meta: "۲ روز تأخیر" },
        { title: "تعویض تسمه فن", meta: "امروز" },
      ],
      toastTitle: "سرویس ثبت شد",
      toastMeta: "برنامه بعدی خودکار ساخته شد",
    },
  },
  highlights: [
    { value: "۳", label: "نوع برنامه نگهداری", hint: "پیشگیرانه، اصلاحی، اضطراری" },
    { value: "۴", label: "نوع عملیات ثبت‌شده", hint: "سرویس، تعمیر، بازرسی، تعویض" },
    { value: "۳۰", label: "روز هشدار انقضای قطعه", hint: "پیش از رسیدن تاریخ انقضا" },
    { value: "۲", label: "سطح دسترسی", hint: "نقش سازمانی و نقش پروژه‌ای" },
  ],
  features: {
    eyebrow: "امکانات",
    title: "هر چیزی که برای نگهداری پیشگیرانه لازم دارید",
    description:
      "از تعریف پروژه و تجهیز تا زمان‌بندی، ثبت سرویس، گزارش‌گیری و تحلیل هوشمند؛ همه در یک جریان کاری پیوسته.",
    items: [
      {
        title: "پروژه‌ها و دسترسی پروژه‌محور",
        description:
          "تجهیزات و فعالیت‌ها را در قالب پروژه سازماندهی کنید و برای هر پروژه مدیر و عضو تعیین کنید.",
      },
      {
        title: "تجهیزات و انواع تجهیز",
        description:
          "نام، شماره سریال، مدل، سازنده، موقعیت و وضعیت هر تجهیز را ثبت و پایش کنید.",
      },
      {
        title: "برنامه‌های نگهداری",
        description:
          "برنامه پیشگیرانه، اصلاحی یا اضطراری بسازید؛ دوره تکرار، تاریخ سرویس بعدی و مسئول انجام را مشخص کنید.",
      },
      {
        title: "ثبت سرویس و سوابق",
        description:
          "سرویس، تعمیر، بازرسی یا تعویض را با هزینه و یادداشت ثبت کنید؛ با تکمیل برنامه، سرویس بعدی خودکار ساخته می‌شود.",
      },
      {
        title: "گزارش‌های عملیاتی",
        description:
          "برنامه‌های پیش‌رو، تأخیرها، قطعات در آستانه انقضا و هزینه‌های نگهداری را فیلتر و بررسی کنید.",
      },
      {
        title: "تحلیل هوشمند گزارش‌ها",
        description:
          "خلاصه وضعیت، آمار، قطعات نزدیک انقضا و رکوردهای گزارش را به مدل هوش مصنوعی بدهید و تحلیل بگیرید.",
      },
      {
        title: "قطعات یدکی و انقضا",
        description:
          "موجودی قطعات را به تفکیک تجهیز نگه دارید و ۳۰ روز پیش از انقضا هشدار بگیرید.",
      },
      {
        title: "کاربران و نقش‌ها",
        description:
          "مدیر سیستم، مدیر و کاربر؛ ساخت حساب، تغییر نقش و مدیریت دسترسی به پروژه‌ها.",
      },
      {
        title: "دو زبانه و راست‌به‌چپ",
        description:
          "رابط فارسی و انگلیسی با چیدمان کامل RTL/LTR و فونت فارسی یکپارچه در همه صفحات.",
      },
    ],
    extras: [
      {
        title: "هشدار پیش از بحران",
        description: "تأخیرها و قطعات در آستانه انقضا در داشبورد و گزارش‌ها برجسته می‌شوند.",
      },
      {
        title: "دسترسی پروژه‌محور",
        description: "اعضای هر پروژه فقط تجهیزات، برنامه‌ها و گزارش‌های همان پروژه را می‌بینند.",
      },
      {
        title: "گزارش‌های یکپارچه",
        description: "وضعیت تجهیزات، برنامه‌ها و قطعات در گزارش‌ها و داشبورد یک‌جا دیده می‌شود.",
      },
    ],
  },
  product: {
    eyebrow: "نمای پنل",
    title: "یک پنل، همه‌چیز در جای خود",
    description:
      "پیش‌نمایش زیر با همان چیدمان، رنگ‌ها و اجزای پنل واقعی ساخته شده است؛ برای دیدن هر بخش، از منوی کنار آن استفاده کنید.",
    panel: {
      nav: { dashboard: "داشبورد", devices: "تجهیزات", schedules: "نگهداری", reports: "گزارش‌ها" },
      pageTitles: {
        dashboard: "داشبورد",
        devices: "تجهیزات",
        schedules: "برنامه‌های نگهداری",
        reports: "گزارش‌های نگهداری",
      },
      header: { allProjects: "همه پروژه‌ها", languageLabel: "فارسی" },
      profile: { name: "مهندس رضایی", email: "manager@pm-project.ir", role: "مدیر", logout: "خروج" },
      status: {
        completed: "انجام‌شده",
        upcoming: "پیش‌رو",
        overdue: "تأخیر",
        active: "فعال",
        inactive: "غیرفعال",
        maintenance: "در حال نگهداری",
      },
      dashboard: {
        title: "داشبورد",
        subtitle: "نمای کلی همه پروژه‌ها و فعالیت‌های نگهداری.",
        stats: [
          { title: "کل تجهیزات", value: "۱۲۸" },
          { title: "کل برنامه‌ها", value: "۲۱۴" },
          { title: "تجهیزات فعال", value: "۹۶" },
          { title: "کارهای عقب‌افتاده", value: "۶" },
        ],
        chart: { schedules: "برنامه‌ها بر اساس وضعیت", distribution: "توزیع وضعیت برنامه‌ها" },
        donutTotal: "کل برنامه‌ها",
        overdueTitle: "تأخیرهای بحرانی",
        overdueCount: "۶ مورد تأخیر",
        overdueItems: [
          { device: "چیلر طبقه همکف", title: "سرویس فیلتر هوای چیلر", days: "۵ روز تأخیر", date: "آذر ۳" },
          { device: "پمپ آب اصلی", title: "بازرسی پمپ آتش‌نشانی", days: "۲ روز تأخیر", date: "آذر ۵" },
          { device: "دیزل ژنراتور", title: "تعویض تسمه فن", days: "۱ روز تأخیر", date: "آذر ۶" },
        ],
        upcomingTitle: "برنامه زمانی پیش‌رو",
        upcomingCount: "۲۴ مورد پیش‌رو",
        upcomingItems: [
          { device: "پمپ آب اصلی", title: "سرویس دوره‌ای پمپ", remaining: "تا ۳ روز", date: "۱۲ آذر ۱۴۰۵" },
          { device: "آسانسور نفربر", title: "بازرسی ماهانه آسانسور", remaining: "تا ۶ روز", date: "۱۵ آذر ۱۴۰۵" },
          { device: "چیلر طبقه همکف", title: "تعویض فیلتر هوا", remaining: "تا ۱۱ روز", date: "۲۰ آذر ۱۴۰۵" },
        ],
      },
      devices: {
        title: "تجهیزات",
        subtitle: "مدیریت و پایش همه تجهیزات شما",
        typesButton: "انواع تجهیز",
        addButton: "+ افزودن تجهیز",
        cardTitle: "همه تجهیزات",
        search: "جستجو بر اساس نام، شماره سریال یا مدل...",
        allStatuses: "همه وضعیت‌ها",
        allTypes: "همه انواع",
        columns: ["نام", "نوع", "پروژه", "وضعیت", "موقعیت", "نگهداری بعدی"],
        rows: [
          { name: "پمپ آب اصلی", type: "پمپ", project: "ساختمان مرکزی", status: "active", location: "طبقه منفی ۱", next: "۱۴۰۵/۰۹/۱۲" },
          { name: "چیلر طبقه همکف", type: "تاسیسات سرمایشی", project: "مجتمع تجاری", status: "maintenance", location: "همکف", next: "۱۴۰۵/۰۹/۰۸" },
          { name: "دیزل ژنراتور", type: "ژنراتور", project: "سایت تولید", status: "active", location: "اتاق ژنراتور", next: "۱۴۰۵/۰۹/۲۰" },
          { name: "آسانسور نفربر", type: "آسانسور", project: "ساختمان اداری", status: "inactive", location: "طبقه ۵", next: "—" },
        ],
      },
      schedules: {
        title: "برنامه‌های نگهداری",
        subtitle: "مدیریت برنامه‌های پیشگیرانه، اصلاحی و اضطراری.",
        createButton: "+ ایجاد برنامه",
        cardTitle: "برنامه‌های نگهداری",
        filterLabel: "فیلتر وضعیت",
        filterAll: "همه برنامه‌ها",
        columns: ["برنامه", "تجهیز", "نوع", "نگهداری بعدی", "مسئول انجام", "وضعیت"],
        rows: [
          { title: "سرویس دوره‌ای پمپ", device: "پمپ آب اصلی", type: "پیشگیرانه", next: "۱۴۰۵/۰۹/۱۲", assigned: "علی محمدی", status: "upcoming" },
          { title: "بازرسی سالانه چیلر", device: "چیلر طبقه همکف", type: "پیشگیرانه", next: "۱۴۰۵/۰۹/۰۸", assigned: "سارا احمدی", status: "overdue" },
          { title: "تعویض فیلتر هوا", device: "چیلر طبقه همکف", type: "اصلاحی", next: "۱۴۰۵/۰۹/۲۰", assigned: "—", status: "upcoming" },
          { title: "تست ژنراتور", device: "دیزل ژنراتور", type: "اضطراری", next: "۱۴۰۵/۰۹/۰۲", assigned: "رضا کریمی", status: "completed" },
        ],
      },
      reports: {
        title: "گزارش‌های نگهداری",
        subtitle: "گزارش و تحلیل سوابق نگهداری همه تجهیزات.",
        refresh: "بازخوانی",
        summary: [
          { title: "کل تجهیزات", value: "۱۲۸" },
          { title: "کل نگهداری", value: "۳۴۲" },
          { title: "انجام‌شده", value: "۲۹۶" },
          { title: "در انتظار", value: "۴۰" },
          { title: "تأخیر", value: "۶" },
          { title: "مجموع هزینه", value: "۴۸٬۲۰۰" },
        ],
        partsTitle: "قطعات در آستانه انقضا (۳ مورد)",
        partsColumns: ["قطعه", "تجهیز", "تاریخ انقضا", "روزهای باقی‌مانده"],
        partsRows: [
          { part: "فیلتر هوا", device: "چیلر طبقه همکف", expiry: "۱۴۰۵/۱۰/۰۲", days: "۱۲ روز" },
          { part: "روغن هیدرولیک", device: "پمپ آب اصلی", expiry: "۱۴۰۵/۱۰/۱۱", days: "۲۱ روز" },
          { part: "تسمه فن", device: "دیزل ژنراتور", expiry: "۱۴۰۵/۱۰/۱۸", days: "۲۸ روز" },
        ],
        filters: {
          title: "فیلترها",
          project: "پروژه",
          allProjects: "همه پروژه‌ها",
          device: "تجهیز",
          allDevices: "همه تجهیزات",
          type: "نوع نگهداری",
          allTypes: "همه انواع",
          status: "وضعیت",
          allStatuses: "همه وضعیت‌ها",
          start: "تاریخ شروع",
          end: "تاریخ پایان",
          startValue: "۱۴۰۵/۰۹/۰۱",
          endValue: "۱۴۰۵/۰۹/۳۰",
          reset: "بازنشانی فیلترها",
        },
        itemsTitle: "موارد گزارش (۳۴۲ مورد)",
        itemsColumns: ["تجهیز", "پروژه", "نوع", "وضعیت", "تاریخ نگهداری", "هزینه"],
        itemsRows: [
          { device: "پمپ آب اصلی", project: "ساختمان مرکزی", type: "سرویس", status: "completed", date: "۱۴۰۵/۰۹/۰۶", cost: "۲٬۵۰۰٬۰۰۰" },
          { device: "چیلر طبقه همکف", project: "مجتمع تجاری", type: "تعمیر", status: "overdue", date: "۱۴۰۵/۰۹/۰۳", cost: "۸٬۴۰۰٬۰۰۰" },
          { device: "دیزل ژنراتور", project: "سایت تولید", type: "بازرسی", status: "completed", date: "۱۴۰۵/۰۸/۲۸", cost: "۱٬۲۰۰٬۰۰۰" },
          { device: "آسانسور نفربر", project: "ساختمان اداری", type: "تعویض", status: "upcoming", date: "۱۴۰۵/۰۹/۱۵", cost: "—" },
        ],
      },
    },
  },
  ai: {
    badge: "تحلیل هوشمند",
    title: "گزارش‌ها را بخوانید، نه فقط جمع کنید",
    description:
      "وضعیت نگهداری را با هوش مصنوعی تحلیل کنید. پنل داده‌های گزارش فعلی را به مدل می‌فرستد و یک تحلیل خوانا از تأخیرها، ریسک‌ها و اقدام‌های پیشنهادی برمی‌گرداند.",
    inputs: [
      "فیلترها و بازه زمانی انتخاب‌شده",
      "آمار خلاصه گزارش (تعداد، وضعیت و هزینه)",
      "قطعات در آستانه انقضا",
      "رکوردهای گزارش برای بررسی دقیق‌تر",
    ],
    footnote: "تحلیل با کلید سرویس هوش مصنوعی در تنظیمات پنل فعال می‌شود.",
    cardTitle: "تحلیل وضعیت نگهداری",
    cardMeta: "گزارش‌های آذر ۱۴۰۵",
    cardBadge: "نمونه خروجی",
    insights: [
      "۶ برنامه دارای تأخیر است؛ دو مورد بیش از ۵ روز از موعد گذشته‌اند.",
      "بیشترین تأخیر مربوط به تجهیزات سرمایشی پروژه «مجتمع تجاری» است.",
      "سه قطعه تا کمتر از ۳۰ روز دیگر منقضی می‌شوند؛ سفارش مجدد را در اولویت بگذارید.",
    ],
    footer: "بر اساس ۳۰ رکورد گزارش",
    done: "تحلیل کامل شد",
  },
  workflow: {
    eyebrow: "گردش کار",
    title: "از تعریف تجهیز تا سرویس بعدی، در چهار قدم",
    description:
      "چرخه نگهداری در پنل بسته است؛ هر سرویس ثبت‌شده، تاریخ نگهداری بعدی را می‌سازد و چیزی از قلم نمی‌افتد.",
    steps: [
      { number: "۱", title: "پروژه را بسازید", description: "ساختار پروژه و اعضای آن را مشخص کنید تا داده‌ها از ابتدا تفکیک‌شده بمانند." },
      { number: "۲", title: "تجهیزات را ثبت کنید", description: "تجهیزات، انواع تجهیز و قطعات یدکی هر پروژه را وارد کنید." },
      { number: "۳", title: "برنامه نگهداری بچینید", description: "نوع برنامه، دوره تکرار، تاریخ نگهداری بعدی و مسئول انجام را تعیین کنید." },
      { number: "۴", title: "سرویس را ثبت کنید", description: "با ثبت سرویس، سابقه ساخته می‌شود و برنامه بعدی خودکار در تقویم قرار می‌گیرد." },
    ],
  },
  roles: {
    eyebrow: "دسترسی‌ها",
    title: "هر کس، دقیقاً همان چیزی را می‌بیند که باید",
    description:
      "دسترسی دو لایه دارد: نقش سازمانی (مدیر سیستم، مدیر، کاربر) و نقش پروژه‌ای. داده‌های هر پروژه فقط برای اعضای همان پروژه قابل مشاهده است.",
    projectRoleTitle: "نقش در سطح پروژه",
    projectRoles: ["مدیر پروژه", "عضو پروژه"],
    projectRoleNote: "مدیر سیستم می‌تواند کاربران را به پروژه‌ها اضافه یا از آن‌ها حذف کند.",
    items: [
      {
        title: "مدیر سیستم",
        subtitle: "Admin",
        points: ["دسترسی کامل به همه پروژه‌ها و تجهیزات", "ساخت و مدیریت کاربران و تغییر نقش‌ها", "مدیریت انواع تجهیز"],
      },
      {
        title: "مدیر",
        subtitle: "Manager",
        points: ["مدیریت پروژه‌ها، تجهیزات و برنامه‌ها", "پیگیری گزارش‌ها و تأخیرها", "مشاهده فهرست کاربران"],
      },
      {
        title: "کاربر",
        subtitle: "User",
        points: ["دسترسی به پروژه‌هایی که در آن‌ها عضو است", "ثبت سرویس و مشاهده سوابق", "مشاهده گزارش‌های محدوده خود"],
      },
    ],
  },
  faq: {
    eyebrow: "سوالات متداول",
    title: "پاسخ پرسش‌های رایج",
    description: "اگر پاسخ سوال‌تان را پیدا نکردید، با تیم پشتیبانی سازمان خود در تماس باشید.",
    items: [
      {
        question: "دسترسی کاربران چگونه تعیین می‌شود؟",
        answer:
          "هر کاربر تنها تجهیزات، برنامه‌ها و سوابق پروژه‌هایی را می‌بیند که در آن‌ها عضو است. مدیر سیستم و مدیر، دید کامل نسبت به همه پروژه‌ها دارند و مدیر سیستم می‌تواند اعضا و نقش پروژه‌ای هر کاربر را تغییر دهد.",
      },
      {
        question: "بعد از ثبت سرویس، برنامه بعدی چه می‌شود؟",
        answer:
          "اگر برای برنامه دوره تکرار (بر حسب روز) تعریف شده باشد، پس از ثبت سرویس، برنامه بعدی به‌صورت خودکار با تاریخ جدید ساخته می‌شود و برنامه قبلی «انجام‌شده» علامت می‌خورد.",
      },
      {
        question: "هشدار قطعات یدکی از چه زمانی نمایش داده می‌شود؟",
        answer:
          "قطعاتی که تاریخ انقضای آن‌ها تا ۳۰ روز آینده است در گزارش‌ها و داشبورد نمایش داده می‌شوند تا پیش از رسیدن موعد، اقدام لازم انجام شود.",
      },
      {
        question: "آیا پنل روی موبایل هم قابل استفاده است؟",
        answer: "بله. رابط پنل واکنش‌گرا است و جدول‌ها، فرم‌ها و داشبورد روی نمایشگرهای کوچک هم قابل استفاده‌اند.",
      },
      {
        question: "پنل از چه زبان‌هایی پشتیبانی می‌کند؟",
        answer:
          "فارسی و انگلیسی. رابط فارسی به‌صورت کامل راست‌به‌چپ و با فونت یکان‌بخ نمایش داده می‌شود و زبان انتخابی در نشست کاربر ذخیره می‌ماند.",
      },
      {
        question: "چند پروژه را می‌توان هم‌زمان مدیریت کرد؟",
        answer:
          "پنل برای چند پروژه طراحی شده است؛ از انتخاب‌گر پروژه در هدر می‌توانید بین پروژه‌ها جابه‌جا شوید و هر پروژه تجهیزات، برنامه‌ها و گزارش‌های خودش را دارد.",
      },
    ],
  },
  about: {
    eyebrow: "درباره ما",
    title: "نگهداری پیشگیرانه را ساده و قابل اتکا می‌کنیم",
    description:
      "پیام پروژه از یک نیاز واقعی شکل گرفت: تیم‌های نگهداری به‌جای جست‌وجو در فایل‌های پراکنده، باید تصویر روشنی از تجهیزات، برنامه‌ها و تأخیرها داشته باشند.",
    missionTitle: "ماموریت ما",
    missionText:
      "داده‌های نگهداری را از فایل‌های پراکنده و یادآوری‌های دستی به یک جریان کاری روشن، پروژه‌محور و قابل پیگیری تبدیل کنیم.",
    values: [
      {
        title: "شفافیت",
        text: "وضعیت هر تجهیز، برنامه و قطعه باید در یک نگاه روشن باشد؛ بدون گزارش‌های دستی و محاسبات پراکنده.",
      },
      {
        title: "پیشگیری به‌جای واکنش",
        text: "هشدار تأخیرها و انقضای قطعات پیش از بحرانی شدن، هزینه و توقف را کاهش می‌دهد.",
      },
      {
        title: "فارسی و پروژه‌محور",
        text: "رابط دوزبانه، دسترسی نقش‌محور و تفکیک داده‌های هر پروژه، ابزار را برای تیم‌های ایرانی مناسب می‌کند.",
      },
    ],
    storyTitle: "چطور کار می‌کنیم",
    storyText:
      "هر قابلیت پنل از یک جریان کاری واقعی نگهداری گرفته شده است: تعریف پروژه و تجهیز، زمان‌بندی سرویس، ثبت عملیات، پیگیری قطعات و گزارش‌گیری. تحلیل هوشمند هم همین داده‌ها را می‌خواند تا اقدام بعدی مشخص باشد.",
    bullets: [
      "پروژه‌محور با دسترسی نقش‌محور",
      "برنامه پیشگیرانه، اصلاحی و اضطراری",
      "ساخت خودکار برنامه بعدی پس از ثبت سرویس",
      "هشدار ۳۰ روزه انقضای قطعات",
    ],
    ctaTitle: "سوالی دارید یا آماده شروع هستید؟",
    ctaText: "برای آشنایی بیشتر با پنل یا شروع استفاده، با ما در تماس باشید.",
    ctaContact: "تماس با ما",
    ctaPanel: "ورود به پنل",
  },
  contact: {
    eyebrow: "تماس با ما",
    title: "با تیم پیام پروژه صحبت کنید",
    description:
      "برای سوال درباره پنل، استقرار سازمانی یا همکاری پیام بگذارید؛ در اولین فرصت پاسخ می‌دهیم.",
    emailLabel: "ایمیل",
    phoneLabel: "تلفن",
    hoursLabel: "ساعات پاسخگویی",
    hoursValue: "شنبه تا چهارشنبه، ۹ تا ۱۷",
    form: {
      title: "ارسال پیام",
      description:
        "فرم را پر کنید؛ با زدن دکمهٔ ارسال، برنامه ایمیل شما با متن آماده باز می‌شود و می‌توانید پیام را بفرستید.",
      name: "نام و نام خانوادگی",
      namePlaceholder: "نام خود را وارد کنید",
      email: "ایمیل",
      emailPlaceholder: "you@example.com",
      subject: "موضوع",
      subjectPlaceholder: "موضوع پیام",
      message: "پیام",
      messagePlaceholder: "پیام خود را بنویسید...",
      submit: "ارسال پیام",
      note: "پیام به ایمیل تیم پیام پروژه ارسال می‌شود.",
      required: "لطفاً نام، ایمیل و متن پیام را پر کنید.",
      invalidEmail: "قالب ایمیل معتبر نیست.",
      success: "برنامه ایمیل شما باز شد؛ برای نهایی شدن، پیام را ارسال کنید.",
    },
    directTitle: "ارسال مستقیم",
    directText: "اگر ترجیح می‌دهید از ایمیل خودتان بنویسید:",
  },
  cta: {
    title: "نگهداری را از واکنش، به پیشگیری ببرید",
    description: "حساب کاربری بسازید و اولین پروژه، تجهیز و برنامه نگهداری خود را در چند دقیقه تعریف کنید.",
    primary: "ساخت حساب کاربری",
    secondary: "ورود به پنل",
  },
  footer: {
    navTitle: "در این صفحه",
    startTitle: "شروع استفاده",
    productLink: "نمای پنل",
    copyright: "© ۱۴۰۵ پیام پروژه — PM Project",
  },
};

const en: typeof fa = {
  brand: {
    name: "PM Project",
    tagline: "Preventive maintenance management",
    description:
      "PM Project brings equipment, maintenance schedules, service history, spare parts and reports together in one project-based panel with role-based access.",
  },
  ui: {
    login: "Sign in",
    startFree: "Get started free",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    switchLanguage: "Switch language",
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
    languageShort: "فا",
    builtWith: "Built with Next.js and React",
    summaryLabel: "Feature highlights",
  },
  nav: [
    { href: "/#features", label: "Features" },
    { href: "/#product", label: "Panel preview" },
    { href: "/#workflow", label: "Workflow" },
    { href: "/#roles", label: "Roles" },
    { href: "/#faq", label: "FAQ" },
    { href: "/about", label: "About us" },
    { href: "/contact", label: "Contact us" },
  ],
  hero: {
    badge: "Preventive, project-based maintenance",
    titleLead: "Spot failures",
    titleAccent: "before they happen",
    titleTrail: "",
    description:
      "PM Project brings equipment, maintenance schedules, service history and spare parts together in one project-based panel — with role-based access and reports that surface delays before they become critical.",
    ctaPrimary: "Open the panel",
    ctaSecondary: "Explore features",
    trust: ["Persian & RTL ready", "Role-based access", "Live reports"],
    float: { title: "Part expiry alert", meta: "Air filter — 12 days left" },
    mock: {
      preview: "Panel preview",
      welcome: "Welcome back",
      title: "Maintenance dashboard",
      date: "Dec 2026",
      stats: ["Total equipment", "Upcoming", "Overdue", "Expiring soon"],
      statValues: ["128", "24", "6", "3"],
      statusTitle: "Schedule status",
      statusCounts: ["184", "24", "6"],
      overdueTitle: "Critical overdue",
      overdue: [
        { title: "Chiller air filter service", meta: "5 days overdue" },
        { title: "Fire pump inspection", meta: "2 days overdue" },
        { title: "Fan belt replacement", meta: "Today" },
      ],
      toastTitle: "Service logged",
      toastMeta: "Next schedule created automatically",
    },
  },
  highlights: [
    { value: "3", label: "Maintenance schedule types", hint: "Preventive, corrective, emergency" },
    { value: "4", label: "Recorded operation types", hint: "Service, repair, inspection, replacement" },
    { value: "30", label: "Part expiry alert window", hint: "Days before the expiry date" },
    { value: "2", label: "Access levels", hint: "Organization role and project role" },
  ],
  features: {
    eyebrow: "Features",
    title: "Everything you need for preventive maintenance",
    description:
      "From defining projects and equipment to scheduling, service logging, reporting and AI analysis — one continuous workflow.",
    items: [
      {
        title: "Projects & project-based access",
        description:
          "Organize equipment and activity by project, with a manager and members assigned to each one.",
      },
      {
        title: "Equipment & equipment types",
        description:
          "Track name, serial number, model, manufacturer, location and status for every asset.",
      },
      {
        title: "Maintenance schedules",
        description:
          "Create preventive, corrective or emergency schedules with recurrence, next service date and assignee.",
      },
      {
        title: "Service logging & history",
        description:
          "Log service, repair, inspection or replacement with cost and notes; completing a schedule creates the next one automatically.",
      },
      {
        title: "Operational reports",
        description:
          "Filter upcoming work, delays, expiring parts and maintenance costs.",
      },
      {
        title: "AI report analysis",
        description:
          "Send summary stats, expiring parts and report records to an AI model and get a readable analysis.",
      },
      {
        title: "Spare parts & expiry",
        description:
          "Keep parts inventory per asset and get alerts 30 days before expiry.",
      },
      {
        title: "Users & roles",
        description:
          "Admin, manager and user; create accounts, change roles and manage project access.",
      },
      {
        title: "Bilingual & RTL",
        description:
          "Persian and English UI with full RTL/LTR layout and consistent Persian typography.",
      },
    ],
    extras: [
      {
        title: "Early warnings",
        description: "Delays and expiring parts are highlighted on the dashboard and in reports.",
      },
      {
        title: "Project-level access",
        description: "Members only see the equipment, schedules and reports of projects they belong to.",
      },
      {
        title: "Unified reporting",
        description: "Equipment, schedule and parts status come together in reports and on the dashboard.",
      },
    ],
  },
  product: {
    eyebrow: "Panel preview",
    title: "One panel, everything in its place",
    description:
      "The preview below is built with the real panel's layout, colors and components — use the menu beside it to explore each section.",
    panel: {
      nav: { dashboard: "Dashboard", devices: "Devices", schedules: "Maintenance", reports: "Reports" },
      pageTitles: {
        dashboard: "Dashboard",
        devices: "Devices",
        schedules: "Maintenance schedules",
        reports: "Maintenance reports",
      },
      header: { allProjects: "All projects", languageLabel: "English" },
      profile: { name: "Rezaei", email: "manager@pm-project.ir", role: "Manager", logout: "Log out" },
      status: {
        completed: "Completed",
        upcoming: "Upcoming",
        overdue: "Overdue",
        active: "Active",
        inactive: "Inactive",
        maintenance: "Under maintenance",
      },
      dashboard: {
        title: "Dashboard",
        subtitle: "An overview of all projects and maintenance activity.",
        stats: [
          { title: "Total equipment", value: "128" },
          { title: "Total schedules", value: "214" },
          { title: "Active equipment", value: "96" },
          { title: "Overdue tasks", value: "6" },
        ],
        chart: { schedules: "Schedules by status", distribution: "Schedule status distribution" },
        donutTotal: "Total schedules",
        overdueTitle: "Critical overdue",
        overdueCount: "6 overdue",
        overdueItems: [
          { device: "Ground-floor chiller", title: "Chiller air filter service", days: "5 days overdue", date: "Dec 3" },
          { device: "Main water pump", title: "Fire pump inspection", days: "2 days overdue", date: "Dec 5" },
          { device: "Diesel generator", title: "Fan belt replacement", days: "1 day overdue", date: "Dec 6" },
        ],
        upcomingTitle: "Upcoming timeline",
        upcomingCount: "24 upcoming",
        upcomingItems: [
          { device: "Main water pump", title: "Routine pump service", remaining: "in 3 days", date: "Dec 12, 2026" },
          { device: "Passenger elevator", title: "Monthly elevator inspection", remaining: "in 6 days", date: "Dec 15, 2026" },
          { device: "Ground-floor chiller", title: "Air filter replacement", remaining: "in 11 days", date: "Dec 20, 2026" },
        ],
      },
      devices: {
        title: "Devices",
        subtitle: "Manage and monitor all your equipment",
        typesButton: "Equipment types",
        addButton: "+ Add device",
        cardTitle: "All devices",
        search: "Search by name, serial number or model...",
        allStatuses: "All statuses",
        allTypes: "All types",
        columns: ["Name", "Type", "Project", "Status", "Location", "Next maintenance"],
        rows: [
          { name: "Main water pump", type: "Pump", project: "Central building", status: "active", location: "Basement 1", next: "Dec 12, 2026" },
          { name: "Ground-floor chiller", type: "HVAC", project: "Commercial complex", status: "maintenance", location: "Ground floor", next: "Dec 8, 2026" },
          { name: "Diesel generator", type: "Generator", project: "Production site", status: "active", location: "Generator room", next: "Dec 20, 2026" },
          { name: "Passenger elevator", type: "Elevator", project: "Office building", status: "inactive", location: "Floor 5", next: "—" },
        ],
      },
      schedules: {
        title: "Maintenance schedules",
        subtitle: "Manage preventive, corrective and emergency schedules.",
        createButton: "+ New schedule",
        cardTitle: "Maintenance schedules",
        filterLabel: "Status filter",
        filterAll: "All schedules",
        columns: ["Schedule", "Device", "Type", "Next maintenance", "Assignee", "Status"],
        rows: [
          { title: "Routine pump service", device: "Main water pump", type: "Preventive", next: "Dec 12, 2026", assigned: "Ali Mohammadi", status: "upcoming" },
          { title: "Annual chiller inspection", device: "Ground-floor chiller", type: "Preventive", next: "Dec 8, 2026", assigned: "Sara Ahmadi", status: "overdue" },
          { title: "Air filter replacement", device: "Ground-floor chiller", type: "Corrective", next: "Dec 20, 2026", assigned: "—", status: "upcoming" },
          { title: "Generator test", device: "Diesel generator", type: "Emergency", next: "Dec 2, 2026", assigned: "Reza Karimi", status: "completed" },
        ],
      },
      reports: {
        title: "Maintenance reports",
        subtitle: "Report and analyze maintenance history across all assets.",
        refresh: "Refresh",
        summary: [
          { title: "Total equipment", value: "128" },
          { title: "Total maintenance", value: "342" },
          { title: "Completed", value: "296" },
          { title: "Pending", value: "40" },
          { title: "Overdue", value: "6" },
          { title: "Total cost", value: "48,200" },
        ],
        partsTitle: "Parts nearing expiry (3)",
        partsColumns: ["Part", "Device", "Expiry date", "Days remaining"],
        partsRows: [
          { part: "Air filter", device: "Ground-floor chiller", expiry: "Dec 23, 2026", days: "12 days" },
          { part: "Hydraulic oil", device: "Main water pump", expiry: "Jan 1, 2027", days: "21 days" },
          { part: "Fan belt", device: "Diesel generator", expiry: "Jan 8, 2027", days: "28 days" },
        ],
        filters: {
          title: "Filters",
          project: "Project",
          allProjects: "All projects",
          device: "Device",
          allDevices: "All devices",
          type: "Maintenance type",
          allTypes: "All types",
          status: "Status",
          allStatuses: "All statuses",
          start: "Start date",
          end: "End date",
          startValue: "2026-12-01",
          endValue: "2026-12-30",
          reset: "Reset filters",
        },
        itemsTitle: "Report items (342)",
        itemsColumns: ["Device", "Project", "Type", "Status", "Maintenance date", "Cost"],
        itemsRows: [
          { device: "Main water pump", project: "Central building", type: "Service", status: "completed", date: "Dec 6, 2026", cost: "2,500,000" },
          { device: "Ground-floor chiller", project: "Commercial complex", type: "Repair", status: "overdue", date: "Dec 3, 2026", cost: "8,400,000" },
          { device: "Diesel generator", project: "Production site", type: "Inspection", status: "completed", date: "Nov 28, 2026", cost: "1,200,000" },
          { device: "Passenger elevator", project: "Office building", type: "Replacement", status: "upcoming", date: "Dec 15, 2026", cost: "—" },
        ],
      },
    },
  },
  ai: {
    badge: "AI analysis",
    title: "Read your reports, don't just collect them",
    description:
      "Analyze maintenance status with AI. The panel sends the current report data to the model and returns a readable analysis of delays, risks and recommended actions.",
    inputs: [
      "Selected filters and date range",
      "Report summary statistics (counts, status and cost)",
      "Parts nearing expiry",
      "Report records for deeper inspection",
    ],
    footnote: "Analysis is enabled with an AI service key in the panel settings.",
    cardTitle: "Maintenance status analysis",
    cardMeta: "December 2026 reports",
    cardBadge: "Sample output",
    insights: [
      "6 schedules are overdue; two are more than 5 days past due.",
      "Most delays involve HVAC equipment in the “Commercial complex” project.",
      "Three parts expire in under 30 days; prioritize reordering.",
    ],
    footer: "Based on 30 report records",
    done: "Analysis complete",
  },
  workflow: {
    eyebrow: "Workflow",
    title: "From equipment setup to the next service, in four steps",
    description:
      "The maintenance loop is closed in the panel; every logged service creates the next maintenance date, so nothing slips through.",
    steps: [
      { number: "1", title: "Create a project", description: "Define the project structure and members so data stays separated from the start." },
      { number: "2", title: "Add equipment", description: "Register assets, equipment types and spare parts for each project." },
      { number: "3", title: "Plan maintenance", description: "Set the schedule type, recurrence, next date and assignee." },
      { number: "4", title: "Log the service", description: "Logging a service creates history and places the next schedule on the calendar automatically." },
    ],
  },
  roles: {
    eyebrow: "Access",
    title: "Everyone sees exactly what they should",
    description:
      "Access works on two levels: organization role (admin, manager, user) and project role. Project data is visible only to that project's members.",
    projectRoleTitle: "Project-level role",
    projectRoles: ["Project manager", "Project member"],
    projectRoleNote: "Admins can add users to projects or remove them.",
    items: [
      {
        title: "System admin",
        subtitle: "Admin",
        points: ["Full access to all projects and equipment", "Create and manage users and roles", "Manage equipment types"],
      },
      {
        title: "Manager",
        subtitle: "Manager",
        points: ["Manage projects, equipment and schedules", "Track reports and delays", "View the user list"],
      },
      {
        title: "User",
        subtitle: "User",
        points: ["Access projects they are a member of", "Log services and view history", "View reports within their scope"],
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Answers to common questions",
    description: "If you can't find an answer here, reach out to your organization's support team.",
    items: [
      {
        question: "How is user access determined?",
        answer:
          "Each user only sees equipment, schedules and history for projects they belong to. Admins and managers have full visibility across projects, and admins can change project members and roles.",
      },
      {
        question: "What happens to the next schedule after a service is logged?",
        answer:
          "If the schedule has a recurrence interval in days, the next schedule is created automatically with the new date and the previous one is marked completed.",
      },
      {
        question: "When do spare-part expiry alerts appear?",
        answer:
          "Parts expiring within the next 30 days are shown on the dashboard and in reports so action can be taken before the deadline.",
      },
      {
        question: "Is the panel usable on mobile?",
        answer: "Yes. The panel is responsive; tables, forms and the dashboard work on small screens.",
      },
      {
        question: "Which languages does the panel support?",
        answer:
          "Persian and English. The Persian UI is fully right-to-left with Yekan Bakh typography, and the chosen language is stored for the user's session.",
      },
      {
        question: "Can I manage several projects at once?",
        answer:
          "The panel is built for multiple projects; use the project selector in the header to switch between them, and each project keeps its own equipment, schedules and reports.",
      },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "We make preventive maintenance simple and dependable",
    description:
      "PM Project grew from a real need: maintenance teams shouldn't hunt through scattered files to understand equipment, schedules and delays.",
    missionTitle: "Our mission",
    missionText:
      "Turn maintenance data from scattered files and manual reminders into a clear, project-based workflow you can track.",
    values: [
      {
        title: "Clarity",
        text: "Equipment, schedule and part status should be clear at a glance — without manual reports and scattered calculations.",
      },
      {
        title: "Prevention over reaction",
        text: "Alerts for delays and expiring parts reduce cost and downtime before they become critical.",
      },
      {
        title: "Persian-first and project-based",
        text: "A bilingual UI, role-based access and per-project data separation make the tool a good fit for Iranian teams.",
      },
    ],
    storyTitle: "How we work",
    storyText:
      "Every panel capability comes from a real maintenance workflow: defining projects and equipment, scheduling service, logging operations, tracking parts and reporting. AI analysis reads the same data so the next action is clear.",
    bullets: [
      "Project-based with role-based access",
      "Preventive, corrective and emergency schedules",
      "The next schedule is created automatically after a service",
      "30-day spare-part expiry alerts",
    ],
    ctaTitle: "Have a question, or ready to start?",
    ctaText: "Get in touch to learn more about the panel or start using it.",
    ctaContact: "Contact us",
    ctaPanel: "Open the panel",
  },
  contact: {
    eyebrow: "Contact us",
    title: "Talk to the PM Project team",
    description:
      "Ask about the panel, an organization-wide deployment or a partnership; we'll get back to you as soon as we can.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    hoursLabel: "Support hours",
    hoursValue: "Saturday–Wednesday, 9am–5pm",
    form: {
      title: "Send a message",
      description:
        "Fill in the form; pressing send opens your email app with the message ready to go.",
      name: "Full name",
      namePlaceholder: "Enter your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      subject: "Subject",
      subjectPlaceholder: "Message subject",
      message: "Message",
      messagePlaceholder: "Write your message...",
      submit: "Send message",
      note: "The message is sent to the PM Project team inbox.",
      required: "Please fill in your name, email and message.",
      invalidEmail: "That email address is not valid.",
      success: "Your email app opened; send the message to finish.",
    },
    directTitle: "Email us directly",
    directText: "If you'd rather write from your own inbox:",
  },
  cta: {
    title: "Move maintenance from reactive to preventive",
    description: "Create an account and set up your first project, equipment and maintenance schedule in minutes.",
    primary: "Create account",
    secondary: "Open the panel",
  },
  footer: {
    navTitle: "On this page",
    startTitle: "Get started",
    productLink: "Panel preview",
    copyright: "© 2026 PM Project — پیام پروژه",
  },
};

export const content = { fa, en };
export type Content = typeof fa;
