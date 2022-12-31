import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, timer } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import CLIENTS_JSON from './../../assets/clients.json';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientPageComponent {
  public clientID = this.route.snapshot.paramMap.get('clientID');
  public client: typeof CLIENTS_JSON[number] = {} as any;
  public form = this.formBuilder.group({
    // How would you make the name field required?
    name: '',
    company: '',
    // How would you add an email validator to the email field?
    email: '',
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    let init = true;
    // How would you handle the subscription when the component is destroyed?
    timer(0, 5000)
      .pipe(
        map(() => CLIENTS_JSON),
        map((clients) => clients.find(({ id }) => id === this.clientID))
      )
      .subscribe((client) => {
        if (client) this.client = client;
        if (client && init) {
          this.form.patchValue({
            name: client.name,
            email: client.email,
            company: client.company,
          });
          init = false;
        }
        this.cd.markForCheck();
      });
  }

  /** A fake save function that navigates back to the dashboard after 'saving' the data */
  public async save() {
    console.log(this.form.value);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // fake saving
    // How would you navigate back to the home dashboard page?
  }
}
