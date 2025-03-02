# 📘 Strona BioAddMed - Next.js

Statyczna strona internetowa naszego koła naukowego oparta na frameworku Next.js.

## 📥 Pobieranie i instalacja

1. **Sklonuj repozytorium**:
   ```sh
   git clone https://github.com/BioAddMed/BioAddMed-Website.git
   cd bioaddmed-website
   ```

2. **Zainstaluj zależności** (po każdym `git pull` warto to powtórzyć, aby mieć najnowsze paczki):
   ```sh
   npm install
   ```
   lub równoważnie:
   ```sh
   npm i
   ```

## 🚀 Uruchamianie projektu

### Tryb deweloperski
Aby uruchomić środowisko deweloperskie z automatycznym odświeżaniem zmian:
   ```sh
   npm run dev
   ```
Po uruchomieniu aplikacja domyslnie będzie dostępna pod adresem: [http://localhost:3000](http://localhost:3000).

### Budowanie i uruchamianie wersji produkcyjnej
1. **Zbudowanie aplikacji**:
   ```sh
   npm run build
   ```
2. **Uruchomienie zbudowanej aplikacji**:
   ```sh
   npm start
   ```

## 🛠 Przydatne komendy

- **Lintowanie kodu**:
  ```sh
  npm run lint
  ```
- **Formatowanie kodu** (jeśli używamy Prettiera):
  ```sh
  npm run format
  ```
- **Testowanie aplikacji** (jeśli testy są zaimplementowane):
  ```sh
  npm test
  ```

## 📌 Struktura projektu

```plaintext
nazwa-repozytorium/
├── public/             # Pliki statyczne (np. obrazy, favicony)
├── src/                # Kod źródłowy aplikacji
|   ├── app/            # Strona główna i inne podstrony
│   ├── components/     # Reużywalne komponenty
|   ├── constants.ts    # Typy wymagane przez Typescript
├── .gitignore          # Pliki ignorowane przez Git
├── package.json        # Informacje o zależnościach i skryptach
├── README.md           # Dokumentacja
```

## 🔧 Dodatkowe informacje

- Jeśli nie masz jeszcze zainstalowanego Node.js, pobierz go z [oficjalnej strony](https://nodejs.org/).
- Zalecana wersja Node.js: **LTS (Long Term Support)**.
- Jeśli coś nie działa, sprawdź, czy masz najnowsze zależności (`npm install`) i czy nie ma błędów w konsoli przeglądarki.
- Jeśli masz problem, nie bój się zapytać! 😃

---

