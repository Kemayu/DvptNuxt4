import { getConnection } from '../utils/db';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const beerId = body.id;
    
    if (!beerId) {
      return { success: false, error: 'Beer ID is required' };
    }

    const connection = await getConnection();
    const query = "DELETE FROM favorite_beers WHERE id = ?";
    await connection.execute(query, [beerId]);
    await connection.end();
    
    return {
      success: true,
      message: 'Beer removed from favorites'
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to delete favorite' };
  }
});
