export class EmployeeFormModel {
    Id: number
    name: string;
    grade: string;
    baseSalary: number;
    totalSalary: number;
    constructor(id: number, name: string, grade: string, baseSal: number, totalSal: number) {
        this.Id = id;
        this.name = name;
        this.grade = grade;
        this.baseSalary = baseSal;
        this.totalSalary = totalSal;
    }
}