// src/app/render-test/isr/page.tsx
// 🍕 ISR (Incremental Static Regeneration) 예시
// 정적 생성 + 주기적 재생성

import Link from "next/link";

// ⭐ 10초마다 페이지 재생성!
export const revalidate = 10;

export default function ISRPage() {
    // 이 코드는 캐시가 만료되면 다시 실행됨
    const renderTime = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    console.log("🍕 ISR 페이지 렌더링됨:", renderTime);

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <Link href="/render-test" style={{ color: "#666" }}>← 돌아가기</Link>

            <div style={{
                marginTop: "20px",
                padding: "30px",
                border: "4px solid #ff9800",
                borderRadius: "16px",
                background: "#fff3e0",
                textAlign: "center"
            }}>
                <h1 style={{ color: "#ff9800" }}>🍕 ISR</h1>
                <h2>Incremental Static Regeneration</h2>

                <div style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    margin: "30px 0",
                    color: "#e65100"
                }}>
                    {renderTime}
                </div>

                <p style={{ fontSize: "18px" }}>
                    ⬆️ 이 시간은 <strong>10초 후</strong> 새로고침하면 바뀜!
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
                    <li>10초 이내 새로고침 → 시간 안 바뀜 (캐시)</li>
                    <li>10초 이후 새로고침 → 시간 바뀜! (재생성)</li>
                    <li>첫 번째 요청은 캐시, 백그라운드에서 재생성</li>
                </ul>

                <h3>✅ 적합한 용도</h3>
                <ul>
                    <li>뉴스 목록</li>
                    <li>상품 목록/가격</li>
                    <li>자주 바뀌지만 실시간은 아닌 콘텐츠</li>
                    <li>SEO가 중요한 동적 페이지</li>
                </ul>

                <div style={{
                    marginTop: "15px",
                    padding: "10px",
                    background: "#fff3e0",
                    borderRadius: "8px",
                    border: "1px solid #ff9800"
                }}>
                    <strong>💡 ISR의 장점:</strong>
                    <p style={{ margin: "5px 0 0" }}>
                        SSG처럼 빠르면서도, 주기적으로 최신 데이터 반영!
                    </p>
                </div>
            </div>

            <pre style={{
                marginTop: "20px",
                padding: "15px",
                background: "#263238",
                color: "#ffcc80",
                borderRadius: "8px",
                overflow: "auto",
                fontSize: "14px"
            }}>
                {`// ISR 설정 방법 1: 페이지 레벨
export const revalidate = 10; // 10초

// ISR 설정 방법 2: fetch 옵션
const data = await fetch(url, { 
    next: { revalidate: 60 } // 60초
});`}
            </pre>
        </div>
    );
}
