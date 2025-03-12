/**
 * Teniendo en cuenta el código fuente propuesto más abajo, 
 * indique si se está violando alguno de los principios SOLID y justifique su respuesta.
 * 
 * Respuesta: 
 * Single Responsibility Principle (SRP)- La clase FileManager tiene más de una responsabilidad: leer y escribir archivos. 
 * Esto viola el principio de responsabilidad única.
 * 
 * Open/Closed Principle (OCP) - La clase FileManager no está abierta para la extensión y cerrada para la modificación. 
 * Si queremos cambiar la forma en que se leen o escriben los archivos, tendríamos que modificar la clase FileManager.
 */

// import * as fs from "fs";

// class FileManager {
//   constructor(private filePath: string) {}

//   // Reads file
//   public readFile(): string {
//     try {
//       const content: string = fs.readFileSync(this.filePath, "utf-8");
//       return content;
//     } catch (error) {
//       console.error("Error al leer el archivo");
//       return "";
//     }
//   }

//   // Writes file
//   public writeFile(data: string): void {
//     try {
//       fs.writeFileSync(this.filePath, data, "utf-8");
//       console.log("Archivo escrito exitosamente.");
//     } catch (error) {
//       console.error("Error al escribir en el archivo");
//     }
//   }
// }

// // Client code
// const fileManager = new FileManager("example.txt");

// // Reading content
// const currentContent = fileManager.readFile();
// console.log("Current content:", currentContent);

// // Writing content
// const newData = "This is new content to be written into the file.";
// fileManager.writeFile(newData);

// // Updating content
// const updatedContent = fileManager.readFile();
// console.log("Updated content:", updatedContent);

//// Modificación propuesta

import * as fs from "fs";

interface FileReader {
  read(filePath: string): string;
}

interface FileWriter {
  write(filePath: string, data: string): void;
}

class LocalFileReader implements FileReader {
  read(filePath: string): string {
    try {
      const content: string = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }
}

class LocalFileWriter implements FileWriter {
  write(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

class FileManager {
  constructor(private fileReader: FileReader, private fileWriter: FileWriter) {}

  readFile(filePath: string): string {
    return this.fileReader.read(filePath);
  }

  writeFile(filePath: string, data: string): void {
    this.fileWriter.write(filePath, data);
  }
}

// Client code
const fileReader = new LocalFileReader();
const fileWriter = new LocalFileWriter();
const fileManager = new FileManager(fileReader, fileWriter);

const filePath = "example.txt";

// Reading content
const currentContent = fileManager.readFile(filePath);
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileManager.writeFile(filePath, newData);

// Updating content
const updatedContent = fileManager.readFile(filePath);
console.log("Updated content:", updatedContent);