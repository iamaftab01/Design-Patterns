/*

The Composite Structural Design Pattern is used to treat individual objects and compoistion (objects linked to objects)
of objects uniformly. It’s ideal for representing part-whole hierarchies like folders/files, menus/submenus, etc.

Example: 
  A file System -> file - leaf, folder contain files or folders - composite
  Role Based Access Control System

*/

interface PermissionComponent {
  getName(): string;
  hasPermission(permission: string): boolean;
}

class SinglePermission implements PermissionComponent {
  constructor(private name: string) {}

  getName() {
    return this.name;
  }

  hasPermission(permission: string): boolean {
    return this.name === permission;
  }
}

class PermissionGroup implements PermissionComponent {
  private children: PermissionComponent[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  add(permission: PermissionComponent) {
    this.children.push(permission);
  }

  hasPermission(permission: string): boolean {
    return this.children.some((child) => child.hasPermission(permission));
  }
}

const readPermission = new SinglePermission('read');
const writePermission = new SinglePermission('write');
const deletePermission = new SinglePermission('delete');

const admin = new PermissionGroup('Admin');
admin.add(readPermission);
admin.add(writePermission);
admin.add(deletePermission);

const user = new PermissionGroup('User');
user.add(readPermission);
user.add(writePermission)

console.log(admin.hasPermission('delete'));
console.log(user.hasPermission('delete'));
