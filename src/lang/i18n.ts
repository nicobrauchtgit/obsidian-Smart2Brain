import { init, addMessages } from 'svelte-i18n';

import en from './en.json';
import es from './es.json';
import tr from './tr.json';
// import de from './de.json';

addMessages('en', en);
addMessages('es', es);
addMessages('tr', tr);
// addMessages('de', de);

init({
    fallbackLocale: 'en',
    initialLocale: window.localStorage.getItem('language'),
});
