// src/app/parallel-test/layout.tsx
// 병렬 라우트를 사용하는 레이아웃
// @sidebar와 @main 슬롯을 받아서 배치합니다

export default function ParallelLayout({
    children,
    sidebar,
    main,
}: {
    children: React.ReactNode;
    sidebar: React.ReactNode;  // @sidebar 폴더의 내용
    main: React.ReactNode;     // @main 폴더의 내용
}) {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{
                marginBottom: "20px",
                color: "#1e40af",
                borderBottom: "2px solid #3b82f6",
                paddingBottom: "10px"
            }}>
                🔄 병렬 라우트 (Parallel Routes) 예제
            </h1>

            <p style={{
                marginBottom: "30px",
                color: "#6b7280",
                backgroundColor: "#f0f9ff",
                padding: "15px",
                borderRadius: "8px"
            }}>
                💡 각 영역이 <strong>독립적으로</strong> 로딩됩니다.
                사이드바(1초)와 메인(3초)의 로딩 시간이 다른 것을 확인하세요!
            </p>

            {/* 병렬 레이아웃 */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "250px 1fr",
                gap: "20px",
                minHeight: "400px"
            }}>
                {/* 사이드바 영역 - @sidebar */}
                <div style={{
                    backgroundColor: "#fef3c7",
                    borderRadius: "12px",
                    padding: "20px",
                    border: "2px solid #fbbf24"
                }}>
                    <h3 style={{ margin: "0 0 15px 0", color: "#92400e" }}>
                        📂 @sidebar 슬롯
                    </h3>
                    {sidebar}
                </div>

                {/* 메인 영역 - @main */}
                <div style={{
                    backgroundColor: "#dbeafe",
                    borderRadius: "12px",
                    padding: "20px",
                    border: "2px solid #3b82f6"
                }}>
                    <h3 style={{ margin: "0 0 15px 0", color: "#1e40af" }}>
                        📄 @main 슬롯
                    </h3>
                    {main}
                </div>
            </div>

            {/* children은 page.tsx가 있을 때 표시 */}
            {children}
        </div>
    );
}
