document.getElementById('generateBtn').addEventListener('click', generateUserData);

function generateUserData() {
    const users = [];
    const numberOfUsers = 10; // Change this to generate more users if desired

    for (let i = 0; i < numberOfUsers; i++) {
        const user = {
            id: i + 1,
            name: `User ${i + 1}`,
            email: `user${i + 1}@example.com`,
            age: Math.floor(Math.random() * (60 - 18 + 1)) + 18,
            city: getRandomCity(),
        };
        users.push(user);
    }

    const csvContent = convertToCSV(users);
    downloadCSV(csvContent);
}

function getRandomCity() {
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
    return cities[Math.floor(Math.random() * cities.length)];
}

function convertToCSV(users) {
    const header = "ID,Name,Email,Age,City\n";
    const rows = users.map(user => `${user.id},"${user.name}","${user.email}",${user.age},"${user.city}"`).join("\n");
    return header + rows;
}

function downloadCSV(csvContent) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.getElementById('downloadLink');

    link.setAttribute('href', url);
    link.setAttribute('download', 'Dummy_Data.csv');
    link.style.display = 'block';
    link.innerText = 'Download CSV';
}
