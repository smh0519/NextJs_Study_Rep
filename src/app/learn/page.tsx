// src/app/learn/page.tsx
// ✅ 서버 컴포넌트! ("use client" 없음)

// 클라이언트 컴포넌트들을 가져옴
import Counter from "./Counter";
import WindowSize from "./WindowSize";
import Clock from "./Clock";

export default function LearnPage() {
    // 서버에서 실행되는 코드
    const serverTime = new Date().toLocaleTimeString("ko-KR");
    console.log("🖥️ 서버에서 렌더링됨! (터미널에서 확인해봐!)");

    return (
        <div style={{ padding: "20px" }}>
            <h1>🎓 서버 vs 클라이언트 컴포넌트 학습</h1>

            {/* ========== 서버 컴포넌트 영역 ========== */}
            <section style={{
                border: "4px solid blue",
                padding: "20px",
                margin: "20px 0",
                background: "#e3f2fd"
            }}>
                <h2 style={{ color: "blue" }}>🟦 서버 컴포넌트 영역</h2>
                <p><strong>특징:</strong> 서버에서 한 번 렌더링되고 끝!</p>

                <div style={{
                    background: "white",
                    padding: "15px",
                    borderRadius: "8px",
                    marginTop: "10px"
                }}>
                    <h3>📅 서버 시간 (고정됨)</h3>
                    <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                        {serverTime}
                    </p>
                    <p style={{ color: "gray", fontSize: "12px" }}>
                        ↑ 이 시간은 새로고침 해야 바뀜! (서버에서 렌더링된 시점)
                    </p>
                </div>

                <div style={{
                    background: "#ffebee",
                    padding: "10px",
                    borderRadius: "8px",
                    marginTop: "15px"
                }}>
                    <strong>❌ 서버 컴포넌트에서 못 하는 것:</strong>
                    <ul>
                        <li>useState 사용 불가</li>
                        <li>useEffect 사용 불가</li>
                        <li>onClick 이벤트 불가</li>
                        <li>브라우저 API (window, document) 불가</li>
                    </ul>
                </div>
            </section>

            {/* ========== 클라이언트 컴포넌트 영역 ========== */}
            <section style={{
                border: "4px solid green",
                padding: "20px",
                margin: "20px 0",
                background: "#e8f5e9"
            }}>
                <h2 style={{ color: "green" }}>🟩 클라이언트 컴포넌트 영역</h2>
                <p><strong>특징:</strong> 브라우저에서 JavaScript로 동작!</p>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px",
                    marginTop: "15px"
                }}>
                    {/* useState 예시 */}
                    <Counter />

                    {/* useEffect + 브라우저 API 예시 */}
                    <WindowSize />

                    {/* useEffect + setInterval 예시 */}
                    <Clock />
                </div>
            </section>

            {/* ========== 비교 설명 ========== */}
            <section style={{
                border: "4px solid purple",
                padding: "20px",
                margin: "20px 0",
                background: "#f3e5f5"
            }}>
                <h2 style={{ color: "purple" }}>🟣 직접 비교해보기</h2>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ background: "#ce93d8" }}>
                            <th style={{ padding: "10px", border: "1px solid #888" }}>비교</th>
                            <th style={{ padding: "10px", border: "1px solid #888" }}>🟦 서버 시간</th>
                            <th style={{ padding: "10px", border: "1px solid #888" }}>🟩 클라이언트 시계</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #888" }}>업데이트</td>
                            <td style={{ padding: "10px", border: "1px solid #888" }}>새로고침 해야 변경</td>
                            <td style={{ padding: "10px", border: "1px solid #888" }}>1초마다 자동 변경</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #888" }}>코드 위치</td>
                            <td style={{ padding: "10px", border: "1px solid #888" }}>서버에서 실행</td>
                            <td style={{ padding: "10px", border: "1px solid #888" }}>브라우저에서 실행</td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", border: "1px solid #888" }}>Hook 사용</td>
                            <td style={{ padding: "10px", border: "1px solid #888" }}>❌ 불가능</td>
                            <td style={{ padding: "10px", border: "1px solid #888" }}>✅ 가능</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}
