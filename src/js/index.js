import $ from 'jquery';


import {ifIndexPage} from 'functions/indexPage';
import {ifPostPage} from 'functions/postPage';


$(window).ready(function(){
    const isIndex = location.href.includes('index');
    isIndex ? ifIndexPage() : ifPostPage();
    
});


// window.addEventListener('load', function() {
//     const isIndex = location.href.includes('index');
//     isIndex ? ifIndexPage() : ifPostPage();

