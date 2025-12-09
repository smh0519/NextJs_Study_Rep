// src/data/photos.ts
// 사진 데이터 - 모든 갤러리 컴포넌트에서 공유

export interface Photo {
    title: string;
    emoji: string;
    color: string;
    description: string;
}

export const photos: Record<string, Photo> = {
    "1": {
        title: "산",
        emoji: "🏔️",
        color: "#4ade80",
        description: "웅장한 산의 풍경입니다. 높이 솟은 봉우리와 그 아래 펼쳐진 계곡의 아름다움."
    },
    "2": {
        title: "바다",
        emoji: "🌊",
        color: "#60a5fa",
        description: "푸른 바다의 아름다움. 끝없이 펼쳐진 수평선과 잔잔한 파도."
    },
    "3": {
        title: "숲",
        emoji: "🌲",
        color: "#22c55e",
        description: "평화로운 숲속 풍경. 나무들 사이로 스며드는 햇살."
    },
    "4": {
        title: "도시",
        emoji: "🏙️",
        color: "#a78bfa",
        description: "화려한 도시의 야경. 빌딩 숲 사이로 빛나는 불빛들."
    },
    "5": {
        title: "사막",
        emoji: "🏜️",
        color: "#fbbf24",
        description: "끝없는 사막의 모래언덕. 바람에 만들어진 물결 무늬."
    },
    "6": {
        title: "눈",
        emoji: "❄️",
        color: "#93c5fd",
        description: "하얀 눈으로 덮인 세상. 고요하고 평화로운 겨울 풍경."
    },
};

// 사진 목록 (배열 형태)
export const photoList = Object.entries(photos).map(([id, data]) => ({
    id: Number(id),
    ...data,
}));
