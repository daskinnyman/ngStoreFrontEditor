import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditorService {
  private editorOpen$ = new BehaviorSubject<boolean>(false);
  private editorProps$ = new BehaviorSubject<any>({});

  get editorOpen(): Observable<boolean> {
    return this.editorOpen$.asObservable();
  }

  setEditorOpen(openState: boolean) {
    this.editorOpen$.next(openState);
  }


  get editorProps(): Observable<boolean> {
    return this.editorProps$.asObservable();
  }

  setEditorProps(props: any) {
    this.editorProps$.next(props);
  }
}
