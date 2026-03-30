import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AlertsService{

    // $ = Significa que la variable va a alojar un Observable
    // no es obligatorio
    notifier$ = new Subject<string | null>();


}

