import MuiQueryBuilder from "mui-querybuilder";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import MultilineTextFields from "./config";

 
const filters = [
    {
        label: "Article",
        options: [
            {
                label: "Title",
                value: "title",
                type: "text",
            },
            {
                label: "URL",
                value: "url",
                type: "text",
            },
            {
                label: "Word Count",
                value: "word_count",
                type: "integer",
            },
            {
                label: "Rating",
                value: "rating",
                type: "number",
            },
            {
                label: "Is Redirect",
                value: "is_redirect",
                type: "radio",
            },
            {
                label: "Published",
                value: "published",
                type: "switch",
            },
            {
                label: "Updated Date",
                value: "updated_date",
                type: "date",
            },
        ],
    },
    {
        label: "Meta",
        options: [
            {
                label: "User Roles",
                value: "user_roles",
                type: "multiselect",
                options: [
                    {
                        label: "Expert",
                        value: "expert",
                    },
                    {
                        label: "Staff",
                        value: "staff",
                    },
                    {
                        label: "Site Contributor",
                        value: "site_contributor",
                    },
                    {
                        label: "System",
                        value: "system",
                    },
                ],
            },
            {
                label: "Author Status",
                value: "author_status",
                type: "select",
                options: [
                    {
                        label: "Active",
                        value: "active",
                    },
                    {
                        label: "Terminated",
                        value: "terminated",
                    },
                ],
            },
        ],
    },
];



function App() {
    const [query, setQuery] = useState({
        combinator: "and",
        rules: [
            {
                field: "is_redirect",
                operator: "equal",
                value: false,
            },
            {
                field: "updated_date",
                operator: "after_equal",
                value: "2020-08-20",
            },
            {
                field: "title",
                operator: "not_null",
            },
            {
                field: "url",
                operator: "contains",
                value: "France",
            },
            {
                field: "word_count",
                operator: "less",
                value: 420,
            },
            {
                field: "rating",
                operator: "greater",
                value: 4.2,
            },
            {
                combinator: "or",
                rules: [
                    {
                        field: "author_status",
                        operator: "not_equal",
                        value: "terminated",
                    },
                    {
                        field: "user_roles",
                        operator: "in",
                        value: ["expert", "site_contributor", "staff"],
                    },
                ],
            },
        ],
    });

    return (

        <div>
            <MuiQueryBuilder
                filters={filters}
                query={query}
                maxLevels={4}
                onChange={(query, valid) => {
                    setQuery(query);
                }}
            />
            
        </div>
    );
}
//<MultilineTextFields value={filters.map(e=>JSON.stringify(e))} />
ReactDOM.render(<App />, document.getElementById('app'));
