// src/app/parallel-test/@sidebar/page.tsx
// 사이드바 슬롯의 페이지 (1초 로딩)

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function SidebarPage() {
    // 1초 동안 로딩
    await delay(1000);

    const menuItems = [
        { icon: "🏠", label: "홈", active: true },
        { icon: "📊", label: "대시보드", active: false },
        { icon: "👤", label: "프로필", active: false },
        { icon: "⚙️", label: "설정", active: false },
        { icon: "📧", label: "메시지", active: false },
    ];

    return (
        <div>
            <p style={{
                fontSize: "12px",
                color: "#92400e",
                marginBottom: "15px"
            }}>
                ✅ 1초 후 로딩 완료!
            </p>

            <nav>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                padding: "12px 15px",
                                marginBottom: "8px",
                                backgroundColor: item.active ? "#fbbf24" : "#fef9c3",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                fontWeight: item.active ? "bold" : "normal"
                            }}
                        >
                            {item.icon} {item.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
