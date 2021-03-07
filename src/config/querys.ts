export const queryGetCompany = `SELECT logo, code, id FROM companies WHERE code=?`
export const queryGetGroupsByCompany = `SELECT id, name FROM groups WHERE company_id=?`
export const queryGetDepartmentsByGroups = `SELECT id, name FROM departments WHERE group_id IN (?)`
