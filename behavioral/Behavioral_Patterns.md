
# Behavioral Design Patterns

## 1. Big Picture  
Behavioral design patterns focus on **communication between objects**.  
They define how objects interact and distribute responsibilities.  

- **Chain of Responsibility** → Pass request along a chain until handled.  
- **Command** → Encapsulate a request as an object.  
- **Interpreter** → Define grammar and interpret sentences.  
- **Iterator** → Access elements of a collection sequentially.  
- **Mediator** → Centralize communication between objects.  
- **Memento** → Save and restore an object’s state.  
- **Observer** → Notify multiple objects of state changes.  
- **State** → Change behavior when internal state changes.  
- **Strategy** → Define family of algorithms, make them interchangeable.  
- **Template Method** → Define algorithm skeleton, subclasses fill steps.  
- **Visitor** → Add new operations without modifying classes.  

---

## 2. Real-World Analogies  

- **Chain of Responsibility** → Customer support levels (chat → agent → manager).  
- **Command** → Restaurant order ticket (request object).  
- **Interpreter** → Language translator interpreting rules.  
- **Iterator** → TV remote going channel by channel.  
- **Mediator** → Air traffic controller coordinating planes.  
- **Memento** → Undo feature in Word.  
- **Observer** → YouTube subscribers get notified of new video.  
- **State** → Traffic light changes behavior by state (red/green/yellow).  
- **Strategy** → Different payment methods (credit card, UPI, PayPal).  
- **Template Method** → Baking cake recipe steps fixed, ingredients vary.  
- **Visitor** → Auditor visiting departments without changing them.  

---

## 3. Comparison Table  

| Pattern                 | Key Idea                          | Example Analogy                | When to Use                                        |  
|-------------------------|-----------------------------------|--------------------------------|----------------------------------------------------|  
| **Chain of Responsibility** | Pass request along chain       | Customer support escalation    | When multiple handlers may process a request       |  
| **Command**             | Request as object                 | Restaurant order ticket        | To queue, log, or undo operations                  |  
| **Interpreter**         | Grammar + interpretation          | Language translator            | When grammar and rules need parsing                |  
| **Iterator**            | Sequential access                 | TV remote channels             | To traverse collections easily                     |  
| **Mediator**            | Centralize communication          | Air traffic controller         | To reduce direct dependencies between classes      |  
| **Memento**             | Save and restore state            | Undo in Word                   | To implement undo/rollback functionality           |  
| **Observer**            | Publish-subscribe                 | YouTube notifications          | When one-to-many dependency exists                 |  
| **State**               | Change behavior by state          | Traffic light                  | When object behavior depends on its state          |  
| **Strategy**            | Interchangeable algorithms        | Payment methods                | To switch algorithms at runtime                    |  
| **Template Method**     | Skeleton + customizable steps     | Cake recipe                    | When structure is fixed but steps vary             |  
| **Visitor**             | Add new operations easily         | Auditor visiting departments   | To add functionality without altering classes      |  


## 4. Situations to Use

## Chain of Responsibility
- **Situation**: Multiple handlers may process a request.  
- **Pick this when**: You don’t know who should handle it upfront.  
- **Example**: Customer support escalation.  

## Command
- **Situation**: You want to issue requests without knowing receiver.  
- **Pick this when**: You need undo/redo, logging, or queuing.  
- **Example**: Remote control commands, text editor actions.  

## Interpreter
- **Situation**: You need to interpret grammar or language rules.  
- **Pick this when**: Building a query engine, rule processor.  
- **Example**: SQL, regex interpreters.  

## Iterator
- **Situation**: You want sequential access to collection elements.  
- **Pick this when**: You don’t want to expose internal structure.  
- **Example**: Iterating over list, tree, or custom collection.  

## Mediator
- **Situation**: Many objects are communicating directly.  
- **Pick this when**: You want centralized communication.  
- **Example**: Air traffic controller, chatroom.  

## Memento
- **Situation**: You want to save and restore object state.  
- **Pick this when**: Undo/rollback is required.  
- **Example**: Undo feature in editors, game checkpoints.  

## Observer
- **Situation**: One object changes, others must be notified.  
- **Pick this when**: You need publish-subscribe.  
- **Example**: YouTube notifications, stock updates.  

## State
- **Situation**: Object behavior changes with internal state.  
- **Pick this when**: Avoiding big if-else conditions.  
- **Example**: Traffic light, vending machine.  

## Strategy
- **Situation**: Multiple algorithms exist for a task.  
- **Pick this when**: You want to swap them at runtime.  
- **Example**: Payment methods (card, UPI, PayPal).  

## Template Method
- **Situation**: Process structure is fixed, but steps vary.  
- **Pick this when**: Subclasses should fill in the blanks.  
- **Example**: Cooking recipe, report generation.  

## Visitor
- **Situation**: You want new operations without modifying classes.  
- **Pick this when**: Data structure is stable, operations vary.  
- **Example**: Tax calculation, compiler visitors.  
