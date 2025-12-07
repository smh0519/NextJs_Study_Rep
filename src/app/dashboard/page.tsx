// src/app/dashboard/page.tsx
// 이 파일은 "/dashboard" 경로의 페이지야!
// dashboard 폴더에는 layout.tsx가 없어!

export default function DashboardPage() {
    return (
        <div style={{
            border: '3px solid brown',
            padding: '20px',
            background: '#efebe9'
        }}>
            <h1 style={{ color: 'brown' }}>🟤 대시보드 페이지 (dashboard/page.tsx)</h1>
            <p>나는 바로 RootLayout의 children으로 들어왔어!</p>
            <p>URL: <code>/dashboard</code></p>

            <div style={{
                marginTop: '15px',
                padding: '10px',
                background: '#d7ccc8',
                borderRadius: '8px'
            }}>
                <strong>💡 비교해보기:</strong>
                <ul>
                    <li>dashboard는 자체 layout.tsx가 <strong>없어서</strong> → 바로 RootLayout에 들어감</li>
                    <li>products는 자체 layout.tsx가 <strong>있어서</strong> → ProductsLayout을 거쳐서 RootLayout에 들어감</li>
                </ul>
            </div>
        </div>
    );
}
