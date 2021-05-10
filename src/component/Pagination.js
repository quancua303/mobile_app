import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];
    var length = Math.ceil(totalProducts / productsPerPage);

    for (var i = 1; i <= length; i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="container">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {pageNumbers.map(number => (
                            <li key={number} className="page-item">
                                <a onClick={() => paginate(number)} className="page-link">
                                    {number}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Pagination
