// src/app/render-test/ssr/page.tsx
// 👨‍🍳 SSR (Server-Side Rendering) 예시
// 매 요청마다 서버에서 HTML 생성

import Link from "next/link";

// ⭐ 이게 SSR을 강제하는 설정!
export const dynamic = "force-dynamic";

export default function SSRPage() {
    // 이 코드는 요청할 때마다 실행됨!
    const renderTime = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    console.log("👨‍🍳 SSR 페이지 렌더링됨:", renderTime);

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <Link href="/render-test" style={{ color: "#666" }}>← 돌아가기</Link>

            <div style={{
                marginTop: "20px",
                padding: "30px",
                border: "4px solid #f44336",
                borderRadius: "16px",
                background: "#ffebee",
                textAlign: "center"
            }}>
                <h1 style={{ color: "#f44336" }}>👨‍🍳 SSR</h1>
                <h2>Server-Side Rendering</h2>

                <div style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    margin: "30px 0",
                    color: "#c62828"
                }}>
                    {renderTime}
                </div>

                <p style={{ fontSize: "18px" }}>
                    ⬆️ 이 시간은 <strong>새로고침할 때마다</strong> 바뀜!
                </p>
            </div>

            <div style={{
                marginTop: "20px",
                padding: "20px",
                background: "#f5f5f5",
                borderRadius: "8px"
            }}>
                <h3>🔍 확인해보기</h3>
                <ul>
                    <li>새로고침하면 시간이 바뀜!</li>
                    <li>터미널에 매번 로그 찍힘</li>
                    <li>항상 최신 데이터</li>
                </ul>

                <h3>✅ 적합한 용도</h3>
                <ul>
                    <li>로그인 후 대시보드</li>
                    <li>검색 결과 페이지</li>
                    <li>실시간 재고 확인</li>
                    <li>사용자별 맞춤 콘텐츠</li>
                </ul>
            </div>

            <pre style={{
                marginTop: "20px",
                padding: "15px",
                background: "#263238",
                color: "#ef9a9a",
                borderRadius: "8px",
                overflow: "auto",
                fontSize: "14px"
            }}>
                {`// SSR 설정 방법 1: 페이지 레벨
export const dynamic = "force-dynamic";

// SSR 설정 방법 2: fetch 옵션
const data = await fetch(url, { 
    cache: "no-store" 
});`}
            </pre>
        </div>
    );
}
