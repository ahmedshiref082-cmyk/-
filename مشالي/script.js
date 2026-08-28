// ==========================================
// مشالي للعطارة والأعشاب الطبيعية 🌿
// SCRIPT.JS - النسخة الكاملة
// ==========================================

"use strict";

// ==========================================
// إعدادات الموقع
// ==========================================

const WHATSAPP_NUMBER = "201153468657";

const SHOP_LOCATION = {
    lat: 24.9816532,
    lng: 32.8807481
};

// ==========================================
// المنتجات
// ==========================================

const products = [

    // ==========================================
    // 🌶️ التوابل الأساسية
    // ==========================================

    { name: "كمون", category: "توابل", icon: "🌿", description: "كمون طبيعي." },
    { name: "كزبرة ناشفة", category: "توابل", icon: "🌿", description: "كزبرة ناشفة." },
    { name: "فلفل أسود", category: "توابل", icon: "⚫", description: "فلفل أسود." },
    { name: "فلفل أبيض", category: "توابل", icon: "⚪", description: "فلفل أبيض." },
    { name: "فلفل أحمر", category: "توابل", icon: "🌶️", description: "فلفل أحمر مجفف." },
    { name: "شطة", category: "توابل", icon: "🌶️", description: "شطة مجففة." },
    { name: "بابريكا", category: "توابل", icon: "🌶️", description: "بابريكا." },
    { name: "كركم", category: "توابل", icon: "🟡", description: "كركم مطحون." },
    { name: "قرفة", category: "توابل", icon: "🪵", description: "قرفة." },
    { name: "زنجبيل", category: "توابل", icon: "🌿", description: "زنجبيل مجفف." },
    { name: "حبهان", category: "توابل", icon: "🌿", description: "حبهان." },
    { name: "قرنفل", category: "توابل", icon: "🌿", description: "قرنفل." },
    { name: "جوزة الطيب", category: "توابل", icon: "🟤", description: "جوزة الطيب." },
    { name: "ورق لورا", category: "توابل", icon: "🍃", description: "ورق لورا مجفف." },
    { name: "سماق", category: "توابل", icon: "🔴", description: "سماق." },
    { name: "كاري", category: "توابل", icon: "🟡", description: "كاري." },
    { name: "زعفران", category: "توابل", icon: "🌾", description: "زعفران." },
    { name: "مستكة", category: "توابل", icon: "⚪", description: "مستكة." },
    { name: "يانسون", category: "توابل", icon: "🌿", description: "يانسون." },
    { name: "شمر", category: "توابل", icon: "🌿", description: "شمر." },
    { name: "حلبة", category: "توابل", icon: "🌱", description: "حلبة." },
    { name: "محلب", category: "توابل", icon: "🌿", description: "محلب." },
    { name: "كراوية", category: "توابل", icon: "🌿", description: "كراوية." },
    { name: "نجمة يانسون", category: "توابل", icon: "⭐", description: "نجمة يانسون." },
    { name: "فلفل أخضر مجفف", category: "توابل", icon: "🌶️", description: "فلفل أخضر مجفف." },
    { name: "فلفل مجروش", category: "توابل", icon: "🌶️", description: "فلفل مجروش." },
    { name: "ثوم بودرة", category: "توابل", icon: "🧄", description: "ثوم بودرة." },
    { name: "بصل بودرة", category: "توابل", icon: "🧅", description: "بصل بودرة." },
    { name: "زنجبيل بودرة", category: "توابل", icon: "🌿", description: "زنجبيل بودرة." },
    { name: "بقدونس مجفف", category: "توابل", icon: "🌿", description: "بقدونس مجفف." },
    { name: "كرفس مجفف", category: "توابل", icon: "🌿", description: "كرفس مجفف." },
    { name: "شبت مجفف", category: "توابل", icon: "🌿", description: "شبت مجفف." },

    // ==========================================
    // 🍖 خلطات التوابل
    // ==========================================

    { name: "سبع بهارات", category: "توابل", icon: "🌶️", description: "خلطة توابل مشكلة." },
    { name: "بهارات لحمة", category: "توابل", icon: "🥩", description: "خلطة بهارات للحوم." },
    { name: "بهارات فراخ", category: "توابل", icon: "🍗", description: "خلطة بهارات للفراخ." },
    { name: "بهارات سمك", category: "توابل", icon: "🐟", description: "خلطة بهارات للسمك." },
    { name: "بهارات كبسة", category: "توابل", icon: "🍚", description: "خلطة بهارات كبسة." },
    { name: "بهارات أرز", category: "توابل", icon: "🍚", description: "خلطة بهارات للأرز." },
    { name: "بهارات شاورما", category: "توابل", icon: "🌯", description: "خلطة بهارات شاورما." },
    { name: "بهارات كفتة", category: "توابل", icon: "🥩", description: "خلطة بهارات كفتة." },
    { name: "بهارات برجر", category: "توابل", icon: "🍔", description: "خلطة بهارات برجر." },
    { name: "بهارات مشاوي", category: "توابل", icon: "🔥", description: "خلطة توابل للمشاوي." },
    { name: "بهارات بطاطس", category: "توابل", icon: "🥔", description: "خلطة توابل للبطاطس." },
    { name: "بهارات مكرونة", category: "توابل", icon: "🍝", description: "خلطة توابل للمكرونة." },
    { name: "بهارات بيتزا", category: "توابل", icon: "🍕", description: "خلطة توابل للبيتزا." },
    { name: "بهارات فتة", category: "توابل", icon: "🍚", description: "خلطة توابل للفتة." },
    { name: "بهارات محشي", category: "توابل", icon: "🥬", description: "خلطة توابل للمحشي." },
    { name: "بهارات شوربة", category: "توابل", icon: "🥣", description: "خلطة توابل للشوربة." },
    { name: "بهارات مغربية", category: "توابل", icon: "🌶️", description: "خلطة توابل مشكلة." },
    { name: "خلطة أعشاب إيطالية", category: "توابل", icon: "🌿", description: "خلطة أعشاب وتوابل." },
    { name: "زعتر بالسمسم", category: "توابل", icon: "🌿", description: "خلطة زعتر وسمسم." },
    { name: "دقة", category: "توابل", icon: "🥜", description: "خلطة دقة." },

    // ==========================================
    // 🌿 الأعشاب الطبيعية
    // ==========================================

    { name: "بابونج", category: "أعشاب", icon: "🌼", description: "بابونج مجفف." },
    { name: "نعناع مجفف", category: "أعشاب", icon: "🌿", description: "نعناع مجفف." },
    { name: "كركديه", category: "أعشاب", icon: "🌺", description: "كركديه مجفف." },
    { name: "مرمرية", category: "أعشاب", icon: "🌿", description: "مرمرية مجففة." },
    { name: "زعتر", category: "أعشاب", icon: "🌿", description: "زعتر مجفف." },
    { name: "روزماري", category: "أعشاب", icon: "🌿", description: "روزماري مجفف." },
    { name: "بردقوش", category: "أعشاب", icon: "🌿", description: "بردقوش مجفف." },
    { name: "ريحان مجفف", category: "أعشاب", icon: "🌿", description: "ريحان مجفف." },
    { name: "مليسة", category: "أعشاب", icon: "🌿", description: "مليسة مجففة." },
    { name: "لافندر", category: "أعشاب", icon: "💜", description: "لافندر مجفف." },
    { name: "ورد مجفف", category: "أعشاب", icon: "🌹", description: "ورد مجفف." },
    { name: "ورد جوري", category: "أعشاب", icon: "🌹", description: "ورد جوري مجفف." },
    { name: "أقحوان", category: "أعشاب", icon: "🌼", description: "أقحوان مجفف." },
    { name: "عرقسوس", category: "أعشاب", icon: "🌿", description: "عرقسوس." },
    { name: "مريمية", category: "أعشاب", icon: "🌿", description: "مريمية مجففة." },
    { name: "أذريون", category: "أعشاب", icon: "🌼", description: "أذريون مجفف." },
    { name: "شاي أخضر", category: "أعشاب", icon: "🍃", description: "شاي أخضر." },
    { name: "شاي أسود", category: "أعشاب", icon: "🍵", description: "شاي أسود." },
    { name: "شاي أخضر بالنعناع", category: "أعشاب", icon: "🍵", description: "شاي أخضر بالنعناع." },
    { name: "شاي أبيض", category: "أعشاب", icon: "🍵", description: "شاي أبيض." },
    { name: "خلطة أعشاب مشكلة", category: "أعشاب", icon: "🌿", description: "تشكيلة أعشاب مجففة." },

    // ==========================================
    // 🌱 أعشاب واستخدامات تقليدية
    // ==========================================

    {
        name: "خلطة أعشاب للمعدة والهضم",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "خلطة أعشاب تُستخدم تقليديًا ضمن مشروبات الهضم وراحة المعدة."
    },

    {
        name: "نعناع للمعدة والهضم",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "النعناع من الأعشاب الشائعة في مشروبات الهضم وراحة المعدة."
    },

    {
        name: "يانسون للهضم",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "يانسون يُستخدم تقليديًا كمشروب عشبي بعد الطعام."
    },

    {
        name: "شمر للهضم",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "الشمر من الأعشاب المستخدمة تقليديًا في مشروبات الهضم."
    },

    {
        name: "كراوية للهضم",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "كراوية تُستخدم تقليديًا في المشروبات العشبية بعد الوجبات."
    },

    {
        name: "بابونج للمعدة",
        category: "أعشاب علاجية",
        icon: "🌼",
        description: "البابونج من الأعشاب الشائعة في المشروبات العشبية الهادئة."
    },

    {
        name: "خلطة أعشاب للقولون والهضم",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "تشكيلة أعشاب للاستخدام التقليدي ضمن مشروبات الهضم."
    },

    {
        name: "مليسة",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "مليسة مجففة تُستخدم تقليديًا في المشروبات العشبية."
    },

    {
        name: "بردقوش",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "بردقوش مجفف للاستخدام في المشروبات والوصفات التقليدية."
    },

    {
        name: "مرمرية",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "مرمرية مجففة للاستخدام التقليدي."
    },

    {
        name: "بقدونس مجفف",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "بقدونس مجفف يُستخدم كغذاء وضمن الوصفات التقليدية."
    },

    {
        name: "كرفس مجفف",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "كرفس مجفف للاستخدام الغذائي والوصفات التقليدية."
    },

    {
        name: "ذيل الحصان",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "عشبة تُستخدم تقليديًا في بعض المشروبات العشبية."
    },

    {
        name: "شاي القراص",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "القراص من الأعشاب المستخدمة تقليديًا في المشروبات العشبية."
    },

    {
        name: "خلطة أعشاب للكحة",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "خلطة عشبية للاستخدام التقليدي في المشروبات الدافئة."
    },

    {
        name: "زعتر للكحة",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "الزعتر من الأعشاب المستخدمة تقليديًا في المشروبات الدافئة."
    },

    {
        name: "زنجبيل للكحة",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "زنجبيل مجفف للاستخدام في المشروبات والوصفات التقليدية."
    },

    {
        name: "ليمون مجفف",
        category: "أعشاب علاجية",
        icon: "🍋",
        description: "ليمون مجفف للاستخدام في المشروبات والوصفات التقليدية."
    },

    {
        name: "قرفة وزنجبيل",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "خلطة مشروبات دافئة من القرفة والزنجبيل."
    },

    {
        name: "خلطة أعشاب للتخسيس",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "خلطة أعشاب للاستخدام كمشروب عشبي ضمن نظام غذائي متوازن."
    },

    {
        name: "شاي أخضر للتنحيف",
        category: "أعشاب علاجية",
        icon: "🍵",
        description: "شاي أخضر يُستخدم كمشروب ضمن أنظمة غذائية متوازنة."
    },

    {
        name: "قرفة للتنحيف",
        category: "أعشاب علاجية",
        icon: "🪵",
        description: "قرفة للاستخدام في المشروبات والوصفات الغذائية."
    },

    {
        name: "زنجبيل وقرفة",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "خلطة مشروب دافئ من الزنجبيل والقرفة."
    },

    {
        name: "خلطة أعشاب للكبد",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "تشكيلة أعشاب للاستخدام التقليدي، وليست بديلًا للعلاج الطبي."
    },

    {
        name: "حبة البركة",
        category: "أعشاب علاجية",
        icon: "⚫",
        description: "حبة البركة من المنتجات العشبية والغذائية الشائعة."
    },

    {
        name: "كركم",
        category: "أعشاب علاجية",
        icon: "🟡",
        description: "كركم للاستخدام الغذائي والوصفات التقليدية."
    },

    {
        name: "خلطة أعشاب للسوائل",
        category: "أعشاب علاجية",
        icon: "🌿",
        description: "خلطة عشبية للاستخدام التقليدي ضمن المشروبات."
    },

    // ==========================================
    // 🌾 البذور
    // ==========================================

    { name: "بذور الكتان", category: "أعشاب", icon: "🌾", description: "بذور كتان." },
    { name: "بذور الشيا", category: "أعشاب", icon: "🌱", description: "بذور شيا." },
    { name: "بذور الريحان", category: "أعشاب", icon: "🌱", description: "بذور ريحان." },
    { name: "بذور حبة البركة", category: "أعشاب", icon: "⚫", description: "حبة البركة." },
    { name: "بذور الخردل", category: "توابل", icon: "🌾", description: "بذور خردل." },
    { name: "حب الرشاد", category: "أعشاب", icon: "🌱", description: "حب الرشاد." },
    { name: "بذور الكرفس", category: "توابل", icon: "🌿", description: "بذور كرفس." },
    { name: "بذور الشمر", category: "أعشاب", icon: "🌿", description: "بذور شمر." },
    { name: "بذور اليانسون", category: "أعشاب", icon: "🌿", description: "بذور يانسون." },
    { name: "بذور دوار الشمس", category: "أخرى", icon: "🌻", description: "بذور دوار الشمس." },
    { name: "بذور اليقطين", category: "أخرى", icon: "🎃", description: "بذور يقطين." },
    { name: "بذور السمسم", category: "أخرى", icon: "🌾", description: "بذور سمسم." },

    // ==========================================
    // 🫘 البقوليات والحبوب
    // ==========================================

    { name: "فول", category: "بقوليات", icon: "🫘", description: "فول." },
    { name: "عدس أصفر", category: "بقوليات", icon: "🫘", description: "عدس أصفر." },
    { name: "عدس بجبة", category: "بقوليات", icon: "🫘", description: "عدس بجبة." },
    { name: "عدس أحمر", category: "بقوليات", icon: "🫘", description: "عدس أحمر." },
    { name: "حمص", category: "بقوليات", icon: "🫘", description: "حمص." },
    { name: "لوبيا", category: "بقوليات", icon: "🫘", description: "لوبيا." },
    { name: "فاصوليا بيضاء", category: "بقوليات", icon: "🫘", description: "فاصوليا بيضاء." },
    { name: "فاصوليا حمراء", category: "بقوليات", icon: "🫘", description: "فاصوليا حمراء." },
    { name: "بازلاء مجففة", category: "بقوليات", icon: "🫘", description: "بازلاء مجففة." },
    { name: "ترمس", category: "بقوليات", icon: "🫘", description: "ترمس." },
    { name: "أرز", category: "بقوليات", icon: "🍚", description: "أرز." },
    { name: "أرز بسمتي", category: "بقوليات", icon: "🍚", description: "أرز بسمتي." },
    { name: "أرز مصري", category: "بقوليات", icon: "🍚", description: "أرز مصري." },
    { name: "برغل", category: "بقوليات", icon: "🌾", description: "برغل." },
    { name: "شوفان", category: "بقوليات", icon: "🌾", description: "شوفان." },
    { name: "ذرة", category: "بقوليات", icon: "🌽", description: "ذرة." },
    { name: "فريك", category: "بقوليات", icon: "🌾", description: "فريك." },
    { name: "قمح", category: "بقوليات", icon: "🌾", description: "قمح." },
    { name: "شعير", category: "بقوليات", icon: "🌾", description: "شعير." },

    // ==========================================
    // 🍯 العسل
    // ==========================================

    { name: "عسل نحل", category: "عسل", icon: "🍯", description: "عسل نحل." },
    { name: "عسل سدر", category: "عسل", icon: "🍯", description: "عسل سدر." },
    { name: "عسل موالح", category: "عسل", icon: "🍯", description: "عسل موالح." },
    { name: "عسل برسيم", category: "عسل", icon: "🍯", description: "عسل برسيم." },
    { name: "عسل حبة البركة", category: "عسل", icon: "🍯", description: "عسل مع حبة البركة." },
    { name: "شمع عسل", category: "عسل", icon: "🍯", description: "شمع عسل." },
    { name: "غذاء ملكات النحل", category: "عسل", icon: "🐝", description: "غذاء ملكات النحل." },
    { name: "حبوب اللقاح", category: "عسل", icon: "🐝", description: "حبوب لقاح النحل." },

    // ==========================================
    // 🫒 زيت الزيتون
    // ==========================================

    { name: "زيت زيتون", category: "زيت زيتون", icon: "🫒", description: "زيت زيتون." },
    { name: "زيت زيتون بكر", category: "زيت زيتون", icon: "🫒", description: "زيت زيتون بكر." },
    { name: "زيت زيتون بكر ممتاز", category: "زيت زيتون", icon: "🫒", description: "زيت زيتون بكر ممتاز." },

    // ==========================================
    // 🧴 الزيوت الطبيعية
    // ==========================================

    { name: "زيت حبة البركة", category: "زيوت", icon: "🫒", description: "زيت حبة البركة." },
    { name: "زيت جوز الهند", category: "زيوت", icon: "🥥", description: "زيت جوز الهند." },
    { name: "زيت اللوز الحلو", category: "زيوت", icon: "🌰", description: "زيت لوز حلو." },
    { name: "زيت اللوز المر", category: "زيوت", icon: "🌰", description: "زيت لوز مر." },
    { name: "زيت السمسم", category: "زيوت", icon: "🌾", description: "زيت سمسم." },
    { name: "زيت الخروع", category: "زيوت", icon: "🌿", description: "زيت خروع." },
    { name: "زيت الجرجير", category: "زيوت", icon: "🌿", description: "زيت جرجير." },
    { name: "زيت النعناع", category: "زيوت", icon: "🌿", description: "زيت نعناع." },
    { name: "زيت اللافندر", category: "زيوت", icon: "💜", description: "زيت لافندر." },
    { name: "زيت الروزماري", category: "زيوت", icon: "🌿", description: "زيت روزماري." },
    { name: "زيت القرنفل", category: "زيوت", icon: "🌿", description: "زيت قرنفل." },
    { name: "زيت القرفة", category: "زيوت", icon: "🪵", description: "زيت قرفة." },
    { name: "زيت الزنجبيل", category: "زيوت", icon: "🌿", description: "زيت زنجبيل." },
    { name: "زيت الليمون", category: "زيوت", icon: "🍋", description: "زيت ليمون." },
    { name: "زيت البرتقال", category: "زيوت", icon: "🍊", description: "زيت برتقال." },
    { name: "زيت بذور الكتان", category: "زيوت", icon: "🌾", description: "زيت بذور الكتان." },
    { name: "زيت بذور العنب", category: "زيوت", icon: "🍇", description: "زيت بذور العنب." },
    { name: "زيت الأفوكادو", category: "زيوت", icon: "🥑", description: "زيت أفوكادو." },
    { name: "زيت الأرغان", category: "زيوت", icon: "🌿", description: "زيت أرغان." },
    { name: "زيت الورد", category: "زيوت", icon: "🌹", description: "زيت الورد." },
    { name: "زيت البابونج", category: "زيوت", icon: "🌼", description: "زيت البابونج." },
    { name: "زيت النيم", category: "زيوت", icon: "🌿", description: "زيت النيم." },
    { name: "زيت السمسم الأسود", category: "زيوت", icon: "🌾", description: "زيت السمسم الأسود." },

    // ==========================================
    // 🥜 منتجات إضافية
    // ==========================================

    { name: "سمسم أبيض", category: "أخرى", icon: "🌾", description: "سمسم أبيض." },
    { name: "سمسم محمص", category: "أخرى", icon: "🌾", description: "سمسم محمص." },
    { name: "جوز هند مبشور", category: "أخرى", icon: "🥥", description: "جوز هند مبشور." },
    { name: "زبيب", category: "أخرى", icon: "🍇", description: "زبيب." },
    { name: "تمر", category: "أخرى", icon: "🌴", description: "تمر." },
    { name: "مشمش مجفف", category: "أخرى", icon: "🍑", description: "مشمش مجفف." },
    { name: "تين مجفف", category: "أخرى", icon: "🟣", description: "تين مجفف." },
    { name: "قراصيا", category: "أخرى", icon: "🟣", description: "قراصيا." },
    { name: "فول سوداني", category: "أخرى", icon: "🥜", description: "فول سوداني." },
    { name: "لوز", category: "أخرى", icon: "🌰", description: "لوز." },
    { name: "بندق", category: "أخرى", icon: "🌰", description: "بندق." },
    { name: "عين جمل", category: "أخرى", icon: "🌰", description: "عين جمل." },
    { name: "كاجو", category: "أخرى", icon: "🥜", description: "كاجو." },
    { name: "فستق", category: "أخرى", icon: "🥜", description: "فستق." },
    { name: "مكسرات مشكلة", category: "أخرى", icon: "🥜", description: "تشكيلة مكسرات." },
    { name: "مفتقة", category: "أخرى", icon: "🍯", description: "مفتقة كمنتج غذائي غني بالطاقة والسعرات." },
    { name: "طحينة", category: "أخرى", icon: "🥣", description: "طحينة من السمسم." },
    { name: "حلاوة طحينية", category: "أخرى", icon: "🍯", description: "حلاوة طحينية." },
    { name: "دبس تمر", category: "أخرى", icon: "🍯", description: "دبس تمر." },

    // ==========================================
    // 🧴 منتجات عطرية إضافية
    // ==========================================

    { name: "ماء ورد", category: "أخرى", icon: "🌹", description: "ماء ورد." },
    { name: "ماء زهر", category: "أخرى", icon: "🌸", description: "ماء زهر." },
    { name: "مسك", category: "أخرى", icon: "✨", description: "مسك عطري." },
    { name: "عنبر", category: "أخرى", icon: "✨", description: "عنبر عطري." }

];


// ==========================================
// السلة
// ==========================================

let cart = [];
let selectedProduct = null;


// ==========================================
// عناصر الصفحة
// ==========================================

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const noResults =
    document.getElementById("noResults");


// ==========================================
// تفاصيل المنتج
// ==========================================

const productModal =
    document.getElementById("productModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalProductName =
    document.getElementById("modalProductName");

const modalDescription =
    document.getElementById("modalDescription");

const modalWhatsapp =
    document.getElementById("modalWhatsapp");

const modalAddCart =
    document.getElementById("modalAddCart");


// ==========================================
// القائمة
// ==========================================

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


// ==========================================
// السنة
// ==========================================

const currentYear =
    document.getElementById("currentYear");


// ==========================================
// الخريطة
// ==========================================

const mapsButton =
    document.getElementById("mapsButton");


// ==========================================
// السلة
// ==========================================

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartFooter =
    document.getElementById("cartFooter");

const cartButton =
    document.getElementById("cartButton");

const floatingCartCount =
    document.getElementById("floatingCartCount");

const cartModal =
    document.getElementById("cartModal");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartClose =
    document.getElementById("cartClose");

const cartModalItems =
    document.getElementById("cartModalItems");

const cartModalEmpty =
    document.getElementById("cartModalEmpty");

const cartModalFooter =
    document.getElementById("cartModalFooter");

const cartModalTotal =
    document.getElementById("cartModalTotal");

const sendCartWhatsapp =
    document.getElementById("sendCartWhatsapp");


// ==========================================
// ملاحظة:
// في index.html يوجد أكثر من عنصر بنفس ID.
// لذلك نستخدم querySelectorAll.
// ==========================================

const clearCartButtons =
    document.querySelectorAll("#clearCart");

const sendCartWhatsappButtons =
    document.querySelectorAll("#sendCartWhatsapp");


// ==========================================
// رابط واتساب
// ==========================================

function createWhatsAppLink(productName) {

    const message =
        `السلام عليكم 👋\n` +
        `عايز أعرف سعر وتفاصيل منتج: ${productName}`;

    return (
        `https://wa.me/${WHATSAPP_NUMBER}` +
        `?text=${encodeURIComponent(message)}`
    );
}


// ==========================================
// البحث والتصفية
// ==========================================

function filterProducts() {

    const searchText =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";

    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";

    const filteredProducts =
        products.filter((product) => {

            const name =
                product.name.toLowerCase();

            const category =
                product.category.toLowerCase();

            const description =
                product.description.toLowerCase();

            const matchesSearch =
                name.includes(searchText) ||
                category.includes(searchText) ||
                description.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                product.category === selectedCategory;

            return (
                matchesSearch &&
                matchesCategory
            );
        });

    renderProducts(filteredProducts);
}


// ==========================================
// عرض المنتجات
// ==========================================

function renderProducts(list) {

    if (!productsGrid) return;

    productsGrid.innerHTML = "";

    if (list.length === 0) {

        if (noResults) {
            noResults.classList.remove("hidden");
        }

        return;
    }

    if (noResults) {
        noResults.classList.add("hidden");
    }

    list.forEach((product) => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";

        card.innerHTML = `

            <div class="product-image">
                ${product.icon}
            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <div class="product-actions">

                    <button
                        class="btn btn-primary details-button"
                        type="button"
                    >
                        التفاصيل
                    </button>

                    <button
                        class="btn btn-secondary add-cart-button"
                        type="button"
                    >
                        🛒 أضف
                    </button>

                    <a
                        class="btn btn-whatsapp"
                        href="${createWhatsAppLink(product.name)}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        واتساب
                    </a>

                </div>

            </div>
        `;

        const detailsButton =
            card.querySelector(".details-button");

        const addCartButton =
            card.querySelector(".add-cart-button");

        if (detailsButton) {

            detailsButton.addEventListener(
                "click",
                () => openProduct(product)
            );

        }

        if (addCartButton) {

            addCartButton.addEventListener(
                "click",
                () => addToCart(product)
            );

        }

        productsGrid.appendChild(card);

    });
}


// ==========================================
// فتح تفاصيل المنتج
// ==========================================

function openProduct(product) {

    if (!productModal) return;

    selectedProduct = product;

    if (modalImage) {
        modalImage.textContent =
            product.icon;
    }

    if (modalCategory) {
        modalCategory.textContent =
            product.category;
    }

    if (modalProductName) {
        modalProductName.textContent =
            product.name;
    }

    if (modalDescription) {
        modalDescription.textContent =
            product.description;
    }

    if (modalWhatsapp) {

        modalWhatsapp.href =
            createWhatsAppLink(
                product.name
            );

    }

    productModal.classList.remove("hidden");

    document.body.style.overflow =
        "hidden";
}


// ==========================================
// إغلاق تفاصيل المنتج
// ==========================================

function closeProduct() {

    if (!productModal) return;

    productModal.classList.add("hidden");

    document.body.style.overflow =
        "";
}


// ==========================================
// إضافة للسلة
// ==========================================

function addToCart(product) {

    const existing =
        cart.find(
            (item) =>
                item.name === product.name
        );

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            name: product.name,
            category: product.category,
            icon: product.icon,
            quantity: 1
        });

    }

    updateCart();

    showCartFeedback(
        `تمت إضافة ${product.name} إلى الطلب 🛒`
    );
}


// ==========================================
// تغيير الكمية
// ==========================================

function changeQuantity(
    productName,
    amount
) {

    const item =
        cart.find(
            (product) =>
                product.name === productName
        );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                (product) =>
                    product.name !== productName
            );

    }

    updateCart();
}


// ==========================================
// حذف منتج
// ==========================================

function removeFromCart(productName) {

    cart =
        cart.filter(
            (product) =>
                product.name !== productName
        );

    updateCart();
}


// ==========================================
// مسح السلة
// ==========================================

function clearCart() {

    if (cart.length === 0) return;

    cart = [];

    updateCart();

    showCartFeedback(
        "تم مسح الطلب 🗑️"
    );
}


// ==========================================
// إجمالي المنتجات
// ==========================================

function getCartTotalItems() {

    return cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );
}


// ==========================================
// تحديث السلة
// ==========================================

function updateCart() {

    const total =
        getCartTotalItems();

    updateCartCounters(total);

    renderCartSection();

    renderCartModal();
}


// ==========================================
// عدادات السلة
// ==========================================

function updateCartCounters(total) {

    const counters =
        document.querySelectorAll(
            "#cartCount, #floatingCartCount"
        );

    counters.forEach(
        (counter) => {

            counter.textContent =
                total;

        }
    );
}


// ==========================================
// سلة الصفحة
// ==========================================

function renderCartSection() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        if (cartEmpty) {
            cartEmpty.classList.remove("hidden");
        }

        if (cartFooter) {
            cartFooter.classList.add("hidden");
        }

        return;
    }

    if (cartEmpty) {
        cartEmpty.classList.add("hidden");
    }

    if (cartFooter) {
        cartFooter.classList.remove("hidden");
    }

    cart.forEach((item) => {

        cartItems.appendChild(
            createCartItemElement(item)
        );

    });
}


// ==========================================
// سلة النافذة
// ==========================================

function renderCartModal() {

    if (!cartModalItems) return;

    cartModalItems.innerHTML = "";

    if (cart.length === 0) {

        if (cartModalEmpty) {
            cartModalEmpty.classList.remove("hidden");
        }

        if (cartModalFooter) {
            cartModalFooter.classList.add("hidden");
        }

    } else {

        if (cartModalEmpty) {
            cartModalEmpty.classList.add("hidden");
        }

        if (cartModalFooter) {
            cartModalFooter.classList.remove("hidden");
        }

        cart.forEach((item) => {

            cartModalItems.appendChild(
                createCartItemElement(item)
            );

        });
    }

    if (cartModalTotal) {

        cartModalTotal.textContent =
            getCartTotalItems();

    }
}


// ==========================================
// إنشاء عنصر السلة
// ==========================================

function createCartItemElement(item) {

    const element =
        document.createElement("div");

    element.className =
        "cart-item";

    element.innerHTML = `

        <div class="cart-item-icon">
            ${item.icon}
        </div>

        <div class="cart-item-info">

            <strong>
                ${item.name}
            </strong>

            <small>
                ${item.category}
            </small>

        </div>

        <div class="cart-item-controls">

            <button
                class="cart-quantity-button decrease"
                type="button"
                aria-label="تقليل الكمية"
            >
                −
            </button>

            <span class="cart-quantity">
                ${item.quantity}
            </span>

            <button
                class="cart-quantity-button increase"
                type="button"
                aria-label="زيادة الكمية"
            >
                +
            </button>

            <button
                class="cart-remove-button"
                type="button"
                aria-label="حذف المنتج"
            >
                🗑️
            </button>

        </div>
    `;

    const decrease =
        element.querySelector(".decrease");

    const increase =
        element.querySelector(".increase");

    const remove =
        element.querySelector(".cart-remove-button");

    if (decrease) {

        decrease.addEventListener(
            "click",
            () =>
                changeQuantity(
                    item.name,
                    -1
                )
        );

    }

    if (increase) {

        increase.addEventListener(
            "click",
            () =>
                changeQuantity(
                    item.name,
                    1
                )
        );

    }

    if (remove) {

        remove.addEventListener(
            "click",
            () =>
                removeFromCart(
                    item.name
                )
        );

    }

    return element;
}


// ==========================================
// فتح السلة
// ==========================================

function openCart() {

    if (!cartModal) return;

    renderCartModal();

    cartModal.classList.remove("hidden");

    document.body.style.overflow =
        "hidden";
}


// ==========================================
// إغلاق السلة
// ==========================================

function closeCart() {

    if (!cartModal) return;

    cartModal.classList.add("hidden");

    document.body.style.overflow =
        "";
}


// ==========================================
// إرسال الطلب على واتساب
// ==========================================

function sendOrderToWhatsApp() {

    if (cart.length === 0) {

        showCartFeedback(
            "السلة فاضية، أضف منتج أولًا 🛒"
        );

        return;
    }

    let message =
        "السلام عليكم 👋\n\n" +
        "عايز أطلب المنتجات دي من مشالي:\n\n";

    cart.forEach(
        (item, index) => {

            message +=
                `${index + 1}. ${item.name}` +
                ` — الكمية: ${item.quantity}\n`;

        }
    );

    message +=
        "\nإجمالي عدد القطع: " +
        getCartTotalItems() +
        "\n\n" +
        "ممكن أعرف السعر والتفاصيل المتاحة؟";

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}` +
        `?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}


// ==========================================
// رسالة للمستخدم
// ==========================================

function showCartFeedback(message) {

    const oldFeedback =
        document.querySelector(".cart-feedback");

    if (oldFeedback) {
        oldFeedback.remove();
    }

    const feedback =
        document.createElement("div");

    feedback.className =
        "cart-feedback";

    feedback.textContent =
        message;

    document.body.appendChild(
        feedback
    );

    setTimeout(
        () => {

            feedback.classList.add("hide");

            setTimeout(
                () => feedback.remove(),
                250
            );

        },
        1800
    );
}


// ==========================================
// البحث
// ==========================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterProducts
    );

}


// ==========================================
// الفلتر
// ==========================================

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );

}


// ==========================================
// أقسام المنتجات
// ==========================================

document
    .querySelectorAll(".category-card")
    .forEach(
        (card) => {

            card.addEventListener(
                "click",
                () => {

                    const category =
                        card.dataset.category;

                    if (categoryFilter) {

                        categoryFilter.value =
                            category;

                    }

                    const productsSection =
                        document.getElementById(
                            "products"
                        );

                    if (productsSection) {

                        productsSection.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                    filterProducts();

                }
            );

        }
    );


// ==========================================
// تفاصيل المنتج
// ==========================================

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProduct
    );

}

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeProduct
    );

}


// ==========================================
// إضافة من نافذة التفاصيل
// ==========================================

if (modalAddCart) {

    modalAddCart.addEventListener(
        "click",
        () => {

            if (!selectedProduct) return;

            addToCart(
                selectedProduct
            );

            closeProduct();

        }
    );

}


// ==========================================
// زر ESC
// ==========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeProduct();

            closeCart();

        }

    }
);


// ==========================================
// قائمة الهاتف
// ==========================================

if (menuButton && mainNav) {

    menuButton.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle(
                "active"
            );

        }
    );

}


// ==========================================
// إغلاق القائمة
// ==========================================

document
    .querySelectorAll(".main-nav a")
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    if (mainNav) {

                        mainNav.classList.remove(
                            "active"
                        );

                    }

                }
            );

        }
    );


// ==========================================
// 📍 الخريطة
// ==========================================

if (mapsButton) {

    mapsButton.addEventListener(
        "click",
        () => {

            const mapsUrl =
                `https://www.google.com/maps/search/?api=1&query=` +
                `${SHOP_LOCATION.lat},${SHOP_LOCATION.lng}`;

            window.open(
                mapsUrl,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


// ==========================================
// 🛒 زر السلة العائم
// ==========================================

if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


// ==========================================
// إغلاق السلة
// ==========================================

if (cartClose) {

    cartClose.addEventListener(
        "click",
        closeCart
    );

}

if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCart
    );

}


// ==========================================
// مسح السلة
// ==========================================

clearCartButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            clearCart
        );

    }
);


// ==========================================
// إرسال الطلب
// ==========================================

sendCartWhatsappButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            sendOrderToWhatsApp
        );

    }
);


// ==========================================
// السنة
// ==========================================

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


// ==========================================
// تشغيل الموقع
// ==========================================

renderProducts(products);

updateCart();


// ==========================================
// حماية بسيطة من أخطاء الصور
// ==========================================

window.addEventListener(
    "error",
    (event) => {

        if (
            event.target &&
            event.target.tagName === "IMG"
        ) {

            event.target.style.display =
                "none";

        }

    },
    true
);