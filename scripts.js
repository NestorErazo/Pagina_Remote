document.addEventListener('DOMContentLoaded', function() {
    const camiseta = document.querySelector('.camiseta');
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            camiseta.style.backgroundColor = color;
        });
    });
});
/*  
echo "# Pagina_Remote" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/NestorErazo/Pagina_Remote.git
git push -u origin main
*/