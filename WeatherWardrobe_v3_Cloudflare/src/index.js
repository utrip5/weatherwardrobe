const GEO="https://geocoding-api.open-meteo.com/v1/search";
const WX="https://api.open-meteo.com/v1/forecast";
const json=(x,s=200)=>new Response(JSON.stringify(x),{status:s,headers:{"content-type":"application/json;charset=utf-8","cache-control":"public,max-age=60","x-content-type-options":"nosniff","referrer-policy":"strict-origin-when-cross-origin"}});
const valid=(v,a,b)=>{const n=Number(v);return Number.isFinite(n)&&n>=a&&n<=b};
export default {async fetch(req,env){
 const u=new URL(req.url);
 if(u.pathname==="/api/geocode"){
  const name=(u.searchParams.get("name")||"").trim();
  if(name.length<2||name.length>80)return json({error:"invalid city"},400);
  const q=new URL(GEO); q.searchParams.set("name",name); q.searchParams.set("count","8"); q.searchParams.set("format","json"); q.searchParams.set("language",u.searchParams.get("language")==="en"?"en":"ru");
  try{const r=await fetch(q,{headers:{"user-agent":"WeatherWardrobe/3.0"}}); if(!r.ok)return json({error:"geocoder unavailable"},502); const d=await r.json();
   return json({results:(d.results||[]).map(x=>({id:x.id,name:x.name,latitude:x.latitude,longitude:x.longitude,country:x.country||"",countryCode:x.country_code||"",admin1:x.admin1||"",timezone:x.timezone||"auto",population:x.population||0}))});
  }catch{return json({error:"upstream error"},502)}
 }
 if(u.pathname==="/api/weather"){
  const lat=u.searchParams.get("latitude"),lon=u.searchParams.get("longitude");
  if(!valid(lat,-90,90)||!valid(lon,-180,180))return json({error:"invalid coordinates"},400);
  const q=new URL(WX); q.searchParams.set("latitude",lat); q.searchParams.set("longitude",lon); q.searchParams.set("timezone","auto"); q.searchParams.set("forecast_days","7");
  q.searchParams.set("current","temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m,is_day");
  q.searchParams.set("hourly","temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m,uv_index,visibility");
  q.searchParams.set("daily","weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,rain_sum,snowfall_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant");
  try{const r=await fetch(q,{cf:{cacheTtl:300,cacheEverything:true},headers:{"user-agent":"WeatherWardrobe/3.0"}}); if(!r.ok)return json({error:"weather unavailable"},502); return json(await r.json())}
  catch{return json({error:"upstream error"},502)}
 }
 return env.ASSETS.fetch(req);
}};