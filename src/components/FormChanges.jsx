import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import _ from 'lodash';

const Form = () => {
  const cities = useSelector((state) => state.cities);
  const [text, setText] = useState({
    password: '',
    confirmPassword: '',
    email: '',
    errors: {},
    rule: false,
  });
  const scheme = yup.object().shape({
    password: yup.string().required('Обязательно!').min(5),
    confirmPassword: yup.string().required('Обязательно!').oneOf([yup.ref('password'), null], 'Не совпадают пароли'),
    email: yup.string().required('Обязательно!'),
  });
  const onSubmit = (ev) => {
    ev.preventDefault();
    setText({ ...text, errors: {} });
    try {
      scheme.validateSync(text, { abortEarly: false });
    } catch (e) {
      const newErrors = {};
      e.inner.forEach((err) => {
        if (!newErrors[err.path]) {
          newErrors[err.path] = err.message;
        }
      });
      setText({ ...text, errors: newErrors });
    }
  };
  const onChange = (key) => (ev) => {
    setText({ ...text, [key]: ev.target.value });
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label className="form-label" htmlFor="city">
          Ваш город:
        </label>
        <select className="form-element" name="city" id="city">
          {cities.map(({ city }) => <option key={_.uniqueId()} value={city}>{city}</option>)}
        </select>

      </div>
      <hr className="hr-line" />
      <div className="form-row">
        <label className="form-label" htmlFor="password">
          <span>Пароль:</span>
        </label>
        <input className={!text.errors.password ? 'form-element' : 'form-element is-invalid'} name="password" id="password" type="password" value={text.password} onChange={onChange('password')} />
        <p className="form-element-description">Ваш новый пароль должен содержать не менее 5 символов</p>
        {text.errors.password ? <div className="form-error">{text.errors.password}</div> : null}
      </div>
      <div className="form-row m-t-40">
        <label className="form-label" htmlFor="confirmPassword">
          <span>Подтверждение пароля:</span>
        </label>
        <input className={!text.errors.confirmPassword ? 'form-element' : 'form-element is-invalid'} name="confirmPassword" type="password" value={text.confirmPassword} onChange={onChange('confirmPassword')} />
        <p className="form-element-description">Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.</p>
        {text.errors.confirmPassword ? <div className="form-error">{text.errors.confirmPassword}</div> : null}
      </div>
      <hr className="hr-line" />
      <div className="form-row">
        <label className="form-label" htmlFor="email">
          <span>Эл. почта:</span>
        </label>
        <input className={!text.errors.email ? 'form-element' : 'form-element is-invalid'} name="email" type="email" value={text.email} onChange={onChange('email')} />
        <p className="form-element-description">Можно изменить адрес, указанный при регистрации. </p>
        {text.errors.email ? <div className="form-error">{text.errors.email}</div> : null}
      </div>
      <div className="form-row m-t-40">
        <label className="form-label" htmlFor="checkRule">
          Я согласен:
        </label>
        <div className="form-group">
          <input name="checkRule" required type="checkbox" onChange={() => setText({ ...text, rule: !text.rule })} />
          <span className="form-element-description">принимать актуальную информацию на емейл</span>
        </div>
      </div>
      <div className="form-row m-t-40">
        <button type="submit" className="button button-submit">Изменить</button>
        <p className="form-element-description">последние изменения 15 мая 2012 в 14:55:17</p>
      </div>
    </form>
  );
};

export default Form;
