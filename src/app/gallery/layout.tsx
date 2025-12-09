// src/app/gallery/layout.tsx
// 갤러리 레이아웃 - 모달 슬롯(@modal)을 포함

export default function GalleryLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;  // @modal 슬롯
}) {
    return (
        <div>
            {children}
            {modal}  {/* 모달이 여기에 표시됨 */}
        </div>
    );
}
