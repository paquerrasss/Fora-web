const TRANSLATIONS = {
  es: {
    // NAV
    nav_app: 'La app', nav_about: 'Endometriosis', nav_blog: 'Blog médico',
    nav_team: 'El equipo', nav_cta: 'Unirse a la lista',

    // INDEX HERO
    hero_badge: 'Para mujeres con endometriosis',
    hero_title: 'Tu cuerpo<br>merece<br><span class="hero-title-italic">ser escuchado.</span>',
    hero_sub: 'Un diario de síntomas clínico diseñado con especialistas.<br>Para que cada consulta cuente.',
    hero_cta1: 'Unirme a la lista de espera',
    hero_cta2: 'Qué es la endometriosis →',
    scroll_hint: 'Descubre',

    // INDEX STATEMENT
    stmt_kicker: 'El problema',
    stmt_text: 'El retraso diagnóstico medio de la endometriosis es de <em>7 a 10 años.</em><br>Fora existe para acortarlo.',
    stmt_sub: 'Llegar a consulta con datos estructurados, claros y organizados cambia la conversación con tu médica. Fora lo hace posible en menos de un minuto al día.',

    // NUMBERS
    n1_label: 'años de media hasta el diagnóstico de endometriosis en España',
    n2_label: 'mujeres en edad reproductiva tiene endometriosis — 190 millones en el mundo',
    n3_label: 'esferas clínicas validadas para registrar síntomas de forma comparable',

    // FEATURES
    f1_num: '01 — Diario clínico',
    f1_title: 'Registra por <span>esferas,</span><br>no por síntomas',
    f1_body: 'No registras síntomas sueltos — registras cómo está cada esfera de tu día. Física, Emocional, Energía e Impacto, cada una con su EVA 0-10. La arquitectura que usan los especialistas, en tu bolsillo.',
    f2_num: '02 — Brief médico',
    f2_title: 'Tu médica verá<br>lo que <span>necesita.</span>',
    f2_body: 'Genera un resumen clínico en PDF de tus síntomas, medicación y documentos. Diseñado para que llegues preparada a cada consulta y seas escuchada desde el primer minuto.',
    f3_num: '03 — Archivo médico',
    f3_title: 'Tus analíticas,<br><span>explicadas.</span>',
    f3_body: 'Sube tus documentos médicos y Fora traduce los valores fuera de rango a lenguaje comprensible. Sin alarmar. Para que preguntes mejor.',

    // QUOTE
    quote_text: 'Registrar no es rendirse.<br>Es aprender a <em>escucharte.</em>',
    quote_attr: 'El principio de Fora',

    // WAITLIST
    wl_eyebrow: '🌸 Próximamente en iOS',
    wl_title: 'Sé la primera<br>en <span>saberlo.</span>',
    wl_sub: 'Fora está en desarrollo final. Únete y te avisaremos cuando esté disponible — más contenido exclusivo sobre endometriosis.',
    wl_perk1: 'Acceso anticipado', wl_perk2: 'Novedades exclusivas',
    wl_perk3: 'Artículos médicos', wl_perk4: 'Sin spam',
    wl_placeholder: 'tu@correo.com',
    wl_btn: 'Unirme →',
    wl_note: 'Sin spam. Cancela cuando quieras.',
    ws_title: '¡Ya estás dentro!',
    ws_body: 'Te avisaremos cuando Fora esté lista. Mientras, te enviamos contenido exclusivo sobre endometriosis.',
    wl_count: 'Más de <strong>2.400 mujeres</strong> ya esperan.',

    // FOOTER
    fl_app: 'La app', fl_about: 'Qué es la endometriosis',
    fl_blog: 'Blog médico', fl_team: 'El equipo',
    fl_privacy: 'Privacidad', fl_terms: 'Términos',
    fl_contact: 'Contacto', fl_doctors: 'Para médicos',
    footer_copy: '© 2026 Fora',

    // ARTICLE PAGE
    art_back: 'Volver al blog',
    art_title: 'Por qué la endometriosis tarda <em>7 años</em> en diagnosticarse — y qué puedes hacer',
    art_author: 'Dra. Claudia Martínez',
    art_author_role: 'Ginecóloga especialista · HU La Paz, Madrid',
    art_read_time: '12 min lectura',
    art_date: 'Mayo 2026',
    art_lead: 'El retraso diagnóstico de la endometriosis no es una estadística abstracta. Es la historia de millones de mujeres que pasaron años escuchando que su dolor era normal. Este artículo explica por qué ocurre y qué puedes hacer para acortarlo.',
    art_h1: 'El número que lo dice todo: <em>7 años.</em>',
    art_p1: 'Según los datos de la ESHRE, el retraso diagnóstico medio de la endometriosis oscila entre 6 y 10 años. En España, la cifra ronda los 7 años. No es un problema de falta de médicos ni de tecnología insuficiente. Es un problema sistémico.',
    art_highlight_p: 'años de media entre los primeros síntomas y el diagnóstico en España. Para la mayoría de las mujeres, ese período comienza en la adolescencia.',
    art_p2: 'La endometriosis afecta a entre el 6% y el 10% de las mujeres en edad reproductiva — más de 190 millones en el mundo. Sin embargo, el dolor menstrual sigue siendo culturalmente normalizado, y esa normalización tiene un coste diagnóstico enorme.',
    art_h2: 'Las tres razones principales del retraso',
    art_h3_1: '1. La normalización del dolor menstrual',
    art_p3: 'La primera barrera es cultural. Desde la adolescencia, muchas mujeres aprenden que la menstruación duele. Cuando una paciente llega a consulta con dismenorrea intensa, la respuesta demasiado frecuente es recetarle anticonceptivos sin investigar más.',
    art_quote1: '"El problema no es que las pacientes no reporten sus síntomas. El problema es que durante años se les dice que lo que sienten es normal."',
    art_quote1_cite: '— Dra. Claudia Martínez, Fora',
    art_h3_2: '2. Los síntomas que nadie pregunta',
    art_p4: 'Hay síntomas que las pacientes raramente mencionan espontáneamente porque no saben que tienen nombre. La <strong>dispareunia</strong> (dolor durante las relaciones), la <strong>disquecia</strong> (dolor al defecar con la regla) y la <strong>disuria</strong> (dolor al orinar) son síntomas cardinales de endometriosis profunda.',
    art_callout_title: 'Síntomas que debes mencionar siempre',
    art_li1: 'Dolor durante las relaciones sexuales (dispareunia)',
    art_li2: 'Dolor al defecar, especialmente durante la menstruación (disquecia)',
    art_li3: 'Dolor al orinar relacionado con el ciclo (disuria)',
    art_li4: 'Fatiga intensa no explicada por otros factores',
    art_li5: 'Dolor pélvico fuera de la menstruación',
    art_li6: 'Niebla mental o dificultad de concentración',
    art_h3_3: '3. La ausencia de datos estructurados',
    art_p5: 'Cuando una paciente llega a consulta y dice "me duele mucho durante la regla", el médico tiene muy poco con lo que trabajar. Pero si llega con un registro estructurado de síntomas, la conversación cambia completamente.',
    art_h4: 'Lo que puedes hacer ahora',
    art_p6: 'No todas las soluciones dependen del sistema sanitario. Hay cosas concretas que puedes hacer hoy para acortar tu propio camino al diagnóstico.',
    art_li7: '<strong>Registra tus síntomas con estructura.</strong> Anota el tipo de dolor, la intensidad de 0 a 10, el día del ciclo.',
    art_li8: '<strong>Nombra los síntomas que da vergüenza nombrar.</strong> Dispareunia, disquecia, disuria. Son exactamente los que orientan hacia endometriosis profunda.',
    art_li9: '<strong>Llega preparada a consulta.</strong> Un resumen de tus síntomas puede cambiar completamente el resultado de una cita de 15 minutos.',
    art_li10: '<strong>No aceptes "es normal" sin más.</strong> El dolor que interfiere con tu vida no es normal. Tienes derecho a que te investiguen.',
    art_li11: '<strong>Pide derivación a un especialista en endometriosis</strong> si sospechas que puedes tenerla.',
    art_h5: 'Por qué creamos Fora',
    art_p7: 'Fora nació de este problema. Después de años de consultas donde las pacientes llegaban sin datos, decidimos crear una herramienta que resolviera exactamente eso.',
    art_p8: 'No diagnostica. No sustituye a tu médica. Pero organiza tus síntomas según la arquitectura clínica que los especialistas usan — las 4 esferas, el EVA 0-10, los desencadenantes — y genera un brief en PDF.',
    art_p9: 'Porque si los 7 años son en parte un problema de datos, parte de la solución también lo es.',
    art_cta_title: 'Empieza a registrar tus síntomas hoy.',
    art_cta_body: 'Fora organiza todo lo que tu médica necesita saber. En menos de un minuto al día.',
    art_cta_btn: 'Unirme a la lista de espera',
    art_related: 'Otros artículos',
    art_vis_label: 'Años de retraso medio',

    footer_disc: 'Fora no diagnostica. Esta aplicación es una herramienta de organización y preparación médica, no un dispositivo clínico.',

    // ABOUT PAGE
    about_eyebrow: 'Información basada en evidencia',
    about_title: 'La endometriosis<br>explicada <em>sin rodeos.</em>',
    about_sub: 'Todo lo que necesitas saber sobre la enfermedad más infradiagnosticada de la medicina moderna.',
    about_scroll: 'Continuar',
    stat1_n: '190M', stat1_l: 'mujeres afectadas en el mundo',
    stat2_n: '1/10', stat2_l: 'mujeres en edad reproductiva tiene endometriosis',
    stat3_n: '7-10', stat3_l: 'años de retraso diagnóstico medio en España',
    stat4_n: '0', stat4_l: 'cura definitiva conocida — pero sí hay tratamientos eficaces',
    def_eyebrow: 'Definición',
    def_title: '¿Qué es la <em>endometriosis?</em>',
    def_p1: 'La endometriosis es una enfermedad inflamatoria crónica en la que tejido similar al endometrio — la capa que recubre el interior del útero — crece fuera de él. Este tejido puede aparecer en los ovarios, las trompas de Falopio, el peritoneo, el intestino, la vejiga o incluso en el diafragma.',
    def_p2: 'A diferencia del endometrio normal, este tejido no tiene por dónde salir. Se inflama, sangra hacia adentro y genera adherencias que pueden afectar a la anatomía y función de los órganos.',
    def_quote: '"La endometriosis no es solo dolor menstrual. Es una enfermedad sistémica con impacto en la calidad de vida, la fertilidad y la salud mental."',
    def_cite: '— ESHRE Endometriosis Guidelines, 2022',
    def_p3: 'Se estima que afecta a <strong>entre el 6% y el 10% de las mujeres en edad reproductiva</strong> — más de 190 millones de personas en el mundo.',
    sym_eyebrow: 'Síntomas',
    sym_title: 'Los síntomas que<br>merecen nombre propio',
    sym_sub: 'No todos los síntomas son iguales ni se presentan juntos. Cada persona con endometriosis tiene una historia diferente.',
    s1_name: 'Dismenorrea', s1_desc: 'Dolor intenso durante la menstruación que interfiere con las actividades diarias. Diferente al "dolor normal" de la regla.',
    s2_name: 'Dolor pélvico no menstrual', s2_desc: 'Dolor pélvico crónico no relacionado con el ciclo. Cuando es continuo, orienta a endometriosis profunda.',
    s3_name: 'Dispareunia', s3_desc: 'Dolor durante las relaciones sexuales. Síntoma cardinal en endometriosis profunda. Frecuentemente no se reporta espontáneamente.',
    s4_name: 'Disquecia y disuria', s4_desc: 'Dolor al defecar o al orinar, especialmente durante la menstruación. Orientan a endometriosis intestinal o vesical.',
    s5_name: 'Fatiga y niebla mental', s5_desc: 'Síntomas propios de la endometriosis, no secundarios. Se asocian a inflamación sistémica y anemia ferropénica.',
    s6_name: 'Impacto emocional', s6_desc: 'Mayor prevalencia de ansiedad y depresión. Es una respuesta comprensible a años de dolor, diagnósticos tardíos e incomprensión.',
    types_eyebrow: 'Tipos',
    types_title: 'No toda la endometriosis<br>es igual',
    t1_name: 'Endometriosis superficial', t1_desc: 'Lesiones peritoneales superficiales. Las más frecuentes. El tamaño no determina la severidad de los síntomas.',
    t2_name: 'Endometrioma ovárico', t2_desc: 'Quistes de endometriosis en los ovarios. Visibles por ecografía. Pueden afectar a la reserva ovárica.',
    t3_name: 'Endometriosis profunda', t3_desc: 'Lesiones que infiltran el tejido más de 5mm. Puede afectar a intestino, vejiga y ligamentos. Requiere cirugía especializada.',
    diag_eyebrow: 'El camino al diagnóstico',
    diag_title: '¿Cómo se llega<br>al diagnóstico?',
    tl1_label: 'Paso 1', tl1_title: 'Registro de síntomas', tl1_body: 'El primer paso es llevar un registro detallado de síntomas. Cuanto más estructurado, mejor. Fora está diseñada para exactamente esto.',
    tl2_label: 'Paso 2', tl2_title: 'Consulta con tu médica de cabecera', tl2_body: 'Llevar un diario de síntomas organizado es fundamental para conseguir una derivación correcta a ginecología.',
    tl3_label: 'Paso 3', tl3_title: 'Ecografía transvaginal', tl3_body: 'Primera prueba de imagen. Un resultado normal no descarta la endometriosis.',
    tl4_label: 'Paso 4', tl4_title: 'Resonancia magnética', tl4_body: 'Más sensible para endometriosis profunda con afectación intestinal o vesical.',
    tl5_label: 'Gold standard', tl5_title: 'Laparoscopia diagnóstica', tl5_body: 'El único método que ofrece diagnóstico definitivo. Permite visualizar las lesiones y obtener biopsias.',
    ac_title: 'Llegar preparada<br>a tu próxima <em>consulta.</em>',
    ac_body: 'Fora organiza tus síntomas, tus documentos y tu historial en un brief médico que tu ginecóloga puede entender en segundos.',
    ac_btn: 'Unirme a la lista de espera',
    sources_title: 'Fuentes',

    // TEAM PAGE
    team_eyebrow: 'Quiénes somos',
    team_title: 'El equipo<br><span>detrás de Fora</span>',
    team_sub: 'Médicas, ingenieras y diseñadoras unidas por el mismo objetivo: que ninguna mujer tarde 10 años en ser diagnosticada.',
    founder_tag: 'Fundadora & CEO',
    founder_name: 'Claudia Martínez',
    founder_title: 'Ginecóloga especialista en endometriosis · Hospital Universitario La Paz, Madrid',
    founder_bio: 'Tras 12 años atendiendo pacientes con endometriosis, Claudia fundó Fora con una convicción: el retraso diagnóstico no es inevitable. Es el resultado de no tener datos. Fora nació de sus consultas.',
    m2_tag: 'CTO & Cofundadora', m2_name: 'Sara López', m2_title: 'Ingeniería de Software · ex-Cabify, ex-Glovo',
    m2_bio: 'Sara construyó los sistemas de datos de dos de las apps más usadas de España antes de decidir que quería construir algo que importara más.',
    m3_tag: 'Head of Design', m3_name: 'Laura Ferrer', m3_title: 'UX/Product Design · ex-Typeform, ex-Factorial',
    m3_bio: 'Laura diseña productos digitales de salud desde 2016. En Fora es responsable de que una app de uso clínico se sienta humana y cálida.',
    m4_tag: 'Directora Científica', m4_name: 'Ana Puig', m4_title: 'Investigadora en endometriosis · IDIBELL, Barcelona',
    m4_bio: 'Ana lleva 8 años investigando los mecanismos inflamatorios de la endometriosis. Diseñó la arquitectura de las 4 esferas alineada con el EHP-30.',
    advisors_title: 'Consejo asesor',
    values_eyebrow: 'Nuestros principios', values_title: 'Lo que nos guía',
    v1_title: 'Evidencia, no tendencias', v1_body: 'Cada función de Fora está fundamentada en literatura científica revisada por pares.',
    v2_title: 'Privacidad sin compromisos', v2_body: 'Los datos de salud son los más sensibles. Nunca los vendemos, nunca los compartimos.',
    v3_title: 'Lenguaje que respeta', v3_body: 'Nunca "paciente". Nunca condescendencia. Fora habla a mujeres adultas.',

    // BLOG PAGE
    blog_eyebrow: 'Blog médico',
    feat_vis_label: 'Años de retraso medio',
    blog_title: 'Escrito por<br><span>especialistas.</span>',
    blog_sub: 'Artículos sobre endometriosis redactados por ginecólogas, investigadoras y psicólogas. Basados en evidencia.',
    filter_all: 'Todo', filter_diag: 'Diagnóstico', filter_trat: 'Tratamiento',
    filter_nut: 'Nutrición', filter_ment: 'Salud mental', filter_fert: 'Fertilidad',
    feat_tag: 'Diagnóstico',
    feat_title: 'Por qué la endometriosis tarda 7 años en diagnosticarse — y qué puedes hacer',
    feat_excerpt: 'El retraso diagnóstico de la endometriosis es uno de los más largos de la medicina moderna. No es inevitable. En este artículo explicamos los mecanismos que lo causan.',
    feat_author: 'Dra. Claudia Martínez',
    feat_role: 'Ginecóloga · HU La Paz · 12 min lectura',
    feat_label: 'Artículo destacado',
    feat_read: 'Leer artículo completo →',
    p1_title: 'Dienogest (Visanne): qué esperar en los primeros tres meses',
    p1_excerpt: 'El progestágeno más prescrito en endometriosis. Efectos secundarios reales, qué es esperable y qué no.',
    p2_title: 'Ferritina baja y endometriosis: la conexión que nadie explica',
    p2_excerpt: 'Las pérdidas menstruales abundantes pueden llevar a déficit de hierro. Cómo detectarlo y qué hacer.',
    p3_title: 'El duelo por la vida que imaginabas: una guía para pacientes con endometriosis',
    p3_excerpt: 'La endometriosis no solo afecta al cuerpo. Afecta a la identidad, a los planes, a las relaciones.',
    p4_title: 'Dispareunia, disquecia, disuria: los síntomas que orientan a endometriosis profunda',
    p4_excerpt: 'Tres síntomas que las pacientes a menudo no mencionan porque los consideran normales.',
    p5_title: 'Endometriosis y fertilidad: lo que la evidencia dice (y lo que no)',
    p5_excerpt: 'Tener endometriosis no significa infertilidad. Pero hay matices importantes.',
    p6_title: 'Niebla mental en endometriosis: no estás inventándotelo',
    p6_excerpt: 'La niebla mental es uno de los síntomas más invalidados. Explicamos su base biológica.',
    bn_title: 'Nuevo artículo cada semana.',
    bn_sub: 'Escrito por especialistas. En tu correo. Sin algoritmos.',
    bn_btn: 'Suscribirme', bn_placeholder: 'tu@correo.com',
  },

  en: {
    nav_app: 'The app', nav_about: 'Endometriosis', nav_blog: 'Medical blog',
    nav_team: 'The team', nav_cta: 'Join the waitlist',

    hero_badge: 'For women with endometriosis',
    hero_title: 'Your body<br>deserves<br><span class="hero-title-italic">to be heard.</span>',
    hero_sub: 'A clinical symptom diary designed with specialists.<br>So every appointment counts.',
    hero_cta1: 'Join the waitlist',
    hero_cta2: 'What is endometriosis →',
    scroll_hint: 'Discover',

    stmt_kicker: 'The problem',
    stmt_text: 'The average diagnostic delay for endometriosis is <em>7 to 10 years.</em><br>Fora exists to shorten it.',
    stmt_sub: 'Arriving at appointments with structured, clear, organised data changes the conversation with your doctor. Fora makes it possible in less than a minute a day.',

    n1_label: 'years average delay to endometriosis diagnosis in Spain',
    n2_label: 'women of reproductive age have endometriosis — 190 million worldwide',
    n3_label: 'validated clinical spheres to log symptoms in a longitudinally comparable way',

    f1_num: '01 — Clinical diary',
    f1_title: 'Log by <span>spheres,</span><br>not symptoms',
    f1_body: 'You don\'t log loose symptoms — you log how each sphere of your day is doing. Physical, Emotional, Energy and Impact, each with its own EVA 0-10. The framework specialists use, in your pocket.',
    f2_num: '02 — Medical brief',
    f2_title: 'Your doctor will see<br>what they <span>need.</span>',
    f2_body: 'Generate a clinical PDF summary of your symptoms, medication and documents. Designed so you arrive prepared at every appointment and are heard from the first minute.',
    f3_num: '03 — Medical archive',
    f3_title: 'Your test results,<br><span>explained.</span>',
    f3_body: 'Upload your medical documents and Fora translates out-of-range values into plain language. Without alarming. So you ask better questions.',

    quote_text: 'Tracking isn\'t giving up.<br>It\'s learning to <em>hear yourself.</em>',
    quote_attr: 'The Fora principle',

    wl_eyebrow: '🌸 Coming soon to iOS',
    wl_title: 'Be the first<br>to <span>know.</span>',
    wl_sub: 'Fora is in final development. Join the waitlist and we\'ll let you know when it\'s available — plus exclusive endometriosis content.',
    wl_perk1: 'Early access', wl_perk2: 'Exclusive updates',
    wl_perk3: 'Medical articles', wl_perk4: 'No spam',
    wl_placeholder: 'your@email.com',
    wl_btn: 'Join →',
    wl_note: 'No spam. Unsubscribe anytime.',
    ws_title: 'You\'re in!',
    ws_body: 'We\'ll let you know when Fora is ready. In the meantime, we\'ll send you exclusive endometriosis content.',
    wl_count: 'More than <strong>2,400 women</strong> are already waiting.',

    fl_app: 'The app', fl_about: 'Endometriosis',
    fl_blog: 'Medical blog', fl_team: 'The team',
    fl_privacy: 'Privacy', fl_terms: 'Terms',
    fl_contact: 'Contact', fl_doctors: 'For doctors',
    footer_copy: '© 2026 Fora',

    // ARTICLE PAGE
    art_back: 'Back to blog',
    art_title: 'Why endometriosis takes <em>7 years</em> to diagnose — and what you can do',
    art_author: 'Dr. Claudia Martínez',
    art_author_role: 'Specialist gynaecologist · La Paz UH, Madrid',
    art_read_time: '12 min read',
    art_date: 'May 2026',
    art_lead: 'The diagnostic delay of endometriosis is not an abstract statistic. It is the story of millions of women who spent years being told their pain was normal. This article explains why it happens and what you can do to shorten it.',
    art_h1: 'The number that says it all: <em>7 years.</em>',
    art_p1: 'According to ESHRE data, the average diagnostic delay for endometriosis ranges from 6 to 10 years. In Spain, the figure is around 7 years. It is not a problem of too few doctors or insufficient technology. It is a systemic problem.',
    art_highlight_p: 'years average between first symptoms and diagnosis in Spain. For most women, this period begins in adolescence.',
    art_p2: 'Endometriosis affects between 6% and 10% of women of reproductive age — more than 190 million people worldwide. Yet menstrual pain remains culturally normalised, and that normalisation carries an enormous diagnostic cost.',
    art_h2: 'The three main reasons for the delay',
    art_h3_1: '1. The normalisation of menstrual pain',
    art_p3: 'The first barrier is cultural. From adolescence, many women learn that menstruation hurts. When a patient presents with intense dysmenorrhoea, the too-frequent response is to prescribe contraceptives without further investigation.',
    art_quote1: '"The problem is not that patients don\t report their symptoms. The problem is that for years they are told what they feel is normal."',
    art_quote1_cite: '— Dr. Claudia Martínez, Fora',
    art_h3_2: '2. The symptoms nobody asks about',
    art_p4: 'There are symptoms patients rarely mention spontaneously because they don\'t know they have a name. <strong>Dyspareunia</strong> (pain during sex), <strong>dyschezia</strong> (pain when defecating with the period) and <strong>dysuria</strong> (pain when urinating) are cardinal symptoms of deep endometriosis.',
    art_callout_title: 'Symptoms you should always mention',
    art_li1: 'Pain during sexual intercourse (dyspareunia)',
    art_li2: 'Pain when defecating, especially during menstruation (dyschezia)',
    art_li3: 'Cycle-related pain when urinating (dysuria)',
    art_li4: 'Intense fatigue not explained by other factors',
    art_li5: 'Pelvic pain outside of menstruation',
    art_li6: 'Brain fog or difficulty concentrating',
    art_h3_3: '3. The absence of structured data',
    art_p5: 'When a patient says "it hurts a lot during my period", the doctor has very little to work with. But if she arrives with a structured symptom log, the conversation changes completely.',
    art_h4: 'What you can do now',
    art_p6: 'Not all solutions depend on the healthcare system. There are concrete things you can do today to shorten your own path to diagnosis.',
    art_li7: '<strong>Log your symptoms with structure.</strong> Note the type of pain, the intensity from 0 to 10, the day of the cycle.',
    art_li8: '<strong>Name the symptoms that feel embarrassing to name.</strong> Dyspareunia, dyschezia, dysuria. They are exactly the ones that point to deep endometriosis.',
    art_li9: '<strong>Arrive prepared for appointments.</strong> A summary of your symptoms can completely change the outcome of a 15-minute consultation.',
    art_li10: '<strong>Dont accept it\s normal without question.</strong> Pain that interferes with your life is not normal. You have the right to be investigated.',
    art_li11: '<strong>Ask for a referral to an endometriosis specialist</strong> if you suspect you may have it.',
    art_h5: 'Why we built Fora',
    art_p7: 'Fora was born from this problem. After years of consultations where patients arrived without data, we decided to build a tool that solved exactly that.',
    art_p8: 'It doesnt diagnose. It doesnt replace your doctor. But it organises your symptoms using the clinical framework specialists use — 4 spheres, EVA 0-10, triggers — and generates a PDF brief.',
    art_p9: 'Because if the 7 years are partly a data problem, part of the solution is too.',
    art_cta_title: 'Start logging your symptoms today.',
    art_cta_body: 'Fora organises everything your doctor needs to know. In under a minute a day.',
    art_cta_btn: 'Join the waitlist',
    art_related: 'More articles',
    art_vis_label: 'Years average delay',

    footer_disc: 'Fora does not diagnose. This application is an organisation and medical preparation tool, not a clinical device.',

    about_eyebrow: 'Evidence-based information',
    about_title: 'Endometriosis<br>explained <em>plainly.</em>',
    about_sub: 'Everything you need to know about the most underdiagnosed disease in modern medicine.',
    about_scroll: 'Continue',
    stat1_n: '190M', stat1_l: 'women affected worldwide',
    stat2_n: '1/10', stat2_l: 'women of reproductive age have endometriosis',
    stat3_n: '7-10', stat3_l: 'years average diagnostic delay in Spain',
    stat4_n: '0', stat4_l: 'known definitive cure — but effective treatments exist',
    def_eyebrow: 'Definition',
    def_title: 'What is <em>endometriosis?</em>',
    def_p1: 'Endometriosis is a chronic inflammatory disease in which tissue similar to the endometrium — the lining of the uterus — grows outside it. This tissue can appear on the ovaries, fallopian tubes, peritoneum, intestine, bladder or even the diaphragm.',
    def_p2: 'Unlike normal endometrium, this tissue has nowhere to go. It inflames, bleeds inward and creates adhesions that can affect the anatomy and function of surrounding organs.',
    def_quote: '"Endometriosis is not just period pain. It is a systemic disease with impact on quality of life, fertility and mental health."',
    def_cite: '— ESHRE Endometriosis Guidelines, 2022',
    def_p3: 'It is estimated to affect <strong>between 6% and 10% of women of reproductive age</strong> — more than 190 million people worldwide.',
    sym_eyebrow: 'Symptoms',
    sym_title: 'The symptoms that<br>deserve their own name',
    sym_sub: 'Not all symptoms are alike or appear together. Every person with endometriosis has a different story.',
    s1_name: 'Dysmenorrhoea', s1_desc: 'Intense pain during menstruation that interferes with daily activities. Different from "normal" period pain.',
    s2_name: 'Non-menstrual pelvic pain', s2_desc: 'Chronic pelvic pain unrelated to the cycle. When continuous, it points to deep endometriosis.',
    s3_name: 'Dyspareunia', s3_desc: 'Pain during sexual intercourse. A cardinal symptom in deep endometriosis. Often not reported spontaneously.',
    s4_name: 'Dyschezia and dysuria', s4_desc: 'Pain when defecating or urinating, especially during menstruation. Point to bowel or bladder endometriosis.',
    s5_name: 'Fatigue and brain fog', s5_desc: 'Standalone symptoms of endometriosis, not secondary. Associated with systemic inflammation and iron deficiency anaemia.',
    s6_name: 'Emotional impact', s6_desc: 'Higher prevalence of anxiety and depression. An understandable response to years of pain, late diagnoses and lack of understanding.',
    types_eyebrow: 'Types',
    types_title: 'Not all endometriosis<br>is the same',
    t1_name: 'Superficial endometriosis', t1_desc: 'Superficial peritoneal lesions. The most common. Size does not determine symptom severity.',
    t2_name: 'Ovarian endometrioma', t2_desc: 'Endometriosis cysts on the ovaries. Visible on ultrasound. May affect ovarian reserve.',
    t3_name: 'Deep endometriosis', t3_desc: 'Lesions infiltrating more than 5mm. Can affect bowel, bladder and ligaments. Requires specialist surgery.',
    diag_eyebrow: 'The path to diagnosis',
    diag_title: 'How is it<br>diagnosed?',
    tl1_label: 'Step 1', tl1_title: 'Symptom logging', tl1_body: 'The first step is keeping a detailed symptom log. The more structured, the better. Fora is designed for exactly this.',
    tl2_label: 'Step 2', tl2_title: 'GP appointment', tl2_body: 'An organised symptom diary is essential for a correct referral to gynaecology.',
    tl3_label: 'Step 3', tl3_title: 'Transvaginal ultrasound', tl3_body: 'First imaging test. A normal result does not rule out endometriosis.',
    tl4_label: 'Step 4', tl4_title: 'MRI scan', tl4_body: 'More sensitive for deep endometriosis with bowel or bladder involvement.',
    tl5_label: 'Gold standard', tl5_title: 'Diagnostic laparoscopy', tl5_body: 'The only method offering definitive diagnosis. Allows direct visualisation of lesions and biopsies.',
    ac_title: 'Arrive prepared<br>to your next <em>appointment.</em>',
    ac_body: 'Fora organises your symptoms, documents and history into a medical brief your gynaecologist can understand in seconds.',
    ac_btn: 'Join the waitlist',
    sources_title: 'Sources',

    team_eyebrow: 'Who we are',
    team_title: 'The team<br><span>behind Fora</span>',
    team_sub: 'Doctors, engineers and designers united by one goal: no woman should wait 10 years for a diagnosis.',
    founder_tag: 'Founder & CEO',
    founder_name: 'Claudia Martínez',
    founder_title: 'Endometriosis specialist gynaecologist · La Paz University Hospital, Madrid',
    founder_bio: 'After 12 years treating patients with endometriosis, Claudia founded Fora with one conviction: diagnostic delay is not inevitable. It is the result of not having data.',
    m2_tag: 'CTO & Co-founder', m2_name: 'Sara López', m2_title: 'Software Engineering · ex-Cabify, ex-Glovo',
    m2_bio: 'Sara built the data systems of two of Spain\'s most-used apps before deciding she wanted to build something that mattered more.',
    m3_tag: 'Head of Design', m3_name: 'Laura Ferrer', m3_title: 'UX/Product Design · ex-Typeform, ex-Factorial',
    m3_bio: 'Laura has been designing digital health products since 2016. At Fora she ensures a clinical app feels human and warm.',
    m4_tag: 'Scientific Director', m4_name: 'Ana Puig', m4_title: 'Endometriosis researcher · IDIBELL, Barcelona',
    m4_bio: 'Ana has spent 8 years researching the inflammatory mechanisms of endometriosis. She designed the 4-sphere architecture aligned with the EHP-30.',
    advisors_title: 'Advisory board',
    values_eyebrow: 'Our principles', values_title: 'What guides us',
    v1_title: 'Evidence, not trends', v1_body: 'Every Fora feature is grounded in peer-reviewed scientific literature.',
    v2_title: 'Privacy without compromise', v2_body: 'Health data is the most sensitive there is. We never sell it, never share it.',
    v3_title: 'Language that respects', v3_body: 'Never "patient". Never condescension. Fora speaks to adult women.',

    blog_eyebrow: 'Medical blog',
    feat_vis_label: 'Years average delay',
    blog_title: 'Written by<br><span>specialists.</span>',
    blog_sub: 'Articles on endometriosis written by gynaecologists, researchers and psychologists. Evidence-based.',
    filter_all: 'All', filter_diag: 'Diagnosis', filter_trat: 'Treatment',
    filter_nut: 'Nutrition', filter_ment: 'Mental health', filter_fert: 'Fertility',
    feat_tag: 'Diagnosis',
    feat_title: 'Why endometriosis takes 7 years to diagnose — and what you can do',
    feat_excerpt: 'The diagnostic delay of endometriosis is one of the longest in modern medicine. It is not inevitable. We explain the mechanisms causing it.',
    feat_author: 'Dr. Claudia Martínez',
    feat_role: 'Gynaecologist · La Paz UH · 12 min read',
    feat_label: 'Featured article',
    feat_read: 'Read full article →',
    p1_title: 'Dienogest (Visanne): what to expect in the first three months',
    p1_excerpt: 'The most prescribed progestogen in endometriosis. Real side effects, what is expected and what is not.',
    p2_title: 'Low ferritin and endometriosis: the connection nobody explains',
    p2_excerpt: 'Heavy menstrual bleeding can lead to iron deficiency. How to detect it and what to do.',
    p3_title: 'Grieving the life you imagined: a guide for people with endometriosis',
    p3_excerpt: 'Endometriosis doesn\'t only affect the body. It affects identity, plans and relationships.',
    p4_title: 'Dyspareunia, dyschezia, dysuria: the symptoms pointing to deep endometriosis',
    p4_excerpt: 'Three symptoms patients often don\'t mention because they consider them normal.',
    p5_title: 'Endometriosis and fertility: what the evidence says (and what it doesn\'t)',
    p5_excerpt: 'Having endometriosis does not mean infertility. But there are important nuances.',
    p6_title: 'Brain fog in endometriosis: you\'re not making it up',
    p6_excerpt: 'Brain fog is one of the most invalidated symptoms. We explain its biological basis.',
    bn_title: 'A new article every week.',
    bn_sub: 'Written by specialists. In your inbox. No algorithms.',
    bn_btn: 'Subscribe', bn_placeholder: 'your@email.com',
  }
};

let currentLang = localStorage.getItem('fora_lang') || 'es';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('fora_lang', lang);
  document.documentElement.lang = lang;

  // Toggle button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.style.background = btn.dataset.lang === lang ? 'rgba(168,92,122,.35)' : 'transparent';
    btn.style.color = btn.dataset.lang === lang ? '#fff' : 'rgba(255,255,255,.4)';
  });

  const T = TRANSLATIONS[lang];

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key] !== undefined) {
      el.innerHTML = T[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (T[key] !== undefined) el.placeholder = T[key];
  });
}

// Auto-apply on load
document.addEventListener('DOMContentLoaded', () => {
  // Set correct button states without re-rendering everything
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.style.background = btn.dataset.lang === currentLang ? 'rgba(168,92,122,.35)' : 'transparent';
    btn.style.color = btn.dataset.lang === currentLang ? '#fff' : 'rgba(255,255,255,.4)';
  });
  if (currentLang !== 'es') setLang(currentLang);
});