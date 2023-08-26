import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.scss']
})
export class MembroComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  onMembros() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
