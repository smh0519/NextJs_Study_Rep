// src/app/gallery/@modal/(.)photo/[id]/page.tsx
// 인터셉트된 모달 버전! (.)은 같은 레벨을 인터셉트
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { photos } from "@/data/photos";


export default function PhotoModal({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const router = useRouter();

    // params를 동기적으로 사용하기 위해 use() 대신 간단히 처리
    // 실제로는 React.use()를 사용해야 하지만, 예제 단순화를 위해
    const id = "1"; // 기본값 (실제로는 params에서 가져옴)

    return (
        <PhotoModalContent
            paramsPromise={params}
            onClose={() => router.back()}
        />
    );
}

function PhotoModalContent({
    paramsPromise,
    onClose,
}: {
    paramsPromise: Promise<{ id: string }>;
    onClose: () => void;
}) {
    // React 19에서는 use()를 사용하지만, 여기서는 간단히 처리
    const [photo, setPhoto] = React.useState<typeof photos["1"] | null>(null);
    const [id, setId] = React.useState<string>("");

    React.useEffect(() => {
        paramsPromise.then((p) => {
            setId(p.id);
            setPhoto(photos[p.id] || photos["1"]);
        });
    }, [paramsPromise]);

    if (!photo) return null;

    return (
        <>
            {/* 배경 오버레이 */}
            <div
                onClick={onClose}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    zIndex: 100,
                    cursor: "pointer"
                }}
            />

            {/* 모달 */}
            <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "30px",
                zIndex: 101,
                minWidth: "400px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
            }}>
                {/* 모달 헤더 */}
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px"
                }}>
                    <span style={{
                        backgroundColor: "#fef3c7",
                        padding: "5px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        color: "#92400e",
                        fontWeight: "bold"
                    }}>
                        ✨ 모달 버전
                    </span>
                    <button
                        onClick={onClose}
                        style={{
                            background: "none",
                            border: "none",
                            fontSize: "24px",
                            cursor: "pointer",
                            padding: "5px"
                        }}
                    >
                        ✕
                    </button>
                </div>

                {/* 사진 내용 */}
                <div style={{
                    backgroundColor: photo.color,
                    borderRadius: "16px",
                    padding: "60px 40px",
                    textAlign: "center",
                    marginBottom: "20px"
                }}>
                    <div style={{ fontSize: "80px", marginBottom: "15px" }}>
                        {photo.emoji}
                    </div>
                    <h2 style={{ color: "white", margin: 0 }}>
                        {photo.title}
                    </h2>
                </div>

                <p style={{ color: "#6b7280", textAlign: "center" }}>
                    {photo.description}
                </p>

                {/* 학습 포인트 */}
                <div style={{
                    marginTop: "20px",
                    padding: "15px",
                    backgroundColor: "#f0f9ff",
                    borderRadius: "8px",
                    fontSize: "14px",
                    color: "#0369a1"
                }}>
                    💡 이것은 <strong>인터셉트된</strong> 모달입니다!
                    <br />새로고침하면 전체 페이지로 바뀝니다.
                </div>
            </div>
        </>
    );
}
