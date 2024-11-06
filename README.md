# Loan library system

โปรเจค Loan library system เป็นเว็บแอปพลิเคชันที่พัฒนาด้วย React เพื่อช่วยคำนวณและหารค่าใช้จ่ายอาหารระหว่างผู้ใช้หลายคน เหมาะสำหรับการศึกษาและสามารถนำไปต่อยอดได้ตามความต้องการ
ผมได้แบ่งเป็น 2 ไฟล์ระหว่าง frontend แลพ bankend คุณสามารถดูได้ที่ลิงค์

### 🛠 เทคโนโลยีที่ใช้
- React - สำหรับโครงสร้างและการจัดการ UI
- Tailwind CSS - สำหรับการตกแต่ง UI ให้มีความสวยงาม
- MongoDB - สำหรับเก็บข้อมูลและบันทึก
- express - เพื่อทำ REST api 
 
### 🚀 การติดตั้งและการใช้งาน
1. Clone Repo นี้ลงในโปรเจคของคุณ
```
git clone https://github.com/username/food-sharing-calculator.git
cd food-sharing-calculator
```

2. ติดตั้ง npm ใน Dependencies
```
npm install
```

3. เริ่มต้นการใช้งาน
```
npm run dev
```

### 🧩 โครงสร้างโปรเจ็คนี้่
```
sharing-app/
├── public/
├── src/
│   ├── components/
│   │   ├── LoanList.jsx          # ส่วน List รายการ
│   │   ├── Modal.jsx             # ส่วนสร้าง Modal
│   │   └── Navbar.jsx            # ส่วนแสดง Navigation Bar
│   ├── App.js                    # ไฟล์หลักที่รวม Components ต่าง ๆ
│   ├── index.js
│   └── App.css                 # สไตล์ css พื้นฐานของแอป
└── package.json
```

สามารถ Fork โปรเจคนี้และพัฒนาเพิ่มเติมได้ หากต้องการส่ง Pull Request เพื่อแก้ไขหรือเพิ่มฟีเจอร์ใหม่ ๆ ยินดีต้อนรับนะครับ!
