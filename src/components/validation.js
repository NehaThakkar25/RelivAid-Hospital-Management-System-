import React from 'react';
import Validation from 'react-validation';
import validator from 'validator';

Object.assign(Validation.rules, {
  required: {
    rule: value => {
      return value.toString().trim();
    },
    hint: value => {
      return <span className="form-error is-visible">Required</span>;
    },
  },
  email: {
    rule: value => {
      return validator.isEmail(value);
    },
    hint: value => {
      return (
        <span className="form-error is-visible">{value} isn't an Email.</span>
      );
    },
  },
  alpha: {
    rule: value => validator.isAlpha(value),
    hint: () => (
      <span className="form-error is-visible">
        String should contain only letters (a-zA-Z).
      </span>
    ),
  },
  number: {
    rule: value => validator.isInt(value),
    hint: () => (
      <span className="form-error is-visible">
        Only proper number is required
      </span>
    ),
  },
  password: {
    rule: (value, components) => {
      const password = components.password.state;
      const passwordConfirm = components.passwordConfirm.state;
      const isBothUsed =
        password &&
        passwordConfirm &&
        password.isUsed &&
        passwordConfirm.isUsed;
      const isBothChanged =
        isBothUsed && password.isChanged && passwordConfirm.isChanged;
      if (!isBothUsed || !isBothChanged) {
        return true;
      }

      return password.value === passwordConfirm.value;
    },
    hint: () => (
      <span className="form-error is-visible">Passwords should be equal.</span>
    ),
  },

  passwordLogin: {
    rule: (value, components) => {
      const password = components.passwordLogin.state;
      if (password.value) {
        console.log(password.value);
        return validator.isEmpty(password.value);
      }
    },
    hint: () => (
      <span className="form-error is-visible">Password cannot be empty</span>
    ),
  },
  api: {
    hint: value => (
      <button className="form-error is-visible">
        API Error on "{value}" value. Focus to hide.
      </button>
    ),
  },
});
