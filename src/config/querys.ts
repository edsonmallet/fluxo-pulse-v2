export const queryGetCompanyData = `
    SELECT co.logo, co.code, gr.id as group_id, gr.name as group_name, dp.id depto_id , dp.name as depto_name
    FROM companies as co 
    JOIN groups as gr
    ON gr.company_id = co.id
    JOIN departments as dp
    ON dp.group_id = gr.id
    WHERE co.code = ?
`
