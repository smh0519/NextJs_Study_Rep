// src/app/parallel-test/page.tsx
// 기본 children 슬롯 (이 파일은 비워둬도 됨)
// 병렬 라우트에서는 주로 @슬롯들을 사용합니다

export default function ParallelPage() {
    // 이 내용은 layout.tsx의 {children} 위치에 표시됨
    // 병렬 라우트 예제에서는 주로 @sidebar, @main을 사용하므로
    // 이 페이지는 없어도 됩니다
    return <h1>test page</h1>;
}
