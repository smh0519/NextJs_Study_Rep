// src/app/loading-test/page.tsx
// 로딩과 에러 처리를 학습하기 위한 페이지

// 의도적으로 지연시키는 함수
async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 가상의 데이터를 가져오는 함수 (3초 지연)
async function fetchSlowData(shouldError: boolean) {
    // 3초 동안 기다림 - 이 동안 loading.tsx가 표시됨
    // await delay(3000);

    // ?error=true 파라미터가 있으면 에러 발생
    if (shouldError) {
        throw new Error("데이터를 불러오는 데 실패했습니다! 😢");
    }

    // 성공 시 반환할 데이터
    return {
        message: "데이터 로딩 성공! 🎉",
        timestamp: new Date().toLocaleTimeString('ko-KR'),
        items: [
            { id: 1, name: "사과", price: 1000 },
            { id: 2, name: "바나나", price: 1500 },
            { id: 3, name: "오렌지", price: 2000 },
        ]
    };
}

// 페이지 컴포넌트
export default async function LoadingTestPage({
    searchParams,
}: {
    searchParams: Promise<{ error?: string }>;
}) {
    // URL에서 error 파라미터 확인
    const params = await searchParams;
    const shouldError = params.error === "true";

    // 데이터 가져오기 (3초 소요)
    const data = await fetchSlowData(shouldError);

    return (
        <div style={{
            padding: "40px",
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily: "system-ui, sans-serif"
        }}>
            <h1 style={{ color: "#22c55e", marginBottom: "20px" }}>
                ✅ {data.message}
            </h1>

            <p style={{ color: "#666", marginBottom: "30px" }}>
                로딩 완료 시간: {data.timestamp}
            </p>

            <h2 style={{ marginBottom: "15px" }}>📦 상품 목록</h2>
            <ul style={{
                listStyle: "none",
                padding: 0,
                backgroundColor: "#f0f9ff",
                borderRadius: "12px",
                overflow: "hidden"
            }}>
                {data.items.map(item => (
                    <li key={item.id} style={{
                        padding: "15px 20px",
                        borderBottom: "1px solid #e0f2fe",
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <span>{item.name}</span>
                        <span style={{ color: "#0284c7", fontWeight: "bold" }}>
                            {item.price.toLocaleString()}원
                        </span>
                    </li>
                ))}
            </ul>

            <div style={{
                marginTop: "40px",
                padding: "20px",
                backgroundColor: "#fefce8",
                borderRadius: "12px",
                border: "1px solid #fef08a"
            }}>
                <h3 style={{ margin: "0 0 10px 0", color: "#ca8a04" }}>💡 테스트 방법</h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#713f12" }}>
                    <li><code>/loading-test</code> → 정상 로딩</li>
                    <li><code>/loading-test?error=true</code> → 에러 발생</li>
                    <li>페이지 새로고침으로 로딩 UI 다시 확인</li>
                </ul>
            </div>
        </div>
    );
}
