function generateFourMonthsData() {
    let temp_data = [];
    const max = 957 * 1.3 + 50;
    const min = 957 * 1.3 - 50;

    // Start from September 2022 and go till May 2023
    for (let m = 9; m <= 5; m++) {
        let year = m > 9 ? 2023 : 2022;
        let daysInMonth = new Date(year, m, 0).getDate();
        for (let d = 1; d <= daysInMonth; d++) {
            let date = new Date(year, m - 1, d); // Month is 0-indexed
            let consumption = Math.floor(Math.random() * (max - min + 1) + min);
            let dateString = (date.getMonth() + 1).toString().padStart(2, "0") + "/" + date.getFullYear().toString().substr(-2);
            temp_data.push({ date: dateString, Yield: consumption });
        }
    }
    return temp_data;
}
function generateSevenDaysData() {
    let today = new Date();
    let temp_data = [];
    const max = 957 * 1.3 + 50;
    const min = 957 * 1.3 - 50;

    for (let i = 7; i >= 0; i--) {
        let dayAgo = new Date();
        dayAgo.setDate(today.getDate() - i);
        let consumption = 0;

        let dateString = dayAgo.getFullYear() + "/" + (dayAgo.getMonth() + 1).toString().padStart(2, "0") + "/" + dayAgo.getDate().toString().padStart(2, "0");


        if (dayAgo < today) {
            if (dayAgo.getDay() == 0 || dayAgo.getDay() == 6) {
                consumption = Math.floor(Math.random() * 10);
            } else if (dayAgo.getDay() == 5) {
                consumption = Math.floor(Math.random() * (max - min + 1) + min) - 300;
            } else if (dayAgo.getDay() == 3) {
                consumption = Math.floor(Math.random() * (max - min + 1) + min) - 150;
            }
            else {
                consumption = Math.floor(Math.random() * (max - min + 1) + min);
            }
        } else {
            consumption = 3;
        }

        temp_data.push({ date: dateString, Yield: consumption });
    }

    return temp_data;
}

function generateOneMonthData() {
    let today = new Date();
    let temp_data = [];
    // Adjust these values to get different lengths of bars
    const max = 1000;
    const min = 100;
    for (let i = 30; i >= 0; i--) {
        let dayAgo = new Date();
        dayAgo.setDate(today.getDate() - i);
        let consumption = 0;
        let dateString = dayAgo.getFullYear() + "/" + (dayAgo.getMonth() + 1).toString().padStart(2, "0") + "/" + dayAgo.getDate().toString().padStart(2, "0");

        if (dayAgo < today) {
            // Generate a random number between min and max for every day
            consumption = Math.floor(Math.random() * (max - min + 1) + min);
        } else {
            consumption = 3;
        }
        temp_data.push({ date: dateString, Yield: consumption });
    }
    return temp_data;
}





export { generateFourMonthsData, generateSevenDaysData, generateOneMonthData };