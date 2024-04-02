import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  applicantId: any;
  viewUrl: string = '';
  constructor(private router: Router) {}

  reportDownload() {
    this.viewUrl = `http://4.236.144.236:8080/borrowerAppPhase2/jasper/report/${this.applicantId}`;
    console.log(this.viewUrl);
    window.open(this.viewUrl, '_blank');
  }
}
