import {NextResponse} from 'next/server';

export function middleware(request) {
  const {pathname} = request.nextUrl;

  if (pathname === '/secret') {
    return NextResponse.redirect(new URL('/boutique', request.url));
  }

  const {nextUrl: url, geo} = request;
  const country = geo.country || 'SN';
  const city = geo.city || 'Dakar';
  const region = geo.region || 'Dakar';

  url.searchParams.set('country', country);
  url.searchParams.set('city', city);
  url.searchParams.set('region', region);

  return NextResponse.rewrite(url);
}
