import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // ipstack API with HTTPS and fields parameter
    const response = await fetch(
      `https://api.ipstack.com/check?access_key=de16ce1c4c79a4907ce57f90a94f1ad9&fields=city,country_name`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    const data = await response.json();

    // Check if we have valid data
    if (!data.city || !data.country_name) {
      throw new Error('Invalid location data received');
    }

    return NextResponse.json({
      city: data.city,
      country: data.country_name
    });
  } catch (error) {
    console.error('Location API error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch location',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}