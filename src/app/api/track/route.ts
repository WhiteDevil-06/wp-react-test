import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { referenceId } = await request.json();

    if (!referenceId || typeof referenceId !== 'string' || !referenceId.startsWith('HY-')) {
      return NextResponse.json({ success: false, error: 'Invalid Reference ID format.' }, { status: 400 });
    }

    // Placeholder: Send request to Google Apps Script to fetch status
    let status = 'Unknown';
    let timestamp = '';

    if (process.env.GOOGLE_APPS_SCRIPT_URL) {
      try {
        const gasResponse = await fetch(`${process.env.GOOGLE_APPS_SCRIPT_URL}?action=status&id=${encodeURIComponent(referenceId)}`, {
          method: 'GET'
        });

        if (gasResponse.ok) {
          const gasData = await gasResponse.json();
          // Assume GAS returns { success: true, status: "Under Review", timestamp: "..." }
          if (gasData.success) {
            status = gasData.status;
            timestamp = gasData.timestamp;
          } else {
            return NextResponse.json({ success: false, error: 'Reference ID not found.' }, { status: 404 });
          }
        }
      } catch (e) {
        console.error('[HYLOS TRACK API] GAS Error:', e);
      }
    } else {
      // Dummy response for development
      status = 'Enquiry Received (Dev Mode)';
      timestamp = new Date().toISOString();
    }

    return NextResponse.json({
      success: true,
      data: {
        referenceId,
        status,
        timestamp,
      }
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
