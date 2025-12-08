// src/app/profile/actions.ts
// Server Action - 프로필 수정 로직
"use server"

import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

const PROFILE_PATH = path.join(process.cwd(), "src/data/profile.json");

// 프로필 읽기
export async function getProfile() {
    const data = await fs.readFile(PROFILE_PATH, "utf-8");
    return JSON.parse(data);
}

// 프로필 수정 + 캐시 무효화
export async function updateProfile(formData: FormData) {
    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;

    // 1. "DB"에 저장 (JSON 파일)
    const newProfile = {
        name,
        bio,
        updatedAt: new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
    };

    await fs.writeFile(PROFILE_PATH, JSON.stringify(newProfile, null, 2));

    console.log("✅ 프로필 저장됨:", newProfile);

    // 2. ⭐ 캐시 무효화! - 이게 핵심!
    revalidatePath("/profile");

    console.log("🔄 /profile 캐시 무효화됨!");
}
