// src/app/products/[id]/page.tsx
// 🔥 동적 라우팅! [id]는 변수야!
// /products/1, /products/2, /products/abc 등 모든 경로가 여기로 와!

export default function ProductDetailPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    // Next.js 15부터 params가 Promise이므로 use()로 풀거나 async/await 사용
    // 여기선 간단하게 React.use() 사용
    const { id } = require('react').use(params);

    return (
        <div style={{
            border: '3px dashed teal',
            padding: '20px',
            background: '#e0f2f1'
        }}>
            <h1 style={{ color: 'teal' }}>🔷 상품 상세 페이지 (products/[id]/page.tsx)</h1>
            <p>나도 ProductsLayout의 children이야!</p>
            <p>URL: <code>/products/{id}</code></p>

            <div style={{
                marginTop: '15px',
                padding: '15px',
                background: '#b2dfdb',
                borderRadius: '8px'
            }}>
                <h2>📦 상품 ID: {id}</h2>
                <p>
                    [id] 폴더 덕분에 동적으로 값을 받아올 수 있어!
                </p>
                <ul>
                    <li>/products/1 → id = "1"</li>
                    <li>/products/2 → id = "2"</li>
                    <li>/products/hello → id = "hello"</li>
                </ul>
            </div>
        </div>
    );
}
