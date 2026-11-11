
function multiplyValue(value: number, multiplier: number = 2  ): number {
    return value * multiplier
}
const multiplyTotal = multiplyValue(10, 0);
// console.log(multiplyTotal)


function processInput (input: string | number | boolean): string | number{

    if(typeof input === "string"){
     return input.trim().toLowerCase()
    } else if (typeof input === "number"){
        return input * 10
    } else {
        return input ? "Active" : "Inactive"
    }
}
const processData = processInput(false)
// console.log(processData);


function formatCoordinate(value: readonly[number, number, string]): string{

    const [latitude, longitude, locationName] = value;

    return `Location: ${locationName} (${latitude}, ${longitude})`
}
const locationData = formatCoordinate([22.35, 91.78, "Chittagong"])
// console.log(locationData);


function concatenateArrays<T>(...arrays: T[][]): T[]{

    return arrays.flat()
}
const array = concatenateArrays([1, 2, 3, 4, 5])
// console.log(array);


interface Course  {
 title: string,
 students: number,
 isPublished: boolean
}

function getPopularCourses (courses: Course[], minStudents: number): Course[]{

return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
)
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

const popularCourse = getPopularCourses(courses, 80)
// console.log(popularCourse);


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  
  return items.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

const valueResult = pluckValues(users, "id");
// console.log(valueResult);


class Employee {
  constructor(
    protected name: string,
    private baseSalary: number
  ) {}

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string
  ) {
    super(name, baseSalary);
  }

  public getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");

// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());


function validateAgeAsync(age: number): Promise<string> {

  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"))
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000)

    }
  })
}

const successOutput = await validateAgeAsync(20)
console.log(successOutput);

// Test error case safely
const errorOutput = await validateAgeAsync(15).catch((err) => err.message)
console.log(errorOutput);