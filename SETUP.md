# Crop Advisor: Setup Guide

This project has a static frontend (GitHub Pages) and uses Supabase for accounts, email verification and storage. There's no server to run.

## 1. Create the Supabase project

1. Go to supabase.com, sign in, and click **New project**.
2. Set a name and a database password, then wait about 2 minutes.
3. Go to **Project Settings → API** and copy:
   - **Project URL**
   - **anon public key**

## 2. Create the database table

1. In Supabase, open **SQL Editor → New query**.
2. Paste the contents of `schema.sql` and click **Run**.

## 3. Set the email redirect

In Supabase, go to **Authentication → URL Configuration**:
- **Site URL:** `https://shravanisutar353-ops.github.io/crop-advisor`
- **Redirect URLs:** add `https://shravanisutar353-ops.github.io/crop-advisor/login.html`

Supabase sends the verification email automatically. For a larger launch, you can connect your own email sender under **Authentication → SMTP Settings**.

## 4. Add your keys

Open `config.js` and replace:
- `YOUR-PROJECT-ID` with your Project URL
- `YOUR_ANON_PUBLIC_KEY` with your anon key

The anon key is safe in the browser because the row-level security policy in `schema.sql` limits each user to their own data.

## 5. Put the project on GitHub Pages

```bash
cd crop-advisor
git init
git add .
git commit -m "Crop Advisor with accounts"
git branch -M main
git remote add origin https://github.com/shravanisutar353-ops/crop-advisor.git
git push -u origin main
```

Then in GitHub, go to **Settings → Pages**, choose branch `main` and folder `/ (root)`, and save.

## 6. Test the flow

1. Open `register.html`, create an account with a real email, and submit.
2. Open the verification email and click the link.
3. Open `login.html` and log in.
4. On the dashboard, enter your location (or click **Use my location**), your soil values and your crop, then click **Save and update**.
5. The weather and top crop matches appear on the right.

## Files

| File | Purpose |
|---|---|
| `index.html` | Original crop advisor (no login needed) |
| `register.html` | Create account |
| `login.html` | Log in |
| `dashboard.html` | Save details, see weather and matches |
| `config.js` | Your Supabase keys and site URL |
| `scoring.js` | Crop ranges and scoring logic, shared by the dashboard |
| `style.css` | Shared styles |
| `schema.sql` | Database table and security rules |

## Troubleshooting

- **"Email not confirmed"**: click the link in the verification email, then log in.
- **No verification email**: check spam, and wait a few minutes. The free tier has a sending limit.
- **Verification link opens the wrong page**: check the Site URL and Redirect URLs in step 3.
- **"Failed to fetch" or CORS errors**: make sure `config.js` has your correct Project URL.
- **Profile not saving**: confirm `schema.sql` ran without errors and the policy exists.
