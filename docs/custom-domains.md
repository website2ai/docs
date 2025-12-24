---
sidebar_position: 5
title: Custom Domains
description: Connect your own domain to Website2AI projects. Step-by-step DNS setup guide for Cloudflare, GoDaddy, Namecheap, and other registrars.
keywords: [custom domain, DNS setup, SSL certificate, domain configuration, Cloudflare, GoDaddy, Namecheap]
image: /img/logo.png
---

# Custom Domains

Connect your own domain to your Website2AI projects for a professional web presence.

## Overview

By default, your websites are hosted at `yourproject.website2.ai`. With custom domains, you can use your own domain like `www.yourdomain.com` or `yourdomain.com`.

### Benefits

- **Professional branding** - Use your own domain name
- **SEO advantages** - Build authority on your domain
- **Memorability** - Easier for visitors to remember
- **SSL included** - Automatic HTTPS certificates

### Requirements

- **Pro subscription** - Custom domains require a paid plan
- **Domain ownership** - You must own or control the domain
- **DNS access** - Ability to modify DNS records at your registrar

## Setup Instructions

### Step 1: Open Domain Settings

1. Open your project in Website2AI
2. Click the **Settings** icon (gear)
3. Find the **Custom Domain** section

### Step 2: Enter Your Domain

Enter your domain in one of these formats:

- `yourdomain.com` - Root/apex domain
- `www.yourdomain.com` - WWW subdomain
- `app.yourdomain.com` - Custom subdomain

Click **Add Domain** to continue.

### Step 3: Configure DNS

Add an **A record** at your domain registrar pointing to our server:

| Type | Name/Host | Value |
|------|-----------|-------|
| A | `@` (or your subdomain) | `137.66.31.203` |

**For root domains (yourdomain.com):**
- Type: `A`
- Name/Host: `@`
- Value: `137.66.31.203`

**For subdomains (www.yourdomain.com):**
- Type: `A`
- Name/Host: `www`
- Value: `137.66.31.203`

### Step 4: Verify Your Domain

1. After adding the DNS record, return to Website2AI
2. Click **Verify Domain**
3. Wait for DNS verification to complete

**Note:** DNS changes can take up to 48 hours to propagate, though most complete within 1-24 hours.

### Step 5: SSL Certificate

Once DNS is verified:

1. SSL certificate is automatically provisioned
2. HTTPS becomes active within minutes
3. HTTP requests automatically redirect to HTTPS

## Domain Status

Track your domain's status in the settings:

| Status | Meaning | Action |
|--------|---------|--------|
| **Pending** | Waiting for DNS setup | Add A record at your registrar |
| **Verifying** | Checking DNS records | Wait or click Verify |
| **SSL Pending** | DNS verified, setting up SSL | Wait for automatic SSL |
| **Active** | Domain is live | Your domain is working |
| **Failed** | Verification failed | Check DNS and retry |

## Troubleshooting

### Domain Not Verifying

**Possible causes:**

1. **DNS not propagated yet** - Wait up to 48 hours
2. **Wrong IP address** - Verify you entered `137.66.31.203`
3. **Wrong record type** - Must be an A record
4. **Conflicting records** - Remove other A records for the same name

**How to check:**

1. Visit [dnschecker.org](https://dnschecker.org)
2. Enter your domain
3. Select "A" record type
4. Verify it shows `137.66.31.203`

### SSL Certificate Issues

**Possible causes:**

1. **DNS not fully propagated** - SSL requires DNS to be working
2. **Domain verification incomplete** - Ensure status is "Active"
3. **CAA records blocking** - Check for restrictive CAA records

**Solutions:**

1. Wait for DNS to fully propagate
2. Retry verification after a few hours
3. If you have CAA records, add `letsencrypt.org` to allowed issuers

### Website Not Loading

**Possible causes:**

1. **SSL still provisioning** - Wait a few minutes after status becomes Active
2. **Browser caching old DNS** - Clear cache or use incognito mode
3. **DNS pointing to wrong IP** - Verify A record value

**Solutions:**

1. Try accessing with `https://` prefix
2. Clear browser cache and cookies
3. Try a different browser or device
4. Wait 15-30 minutes for SSL to fully activate

### Cloudflare Proxy Issues

If using Cloudflare and having issues:

1. Go to DNS settings in Cloudflare
2. Find your A record
3. Click the orange cloud to turn it gray (DNS only)
4. Wait a few minutes and retry verification

**Why:** Cloudflare's proxy can interfere with our SSL certificate provisioning.

## Managing Your Domain

### Removing a Custom Domain

1. Go to project **Settings** → **Custom Domain**
2. Click **Delete** or the trash icon
3. Confirm removal

Your website will return to `yourproject.website2.ai`.

### Changing Domains

To change to a different domain:

1. Remove the current domain
2. Add the new domain
3. Update DNS records for the new domain
4. Complete verification

## Limitations

- **One domain per project** - Each website supports one custom domain
- **Pro required** - Free plans cannot use custom domains
- **Subdomain of website2.ai not allowed** - Cannot use `*.website2.ai`

## FAQ

**How long does DNS propagation take?**

Usually 1-24 hours, but can take up to 48 hours in rare cases.

**Is HTTPS automatic?**

Yes, SSL certificates are automatically provisioned and renewed. All traffic is served over HTTPS.

**Can I use a subdomain?**

Yes, any subdomain works (www, app, blog, etc.). Use an A record pointing to `137.66.31.203`.

**Will this affect my email?**

No, custom domains only affect the A record. Your MX records for email remain unchanged.

**What happens if I downgrade my plan?**

Custom domains are automatically removed when downgrading from Pro to Free.

**Can I use multiple domains?**

Currently, each project supports one custom domain. For multiple domains, create separate projects.

**Do I need to configure IPv6?**

No, IPv4 (A record) is sufficient. IPv6 is not required.
