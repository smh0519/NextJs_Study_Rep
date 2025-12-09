// src/app/gallery/page.tsx
// 갤러리 메인 페이지 - 사진 목록

import Link from "next/link";
import { photoList } from "@/data/photos";


export default function GalleryPage() {
    return (
        <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ marginBottom: "10px", color: "#1e40af" }}>
                📸 사진 갤러리
            </h1>

            <p style={{
                marginBottom: "30px",
                color: "#6b7280",
                backgroundColor: "#fef3c7",
                padding: "15px",
                borderRadius: "8px"
            }}>
                💡 <strong>인터셉팅 라우트 예제:</strong> 사진을 클릭하면 <strong>모달</strong>로 열립니다.
                <br />하지만 새로고침하면 <strong>전체 페이지</strong>로 표시됩니다!
            </p>

            {/* 사진 그리드 */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "15px"
            }}>
                {photoList.map((photo) => (
                    <Link
                        key={photo.id}
                        href={`/gallery/photo/${photo.id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <div
                            className="photo-card"
                            style={{
                                backgroundColor: photo.color,
                                borderRadius: "12px",
                                padding: "40px 20px",
                                textAlign: "center",
                                cursor: "pointer",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                            }}
                        >
                            <div style={{ fontSize: "48px", marginBottom: "10px" }}>
                                {photo.emoji}
                            </div>
                            <div style={{ color: "white", fontWeight: "bold" }}>
                                {photo.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* CSS hover 효과 */}
            <style>{`
                .photo-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2) !important;
                }
            `}</style>

            {/* 테스트 안내 */}
            <div style={{
                marginTop: "40px",
                padding: "20px",
                backgroundColor: "#f0f9ff",
                borderRadius: "12px",
                border: "1px solid #bae6fd"
            }}>
                <h3 style={{ margin: "0 0 15px 0", color: "#0369a1" }}>
                    🧪 테스트 방법
                </h3>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#e0f2fe" }}>
                            <th style={{ padding: "10px", textAlign: "left" }}>동작</th>
                            <th style={{ padding: "10px", textAlign: "left" }}>결과</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: "10px", borderBottom: "1px solid #bae6fd" }}>
                                사진 클릭
                            </td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #bae6fd" }}>
                                ✨ <strong>모달</strong>로 열림 (배경에 갤러리 보임)
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px", borderBottom: "1px solid #bae6fd" }}>
                                모달에서 새로고침 (F5)
                            </td>
                            <td style={{ padding: "10px", borderBottom: "1px solid #bae6fd" }}>
                                📄 <strong>전체 페이지</strong>로 열림
                            </td>
                        </tr>
                        <tr>
                            <td style={{ padding: "10px" }}>
                                URL 직접 입력
                            </td>
                            <td style={{ padding: "10px" }}>
                                📄 <strong>전체 페이지</strong>로 열림
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
