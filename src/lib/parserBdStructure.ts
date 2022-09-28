import { QueryResult } from 'pg';

export function parserBdStructure(result: QueryResult) {
  if (result.rows?.[0]?.error_) {
    return result.rows[0];
  }
  return result.rows;
}

