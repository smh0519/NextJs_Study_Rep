"use client"
// ✅ 클라이언트 컴포넌트!

import { useState, useEffect } from "react";

export default function Clock() {
    // ✅ useState: 현재 시간 저장
    const [time, setTime] = useState<Date | null>(null);

    // ✅ useEffect: 1초마다 시간 업데이트
    useEffect(() => {
        console.log("🌐 Clock useEffect 시작!");

        // 초기 시간 설정
        setTime(new Date());

        // 1초마다 시간 업데이트
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // 클린업: 컴포넌트가 사라지면 타이머 정리
        return () => {
            console.log("🧹 Clock 타이머 정리!");
            clearInterval(timer);
        };
    }, []);

    return (
        <div style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
            <h3>⏰ 실시간 시계 (useEffect)</h3>
            <p style={{ color: "gray", fontSize: "12px" }}>
                useEffect + setInterval
            </p>

            <div style={{
                fontSize: "36px",
                fontWeight: "bold",
                textAlign: "center",
                margin: "20px 0",
                fontFamily: "monospace",
                color: "#9c27b0"
            }}>
                {time ? time.toLocaleTimeString("ko-KR") : "로딩 중..."}
            </div>

            <div style={{
                fontSize: "14px",
                textAlign: "center",
                color: "#666"
            }}>
                {time ? time.toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    weekday: "long"
                }) : ""}
            </div>

            <p style={{
                marginTop: "15px",
                padding: "10px",
                background: "#f3e5f5",
                borderRadius: "8px",
                fontSize: "12px"
            }}>
                💡 이 시계는 1초마다 업데이트됨!<br />
                위의 <strong>서버 시간</strong>과 비교해보세요.<br />
                서버 시간은 고정, 이건 실시간!
            </p>
        </div>
    );
}
