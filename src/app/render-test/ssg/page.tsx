// src/app/render-test/ssg/page.tsx
// 📦 SSG (Static Site Generation) 예시
// 빌드 시점에 HTML이 생성되어 고정됨

import Link from "next/link";

export default function SSGPage() {
    // 이 코드는 빌드할 때 한 번만 실행됨!
    const renderTime = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    console.log("📦 SSG 페이지 렌더링됨:", renderTime);

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <Link href="/render-test" style={{ color: "#666" }}>← 돌아가기</Link>

            <div style={{
                marginTop: "20px",
                padding: "30px",
                border: "4px solid #4caf50",
                borderRadius: "16px",
                background: "#e8f5e9",
                textAlign: "center"
            }}>
                <h1 style={{ color: "#4caf50" }}>📦 SSG</h1>
                <h2>Static Site Generation</h2>

                <div style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    margin: "30px 0",
                    color: "#2e7d32"
                }}>
                    {renderTime}
                </div>

                <p style={{ fontSize: "18px" }}>
                    ⬆️ 이 시간은 <strong>빌드할 때</strong> 고정됨!
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
                    <li>새로고침해도 시간이 안 바뀜 (프로덕션에서)</li>
                    <li>터미널에 로그가 안 찍힘 (이미 빌드됨)</li>
                    <li>CDN에 캐시되어 가장 빠름</li>
                </ul>

                <h3>✅ 적합한 용도</h3>
                <ul>
                    <li>블로그 글</li>
                    <li>문서 페이지</li>
                    <li>마케팅 페이지</li>
                    <li>자주 안 바뀌는 콘텐츠</li>
                </ul>
            </div>

            <pre style={{
                marginTop: "20px",
                padding: "15px",
                background: "#263238",
                color: "#aed581",
                borderRadius: "8px",
                overflow: "auto",
                fontSize: "14px"
            }}>
                {`// 기본값이 SSG!
// 아무 설정 안 하면 자동으로 SSG

export default function SSGPage() {
    const renderTime = new Date().toLocaleString();
    return <div>{renderTime}</div>;
}`}
            </pre>
        </div>
    );
}
