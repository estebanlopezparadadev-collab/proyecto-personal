# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 19 + Vite + Tailwind CSS 4, organized into per-section components under `src/components`, with content data separated under `src/data` and the WhatsApp number centralized in `src/config/whatsapp.js`. Mobile-first. Performance target: loads in under 2 seconds on 4G. Version-controlled with git: `main` holds what's published (auto-deployed to GitHub Pages via GitHub Actions on push), `develop` integrates work in progress.

## Users

Small business owners who are not technical, based in Bogotá (served in person) or elsewhere in Colombia (served by video call). They almost always view the page on a phone, arriving via a link shared in WhatsApp (typically after messaging Esteban or receiving his contact). They think in symptoms ("my contact form doesn't send emails," "my site is slow," "I don't show up on Google"), not technical vocabulary.

## Product Purpose

This is Esteban's personal services page: a single-page site where he offers website fixes and maintenance to small businesses. Its job is to convince a non-technical visitor that Esteban can solve their specific website problem, and convert that trust into a WhatsApp message requesting a free review. Success = the visitor taps the WhatsApp button.

## Positioning

Esteban is a full-stack developer based in Bogotá (in-person there, video call for the rest of Colombia) who works with technologies large companies use, but applies that skill to fix small businesses' everyday website problems — described in plain client language, never technical jargon. The offer is low-friction and low-risk: free initial review, fixed quote before any work starts, same-day response.

## Operating Context

Visitors arrive cold, mostly from a WhatsApp-shared link, mostly on mobile data (hence the 4G/2s performance constraint). They are evaluating whether to trust a stranger with their business's website, not comparison-shopping across a catalog. All copy must be in Colombian Spanish, written in the customer's language (symptoms), never technical terms ("tu formulario no manda los correos," not "debugging de backend").

## Capabilities and Constraints

- Single static page, no forms, no analytics, no cookies.
- The only call to action is a WhatsApp deep link with a prefilled message ("Hola Esteban, vi tu página y quiero la revisión gratis de mi sitio web"), centralized in `src/config/whatsapp.js`.
- Needs complete meta tags (title, description) and Open Graph tags so the link previews well when shared in WhatsApp.
- Pricing is presented in COP as "desde" (starting-at) tiers, with a note that the initial review is free and quotes are fixed before work begins:
  - Arreglo puntual (formulario, error, algo roto): desde $250.000
  - Optimización de velocidad o migración: desde $500.000
  - Pagos en línea (Wompi, ePayco, Mercado Pago): desde $800.000
  - Mantenimiento mensual: desde $200.000/mes
- Deploy target: GitHub Pages (free). A README.md with exact publishing steps is part of the deliverable.

## Brand Commitments

Name: Esteban. Full-stack developer based in Bogotá, available in the rest of Colombia by video call. Voice: close and trustworthy, not a corporate agency — must not read as a generic AI-template landing page.

## Evidence on Hand

No real photos, testimonials, or case studies were provided — none should be fabricated. Only the pricing tiers, problem list, and 3-step process described by Esteban exist as real content; everything else (imagery, decorative content, proof elements) must be either omitted or built from these facts, not invented claims.

## Product Principles

1. Speak in customer symptoms, never technical jargon.
2. Every path on the page leads to the same low-friction action: message Esteban on WhatsApp.
3. Fast and lightweight beats feature-rich — mobile 4G visitors must get a sub-2s load.
4. Trustworthy and personal tone over corporate/agency polish.
5. Never fabricate evidence (photos, testimonials, stats) that Esteban hasn't provided.
