import React, { useEffect, useState } from "react";
import { UserPlus } from "react-feather";
import Modal from "./Modal";

function LoanList() {

  // สร้าง State สำหรับเช็ตค่าต่าง ๆ
  const [loans, setLoans] = useState([]);
  const [open, setOpen] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // ฟังก์ชันที่จะทำงานครั้งเดียว เมื่อคอมโพเนนต์ถูกเรนเดอร์ครั้งแรก
  useEffect(() => {
    fetchLoans();
  }, []);

  // fetch REST api จาก Local host
  const fetchLoans = async () => {
    try {
      const response = await fetch("http://localhost:3000/loan");
      if (response.ok) {
        const data = await response.json();
        setLoans(data);
      } else {
        console.error("Failed to fetch loans");
      }
    } catch (error) {
      console.error("Error fetching loans:", error);
    }
  };

  const addLoan = async () => {
    const newLoan = {
      studentId,
      studentName,
      bookTitle,
      returnDate,
    };

    try {
      const response = await fetch("http://localhost:3000/loan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLoan),
      });

      if (response.ok) {
        fetchLoans(); 
        setOpen(false); 
        
        setStudentId("");
        setStudentName("");
        setBookTitle("");
        setReturnDate("");
      } else {
        console.error("Failed to add loan");
      }
    } catch (error) {
      console.error("Error adding loan:", error);
    }
  };

  
  const formatThaiDate = (dateString) => {
    const date = new Date(dateString);
    const thaiMonths = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม",
    ];
    const day = date.getDate();
    const month = thaiMonths[date.getMonth()];
    const year = date.getFullYear() + 543; // Convert to Buddhist Era
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">
          รายชื่อนักเรียนที่ยืมหนังสือ
        </h2>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setOpen(true)}
        >
          เพิ่มรายการ
        </button>
      </div>
      <Modal Onopen={open} Onclose={() => setOpen(false)}>
        <div className="text-center w-56">
          <UserPlus size={56} className=" mx-auto text-gray-600" />
          <h3 className="text-lg mx-auto">เพิ่มรายการใหม่</h3>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">รหัสนักเรียน</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ชื่อนักเรียน</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">หนังสือ</label>
          <input
            type="text"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">คืนวันที่</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex gap-4">
          <button
            onClick={addLoan}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-1"
          >
            เพิ่มรายการ
          </button>
        </div>
      </Modal>

      <table className="min-w-full bg-white border border-gray-200 shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">รหัสนักเรียน</th>
            <th className="py-2 px-4 border-b">ชื่อนักเรียน</th>
            <th className="py-2 px-4 border-b">หนังสือ</th>
            <th className="py-2 px-4 border-b">คืนวันที่</th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan._id}>
              <td className="py-2 px-4 border-b text-center">
                {loan.studentId}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {loan.studentName}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {loan.bookTitle}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {formatThaiDate(loan.returnDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanList;
