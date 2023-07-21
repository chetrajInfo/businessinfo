

export interface EmployeeSchedule {
    name:string;
    employee: string;
    schedule: {
      [day: string]: string;
      Mon: string;
      Tue: string;
      Wed: string;
      Thu: string;
      Fri: string;
      Sat: string;
      Sun: string;
    };
  }
  