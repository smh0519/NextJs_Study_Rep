// src/app/render-test/page.tsx
// 렌더링 전략 비교 메인 페이지

import Link from "next/link";

export default function RenderTestPage() {
    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <h1>🎨 렌더링 전략 비교 실습</h1>
            <p style={{ color: "gray" }}>
                각 페이지를 방문하고 <strong>새로고침</strong>해서 시간이 어떻게 변하는지 확인해보세요!
            </p>

            <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
                {/* SSG */}
                <Link href="/render-test/ssg" style={{ textDecoration: "none" }}>
                    <div style={{
                        padding: "20px",
                        border: "3px solid #4caf50",
                        borderRadius: "12px",
                        background: "#e8f5e9"
                    }}>
                        <h2 style={{ color: "#4caf50", margin: 0 }}>📦 SSG (Static Site Generation)</h2>
                        <p style={{ margin: "10px 0 0" }}>빌드할 때 HTML 생성 → 새로고침해도 시간 안 바뀜!</p>
                        <code style={{ fontSize: "12px", color: "#666" }}>기본값 또는 fetch cache: &apos;force-cache&apos;</code>
                    </div>
                </Link>

                {/* SSR */}
                <Link href="/render-test/ssr" style={{ textDecoration: "none" }}>
                    <div style={{
                        padding: "20px",
                        border: "3px solid #f44336",
                        borderRadius: "12px",
                        background: "#ffebee"
                    }}>
                        <h2 style={{ color: "#f44336", margin: 0 }}>👨‍🍳 SSR (Server-Side Rendering)</h2>
                        <p style={{ margin: "10px 0 0" }}>요청마다 HTML 생성 → 새로고침할 때마다 시간 바뀜!</p>
                        <code style={{ fontSize: "12px", color: "#666" }}>export const dynamic = &apos;force-dynamic&apos;</code>
                    </div>
                </Link>

                {/* ISR */}
                <Link href="/render-test/isr" style={{ textDecoration: "none" }}>
                    <div style={{
                        padding: "20px",
                        border: "3px solid #ff9800",
                        borderRadius: "12px",
                        background: "#fff3e0"
                    }}>
                        <h2 style={{ color: "#ff9800", margin: 0 }}>🍕 ISR (Incremental Static Regeneration)</h2>
                        <p style={{ margin: "10px 0 0" }}>캐시 + 주기적 재생성 → 10초 후 새로고침하면 시간 바뀜!</p>
                        <code style={{ fontSize: "12px", color: "#666" }}>export const revalidate = 10</code>
                    </div>
                </Link>
            </div>

            <div style={{
                marginTop: "30px",
                padding: "15px",
                background: "#e3f2fd",
                borderRadius: "8px"
            }}>
                <h3>💡 테스트 방법</h3>
                <ol style={{ margin: 0, paddingLeft: "20px" }}>
                    <li>각 페이지 방문</li>
                    <li><strong>렌더링된 시간</strong> 확인</li>
                    <li>새로고침 (F5 또는 Cmd+R)</li>
                    <li>시간이 바뀌는지 확인!</li>
                </ol>
                <p style={{ margin: "10px 0 0", fontSize: "14px", color: "#666" }}>
                    ⚠️ 개발 모드에서는 모든 페이지가 SSR처럼 동작해요.<br />
                    정확한 차이를 보려면 <code>npm run build && npm start</code> 로 프로덕션 모드로 확인하세요!
                </p>
            </div>
        </div>
    );
}
