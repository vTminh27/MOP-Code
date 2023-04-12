document.addEventListener('DOMContentLoaded', function () {
    var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    if(navbarBurgers.length > 0) {
        navbarBurgers.array.forEach(function (item) {
            item.addEventListener('click', function() {
                var target = item.dataset.target;
                var target = document.getElementById(target);

                item.classList.toggle('is-active');
                target.classList.toggle('is-active');
            });
        });
    }
});