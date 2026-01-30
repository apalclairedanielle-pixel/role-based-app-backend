// Initial Data
let departments = JSON.parse(localStorage.getItem('depts')) || [
    { name: 'Engineering', desc: 'Software team' },
    { name: 'HR', desc: 'Human Resources' }
];

// Load UI
function renderTable() {
    const body = document.getElementById('deptBody');
    body.innerHTML = '';
    
    departments.forEach((dept, index) => {
        body.innerHTML += `
            <tr>
                <td>${dept.name}</td>
                <td>${dept.desc}</td>
                <td>
                    <button class="btn-primary" onclick="editDept(${index})">Edit</button>
                    <button class="btn-cancel" style="background:#ef4444" onclick="deleteDept(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Dropdown Toggle
document.getElementById('userDropdownBtn').onclick = function() {
    document.getElementById('myDropdown').classList.toggle('show');
}

// Close modal
function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

// Initialize
renderTable();