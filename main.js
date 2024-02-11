import './style.css';
import Alpine from 'alpinejs';
import app from './js/app';

window.Alpine = Alpine;

Alpine.data('app', app);

Alpine.start();
