// src/app/products/page.tsx
// 🔥 페이징(Pagination) 학습!
// searchParams로 쿼리스트링(?page=1)을 받아서 페이징 처리

import Link from 'next/link';
import productsData from '@/data/products.json';

// 페이지당 보여줄 상품 수
const ITEMS_PER_PAGE = 5;

export default async function ProductsPage({
    searchParams,
}: {
    // Next.js 15에서 searchParams는 Promise!
    searchParams: Promise<{ page?: string }>
}) {
    // searchParams에서 page 값 추출
    const { page } = await searchParams;
    const currentPage = Number(page) || 1;

    // 전체 상품과 페이지 계산
    const allProducts = productsData.products;
    const totalItems = allProducts.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // 현재 페이지가 유효한지 확인
    const validPage = Math.min(Math.max(1, currentPage), totalPages);

    // 현재 페이지에 해당하는 상품만 추출 (오프셋 기반)
    const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProducts = allProducts.slice(startIndex, endIndex);

    return (
        <div style={{
            border: '3px solid red',
            padding: '20px',
            background: '#ffebee'
        }}>
            <h1 style={{ color: 'red' }}>🔴 상품 목록 (페이징 적용)</h1>

            {/* 📚 페이징 개념 설명 */}
            <div style={{
                background: '#fff3e0',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #ffcc80'
            }}>
                <strong>📖 페이징 학습 포인트:</strong>
                <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
                    <li><code>searchParams</code>: URL의 쿼리스트링(?page=1)을 읽어옴</li>
                    <li><code>오프셋 계산</code>: (현재페이지 - 1) × 페이지당개수</li>
                    <li><code>slice(start, end)</code>: 배열에서 해당 범위만 추출</li>
                </ul>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                    현재 URL: <code>/products?page={validPage}</code>
                </p>
            </div>

            {/* 📊 현재 페이지 정보 */}
            <div style={{
                background: '#e8f5e9',
                padding: '10px 15px',
                borderRadius: '8px',
                marginBottom: '15px'
            }}>
                <strong>📊 페이지 정보:</strong> {validPage} / {totalPages} 페이지
                (전체 {totalItems}개 상품, 페이지당 {ITEMS_PER_PAGE}개)
            </div>

            {/* 🛒 상품 목록 */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '20px'
            }}>
                {currentProducts.map((product, index) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div style={{
                            background: 'white',
                            padding: '15px',
                            borderRadius: '8px',
                            border: '1px solid #ddd',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                        }}>
                            <div>
                                <span style={{ color: '#999', marginRight: '10px' }}>
                                    #{startIndex + index + 1}
                                </span>
                                <strong>{product.name}</strong>
                                <span style={{
                                    marginLeft: '10px',
                                    background: '#e3f2fd',
                                    padding: '2px 8px',
                                    borderRadius: '4px',
                                    fontSize: '12px'
                                }}>
                                    {product.category}
                                </span>
                            </div>
                            <div style={{ color: '#e91e63', fontWeight: 'bold' }}>
                                {product.price.toLocaleString()}원
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* 🔢 페이지네이션 UI */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
            }}>
                {/* 이전 버튼 */}
                {validPage > 1 ? (
                    <Link
                        href={`/products?page=${validPage - 1}`}
                        style={{
                            padding: '8px 16px',
                            background: '#2196f3',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px'
                        }}
                    >
                        ← 이전
                    </Link>
                ) : (
                    <span style={{
                        padding: '8px 16px',
                        background: '#ccc',
                        color: '#666',
                        borderRadius: '4px'
                    }}>
                        ← 이전
                    </span>
                )}

                {/* 페이지 번호들 */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <Link
                        key={pageNum}
                        href={`/products?page=${pageNum}`}
                        style={{
                            padding: '8px 12px',
                            background: pageNum === validPage ? '#e91e63' : '#f5f5f5',
                            color: pageNum === validPage ? 'white' : '#333',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            fontWeight: pageNum === validPage ? 'bold' : 'normal'
                        }}
                    >
                        {pageNum}
                    </Link>
                ))}

                {/* 다음 버튼 */}
                {validPage < totalPages ? (
                    <Link
                        href={`/products?page=${validPage + 1}`}
                        style={{
                            padding: '8px 16px',
                            background: '#2196f3',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '4px'
                        }}
                    >
                        다음 →
                    </Link>
                ) : (
                    <span style={{
                        padding: '8px 16px',
                        background: '#ccc',
                        color: '#666',
                        borderRadius: '4px'
                    }}>
                        다음 →
                    </span>
                )}
            </div>

            {/* 💡 코드 설명 */}
            <div style={{
                marginTop: '20px',
                padding: '15px',
                background: '#fce4ec',
                borderRadius: '8px',
                fontSize: '14px'
            }}>
                <strong>💡 핵심 코드 흐름:</strong>
                <pre style={{
                    background: '#fff',
                    padding: '10px',
                    borderRadius: '4px',
                    overflow: 'auto',
                    fontSize: '12px'
                }}>
                    {`// 1. searchParams에서 page 추출
const { page } = await searchParams;
const currentPage = Number(page) || 1;

// 2. 오프셋 계산
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
// 예: page=2 → (2-1) * 5 = 5번 인덱스부터

// 3. 해당 범위 상품 추출
const currentProducts = allProducts.slice(startIndex, endIndex);`}
                </pre>
            </div>
        </div>
    );
}
