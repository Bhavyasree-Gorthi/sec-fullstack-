function calculate(marks) {
    let result;
    if (marks > 90 && marks <= 100) {
        result = "A";
    } else if (marks > 80 && marks <= 90) {
        result = "B";
    } else if (marks > 70 && marks <= 80) {
        result = "C";
    } else if (marks > 60 && marks <= 70) {
        result = "D";
    } else if (marks >= 0 && marks <= 60) {
        result = "F";
    } else {
        result = "Invalid grade";
    }
    console.log("Grade: " + result);
    return result;
}

calculate(56);