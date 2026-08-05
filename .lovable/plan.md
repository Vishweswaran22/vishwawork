# Contact form → your Gmail inbox (EmailJS)

Right now the contact form is a mock: it waits 700ms and shows a success toast without sending anything. This wires it to EmailJS so every submission lands in your Gmail.

## What you need to do first (one-time, free)

1. Create an account at emailjs.com (free tier: 200 emails/month).
2. **Add an Email Service** → choose Gmail → connect your Gmail account. Note the **Service ID**.
3. **Create an Email Template** with these variables in the body: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`. Set the template's "To email" to your Gmail and "Reply To" to `{{from_email}}` so you can reply directly to the sender. Note the **Template ID**.
4. Copy your **Public Key** from Account → General.

Send me those three values and I'll drop them in. They're all publishable (designed to live in frontend code), so nothing secret is exposed.

## What I'll build

- Install the `@emailjs/browser` package.
- Replace the fake submit handler in the contact section with a real send that posts the form fields to EmailJS.
- Validate input before sending with zod: name (1–100 chars), valid email (max 255), subject (1–150), message (1–1000). Invalid fields show an inline error and block the send.
- Add a simple honeypot field (hidden input bots fill in) to cut spam without a captcha.
- Keep the existing UX: button shows "Sending…" while in flight, success toast + form reset on success, and a clear error toast with a fallback "email me directly" link if the send fails.

## Technical notes

- Files touched: `src/components/portfolio/Sections.tsx` (Contact component), `package.json`.
- EmailJS runs entirely in the browser — no backend, no Lovable Cloud, no server functions needed.
- Config (service ID, template ID, public key) goes in a small constants block in `src/components/portfolio/data.ts`.
- Free tier limit is 200 emails/month; beyond that sends fail and the error toast surfaces the fallback.
