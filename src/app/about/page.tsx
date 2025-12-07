// src/app/about/page.tsx
// 이 파일은 "/about" 경로의 페이지야!

export default function AboutPage() {
    return (
        <div style={{
            border: '3px solid orange',
            padding: '20px',
            background: '#fff3e0'
        }}>
            <h1 style={{ color: 'orange' }}>🟠 About 페이지 (src/app/about/page.tsx)</h1>
            <p>나도 RootLayout의 children으로 들어왔어!</p>
            <p>URL: <code>/about</code></p>
            <p>⚡ about 폴더에는 layout.tsx가 없어서 바로 RootLayout에 들어감!</p>
        </div>
    );
}