// src/app/profile/page.tsx
// 프로필 페이지 (SSG - 캐시됨)

import { getProfile, updateProfile } from "./actions";

export default async function ProfilePage() {
    // 이 데이터는 캐시됨! (SSG)
    const profile = await getProfile();

    // 페이지가 렌더링된 시간 (캐시 확인용)
    const renderTime = new Date().toLocaleString("ko-KR", {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    console.log("📄 프로필 페이지 렌더링됨:", renderTime);

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
            <h1>👤 프로필 페이지</h1>

            {/* 캐시 확인용 */}
            <div style={{
                padding: "15px",
                background: "#e3f2fd",
                borderRadius: "8px",
                marginBottom: "20px"
            }}>
                <p style={{ margin: 0 }}>
                    📦 <strong>페이지 렌더링 시간:</strong> {renderTime}
                </p>
                <p style={{ margin: "5px 0 0", fontSize: "12px", color: "#666" }}>
                    ↑ 이 시간이 안 바뀌면 캐시된 페이지!
                </p>
            </div>

            {/* 현재 프로필 */}
            <div style={{
                padding: "20px",
                background: "#f5f5f5",
                borderRadius: "12px",
                marginBottom: "20px"
            }}>
                <h2 style={{ margin: "0 0 10px" }}>{profile.name}</h2>
                <p style={{ margin: 0, color: "#666" }}>{profile.bio}</p>
                <p style={{
                    margin: "10px 0 0",
                    fontSize: "12px",
                    color: "#999"
                }}>
                    마지막 수정: {profile.updatedAt}
                </p>
            </div>

            {/* 프로필 수정 폼 */}
            <form action={updateProfile}>
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                        이름
                    </label>
                    <input
                        name="name"
                        defaultValue={profile.name}
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxSizing: "border-box"
                        }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                        자기소개
                    </label>
                    <textarea
                        name="bio"
                        defaultValue={profile.bio}
                        rows={3}
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            boxSizing: "border-box",
                            resize: "vertical"
                        }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        background: "#4caf50",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    ✏️ 프로필 저장
                </button>
            </form>

            {/* 설명 */}
            <div style={{
                marginTop: "30px",
                padding: "15px",
                background: "#fff3e0",
                borderRadius: "8px",
                fontSize: "14px"
            }}>
                <h3 style={{ margin: "0 0 10px" }}>🔍 테스트 방법</h3>
                <ol style={{ margin: 0, paddingLeft: "20px" }}>
                    <li>페이지 새로고침 → 렌더링 시간 안 바뀜 (캐시됨)</li>
                    <li>프로필 수정 후 저장</li>
                    <li>자동으로 페이지가 새로고침되면서 시간이 바뀜!</li>
                    <li>→ <code>revalidatePath</code>가 캐시를 무효화했기 때문!</li>
                </ol>
            </div>
        </div>
    );
}
