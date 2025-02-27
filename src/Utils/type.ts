export type Route = {
  key: string; // คีย์เฉพาะของ route นี้
  name: string; // ชื่อของ route (ที่กำหนดใน Tab.Screen หรือ Stack.Screen)
  params?: Record<string, any> | {type: string}; // พารามิเตอร์ที่ส่งเข้ามา (ถ้ามี)
  path?: string; // Path URL (ในกรณีที่ใช้ Deeplinking)
};
