// GET /api/favorites - Récupère la liste des bières préférées
import { getConnection } from '../utils/db';

export default defineEventHandler(async (event) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute(
      "SELECT * FROM favorite_beers"
    );
    await connection.end();
    
    return {
      success: true,
      favorites: rows
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to fetch favorites' };
  }
});