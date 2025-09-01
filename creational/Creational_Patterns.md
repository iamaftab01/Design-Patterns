
# Creational Design Patterns

## 1. Big Picture  
Creational design patterns focus on **how objects are created**.  
They provide flexible and reusable ways to instantiate objects while hiding the creation logic.  

- **Singleton** → Ensure only one instance exists.  
- **Factory Method** → Subclass decides which object to create.  
- **Abstract Factory** → Create families of related objects.  
- **Builder** → Construct complex objects step by step.  
- **Prototype** → Create a copy of an existing object.  

---

## 2. Real-World Analogies  

- **Singleton** → President of a country (only one).  
- **Factory Method** → Ola/Uber deciding which vehicle arrives (car/bike).  
- **Abstract Factory** → Furniture shop: Victorian set gives matching chair, sofa, table.  
- **Builder** → Burger shop: add bread, patty, cheese, sauces step by step.  
- **Prototype** → Photocopy of a document and then editing.  

---

## 3. Comparison Table  

| Pattern          | Key Idea                        | Example Analogy         | When to Use                                   |  
|------------------|---------------------------------|-------------------------|-----------------------------------------------|  
| **Singleton**    | One instance only               | President               | Global shared resource (e.g., config, DB)     |  
| **Factory Method** | Subclasses decide object       | Ola/Uber vehicle choice | When type of object depends on runtime        |  
| **Abstract Factory** | Families of related objects | Furniture sets          | When multiple related objects are needed      |  
| **Builder**      | Step-by-step construction       | Burger customization    | When building complex objects gradually       |  
| **Prototype**    | Clone existing object           | Copying documents       | When creating an object is costly/complex     |  

## 4. Situations to Use

## Singleton
- **Situation**: You need only one instance of a class.  
- **Pick this when**: A single, shared resource must be accessed globally.  
- **Example**: Database connection, configuration manager.  

## Factory Method
- **Situation**: You don’t know beforehand which subclass you need.  
- **Pick this when**: Object creation should be delegated to subclasses.  
- **Example**: Payment system choosing CreditCard or UPI processor.  

## Abstract Factory
- **Situation**: You need families of related objects.  
- **Pick this when**: You want to create objects that belong together.  
- **Example**: UI toolkit producing Windows-style or Mac-style buttons & checkboxes.  

## Builder
- **Situation**: You need to construct complex objects step by step.  
- **Pick this when**: The object has many configurations or optional parts.  
- **Example**: Building a customized meal (burger with different add-ons).  

## Prototype
- **Situation**: Creating a new object is costly or complex.  
- **Pick this when**: You want to clone an existing object.  
- **Example**: Copy-paste a document, clone game characters.  