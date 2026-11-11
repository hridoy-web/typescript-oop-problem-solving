
function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}


function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase()
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return input ? "Active" : "Inactive";
  }
}


function formatCoordinate(value: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = value;
  return `Location: ${locationName} (${latitude}, ${longitude})`
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}


interface Course {
  title: string;
  students: number
  isPublished: boolean
}


function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  )
}


function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key])
}


class Employee {
  constructor(
    protected name: string,
    private baseSalary: number
  ) {}

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}


class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string
  ) {
    super(name, baseSalary)
  }

  public getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`
  }
}


function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"))
    } else {
      setTimeout(() => {
        resolve("Access Granted")
      }, 1000)
    }
  })
}