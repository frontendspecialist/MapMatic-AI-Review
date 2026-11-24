# Deliverable 5: 1-Step Single XML Installation Guide

Because the entire review landing page, styling, interactive controller, JSON-LD FAQ schema, and all 10 Blogger Layout widgets are **merged into one complete XML file** (`mapmatic-ai-review-theme.xml`), you only need to upload that single file to Blogger.

## Step 1: Restore the Complete Single XML Theme
1. Download `mapmatic-ai-review-theme.xml` (also saved directly at `/mapmatic-ai-review-theme.xml`).
2. Log in to **Blogger.com** -> select your blog -> click **Theme**.
3. Click the **down arrow** next to Customize -> choose **Backup** to save your previous template.
4. Click the down arrow again -> choose **Restore** -> upload `mapmatic-ai-review-theme.xml`.
5. Your homepage immediately displays the complete 4,000+ word MapMatic AI Review landing page with zero extra post setup required.

## Step 2: Optional Legal Pages
If you create standard Blogger Pages for footer links (`/p/privacy-policy.html`, `/p/affiliate-disclosure.html`, `/p/terms-and-conditions.html`, `/p/contact.html`), the theme automatically switches from the homepage review landing page to render each legal page's body content cleanly.

## Step 3: Edit Affiliate URL, Images & Adsterra Gadgets
1. Update `window.MAPMATIC_CONFIG` in **Theme -> Edit HTML** (or inside `mapmatic-ai-review-theme.xml` before restoring).
2. Add your Adsterra scripts in **Blogger -> Layout** (`HTML1`, `HTML2`, `HTML4`, `HTML6`, `HTML7`).

## Step 4: Quick Launch Checklist
- **All 10 Layout Widgets Present:** Verify `Header1`, `HTML1`, `Blog1`, `HTML2`, `HTML3`, `HTML4`, `HTML5`, `HTML6`, `LinkList1`, and `HTML7` appear cleanly in **Blogger -> Layout**.
- **Sticky Right Sidebar:** Confirm Table of Contents (`HTML3`) sits at the top of the sticky sidebar with Adsterra 250x300 (`HTML4`) directly below it.
- **Featured Image, 3 Pricing Tables, Upgrades #1–#5 & Bonuses #1–#2:** Confirm all cropped product visuals and 16+ CTAs render cleanly in Dark and Light modes.

---

# Deliverable 3: Single-File Affiliate Link, Product Images & Pricing Configuration

Everything — the full 4,000+ word review, Hero Featured Image, 3 Pricing Tables, Mega Bundle Deal, Front-End + Upgrades #1–#5, Bonus #1 & #2, 22 FAQs, 16+ CTAs, CSS, JS, and all 10 Blogger Layout widgets — is merged inside **ONE complete XML file** (`mapmatic-ai-review-theme.xml`).

## 1. Where to Edit in `mapmatic-ai-review-theme.xml`
1. Open **Blogger Dashboard -> Theme -> Customize dropdown -> Edit HTML** (or edit `mapmatic-ai-review-theme.xml` locally before uploading).
2. Press `Ctrl + F` (or `Cmd + F`) and search for `window.MAPMATIC_CONFIG`.
3. Update `AFFILIATE_URL` and image URLs once — all 16+ CTA buttons and all `img[data-mm-img]` product images update automatically on page load:

```javascript
window.MAPMATIC_CONFIG = {
  AFFILIATE_URL: 'https://your-verified-affiliate-link.example',
  SINGLE_PRICE: '$49 One-Time (Front-End License)',
  BUNDLE_PRICE: '$347 Low One-Time Fee (Normal: $997 · Save $697)',
  GUARANTEE_PERIOD: '30-Day 100% Money-Back Guarantee (No Risk · JVZoo)',
  FEATURED_IMAGE: '/assets/aistudio/image_fc1ead36.png',
  PRODUCT_SUITE_IMAGE: '/assets/aistudio/image_08402075.png',
  PRODUCT_DASHBOARD_IMAGE: '/assets/products/frontend-mapmatic.png',
  MEGA_BUNDLE_IMAGE: '/assets/aistudio/image_fc1ead36.png',
  UPGRADE_1_IMAGE: '/assets/products/upgrade1-unlimited.png',
  UPGRADE_2_IMAGE: '/assets/products/upgrade2-agencyvault.png',
  UPGRADE_3_IMAGE: '/assets/products/upgrade3-reputation.png',
  UPGRADE_4_IMAGE: '/assets/products/upgrade4-outreach.png',
  UPGRADE_5_IMAGE: '/assets/products/upgrade5-reseller.png',
  BONUS_1_IMAGE: '/assets/products/bonus1-ada-suite.png',
  BONUS_2_IMAGE: '/assets/products/bonus2-mobicentric.png'
};
```

Because `window.MAPMATIC_CONFIG` sits inside a `//<![CDATA[ ... //]]>` block, query parameters containing `&`, `?`, or `=` never cause Blogger XML syntax errors.

## 2. Hosting Product Images on a Live Blogger Domain
- Upload the clean PNGs from `public/assets/aistudio/` and `public/assets/products/` to your Blogger draft/CDN and paste their `https://...` image URLs into `window.MAPMATIC_CONFIG` (plus `og:image` / `twitter:image`).
- All affiliate links include `target="_blank" rel="sponsored nofollow noopener"`.

---

# Deliverable 4: Adsterra Advertisement Integration Guide (All Layout Widgets Included)

Your single merged XML file (`mapmatic-ai-review-theme.xml`) registers **10 editable Blogger Layout widgets**, including four dedicated Adsterra gadget slots with zero duplicate script execution and automatic collapse when empty.

## 1. Adsterra 728x90 Banner (Top & Bottom Slots)
- **Blogger Layout Gadgets:** `Adsterra 728x90 Banner` (`HTML1`) at top and `Adsterra 728x90 Banner Bottom` (`HTML6`) above the footer.
- **Setup:** Go to **Blogger Dashboard -> Layout**, click **Edit** on either gadget, paste your Adsterra 728x90 banner `<script>` tag, and click **Save**.

## 2. Adsterra 250x300 Banner (Right Sticky Sidebar — Directly Below Static TOC)
- **Blogger Layout Gadget:** `Adsterra 250x300 Banner` (`HTML4`).
- **Placement:** Rendered inside the sticky right sidebar **directly underneath** the static `Sidebar Table of Contents` widget (`HTML3`).
- **Setup:** Open **Blogger Layout**, click **Edit** on `Adsterra 250x300 Banner`, paste your 250x300/300x250 script, and click **Save**.

## 3. Adsterra Native Banner (Auto-Positioned Mid-Article Slot)
- **Blogger Layout Gadget:** `Adsterra Native Banner` (`HTML2`).
- **Placement:** When populated in **Blogger Layout**, the script automatically mounts it between the Core Features breakdown and the Mega Bundle Deal section.

## 4. Adsterra Social Bar (Global Footer Placement — Single Instance)
- **Blogger Layout Gadget:** `Adsterra Social Bar` (`HTML7`).
- **Setup:** Click **Edit** on `Adsterra Social Bar` at the bottom of **Blogger Layout**, paste your Social Bar `<script>`, and click **Save**.