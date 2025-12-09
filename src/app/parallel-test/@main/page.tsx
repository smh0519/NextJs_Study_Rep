// src/app/parallel-test/@main/page.tsx
// 메인 슬롯의 페이지 (3초 로딩)

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function MainPage() {
    // 3초 동안 로딩 - 사이드바보다 오래 걸림!
    await delay(3000);

    const stats = [
        { label: "총 방문자", value: "12,345", icon: "👥", color: "#3b82f6" },
        { label: "오늘 매출", value: "₩1,234,567", icon: "💰", color: "#22c55e" },
        { label: "신규 주문", value: "42", icon: "📦", color: "#f59e0b" },
        { label: "리뷰", value: "4.8 ⭐", icon: "💬", color: "#ec4899" },
    ];

    return (
        <div>
            <p style={{
                fontSize: "12px",
                color: "#1e40af",
                marginBottom: "20px"
            }}>
                ✅ 3초 후 로딩 완료! (사이드바보다 2초 늦게 나타남)
            </p>

            {/* 통계 카드 그리드 */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "15px",
                marginBottom: "20px"
            }}>
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            padding: "20px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            borderLeft: `4px solid ${stat.color}`
                        }}
                    >
                        <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                            {stat.icon}
                        </div>
                        <div style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: stat.color
                        }}>
                            {stat.value}
                        </div>
                        <div style={{ color: "#6b7280", fontSize: "14px" }}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* 학습 포인트 */}
            <div style={{
                backgroundColor: "#f0fdf4",
                padding: "15px",
                borderRadius: "8px",
                border: "1px solid #86efac"
            }}>
                <strong style={{ color: "#15803d" }}>💡 학습 포인트:</strong>
                <p style={{ margin: "10px 0 0", color: "#166534" }}>
                    사이드바는 1초 만에 나타났지만, 메인은 3초가 걸렸습니다.
                    <br />각 슬롯이 <strong>독립적으로</strong> 로딩되는 것을 확인하세요!
                </p>
            </div>
        </div>
    );
}
