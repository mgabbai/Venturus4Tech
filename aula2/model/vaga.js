class Vaga {
    constructor(id, name, description, skills, salary, area, differentials, isPcd, isActive) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.skills = skills;
        this.salary = salary;
        this.area = area;
        this.differentials = differentials;
        this.isPcd = isPcd;
        this.isActive = isActive;
    }
}
module.exports = Vaga;