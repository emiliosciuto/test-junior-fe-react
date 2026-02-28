# 🧪 Test Tecnico -- Frontend Developer Junior

## ⏱ Durata

1 ora

## 🎯 Obiettivo

Realizzare una piccola applicazione React + TypeScript per la gestione
di una lista utenti con integrazione API.

Il progetto è già configurato con: - React - TypeScript - React Router

------------------------------------------------------------------------

# 📌 Requisiti

## 1️⃣ Creare una nuova pagina

-   Creare una pagina `Users.tsx`
-   Aggiungere la rotta `/users`
-   Mostrare un titolo: **Lista Utenti**

------------------------------------------------------------------------

## 2️⃣ Recuperare dati da API (FETCH obbligatoria)

All'interno della pagina `Users`:

-   Effettuare una chiamata `fetch` verso:

https://jsonplaceholder.typicode.com/users

-   Utilizzare `useEffect`
-   Salvare i dati in uno stato tipizzato con `useState`
-   Mostrare almeno:
    -   name
    -   email

Definire il tipo TypeScript:

``` ts
type User = {
  id: number;
  name: string;
  email: string;
};
```

------------------------------------------------------------------------

## 3️⃣ Creare un componente riutilizzabile

-   Creare un componente `UserCard`
-   Passare le props tipizzate
-   Mostrare nome ed email
-   Utilizzare il destructuring delle props

------------------------------------------------------------------------

## 4️⃣ Aggiungere un nuovo utente (locale)

-   Inserire due input:
    -   Nome
    -   Email
-   Gestire lo stato con `useState`
-   Aggiungere un bottone **Aggiungi**
-   Al click:
    -   Inserire il nuovo utente nella lista già caricata
    -   Pulire gli input

------------------------------------------------------------------------

## 5️⃣ Gestione stati

-   Mostrare un messaggio di caricamento mentre la fetch è in corso
-   Gestire eventuali errori di fetch

------------------------------------------------------------------------

# ⭐ Bonus (facoltativo)

Se rimane tempo:

-   Disabilitare il bottone se i campi sono vuoti
-   Validare l'email (contiene "@")
-   Aggiungere un pulsante per rimuovere un utente
-   Ordinare la lista alfabeticamente

------------------------------------------------------------------------

# 📦 Avvio del progetto

Installazione dipendenze:

``` bash
npm install
```

Avvio server di sviluppo:

``` bash
npm run dev
```

Aprire il browser su:

http://localhost:5173

------------------------------------------------------------------------

# 📊 Criteri di Valutazione

-   Uso corretto di React (useState, useEffect)
-   Corretta tipizzazione TypeScript
-   Corretta gestione della fetch
-   Gestione loading ed error
-   Struttura del codice
-   Chiarezza e leggibilità

------------------------------------------------------------------------

Buon lavoro 🚀
