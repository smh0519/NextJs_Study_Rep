"use client"
// ✅ 클라이언트 컴포넌트! ("use client" 있음)

import { useState } from "react";

export default function Counter() {
    console.log("🌐 브라우저에서 Counter 렌더링됨! (개발자도구 콘솔 확인!)");

    // ✅ useState: 클라이언트 컴포넌트에서만 가능!
    const [count, setCount] = useState(0);

    return (
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
            <h3>🔢 카운터 (useState)</h3>
            <p style={{ color: "gray", fontSize: "12px" }}>
                useState로 상태 관리
            </p>

            <div style={{
                fontSize: "48px",
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px 0"
            }}>
                {count}
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                {/* ✅ onClick: 클라이언트 컴포넌트에서만 가능! */}
                <button
                    onClick={() => setCount(count - 1)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "20px",
                        cursor: "pointer",
                        background: "#ff5252",
                        color: "white",
                        border: "none",
                        borderRadius: "8px"
                    }}
                >
                    -1
                </button>
                <button
                    onClick={() => setCount(0)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                        background: "#888",
                        color: "white",
                        border: "none",
                        borderRadius: "8px"
                    }}
                >
                    리셋
                </button>
                <button
                    onClick={() => setCount(count + 1)}
                    style={{
                        padding: "10px 20px",
                        fontSize: "20px",
                        cursor: "pointer",
                        background: "#4caf50",
                        color: "white",
                        border: "none",
                        borderRadius: "8px"
                    }}
                >
                    +1
                </button>
            </div>

            <p style={{
                marginTop: "15px",
                padding: "10px",
                background: "#e8f5e9",
                borderRadius: "8px",
                fontSize: "12px"
            }}>
                💡 버튼 클릭 → setCount 호출 → 화면 업데이트!<br />
                서버 컴포넌트에서는 이게 불가능해!
            </p>
        </div>
    );
}
