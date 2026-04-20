import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CounterStore } from './counter.store';

@Component({
  selector: 'app-counter',
  imports: [FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter {
  protected readonly store = inject(CounterStore);

  onStepChange(value: string): void {
    const parsed = Number(value);
    if (!isNaN(parsed) && parsed > 0) {
      this.store.setStep(parsed);
    }
  }
}
