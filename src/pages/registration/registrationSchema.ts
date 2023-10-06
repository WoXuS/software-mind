import * as yup from 'yup';
import dayjs, { Dayjs } from 'dayjs';

yup.addMethod(yup.object, 'dayjs', function method(message) {
  return this.test('dayjs', message, function validate(value) {
    if (!value) {
      return true;
    }
    return dayjs.isDayjs(value);
  });
});

const registrationSchema = yup.object().shape({
  continent: yup.string().nullable(),
  firstName: yup.string().required('To pole jest wymagane'),
  surname: yup
    .string()
    .test(
      'surname-when-continent-is-europa',
      'Nie spełnione kryteria',
      function (value) {
        const { continent } = this.parent;
        if (
          continent === 'Europa' &&
          (value === null || (value && value.length < 2))
        ) {
          return false;
        }
        return true;
      }
    ),
  dob: yup
    .mixed()
    .nullable()
    .test('dayjs', 'Nieprawidłowa data', (value) => {
      if (!value) return true;
      return dayjs.isDayjs(value);
    })
    .test(
      'dob-validation',
      'Data w przyszłości jest niedozwolona',
      function (value) {
        if (!value) return true;
        return dayjs(value as Dayjs).isBefore(dayjs());
      }
    ),
});

export default registrationSchema;
