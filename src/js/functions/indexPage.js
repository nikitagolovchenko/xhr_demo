import $ from 'jquery';


export const ifIndexPage = function() {

    const wait = $('#wait');
    const menu = $('#menu');
    
    $.get('https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts', function(data) {

        $.each(data, (i, val) => {
            const li = $('<li/>').addClass('nav-item');
            const a = $(`<a class="nav-link" href="post${val.id}.html">${val.title}</a>`);
            menu.append(li).append(a);
        });

        wait.addClass('d-none');
    });
}



// export const ifIndexPage = function() {
//     const wait = document.getElementById('wait');
//     const menu = document.getElementById('menu');
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts');
//     xhr.timeout = 5000;
//     xhr.send();
    
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4 && xhr.status === 200) {
//             let data;
//             data = JSON.parse(xhr.response);
            
//             data.forEach((item) => {
//                 const li = document.createElement('li');
//                 const a = document.createElement('a');
                
//                 li.classList.add('nav-item');
//                 a.classList.add('nav-link');
//                 a.setAttribute('href', 'post' + item.id + '.html');
//                 li.appendChild(a);                
//                 menu.appendChild(li);
//                 a.innerHTML = item.title;
//             });
//             wait.classList.add('d-none');
//         }
//     };
// };