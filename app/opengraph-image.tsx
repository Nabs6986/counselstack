import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CounselStack - Compare Legal Practice Management Software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              background: '#3b82f6',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 24,
            }}
          >
            <span style={{ fontSize: 48, color: 'white' }}>⚖️</span>
          </div>
          <span style={{ fontSize: 64, fontWeight: 700, color: 'white' }}>
            CounselStack
          </span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: 800,
          }}
        >
          Compare Legal Practice Management Software
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#64748b',
            marginTop: 24,
          }}
        >
          Independent • Unbiased • Data-Driven
        </div>
      </div>
    ),
    { ...size }
  );
}
