// src/app/parallel-test/@sidebar/loading.tsx
// 사이드바 슬롯 전용 로딩 UI

export default function SidebarLoading() {
    return (
        <div>
            <p style={{
                fontSize: "12px",
                color: "#92400e",
                marginBottom: "15px"
            }}>
                ⏳ 사이드바 로딩 중... (1초)
            </p>

            {/* 스켈레톤 메뉴 */}
            {[1, 2, 3, 4, 5].map((i) => (
                <div
                    key={i}
                    style={{
                        height: "44px",
                        backgroundColor: "#fde68a",
                        borderRadius: "8px",
                        marginBottom: "8px",
                        animation: "pulse 1.5s ease-in-out infinite"
                    }}
                />
            ))}

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </div>
    );
}
