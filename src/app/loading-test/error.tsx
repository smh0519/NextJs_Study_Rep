// src/app/loading-test/error.tsx
// 에러 발생 시 자동으로 표시되는 UI
// ⚠️ 중요: error.tsx는 반드시 클라이언트 컴포넌트여야 합니다!
"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div style={{
            padding: "40px",
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "system-ui, sans-serif",
            textAlign: "center"
        }}>
            {/* 에러 아이콘 */}
            <div style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#fef2f2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 30px",
                fontSize: "40px"
            }}>
                ❌
            </div>

            <h1 style={{ color: "#dc2626", marginBottom: "15px" }}>
                오류가 발생했습니다!
            </h1>

            {/* 에러 메시지 표시 */}
            <p style={{
                color: "#991b1b",
                backgroundColor: "#fef2f2",
                padding: "15px 20px",
                borderRadius: "8px",
                marginBottom: "30px",
                border: "1px solid #fecaca"
            }}>
                {error.message}
            </p>

            {/* 다시 시도 버튼 */}
            <button
                onClick={() => reset()}
                style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    marginRight: "10px",
                    transition: "background-color 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#2563eb"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#3b82f6"}
            >
                🔄 다시 시도
            </button>

            {/* 홈으로 돌아가기 */}
            <a
                href="/loading-test"
                style={{
                    display: "inline-block",
                    backgroundColor: "#6b7280",
                    color: "white",
                    textDecoration: "none",
                    padding: "12px 30px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    transition: "background-color 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#4b5563"}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#6b7280"}
            >
                🏠 정상 페이지로
            </a>

            {/* 학습 포인트 설명 */}
            <div style={{
                marginTop: "50px",
                padding: "20px",
                backgroundColor: "#f0f9ff",
                borderRadius: "12px",
                textAlign: "left",
                border: "1px solid #bae6fd"
            }}>
                <h3 style={{ margin: "0 0 15px 0", color: "#0369a1" }}>
                    📚 error.tsx 학습 포인트
                </h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#0c4a6e" }}>
                    <li><strong>&quot;use client&quot;</strong> - 반드시 클라이언트 컴포넌트</li>
                    <li><strong>error</strong> - Error 객체 (메시지, 스택 등)</li>
                    <li><strong>reset()</strong> - 에러 복구 시도 (리렌더링)</li>
                    <li><strong>digest</strong> - 서버 에러의 고유 ID</li>
                </ul>
            </div>
        </div>
    );
}
