import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

interface Country {
  name: string;
  code: string;
  flag: string;
}

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {

  submitted = false;
  sending   = false;
  errorMsg  = '';
  currentYear = new Date().getFullYear();

  contactForm: FormGroup;

  countries: Country[] = [
    { name: 'Argentina',            code: 'AR', flag: '🇦🇷' },
    { name: 'Bolivia',              code: 'BO', flag: '🇧🇴' },
    { name: 'Brasil',               code: 'BR', flag: '🇧🇷' },
    { name: 'Chile',                code: 'CL', flag: '🇨🇱' },
    { name: 'Colombia',             code: 'CO', flag: '🇨🇴' },
    { name: 'Costa Rica',           code: 'CR', flag: '🇨🇷' },
    { name: 'Cuba',                 code: 'CU', flag: '🇨🇺' },
    { name: 'Ecuador',              code: 'EC', flag: '🇪🇨' },
    { name: 'El Salvador',          code: 'SV', flag: '🇸🇻' },
    { name: 'Guatemala',            code: 'GT', flag: '🇬🇹' },
    { name: 'Honduras',             code: 'HN', flag: '🇭🇳' },
    { name: 'México',               code: 'MX', flag: '🇲🇽' },
    { name: 'Nicaragua',            code: 'NI', flag: '🇳🇮' },
    { name: 'Panamá',               code: 'PA', flag: '🇵🇦' },
    { name: 'Paraguay',             code: 'PY', flag: '🇵🇾' },
    { name: 'Perú',                 code: 'PE', flag: '🇵🇪' },
    { name: 'República Dominicana', code: 'DO', flag: '🇩🇴' },
    { name: 'Uruguay',              code: 'UY', flag: '🇺🇾' },
    { name: 'Venezuela',            code: 'VE', flag: '🇻🇪' },
    { name: 'Alemania',             code: 'DE', flag: '🇩🇪' },
    { name: 'España',               code: 'ES', flag: '🇪🇸' },
    { name: 'Francia',              code: 'FR', flag: '🇫🇷' },
    { name: 'Italia',               code: 'IT', flag: '🇮🇹' },
    { name: 'Portugal',             code: 'PT', flag: '🇵🇹' },
    { name: 'Reino Unido',          code: 'GB', flag: '🇬🇧' },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      empresa:        ['', [Validators.required, Validators.minLength(2)]],
      name:           ['', [Validators.required, Validators.minLength(3)]],
      cargo:          ['', [Validators.required, Validators.minLength(2)]],
      phone:          ['', [Validators.required, Validators.pattern(/^[0-9\s()+-]{7,20}$/)]],
      email:          ['', [Validators.required, Validators.email, this.corporateEmailValidator()]],
      pais:           ['', Validators.required],
      infoSolicitada: ['', Validators.required],
      colaboradores:  ['', Validators.required],
      sector:         ['', Validators.required],
      message:        ['', [Validators.required, Validators.minLength(10)]],
      privacidad:     [false, Validators.requiredTrue]
    });
  }

  corporateEmailValidator(): ValidatorFn {
    const personalDomains = [
      'gmail.com','hotmail.com','outlook.com',
      'live.com','yahoo.com','icloud.com',
      'protonmail.com','msn.com'
    ];
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const domain = control.value.toLowerCase().trim().split('@')[1];
      return personalDomains.includes(domain) ? { personalEmail: true } : null;
    };
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  async sendEmail(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending  = true;
    this.errorMsg = '';
    const f = this.contactForm.value;

    const paisObj = this.countries.find(c => c.code === f.pais);

    const payload = {
      _cc:                   'aluma@cda-sol.com, scoronel@cda-sol.com',
      empresa:               f.empresa,
      nombre:                f.name,
      cargo:                 f.cargo,
      telefono:              f.phone,
      email:                 f.email,
      pais:                  paisObj ? `${paisObj.flag} ${paisObj.name}` : f.pais,
      informacionSolicitada: f.infoSolicitada,
      colaboradores:         f.colaboradores,
      sector:                f.sector,
      mensaje:               f.message,
    };

    try {
      const response = await fetch('https://formspree.io/f/mbdwevep', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(payload)
      });

      if (response.ok) {
        this.submitted = true;
        this.contactForm.reset({ privacidad: false });
      } else {
        this.errorMsg = 'Hubo un error al enviar. Por favor intenta nuevamente.';
      }

    } catch (error) {
      console.error('Error Formspree:', error);
      this.errorMsg = 'Hubo un error al enviar. Por favor intenta nuevamente.';

    } finally {
      this.sending = false;
    }
  }
}