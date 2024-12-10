import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const response = await fetch(
      `http://api.ipstack.com/check?access_key=de16ce1c4c79a4907ce57f90a94f1ad9&fields=city,country_name`
    );
    const data = await response.json();

    return NextResponse.json({
      city: data.city,
      country: data.country_name,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch location' },
      { status: 500 }
    );
  }
}