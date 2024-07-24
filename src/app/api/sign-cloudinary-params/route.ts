import { v2 as cloudinary } from 'cloudinary';

// Ensure environment variables are defined
if (!process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || !process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  throw new Error('Cloudinary configuration environment variables are not set.');
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  const body = await request.json();
  const { paramsToSign } = body;

  // Ensure CLOUDINARY_API_SECRET is not undefined
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!apiSecret) {
    throw new Error('Cloudinary API secret is not set.');
  }

  const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret);

  return new Response(JSON.stringify({ signature }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
