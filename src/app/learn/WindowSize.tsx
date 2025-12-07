"use client"
// ✅ 클라이언트 컴포넌트!

import { useState, useEffect } from "react";

export default function WindowSize() {
    // ✅ useState: 화면 크기 상태 저장
    const [size, setSize] = useState({ width: 0, height: 0 });

    // ✅ useEffect: 컴포넌트가 마운트되면 실행!
    useEffect(() => {
        console.log("🌐 WindowSize useEffect 실행! (브라우저에서만!)");

        // 초기값 설정
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

        // 화면 크기 변경 감지
        function handleResize() {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        // 이벤트 리스너 등록
        window.addEventListener("resize", handleResize);

        // 클린업: 컴포넌트가 사라질 때 이벤트 제거
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // 빈 배열 = 처음 한번만 실행

    return (
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
            <h3>📐 화면 크기 (useEffect)</h3>
            <p style={{ color: "gray", fontSize: "12px" }}>
                useEffect + window API
            </p>

            <div style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                margin: "20px 0"
            }}>
                <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", fontWeight: "bold", color: "#2196f3" }}>
                        {size.width}
                    </div>
                    <div style={{ fontSize: "12px", color: "gray" }}>너비 (px)</div>
                </div>
                <div style={{ fontSize: "32px", color: "#ccc" }}>×</div>
                <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", fontWeight: "bold", color: "#ff9800" }}>
                        {size.height}
                    </div>
                    <div style={{ fontSize: "12px", color: "gray" }}>높이 (px)</div>
                </div>
            </div>

            <p style={{
                padding: "10px",
                background: "#e3f2fd",
                borderRadius: "8px",
                fontSize: "12px"
            }}>
                💡 브라우저 창 크기를 바꿔보세요!<br />
                실시간으로 업데이트됩니다.<br />
                <strong>window</strong>는 브라우저에만 있어서 서버에서는 사용 불가!
            </p>
        </div>
    );
}
