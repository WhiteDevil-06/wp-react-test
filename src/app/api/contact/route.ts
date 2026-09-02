import { NextResponse } from 'next/server';

// Environment variables to be set later:
// process.env.TURNSTILE_SECRET_KEY
// process.env.GOOGLE_APPS_SCRIPT_URL

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, services, message, turnstileToken } = body;

    // 1. Basic Server-side Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Valid name is required.' }, { status: 400 });
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ success: false, error: 'Valid work email is required.' }, { status: 400 });
    }
    if (!company || company.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Company name is required.' }, { status: 400 });
    }
    if (!message || message.trim().length < 10) {
      return NextResponse.json({ success: false, error: 'Please provide more details in your message.' }, { status: 400 });
    }
    
    // 2. Turnstile Verification (Placeholder)
    if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
      // In production, verify the token with Cloudflare
      // const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { ... })
      // if (!response.success) throw new Error('Turnstile failed');
    }

    // 3. Generate Non-Sequential Reference ID
    const randomHex = Math.random().toString(36).substring(2, 10).toUpperCase();
    const referenceId = `HY-${randomHex}`;

    // 4. Construct Payload for Google Apps Script
    const leadPayload = {
      referenceId,
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      services: Array.isArray(services) ? services.join(', ') : '',
      message: message.trim(),
      status: 'Enquiry Received'
    };

    // 5. Send to Google Apps Script (Placeholder)
    if (process.env.GOOGLE_APPS_SCRIPT_URL) {
      try {
        const gasResponse = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadPayload),
        });

        if (!gasResponse.ok) {
          console.error('[HYLOS API] Google Apps Script failed:', await gasResponse.text());
          // We can choose to fail the request or still return success if we queue it
        }
      } catch (gasError) {
        console.error('[HYLOS API] Error contacting Google Apps Script:', gasError);
      }
    } else {
      console.log('[HYLOS API] Missing GOOGLE_APPS_SCRIPT_URL. Payload would be:', leadPayload);
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[HYLOS API] Contact Route Error:', error);
    // Never expose internal error details
    return NextResponse.json(
      {
        success: false,
        error: 'An internal error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
