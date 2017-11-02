SELECT Report.Name FROM Employee as Report, Employee AS Manager WHERE Report.ManagerId = Manager.Id AND Report.Salary > Manager.Salary
