import { Component, OnInit, TemplateRef, Type } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/core/model/formation.model';
import { FormationService } from 'src/app/core/service/formation.service';

@Component({
  selector: 'app-dashboard-formation',
  templateUrl: './dashboard-formation.component.html',
  styleUrls: ['./dashboard-formation.component.scss'],
})
export class DashboardFormationComponent implements OnInit {
  form = this.fb.group({
    id: new FormControl<number | null>(null),
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    level: new FormControl<string>('', [Validators.required]),
    price: new FormControl<string>('', [Validators.required]),
    language: new FormControl<string>('', [Validators.required]),
  });
  public formation: Formation;
  public formations: Formation[];
  public errorMsg: string;
  constructor(
    private formationService: FormationService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formationService.getFormations().subscribe({
      next: (formations) => (this.formations = formations),
      error: (err) => (this.errorMsg = err),
    });
  }
  openModal(template: TemplateRef<any>, formation?: Formation) {
    if (formation != null) {
      // updates form values if there is a user
      this.form.patchValue({
        name: formation.name,
        description: formation.description,
        level: formation.level,
        price: formation.price,
        language: formation.language,
      });
    } else {
      // clears the form if there is no user
      this.form.reset();
    }
  }

  addUser() {
    if (this.form.value.id != null) {
      if (this.form.valid) {
        // get the index of a user
        const index: number = this.formations.findIndex(
          (form: Formation) => form.id === this.form.value.id
        );

        if (index !== -1) {
          let formation = new Formation(
            this.formations.length,
            this.form.value.name,
            this.form.value.description,
            this.form.value.level,
            this.form.value.price,
            this.form.value.language
          );

          this.formationService.addFormation(formation);
        }
      }
    } else {
      if (this.form.valid) {
        let formation = new Formation(
          this.formations.length,
          this.form.value.name,
          this.form.value.description,
          this.form.value.level,
          this.form.value.price,
          this.form.value.language
        );

        this.formationService.updateFormation(formation);
      }
    }
  }

  deleteUser(index: number) {
    if (confirm('Are you sure you want to delete this formation?')) {
      const form: Formation = this.formations[index];

      if (form != null) {
        this.formationService.deleteFormation(index);
      } else {
        alert('User not found');
      }
    }
  }
}
