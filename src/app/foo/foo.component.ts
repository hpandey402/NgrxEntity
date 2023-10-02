import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from '../bar/bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule, BarComponent, RouterLink],
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent {

}
