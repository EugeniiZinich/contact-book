import { refs } from './refs';
import { save, load, remove } from './local-storage-service';

const formData = {};
const LOCAL_KEY = 'form-data-value';

init();

refs.form.addEventListener('input', onInputValue);
refs.form.addEventListener('submit', onSubmitClick);

function onInputValue(e) {
  formData[e.target.name] = e.target.value;

  save(LOCAL_KEY, formData);
}

function onSubmitClick(e) {
  e.currentTarget.reset();
  remove(LOCAL_KEY);
}

function init() {
  const saveData = load(LOCAL_KEY);

  if (saveData) {
    Object.entries(saveData).forEach(([name, value]) => {
      refs.form.elements[name].value = value;
    });
  }
}
