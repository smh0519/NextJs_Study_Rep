// src/app/products/page.tsx
// 이 파일은 "/products" 경로의 페이지야!

export default function ProductsPage() {
    return (
        <div style={{
            border: '3px solid red',
            padding: '20px',
            background: '#ffebee'
        }}>
            <h1 style={{ color: 'red' }}>🔴 상품 목록 페이지 (products/page.tsx)</h1>
            <p>나는 ProductsLayout의 children으로 들어왔어!</p>
            <p>URL: <code>/products</code></p>

            <div style={{ marginTop: '15px', padding: '10px', background: '#ffcdd2', borderRadius: '8px' }}>
                <strong>🤔 생각해보기:</strong>
                <ul>
                    <li>🟦 파란 테두리 = RootLayout</li>
                    <li>🟣 보라 테두리 = ProductsLayout</li>
                    <li>🔴 빨간 테두리 = 이 페이지 (page.tsx)</li>
                </ul>
                <p>→ 레이아웃이 겹겹이 감싸고 있어!</p>
            </div>
        </div>
    );
}
