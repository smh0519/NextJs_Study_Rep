import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "라우팅 & Children 학습",
  description: "Next.js 라우팅 실습",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log("🏠 RootLayout 렌더링됨!");

  return (
    <html lang="ko">
      <body>
        {/* ========== 🟦 ROOT LAYOUT 영역 시작 ========== */}
        <div style={{
          border: '5px solid blue',
          padding: '20px',
          margin: '10px'
        }}>
          <h2 style={{ color: 'blue' }}>🟦 ROOT LAYOUT (layout.tsx)</h2>
          <p style={{ color: 'blue' }}>나는 모든 페이지를 감싸는 최상위 레이아웃이야!</p>

          {/* 네비게이션 */}
          <nav style={{
            background: '#e3f2fd',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '8px',
            display: 'flex',
            gap: '15px'
          }}>
            <Link href="/" style={{ fontWeight: 'bold' }}>🏠 홈</Link>
            <Link href="/about" style={{ fontWeight: 'bold' }}>📄 About</Link>
            <Link href="/products" style={{ fontWeight: 'bold' }}>🛒 상품목록</Link>
            <Link href="/products/1" style={{ fontWeight: 'bold' }}>🛒 상품1</Link>
            <Link href="/products/2" style={{ fontWeight: 'bold' }}>🛒 상품2</Link>
            <Link href="/dashboard" style={{ fontWeight: 'bold' }}>📊 대시보드</Link>
            <Link href="/learn" style={{ fontWeight: 'bold', color: '#9c27b0' }}>🎓 서버vs클라이언트</Link>
          </nav>

          {/* ⭐ 여기가 바로 children이 들어오는 곳! */}
          <div style={{
            background: '#f5f5f5',
            padding: '20px',
            borderRadius: '8px'
          }}>
            <p style={{ color: 'gray', fontSize: '12px' }}>
              ⬇️ 아래가 children 영역 (page.tsx 또는 하위 layout이 여기 들어옴)
            </p>
            {children}
            <p style={{ color: 'gray', fontSize: '12px' }}>
              ⬆️ children 영역 끝
            </p>
          </div>

        </div>
        {/* ========== 🟦 ROOT LAYOUT 영역 끝 ========== */}
      </body>
    </html>
  )
}