import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Extract IP address from the request headers
    const ipFromHeader =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      '0.0.0.0';

    // If the extracted IP is invalid (fallback), don't append it to the base URL.
    const queryIp = ipFromHeader !== '0.0.0.0' ? ipFromHeader.trim() : '';

    const apiUrl = queryIp
      ? `https://freeipapi.com/api/json/${queryIp}`
      : `https://freeipapi.com/api/json/`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    const data = await response.json();

    // Validate that the response contains the required fields
    if (!data.cityName || !data.countryName) {
      throw new Error('Invalid location data received');
    }

    return NextResponse.json({
      city: data.cityName,
      country: data.countryName,
    });
  } catch (error: any) {
    console.error('Location API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch location', details: error.message },
      { status: 500 }
    );
  }
}