// src/app/page.tsx
// 이 파일은 "/" 경로의 페이지야!

export default function HomePage() {
  return (
    <div style={{
      border: '3px solid green',
      padding: '20px',
      background: '#e8f5e9'
    }}>
      <h1 style={{ color: 'green' }}>🟢 홈페이지 (src/app/page.tsx)</h1>
      <p>나는 RootLayout의 children으로 들어왔어!</p>
      <p>URL: <code>/</code></p>
    </div>
  );
}
