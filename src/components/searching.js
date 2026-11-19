import {rules, createComparison} from "../lib/compare.js";


// export function initSearching(searchField) {
//     // @todo: #5.1 — настроить компаратор

//     return (data, state, action) => {
//         // @todo: #5.2 — применить компаратор
//         return data;
//     }
// }

export function initSearching(elements, config) {
    const { searchField, fieldsToSearch } = config;
        // @todo: #5.1 — настроить компаратор  
    const compare = createComparison(
        [
            'skipEmptyTargetValues' // Имя правила как строка
        ], 
        [
            rules.searchMultipleFields(searchField, fieldsToSearch, false)
        ]
    );
            // @todo: #5.2 — применить компаратор
    return (data, state, action) => {
        return data.filter(row => compare(row, state));
    };
} 