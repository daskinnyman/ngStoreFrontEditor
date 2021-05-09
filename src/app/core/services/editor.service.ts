import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private editorOpen$ = new BehaviorSubject<boolean>(false);

  get editorOpen(): Observable<boolean> {
    return this.editorOpen$.asObservable();
  }

  setEditorOpen(openState: boolean) {
    this.editorOpen$.next(openState);
  }
}
