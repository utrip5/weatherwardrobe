# Architecture

Browser/PWA
  ├─ UI
  ├─ Recommendation engine
  ├─ Local wardrobe
  ├─ Local preferences
  └─ Weather API client
        ├─ Open-Meteo forecast
        └─ Open-Meteo geocoding

No API secret is embedded in the client.

Recommendation model:
1. Effective temperature = feels-like adjusted by user cold sensitivity.
2. Select base layer.
3. Add mid-layer only when genuinely cool.
4. Add outerwear only when temperature/wind/precipitation requires it.
5. Select shoes using snow/rain/activity.
6. Add UV/wind/rain accessories conditionally.
7. Rank alternatives by compatibility score.

The algorithm intentionally penalizes warm layers in hot weather.
