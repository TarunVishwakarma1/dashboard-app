import { NextResponse } from 'next/server';
import { apiURL } from '../../../lib/constants';
export async function GET(request) {
    try {
        // Fetch data from the Express API
        const res = await fetch(`${apiURL}//api/data/sideBarMenu`);
        const data = await res.json();

        // Check if the request was successful
        if (!res.ok) {
            return NextResponse.json({ message: 'Failed to fetch data' }, { status: res.status });
        }

        // Return the fetched data as JSON using NextResponse
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
