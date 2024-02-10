import './style.css';
import Alpine from 'alpinejs';
import mask from '@alpinejs/mask';
import app from './js/app';

Alpine.plugin(mask);

window.Alpine = Alpine;

Alpine.data('app', app);

Alpine.start();
