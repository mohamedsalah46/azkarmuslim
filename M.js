(() => {
'use strict';
const KEY = 'adhkar:v1';
const N = s => s.replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g, '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه');
const I = (t, c, src, g, n) => ({ t, c, src, g, n });

/* ===== المحتوى: لم تُضَف أي عبارة بلا مصدر؛ العدد null = لم يثبت عدد محدد ===== */
const KURSI = 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ';
const QULS = 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ\n\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِنْ شَرِّ مَا خَلَقَ ۝ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ\n\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ';
const KURSI_I = I(KURSI, 1, 'سورة البقرة، آية 255 — رواه النسائي في «عمل اليوم والليلة»', 'صححه الألباني');
const SAYYID = I('اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ', 1, 'صحيح البخاري، رقم 6306 (سيد الاستغفار)', 'صحيح');
const QULS_I = I(QULS, 3, 'سور الإخلاص والفلق والناس — أبو داود 5082، الترمذي 3575', 'حسّنه الألباني');
const BISM = I('بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ', 3, 'سنن أبي داود 5088، جامع الترمذي 3388', 'صححه الألباني');
const SUB = I('سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', 100, 'صحيح مسلم، رقم 2692', 'صحيح');
const RIDA = I('رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا', 3, 'سنن أبي داود 5072، جامع الترمذي 3389', 'حسّنه الألباني');
const KALIMAT = I('أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ', 3, 'صحيح مسلم 2709؛ وجامع الترمذي 3604 (للمساء ثلاثًا)', 'صحيح');
const FATIHA = I('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ', 1, 'سورة الفاتحة — قصة الرقية بها: صحيح البخاري 5736', 'صحيح');
const RUQ_NOTE = 'الرقية دعاء وتوكل على الله، ولا تُغني عن العلاج الطبي، ولا يُجزم بنتيجتها.';

const SECS = {
  morning: { title: 'أذكار الصباح', sub: 'من بعد الفجر', ic: 'sun', items: [
    KURSI_I, QULS_I,
    I('أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', null, 'صحيح مسلم، رقم 2723', 'صحيح', 'لم يرد في الرواية عدد محدد، فاقرأه مرة بتدبّر.'),
    SAYYID, BISM, RIDA, SUB] },
  evening: { title: 'أذكار المساء', sub: 'من بعد العصر', ic: 'moon', items: [
    KURSI_I, QULS_I,
    I('أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', null, 'صحيح مسلم، رقم 2723', 'صحيح', 'لم يرد في الرواية عدد محدد، فاقرأه مرة بتدبّر.'),
    SAYYID, BISM, RIDA, KALIMAT, SUB] },
  ruqya: { title: 'الرقية الشرعية', sub: 'آيات وأدعية نبوية', ic: 'book', items: [
    Object.assign({}, FATIHA, { n: RUQ_NOTE }),
    I('أَذْهِبِ الْبَاسَ رَبَّ النَّاسِ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا', 1, 'صحيح البخاري 5675، صحيح مسلم 2191', 'صحيح', RUQ_NOTE),
    I('بِسْمِ اللَّهِ أَرْقِيكَ، مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ، مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ، اللَّهُ يَشْفِيكَ، بِسْمِ اللَّهِ أَرْقِيكَ', 1, 'صحيح مسلم، رقم 2186', 'صحيح', RUQ_NOTE),
    I('أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ', 7, 'صحيح مسلم، رقم 2202', 'صحيح', 'ضع يدك على موضع الألم وقل «بسم الله» ثلاثًا، ثم قل هذا الدعاء سبع مرات. ' + RUQ_NOTE)] },
  home: { title: 'دخول المنزل والخروج', sub: 'أذكار البيت', ic: 'home', items: [
    I('بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا', null, 'سنن أبي داود، رقم 5096 (أذكار دخول المنزل)', 'قال النووي: إسناده حسن، وللعلماء فيه كلام', 'ثم يسلّم على أهله. لم يرد عدد محدد.'),
    I('بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', null, 'سنن أبي داود 5095، جامع الترمذي 3426 (عند الخروج)', 'صححه الألباني', 'لم يرد عدد محدد.'),
    I('اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ أَوْ أُضَلَّ، أَوْ أَزِلَّ أَوْ أُزَلَّ، أَوْ أَظْلِمَ أَوْ أُظْلَمَ، أَوْ أَجْهَلَ أَوْ يُجْهَلَ عَلَيَّ', null, 'سنن أبي داود 5094، جامع الترمذي 3427 (عند الخروج)', 'صححه الألباني', 'لم يرد عدد محدد.')] },
  fort: { title: 'أذكار التحصين', sub: 'قبل النوم وعند الحاجة', ic: 'shield', items: [
    I(KURSI, 1, 'سورة البقرة 255 — صحيح البخاري، رقم 2311 (قبل النوم)', 'صحيح'),
    I('آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', 1, 'آخر آيتين من سورة البقرة — صحيح البخاري 5009، صحيح مسلم 807', 'صحيح'),
    I(QULS, 3, 'صحيح البخاري، رقم 5017 (قبل النوم)', 'صحيح', 'يجمع كفّيه وينفث فيهما ثم يقرأ، ثم يمسح بهما ما استطاع من جسده.'),
    BISM, KALIMAT] }
};
const KEYS = Object.keys(SECS);
const P = {
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5"/>',
  home: '<path d="M3 11l9-8 9 8v10H3zM10 21v-6h4v6"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
  heart: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
  set: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  share: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 11l7.6-4M8.2 13l7.6 4"/>',
  reset: '<path d="M4 12a8 8 0 1 0 3-6.2M4 4v4h4"/>',
  next: '<path d="M15 6l-6 6 6 6"/>', prev: '<path d="M9 6l6 6-6 6"/>'
};
const ic = n => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;

/* ===== الحالة والتخزين ===== */
const today = () => new Date().toLocaleDateString('en-CA');
const def = () => ({ fav: [], cnt: {}, done: {}, last: null, set: { fs: 30, vib: true, calm: false } });
let S = def();
try { const o = JSON.parse(localStorage.getItem(KEY)); if (o && typeof o === 'object') S = Object.assign(def(), o); } catch (e) {}
S.set = Object.assign(def().set, S.set);
const D = today();
S.cnt = { [D]: S.cnt[D] || {} }; S.done = { [D]: S.done[D] || {} };
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
const id = (s, i) => s + ':' + i;
const item = (s, i) => (SECS[s] && SECS[s].items[i]) || null;
const isDone = (s, i) => !!S.done[D][id(s, i)];
const left = (s, i) => { const v = S.cnt[D][id(s, i)]; return v === undefined ? item(s, i).c : v; };
const total = () => KEYS.reduce((a, k) => a + SECS[k].items.length, 0);
const doneN = k => SECS[k].items.filter((_, i) => isDone(k, i)).length;
const doneAll = () => KEYS.reduce((a, k) => a + doneN(k), 0);

/* ===== أدوات ===== */
const $ = s => document.querySelector(s), app = $('#app');
let tt; const toast = m => { const t = $('#toast'); t.textContent = m; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 1800); };
const buzz = p => { if (S.set.vib && navigator.vibrate) { try { navigator.vibrate(p); } catch (e) {} } };
const C = 2 * Math.PI * 90;
const ring = (pct, big) => `<svg viewBox="0 0 220 220" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e2c275"/><stop offset="1" stop-color="#b8892f"/></linearGradient></defs><circle class="tr" cx="110" cy="110" r="90" fill="none" stroke-width="${big ? 16 : 14}"/><circle class="pg" id="pg" cx="110" cy="110" r="90" fill="none" stroke-width="${big ? 16 : 14}" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - pct)}"/></svg>`;
const plain = it => it.t + '\n\n' + it.src + (it.g ? ' — ' + it.g : '') + '\n(أذكار المسلم)';
const copy = async txt => { try { await navigator.clipboard.writeText(txt); toast('تم النسخ'); } catch (e) { const a = document.createElement('textarea'); a.value = txt; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); toast('تم النسخ'); } catch (x) { toast('تعذّر النسخ'); } a.remove(); } };
const share = async it => { if (navigator.share) { try { await navigator.share({ text: plain(it) }); } catch (e) {} } else copy(plain(it)); };
const toggleFav = key => { const k = S.fav.indexOf(key); k < 0 ? S.fav.push(key) : S.fav.splice(k, 1); save(); toast(k < 0 ? 'أُضيف إلى المفضلة' : 'أُزيل من المفضلة'); };

/* ===== الصفحات ===== */
function hijri() { try { return new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()); } catch (e) { return ''; } }
function viewHome() {
  const g = new Date().toLocaleDateString('ar', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const all = []; ['morning', 'evening', 'fort', 'home'].forEach(k => SECS[k].items.forEach((x, i) => all.push([k, i])));
  const dn = Math.floor(Date.now() / 864e5), [fk, fi] = all[dn % all.length], f = item(fk, fi);
  const pct = doneAll() / total(), l = S.last && item(S.last.s, S.last.i) ? S.last : null;
  return `<section class="frame hero"><h1>أذكار المسلم</h1><p>اللهمّ أعنّا على ذكرك وشكرك وحسن عبادتك</p>
  <p class="dates">${g}<br>${hijri() ? `<small>الهجري (تقويم أم القرى، قد يختلف يومًا): ${hijri()}</small>` : ''}</p></section>
  <section class="frame prog"><div class="ringbox" style="width:96px">${ring(pct)}</div><div><b>إنجاز اليوم</b><p>${doneAll()} من ${total()} ذكرًا</p><p>${pct >= 1 ? 'أتممتَ أذكار اليوم، تقبّل الله منك' : 'واصل بارك الله فيك'}</p></div></section>
  ${l ? `<a class="btn" style="width:100%;margin-bottom:12px" href="#/s/${l.s}/${l.i}">متابعة القراءة: ${SECS[l.s].title} (${l.i + 1})</a>` : ''}
  <div class="grid">${KEYS.map((k, n) => `<a class="sec ${n === 4 ? 'wide' : ''}" href="#/s/${k}">${ic(SECS[k].ic)}<b>${SECS[k].title}</b><small>${SECS[k].sub}</small><div class="bar2"><i style="width:${doneN(k) / SECS[k].items.length * 100}%"></i></div><small>${doneN(k)} / ${SECS[k].items.length}</small></a>`).join('')}</div>
  <section class="frame" style="margin-top:18px"><h2>ذكر مختار</h2><p class="quote" style="font-size:${Math.min(S.set.fs, 28)}px">${f.t.split('\n')[0]}</p><p class="src">${f.src}</p><p style="text-align:center;margin-top:10px"><a class="btn alt" href="#/s/${fk}/${fi}">افتح الذكر</a></p></section>`;
}
function viewSec(k) {
  const s = SECS[k]; if (!s) return viewNF();
  return `<h1>${s.title}</h1><p>${s.sub}</p><section class="frame list">${s.items.map((x, i) => `<a href="#/s/${k}/${i}"><b>${i + 1}</b><span>${N(x.t).slice(0, 34)}…</span>${isDone(k, i) ? '<span class="ck">تم ✓</span>' : ''}</a>`).join('')}</section>
  <p style="text-align:center"><a class="btn" href="#/s/${k}/0">ابدأ القراءة</a></p>`;
}
let R = {};
function viewRead(k, i) {
  const it = item(k, i); if (!it) return viewNF();
  R = { k, i }; S.last = { s: k, i }; save();
  const n = SECS[k].items.length, c = it.c, fav = S.fav.includes(id(k, i)), dn = isDone(k, i);
  const pct = c ? 1 - left(k, i) / c : (dn ? 1 : 0);
  return `<section class="read"><div class="meta"><a class="btn alt" href="#/s/${k}">${SECS[k].title}</a><b>${i + 1} / ${n}</b></div>
  <article class="frame card ${dn ? 'done' : ''}" id="card"><div class="txt" style="font-size:${S.set.fs}px">${it.t}</div>
  <p class="src">${it.src}${it.g ? '<br>الدرجة: ' + it.g : ''}</p>${it.n ? `<p class="note">${it.n}</p>` : ''}</article>
  <div class="ringbox"><button class="ring" id="tap" aria-label="${c ? 'سبّح' : 'تم الذكر'}">${ring(pct, true)}<span id="num">${c ? left(k, i) : '✓'}</span></button></div>
  ${c ? '' : '<p class="src" style="border:0">لم يثبت عدد معيّن، اضغط الدائرة عند الفراغ من الذكر.</p>'}
  <div class="tools"><button class="btn alt" id="b-prev" ${i === 0 ? 'disabled style="opacity:.4"' : ''} aria-label="السابق">${ic('prev')}</button>
  <button class="btn alt" id="b-reset" aria-label="إعادة العداد">${ic('reset')}</button>
  <button class="btn alt ${fav ? 'on' : ''}" id="b-fav" aria-label="مفضلة">${ic('heart')}</button>
  <button class="btn alt" id="b-copy" aria-label="نسخ">${ic('copy')}</button>
  <button class="btn alt" id="b-share" aria-label="مشاركة">${ic('share')}</button>
  <button class="btn alt" id="b-next" ${i === n - 1 ? 'disabled style="opacity:.4"' : ''} aria-label="التالي">${ic('next')}</button></div></section>`;
}
function bindRead() {
  const { k, i } = R, it = item(k, i), go = j => { location.hash = `#/s/${k}/${j}`; };
  const tap = e => {
    if (isDone(k, i) && it.c) return toast('اكتمل هذا الذكر، انتقل للتالي');
    if (it.c) { S.cnt[D][id(k, i)] = left(k, i) - 1; $('#num').textContent = left(k, i); $('#pg').style.strokeDashoffset = C * (left(k, i) / it.c); buzz(15); }
    if (!it.c || left(k, i) <= 0) {
      S.done[D][id(k, i)] = 1; $('#card').classList.add('done'); if (!it.c) $('#pg').style.strokeDashoffset = 0; buzz([30, 40, 30]);
      const last = i === SECS[k].items.length - 1; toast(last ? 'أتممتَ ' + SECS[k].title + '، تقبّل الله' : 'أحسنت، تم الذكر');
      if (!last) setTimeout(() => { if (R.k === k && R.i === i) go(i + 1); }, 900);
    }
    save();
  };
  $('#card').onclick = tap; $('#tap').onclick = e => { e.stopPropagation(); tap(); };
  $('#b-next').onclick = () => go(i + 1); $('#b-prev').onclick = () => go(i - 1);
  $('#b-reset').onclick = () => { delete S.cnt[D][id(k, i)]; delete S.done[D][id(k, i)]; save(); route(); toast('أُعيد العداد'); };
  $('#b-fav').onclick = e => { toggleFav(id(k, i)); e.currentTarget.classList.toggle('on'); };
  $('#b-copy').onclick = () => copy(plain(it)); $('#b-share').onclick = () => share(it);
}
function listItems(arr, empty) {
  return arr.length ? `<section class="frame list">${arr.map(([k, i]) => `<a href="#/s/${k}/${i}"><span>${N(item(k, i).t).slice(0, 40)}…</span><small class="ck" style="font-weight:400">${SECS[k].title}</small></a>`).join('')}</section>` : `<div class="empty">${empty}</div>`;
}
function viewFav() {
  const a = S.fav.map(x => x.split(':')).filter(([k, i]) => item(k, +i)).map(([k, i]) => [k, +i]);
  return `<h1>المفضلة</h1>` + listItems(a, 'لا توجد أذكار مفضلة بعد.<br>اضغط رمز القلب في أي ذكر لإضافته هنا.');
}
function viewSearch() { return `<h1>بحث</h1><input type="search" id="q" placeholder="اكتب كلمة من الذكر…" aria-label="بحث" autocomplete="off"><div id="res"></div>`; }
function bindSearch() {
  const q = $('#q'), r = $('#res'), run = () => {
    const v = N(q.value.trim()); if (!v) { r.innerHTML = '<div class="empty">ابحث في جميع الأذكار.</div>'; return; }
    const a = []; KEYS.forEach(k => SECS[k].items.forEach((x, i) => { if (N(x.t).includes(v)) a.push([k, i]); }));
    r.innerHTML = listItems(a, 'لا توجد نتائج مطابقة.');
  }; q.oninput = run; run();
}
function viewSet() {
  const sw = (idn, on, lbl) => `<div class="row"><span>${lbl}</span><button class="sw" id="${idn}" role="switch" aria-checked="${on}" aria-label="${lbl}"></button></div>`;
  return `<h1>الإعدادات</h1><section class="frame"><div class="row"><span>حجم الخط: <b id="fsv">${S.set.fs}</b></span><input type="range" id="fs" min="22" max="44" value="${S.set.fs}" style="max-width:55%" aria-label="حجم الخط"></div>
  <p class="quote" id="prev" style="font-size:${S.set.fs}px">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
  ${sw('vib', S.set.vib, 'الاهتزاز عند النقر')}${sw('calm', S.set.calm, 'وضع القراءة الهادئ')}
  <div class="row" style="border:0"><span>مسح تقدّم اليوم</span><button class="btn alt" id="rst">مسح</button></div></section>`;
}
function bindSet() {
  $('#fs').oninput = e => { S.set.fs = +e.target.value; $('#fsv').textContent = S.set.fs; $('#prev').style.fontSize = S.set.fs + 'px'; save(); };
  $('#vib').onclick = e => { S.set.vib = !S.set.vib; e.currentTarget.setAttribute('aria-checked', S.set.vib); save(); buzz(30); };
  $('#calm').onclick = e => { S.set.calm = !S.set.calm; e.currentTarget.setAttribute('aria-checked', S.set.calm); document.body.classList.toggle('calm', S.set.calm); save(); };
  $('#rst').onclick = () => { if (confirm('مسح تقدّم اليوم؟')) { S.cnt[D] = {}; S.done[D] = {}; S.last = null; save(); toast('تم المسح'); } };
}
function viewAbout() {
  return `<h1>عن المشروع</h1><section class="frame"><p>«أذكار المسلم» تطبيق ويب مجاني يعمل دون خادم، ويحفظ تقدّمك على جهازك فقط.</p>
  <h2>المصادر</h2><p>صحيح البخاري، صحيح مسلم، سنن أبي داود، جامع الترمذي، وعمل اليوم والليلة للنسائي. يُذكر مع كل ذكر مصدره ورقمه ودرجته، وما لم يثبت له عدد محدد لا يُفرض له عدد.</p>
  <div class="warn">الرقية الشرعية دعاء وتوكل ولا تغني عن العلاج الطبي ولا تضمن الشفاء. أرقام الأحاديث وأحكامها مأخوذة من الذاكرة ويُنصح بمراجعتها في كتب التخريج المعتمدة قبل النشر العام.</div></section>`;
}
const viewNF = () => '<div class="empty">الصفحة غير موجودة.<br><a class="btn" href="#/">الرئيسية</a></div>';

/* ===== التوجيه ===== */
const NAV = [['#/', 'home', 'الرئيسية'], ['#/fav', 'heart', 'المفضلة'], ['#/search', 'search', 'بحث'], ['#/set', 'set', 'الإعدادات'], ['#/about', 'info', 'عن']];
function route() {
  const p = (location.hash || '#/').split('/').slice(1); let h, b;
  try {
    if (!p[0]) h = viewHome();
    else if (p[0] === 's') h = p[2] !== undefined ? (b = bindRead, viewRead(p[1], +p[2])) : viewSec(p[1]);
    else if (p[0] === 'fav') h = viewFav();
    else if (p[0] === 'search') { h = viewSearch(); b = bindSearch; }
    else if (p[0] === 'set') { h = viewSet(); b = bindSet; }
    else if (p[0] === 'about') h = viewAbout();
    else h = viewNF();
    if (b === bindRead && !item(p[1], +p[2])) b = null;
  } catch (e) { h = '<div class="empty">حدث خطأ غير متوقع.</div>'; b = null; }
  app.innerHTML = h; if (b) b();
  const cur = '#/' + (p[0] === 's' ? '' : p[0] || '');
  $('#nav').innerHTML = NAV.map(([hr, ico, l]) => `<a href="${hr}" class="${hr === cur || (hr === '#/' && p[0] === 's') ? 'on' : ''}">${ic(ico)}<span>${l}</span></a>`).join('');
  if (!(p[0] === 's' && p[2] !== undefined && +p[2] > 0)) window.scrollTo(0, 0);
}
document.body.classList.toggle('calm', !!S.set.calm);
window.addEventListener('hashchange', route);
route();
})();
