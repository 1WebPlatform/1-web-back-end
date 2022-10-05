import { Injectable } from '@nestjs/common';


@Injectable()
export class FileService {
  private readonly fs = require('fs');
  constructor() { }
  deleteFile(pathFile:string) {
    if (this.checkFile(pathFile)) {
      this.fs.unlinkSync(pathFile);
    }
  }
  checkFile(pathFile:string) {
    return this.fs.existsSync(pathFile);
  }

  getFile(pathFile:string) {
    if (this.checkFile(pathFile)) {
      return this.fs.readFileSync(pathFile);
    }
  }

  setFile(pathFile:string, fileName:string, data: string) {
    if (pathFile) {
      !this.fs.existsSync(`${pathFile}`) && this.fs.mkdirSync(`${pathFile}`, { recursive: true })
    }
    this.fs.open(pathFile, 'w', (err: Error) => {
      if (err) throw err;
    });
    this.fs.writeFileSync(pathFile, data);
  }
}
