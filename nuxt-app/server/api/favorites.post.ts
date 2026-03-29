import { getConnection } from '../utils/db';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const beerId = body.id;
    
    if (!beerId) {
      return { success: false, error: 'Beer ID is required' };
    }

    const connection = await getConnection();
    const query = "INSERT INTO favorite_beers (id, date_added) VALUES (?, NOW())";
    await connection.execute(query, [beerId]);
    await connection.end();
    
    return {
      success: true,
      message: 'Beer added to favorites'
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to add favorite' };
  }
});
