// src/app/products/layout.tsx
// 🔥 중요! products 폴더 전용 레이아웃이야!
// 이 레이아웃은 RootLayout의 children으로 들어가고,
// 동시에 자기만의 children을 가져!

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    console.log("🛒 ProductsLayout 렌더링됨!");

    return (
        <div style={{
            border: '4px solid purple',
            padding: '15px',
            background: '#f3e5f5'
        }}>
            <h3 style={{ color: 'purple' }}>🟣 Products Layout (products/layout.tsx)</h3>
            <p style={{ color: 'purple' }}>
                나는 상품 관련 페이지들만 감싸는 중간 레이아웃이야!
            </p>
            <p style={{ fontSize: '12px', color: 'purple' }}>
                구조: RootLayout → ProductsLayout → page.tsx
            </p>

            {/* 상품 전용 사이드바 */}
            <div style={{ display: 'flex', gap: '20px' }}>
                <aside style={{
                    background: '#ce93d8',
                    padding: '10px',
                    borderRadius: '8px',
                    minWidth: '150px'
                }}>
                    <strong>📦 상품 사이드바</strong>
                    <p style={{ fontSize: '12px' }}>이건 products 하위에서만 보여!</p>
                </aside>

                {/* ⭐ ProductsLayout의 children */}
                <div style={{ flex: 1 }}>
                    <p style={{ color: 'gray', fontSize: '12px' }}>
                        ⬇️ ProductsLayout의 children
                    </p>
                    {children}
                    <p style={{ color: 'gray', fontSize: '12px' }}>
                        ⬆️ ProductsLayout의 children 끝
                    </p>
                </div>
            </div>
        </div>
    );
}
