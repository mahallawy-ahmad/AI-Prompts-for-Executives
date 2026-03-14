/**
 * Kanz Al-Niyat | Core Logic
 * Rafiki OS Architecture
 */

var KANZ_DB = [
  {"id":"INT_READING_BOOK","title":"قراءة الكتب النافعة","description":"قراءة الكتب النافعة","icon":"📚","intentions":[
    {"id":"sub_reading_book_1","text":"نية رفع الجهل","desc":"اللهم إني نويت بقراءتي طلب العلم النافع، ورفع الجهل عن نفسي لتستنير بصيرتي، فسهّل لي طريقاً إلى جنتك.","evidence":"قوله ﷺ: «وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا، سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ».","weight":1},
    {"id":"sub_reading_book_2","text":"نية طبابة القلب","desc":"اللهم إني نويت بهذه القراءة إصلاح قلبي، وتطهير باطني من الرياء والغفلة، طمعاً في النجاة بقلب سليم.","evidence":"قوله ﷺ: «أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً، إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ... أَلَا وَهِيَ الْقَلْبُ».","weight":1},
    {"id":"sub_reading_book_3","text":"نية العمل بالعلم","desc":"اللهم إني نويت ألا أجعل حظي من الكتاب متعة القراءة فقط، بل العزم على التطبيق وإحياء السنن.","evidence":"قوله تعالى: ﴿الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ﴾.","weight":1}
  ]},
  {"id":"INT_SLEEP","title":"النوم","description":"النوم","icon":"🌙","timeRules":["21-04"],"intentions":[
    {"id":"sub_sleep_1","text":"نية التقوي على الطاعة","desc":"اللهم إني نويت بنومتي هذه إراحة بدني، وتجديد طاقتي لأقوى على طاعتك، والسعي في مرضاتك غداً.","evidence":"أثر معاذ بن جبل: «أَمَّا أَنَا فَأَنَامُ وَأَقُومُ، فَأَرْجُو فِي نَوْمَتِي مَا أَرْجُو فِي قَوْمَتِي».","weight":1},
    {"id":"sub_sleep_2","text":"نية قيام الليل","desc":"اللهم إني أويت إلى فراشي بنيّة القيام، فإن غلبتني عيناي فاكتب لي أجر ما نويت، واجعل نومي صدقة.","evidence":"قوله ﷺ: «مَنْ أَتَى فِرَاشَهُ وَهُوَ يَنْوِي أَنْ يَقُومَ... كُتِبَ لَهُ مَا نَوَى».","weight":1},
    {"id":"sub_sleep_3","text":"نية كف الشر","desc":"اللهم إني نويت بنومي حبس جوارحي عن المعاصي، وكف شري عن الخلق، فاجعل سكوني صدقة.","evidence":"قوله ﷺ: «تَكُفُّ شَرَّكَ عَنِ النَّاسِ فَإِنَّهَا صَدَقَةٌ مِنْكَ عَلَى نَفْسِكَ».","weight":1}
  ]},
  {"id":"INT_WAKEUP","title":"الاستيقاظ من النوم","description":"الاستيقاظ من النوم","icon":"☀️","timeRules":["05-08"],"intentions":[
    {"id":"sub_wakeup_1","text":"نية البعث الجديد","desc":"اللهم إني نويت باستيقاظي شكرك على ردّ روحي، وعقدت العزم على استثمار اليوم في عمل صالح.","evidence":"قوله ﷺ: «الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ».","weight":1},
    {"id":"sub_wakeup_2","text":"نية فك العُقَد","desc":"اللهم إني نويت بنهوضي وذكري لك كسر قيود الشيطان، لأستقبل يومي بنشاط وطيب نفس في طاعتك.","evidence":"قوله ﷺ: «فَإِنِ اسْتَيْقَظَ فَذَكَرَ اللَّهَ انْحَلَّتْ عُقْدَةٌ... فَأَصْبَحَ نَشِيطًا طَيِّبَ النَّفْسِ».","weight":1}
  ]},
  {"id":"INT_WUDU","title":"الوضوء والطهارة","description":"الوضوء والطهارة","icon":"💧","timeRules":["04-05","12-13","15-16","18-20"],"intentions":[
    {"id":"sub_wudu_1","text":"نية امتثال الأمر وتكفير الذنوب","desc":"اللهم إني نويت بوضوئي التطهر للوقوف بين يديك، وأن تغسل مع كل قطرة ماءٍ خطايا نظري وسمعي وبطشي.","evidence":"قوله ﷺ: «مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ خَرَجَتْ خَطَايَاهُ مِنْ جَسَدِهِ».","weight":1},
    {"id":"sub_wudu_2","text":"نية سيماء النور","desc":"اللهم إني نويت بإسباغ الوضوء أن تجعل أعضائي بيضاء مشرقة يوم القيامة، لأُعرف بها بين الأمم.","evidence":"قوله ﷺ: «إِنَّ أُمَّتِي يُدْعَوْنَ يَوْمَ الْقِيَامَةِ غُرًّا مُحَجَّلِينَ مِنْ آثَارِ الْوُضُوءِ».","weight":1}
  ]},
  {"id":"INT_EATING_DRINKING","title":"الأكل والشرب","description":"الأكل والشرب","icon":"🍽️","timeRules":["07-09","13-15","20-22"],"intentions":[
    {"id":"sub_eating_drinking_1","text":"نية وقود الطاعة","desc":"اللهم إني نويت بطعامي وشرابي سدّ جوعتي، والتقوّي بجسدي على طاعتك وخدمة دينك ونفع عبادك.","evidence":"قوله ﷺ: «الْمُؤْمِنُ الْقَوِيُّ، خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ».","weight":1},
    {"id":"sub_eating_drinking_2","text":"نية استجلاب الرضا","desc":"اللهم إني نويت بأكلتي هذه أن أتلذذ بنعمتك لأشكرك عليها، طمعاً في بلوغ كامل رضاك عني.","evidence":"قوله ﷺ: «إِنَّ اللَّهَ لَيَرْضَى عَنِ الْعَبْدِ أَنْ يَأْكُلَ الْأَكْلَةَ فَيَحْمَدَهُ عَلَيْهَا».","weight":1}
  ]},
  {"id":"INT_CLOTHES_ADORNMENT","title":"اللباس والزينة","description":"اللباس والزينة","icon":"👕","intentions":[
    {"id":"sub_clothes_adornment_1","text":"نية ستر السوأة","desc":"اللهم إني نويت بلباسي ستر عورتي استجابة لأمرك، فألبسني تقواك في باطني كما سترت ظاهري.","evidence":"الآية: ﴿وَلِبَاسُ التَّقْوَى ذَلِكَ خَيْرٌ﴾.","weight":1},
    {"id":"sub_clothes_adornment_2","text":"نية التجمل لله","desc":"اللهم إني نويت بزينتي وملبسي إظهار نعمتك عليّ، والتجمل لك دون كبر أو مخيلة على خلقك.","evidence":"قوله ﷺ: «إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ».","weight":1}
  ]},
  {"id":"INT_SPORTS_BODY","title":"الرياضة والعناية بالبدن","description":"الرياضة والعناية بالبدن","icon":"💪","intentions":[
    {"id":"sub_sports_body_1","text":"نية القوة في الطاعة","desc":"اللهم إني نويت برياضتي وتقوية بدني أن أكون مؤمناً قوياً، أقدر على نفع أمتي والقيام بحقوقك.","evidence":"قوله ﷺ: «الْمُؤْمِنُ الْقَوِيُّ، خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ».","weight":1},
    {"id":"sub_sports_body_2","text":"نية أداء حق الأمانة","desc":"اللهم إن جسدي أمانةٌ، وقد نويت بالاعتناء به أداء حقك وحق نفسي، فاجعله مطيةً صالحةً لي.","evidence":"قوله ﷺ: «فَإِنَّ لِجَسَدِكَ عَلَيْكَ حَقًّا».","weight":1}
  ]},
  {"id":"INT_RECREATION","title":"الترويح عن النفس والنزهة","description":"الترويح عن النفس والنزهة","icon":"🎡","intentions":[
    {"id":"sub_recreation_1","text":"نية إجمام النفس","desc":"اللهم إني نويت بنزهتي وترويحي أن أدفع عن قلبي الملل، لتنشط جوارحي وتعود لطاعتك أشد إقبالاً.","evidence":"قوله ﷺ لحنظلة: «يَا حَنْظَلَةُ، سَاعَةً وَسَاعَةً».","weight":1}
  ]},
  {"id":"INT_PERSONAL_HYGIENE","title":"النظافة الشخصية","description":"النظافة الشخصية","icon":"🚿","intentions":[
    {"id":"sub_personal_hygiene_1","text":"نية محبة الله والتأسي","desc":"اللهم إني نويت بتنظيف جسدي والتطيب، التعرض لمحبتك التي جعلتها للمتطهرين، والتأسي بنبيك ﷺ.","evidence":"الآية: ﴿إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ﴾.","weight":1}
  ]},
  {"id":"INT_FAMILY_MARRIAGE","title":"الزواج وتربية الأبناء","description":"الزواج وتربية الأبناء","icon":"👨‍👩‍👧‍👦","intentions":[
    {"id":"sub_family_marriage_1","text":"نية إعفاف النفس والزوج","desc":"اللهم إني نويت بزواجي وعشرتي إعفاف نفسي وزوجي عن الحرام، فاجعل استمتاعي بحلالك صدقة.","evidence":"قوله ﷺ: «وَفِي بُضْعِ أَحَدِكُمْ صَدَقَةٌ».","weight":1},
    {"id":"sub_family_marriage_2","text":"نية الامتداد النبوي","desc":"اللهم إني نويت ببيتي بناء لبنة صالحة في أمة نبيك، وإنجاب ذرية توحدك وتسجد لك.","evidence":"قوله ﷺ: «تَزَوَّجُوا الْوَدُودَ الْوَلُودَ، فَإِنِّي مُكَاثِرٌ بِكُمُ الْأُمَمَ».","weight":1}
  ]},
  {"id":"INT_PARENTS_KINSHIP","title":"بر الوالدين وصلة الرحم","description":"بر الوالدين وصلة الرحم","icon":"👴","intentions":[
    {"id":"sub_parents_kinship_1","text":"نية طَرْق أوسط الأبواب","desc":"اللهم إني نويت بخفض جناحي لأمي وأبي وخدمتهما، أن أطرق أعظم أبواب جنتك وأقربها إليك.","evidence":"قوله ﷺ: «الْوَالِدُ أَوْسَطُ أَبْوَابِ الْجَنَّةِ».","weight":1},
    {"id":"sub_parents_kinship_2","text":"نية التعلق بالعرش وبسط الرزق","desc":"اللهم إني نويت بصلة أرحامي استجلاب بركتك في عمري ورزقي، وأن تصلني برحمتك ورضاك.","evidence":"قوله ﷺ: «مَنْ سَرَّهُ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ، أَوْ يُنْسَأَ لَهُ فِي أَثَرِهِ، فَلْيَصِلْ رَحِمَهُ».","weight":1}
  ]},
  {"id":"INT_HOUSEWORK","title":"أعمال المنزل","description":"أعمال المنزل","icon":"🧹","intentions":[
    {"id":"sub_housework_1","text":"نية الاقتداء النبوي","desc":"اللهم إني نويت بخدمتي في بيتي الاقتداء بسنة حبيبك ﷺ في تواضعه وخدمته لأهل بيته.","evidence":"عائشة رضي الله عنها: «كَانَ فِي مِهْنَةِ أَهْلِهِ».","weight":1},
    {"id":"sub_housework_2","text":"نية إماطة الأذى","desc":"اللهم إني نويت بتنظيف بيتي وترتيبه إماطة الأذى عن طريق أهلي، وتهيئة مكان طاهر لذكرك.","evidence":"قوله ﷺ: «وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ».","weight":1}
  ]},
  {"id":"INT_SHOPPING","title":"التسوق والإنفاق","description":"التسوق والإنفاق","icon":"🛒","intentions":[
    {"id":"sub_shopping_1","text":"نية أعظم الصدقات","desc":"اللهم إني نويت بشراء احتياجات بيتي كفاية أهلي، فاجعل ما أنفقه عليهم أعظم في ميزاني من الإنفاق في سبيلك.","evidence":"قوله ﷺ: «أَعْظَمُهَا أَجْرًا الَّذِي أَنْفَقْتَهُ عَلَى أَهْلِكَ».","weight":1}
  ]},
  {"id":"INT_FINANCIAL_TRANSACTIONS","title":"البيع والشراء والمعاملات","description":"البيع والشراء والمعاملات","icon":"💰","intentions":[
    {"id":"sub_financial_transactions_1","text":"نية السماحة واستجلاب الرحمة","desc":"اللهم إني نويت بتعاملي المالي أن أكون سمحاً بيعاً وشراءً وقضاءً، طمعاً في أن تشملني برحمتك.","evidence":"قوله ﷺ: «رَحِمَ اللَّهُ رَجُلًا سَمْحًا إِذَا بَاعَ، وَإِذَا اشْتَرَى، وَإِذَا اقْتَضَى».","weight":1}
  ]},
  {"id":"INT_SOCIAL_RELATIONS","title":"التعامل مع الناس","description":"التعامل مع الناس","icon":"🤝","intentions":[
    {"id":"sub_social_relations_1","text":"نية صدقة السرور (الابتسامة)","desc":"اللهم إني نويت بابتسامتي في وجوه خلقك التصدق عليهم وإدخال السرور لقلوبهم.","evidence":"قوله ﷺ: «تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ».","weight":1},
    {"id":"sub_social_relations_2","text":"نية درع النيران (الكلمة الطيبة)","desc":"اللهم إني نويت بكلمتي الطيبة وجبر خواطر المكسورين أن أتقي بها حر النار يوم ألقاك.","evidence":"قوله ﷺ: «اتَّقُوا النَّارَ... فَمَنْ لَمْ يَجِدْ فَبِكَلِمَةٍ طَيِّبَةٍ».","weight":1},
    {"id":"sub_social_relations_3","text":"نية المعية (قضاء الحوائج)","desc":"اللهم إني نويت بتفريج كربة أخي أن تكون أنت في حاجتي وتفرج كربتي يوم القيامة.","evidence":"قوله ﷺ: «مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ».","weight":1}
  ]},
  {"id":"INT_HOSTING_GUESTS","title":"استقبال الضيوف","description":"استقبال الضيوف","icon":"☕","intentions":[
    {"id":"sub_hosting_guests_1","text":"نية الإيمان والاقتداء بالخليل","desc":"اللهم إني نويت بفتح بيتي وإكرام ضيفي تحقيق الإيمان بك، والاقتداء بسنة أنبيائك.","evidence":"قوله ﷺ: «مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ».","weight":1}
  ]},
  {"id":"INT_WORK_JOB","title":"العمل والوظيفة","description":"العمل والوظيفة","icon":"💼","timeRules":["08-16"],"intentions":[
    {"id":"sub_work_job_1","text":"نية التعفف والكفاية","desc":"اللهم إني نويت بوظيفتي إعفاف نفسي وكفاية عيالي عن ذل السؤال، فاجعل كَدّي في سبيلك.","evidence":"قوله ﷺ: «وَإِنْ كَانَ خَرَجَ يَسْعَى عَلَى نَفْسِهِ يَعِفُّهَا فَهُوَ فِي سَبِيلِ اللَّهِ».","weight":1},
    {"id":"sub_work_job_2","text":"نية الإحسان والمراقبة","desc":"اللهم إني نويت إتقان عملي وتجويد مهنتي طمعاً في بلوغ محبتك، واستشعاراً لمراقبتك.","evidence":"قوله ﷺ: «إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ».","weight":1}
  ]},
  {"id":"INT_STUDY","title":"الدراسة وطلب العلم","description":"الدراسة وطلب العلم","icon":"📝","intentions":[
    {"id":"sub_study_1","text":"نية عمارة الأرض وسد الثغور","desc":"اللهم إني نويت بتخصصي أن أسدّ ثغرةً من ثغور المسلمين، وأن أكون مؤمناً قوياً تعتز به أمتي.","evidence":"الآية: ﴿وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ﴾.","weight":1},
    {"id":"sub_study_2","text":"نية مجاهدة النفس","desc":"اللهم إني أحتسب سهر لياليّ وصبري على كتبي جهاداً في سبيلك ومكابدة ترضيك عني.","evidence":"قوله ﷺ: «الْمُجَاهِدُ مَنْ جَاهَدَ نَفْسَهُ فِي طَاعَةِ اللَّهِ».","weight":1}
  ]},
  {"id":"INT_COMMUTING","title":"المواصلات والقيادة","description":"المواصلات والقيادة","icon":"🚗","timeRules":["07-09","16-18"],"intentions":[
    {"id":"sub_commuting_1","text":"نية الشكر على التسخير","desc":"اللهم إني نويت بركوبي هذا شكر نعمتك على تسخير هذه المراكب، وأن أستعين بها على قضاء حوائجي في طاعتك.","evidence":"الآية: ﴿سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ﴾.","weight":1},
    {"id":"sub_commuting_2","text":"نية الصبر وكف الأذى","desc":"اللهم إني نويت بصبري على الزحام وحسن قيادتي كفَّ الأذى عن المسلمين، فاجعل ذلك صدقة مني على نفسي.","evidence":"قوله ﷺ: «تَكُفُّ شَرَّكَ عَنِ النَّاسِ فَإِنَّهَا صَدَقَةٌ مِنْكَ عَلَى نَفْسِكَ».","weight":1}
  ]},
  {"id":"INT_WAITING_TIME","title":"أوقات الانتظار","description":"أوقات الانتظار","icon":"⏳","intentions":[
    {"id":"sub_waiting_time_1","text":"نية المرابطة وإعمار الوقت","desc":"اللهم إني نويت في وقت انتظاري هذا أن أحبس نفسي على ذكرك، فاجعل وقتي هذا رباطاً في سبيلك.","evidence":"قوله ﷺ: «فَإِنَّ أَحَدَكُمْ فِي صَلَاةٍ مَا دَامَتِ الصَّلَاةُ تَحْبِسُهُ».","weight":1}
  ]},
  {"id":"INT_SOCIAL_MEDIA","title":"تصفح الإنترنت والهاتف","description":"تصفح الإنترنت والهاتف","icon":"📱","timeRules":["19-23"],"intentions":[
    {"id":"sub_social_media_1","text":"نية الدلالة على الخير","desc":"اللهم إني نويت بفتحي لهذه الشاشات أن أتعلم خيراً أو أُعلمه، وأكون دالاً عليك في مجامع الناس.","evidence":"قوله ﷺ: «مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ».","weight":1},
    {"id":"sub_social_media_2","text":"نية صيام العين وحفظ اللسان","desc":"اللهم إني نويت تصفحي هذا أن أغض بصري عما حرمت وأكف أصابعي عن أعراض الناس.","evidence":"قوله ﷺ: «الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ».","weight":1}
  ]},
  {"id":"INT_SALAH","title":"الصلاة","description":"الصلاة","icon":"🕌","timeRules":["04-05","12-13","15-16","18-20"],"intentions":[
    {"id":"sub_salah_1","text":"نية المناجاة والقرب","desc":"اللهم إني نويت بصلاتي الدخول في كنفك ومناجاتك، طمعاً في أقرب نقطة يصل إليها عبد من ربه.","evidence":"قوله ﷺ: «أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ».","weight":1},
    {"id":"sub_salah_2","text":"نية جلاء الهموم","desc":"اللهم إني فزعت إلى صلاتي بنية أن تغسل عن قلبي هموم الدنيا وتبرد بها لهيب قلقي.","evidence":"قوله ﷺ: «وَجُعِلَتْ قُرَّةُ عَيْنِي فِي الصَّلَاةِ».","weight":1}
  ]},
  {"id":"INT_QURAN","title":"تلاوة القرآن","description":"تلاوة القرآن","icon":"📖","timeRules":["04-06","18-20"],"intentions":[
    {"id":"sub_quran_1","text":"نية الشفاعة والمرافقة","desc":"اللهم إني نويت بقراءتي أن تجعل القرآن أنيسي في قبري، ونوراً لي على الصراط وشفيعاً لي يوم القيامة.","evidence":"قوله ﷺ: «اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ».","weight":1},
    {"id":"sub_quran_2","text":"نية الاستشفاء والجلاء","desc":"اللهم إني نويت بتلاوتي الاستشفاء من أمراض جسدي وعلاجاً لقسوة قلبي، وأن تجلي به همي وحزني.","evidence":"قوله تعالى: ﴿وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ﴾.","weight":1},
    {"id":"sub_quran_3","text":"نية المعية والسكينة","desc":"اللهم إني نويت بتلاوتي أن أكون من أهلك وخاصتك، وأن تتنزل عليّ السكينة وتغشاني الرحمة.","evidence":"قوله ﷺ: «أَهْلُ الْقُرْآنِ هُمْ أَهْلُ اللَّهِ وَخَاصَّتُهُ».","weight":1},
    {"id":"sub_quran_4","text":"نية الارتقاء وتتويج الوالدين","desc":"اللهم إني نويت بتلاوتي أن ترتفع درجاتي في الجنة، وأن تكسو والديّ بتاج الوقار يوم القيامة.","evidence":"قوله ﷺ: «يُقَالُ لِصَاحِبِ الْقُرْآنِ: اقْرَأْ، وَارْتَقِ، وَرَتِّلْ».","weight":1},
    {"id":"sub_quran_5","text":"نية التجارة الرابحة","desc":"اللهم إني نويت بقراءتي مضاعفة حسناتي، طمعاً بأن ترزقني بكل حرف عشر حسنات.","evidence":"قوله ﷺ: «مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ، وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا».","weight":1}
  ]},
  {"id":"INT_FASTING","title":"الصيام","description":"الصيام","icon":"🥣","intentions":[
    {"id":"sub_fasting_1","text":"نية العبودية الخالصة والمحبة","desc":"اللهم إني نويت بصيامي التقرب إليك بعبادةٍ جعلتها سراً بينك وبين عبادك وتوليت جزاءها بنفسك.","evidence":"الحديث القدسي: «كُلُّ عَمَلِ ابْنِ آدَمَ لَهُ إِلَّا الصِّيَامَ، فَإِنَّهُ لِي وَأَنَا أَجْزِي بِهِ».","weight":1},
    {"id":"sub_fasting_2","text":"نية درع الوقاية والشفاعة","desc":"اللهم إني نويت بصيامي أن تجعله لي جُنةً تكفر بها ذنوبي، ودرعاً يقيني حر نارك سبعين خريفاً.","evidence":"قوله ﷺ: «مَنْ صَامَ يَوْمًا فِي سَبِيلِ اللَّهِ بَعَّدَ اللَّهُ وَجْهَهُ عَنِ النَّارِ سَبْعِينَ خَرِيفًا».","weight":1},
    {"id":"sub_fasting_3","text":"نية باب الريان وفرحة اللقاء","desc":"اللهم إني نويت بصيامي أن ترزقني فرحة اللقاء، وتدخلني جنتك من باب الريان.","evidence":"قوله ﷺ: «إِنَّ فِي الْجَنَّةِ بَابًا يُقَالُ لَهُ الرَّيَّانُ، يَدْخُلُ مِنْهُ الصَّائِمُونَ».","weight":1},
    {"id":"sub_fasting_4","text":"نية ترويض النفس وجهاد الهوى","desc":"اللهم إني نويت بحبسي لنفسي مجاهدة شيطاني وهواي، ليرقّ قلبي وأتعلم الصبر على طاعتك.","evidence":"الآية: ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَى * فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَى﴾.","weight":1},
    {"id":"sub_fasting_5","text":"نية عرض الأعمال وإجابة الدعاء","desc":"اللهم إني نويت بصيامي أن يُعرض عملي عليك فترضى، وأن ترزقني عند فطري دعوةً مستجابة لا تُرَد.","evidence":"قوله ﷺ: «إِنَّ لِلصَّائِمِ عِنْدَ فِطْرِهِ لَدَعْوَةً مَا تُرَدُّ».","weight":1}
  ]},
  {"id":"INT_DHIKR","title":"الذكر والاستغفار","description":"الذكر والاستغفار","icon":"📿","intentions":[
    {"id":"sub_dhikr_1","text":"نية الذكر المتبادل","desc":"اللهم إني نويت بتسبيحي وذكري أن تذكرني في نفسك، وأن تباهي بي ملائكتك في الملأ الأعلى.","evidence":"الحديث القدسي: «فَإِنْ ذَكَرَنِي فِي نَفْسِهِ ذَكَرْتُهُ فِي نَفْسِي».","weight":1},
    {"id":"sub_dhikr_2","text":"نية تشجير الجنان","desc":"اللهم إني نويت بذكري هذا غرس نخيل وأشجار لي في جنتك، لأعمر بها أرضي يوم ألقاك.","evidence":"قوله ﷺ: «وَأَنَّهَا قِيعَانٌ، وَأَنَّ غِرَاسَهَا: سُبْحَانَ اللَّهِ، وَالحَمْدُ لِلَّهِ...».","weight":1}
  ]},
  {"id":"INT_SICK_VISIT","title":"زيارة المريض","description":"زيارة المريض","icon":"🏥","intentions":[
    {"id":"sub_sick_visit_1","text":"نية أداء الحقوق","desc":"اللهم إني نويت بممشاي هذا أداء حق أخي المسلم الذي أوجبته عليّ، طاعة لك ولامتثال أمر نبيك.","evidence":"قوله ﷺ: «حَقُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ خَمْسٌ: رَدُّ السَّلَامِ، وَعِيَادَةُ الْمَرِيضِ...».","weight":1},
    {"id":"sub_sick_visit_2","text":"نية خرفة الجنة وصلاة الملائكة","desc":"اللهم إني نويت بزيارتي أن أستجلب صلاة سبعين ألف مَلَكٍ يستغفرون لي حتى أمسي.","evidence":"قوله ﷺ: «مَا مِنْ مُسْلِمٍ يَعُودُ مُسْلِمًا غُدْوَةً إِلَّا صَلَّى عَلَيْهِ سَبْعُونَ أَلْفَ مَلَكٍ».","weight":1}
  ]},
  {"id":"INT_ALTERNATIVE_INTENTIONS","title":"تجارة العاجز (النية البديلة)","description":"تجارة العاجز (النية البديلة)","icon":"♿","intentions":[
    {"id":"sub_alternative_intentions_1","text":"نية المريض (العبادة المستمرة)","desc":"اللهم إنك تعلم أني كنت أداوم على العبادة لولا أن أقعدني المرض، فاجرِ لي ثوابي كما كنت صحيحاً.","evidence":"قوله ﷺ: «إِذَا مَرِضَ الْعَبْدُ أَوْ سَافَرَ، كُتِبَ لَهُ مِثْلُ مَا كَانَ يَعْمَلُ مُقِيمًا صَحِيحًا».","weight":1},
    {"id":"sub_alternative_intentions_2","text":"نية الفقير (التصدق بالأمنيات)","desc":"اللهم إنك تعلم أنه لو كان لي مالٌ لعملتُ بعمل المنفقين في سبيلك، فاكتب لي أجرهم بصدق نيتي.","evidence":"قوله ﷺ في الغني والفقير الصادق: «فَهُوَ بِنِيَّتِهِ، فَأَجْرُهُمَا سَوَاءٌ».","weight":1},
    {"id":"sub_alternative_intentions_3","text":"نية المشغول (مزاحمة العُبَّاد)","desc":"اللهم إني نويت مزاحمة الصالحين في العبادة لولا أن حبسني كدّي على عيالي، فاجعل همّي طاعة مكتوبة.","evidence":"الحديث القدسي: «فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا، كَتَبَهَا اللَّهُ لَهُ عِنْدَهُ حَسَنَةً كَامِلَةً».","weight":1},
    {"id":"sub_alternative_intentions_4","text":"نية النائم (صدقة الله)","desc":"اللهم إن غلبني تعب جسدي عن القيام، فاجعل نومي صدقة منك عليّ، ولا تحرمني أجر ما نويت.","evidence":"قوله ﷺ: «مَا مِنْ امْرِئٍ... فَغَلَبَهُ عَلَيْهَا نَوْمٌ، إِلَّا كُتِبَ لَهُ أَجْرُ صَلَاتِهِ، وَكَانَ نَوْمُهُ صَدَقَةً».","weight":1}
  ]},
  {"id":"INT_CONTINUOUS_INTENTIONS","title":"النية الجارية","description":"النية الجارية","icon":"🌱","intentions":[
    {"id":"sub_continuous_intentions_1","text":"نية الغرس الممتد (الصدقة الجارية)","desc":"اللهم إني نويت بهذا العمل أن أجعله صدقة جارية تدرّ عليّ الحسنات وأنا غافل في بيتي أو رميم في قبري.","evidence":"قوله ﷺ: «مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا... إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ».","weight":1},
    {"id":"sub_continuous_intentions_2","text":"نية المحيا والممات (الاستغراق الكلي)","desc":"اللهم إني عقدت النية أن أجعل أنفاسي، وسكوني، وحركتي، ويقظتي خالصة لوجهك، فاقبلني بكليتي.","evidence":"الآية: ﴿قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ﴾.","weight":1}
  ]}
];

const App = {
  db: [],
  state: {
    view: 'home',
    selectedIntentions: new Set(),
    context: null,
    score: 0,
    history: [],
    searchQuery: '',
    theme: 'dark',
    fontSize: 'normal',
    librarySort: 'default',
    historyFilter: 'all',
    favorites: [],
    onboardingSeen: false,
    soundEnabled: true,
    flashMomentShownThisSession: false,
    customIntentions: []
  },

  auth: { token: null, email: null },
  API_BASE: 'https://kanz.innoahmad.net/api',

  LIBRARY_CATEGORIES: {
    'عبادات': ['INT_SALAH', 'INT_QURAN', 'INT_FASTING', 'INT_DHIKR', 'INT_WUDU'],
    'يومك': ['INT_WAKEUP', 'INT_SLEEP', 'INT_EATING_DRINKING', 'INT_CLOTHES_ADORNMENT', 'INT_PERSONAL_HYGIENE'],
    'عمل ومعاملات': ['INT_WORK_JOB', 'INT_STUDY', 'INT_FINANCIAL_TRANSACTIONS', 'INT_SHOPPING', 'INT_COMMUTING'],
    'أسرة وعلاقات': ['INT_FAMILY_MARRIAGE', 'INT_PARENTS_KINSHIP', 'INT_SOCIAL_RELATIONS', 'INT_HOSTING_GUESTS', 'INT_SICK_VISIT'],
    'أخرى': ['INT_READING_BOOK', 'INT_SPORTS_BODY', 'INT_RECREATION', 'INT_HOUSEWORK', 'INT_WAITING_TIME', 'INT_SOCIAL_MEDIA', 'INT_ALTERNATIVE_INTENTIONS', 'INT_CONTINUOUS_INTENTIONS']
  },

  escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str == null ? '' : str;
    return d.innerHTML;
  },

  init() {
    try { this.loadState(); } catch(e) {}
    try { this.applyTheme(); } catch(e) {}
    try { this.applyFontSize(); } catch(e) {}
    try { this.loadAuth(); } catch(e) {}
    this.db = KANZ_DB;
    this.detectContext();
    this.render();
    this.registerSW();
    this.setupPullToRefresh();
    this.maybeShowOnboarding();
    this.maybeRequestNotificationPermission();
    this.startReminderLoop();
    this.setupPWAInstall();
    if (this.auth.token) {
      const lastSync = parseInt(localStorage.getItem('kanz_last_sync') || '0');
      if (Date.now() - lastSync > 3600000) this.syncFromServer();
    }
  },

  setupPWAInstall() {
    this._installPrompt = null;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this._installPrompt = e;
      const btn = document.getElementById('btn-install');
      if (btn) btn.style.display = '';
    });
    window.addEventListener('appinstalled', () => {
      this._installPrompt = null;
      const btn = document.getElementById('btn-install');
      if (btn) btn.style.display = 'none';
      this.showToast('✓ تم تثبيت التطبيق');
    });
  },

  async doInstallPWA() {
    if (!this._installPrompt) { this.showToast('التطبيق مثبّت بالفعل أو المتصفح لا يدعم التثبيت'); return; }
    this._installPrompt.prompt();
    const { outcome } = await this._installPrompt.userChoice;
    if (outcome === 'accepted') this._installPrompt = null;
  },

  loadState() {
    try {
      const saved = localStorage.getItem('kanz_state');
      if (saved) {
        const data = JSON.parse(saved);
        this.state.score = typeof data.score === 'number' ? data.score : 0;
        this.state.history = Array.isArray(data.history) ? data.history : [];
        if (data.theme) this.state.theme = data.theme;
        if (data.fontSize) this.state.fontSize = data.fontSize;
        if (data.librarySort) this.state.librarySort = data.librarySort;
        if (data.historyFilter) this.state.historyFilter = data.historyFilter;
        if (Array.isArray(data.favorites)) this.state.favorites = data.favorites;
        if (data.onboardingSeen) this.state.onboardingSeen = true;
        if (typeof data.soundEnabled === 'boolean') this.state.soundEnabled = data.soundEnabled;
        if (Array.isArray(data.customIntentions)) this.state.customIntentions = data.customIntentions;
      }
      const onboarding = localStorage.getItem('kanz_onboarding_seen');
      if (onboarding === '1') this.state.onboardingSeen = true;
    } catch (e) {
      console.warn('KanZ: تعذر تحميل الحفظ السابق');
    }
  },

  saveState() {
    localStorage.setItem('kanz_state', JSON.stringify({
      score: this.state.score,
      history: this.state.history,
      theme: this.state.theme,
      fontSize: this.state.fontSize,
      librarySort: this.state.librarySort,
      historyFilter: this.state.historyFilter,
      favorites: this.state.favorites,
      onboardingSeen: this.state.onboardingSeen,
      soundEnabled: this.state.soundEnabled,
      customIntentions: this.state.customIntentions
    }));
  },

  // --- Logic Layer ---
  detectContext() {
    if (!this.db.length) return;
    const hour = new Date().getHours();
    let suggested = null;

    // Smart Match
    for (const item of this.db) {
      if (item.timeRules) {
        for (const range of item.timeRules) {
          const [start, end] = range.split('-').map(Number);
          // Handle midnight crossing (e.g. 21-04)
          if (start > end) {
            if (hour >= start || hour < end) suggested = item;
          } else {
            if (hour >= start && hour < end) suggested = item;
          }
          if (suggested) break;
        }
      }
      if (suggested) break;
    }

    // Default Fallback (Reading or General)
    this.state.context = suggested || this.db.find(i => i.id === 'INT_READING_BOOK') || this.db[0];
  },

  toggleSelection(id) {
    if (this.state.selectedIntentions.has(id)) {
      this.state.selectedIntentions.delete(id);
    } else {
      this.state.selectedIntentions.add(id);
      if(navigator.vibrate) navigator.vibrate(10);
    }
    this.renderHome(); // Re-render to update UI
  },

  commitIntentions() {
    const ctx = this.state.context;
    if (!ctx || !Array.isArray(ctx.intentions)) return;
    let gainedScore = 0;
    ctx.intentions.forEach(sub => {
      if (this.state.selectedIntentions.has(sub.id)) gainedScore += sub.weight;
    });

    if (gainedScore > 0) {
      this.state.score += gainedScore;
      this.state.history.push({
        date: Date.now(),
        intentionId: ctx.id,
        score: gainedScore,
        synced: false
      });
      this.saveState();
      this.playCommitSound();
      this.showCelebration(gainedScore);
      this.state.selectedIntentions.clear();
      if (this.auth.token) this.syncToServer();
      setTimeout(() => this.renderHome(), 2000);
    }
  },

  // --- View Layer (Simple Virtual DOM-ish) ---
  render() {
    const container = document.getElementById('main-content');
    if (!container) return;
    if (this.state.view === 'home') this.renderHome();
    else if (this.state.view === 'library') this.renderLibrary();
    else if (this.state.view === 'stats') this.renderStats();
    this.updateNav();
  },

  renderLibrary() {
    const container = document.getElementById('main-content');
    const q = (this.state.searchQuery || '').trim().toLowerCase();
    const fullList = this.getLibraryList();
    let list = q
      ? fullList.filter(cat =>
          cat.title.toLowerCase().includes(q) ||
          (cat.description && (cat.description || '').toLowerCase().includes(q)) ||
          (cat.intentions && cat.intentions.some(sub =>
            ((sub.text || '').toLowerCase().includes(q)) ||
            ((sub.desc || '').toLowerCase().includes(q))
          ))
        )
      : fullList;
    list = this.getSortedLibraryList(list);
    const favs = this.state.favorites;

    const renderCards = (items, excludeFavs) => {
      const toShow = excludeFavs ? items.filter(cat => !favs.includes(cat.id)) : items;
      return toShow.map(cat => `
        <div class="lib-card ${cat.isCustomCategory ? 'lib-card-custom-cat' : ''}" onclick="App.openContext('${cat.id}')">
          ${cat.id !== 'INT_CUSTOM' && !cat.isCustomCategory ? `<button type="button" class="lib-fav-btn ${this.isFavorite(cat.id) ? 'active' : ''}" onclick="event.stopPropagation(); App.toggleFavorite('${cat.id}')" title="${this.isFavorite(cat.id) ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}">${this.isFavorite(cat.id) ? '⭐' : '☆'}</button>` : ''}
          <button type="button" class="lib-add-btn" onclick="event.stopPropagation(); App.showAddCustomIntention('${cat.id}')" title="أضف نية لهذه الفئة">＋</button>
          <div class="lib-icon">${cat.icon || '✨'}</div>
          <div class="lib-title">${cat.title}</div>
        </div>
      `).join('');
    };

    let body = '';
    if (q) {
      body = `<div class="library-grid animate-up">${list.length ? renderCards(list, true) : '<p class="library-empty">لا توجد نتائج</p>'}</div>`;
    } else {
      const cats = this.LIBRARY_CATEGORIES;
      for (const [catName, ids] of Object.entries(cats)) {
        const inCat = list.filter(c => ids.includes(c.id)).filter(c => !favs.includes(c.id));
        if (inCat.length === 0) continue;
        body += `<div class="library-category"><h3 class="category-title">${catName}</h3><div class="library-grid">${renderCards(inCat, false)}</div></div>`;
      }
      const builtinIds = Object.values(cats).flat();
      const uncat = list.filter(c => !builtinIds.includes(c.id) && !favs.includes(c.id) && !c.isCustomCategory);
      if (uncat.length) body += `<div class="library-category"><h3 class="category-title">أخرى</h3><div class="library-grid">${renderCards(uncat, false)}</div></div>`;

      // Custom categories section
      const customCats = list.filter(c => c.isCustomCategory && !favs.includes(c.id));
      const newCatCard = `<div class="lib-card lib-card-new-cat" onclick="App.showAddCustomIntention(null, true)"><div class="lib-icon">🆕</div><div class="lib-title">فئة جديدة</div></div>`;
      body += `<div class="library-category"><h3 class="category-title">نواياي المخصصة</h3><div class="library-grid">${renderCards(customCats, false)}${newCatCard}</div></div>`;

      if (favs.length) {
        const favCards = favs.map(id => fullList.find(x => x.id === id)).filter(Boolean);
        body = `<div class="favorites-section"><h3>المفضلة</h3><div class="library-grid">${favCards.map(cat => `<div class="lib-card lib-card-fav" onclick="App.openContext('${cat.id}')"><button type="button" class="lib-fav-btn" onclick="event.stopPropagation(); App.toggleFavorite('${cat.id}')">⭐</button><div class="lib-icon">${cat.icon}</div><div class="lib-title">${cat.title}</div></div>`).join('')}</div></div>` + body;
      }
    }

    container.innerHTML = `
      <div class="library-header">
        <h2 class="library-title">المكتبة الشاملة</h2>
        <input type="search" class="library-search" placeholder="ابحث عن نية أو سياق..."
               value="${this.escapeHtml(this.state.searchQuery)}"
               oninput="App.state.searchQuery=this.value; App.renderLibrary();">
        <select class="library-sort" onchange="App.state.librarySort=this.value; App.saveState(); App.renderLibrary();">
          <option value="default" ${this.state.librarySort === 'default' ? 'selected' : ''}>الترتيب الافتراضي</option>
          <option value="alpha" ${this.state.librarySort === 'alpha' ? 'selected' : ''}>أبجدي</option>
          <option value="used" ${this.state.librarySort === 'used' ? 'selected' : ''}>الأكثر استخداماً</option>
        </select>
        <button type="button" class="btn-secondary btn-add-intention" onclick="App.showAddCustomIntention()">+ نية شخصية</button>
      </div>
      <div class="library-body animate-up">${body || '<p class="library-empty">اختر من التصنيفات أعلاه</p>'}</div>
    `;
  },

  showAddCustomIntention(categoryId = null, newCatMode = false) {
    const overlay = document.getElementById('overlay');
    // Build category dropdown: built-in + custom categories
    let catOptions = this.db.map(c => `<option value="${c.id}" ${c.id === categoryId ? 'selected' : ''}>${c.icon || ''} ${this.escapeHtml(c.title)}</option>`).join('');
    const customCats = {};
    (this.state.customIntentions || []).filter(n => n.isCustomCategory).forEach(n => {
      if (!customCats[n.categoryId]) customCats[n.categoryId] = { id: n.categoryId, title: n.categoryTitle, icon: n.categoryIcon || '✨' };
    });
    Object.values(customCats).forEach(c => {
      catOptions += `<option value="${c.id}" ${c.id === categoryId ? 'selected' : ''}>${c.icon} ${this.escapeHtml(c.title)} (مخصصة)</option>`;
    });
    const isNew = newCatMode || (!categoryId);
    overlay.innerHTML = `
      <div class="custom-intention-form" onclick="event.stopPropagation()">
        <h3 style="color:#D4AF37;margin-bottom:16px;font-size:1.1rem">➕ إضافة نية مخصصة</h3>

        <div class="add-mode-tabs">
          <button type="button" class="add-mode-tab ${!isNew ? 'active' : ''}" onclick="App._switchAddMode(false)">أضف لفئة موجودة</button>
          <button type="button" class="add-mode-tab ${isNew  ? 'active' : ''}" onclick="App._switchAddMode(true)">أنشئ فئة جديدة</button>
        </div>

        <div id="add-existing-mode" style="${isNew ? 'display:none' : ''}">
          <label class="custom-field-label">الفئة</label>
          <select id="custom-cat-select" class="auth-input" style="padding:12px">${catOptions}</select>
        </div>
        <div id="add-new-mode" style="${!isNew ? 'display:none' : ''}">
          <label class="custom-field-label">اسم الفئة الجديدة</label>
          <input type="text" id="custom-cat-name" class="auth-input" placeholder="مثال: الدعاء والتضرع" dir="rtl">
          <label class="custom-field-label">أيقونة (اختياري)</label>
          <input type="text" id="custom-cat-icon" class="auth-input" placeholder="🌟" style="text-align:center;font-size:1.4rem">
        </div>

        <label class="custom-field-label">نص النية *</label>
        <input type="text" id="custom-intent-text" class="auth-input" placeholder="مثال: نية الصبر والاحتساب" dir="rtl">

        <label class="custom-field-label">الدعاء أو الوصف (اختياري)</label>
        <textarea id="custom-intent-desc" class="auth-input" placeholder="اللهم إني نويت..." rows="3" dir="rtl" style="resize:vertical;min-height:70px"></textarea>

        <label class="custom-field-label">دليل من حديث أو آية (اختياري)</label>
        <input type="text" id="custom-intent-evidence" class="auth-input" placeholder='قوله ﷺ: "..."' dir="rtl">

        <p id="custom-intent-error" class="auth-error" style="margin:4px 0 0"></p>
        <div class="form-actions-row">
          <button type="button" class="btn-auth-submit" onclick="App.submitCustomIntention()">إضافة النية</button>
          <button type="button" class="btn-auth-secondary btn-cancel" onclick="App.closeOverlay()">إلغاء</button>
        </div>
      </div>
    `;
    overlay.onclick = () => this.closeOverlay();
    overlay.classList.add('active');
    this._addIsNewCat = isNew;
  },

  deleteCustomIntention(idx) {
    if (!confirm('هل تريد حذف هذه النية؟')) return;
    this.state.customIntentions.splice(idx, 1);
    this.saveState();
    // Re-open current context to refresh
    if (this.state.context) {
      const ctx = this.getLibraryList().find(c => c.id === this.state.context.id);
      this.state.context = ctx || null;
      if (!this.state.context) this.navigate('library');
      else this.renderHome();
    }
    this.showToast('تم الحذف');
  },

  _switchAddMode(isNew) {
    this._addIsNewCat = isNew;
    document.getElementById('add-existing-mode').style.display = isNew ? 'none' : '';
    document.getElementById('add-new-mode').style.display      = isNew ? '' : 'none';
    document.querySelectorAll('.add-mode-tab').forEach((t, i) => t.classList.toggle('active', i === (isNew ? 1 : 0)));
  },

  submitCustomIntention() {
    const errEl    = document.getElementById('custom-intent-error');
    errEl.textContent = '';
    const text     = (document.getElementById('custom-intent-text').value     || '').trim();
    const desc     = (document.getElementById('custom-intent-desc').value     || '').trim();
    const evidence = (document.getElementById('custom-intent-evidence').value || '').trim();
    if (!text) { errEl.textContent = 'أدخل نص النية'; return; }

    let entry;
    if (this._addIsNewCat) {
      const catName = (document.getElementById('custom-cat-name').value || '').trim();
      const catIcon = (document.getElementById('custom-cat-icon').value || '').trim() || '✨';
      if (!catName) { errEl.textContent = 'أدخل اسم الفئة الجديدة'; return; }
      const catId = 'CUST_CAT_' + Date.now();
      entry = { text, desc, evidence, categoryId: catId, categoryTitle: catName, categoryIcon: catIcon, isCustomCategory: true };
    } else {
      const sel = document.getElementById('custom-cat-select');
      const catId = sel.value;
      const cat   = this.db.find(c => c.id === catId);
      const cust  = (this.state.customIntentions || []).find(n => n.isCustomCategory && n.categoryId === catId);
      entry = {
        text, desc, evidence,
        categoryId: catId,
        categoryTitle: cat ? cat.title : (cust ? cust.categoryTitle : ''),
        categoryIcon: cat ? cat.icon : (cust ? cust.categoryIcon : '✨'),
        isCustomCategory: false
      };
    }

    if (!this.state.customIntentions) this.state.customIntentions = [];
    this.state.customIntentions.push(entry);
    this.saveState();
    this.closeOverlay();
    this.renderLibrary();
    this.showToast('✓ تمت إضافة النية');
  },

  getCustomContext() {
    const list = (this.state.customIntentions || []).map((n, i) => ({
      id: 'custom_' + i,
      text: n.text || 'نية',
      desc: n.desc || '',
      evidence: n.evidence || '',
      weight: 1
    }));
    return { id: 'INT_CUSTOM', title: 'نواياي', icon: '✨', description: 'نواياك الشخصية', intentions: list };
  },

  getLibraryList() {
    // Build a merged list: KANZ_DB + custom intentions injected into their categories
    const custom = this.state.customIntentions || [];
    const list = this.db.map(cat => {
      const extras = custom.filter(n => n.categoryId === cat.id).map((n, i) => ({
        id: 'custom_' + n.categoryId + '_' + i,
        text: n.text, desc: n.desc || '', evidence: n.evidence || '',
        weight: 1, isCustom: true, customIdx: custom.indexOf(n)
      }));
      if (!extras.length) return cat;
      return { ...cat, intentions: [...(cat.intentions || []), ...extras] };
    });
    // Add custom categories (isCustomCategory = true) + intentions added to them
    const customCats = {};
    custom.filter(n => n.isCustomCategory).forEach((n) => {
      const key = n.categoryId;
      const idx = custom.indexOf(n);
      if (!customCats[key]) customCats[key] = { id: key, title: n.categoryTitle, icon: n.categoryIcon || '✨', description: '', isCustomCategory: true, intentions: [] };
      customCats[key].intentions.push({ id: 'custom_cat_' + key + '_' + idx, text: n.text, desc: n.desc || '', evidence: n.evidence || '', weight: 1, isCustom: true, customIdx: idx });
    });
    custom.filter(n => !n.isCustomCategory && n.categoryId && n.categoryId.startsWith('CUST_CAT_')).forEach((n) => {
      const key = n.categoryId;
      const idx = custom.indexOf(n);
      if (customCats[key]) {
        customCats[key].intentions.push({ id: 'custom_cat_' + key + '_' + idx, text: n.text, desc: n.desc || '', evidence: n.evidence || '', weight: 1, isCustom: true, customIdx: idx });
      }
    });
    const catList = Object.values(customCats);
    return [...catList, ...list];
  },

  openContext(id) {
    const fullList = this.getLibraryList();
    this.state.context = fullList.find(x => x.id === id) || this.db.find(x => x.id === id);
    this.state.selectedIntentions.clear();
    this.navigate('home');
  },

  renderHome() {
    const container = document.getElementById('main-content');
    const i = this.state.context;
    if (!i) {
      const msg = this.db.length === 0
        ? '<div class="loading-placeholder"><p class="loading-text">تعذر تحميل البيانات.</p><p class="text-dim">تحقق من الاتصال أو أن الموقع يعمل من سيرفر.</p><button type="button" class="btn-secondary" onclick="App.retryLoad()">إعادة المحاولة</button></div>'
        : '<p class="library-empty">اختر سياقاً من المكتبة.</p>';
      container.innerHTML = msg;
      return;
    }
    const intentions = Array.isArray(i.intentions) ? i.intentions : [];
    const hasSelection = this.state.selectedIntentions.size > 0;
    const dailyMsg = this.getDailyMessage();
    const companionMsg = Math.random() < 0.35 ? this.getCompanionMessage() : '';

    container.innerHTML = `
      <div class="daily-message animate-up">${this.escapeHtml(dailyMsg)}</div>
      ${companionMsg ? `<div class="companion-message animate-up">💬 ${this.escapeHtml(companionMsg)}</div>` : ''}
      <div class="context-card animate-up">
        <div class="card-icon">${i.icon || '📌'}</div>
        <h2>${i.title}</h2>
        <p>${i.description || ''}</p>
      </div>
      <div class="home-actions">
        <button type="button" class="btn-secondary" onclick="App.suggestRandom()">🎲 اقترح علي نية</button>
      </div>

      <div class="intentions-list">
        ${intentions.map(sub => `
          <div class="intention-item ${this.state.selectedIntentions.has(sub.id) ? 'selected' : ''}"
               onclick="App.toggleSelection('${sub.id}')">
            <div class="check-circle"></div>
            <div class="text">
              <p class="intention-desc">${this.escapeHtml(sub.desc || sub.text || '')}</p>
            </div>
            ${sub.isCustom
              ? `<button type="button" class="intention-del-btn" onclick="event.stopPropagation(); App.deleteCustomIntention(${sub.customIdx})" title="حذف هذه النية">🗑</button>`
              : `<button type="button" class="intention-info-btn" onclick="event.stopPropagation(); App.showIntentionDetail('${sub.id}')" title="عرض الدليل ونسخ الدعاء" aria-label="تفاصيل النية"><span class="info-icon">i</span></button>`
            }
          </div>
        `).join('')}
        ${i.isCustomCategory || i.id === 'INT_CUSTOM' ? `<button type="button" class="btn-outline-action" style="margin-top:12px" onclick="App.showAddCustomIntention('${i.id}')">➕ أضف نية لهذه الفئة</button>` : `<button type="button" class="btn-add-to-cat" onclick="App.showAddCustomIntention('${i.id}')">➕ أضف نية خاصة بك لهذه الفئة</button>`}
      </div>

      <div class="fab-container">
        <button class="btn-commit ${hasSelection ? 'active' : ''}"
                onclick="App.commitIntentions()"
                ${!hasSelection ? 'disabled' : ''}>
          <span>عقد النية</span>
          <small>(${this.state.selectedIntentions.size} نوايا)</small>
        </button>
      </div>
    `;
  },

  renderStats() {
    const container = document.getElementById('main-content');
    const filtered = this.getFilteredHistory().slice().reverse();
    const mostId = this.getMostUsedContextId();
    const mostItem = mostId === 'INT_CUSTOM' ? { title: 'نواياي' } : (mostId ? this.db.find(x => x.id === mostId) : null);
    const streak = this.getStreak();
    const todayCount = this.getTodayCount();
    const lastTitle = this.getLastIntention();
    const filter = this.state.historyFilter;
    const weekData = this.getLast7DaysCounts();
    container.innerHTML = `
      <div class="dashboard-summary animate-up">
        <div class="dashboard-row">
          <span class="dashboard-label">اليوم</span>
          <span class="dashboard-value">${todayCount} نوايا</span>
        </div>
        ${lastTitle ? `<div class="dashboard-row"><span class="dashboard-label">آخر نية</span><span class="dashboard-value">${this.escapeHtml(lastTitle)}</span></div>` : ''}
        ${streak > 0 ? `<div class="dashboard-row"><span class="dashboard-label">سلسلة</span><span class="dashboard-value">🔥 ${streak} يوم</span></div>` : ''}
      </div>
      <div class="stats-card animate-up">
        <h2>رصيد كنزك</h2>
        <div class="big-score">${this.state.score}</div>
        <p class="stats-sub">إجمالي النوايا المسجّلة</p>
        ${mostItem ? `<p class="most-used">الأكثر: ${this.escapeHtml(mostItem.title)}</p>` : ''}
      </div>
      <div class="chart-7days animate-up">
        <h3>آخر 7 أيام</h3>
        <div class="chart-bars">
          ${weekData.map(d => `<div class="chart-bar-wrap" title="${d.label}: ${d.count}"><div class="chart-bar" style="height:${(d.count / d.max) * 100}%"></div><span class="chart-label">${d.label}</span></div>`).join('')}
        </div>
      </div>
      <div class="history-filters">
        <button type="button" class="filter-btn ${filter === 'all' ? 'active' : ''}" onclick="App.state.historyFilter='all'; App.saveState(); App.renderStats();">الكل</button>
        <button type="button" class="filter-btn ${filter === 'day' ? 'active' : ''}" onclick="App.state.historyFilter='day'; App.saveState(); App.renderStats();">اليوم</button>
        <button type="button" class="filter-btn ${filter === 'week' ? 'active' : ''}" onclick="App.state.historyFilter='week'; App.saveState(); App.renderStats();">الأسبوع</button>
        <button type="button" class="filter-btn ${filter === 'month' ? 'active' : ''}" onclick="App.state.historyFilter='month'; App.saveState(); App.renderStats();">الشهر</button>
      </div>
      <div class="history-list">
        <h3>السجل</h3>
        ${filtered.length ? filtered.map(h => {
          const item = this.db.find(x => x.id === h.intentionId);
          const title = item ? item.title : (h.intentionId === 'INT_CUSTOM' ? 'نواياي' : 'نية عامة');
          return `
            <div class="history-item">
              <span>${this.escapeHtml(title)}</span>
              <span class="score">+${h.score}</span>
            </div>
          `;
        }).join('') : '<p class="library-empty">لا توجد سجلات في هذه الفترة</p>'}
      </div>
    `;
  },

  showCelebration(score) {
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `
      <div class="celebration">
        <div class="score-pop">+${score}</div>
        <p>تقبل الله منك</p>
      </div>
    `;
    overlay.classList.add('active');
    if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
    setTimeout(() => { overlay.classList.remove('active'); }, 2000);
  },

  showIntentionDetail(subId) {
    const sub = this.state.context && this.state.context.intentions.find(s => s.id === subId);
    if (!sub) return;
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `
      <div class="intention-detail-card" onclick="event.stopPropagation()">
        <h3>${this.escapeHtml(sub.text)}</h3>
        <p class="detail-desc">${this.escapeHtml(sub.desc || '')}</p>
        ${sub.evidence ? `<p class="detail-evidence">${this.escapeHtml(sub.evidence)}</p>` : ''}
        <div class="detail-actions">
          <button type="button" class="btn-copy-dua" data-subid="${this.escapeHtml(sub.id)}" onclick="App.copyDua(this.getAttribute('data-subid'))">نسخ الدعاء</button>
          <button type="button" class="btn-close-detail" onclick="App.shareIntentionById('${this.escapeHtml(sub.id)}')">مشاركة</button>
          <button type="button" class="btn-close-detail" onclick="App.closeOverlay()">إغلاق</button>
        </div>
      </div>
    `;
    overlay.onclick = () => this.closeOverlay();
    overlay.classList.add('active');
  },

  closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    overlay.innerHTML = '';
    overlay.onclick = null;
  },

  copyDua(subId) {
    const sub = this.state.context && this.state.context.intentions.find(s => s.id === subId);
    if (!sub || !sub.desc) return;
    navigator.clipboard.writeText(sub.desc).then(() => {
      this.showToast('تم نسخ الدعاء');
    }).catch(() => this.showToast('تعذر النسخ'));
  },

  showToast(message) {
    let el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => el.classList.remove('show'), 2000);
  },

  // --- Router ---
  navigate(view) {
    this.state.view = view;
    this.render();
  },

  updateNav() {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const activeNav = document.getElementById('nav-' + this.state.view);
    if (activeNav) activeNav.classList.add('active');
  },

  setupPullToRefresh() {
    const main = document.getElementById('main-content');
    if (!main) return;
    let startY = 0;
    const threshold = 70;
    main.addEventListener('touchstart', (e) => { startY = e.touches[0].clientY; }, { passive: true });
    main.addEventListener('touchend', async (e) => {
      if (!e.changedTouches[0]) return;
      const y = e.changedTouches[0].clientY;
      if (y - startY > threshold && main.scrollTop <= 2) {
        this.showToast('جاري التحديث...');
        await this.loadDB();
        this.detectContext();
        this.render();
        this.showToast('تم التحديث');
      }
    }, { passive: true });
  },

  applyTheme() {
    const isLight = this.state.theme === 'light';
    document.documentElement.classList.toggle('theme-light', isLight);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isLight ? '#f5f5f5' : '#121212';
    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = isLight ? '☀️' : '🌙';
  },

  toggleTheme() {
    this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme();
    this.saveState();
  },

  applyFontSize() {
    const el = document.documentElement;
    el.classList.remove('font-large', 'font-xlarge');
    if (this.state.fontSize === 'large') el.classList.add('font-large');
    else if (this.state.fontSize === 'xlarge') el.classList.add('font-xlarge');
    const btn = document.getElementById('btn-font-size');
    if (btn) {
      const labels = { normal: 'ع', large: 'ك', xlarge: 'كج' };
      btn.textContent = labels[this.state.fontSize] || 'Aa';
      btn.title = this.state.fontSize === 'normal' ? 'حجم الخط: عادي' : this.state.fontSize === 'large' ? 'حجم الخط: كبير' : 'حجم الخط: كبير جداً';
    }
  },

  cycleFontSize() {
    const next = this.state.fontSize === 'normal' ? 'large' : this.state.fontSize === 'large' ? 'xlarge' : 'normal';
    this.setFontSize(next);
  },

  setFontSize(size) {
    if (!['normal', 'large', 'xlarge'].includes(size)) return;
    this.state.fontSize = size;
    this.applyFontSize();
    this.saveState();
  },

  shareApp() {
    const title = 'كنز النيات';
    const text = 'تطبيق النيات والحسنات — عُدّ نواياك وارفع رصيدك.';
    const url = window.location.href.split('?')[0].split('#')[0];
    if (navigator.share) {
      navigator.share({ title, text, url }).then(() => this.showToast('تمت المشاركة')).catch(() => this.fallbackCopyShare(url));
    } else {
      this.fallbackCopyShare(url);
    }
  },

  fallbackCopyShare(url) {
    navigator.clipboard.writeText(url).then(() => this.showToast('تم نسخ الرابط')).catch(() => this.showToast('المشاركة غير متاحة'));
  },

  maybeShowOnboarding() {
    if (this.state.onboardingSeen) return;
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `
      <div class="onboarding-card" onclick="event.stopPropagation()">
        <h2>كنز النيات</h2>
        <p>اختر سياقك (نوم، وضوء، أكل...) ثم حدد النوايا التي تنويها واضغط «عقد النية».</p>
        <p>المكتبة تحتوي كل النوايا، وكنزك يعرض رصيدك وسجلك.</p>
        <button type="button" class="btn-copy-dua" onclick="App.closeOnboarding()">ابدأ</button>
      </div>
    `;
    overlay.onclick = () => this.closeOnboarding();
    overlay.classList.add('active');
  },

  closeOnboarding() {
    this.state.onboardingSeen = true;
    localStorage.setItem('kanz_onboarding_seen', '1');
    this.saveState();
    this.closeOverlay();
  },

  maybeShowFlashMoment() {
    if (this.state.flashMomentShownThisSession || !this.state.context || !this.db.length) return;
    const ctx = this.state.context;
    if (!ctx.intentions || ctx.intentions.length === 0) return;
    setTimeout(() => {
      if (this.state.flashMomentShownThisSession) return;
      this.showFlashMomentCard();
    }, 600);
  },

  showFlashMomentCard() {
    const ctx = this.state.context;
    if (!ctx) return;
    this.state.selectedIntentions.clear();
    const quick = (ctx.intentions || []).slice(0, 3);
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `
      <div class="flash-moment-card" onclick="event.stopPropagation()">
        <h2 class="flash-title">لحظة وميض</h2>
        <p class="flash-sub">جدد نيتك — ${this.escapeHtml(ctx.title)}</p>
        <div class="flash-intentions">
          ${quick.map(sub => {
            const t = (sub.desc || sub.text || '');
            const short = t.length > 50 ? t.slice(0, 50) + '...' : t;
            return `<div class="flash-intention-item ${this.state.selectedIntentions.has(sub.id) ? 'selected' : ''}" onclick="App.toggleFlashSelection('${sub.id}'); App.updateFlashCard();">
              <span>${this.escapeHtml(short)}</span>
            </div>`;
          }).join('')}
        </div>
        <div class="flash-actions">
          <button type="button" class="btn-copy-dua" onclick="App.commitFromFlash();">انطلق باسم الله</button>
          <button type="button" class="btn-close-detail" onclick="App.dismissFlash();">تخطي</button>
        </div>
      </div>
    `;
    overlay.onclick = () => this.dismissFlash();
    overlay.classList.add('active');
  },

  toggleFlashSelection(id) {
    if (this.state.selectedIntentions.has(id)) this.state.selectedIntentions.delete(id);
    else this.state.selectedIntentions.add(id);
  },

  updateFlashCard() {
    const overlay = document.getElementById('overlay');
    const ctx = this.state.context;
    if (!overlay.classList.contains('active') || !ctx) return;
    const quick = (ctx.intentions || []).slice(0, 3);
    const container = overlay.querySelector('.flash-intentions');
    if (container) {
        container.innerHTML = quick.map(sub => {
          const t = (sub.desc || sub.text || '');
          const short = t.length > 50 ? t.slice(0, 50) + '...' : t;
          return `<div class="flash-intention-item ${this.state.selectedIntentions.has(sub.id) ? 'selected' : ''}" onclick="App.toggleFlashSelection('${sub.id}'); App.updateFlashCard();">
            <span>${this.escapeHtml(short)}</span>
          </div>`;
        }).join('');
    }
  },

  commitFromFlash() {
    this.state.flashMomentShownThisSession = true;
    this.commitIntentions();
  },

  dismissFlash() {
    this.state.flashMomentShownThisSession = true;
    this.closeOverlay();
  },

  // Notification messages keyed by hour-range
  REMINDER_SLOTS: [
    { hour: 5,  icon: '☀️', body: 'أدركت الفجر — نوّ بيقظتك ووضوئك وصلاتك وابدأ يومك بنية.' },
    { hour: 7,  icon: '💧', body: 'وقت الوضوء والصلاة — جدّد نيتك قبل أن تبدأ عملك.' },
    { hour: 12, icon: '🍽️', body: 'حان وقت الطعام — انوِ به القوة على طاعة الله.' },
    { hour: 15, icon: '📿', body: 'بين العصرين — لحظة مباركة لتجديد النية وذكر الله.' },
    { hour: 18, icon: '🌙', body: 'أقبل الليل — انوِ بنومك الراحة للعودة إلى الطاعة.' },
  ],

  maybeRequestNotificationPermission() {
    if (!('Notification' in window)) return;
    if (Notification.permission !== 'default') return;
    setTimeout(() => {
      if (this.state.history.length >= 2) {
        Notification.requestPermission().then(perm => {
          if (perm === 'granted') {
            localStorage.setItem('kanz_notif_enabled', '1');
            this.startReminderLoop();
          }
        }).catch(() => {});
      }
    }, 3000);
  },

  startReminderLoop() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    if (localStorage.getItem('kanz_notif_enabled') === '0') return;
    if (this._reminderLoopStarted) return;
    this._reminderLoopStarted = true;

    const check = () => {
      if (localStorage.getItem('kanz_notif_enabled') === '0') return;
      const hour = new Date().getHours();
      const day  = new Date().toDateString();
      const slot = this.REMINDER_SLOTS.find(s => s.hour === hour);
      if (!slot) return;
      try {
        const seen = JSON.parse(localStorage.getItem('kanz_reminder_shown') || '{}');
        const key = day + '_' + hour;
        if (seen[key]) return;
        seen[key] = true;
        localStorage.setItem('kanz_reminder_shown', JSON.stringify(seen));
        const show = (reg) => reg
          ? reg.showNotification('كنز النيات ' + slot.icon, { body: slot.body, icon: 'logo.png', badge: 'logo.png', dir: 'rtl', lang: 'ar' })
          : new Notification('كنز النيات ' + slot.icon, { body: slot.body, icon: 'logo.png', dir: 'rtl', lang: 'ar' });
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then(show).catch(() => new Notification('كنز النيات', { body: slot.body, icon: 'logo.png' }));
        } else { show(null); }
      } catch(e) {}
    };

    setInterval(check, 60000);
    setTimeout(check, 3000);
  },

  async toggleNotifications() {
    if (!('Notification' in window)) {
      this.showToast('المتصفح لا يدعم الإشعارات');
      return;
    }
    const enabled = localStorage.getItem('kanz_notif_enabled') !== '0';
    if (enabled) {
      localStorage.setItem('kanz_notif_enabled', '0');
      this.showToast('تم إيقاف الإشعارات');
      this.showUserOverlay();
      return;
    }
    if (Notification.permission === 'denied') {
      this.showToast('الإشعارات محظورة — افتح إعدادات المتصفح لتفعيلها');
      return;
    }
    const perm = await Notification.requestPermission().catch(() => 'denied');
    if (perm === 'granted') {
      localStorage.setItem('kanz_notif_enabled', '1');
      this._reminderLoopStarted = false;
      this.startReminderLoop();
      this.showToast('✓ تم تفعيل الإشعارات');
    } else {
      this.showToast('لم يتم السماح بالإشعارات');
    }
    this.showUserOverlay();
  },

  getDailyMessage() {
    const messages = [
      '«إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ»',
      '«إِنَّ اللَّهَ لا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ»',
      '«تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ»',
      '«رَحِمَ اللَّهُ رَجُلًا سَمْحًا إِذَا بَاعَ وَإِذَا اشْتَرَى وَإِذَا اقْتَضَى»'
    ];
    const day = Math.floor(Date.now() / 86400000) % messages.length;
    return messages[day];
  },

  getFilteredHistory() {
    const h = this.state.history;
    const now = Date.now();
    const day = 86400000;
    const filter = this.state.historyFilter;
    if (filter === 'day') return h.filter(x => now - x.date < day);
    if (filter === 'week') return h.filter(x => now - x.date < 7 * day);
    if (filter === 'month') return h.filter(x => now - x.date < 30 * day);
    return h;
  },

  getMostUsedContextId() {
    const counts = {};
    this.state.history.forEach(h => { counts[h.intentionId] = (counts[h.intentionId] || 0) + 1; });
    let max = 0, id = '';
    Object.keys(counts).forEach(k => { if (counts[k] > max) { max = counts[k]; id = k; } });
    return id;
  },

  getStreak() {
    const day = 86400000;
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const today = Math.floor(todayStart.getTime() / day);
    const dates = [...new Set(this.state.history.map(h => Math.floor(h.date / day)))].sort((a, b) => b - a);
    let streak = 0, expect = today;
    for (const d of dates) {
      if (d === expect) { streak++; expect--; } else if (d < expect) break;
    }
    return streak;
  },

  getTodayCount() {
    const day = 86400000;
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const today = todayStart.getTime();
    return this.state.history.filter(h => h.date >= today).reduce((s, h) => s + h.score, 0);
  },

  getLastIntention() {
    const h = this.state.history[this.state.history.length - 1];
    if (!h) return null;
    const item = this.db.find(x => x.id === h.intentionId);
    if (item) return item.title;
    if (h.intentionId === 'INT_CUSTOM') return 'نواياي';
    return null;
  },

  getLast7DaysCounts() {
    const day = 86400000;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const now = today.getTime();
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const start = now - i * day;
      const end = start + day;
      const count = this.state.history.filter(h => h.date >= start && h.date < end).reduce((s, h) => s + h.score, 0);
      const d = new Date(start);
      out.push({ label: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'][d.getDay()], count, max: 1 });
      if (count > (out[out.length - 1].max || 0)) out[out.length - 1].max = count;
    }
    const maxCount = Math.max(1, ...out.map(x => x.count));
    out.forEach(x => { x.max = maxCount; });
    return out;
  },

  getCompanionMessage() {
    const msgs = [
      'جددت نيتك قبل شغل اليوم؟',
      'وقت وميض — تذكر أن تختار نية.',
      'ثلاث ساعات من غير استحضار نية؟ تريد تذكيرًا؟',
      'كل نية صادقة تثقل ميزانك.',
      'استحضر نية واحدة الآن واربح أجرها.'
    ];
    const hour = new Date().getHours();
    if (hour >= 8 && hour <= 10) return msgs[0];
    if (hour >= 11 && hour <= 13) return msgs[1];
    return msgs[Math.floor(Math.random() * msgs.length)];
  },

  getSortedLibraryList(list) {
    const arr = [...list];
    if (this.state.librarySort === 'alpha') return arr.sort((a, b) => (a.title || '').localeCompare(b.title || '', 'ar'));
    if (this.state.librarySort === 'used') {
      const counts = {};
      this.state.history.forEach(h => { counts[h.intentionId] = (counts[h.intentionId] || 0) + 1; });
      return arr.sort((a, b) => (counts[b.id] || 0) - (counts[a.id] || 0));
    }
    return arr;
  },

  toggleFavorite(id) {
    const i = this.state.favorites.indexOf(id);
    if (i >= 0) this.state.favorites.splice(i, 1);
    else this.state.favorites.push(id);
    this.saveState();
    if (this.state.view === 'library') this.renderLibrary();
    else if (this.state.view === 'home') this.renderHome();
  },

  isFavorite(id) {
    return this.state.favorites.indexOf(id) >= 0;
  },

  suggestRandom() {
    if (!this.db.length) return;
    const idx = Math.floor(Math.random() * this.db.length);
    this.state.context = this.db[idx];
    this.state.selectedIntentions.clear();
    this.navigate('home');
    this.showToast(this.state.context.title);
  },

  exportHistory() {
    const rows = [['التاريخ', 'السياق', 'النقاط']];
    this.getFilteredHistory().slice().reverse().forEach(h => {
      const item = this.db.find(x => x.id === h.intentionId);
      rows.push([new Date(h.date).toLocaleDateString('ar-EG'), item ? item.title : (h.intentionId === 'INT_CUSTOM' ? 'نواياي' : 'نية عامة'), String(h.score)]);
    });
    const csv = rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'kanz-history-' + new Date().toISOString().slice(0, 10) + '.csv';
    a.click();
    URL.revokeObjectURL(a.href);
    this.showToast('تم تصدير السجل');
  },

  shareIntentionById(subId) {
    const sub = this.state.context && this.state.context.intentions.find(s => s.id === subId);
    if (!sub) return;
    const text = (sub.text || '') + '\n\n' + (sub.desc || '');
    if (navigator.share) {
      navigator.share({ title: sub.text, text }).then(() => this.showToast('تمت المشاركة')).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => this.showToast('تم نسخ النية')).catch(() => {});
    }
  },

  playCommitSound() {
    if (!this.state.soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g);
      g.connect(ctx.destination);
      o.frequency.value = 523;
      g.gain.setValueAtTime(0.15, 0);
      g.gain.exponentialRampToValueAtTime(0.01, 0.2);
      o.start(0);
      o.stop(0.2);
    } catch (e) {}
  },

  exportBackup() {
    const data = { score: this.state.score, history: this.state.history, favorites: this.state.favorites, customIntentions: this.state.customIntentions, exportedAt: Date.now() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'kanz-backup.json';
    a.click();
    URL.revokeObjectURL(a.href);
    this.showToast('تم تصدير النسخة الاحتياطية');
  },

  importBackup(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (typeof data.score === 'number') this.state.score = data.score;
        if (Array.isArray(data.history)) this.state.history = data.history;
        if (Array.isArray(data.favorites)) this.state.favorites = data.favorites;
        if (Array.isArray(data.customIntentions)) this.state.customIntentions = data.customIntentions;
        this.saveState();
        this.render();
        this.showToast('تم استعادة النسخة الاحتياطية');
      } catch (e) {
        this.showToast('ملف غير صالح');
      }
    };
    reader.readAsText(file);
  },

  // --- Auth ---
  loadAuth() {
    const token = localStorage.getItem('kanz_token');
    const email = localStorage.getItem('kanz_email');
    const name  = localStorage.getItem('kanz_name') || '';
    if (token && email) {
      this.auth = { token, email, name };
      this.updateAuthUI();
    }
  },

  saveAuth(token, email, name) {
    this.auth = { token, email, name: name || '' };
    localStorage.setItem('kanz_token', token);
    localStorage.setItem('kanz_email', email);
    localStorage.setItem('kanz_name', name || '');
    this.updateAuthUI();
  },

  clearAuth() {
    this.auth = { token: null, email: null, name: null };
    localStorage.removeItem('kanz_token');
    localStorage.removeItem('kanz_email');
    localStorage.removeItem('kanz_name');
    this.updateAuthUI();
  },

  updateAuthUI() {
    const btn = document.getElementById('btn-user');
    const greeting = document.getElementById('user-greeting');
    if (!btn) return;
    if (this.auth.token && this.auth.email) {
      const displayName = this.auth.name || this.auth.email.split('@')[0];
      const firstName = displayName.split(' ')[0];
      btn.textContent = displayName[0].toUpperCase();
      btn.title = displayName;
      btn.classList.add('logged-in');
      if (greeting) {
        greeting.textContent = 'أهلاً، ' + firstName;
        greeting.classList.add('show');
      }
    } else {
      btn.textContent = '👤';
      btn.title = 'تسجيل الدخول';
      btn.classList.remove('logged-in');
      if (greeting) {
        greeting.classList.remove('show');
        greeting.textContent = '';
      }
    }
  },

  showAuthOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `
      <div class="auth-card" onclick="event.stopPropagation()">
        <div class="auth-card-header">
          <div class="auth-card-icon">🔐</div>
          <p class="auth-card-title">كنز النيات</p>
        </div>
        <div class="auth-card-body">
          <div class="auth-tabs">
            <button type="button" class="auth-tab active" id="tab-login" onclick="App.switchAuthTab('login')">دخول</button>
            <button type="button" class="auth-tab" id="tab-register" onclick="App.switchAuthTab('register')">حساب جديد</button>
          </div>
          <div id="auth-form-login">
            <input type="email" id="auth-email-login" class="auth-input" placeholder="البريد الإلكتروني" dir="ltr" autocomplete="email">
            <input type="password" id="auth-pass-login" class="auth-input" placeholder="كلمة المرور" dir="ltr" autocomplete="current-password">
            <p id="auth-error-login" class="auth-error"></p>
            <button type="button" class="btn-auth-submit" onclick="App.doLogin()">دخول ←</button>
            <button type="button" class="btn-forgot-pass" onclick="App.showForgotPassword()">نسيت كلمة المرور؟</button>
          </div>
          <div id="auth-form-forgot" style="display:none">
            <p style="color:var(--text-secondary,#a0a0a0);font-size:0.85rem;margin-bottom:12px;line-height:1.6">أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين</p>
            <input type="email" id="auth-email-forgot" class="auth-input" placeholder="البريد الإلكتروني" dir="ltr" autocomplete="email">
            <p id="auth-error-forgot" class="auth-error"></p>
            <button type="button" class="btn-auth-submit" onclick="App.doForgotPassword()">إرسال رابط الاسترداد</button>
            <button type="button" class="btn-forgot-pass" onclick="App.switchAuthTab('login')">← العودة لتسجيل الدخول</button>
          </div>
          <div id="auth-form-register" style="display:none">
            <input type="text" id="auth-name-register" class="auth-input" placeholder="الاسم" dir="rtl" autocomplete="name">
            <input type="email" id="auth-email-register" class="auth-input" placeholder="البريد الإلكتروني" dir="ltr" autocomplete="email">
            <input type="password" id="auth-pass-register" class="auth-input" placeholder="كلمة المرور (٦ أحرف على الأقل)" dir="ltr" autocomplete="new-password">
            <p id="auth-error-register" class="auth-error"></p>
            <button type="button" class="btn-auth-submit" onclick="App.doRegister()">إنشاء حساب ←</button>
          </div>
          <hr class="auth-divider">
          <button type="button" class="btn-auth-secondary" onclick="App.closeOverlay()">إغلاق</button>
        </div>
      </div>
    `;
    overlay.onclick = () => this.closeOverlay();
    overlay.classList.add('active');
  },

  showUserOverlay() {
    if (!this.auth.token) { this.showAuthOverlay(); return; }
    const displayName = this.auth.name || this.auth.email.split('@')[0];
    const letter = displayName[0].toUpperCase();
    const overlay = document.getElementById('overlay');
    overlay.innerHTML = `
      <div class="auth-card" onclick="event.stopPropagation()">
        <div class="auth-card-header">
          <div class="auth-user-avatar">${this.escapeHtml(letter)}</div>
          <p class="auth-card-title" style="color:var(--text)">${this.escapeHtml(displayName)}</p>
        </div>
        <div class="auth-card-body">
          <p class="auth-user-email">${this.escapeHtml(this.auth.email)}</p>
          <span class="auth-user-badge">✓ مزامنة مفعّلة</span>

          <button type="button" class="btn-outline-action" id="btn-edit-name" onclick="App.toggleEditName()">✏️ تعديل الاسم</button>
          <input type="text" id="edit-name-input" class="auth-input" placeholder="الاسم الجديد"
            dir="rtl" value="${this.escapeHtml(this.auth.name || '')}" style="display:none">
          <p id="edit-name-error" class="auth-error" style="margin:0"></p>
          <button type="button" class="btn-auth-submit" id="btn-save-name" onclick="App.doUpdateName()" style="display:none">✓ حفظ الاسم</button>

          <button type="button" class="btn-outline-action" id="btn-change-pass" onclick="App.toggleChangePassword()">🔑 تغيير كلمة المرور</button>
          <div id="change-pass-fields" style="display:none; display:flex; flex-direction:column; gap:8px; display:none">
            <input type="password" id="cp-current" class="auth-input" placeholder="كلمة المرور الحالية" dir="ltr">
            <input type="password" id="cp-new"     class="auth-input" placeholder="كلمة المرور الجديدة (٦+)" dir="ltr">
            <input type="password" id="cp-confirm" class="auth-input" placeholder="تأكيد كلمة المرور الجديدة" dir="ltr">
            <p id="cp-error" class="auth-error" style="margin:0"></p>
            <button type="button" class="btn-auth-submit" onclick="App.doChangePassword()">✓ حفظ كلمة المرور</button>
          </div>

          <button type="button" class="btn-auth-submit" onclick="App.doSync()">🔄 مزامنة الآن</button>

          <button type="button" class="btn-outline-action" onclick="App.toggleNotifications()">${
            localStorage.getItem('kanz_notif_enabled') === '0' || !('Notification' in window) || Notification.permission !== 'granted'
              ? '🔔 تفعيل الإشعارات'
              : '🔕 إيقاف الإشعارات'
          }</button>

          <hr class="auth-divider">
          <button type="button" class="btn-auth-danger" onclick="App.doLogout()">تسجيل الخروج</button>
          <button type="button" class="btn-auth-secondary" onclick="App.closeOverlay()">إغلاق</button>
        </div>
      </div>
    `;
    overlay.onclick = () => this.closeOverlay();
    overlay.classList.add('active');
  },

  toggleEditName() {
    const input = document.getElementById('edit-name-input');
    const btnEdit = document.getElementById('btn-edit-name');
    const btnSave = document.getElementById('btn-save-name');
    const isOpen = input.style.display !== 'none';
    input.style.display = isOpen ? 'none' : '';
    btnSave.style.display = isOpen ? 'none' : '';
    btnEdit.textContent = isOpen ? '✏️ تعديل الاسم' : '✕ إلغاء';
    if (!isOpen) setTimeout(() => input.focus(), 50);
  },

  async doUpdateName() {
    const input = document.getElementById('edit-name-input');
    const errEl = document.getElementById('edit-name-error');
    const name = input.value.trim();
    errEl.textContent = '';
    if (!name) { errEl.textContent = 'أدخل الاسم'; return; }
    try {
      const res = await fetch(this.API_BASE + '/update_name.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: this.auth.token, name })
      });
      const data = await res.json();
      if (data.success) {
        this.saveAuth(this.auth.token, this.auth.email, data.name);
        this.closeOverlay();
        this.showToast('تم تحديث الاسم ✓');
      } else {
        errEl.textContent = data.error || 'حدث خطأ';
      }
    } catch(e) {
      errEl.textContent = 'تعذر الاتصال بالسيرفر';
    }
  },

  toggleChangePassword() {
    const fields = document.getElementById('change-pass-fields');
    const btn    = document.getElementById('btn-change-pass');
    const isOpen = fields.style.display !== 'none';
    fields.style.display = isOpen ? 'none' : 'flex';
    btn.textContent = isOpen ? '🔑 تغيير كلمة المرور' : '✕ إلغاء';
    if (!isOpen) setTimeout(() => document.getElementById('cp-current').focus(), 50);
  },

  async doChangePassword() {
    const current  = document.getElementById('cp-current').value;
    const newPass  = document.getElementById('cp-new').value;
    const confirm  = document.getElementById('cp-confirm').value;
    const errEl    = document.getElementById('cp-error');
    errEl.textContent = '';
    if (!current)            { errEl.textContent = 'أدخل كلمة المرور الحالية'; return; }
    if (newPass.length < 6)  { errEl.textContent = 'كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل'; return; }
    if (newPass !== confirm)  { errEl.textContent = 'كلمتا المرور غير متطابقتين'; return; }
    const btn = document.querySelector('#change-pass-fields .btn-auth-submit');
    btn.textContent = 'جاري الحفظ...'; btn.disabled = true;
    try {
      const res  = await fetch(this.API_BASE + '/change_password.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: this.auth.token, current_password: current, new_password: newPass })
      });
      const data = await res.json();
      if (data.success) {
        this.closeOverlay();
        this.showToast('✓ تم تغيير كلمة المرور');
      } else {
        errEl.textContent = data.error || 'حدث خطأ';
        btn.textContent = '✓ حفظ كلمة المرور'; btn.disabled = false;
      }
    } catch(e) {
      errEl.textContent = 'تعذر الاتصال بالسيرفر';
      btn.textContent = '✓ حفظ كلمة المرور'; btn.disabled = false;
    }
  },

  switchAuthTab(tab) {
    document.getElementById('auth-form-login').style.display    = tab === 'login'    ? '' : 'none';
    document.getElementById('auth-form-register').style.display = tab === 'register' ? '' : 'none';
    document.getElementById('auth-form-forgot').style.display   = tab === 'forgot'   ? '' : 'none';
    document.getElementById('tab-login').classList.toggle('active',    tab === 'login');
    document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  },

  showForgotPassword() {
    this.switchAuthTab('forgot');
    const emailLogin = document.getElementById('auth-email-login');
    const emailForgot = document.getElementById('auth-email-forgot');
    if (emailLogin && emailForgot && emailLogin.value) emailForgot.value = emailLogin.value;
  },

  async doForgotPassword() {
    const email = document.getElementById('auth-email-forgot').value.trim();
    const errEl = document.getElementById('auth-error-forgot');
    errEl.textContent = '';
    if (!email) { errEl.textContent = 'أدخل البريد الإلكتروني'; return; }
    const btn = document.querySelector('#auth-form-forgot .btn-auth-submit');
    btn.textContent = 'جاري الإرسال...';
    btn.disabled = true;
    try {
      const res  = await fetch(this.API_BASE + '/forgot_password.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (data.success) {
        errEl.style.color = '#81c784';
        errEl.textContent = '✓ تم الإرسال — تحقق من بريدك الإلكتروني';
        btn.style.display = 'none';
      } else {
        errEl.textContent = data.error || 'حدث خطأ';
        btn.textContent = 'إرسال رابط الاسترداد';
        btn.disabled = false;
      }
    } catch(e) {
      errEl.textContent = 'تعذر الاتصال بالسيرفر';
      btn.textContent = 'إرسال رابط الاسترداد';
      btn.disabled = false;
    }
  },

  async doLogin() {
    const email = document.getElementById('auth-email-login').value.trim();
    const password = document.getElementById('auth-pass-login').value;
    const errEl = document.getElementById('auth-error-login');
    errEl.textContent = '';
    if (!email || !password) { errEl.textContent = 'أدخل البريد وكلمة المرور'; return; }
    try {
      const res = await fetch(this.API_BASE + '/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.token) {
        this.saveAuth(data.token, email, data.name || '');
        this.closeOverlay();
        const greeting = data.name || email.split('@')[0];
        this.showToast('مرحباً ' + greeting);
        await this.syncFromServer();
        this.render();
      } else {
        errEl.textContent = data.error || 'بيانات غير صحيحة';
      }
    } catch(e) {
      errEl.textContent = 'تعذر الاتصال بالسيرفر';
    }
  },

  async doRegister() {
    const name     = document.getElementById('auth-name-register').value.trim();
    const email    = document.getElementById('auth-email-register').value.trim();
    const password = document.getElementById('auth-pass-register').value;
    const errEl    = document.getElementById('auth-error-register');
    errEl.textContent = '';
    if (!name) { errEl.textContent = 'أدخل اسمك'; return; }
    if (!email || !password) { errEl.textContent = 'أدخل البريد وكلمة المرور'; return; }
    try {
      const res = await fetch(this.API_BASE + '/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (data.token) {
        this.saveAuth(data.token, email, data.name || name);
        this.closeOverlay();
        this.showToast('تم إنشاء حسابك، أهلاً ' + (data.name || name));
        await this.syncToServer();
        this.render();
      } else {
        errEl.textContent = data.error || 'خطأ في إنشاء الحساب';
      }
    } catch(e) {
      errEl.textContent = 'تعذر الاتصال بالسيرفر';
    }
  },

  doLogout() {
    this.clearAuth();
    this.closeOverlay();
    this.showToast('تم تسجيل الخروج');
  },

  async doSync() {
    this.closeOverlay();
    this.showToast('جاري المزامنة...');
    await this.syncToServer();   // يبعت الجديد فقط (غير المتزامن)
    await this.syncFromServer(); // يجلب كل شيء من السيرفر
    this.render();
    this.showToast('تمت المزامنة ✓');
  },

  async syncToServer() {
    if (!this.auth.token) return;
    const entries = this.state.history.filter(h => !h.synced);
    if (entries.length === 0) return;
    try {
      const log = entries.map(h => ({
        intentionId: h.intentionId,
        note: h.note || null,
        score: h.score || 1,
        timestamp: h.date
      }));
      const res = await fetch(this.API_BASE + '/sync.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.auth.token
        },
        body: JSON.stringify({ log })
      });
      if (res.ok) {
        this.state.history.forEach(h => h.synced = true);
        this.saveState();
      }
    } catch(e) {}
  },

  async syncFromServer() {
    if (!this.auth.token) return;
    try {
      const res = await fetch(this.API_BASE + '/sync.php', {
        headers: { 'Authorization': 'Bearer ' + this.auth.token }
      });
      const data = await res.json();
      if (data.error === 'جلسة منتهية') { this.clearAuth(); return; }
      if (!Array.isArray(data.log)) return;

      // السيرفر هو المرجع — نستبدل البيانات المحلية بما على السيرفر
      this.state.history = data.log.map(e => ({
        intentionId: e.intention_id,
        date: new Date(e.logged_at + ' UTC').getTime(),
        score: parseInt(e.score) || 1,
        note: e.note || null,
        synced: true
      }));

      this.state.history.sort((a, b) => a.date - b.date);
      this.state.score = this.state.history.reduce((s, h) => s + (h.score || 1), 0);
      this.saveState();
      localStorage.setItem('kanz_last_sync', Date.now().toString());
    } catch(e) {}
  },

  // --- PWA ---
  registerSW() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('./sw.js').then(reg => {
      // Force update if a new SW is waiting
      if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      reg.addEventListener('updatefound', () => {
        const newSW = reg.installing;
        if (newSW) {
          newSW.addEventListener('statechange', () => {
            if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
              newSW.postMessage({ type: 'SKIP_WAITING' });
              window.location.reload();
            }
          });
        }
      });
    }).catch(() => {});
    // Reload when new SW takes control
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) { refreshing = true; window.location.reload(); }
    });
  }
};

// Start
document.addEventListener('DOMContentLoaded', () => {
  try {
    App.init();
  } catch(err) {
    console.error('KanZ init error:', err);
    var el = document.getElementById('main-content');
    if (el) el.innerHTML = '<div style="padding:2rem;text-align:center"><p style="color:#D4AF37;font-size:1.1rem">حدث خطأ. <a href="" style="color:#D4AF37">أعد التحميل</a></p></div>';
  }
});
