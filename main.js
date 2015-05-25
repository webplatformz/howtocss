document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByTagName('a'),
        i;
    
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            var j;
            this.classList.add('selected');
            
            for (j = 0; j < links.length; j++) {
                if (links[j] !== this) {
                    links[j].classList.remove('selected');
                }
            }
        });
    }
});