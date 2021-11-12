
const ONE_THOUSAND = 1000;
const ONE_MILLLION = 1_000_000;
const ONE_BILLLION = 1_000_000_000;
const ONE_TRILLLION = 1_000_000_000_000;
const ONE_QUADRILLLION = 1_000_000_000_000_000;


export const formartNumber = (number) => {
    if (number > ONE_THOUSAND && number < ONE_MILLLION) return number.toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") /*milhão*/
    if (number > ONE_MILLLION) return (number / ONE_MILLLION).toFixed(2).toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Mi"/*milhão*/
    if (number > ONE_BILLLION && number < ONE_TRILLLION) return (number / ONE_BILLLION).toFixed(2).toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Bi"/*bilhão*/
    if (number > ONE_TRILLLION && number < ONE_QUADRILLLION) return (number / ONE_TRILLLION).toFixed(2).toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Tri"/*trilhão*/
    if (number > ONE_QUADRILLLION) return (number / ONE_QUADRILLLION).toFixed(2).toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Quadrilões"/*trilhão*/

    return number;
}


