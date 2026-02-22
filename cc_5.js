const employees = [
    {
        name:"Brent",
        hourlyRate: 29,
        hoursWorked: 87
    },
    {
        name:"Aron",
        hourlyRate: 23,
        hoursWorked: 65
    },
    {
        name:"Chris",
        hourlyRate: 18,
        hoursWorked: 70
    },
    {
        name:"Eve",
        hourlyRate: 26,
        hoursWorked: 75
    }
];

//Test console.log(employees);

function calculateBasePay(rate,hours){
    const regularHours = Math.min(hours, 40);
    return regularHours * rate;
}

function calculateOvertimePay(rate,hours){
    if (hours>40){
        const OvertimeHours = hours - 40;
        return OvertimeHours * rate * 1.5;
    }
}

function calculateTaxes(grossPay){
    return grossPay * 0.15;
}