// src/app/loading-test/loading.tsx
// 로딩 중에 자동으로 표시되는 UI
// Next.js가 React Suspense를 사용하여 자동으로 이 컴포넌트를 보여줌

export default function Loading() {
    return (
        <div style={{
            padding: "40px",
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "system-ui, sans-serif",
            textAlign: "center"
        }}>
            {/* 스피너 애니메이션 */}
            <div style={{
                width: "60px",
                height: "60px",
                border: "4px solid #e5e7eb",
                borderTop: "4px solid #3b82f6",
                borderRadius: "50%",
                margin: "0 auto 30px",
                animation: "spin 1s linear infinite"
            }} />

            <h2 style={{ color: "#3b82f6", marginBottom: "10px" }}>
                ⏳ 데이터 로딩 중...
            </h2>

            <p style={{ color: "#6b7280" }}>
                잠시만 기다려주세요!
            </p>

            {/* 스켈레톤 UI 예시 */}
            <div style={{
                marginTop: "40px",
                padding: "20px",
                backgroundColor: "#f3f4f6",
                borderRadius: "12px"
            }}>
                <div style={{
                    height: "20px",
                    backgroundColor: "#e5e7eb",
                    borderRadius: "4px",
                    marginBottom: "12px",
                    animation: "pulse 1.5s ease-in-out infinite"
                }} />
                <div style={{
                    height: "20px",
                    backgroundColor: "#e5e7eb",
                    borderRadius: "4px",
                    marginBottom: "12px",
                    width: "80%",
                    animation: "pulse 1.5s ease-in-out infinite"
                }} />
                <div style={{
                    height: "20px",
                    backgroundColor: "#e5e7eb",
                    borderRadius: "4px",
                    width: "60%",
                    animation: "pulse 1.5s ease-in-out infinite"
                }} />
            </div>

            {/* CSS 애니메이션 */}
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </div>
    );
}
