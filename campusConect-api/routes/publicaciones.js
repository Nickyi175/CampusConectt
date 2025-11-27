/**
 * @swagger
 * components:
 *   schemas:
 *     publicaciones:
 *       type: object
 *       required:
 *         - id
 *         - id_usuario
 *         - titulo
 *         - contenido
 *         - categoria
 *         - fecha
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único autogenerado
 *         id_usuario:
 *           type: integer
 *           description: ID del usuario que creó la publicación
 *         titulo:
 *           type: string
 *           description: Título de la publicación
 *         contenido:
 *           type: string
 *           description: Contenido de la publicación
 *         categoria:
 *           type: string
 *           description: Categoría de la publicación
 *         fecha:
 *           type: string
 *           format: date
 *           description: Fecha de creación de la publicación
 */

/**
 * @swagger
 * tags:
 *   - name: publicaciones
 *     description: Endpoints de publicaciones
 *
 * /publicaciones/new:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 description: ID del usuario
 *               titulo:
 *                 type: string
 *                 description: Título de la publicación
 *               contenido:
 *                 type: string
 *                 description: Contenido de la publicación
 *               categoria:
 *                 type: string
 *                 description: Categoría de la publicación
 *               fecha:
 *                 type: string
 *                 format: date
 *                 description: Fecha de creación
 *             required:
 *               - id_usuario
 *               - titulo
 *               - contenido
 *               - categoria
 *               - fecha
 *     responses:
 *       201:
 *         description: Publicación creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/publicaciones'
 *       400:
 *         description: Error en los datos de la publicación
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */

const router = require('express').Router();
const publicacionesCtrl = require('../controllers/publicaciones.js');

router.post('/new', publicacionesCtrl.createNewPublicacion);
router.get('/', publicacionesCtrl.getAllPublicaciones);

module.exports = router;
