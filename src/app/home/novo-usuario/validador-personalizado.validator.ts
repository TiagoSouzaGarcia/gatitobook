import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function validadorSenha(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.value;

    if (!senha) {
      return null;
    }

    const temMaiusculo = /[A-Z]+/.test(senha);

    const temMinusculo = /[a-z]+/.test(senha);

    const temNumeral = /[0-9]+/.test(senha);

    const senhaValida = temMaiusculo && temMinusculo && temNumeral;

    return !senhaValida ? { senhaForte: true } : null;
  };
}

export function minusculoValidator(control: AbstractControl) {
  const valor = control.value as string;
  if (valor !== valor.toLowerCase()) {
    return { minusculo: true };
  } else {
    return null;
  }
}

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    return username !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
