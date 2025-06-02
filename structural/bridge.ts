/*

The Bridge Structural Design pattern used to decouple an abstraction from its implementation
so that the two can vary independently.

Purpose: 
  To avoid a permanent binding between an abstraction and its implementation,
  especially when both may change frequently or independently. It helps manage
  complexity and flexibility by layering responsibilities.

Example: Storing the different types of document formats in different storages

*/

export {}

interface Storage {
  save(fileName: string, content: string): void;
}

class S3Storage implements Storage {
  save(fileName: string, content: string): void {
    console.log(`Saving the file ${fileName} to S3 with ${content}`);
  }
}

class LocalStorage implements Storage {
  save(fileName: string, content: string): void {
    console.log(`Saving the file ${fileName} to Local Storage with ${content}`);
  }
}

abstract class Document {
  constructor (protected storage: Storage) {}
  abstract save(): void;
}

class PDFDocument extends Document {
  save(): void {
    this.storage.save('pdf', 'PDF content');
  }
}

class WordDocument extends Document {
  save(): void {
    this.storage.save('word', 'Word content');
  }
}

const s3Storage = new S3Storage();
const pdf = new PDFDocument(s3Storage);

const localStorage = new LocalStorage();
const word = new WordDocument(localStorage);

pdf.save();
word.save();