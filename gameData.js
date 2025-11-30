const weatherDatabase = [
{
description: "Фактическая погода по аэродрому Пулково 02.10.25 за 19.30 UTC, тихо, условия хорошие, температура 2 градуса, температура точки росы 0 градусов, давление QNH (на уровне моря по СА) 1032гПа, состояние всех ВПП: чистая и сухая, степень загрязнения 51-100%, высота отложений 0мм, коэффициент сцепления 0,6. Прогноз на посадку без изменений.",
code: "METAR ULLI 021930Z 00000MPS CAVOK 02/00 Q1032 R88/090060 NOSIG="
}
];

const gameData = {
METAR: {
easy: [
{code:"METAR UBBB 251600Z 27005MPS 9999 RA FEW030 20/16 Q1012 NOSIG=", errors:[4], hint:"Если бы факт про то что морковка улучшает зрение оказались правдивы..."},
{code:"METAR UUEE 251600Z 00000KT 9999 SCT040 69/10 Q1018", errors:[6], hint:"Тепленько)"},
{code:"METAR URWW 061630Z 06006MPS 8000 -SN OVC004 M03/M04 Q1005 R06/650334 TEMPO 9999 +SHSN BKN002 BKN020CB RMK OBST OBSC=", errors:[11], hint:"видимость более 10км при сильных осадках"},
{code:"METAR UHMM 012030Z NOL=", errors:[3], hint:"NIL"},
{code:"METAR ULLI 120430Z 16002MPS 120V200 0300 -RASN BKN006 OVC033 01/M01 Q0996 R10R/620350 NOSIG RMK OBST OBSC=", errors:[5], hint:"слишком плохая видимость для слабых осадков"}
],
medium: [
{code:"METAR ULLI 251630Z 18070MPS 8000 -RA BKN007 OVC030 03/M01 Q1002 NOSIG", errors:[3], hint:"Скорость"},
{code:"METAR LFPG 251700Z 22012KT 9999 SCT025 BKN100 18/12 A1314", errors:[8], hint:"Бывает у людей подскакивает, когда они видят цены в магазине..."},
{code:"METAR ULLI 110600Z 370007MPS 8000 -RA BKN007 OVC033 01/M01 Q1000 R88/290050 NOSIG RMK OBST OBSC=", errors:[3], hint:"направление"},
{code:"METAR URSS 160830Z 13006MPS 9999 VCTS BKN030CB OVC080 24/25 Q1007 WS ALL RWY R02/010070 R06/010070 TEMPO VRB15MPS 1200 SHRA SQ SCT006 BKN030CB RMK R06/14007G11MPS MT OBSC QFE754=", errors:[8], hint:"темпа меньше Td"},
{code:"METAR ULLI 161030Z 09002MPS 050V120 9999 BKN004 OVC017 02/01 Q0995 R88/290050 NOSIG RMK QBB140 OBSC OBSC=", errors:[14], hint:"правильно OBST OBSC"}
],
hard: [
{code:"METAR KJFK 251651Z 18099KT 10SM FEW040 BKN070 OVC100 18/14 A3005 RMK AO2 SLP141", errors:[3], hint:"Вот это ветерок"},
{code:"METAR EGLL 251650Z 24015G25KT 400 RA BKN008 OVC015 12/10 Q0900 TEMPO SHRA", errors:[4,9], hint:"Видимость и давление"},
{code:"METAR ULLI 261230Z 14003MPS 110V180 9999 SCT043TCU 30/16 Q1010 R88/090060 TEMPO VRB16MPS 3100 -RATS SQ BKN010 BKN016CB=", errors:[13], hint:"сначала гроза потом осадки (-TSRA)"},
{code:"METAR UUWW 070200Z 25002MPS 0800 0250SW R24/P2000D FG W001 12/11 Q1021 R24/000070 TEMPO 0300 FG RMK QBB040=", errors:[8], hint:"вертикальная видимость пишется как VV, а не W"},
{code:"METAR URSS 160800Z 24002MPS 4950 -SHRA BR BKN004 OVC020CB 09/08 Q1008 R02/290255 R06/290255 NOSIG RMK R06/28003MPS QBB120 MT OBSC OBST OBSC QFE755=", errors:[4], hint:"порядок в видимости, должно быть 4900 или 5000"}
]
},
TAF: {
easy: [
{code:"TAF UBBB 2017/2618 27005KT 9999 SCT030", errors:[2], hint:"Вот это прогноз на будущее"},
{code:"TAF UUEE 251720Z 2518/2618 3900MPS 9999", errors:[4], hint:"ветер в прогнозе"},
{code:"TAF ULLI 290754Z 2909/3009 20006G12MPS 6000 BKN006 OVC016 TEMPO 2909/2919 3100 -SHRA BKN005 BKN016CB PROB20 2914/2919 3100 -FZRA=", errors:[14], hint:"вероятность либо 30, либо 40, третьего не дано"},
{code:"TAF ULLI 281952Z 2821/2921 13003MPS 6000 SCT016 TEMPO 2821/2906 6000 FG BKN002=", errors:[9], hint:"слишком большая видимость при тумане"}
],
medium: [
{code:"TAF AMD LFPG 2517/2624 22010KT 6000 RA BKN000", errors:[7], hint:"Бело и влажно"},
{code:"TAF UUWW 290450Z 2906/3006 20003G08MPS 9999 OVC006 TX03/3006Z TNM00/2906Z TEMPO 2906/2908 9999 OVC003 BECMG 2908/2909 FEW007 BKN011 TEMPO 2918/3006 2500 BR OVC003=", errors:[11], hint:"лишняя группа, видимость не меняется, указывать не надо"},
{code:"TAF AMD UUWW 281900Z 2819/2918 23003G08MPS 6000 OVC004 TX02/2903Z TNM01/2905Z TEMPO 2821/2907 0300 FZFG OVC001 BECMG 2907/2909 BKN012=", errors:[8], hint:"время максимальной темпы"},
{code:"TAF UUEE 291052Z 2912/3012 21006MPS 9000 OVC004 TX02/3009Z TNM01/2913Z TEMPO 2915/3006 1000 FZBR OVC001=", errors:[12], hint:"дымка не может быть замерзающей"},
{code:"TAF UUYY 290800Z 2909/3009 28003G14MPS 9999 BKN017CB TEMPO 2909/2918 6000 -RATS BKN014 BKN016CB=", errors:[10], hint:"сначала гроза потом дождь"}
],
hard: [
{code:"TAF KJFK 251720Z 2518/2624 18010KT P6SM SKC BECMG 2420/2422 20015G25KT", errors:[8], hint:"Ошибка в времени?"},
{code:"TAF EGLL 251750Z 2518/2624 24012KT 9999 BKN014 PROB10 TEMPO 2520/2522 7000 SHRA", errors:[7], hint:"Проверь вероятность"},
{code:"TAF URSS 291656Z 2918/3018 05003G08MPS 9999 SCT016 BKN030CB BKN100 TEMPO 2918/3007 VRB12MPS 1000 TSRA BKN006 BKN030CB OVC100 BECMG 3006/3007 28005G10MPS SCT030CB BKN100 BECMG 3015/3016 05003G08MPS SCT030=", errors:[10], hint:"Ошибка в времени, предыдущий срок перекрывает следующий"},
{code:"TAF URSS 270200Z 2703/2803 22006MPS 9999 SCT020 TEMPO 2710/2718 3000 -SHRA SCT020 SCT020CB TEMPO 2712/2718 TSRA SCT020 SCT020CB=", errors:[14], hint:"ошибка в группе TEMPO, время внахлёст"}
]
},
GAMET: {
easy: [
{code:"GAMET LGGG 251500/252100 AMD 1500Z 1. SIGWX 2. SFC VIS 3. SFC WIND", errors:[2], hint:"Формат времени!"}
],
medium: [
{code:"GAMET LGGG 251500/252100 1. SIGWX TS 2. SFC VIS 5000 3. SFC WIND 27010KT", errors:[1,3], hint:"SIGWX и ветер"}
],
hard: [
{code:"GAMET LGGG 251500/252100 1. SIGWX ISOL TS 2. SFC VIS 8000 3. SFC WIND 27010KT 4. CLD BKN030", errors:[2,4], hint:"Видимость и облачность"}
]
},
SIGMET: {
easy: [
{code:"SIGMET 1 VALID 251600/252000 LGGG- LGGG ATHINAI FIR SEV TURB FCST N OF N4000 FL300/400 MOV E 20KT NC=", errors:[0], hint:"Номер SIGMET"}
],
medium: [
{code:"SIGMET 2 VALID 251600/252000 LGGG- LGGG ATHINAI FIR OBSC TS FCST S OF N4000 FL250/350 MOV NE 15KT WKN=", errors:[2,3], hint:"Явление и уровни"}
],
hard: [
{code:"SIGMET 3 VALID 251600/252000 LGGG- LGGG ATHINAI FIR SEV ICE FCST N OF N3500 AND W OF E02000 FL100/200 MOV S 10KT INTSF=", errors:[4,5], hint:"Локация и движение"}
]
},
WAREP: {
easy: [
{code:"WAREP UUEE 251600Z 27005MPS 9999 FEW030=", errors:[0], hint:"Формат заголовка"}
],
medium: [
{code:"WAREP UUEE 251600Z 00000KT 9999 SCT040=", errors:[1,3], hint:"Ветер и облачность"}
],
hard: [
{code:"WAREP UUEE 251600Z 18007KT 8000 -RA BKN007 OVC030=", errors:[3,5], hint:"Видимость и облачность"}
]
},
'КН-01': {
easy: [
{code:"КН-01 12345 251600Z 11111 22222 33333=", errors:[0], hint:"Формат кода"}
],
medium: [
{code:"КН-01 12345 251600Z 99999 88888 77777=", errors:[3,4], hint:"Группы"}
],
hard: [
{code:"КН-01 12345 251600Z 11111 22222 33333 44444 55555=", errors:[2,5], hint:"Вторая и пятая группы"}
]
},
'КН-04': {
easy: [
{code:"КН-04 67890 251600Z AAAAA BBBBB CCCCC=", errors:[2], hint:"Формат времени"}
],
medium: [
{code:"КН-04 67890 251600Z 99999 88888 77777=", errors:[3,4], hint:"Группы"}
],
hard: [
{code:"КН-04 67890 251600Z AAAAA BBBBB CCCCC DDDDD EEEEE=", errors:[4,5], hint:"Четвертая и пятая группы"}
]
},
SPECI: {
easy: [
{code:"SPECI UBBB 251600Z 27005MPS 5000 RA FEW030 20/16 Q1012=", errors:[4], hint:"Явление"}
],
medium: [
{code:"SPECI UUEE 251600Z 00000KT 3000 BR SCT040 15/10 Q1018=", errors:[3,5], hint:"Видимость и температура"}
],
hard: [
{code:"SPECI ULLI 251630Z 18007MPS 2000 +RA BKN007 OVC030 03/M01 Q1002=", errors:[2,6], hint:"Видимость и облачность"}
]
},
AIRMET: {
easy: [
{code:"AIRMET 1 VALID 251600/252000 LGGG- LGGG ATHINAI FIR MT OBSC FCST N OF N4000 FL050/150=", errors:[0], hint:"Номер AIRMET"}
],
medium: [
{code:"AIRMET 2 VALID 251600/252000 LGGG- LGGG ATHINAI FIR SFC VIS 5000 BR FCST S OF N4000=", errors:[5,6], hint:"Видимость и явление"}
],
hard: [
{code:"AIRMET 3 VALID 251600/252000 LGGG- LGGG ATHINAI FIR MOD TURB FCST N OF N3500 FL100/200 MOV E 10KT NC=", errors:[3,7], hint:"Явление и движение"}
]
}
};

const guessGameData = {
metar: [
{desc: "дымка", code: "BR"},
{desc: "слабый дождь", code: "-RA"},
{desc: "ливневый дождь", code: "SHRA"},
{desc: "туман", code: "FG"},
{desc: "без значительных изменений", code: "NOSIG"},
{desc: "рассеянная облачность", code: "SCT"},
{desc: "сплошная облачность", code: "OVC"},
{desc: "низовая метель", code: "BLSN"},
{desc: "явления предшествующей погоды ливнивой дождь", code: "RESHRA"},
{desc: "сдвиг ветра на всех полосах", code: "WS ALL RWY"},
{desc: "поземок", code: "DR"},
{desc: "отсутствие сводки", code: "NIL"},
{desc: "нет существенной облачности", code: "NSC"},
{desc: "прекращение особых явлений погоды", code: "NSW"},
{desc: "дым", code: "FU"},
{desc: "препятствия закрыты", code: "OBST OBSC"},
{desc: "высота облаков 60м", code: "QBB060"},
{desc: "ремарка", code: "RMK"},
{desc: "мощно-кучевая облачность", code: "TCU"},
{desc: "гроза в окрестности", code: "VCTS"}
]
};

const speedDecodeData = [
"METAR UUWW 141630Z 05007MPS 9999 SCT020 17/12 Q1011 NOSIG=",
"METAR UUDD 141600Z 03005MPS 9999 BKN015 15/10 Q1012=",
"METAR URSS 141630Z 00000MPS CAVOK 20/15 Q1010=",
"METAR EGLL 251650Z VRB03KT 9999 FEW030 15/10 Q1018 NOSIG=",
"METAR ULLI 021930Z 00000MPS CAVOK 02/00 Q1032 R88/090060 NOSIG=",
"METAR UUYY 291830Z 28004MPS 9999 FEW030CB 10/09 Q1011 R18/19//55 NOSIG RMK QFE750/1000=",
"METAR UUYY 150730Z 26008MPS 8000 -SHSN SCT019CB BKN036 M03/M06 Q0999 R18/29//51 NOSIG RMK QFE740/0987=",
"METAR UUYY 150230Z 25010G20MPS 4300 -SHSNRA FEW010 BKN025CB 01/M01 Q0985 R18/29//51 TEMPO 0500 +SHSN RMK QFE731/0974",
"METAR UUYY 142000Z 18005MPS 3700 -RA BR OVC005 05/05 Q0987 R18/29//51 NOSIG RMK QFE732/0976=",
"METAR ULLI 041100Z 24008MPS 2500 1300E R28R/1300U SHSN SCT003 BKN016CB OVC030 00/M01 Q0987 RESHRA R28R/290050 TEMPO 0200 +SHSNRA BKN011 BKN015CB RMK QBB110 OBST OBSC=",
"METAR ULLI 110600Z 15007MPS 8000 -RA BKN007 OVC033 01/M01 Q1000 R88/290050 NOSIG RMK OBST OBSC=",
"METAR UUWW 070200Z 25002MPS 0800 0250SW R24/P2000D FG VV001 12/11 Q1021 R24/000070 TEMPO 0300 FG RMK QBB040=",
"METAR UUYY 151100Z 03004MPS 2500 -SHSN SCT015CB OVC030 M10/M12 Q1007 R36/450342 NOSIG RMK QFE746/0995=",
"METAR UUYY 291630Z 31003MPS 270V340 9999 SCT036CB 11/05 Q1008 R18/CLRD61 NOSIG RMK QFE748/0997=",
"METAR UHWW 111230Z VRB01MPS 3200 0800W PRFG BKN002 02/02 Q1012 R25L/0///70 NOSIG RMK QBB060 MT OBSC QFE758=",
"METAR ULMM 062200Z 00000MPS 9999 -SHSN SCT033CB M07/M09 Q1017 R31/490145 NOSIG RMK QFE756=",
"METAR ULMM 091030Z 32007G13MPS 1400 1300SE R31/1300D SHSN BLSN BKN015CB M03/M05 Q0998 R31/290050 TEMPO 33010G18MPS 0500 +SHSN BLSN VV005 RMK QFE741=",
"METAR UUEE 291330Z 36005G10MPS 340V050 8000 -SHRA SCT054CB 12/11 Q1010 R06C/290245 R06L/290251 NOSIG="
];

const codeBuilderData = [
{description: "Аэропорт Внуково, 14 число, 16:30 UTC, ветер 050° 7 м/с, видимость 10+ км, рассеянная облачность на 2000 футов, температура 17°C, точка росы 12°C, давление 1011 гПа, без изменений", code: "UUWW 141630Z 05007MPS 9999 SCT020 17/12 Q1011 NOSIG"},
{description: "Аэропорт Домодедово, 14 число, 16:00 UTC, ветер 030° 5 м/с, видимость 10+ км, разорванная облачность на 1500 футах, температура 15°C, точка росы 10°C, давление 1012 гПа", code: "UUDD 141600Z 03005MPS 9999 BKN015 15/10 Q1012"},
{description: "Аэропорт Сочи, 14 число, 16:30 UTC, штиль, CAVOK, температура 20°C, точка росы 15°C, давление 1010 гПа", code: "URSS 141630Z 00000MPS CAVOK 20/15 Q1010"},
{description: "Аэропорт Пулково, 02 число, 19:30 UTC, штиль, CAVOK, температура 02°C, точка росы 00°C, давление 1032 гПа, RMK R88/090060, без изменений", code: "ULLI 021930Z 00000MPS CAVOK 02/00 Q1032 R88/090060 NOSIG"},
{description: "Аэропорт Хитроу, 25 число, 16:50 UTC, ветер переменный 3 узла, видимость 10+ км, малооблачно на 900 метрах (3000 футах), температура 15°C, точка росы 10°C, давление 1018 гПа, без изменений", code: "EGLL 251650Z VRB03KT 9999 FEW030 15/10 Q1018 NOSIG"},
{description: "Аэропорт Пулково, 11 число, 06:00 UTC, ветер 150° 7 м/с, видимость 8000 м, слабый дождь, значительная облачность на 700 футов, сплошная облачность на 3300 футов, температура 1°C, точка росы -1°C, давление 1000 гПа, состояние всех ВПП, мокрая или вода местами, степень загрязнения 51-100%, высота отложений 0мм, коэффициент сцепления 0.5, без изменений, ремарка, препятствия закрыты", code: "METAR ULLI 110600Z 15007MPS 8000 -RA BKN007 OVC033 01/M01 Q1000 R88/290050 NOSIG RMK OBST OBSC="},
{description: "Аэропорт Пулково, 10 число, 06:30 UTC, ветер 180° 7 м/с порыв 12 м/с,  видимость 10+ км, значительная облачность на 800 футов, сплошная облачность на 1700 футов, температура 2°C, точка росы -0°C, давление 1000 гПа, состояние всех ВПП: мокрая или вода местами, степень загрязнения 51-100%, высота отложений 0мм, коэффициент сцепления 0.5, без изменений, ремарка, ветер на правой 10 полосе 180°  5 м/с порыв 8 м/с, ветер на левой 10 полосе 180°  7м/с порыв 12м/с", code: "METAR ULLI 100630Z 18007G12MPS 9999 BKN008 OVC017 02/M00 Q1000 R88/290050 NOSIG RMK 10R/18005G08MPS 10L/18007G12MPS="},
{description: "Аэропорт Внуково, 4 число, 16:00 UTC, ветер 190° 2 м/с, резкое изменение направления ветра от 160° до 230°, видимость 10+ км, слабый ливневой дождь, значительная кучево-дождевая облачность на 4700 футов, температура 18°C, точка росы 13°C, давление 1014 гПа, состояние 24 ВПП: мокрая или вода местами, степень загрязнения 51-100%, высота отложений 0 мм, коэффициент сцепления 0.5, временами слабый дождь с грозой, разорванная кучево-дождевая облачность на 1500 футов", code: "METAR UUWW 041600Z 19002MPS 160V230 9999 -SHRA BKN047CB 18/13 Q1014 R24/290050 TEMPO -TSRA SCT015CB="},
{description: "Аэропорт Внуково, 7 число, 02:00 UTC, ветер 250° 2 м/с, видимость 800 м, минимальная видимость 250м на ЮЗ, видимость на 24 ВПП более 2000м тенденция на уменьшение, туман, вертикальная видимость 30м, температура 12°C, точка росы 11°C, давление 1021 гПа, состояние 24 ВПП: чистая и сухая, степень загрязнения 0%, высота отложений 0 мм, коэффициент сцепления 0.7, временами видимость 300 м, туман, ремарка, высота НГО 40м", code: "METAR UUWW 070200Z 25002MPS 0800 0250SW R24/P2000D FG VV001 12/11 Q1021 R24/000070 TEMPO 0300 FG RMK QBB040="},
{description: "Аэропорт Адлер , 7 число, 10:30 UTC, ветер 170° 5 м/с, видимость 10+ км, значительная облачность на 1100 футов, температура 10°C, точка росы 7°C, давление 1021 гПа, состояние 2 ВПП очищена, коэффициент сцепления 0.7, состояние 7 ВПП отсутствуют сведения, без изменений, ремарка, на полосе 6 направление ветра 190° скорость 5 м/с порыв 6м/с, горы закрыты, 764 мм.рт.ст", code: "METAR URSS 071030Z 17005MPS 9999 BKN011 10/07 Q1021 R02/CLRD70 R06/////// NOSIG RMK R06/19005MPS MT OBSC QFE764="},
{description: "Аэропорт Адлер , 10 число, 15:30 UTC, ветер 330° 4 м/с, резкое изменение направления ветра от 290° до 10°, видимость 8000 м, слабый ливневой дождь, несколько облачность на 1600 футов, сплошная кучево-дождевая облачность на 3600 футов, температура 10°C, точка росы 5°C, давление 1016 гПа, сдвиг ветра на всех ВПП, состояние 6 ВПП: мокрая или вода местами, степень загрязнения 51-100%, высота отложений 0мм, коэффициент сцепления 0.6, без изменений, ремарка, на полосе 6 направление ветра 350° скорость 3 м/с порыв 6 м/с, горы закрыты, 760 мм.рт.ст", code: "METAR URSS 101530Z 33004MPS 290V010 8000 -SHRA FEW016 OVC036CB 10/05 Q1016 WS ALL RWY R02/290060 R06/290060 NOSIG RMK R06/35003G06MPS MT OBSC QFE760="},
{description: "Аэропорт Адлер , 16 число, 08:00 UTC, ветер 240° 2 м/с, видимость 4900 м, слабый ливневой дождь, дымка, значительная облачность на 400 футов, сплошная кучево-дождевая облачность на 2000 футов, температура 9°C, точка росы 8°C, давление 1008 гПа,  состояние 2 ВПП мокрая или вода местами, степень загрязнения 51-100%, высота отложений 2 мм, коэффициент сцепления 0.55, состояние 6 ВПП мокрая или вода местами, степень загрязнения 51-100%, высота отложений 2 мм, коэффициент сцепления 0.55, без изменений, ремарка, на полосе 6 направление ветра 280° скорость 3 м/с, высота НГО 120м, горы закрыты, препятствия закрыты, 755 мм.рт.ст", code: "METAR URSS 160800Z 24002MPS 4900 -SHRA BR BKN004 OVC020CB 09/08 Q1008 R02/290255 R06/290255 NOSIG RMK R06/28003MPS QBB120 MT OBSC OBST OBSC QFE755="},
{description: "Аэропорт Пулково, 16 число, 21:00 UTC, штиль, видимость 10+ КМ, поземный (тонкий) туман, нет существенной облачности, температура 12°C, точка росы 9°C, давление 1017 гПа, состояние 28 левой ВПП чистая и сухая, степень загрязнения 51-100%, высота отложений 0 мм, коэффициент сцепления 0.6, без изменений", code: "METAR ULLI 162100Z 00000MPS 9999 MIFG NSC 12/09 Q1017 R28L/090060 NOSIG="},
{description: "Аэропорт Пулково, 16 число, 10:30 UTC, ветер 90° 2 м/с, резкое изменение направления ветра от 50° до 120°, видимость видимость 10+ КМ, значительная облачность на 400 футов, сплошная облачность на 1700 футов, температура 2°C, точка росы 1°C, давление 995 гПа, ремарка, препятствия закрыты", code: "METAR ULLI 161030Z 09002MPS 050V120 9999 BKN004 OVC017 02/01 Q0995 R88/290050 NOSIG RMK QBB140 OBST OBSC="}
];

const quizQuestions = [
{question: "Что значит SCT040?", options: ["Рассеянная облачность на 1200 метрах", "Сплошная на 1200 метрах", "Разорванная на 1200 метрах", "Малооблачно на 1200 метрах"], correct: 0},
{question: "Код для тумана", options: ["BR", "HZ", "FG", "FU"], correct: 2},
{question: "Что значит CAVOK?", options: ["Видимость >10км, без особых явлений погоды", "Облачность", "Ветер", "Давление"], correct: 0},
{question: "Код для грозы", options: ["TS", "RA", "SN", "FG"], correct: 0},
{question: "Что значит NOSIG?", options: ["Без изменений", "С изменениями", "Прогноз", "Ошибка"], correct: 0},
{question: "Код для мглы", options: ["FZ", "DZ", "HZ", "MG"], correct: 2},
{question: "Код для значительной облачности", options: ["SCT", "BKN", "FEW", "OVC"], correct: 1},
{question: "Код для низовой метели", options: ["BLSN", "BRSN", "DRSN", "NZSN"], correct: 0},
{question: "Код для востока", options: ["N", "W", "S", "E"], correct: 3},
{question: "Код для смерча", options: ["FC", "TC", "TS", "SM"], correct: 0},
{question: "Код для дыма", options: ["FZ", "FU", "FG", "FC"], correct: 1},
{question: "Код для снежной крупы", options: ["GR", "SN", "GS", "SG"], correct: 2},
{question: "Что значит QBB080?", options: ["высота облаков 2400м", "высота облаков 80 футов", "высота облаков 80м", "высота облаков 2400 футов"], correct: 2},
{question: "Код для закрытия препятствий", options: ["OBSC OBST", "OBSC OBSC", "OBST OBSC", "OBST OBST"], correct: 2},
{question: "Код для сдвига ветра на всех ВПП", options: ["WS ALL VPP", "WS ALL", "R88/WS", "WS ALL RWY"], correct: 3},
{question: "Как зашифровать давление 999,5гПа?", options: ["Q0999", "Q1000", "Q9995", "Q999"], correct: 0}
];

const tafPredictorData = [
{metar: "UUWW 141630Z 05007MPS 9999 SCT020 17/12 Q1011 NOSIG", taf: "TAF UUWW 141600Z 1418/1524 03005MPS 9999 BKN015 TX15/1412Z TN10/1503Z", question: "Какая минимальная температура ожидается ночью?", answer: "10"},
{metar: "UUDD 141600Z 03005MPS 9999 BKN015 15/10 Q1012", taf: "TAF UUDD 141500Z 1416/1518 04006MPS 8000 OVC010 TEMPO 1418/1506 4000 BR BKN005", question: "Будет ли туман ночью?", answer: "Нет"},
{metar: "URSS 141630Z 00000MPS CAVOK 20/15 Q1010", taf: "TAF URSS 141600Z 1418/1524 VRB03MPS 9999 FEW030", question: "Изменится ли ветер вечером?", answer: "Да"},
{metar: "ULLI 021930Z 00000MPS CAVOK 02/00 Q1032 R88/090060 NOSIG", taf: "TAF ULLI 021800Z 0219/0321 35004MPS 9999 BKN020", question: "Какая облачность ожидается?", answer: "BKN020"},
{metar: "EGLL 251650Z VRB03KT 9999 FEW030 15/10 Q1018 NOSIG", taf: "TAF EGLL 251600Z 2518/2624 20005KT 9999 SCT025 PROB30 TEMPO 2600/2609 BKN010", question: "Вероятность низкой облачности?", answer: "30"},
{metar: "METAR UUYY 011930Z 23002MPS 2200 -SHSN BKN018CB M02/M04 Q1017 R18/CLRD61 TEMPO 1000 SHSN RMK QFE755/1006=", taf: "TAF UUYY 011700Z 0118/0218 22003G08MPS 6000 -SHSN BKN017CB TEMPO 0118/0206 1000 SHSN FZDZ BR BKN005 BKN016CB BECMG 0202/0203 25003G08MPS=", question: "Прогноз оправдался?", answer: "нет"},
{metar: "METAR ULLI 291900Z 28009G14MPS 4200 -SHRA BKN008 BKN016CB OVC035 12/11 Q0990 RESHRA R88/290050 NOSIG=", taf: "TAF ULLI 291655Z 2918/3018 30009G14MPS 6000 -RA BKN016 OVC020 TEMPO 2918/3009 32011G17MPS 3100 -SHRA BKN010 BKN016CB BECMG 3009/3011 35006G14MPS=", question: "Осадки оправдались?", answer: "да"},
{metar: "METAR ULLI 130830Z 36006MPS 330V080 9999 -SHRA SCT026CB BKN037 19/10 Q1020 R88/090060 NOSIG=", taf: "TAF ULLI 121954Z 1221/1321 02003MPS 6000 BKN020 BECMG 1307/1309 36005G11MPS PROB40 TEMPO 1309/1315 4000 -TSRA BKN016CB=", question: "Какое явление из прогноза не оправдалось?", answer: "-TSRA"},
{metar: "METAR UUWW 291600Z 19003MPS 4900 BR OVC002 M00/M01 Q1021 R24/000065 TEMPO 1000 BR=", taf: "TAF UUWW 292257Z 3000/3024 20003MPS 6000 OVC003 TX04/3012Z TN00/3000Z TEMPO 3000/3018 0500 FG OVC001 TEMPO 3018/3024 1000 BR OVC001=", question: "Что влияет на видимость на аэродроме? (ответ по русски)", answer: "дымка"},
{metar: "METAR UUEE 300600Z 19003MPS 7000 OVC006 02/01 Q1021 R24L/190051 R24C/190051 NOSIG=", taf: "TAF UUEE 300450Z 3006/0106 19003MPS 6000 OVC005 TX03/3012Z TN01/3006Z TEMPO 3006/3011 1000 BR OVC002 TEMPO 3011/0106 0700 FG OVC001=", question: "Оправдался ли прогноз минимальной температуры?", answer: "да"},
{metar: "METAR UUEE 291800Z 21003MPS 170V230 9000 OVC004 00/M01 Q1021 R24L/190051 R24C/190051 NOSIG=", taf: "TAF UUEE 291650Z 2918/3018 21003MPS 6000 OVC003 TX03/3012Z TN00/2918Z TEMPO 2918/3018 0700 FG OVC001=", question: "Оправдался ли прогноз минимальной температуры?", answer: "да"},
{metar: "METAR UUEE 271200Z 17003MPS 8000 OVC007 M02/M04 Q1021 R24L/290045 R24C/290045 NOSIG=", taf: "TAF UUEE 270758Z 2709/2809 16003G08MPS 9000 FEW004 BKN008 TXM01/2712Z TNM03/2709Z TEMPO 2800/2809 3000 -SN OVC004=", question: "Прогноз максимальной температуры оправдался?", answer: "да"},
{metar: "METAR UUEE 160800Z 23008MPS 9999 OVC005 03/02 Q1003 R24L/290051 R24C/290051 NOSIG=", taf: "TAF UUEE 160458Z 1606/1706 24007MPS 6000 BKN006 TX04/1615Z TN01/1606Z TEMPO 1606/1615 22008G13MPS 4900 -RASN OVC004=", question: "Прогноз ветра оправдался?", answer: "да"},
{metar: "METAR UUEE 150430Z 22004MPS 1900 R24L/2000D R24C/2000D SN BKN004 OVC036 M00/M01 Q1004 R24L/590230 R24C/590230 TEMPO 0700 +SHSN BKN003 BKN012CB=", taf: "TAF UUEE 150150Z 1503/1603 22003MPS 6000 FEW005 OVC011 TX01/1512Z TNM01/1503Z TEMPO 1503/1512 1200 SHSN BKN003 BKN014CB BECMG 1510/1512 28005MPS=", question: "Какая видимость прогнозируется на посадку? (в ответе укажите число)", answer: "700"},
{metar: "METAR ULLI 152100Z 22003MPS 190V250 3800 -RA BKN006 OVC018 06/04 Q1010 R28R/290050 NOSIG RMK OBST OBSC=", taf: "TAF ULLI 150758Z 1509/1609 32005G10MPS 6000 BKN016 TEMPO 1509/1513 BKN013 TEMPO 1519/1603 3100 -SHRA BKN010 BKN016CB BECMG 1520/1522 22005G10MPS=", question: "Какой ветер прогнозируется 15 числа в 21.00? (ответ дайте в цифрах кода)", answer: "22005G10MPS"}
];

const flightPlannerData = [
{route: "Основной: UUWW: METAR UUWW 141630Z 05007MPS 9999 SCT020 17/12 Q1011 NOSIG \n Маршруртный: UUDD: METAR UUDD 141600Z 03005MPS 9999 BKN015 15/10 Q1012 \n Запасной URSS: METAR URSS 141630Z 00000MPS CAVOK 20/15 Q1010", expected: "go", points: 50},
{route: "Основной: ULLI: METAR ULLI 021930Z 00000MPS CAVOK 02/00 Q1032\nEGLL: Маршруртный: METAR EGLL 251650Z 14004MPS FG 600 BKN019 TSRA 10/8 Q995 \n Запасной METAR KMSN 150153Z 14007MPS 9999 SCT100 BKN120 M01/M07 ", expected: "alternate", points: 30}
];