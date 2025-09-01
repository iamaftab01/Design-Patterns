
# Structural Design Patterns

## 1. Big Picture  
Structural design patterns deal with the **composition of classes and objects**.  
They help ensure that if one part of a system changes, the entire structure doesn’t need to change.  
These patterns show how objects and classes can be combined to form larger, more complex systems.  

- **Adapter** → Convert one interface to another.  
- **Bridge** → Separate abstraction from implementation.  
- **Composite** → Treat individual objects and groups uniformly.  
- **Decorator** → Add functionality dynamically.  
- **Facade** → Provide a simple interface to a complex system.  
- **Flyweight** → Share common parts to save memory.  
- **Proxy** → Substitute or placeholder for another object.  

---

## 2. Real-World Analogies  

- **Adapter** → Travel plug adapter (US plug to EU socket).  
- **Bridge** → Remote control works with different devices (TV, fan).  
- **Composite** → Folder containing files and subfolders.  
- **Decorator** → Coffee + add sugar + add milk (layers of functionality).  
- **Facade** → TV remote: one button hides complex inner operations.  
- **Flyweight** → Characters in a text editor share same font objects.  
- **Proxy** → Credit card acts as a proxy for your bank account.  

---

## 3. Comparison Table  

| Pattern        | Key Idea                          | Example Analogy             | When to Use                                    |  
|----------------|-----------------------------------|-----------------------------|------------------------------------------------|  
| **Adapter**    | Convert one interface to another  | Travel plug adapter         | When systems are incompatible but must work    |  
| **Bridge**     | Separate abstraction & implementation | Remote control + devices | When abstraction and implementation vary       |  
| **Composite**  | Treat group & object uniformly    | Folder with files           | When hierarchies of objects are needed         |  
| **Decorator**  | Add behavior dynamically          | Coffee with toppings        | To extend object functionality without changing class |  
| **Facade**     | Simplify interface                | TV remote                   | To hide complexity from client                 |  
| **Flyweight**  | Share common state                | Font letters in editor      | When many similar objects waste memory         |  
| **Proxy**      | Surrogate or placeholder          | Credit card                 | To control access to real object               |  


## 4. Situations to Use

## Adapter
- **Situation**: Two systems have incompatible interfaces.  
- **Pick this when**: You need them to work together.  
- **Example**: Plug adapter converting US plug to EU socket.  

## Bridge
- **Situation**: Abstraction and implementation should vary independently.  
- **Pick this when**: You want flexibility to mix and match.  
- **Example**: Remote control (abstraction) works with TV or Radio (implementations).  

## Composite
- **Situation**: You want to treat individual objects and groups uniformly.  
- **Pick this when**: Working with hierarchies like tree structures.  
- **Example**: Folders containing files and subfolders.  

## Decorator
- **Situation**: You want to add responsibilities dynamically.  
- **Pick this when**: Extending functionality without changing class.  
- **Example**: Coffee → add milk → add sugar → add cream.  

## Facade
- **Situation**: A complex system has too many details.  
- **Pick this when**: You want to provide a simplified interface.  
- **Example**: TV remote hiding multiple subsystems.  

## Flyweight
- **Situation**: Many objects share common data.  
- **Pick this when**: To reduce memory usage.  
- **Example**: Characters in a text editor sharing font details.  

## Proxy
- **Situation**: Direct access to an object is costly or restricted.  
- **Pick this when**: You need a surrogate or placeholder.  
- **Example**: Credit card acts as proxy for bank account.  
