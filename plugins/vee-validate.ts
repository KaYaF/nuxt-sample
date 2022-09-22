import {extend, localize} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en.json';

// https://vee-validate.logaretm.com/v3/guide/rules.html#importing-the-rules
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  });
}

localize({en});
