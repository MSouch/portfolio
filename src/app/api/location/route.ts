import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const apiKey = process.env.IPSTACK_API_KEY;

    if (!apiKey) {
      throw new Error('IPSTACK_API_KEY is not defined');
    }

    // Extract the client's IP address from the request headers
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      '0.0.0.0'; // Fallback IP address

    const response = await fetch(
      `http://api.ipstack.com/${ip}?access_key=${apiKey}&fields=city,country_name`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    const data = await response.json();

    if (!data.city || !data.country_name) {
      throw new Error('Invalid location data received');
    }

    return NextResponse.json({
      city: data.city,
      country: data.country_name,
    });
  } catch (error: any) {
    console.error('Location API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch location', details: error.message },
      { status: 500 }
    );
  }
}