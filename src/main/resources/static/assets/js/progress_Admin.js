console.log("✅ progress_Admin.js đã được load");

const mockData = [
  { id: 1, userName: "Trần Hoàng Thương", tenMui: "Mũi 1", ngay: "2025-04-01" },
  { id: 2, userName: "Trần Hoàng Thương", tenMui: "Mũi 2", ngay: "2025-05-01" },
  { id: 3, userName: "Trần Hoàng Thương", tenMui: "Mũi 3", ngay: "2025-07-01" },
  { id: 4, userName: "Trần Hoàng Thương", tenMui: "Mũi 4", ngay: "2025-09-01" },
  { id: 5, userName: "Trần Thị B", tenMui: "Mũi 1", ngay: "2025-03-10" },
  { id: 6, userName: "Trần Thị B", tenMui: "Mũi 2", ngay: "2025-04-10" },
  { id: 7, userName: "Trần Thị B", tenMui: "Mũi 3", ngay: "2025-05-10" },
  { id: 8, userName: "Trần Thị B", tenMui: "Mũi 4", ngay: "2025-06-10" }
];

function renderAdmin() {
  const tbody = document.getElementById("adminProgressTable");
  if (!tbody) {
    console.error("❌ Không tìm thấy bảng adminProgressTable trong DOM");
    return;
  }

  tbody.innerHTML = "";

  mockData.forEach(item => {
    const daTiem = localStorage.getItem("tiem_" + item.id) === "true";
    const savedName = localStorage.getItem("currentUserName") || "Nguyễn Văn A";
    const displayName = item.userName === "Nguyễn Văn A" ? savedName : item.userName;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${displayName}</td>
      <td>${item.tenMui}</td>
      <td>${item.ngay}</td>
      <td>
        <input type="checkbox" ${daTiem ? "checked" : ""} data-id="${item.id}">
      </td>
    `;

    const checkbox = row.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", function () {
      const id = this.getAttribute("data-id");
      const newValue = this.checked;
      localStorage.setItem("tiem_" + id, newValue);
    });

    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", renderAdmin);
