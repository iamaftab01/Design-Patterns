/*

The Abstract Factory Pattern method defines a interface which will create a families of related objects
without specifying their extract concrete classes

Think of it as a factory of factories — it groups individual factories that create related objects.

Example: Cloud Provider Factory

*/

interface StorageService {
  upload(file: string): void;
}

interface ComputeService {
  startInstance(id: string): void;
}

interface CloudFactory {
  createStorage(): StorageService;
  createCompute(): ComputeService;
}

class S3Storage implements StorageService {
  upload(file: string) {
    console.log(`Uploading ${file} to S3`);
  }
}

class EC2Compute implements ComputeService {
  startInstance(id: string): void {
    console.log(`Starting instance ${id} on EC2`);
  }
}

class AWSFactory implements CloudFactory {
  createStorage(): StorageService {
    return new S3Storage();
  }

  createCompute(): ComputeService {
    return new EC2Compute();
  }
}

class BlobStorage implements StorageService {
  upload(file: string): void {
    console.log(`Uploading ${file} to Blob Storage`);
  }
}

class VMCompute implements ComputeService {
  startInstance(id: string) {
    console.log(`Starting instance ${id} on VM`);
  }
}

class AzureFactory implements CloudFactory {
  createStorage(): StorageService {
    return new BlobStorage();
  }

  createCompute(): ComputeService {
    return new VMCompute();
  }
}

const type = 'azure';
const factory = type === 'azure' ? new AzureFactory() : new AWSFactory();
const storage = factory.createStorage();
const compute = factory.createCompute();

storage.upload('names.txt');
compute.startInstance('my-instance');