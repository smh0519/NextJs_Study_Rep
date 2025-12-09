// src/app/gallery/photo/[id]/page.tsx
// 전체 페이지 버전 (새로고침/직접 접속 시)

import Link from "next/link";
import { photos } from "@/data/photos";


export default async function PhotoPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const photo = photos[id] || photos["1"];

    return (
        <div style={{
            padding: "40px",
            maxWidth: "600px",
            margin: "0 auto",
            minHeight: "100vh"
        }}>
            {/* 전체 페이지 표시 */}
            <div style={{
                backgroundColor: "#fef2f2",
                padding: "10px 20px",
                borderRadius: "8px",
                marginBottom: "20px",
                border: "1px solid #fecaca"
            }}>
                <span style={{ color: "#dc2626", fontWeight: "bold" }}>
                    📄 전체 페이지 버전
                </span>
                <span style={{ color: "#991b1b", marginLeft: "10px" }}>
                    (새로고침 또는 직접 접속)
                </span>
            </div>

            {/* 뒤로가기 링크 */}
            <Link
                href="/gallery"
                style={{
                    display: "inline-block",
                    marginBottom: "20px",
                    color: "#3b82f6",
                    textDecoration: "none",
                    fontWeight: "bold"
                }}
            >
                ← 갤러리로 돌아가기
            </Link>

            {/* 사진 카드 */}
            <div style={{
                backgroundColor: photo.color,
                borderRadius: "20px",
                padding: "80px 40px",
                textAlign: "center",
                marginBottom: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
            }}>
                <div style={{ fontSize: "120px", marginBottom: "20px" }}>
                    {photo.emoji}
                </div>
                <h1 style={{ color: "white", margin: 0, fontSize: "36px" }}>
                    {photo.title}
                </h1>
            </div>

            {/* 설명 */}
            <div style={{
                backgroundColor: "#f9fafb",
                padding: "25px",
                borderRadius: "12px",
                marginBottom: "30px"
            }}>
                <h2 style={{ marginTop: 0, color: "#1f2937" }}>📝 설명</h2>
                <p style={{ color: "#6b7280", lineHeight: 1.8, margin: 0 }}>
                    {photo.description}
                </p>
            </div>

            {/* 학습 포인트 */}
            <div style={{
                backgroundColor: "#f0fdf4",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #86efac"
            }}>
                <h3 style={{ margin: "0 0 15px 0", color: "#15803d" }}>
                    💡 인터셉팅 라우트 학습 포인트
                </h3>
                <ul style={{ margin: 0, paddingLeft: "20px", color: "#166534" }}>
                    <li>갤러리에서 클릭 → <strong>모달</strong>로 열림</li>
                    <li>새로고침 / URL 직접 입력 → <strong>이 전체 페이지</strong></li>
                    <li>같은 URL(<code>/gallery/photo/{id}</code>)인데 다른 UI!</li>
                </ul>
            </div>
        </div>
    );
}
