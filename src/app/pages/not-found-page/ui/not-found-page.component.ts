import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
        standalone: true,
          selector: 'not-found-page',
          templateUrl: './not-found-page.component.html',
          imports: [RouterModule],
})

export class NotFoundPageComponent {}