'use strict';

const I18N={
ru:{loading:'Загружаем погоду…',errorTitle:'Не удалось загрузить данные',retry:'Повторить',humidity:'Влажность',rain:'Осадки',clouds:'Облачность',changeCity:'Изменить город',bestOutfit:'Лучший образ',alternatives:'Другие варианты',forecast:'Прогноз',myWardrobe:'Мой гардероб',add:'Добавить',today:'Сегодня',wardrobe:'Гардероб',settings:'Настройки',cityTitle:'Выберите город',cancel:'Отмена',addClothing:'Добавить вещь',save:'Сохранить',language:'Язык',gender:'Пол',units:'Единицы',temperatureFeel:'Как вы ощущаете холод',activity:'Активность',location:'Местоположение',useGPS:'Использовать GPS',privacy:'Настройки и гардероб хранятся на устройстве. API-ключи в браузер не встраиваются.',feels:'Ощущается',why:'Почему этот комплект',next:'Что надеть',clear:'Ясно',rainy:'Осадки',windy:'Ветер',uvHigh:'Высокий UV',tooWarm:'Слишком тепло для',weatherFor:'Погода на',remove:'Удалить',noClothes:'Добавьте свои вещи — они будут учитываться в персональных рекомендациях.'},
en:{loading:'Loading weather…',errorTitle:'Could not load data',retry:'Retry',humidity:'Humidity',rain:'Rain',clouds:'Cloud cover',changeCity:'Change city',bestOutfit:'Best outfit',alternatives:'Alternatives',forecast:'Forecast',myWardrobe:'My wardrobe',add:'Add',today:'Today',wardrobe:'Wardrobe',settings:'Settings',cityTitle:'Choose a city',cancel:'Cancel',addClothing:'Add clothing',save:'Save',language:'Language',gender:'Gender',units:'Units',temperatureFeel:'Cold sensitivity',activity:'Activity',location:'Location',useGPS:'Use GPS',privacy:'Settings and wardrobe stay on your device. No API keys are embedded in the browser.',feels:'Feels like',why:'Why this outfit',next:'What to wear',clear:'Clear',rainy:'Precipitation',windy:'Wind',uvHigh:'High UV',tooWarm:'Too warm for',weatherFor:'Weather for',remove:'Remove',noClothes:'Add your clothes to include them in personalized recommendations.'}
};

const CATALOG=[
['tshirt','Футболка','T-shirt','top',1,0,0,1,15,32,'👕','all'],
['tank','Майка','Tank top','top',.5,0,0,1,20,35,'🎽','all'],
['polo','Поло','Polo','top',1,0,0,1,17,31,'👕','all'],
['shirt','Рубашка','Shirt','top',1.5,.5,0,1,13,28,'👔','all'],
['linen','Льняная рубашка','Linen shirt','top',1,.5,0,1,18,34,'👔','all'],
['long','Лонгслив','Long-sleeve','top',2,1,0,1,10,24,'👕','all'],
['thermal','Термобельё','Thermal top','top',4,1,0,0,-10,8,'🧦','all'],
['blouse','Блузка','Blouse','top',1,.2,0,1,15,29,'👚','female'],
['hoodie','Худи','Hoodie','mid',3,1.5,.5,0,6,19,'🧥','all'],
['cardigan','Кардиган','Cardigan','mid',2.5,1,0,0,8,19,'🧶','all'],
['sweater','Свитер','Sweater','mid',3.5,1,0,0,2,15,'🧶','all'],
['fleece','Флиска','Fleece','mid',3.5,2,.5,0,0,14,'🧥','all'],
['vest','Утеплённый жилет','Insulated vest','mid',3,3,1,0,0,13,'🦺','all'],
['jacket','Лёгкая куртка','Light jacket','outer',2.5,3.5,2,1,5,18,'🧥','all'],
['windbreaker','Ветровка','Windbreaker','outer',2,5,2.5,1,7,20,'🧥','all'],
['raincoat','Дождевик','Rain jacket','outer',1.5,4,5,1,7,22,'🌧️','all'],
['trench','Тренч','Trench coat','outer',2.5,3,3,0,6,17,'🧥','all'],
['coat','Пальто','Coat','outer',4,3.5,2,0,-2,12,'🧥','all'],
['woolcoat','Шерстяное пальто','Wool coat','outer',4.5,3,1,0,-4,10,'🧥','all'],
['puffer','Пуховик','Puffer','outer',5,5,3,0,-25,7,'🧥','all'],
['winter','Зимняя куртка','Winter jacket','outer',5,5,4,0,-25,4,'🧥','all'],
['blazer','Пиджак','Blazer','outer',2,1,.5,0,10,22,'🧥','all'],
['jeans','Джинсы','Jeans','bottom',2,1,.5,1,7,25,'👖','all'],
['pants','Брюки','Trousers','bottom',1.5,.5,.5,1,12,30,'👖','all'],
['chinos','Чиносы','Chinos','bottom',1.3,.5,.5,1,12,30,'👖','all'],
['linenpants','Льняные брюки','Linen trousers','bottom',.7,0,.2,1,19,35,'👖','all'],
['sweatpants','Спортивные штаны','Sweatpants','bottom',2.5,1,0,0,4,20,'👖','all'],
['leggings','Легинсы','Leggings','bottom',1.5,.5,0,1,10,28,'🩳','female'],
['skirt','Юбка','Skirt','bottom',.7,0,0,1,18,32,'👗','female'],
['shorts','Шорты','Shorts','bottom',.5,0,0,1,20,35,'🩳','all'],
['sneakers','Кроссовки','Sneakers','shoes',1,.5,1,0,8,30,'👟','all'],
['trainers','Лёгкие кеды','Canvas trainers','shoes',.5,0,.5,0,15,32,'👟','all'],
['running','Беговые кроссовки','Running shoes','shoes',.5,.5,1,0,10,30,'👟','all'],
['trail','Трейловые кроссовки','Trail shoes','shoes',1,1,2,0,5,25,'🥾','all'],
['loafers','Лоферы','Loafers','shoes',1,0,.5,0,12,27,'👞','all'],
['oxfords','Классические туфли','Oxford shoes','shoes',1,0,.5,0,10,24,'👞','all'],
['flats','Балетки','Flats','shoes',.7,0,.5,0,15,30,'🥿','female'],
['heels','Туфли','Heels','shoes',.8,0,.3,0,15,30,'👠','female'],
['sandals','Сандалии','Sandals','shoes',.2,0,0,0,22,35,'🩴','all'],
['boots','Ботинки','Boots','shoes',2.5,2,2.5,0,-5,18,'🥾','all'],
['chelsea','Челси','Chelsea boots','shoes',2,2,2,0,0,17,'🥾','all'],
['hiking','Треккинговые ботинки','Hiking boots','shoes',3,3,3,0,-5,15,'🥾','all'],
['winterboots','Зимние ботинки','Winter boots','shoes',4,4,3,0,-25,7,'🥾','all'],
['snowboots','Сапоги для снега','Snow boots','shoes',5,5,5,0,-25,4,'🥾','all'],
['cap','Кепка','Cap','accessory',0,.5,0,3,15,35,'🧢','all'],
['bucket','Панама','Bucket hat','accessory',0,.2,0,4,18,35,'👒','all'],
['beanie','Шапка','Beanie','accessory',3,2,.5,0,-25,10,'🧢','all'],
['scarf','Шарф','Scarf','accessory',2.5,2,0,0,-15,10,'🧣','all'],
['gloves','Перчатки','Gloves','accessory',3,3,1,0,-15,8,'🧤','all'],
['sunglasses','Солнечные очки','Sunglasses','accessory',0,0,0,5,12,35,'🕶️','all'],
['umbrella','Зонт','Umbrella','accessory',0,0,5,0,0,35,'☂️','all']
].map(x=>({id:x[0],ru:x[1],en:x[2],cat:x[3],warmth:x[4],wind:x[5],rain:x[6],sun:x[7],min:x[8],max:x[9],emoji:x[10],gender:x[11]}));

const CAT_LABEL={top:['Верх','Tops'],mid:['Средний слой','Mid layer'],outer:['Верхняя одежда','Outerwear'],bottom:['Низ','Bottom'],shoes:['Обувь','Shoes'],accessory:['Аксессуар','Accessory']};

const state={
 lang:localStorage.getItem('ww_lang')||'ru',
 gender:localStorage.getItem('ww_gender')||'unisex',
 units:localStorage.getItem('ww_units')||'metric',
 feel:localStorage.getItem('ww_feel')||'normal',
 activity:localStorage.getItem('ww_activity')||'walk',
 lat:parseFloat(localStorage.getItem('ww_lat')||'50.1109'),
 lon:parseFloat(localStorage.getItem('ww_lon')||'8.6821'),
 city:localStorage.getItem('ww_city')||'Frankfurt',
 weather:null,
 wardrobe:loadWardrobe()
};

function loadWardrobe(){try{const x=JSON.parse(localStorage.getItem('ww_wardrobe')||'[]');return Array.isArray(x)?x.filter(v=>v&&typeof v.name==='string').slice(0,100):[]}catch{return[]}}
function tr(k){return I18N[state.lang][k]||k}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function itemName(c){return state.lang==='ru'?c.ru:c.en}
function saveState(){localStorage.setItem('ww_lang',state.lang);localStorage.setItem('ww_gender',state.gender);localStorage.setItem('ww_units',state.units);localStorage.setItem('ww_feel',state.feel);localStorage.setItem('ww_activity',state.activity);localStorage.setItem('ww_lat',String(state.lat));localStorage.setItem('ww_lon',String(state.lon));localStorage.setItem('ww_city',state.city)}
function applyLang(){document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=tr(e.dataset.i18n));document.documentElement.lang=state.lang}
function show(id){document.getElementById(id).classList.remove('hidden')}function hide(id){document.getElementById(id).classList.add('hidden')}
function setTab(tab){document.querySelectorAll('.tab-page').forEach(e=>e.classList.add('hidden'));show(tab+'Tab');document.querySelectorAll('.nav-item').forEach(e=>e.classList.toggle('active',e.dataset.tab===tab));if(tab==='today')renderToday();if(tab==='forecast')renderForecast();if(tab==='wardrobe')renderWardrobe()}
function effectiveTemp(w){let t=w.apparent_temperature; if(state.feel==='cold')t-=2;if(state.feel==='hot')t+=2;return t}
function compatible(c){return c.gender==='all'||c.gender===state.gender||state.gender==='unisex'}
function scoreItem(c,w){
 const t=effectiveTemp(w); let s=55;
 if(t>=c.min&&t<=c.max)s+=25; else s-=Math.min(35,Math.abs(t-(t<c.min?c.min:c.max))*2.2);
 if(w.wind_speed_10m>=25)s+=c.wind*4; else if(w.wind_speed_10m>=15)s+=c.wind*1.8;
 if(w.wind_gusts_10m>=40)s+=c.wind*2;
 if(w.precipitation_probability>=45||w.rain>0.2)s+=c.rain*4;
 if(w.uv_index>=5)s+=c.sun*2;
 if(w.snowfall>0)s+=c.rain*2+c.warmth*2;
 if(t>25 && c.warmth>=3)s-=28;
 if(t>28 && c.warmth>=2)s-=20;
 return s;
}
function pool(cat){return CATALOG.filter(c=>c.cat===cat&&compatible(c))}
function best(cat,w,rank=0){
 let arr=pool(cat).sort((a,b)=>scoreItem(b,w)-scoreItem(a,w));
 return arr[rank]||arr[0];
}
function recommendation(w,rank=0){
 const t=effectiveTemp(w), out=[];
 // Base layer: deliberately no warm layers at hot temperatures.
 if(t>=27) out.push(best('top',w,rank));
 else if(t>=21) out.push(best('top',w,rank));
 else if(t>=15){out.push(best('top',w,rank));}
 else {out.push(best('top',w,rank));out.push(best('mid',w,rank));}
 // Mid layer only in cool weather, never as an automatic choice at 22+.
 if(t<15 && t>7) { const m=best('mid',w,rank); if(m&&!out.some(x=>x.id===m.id))out.push(m); }
 // Outerwear only when genuinely useful.
 const needsOuter=t<=12 || w.wind_speed_10m>=28 || w.wind_gusts_10m>=45 || w.precipitation_probability>=55 || w.rain>0.5 || w.snowfall>0.1;
 if(needsOuter){
   let o;
   if(w.snowfall>0.1||t<=3)o=best('outer',w,rank);
   else if(w.precipitation_probability>=55||w.rain>0.5)o=CATALOG.find(c=>c.id==='raincoat'&&compatible(c))||best('outer',w,rank);
   else o=best('outer',w,rank);
   if(o&&!out.some(x=>x.id===o.id))out.push(o);
 }
 out.push(best('bottom',w,rank));
 // Shoe choice is weather/activity aware.
 let shoes;
 if(w.snowfall>0.1||t<=0)shoes=CATALOG.find(c=>c.id==='snowboots'&&compatible(c))||best('shoes',w,rank);
 else if(w.rain>0.5||w.precipitation_probability>=55)shoes=CATALOG.find(c=>c.id==='boots'&&compatible(c))||best('shoes',w,rank);
 else if(state.activity==='sport')shoes=CATALOG.find(c=>c.id==='running'&&compatible(c))||best('shoes',w,rank);
 else shoes=best('shoes',w,rank);
 if(shoes)out.push(shoes);
 // Accessories are conditional.
 if(w.uv_index>=6&&t>=18)out.push(CATALOG.find(c=>c.id==='sunglasses'));
 if(w.uv_index>=7&&t>=20)out.push(CATALOG.find(c=>c.id==='cap'||c.id==='bucket'));
 if(t<=8)out.push(CATALOG.find(c=>c.id==='scarf'));
 if(t<=5)out.push(CATALOG.find(c=>c.id==='gloves'));
 if((w.precipitation_probability>=45||w.rain>0.2)&&w.wind_speed_10m<35)out.push(CATALOG.find(c=>c.id==='umbrella'));
 return out.filter(Boolean).filter((v,i,a)=>a.findIndex(x=>x.id===v.id)===i);
}
function outfitScore(items,w){return Math.max(1,Math.min(99,Math.round(items.reduce((a,c)=>a+scoreItem(c,w),0)/items.length)))}
function icon(code,day=true){if(code===0)return day?'☀️':'🌙';if([1,2,3].includes(code))return'⛅';if([45,48].includes(code))return'🌫️';if([51,53,55,61,63,65,80,81,82].includes(code))return'🌧️';if([71,73,75,77,85,86].includes(code))return'❄️';if([95,96,99].includes(code))return'⛈️';return'☁️'}
function windDir(d){const a=state.lang==='ru'?['С','СВ','В','ЮВ','Ю','ЮЗ','З','СЗ']:['N','NE','E','SE','S','SW','W','NW'];return a[Math.round(d/45)%8]}
function celsius(v){return state.units==='metric'?Math.round(v)+'°':Math.round(v*9/5+32)+'°'}
function speed(v){return state.units==='metric'?Math.round(v)+' km/h':Math.round(v*.621371)+' mph'}
function weatherObjectFromHourly(i){
 const c=state.weather.current,h=state.weather.hourly;
 return {temperature:h.temperature_2m[i],apparent_temperature:h.apparent_temperature[i],precipitation_probability:h.precipitation_probability[i]||0,uv_index:h.uv_index[i]||0,rain:h.rain[i]||0,snowfall:h.snowfall[i]||0,wind_speed_10m:c.wind_speed_10m,wind_gusts_10m:c.wind_gusts_10m,weather_code:h.weather_code[i]};
}
async function fetchWeather(){
 hide('todayTab');hide('forecastTab');hide('wardrobeTab');hide('settingsTab');show('loading');hide('error');
 const u=new URL('https://api.open-meteo.com/v1/forecast');
 u.searchParams.set('latitude',state.lat);u.searchParams.set('longitude',state.lon);
 u.searchParams.set('current','temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,snowfall,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m,weather_code,is_day');
 u.searchParams.set('hourly','temperature_2m,apparent_temperature,precipitation_probability,uv_index,rain,snowfall,weather_code,wind_speed_10m,wind_direction_10m');
 u.searchParams.set('daily','temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,weather_code,precipitation_probability_max,rain_sum,snowfall_sum,uv_index_max,sunrise,sunset');
 u.searchParams.set('forecast_days','7');u.searchParams.set('timezone','auto');u.searchParams.set('wind_speed_unit','kmh');
 try{const r=await fetch(u,{cache:'no-store'});if(!r.ok)throw new Error('HTTP '+r.status);const d=await r.json();if(!d.current||!d.daily)throw new Error('Invalid weather response');state.weather=d;hide('loading');renderAll();setTab('today')}catch(e){hide('loading');document.getElementById('errorText').textContent=(state.lang==='ru'?'Ошибка загрузки: ':'Loading error: ')+esc(e.message);show('error')}}
function renderAll(){document.getElementById('cityLabel').textContent=state.city;document.getElementById('forecastCity').textContent=state.city;renderToday();renderForecast();renderWardrobe()}
function reason(w){
 const a=[];const t=effectiveTemp(w);
 if(t>=27)a.push(state.lang==='ru'?'жаркая погода — без тёплых слоёв':'hot weather — no warm layers');
 else if(t<=8)a.push(state.lang==='ru'?'низкая ощущаемая температура':'low feels-like temperature');
 if(w.wind_speed_10m>=20)a.push(state.lang==='ru'?'сильный ветер':'strong wind');
 if(w.precipitation_probability>=45||w.rain>0.2)a.push(state.lang==='ru'?'риск осадков':'precipitation risk');
 if(w.uv_index>=6)a.push(state.lang==='ru'?'высокий UV':'high UV');
 if(w.snowfall>0)a.push(state.lang==='ru'?'снег':'snow');
 return a.join(', ');
}
function chip(c){return `<div class="clothing-chip"><span class="emoji">${c.emoji}</span><b>${esc(itemName(c))}</b></div>`}
function renderToday(){
 if(!state.weather)return;
 const c=state.weather.current,h=state.weather.hourly,w={...c,precipitation_probability:h.precipitation_probability[0]||0,uv_index:h.uv_index[0]||0};
 const bestOut=recommendation(w,0), alts=[recommendation(w,1),recommendation(w,2)];
 document.getElementById('todayContent').innerHTML=`
 <section class="weather-card">
  <div class="weather-main"><div><div class="condition-icon">${icon(c.weather_code,c.is_day===1)}</div><div class="temperature">${celsius(c.temperature_2m)}</div><div class="feels">${tr('feels')} ${celsius(c.apparent_temperature)}</div></div>
  <div class="weather-meta"><div><span>${tr('humidity')}</span><b>${c.relative_humidity_2m}%</b></div><div><span>${tr('rain')}</span><b>${Math.round(w.precipitation_probability)}%</b></div><div><span>UV</span><b>${(w.uv_index||0).toFixed(1)}</b></div><div><span>${tr('clouds')}</span><b>${c.cloud_cover}%</b></div></div></div>
  <div class="metrics"><span>💨 ${speed(c.wind_speed_10m)}</span><span>🌪️ ${speed(c.wind_gusts_10m)}</span><span>🧭 ${windDir(c.wind_direction_10m)}</span></div>
  <button class="ghost" id="cityBtn">📍 ${esc(tr('changeCity'))}</button>
 </section>
 <div class="section-head"><h2>${tr('bestOutfit')}</h2><span class="score">${outfitScore(bestOut,w)}%</span></div>
 <div class="outfit-card">${bestOut.map(chip).join('')}</div>
 <div class="explanation"><b>${tr('why')}:</b> ${esc(reason(w)||tr('clear'))}.</div>
 <div class="section-head"><h2>${tr('alternatives')}</h2></div>
 ${alts.map((a,i)=>`<div class="alt"><div class="alt-score">${outfitScore(a,w)-i*3}%</div><div class="alt-text">${a.map(itemName).map(esc).join(' • ')}</div></div>`).join('')}
 <div class="section-head"><h2>${tr('forecast')}</h2><button class="small-primary" id="openForecast">${tr('forecast')}</button></div>`;
 document.getElementById('cityBtn').onclick=()=>document.getElementById('cityDialog').showModal();
 document.getElementById('openForecast').onclick=()=>setTab('forecast');
}
function renderForecast(){
 if(!state.weather)return;const d=state.weather.daily,h=state.weather.hourly;
 const dates=d.time.map(x=>new Date(x+'T12:00:00'));
 let html='';
 for(let i=0;i<d.time.length;i++){
   const idx=h.time.findIndex(x=>x.startsWith(d.time[i]));const w={temperature:d.apparent_temperature_max[i],apparent_temperature:d.apparent_temperature_max[i],precipitation_probability:d.precipitation_probability_max[i]||0,uv_index:d.uv_index_max[i]||0,rain:d.rain_sum[i]||0,snowfall:d.snowfall_sum[i]||0,wind_speed_10m:idx>=0?h.wind_speed_10m[idx]:0,wind_gusts_10m:state.weather.current.wind_gusts_10m,weather_code:d.weather_code[i]};
   const out=recommendation(w,0);
   const dayName=dates[i].toLocaleDateString(state.lang==='ru'?'ru-RU':'en-US',{weekday:'long',day:'numeric',month:'long'});
   html+=`<article class="forecast-day"><div class="forecast-day-head"><h3>${esc(dayName)}</h3><span>${icon(d.weather_code[i],true)}</span></div><div class="forecast-weather"><span class="big">${icon(d.weather_code[i],true)}</span><b>${celsius(d.temperature_2m_max[i])}</b><span>${celsius(d.temperature_2m_min[i])}</span><span>☔ ${d.precipitation_probability_max[i]}%</span><span>UV ${d.uv_index_max[i].toFixed(1)}</span></div><div><b>${tr('next')}:</b></div><div class="forecast-outfit">${out.map(c=>`<span class="mini-chip">${c.emoji} ${esc(itemName(c))}</span>`).join('')}</div>`;
   if(i===0&&idx>=0){html+='<div class="hourly">';for(let j=idx;j<Math.min(idx+8,h.time.length);j++){const hw=weatherObjectFromHourly(j);const hh=new Date(h.time[j]).getHours();const ho=recommendation(hw,0);html+=`<div class="hour"><small>${String(hh).padStart(2,'0')}:00</small><div>${icon(h.weather_code[j],true)}</div><b>${celsius(h.temperature_2m[j])}</b><small>☔ ${h.precipitation_probability[j]}%</small><div>${ho.slice(0,3).map(c=>c.emoji).join('')}</div></div>`}html+='</div>'}
   html+='</article>';
 }
 document.getElementById('forecastContent').innerHTML=html;
}
function renderWardrobe(){
 const el=document.getElementById('wardrobeContent');
 if(!state.wardrobe.length){el.innerHTML=`<p class="muted">${tr('noClothes')}</p>`;return}
 el.innerHTML='<div class="wardrobe-grid">'+state.wardrobe.map((x,i)=>`<div class="wardrobe-item">${x.photo?`<img src="${x.photo}" alt="">`:`<div class="wardrobe-placeholder">👕</div>`}<div class="wardrobe-name">${esc(x.name)} <button aria-label="${tr('remove')}" title="${tr('remove')}" data-remove="${i}" style="float:right;background:none">×</button></div></div>`).join('')+'</div>';
 el.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{state.wardrobe.splice(Number(b.dataset.remove),1);localStorage.setItem('ww_wardrobe',JSON.stringify(state.wardrobe));renderWardrobe()});
}
function fillCategory(){document.getElementById('clothesCategory').innerHTML=Object.entries(CAT_LABEL).map(([k,v])=>`<option value="${k}">${v[state.lang==='ru'?0:1]}</option>`).join('')}
async function geolocate(){if(!navigator.geolocation){alert('Geolocation unsupported');return}navigator.geolocation.getCurrentPosition(async p=>{state.lat=p.coords.latitude;state.lon=p.coords.longitude;state.city=state.lang==='ru'?'Моё местоположение':'My location';saveState();await fetchWeather()},()=>alert(state.lang==='ru'?'Не удалось получить GPS. Разрешите доступ к геолокации.':'GPS access denied.'))}
async function searchCity(){const q=document.getElementById('cityInput').value.trim();if(q.length<2)return;const u=new URL('https://geocoding-api.open-meteo.com/v1/search');u.searchParams.set('name',q);u.searchParams.set('count','6');u.searchParams.set('language',state.lang);u.searchParams.set('format','json');try{const r=await fetch(u);const d=await r.json();const box=document.getElementById('cityResults');box.innerHTML='';(d.results||[]).forEach(x=>{const b=document.createElement('button');b.type='button';b.textContent=`${x.name}${x.country?' — '+x.country:''}`;b.onclick=()=>{state.lat=x.latitude;state.lon=x.longitude;state.city=x.name+(x.country?', '+x.country:'');saveState();document.getElementById('cityDialog').close();fetchWeather()};box.appendChild(b)})}catch{}}
function fileToDataURL(file){return new Promise((resolve,reject)=>{if(!file||file.size>5*1024*1024)return reject(new Error('file too large'));const fr=new FileReader();fr.onload=()=>resolve(String(fr.result));fr.onerror=reject;fr.readAsDataURL(file)})}
function bind(){
 applyLang();fillCategory();
 document.getElementById('locationBtn').onclick=geolocate;document.getElementById('useLocation').onclick=geolocate;document.getElementById('retryBtn').onclick=fetchWeather;
 document.getElementById('cityInput').addEventListener('input',()=>{clearTimeout(window.cityTimer);window.cityTimer=setTimeout(searchCity,350)});
 document.getElementById('addClothesBtn').onclick=()=>document.getElementById('clothesDialog').showModal();document.getElementById('closeClothes').onclick=()=>document.getElementById('clothesDialog').close();
 document.getElementById('clothesForm').onsubmit=async e=>{e.preventDefault();try{const name=document.getElementById('clothesName').value.trim();if(!name)return;const file=document.getElementById('clothesPhoto').files[0];let photo='';if(file)photo=await fileToDataURL(file);state.wardrobe.push({name:name.slice(0,80),category:document.getElementById('clothesCategory').value,gender:document.getElementById('clothesGender').value,warmth:+document.getElementById('warmth').value,wind:+document.getElementById('windProtection').value,rain:+document.getElementById('rainProtection').value,photo});state.wardrobe=state.wardrobe.slice(-100);localStorage.setItem('ww_wardrobe',JSON.stringify(state.wardrobe));document.getElementById('clothesDialog').close();e.target.reset();renderWardrobe()}catch(err){alert(state.lang==='ru'?'Фото слишком большое (максимум 5 МБ).':'Image is too large (5 MB max).')}};
 document.getElementById('languageSelect').value=state.lang;document.getElementById('genderSelect').value=state.gender;document.getElementById('unitsSelect').value=state.units;document.getElementById('feelSelect').value=state.feel;document.getElementById('activitySelect').value=state.activity;
 document.getElementById('languageSelect').onchange=e=>{state.lang=e.target.value;saveState();applyLang();fillCategory();fetchWeather()};document.getElementById('genderSelect').onchange=e=>{state.gender=e.target.value;saveState();renderAll()};document.getElementById('unitsSelect').onchange=e=>{state.units=e.target.value;saveState();renderAll()};document.getElementById('feelSelect').onchange=e=>{state.feel=e.target.value;saveState();renderAll()};document.getElementById('activitySelect').onchange=e=>{state.activity=e.target.value;saveState();renderAll()};
 document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>setTab(b.dataset.tab));
}
if('serviceWorker' in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
bind();fetchWeather();
