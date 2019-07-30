import $ from 'jquery';


export const ifPostPage = function() {

    const cardItem = $('#cardItem');
    const postId = parseInt(
        location.pathname.charAt(location.pathname.search(/[0-9]/))
    );

    $.get(`https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts?id=${postId}`, function(data) {

        const h5 = $(`<h5 class="card-title">${data[0].title}</h5>`);
        const p = $(`<p class="card-text">${data[0].text}</p>`);

        cardItem.append(h5, p);

        wait.classList.add('d-none');
    });
}



// export const ifPostPage = function() {
//     const cardItem = document.getElementById('cardItem');
//     const postId = parseInt(
//         location.pathname.charAt(location.pathname.search(/[0-9]/))
//     );
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', `https://my-json-server.typicode.com/ha100790tag/baseBuildJS/posts?id=${postId}`);
//     xhr.timeout = 5000;
//     xhr.send();
    
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4 && xhr.status === 200) {
//             let data;
//             data = JSON.parse(xhr.response);
            
//             const h5 = document.createElement('h5');
//             const p = document.createElement('p');
            
//             h5.classList.add('card-title');
//             p.classList.add('card-text');
//             h5.innerHTML = data[0].title;
//             p.innerHTML = data[0].text;
            
//             cardItem.appendChild(h5);
//             cardItem.appendChild(p);

//             wait.classList.add('d-none');
//         }
//     };
// };