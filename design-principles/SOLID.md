
# SOLID Principles in Java

## Introduction  
The **SOLID principles** are a set of five design principles in object-oriented programming aimed at making software more maintainable, scalable, and flexible. They help developers build systems that are easier to understand, extend, and modify over time.  

The acronym **SOLID** stands for:  
1. **S** – Single Responsibility Principle (SRP)  
2. **O** – Open/Closed Principle (OCP)  
3. **L** – Liskov Substitution Principle (LSP)  
4. **I** – Interface Segregation Principle (ISP)  
5. **D** – Dependency Inversion Principle (DIP)  

---

## 1. Single Responsibility Principle (SRP)  
A class should have **only one reason to change**, meaning it should focus on a single responsibility.  

### Example (Bad Practice):  
```java
class Report {
    public String generateReport() {
        return "Report Content";
    }

    public void saveToFile(String report) {
        System.out.println("Saving report to file: " + report);
    }
}
```  
Here, the `Report` class has **two responsibilities**: generating a report and saving it. This violates SRP.  

### Example (Good Practice):  
```java
class Report {
    public String generateReport() {
        return "Report Content";
    }
}

class ReportSaver {
    public void saveToFile(String report) {
        System.out.println("Saving report to file: " + report);
    }
}
```  
Now, each class has **only one responsibility**.  

---

## 2. Open/Closed Principle (OCP)  
Classes should be **open for extension but closed for modification**.  

### Example (Bad Practice):  
```java
class AreaCalculator {
    public double calculateRectangleArea(double length, double width) {
        return length * width;
    }

    public double calculateCircleArea(double radius) {
        return Math.PI * radius * radius;
    }
}
```  
If we add a new shape (like a triangle), we must modify the class, which violates OCP.  

### Example (Good Practice):  
```java
interface Shape {
    double calculateArea();
}

class Rectangle implements Shape {
    private double length, width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    public double calculateArea() {
        return length * width;
    }
}

class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

class AreaCalculator {
    public double calculateArea(Shape shape) {
        return shape.calculateArea();
    }
}
```  
Now we can add new shapes without modifying `AreaCalculator`.  

---

## 3. Liskov Substitution Principle (LSP)  
Objects of a superclass should be replaceable with objects of a subclass **without breaking the application**.  

### Example (Bad Practice):  
```java
class Bird {
    public void fly() {
        System.out.println("Flying");
    }
}

class Ostrich extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Ostriches can't fly");
    }
}
```  
Here, substituting `Ostrich` for `Bird` breaks behavior, violating LSP.  

### Example (Good Practice):  
```java
interface Bird {
    void eat();
}

interface FlyingBird extends Bird {
    void fly();
}

class Sparrow implements FlyingBird {
    public void eat() {
        System.out.println("Sparrow eating");
    }

    public void fly() {
        System.out.println("Sparrow flying");
    }
}

class Ostrich implements Bird {
    public void eat() {
        System.out.println("Ostrich eating");
    }
}
```  
Now, each bird class properly respects substitution.  

---

## 4. Interface Segregation Principle (ISP)  
Clients should not be forced to depend on interfaces they do not use.  

### Example (Bad Practice):  
```java
interface Worker {
    void work();
    void eat();
}

class Robot implements Worker {
    public void work() {
        System.out.println("Robot working");
    }

    public void eat() {
        throw new UnsupportedOperationException("Robots don't eat");
    }
}
```  

### Example (Good Practice):  
```java
interface Workable {
    void work();
}

interface Eatable {
    void eat();
}

class Human implements Workable, Eatable {
    public void work() {
        System.out.println("Human working");
    }

    public void eat() {
        System.out.println("Human eating");
    }
}

class Robot implements Workable {
    public void work() {
        System.out.println("Robot working");
    }
}
```  
Now, interfaces are **segregated** based on actual responsibilities.  

---

## 5. Dependency Inversion Principle (DIP)  
High-level modules should not depend on low-level modules. Both should depend on abstractions.  

### Example (Bad Practice):  
```java
class LightBulb {
    public void turnOn() {
        System.out.println("LightBulb ON");
    }

    public void turnOff() {
        System.out.println("LightBulb OFF");
    }
}

class Switch {
    private LightBulb bulb;

    public Switch(LightBulb bulb) {
        this.bulb = bulb;
    }

    public void operate() {
        bulb.turnOn();
    }
}
```  
Here, `Switch` directly depends on `LightBulb`, making it inflexible.  

### Example (Good Practice):  
```java
interface Switchable {
    void turnOn();
    void turnOff();
}

class LightBulb implements Switchable {
    public void turnOn() {
        System.out.println("LightBulb ON");
    }

    public void turnOff() {
        System.out.println("LightBulb OFF");
    }
}

class Fan implements Switchable {
    public void turnOn() {
        System.out.println("Fan ON");
    }

    public void turnOff() {
        System.out.println("Fan OFF");
    }
}

class Switch {
    private Switchable device;

    public Switch(Switchable device) {
        this.device = device;
    }

    public void operate() {
        device.turnOn();
    }
}
```  
Now, `Switch` depends on the abstraction `Switchable`, not on a concrete class.  

---

## Conclusion  
The **SOLID principles** provide a foundation for writing clean, maintainable, and extensible code in Java. Following these principles reduces bugs, makes code easier to test, and helps in scaling applications gracefully.  
