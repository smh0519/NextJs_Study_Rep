// src/app/parallel-test/@main/loading.tsx
// 메인 슬롯 전용 로딩 UI

export default function MainLoading() {
    return (
        <div>
            <p style={{
                fontSize: "12px",
                color: "#1e40af",
                marginBottom: "20px"
            }}>
                ⏳ 메인 콘텐츠 로딩 중... (3초)
            </p>

            {/* 스켈레톤 카드 그리드 */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "15px"
            }}>
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        style={{
                            backgroundColor: "#bfdbfe",
                            borderRadius: "12px",
                            padding: "20px",
                            height: "100px",
                            animation: "pulse 1.5s ease-in-out infinite"
                        }}
                    >
                        <div style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#93c5fd",
                            borderRadius: "8px",
                            marginBottom: "10px"
                        }} />
                        <div style={{
                            width: "60%",
                            height: "20px",
                            backgroundColor: "#93c5fd",
                            borderRadius: "4px"
                        }} />
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </div>
    );
}
