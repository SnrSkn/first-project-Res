const container = document.getElementById('urun-container');
        const pagination = document.getElementById('pagination');
        const productsPerPage = 16;
        let currentPage = 1;

        function renderProducts(page) {
            const products = Array.from(container.children);
            products.forEach((product, index) => {
                if (index >= (page - 1) * productsPerPage && index < page * productsPerPage) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
            window.scrollTo({ top: 0});
        }

        function renderPagination() {
            pagination.innerHTML = '';
            const totalPages = Math.ceil(container.children.length / productsPerPage);

            if (currentPage > 1) {
                const prevButton = document.createElement('button');
                prevButton.className = 'page-button';
                prevButton.innerText = 'Önceki';
                prevButton.addEventListener('click', () => {
                    currentPage--;
                    renderProducts(currentPage);
                    renderPagination();
                });
                pagination.appendChild(prevButton);
            }

            const pageInfo = document.createElement('span');
            pageInfo.className = 'page-info';
            pageInfo.innerText = `${currentPage} / ${totalPages}`;
            pagination.appendChild(pageInfo);

            if (currentPage < totalPages) {
                const nextButton = document.createElement('button');
                nextButton.className = 'page-button';
                nextButton.innerText = 'Sonraki';
                nextButton.addEventListener('click', () => {
                    currentPage++;
                    renderProducts(currentPage);
                    renderPagination();
                });
                pagination.appendChild(nextButton);
            }
        }

        renderProducts(currentPage);
        renderPagination();