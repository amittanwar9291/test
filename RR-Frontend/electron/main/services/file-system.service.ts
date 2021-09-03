import * as fs from 'fs';
import { bindCallback, Observable, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { join } from 'path';

// app scoped
export class FileSystemService {
  readFileAsync(filePath: string): Observable<any> {
    return bindCallback(fs.readFile)(filePath).pipe(
      switchMap(result => {
        const [error, data] = result;

        return error || !data ? throwError({ error, data }) : of(data.toString());
      })
    );
  }

  readJsonAsync(filePath: string): Observable<any> {
    return this.readFileAsync(filePath).pipe(map(jsonString => JSON.parse(jsonString)));
  }

  writeFileAsync(filePath: string, data: any): Observable<boolean> {
    return bindCallback(fs.writeFile)(filePath, data).pipe(switchMap(error => (error ? throwError(error) : of(true))));
  }

  writeJsonAsync(filePath: string, json: any): Observable<boolean> {
    return this.writeFileAsync(filePath, JSON.stringify(json, null, 2));
  }

  appendFileAsync(filePath: string, data: any): Observable<boolean> {
    return bindCallback(fs.appendFile)(filePath, data).pipe(switchMap(error => (error ? throwError(error) : of(true))));
  }

  readFileSync(filePath: string, onError?: (error) => void): string | null {
    try {
      return fs.readFileSync(filePath).toString();
    } catch (error) {
      this.handleError(error, onError);

      return null;
    }
  }

  readJsonSync(filePath: string, onError?: (error) => void): any | null {
    try {
      return JSON.parse(this.readFileSync(filePath, onError));
    } catch (error) {
      this.handleError(error, onError);

      return null;
    }
  }

  writeFileSync(filePath: string, data: any, onError?: (error) => void): void {
    try {
      fs.writeFileSync(filePath, data);
    } catch (error) {
      this.handleError(error, onError);
    }
  }

  writeJsonSync(filePath: string, json: any, onError?: (error) => void): void {
    try {
      this.writeFileSync(filePath, JSON.stringify(json, null, 2), onError);
    } catch (error) {
      this.handleError(error, onError);
    }
  }

  existsSync(path: string): boolean {
    return fs.existsSync(path);
  }

  assertPath(path: string, message: string): void {
    if (!fs.existsSync(path)) {
      throw new Error(message);
    }
  }

  getEntryFolderPath(): string {
    return join(__dirname, '..', '..');
  }

  private handleError(error: any, onError?: (error) => void): void {
    if (onError instanceof Function) {
      onError(error);
    } else {
      throw error;
    }
  }
}
