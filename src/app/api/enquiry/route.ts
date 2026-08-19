import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    let body: any = {};
    try {
      body = await request.json();
    } catch (e) {
      body = {};
    }

    const { name, email, company, service, message, website_url_hp } = body || {};

    // 1. Invisible Honeypot Spam Shield Check
    if (website_url_hp && typeof website_url_hp === 'string' && website_url_hp.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Enquiry received successfully' }, { status: 200 });
    }

    // 2. Server-side Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Full name is required (minimum 2 characters).' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ success: false, error: 'Valid work email is required.' }, { status: 400 });
    }

    if (!company || typeof company !== 'string' || company.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Company name is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json({ success: false, error: 'Brief project note is required (minimum 5 characters).' }, { status: 400 });
    }

    // 3. Construct Sanitized Lead Submission Record
    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      service: service || 'general',
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      status: 'NEW',
    };

    console.log('[HYLOS LEAD CAPTURE API] Valid enquiry record processed:', leadRecord.id);

    return NextResponse.json(
      {
        success: true,
        message: 'Strategy session request submitted successfully.',
        leadId: leadRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[HYLOS LEAD CAPTURE API ERROR]:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal server error occurred while processing your request.',
      },
      { status: 500 }
    );
  }
}
